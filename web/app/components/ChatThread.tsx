"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Markdown from "@/lib/Markdown";
import {
  loadConversations, saveConversations, upsertConversation, titleFrom,
  type Conversation, type ChatMsg,
} from "@/lib/chat-store";

const SUGGESTIONS = [
  "이번 주 가장 중요한 AI 뉴스는?",
  "Claude Code로 업무 자동화한 사례 알려줘",
  "기업 AX 관점에서 최근 주목할 흐름은?",
];

function newConversation(): Conversation {
  return { id: crypto.randomUUID(), title: "새 대화", messages: [], updatedAt: Date.now() };
}

export default function ChatThread({
  compact = false,
  pendingQuestion,
  onConsumePending,
}: {
  compact?: boolean;
  pendingQuestion?: string | null;
  onConsumePending?: () => void;
}) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [current, setCurrent] = useState<Conversation>(newConversation);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(current);
  currentRef.current = current;

  useEffect(() => {
    const list = loadConversations();
    setConversations(list);
    if (list[0]?.messages.length) setCurrent(list[0]);
  }, []);

  // save=false: 스트리밍 델타마다 화면만 갱신(토큰마다 localStorage 직렬화 방지).
  // save=true: 사용자 턴 확정·응답 완료 시점에만 디스크에 기록.
  const persist = useCallback((conv: Conversation, save = true) => {
    setCurrent(conv);
    setConversations((list) => {
      const next = upsertConversation(list, conv);
      if (save) saveConversations(next);
      return next;
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [current.messages, busy]);

  const send = useCallback(async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    setInput("");
    setBusy(true);

    const base = currentRef.current;
    let conv: Conversation = {
      ...base,
      title: base.messages.length === 0 ? titleFrom(q) : base.title,
      messages: [...base.messages, { role: "user", content: q } as ChatMsg, { role: "assistant", content: "" } as ChatMsg],
      updatedAt: Date.now(),
    };
    persist(conv);

    const patchLast = (patch: Partial<ChatMsg>, save = false) => {
      const msgs = [...conv.messages];
      msgs[msgs.length - 1] = { ...msgs[msgs.length - 1], ...patch };
      conv = { ...conv, messages: msgs, updatedAt: Date.now() };
      persist(conv, save);
    };

    try {
      const res = await fetch("/api/qa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stream: true,
          messages: conv.messages.slice(0, -1).map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const frames = buf.split("\n\n");
        buf = frames.pop() ?? "";
        for (const frame of frames) {
          if (!frame.startsWith("data: ")) continue;
          const data = frame.slice(6);
          if (data === "[DONE]") continue;
          const evt = JSON.parse(data);
          if (evt.type === "text") {
            acc += evt.text;
            patchLast({ content: acc }); // save=false: 화면만 갱신
          } else if (evt.type === "sources") {
            patchLast({ sources: evt.sources }, true);
          } else if (evt.type === "error") {
            patchLast({ content: acc ? `${acc}\n\n${evt.message}` : evt.message }, true);
          }
        }
      }
    } catch {
      patchLast({ content: "네트워크 오류가 발생했습니다. 다시 시도해 주세요." }, true);
    } finally {
      // 스트림이 sources 없이 끝난 경우에도 최종 상태를 디스크에 남긴다.
      persist(conv, true);
      setBusy(false);
    }
  }, [busy, persist]);

  useEffect(() => {
    if (pendingQuestion) {
      onConsumePending?.();
      send(pendingQuestion);
    }
  }, [pendingQuestion, onConsumePending, send]);

  function startNew() {
    if (busy) return;
    setCurrent(newConversation());
  }

  function switchTo(c: Conversation, details: HTMLDetailsElement | null) {
    if (busy) return;
    setCurrent(c);
    if (details) details.open = false;
  }

  return (
    <div className="chat-frame">
      <div className="chat-head">
        <span className="label">대화 — AI RADAR</span>
        <span style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {!compact && conversations.length > 0 && (
            <details style={{ position: "relative" }}>
              <summary className="hint" style={{ cursor: "pointer", listStyle: "none" }}>최근 대화 ▾</summary>
              <div style={{
                position: "absolute", right: 0, top: "120%", zIndex: 5, background: "#fff",
                border: "1px solid var(--ink)", minWidth: 260, maxHeight: 300, overflowY: "auto",
              }}>
                {conversations.map((c) => (
                  <button
                    key={c.id}
                    disabled={busy}
                    onClick={(e) => switchTo(c, e.currentTarget.closest("details"))}
                    style={{
                      display: "block", width: "100%", textAlign: "left", padding: "8px 12px",
                      background: "none", border: "none", borderBottom: "1px solid var(--hairline)",
                      fontSize: 12.5, cursor: busy ? "default" : "pointer", fontFamily: "inherit",
                    }}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </details>
          )}
          <button className="ask-btn" onClick={startNew}>+ 새 대화</button>
        </span>
      </div>

      <div className="chat-scroll" ref={scrollRef}>
        {current.messages.length === 0 && (
          <div>
            <p className="hint">궁금한 것을 물어보세요 — 위키가 근거와 함께 답합니다.</p>
            <div className="suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="tag" onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          </div>
        )}
        {current.messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="bubble-user">{m.content}</div>
          ) : (
            <div key={i} className="bubble-ai">
              {m.content ? <Markdown>{m.content}</Markdown> : <span className="typing">답변 작성 중…</span>}
              {m.sources && m.sources.length > 0 && (
                <div className="src-chips">
                  {m.sources.map((s, si) => (
                    <a key={s.href} href={s.href}>{si + 1} {s.title}</a>
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>

      <div className="chat-inputbar">
        <form onSubmit={(e) => { e.preventDefault(); send(input); }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="궁금한 것을 물어보세요"
            disabled={busy}
          />
          <button className="btn btn-red" disabled={busy || !input.trim()}>전송</button>
        </form>
        <p className="chat-hint">대화는 이 브라우저에 저장됩니다 · Enter 전송</p>
      </div>
    </div>
  );
}
