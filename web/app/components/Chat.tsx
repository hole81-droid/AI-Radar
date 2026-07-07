"use client";

import { useState, useRef, useEffect } from "react";

type Source = { title: string; href: string };
type Msg = { role: "user" | "assistant"; text: string; sources?: Source[] };

const SUGGESTIONS = [
  "이번 주 가장 중요한 AI 뉴스는?",
  "Claude Code로 업무 자동화한 사례 알려줘",
  "Sonnet 5가 뭐가 좋아진 거야?",
  "기업 AX 관점에서 최근 주목할 흐름은?",
];

export default function Chat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function ask(question: string) {
    if (!question.trim() || busy) return;
    setMessages((m) => [...m, { role: "user", text: question }]);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/qa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: data.answer ?? data.error ?? "오류가 발생했습니다.",
          sources: data.sources,
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "네트워크 오류가 발생했습니다. 다시 시도해 주세요." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <form
        className="chat-form hero-form"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="예: 최근 에이전트 자동화 사례 중 우리 팀에 적용할 만한 것은?"
          disabled={busy}
        />
        <button className="primary" disabled={busy || !input.trim()}>
          질문
        </button>
      </form>

      {messages.length === 0 && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14, justifyContent: "center" }}>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              className="badge suggestion"
              onClick={() => ask(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="chat" style={{ marginTop: messages.length > 0 ? 24 : 0 }}>
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>
            <div style={{ whiteSpace: "pre-wrap" }}>{m.text}</div>
            {m.sources && m.sources.length > 0 && (
              <div className="sources">
                근거:{" "}
                {m.sources.map((s) => (
                  <a key={s.href} href={s.href}>
                    {s.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        {busy && <div className="msg assistant">위키를 뒤지는 중…</div>}
        <div ref={bottomRef} />
      </div>

      {messages.length > 0 && (
        <p className="hint" style={{ marginTop: 10 }}>
          대화는 저장되지 않습니다. 새로고침하면 사라집니다.
        </p>
      )}
    </div>
  );
}
