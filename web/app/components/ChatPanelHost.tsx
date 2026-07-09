"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import ChatThread from "./ChatThread";
import { askRadar } from "./AskButton";

export function AskOpenButton() {
  return (
    <button className="ask-btn" onClick={() => askRadar("")}>질문 ↗</button>
  );
}

export default function ChatPanelHost() {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<string | null>(null);

  useEffect(() => {
    function onAsk(e: Event) {
      const q = (e as CustomEvent<{ question: string }>).detail?.question ?? "";
      setOpen(true);
      if (q.trim()) setPending(q);
    }
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement;
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(t.tagName) && !t.isContentEditable) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("air:ask", onAsk);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("air:ask", onAsk);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const consume = useCallback(() => setPending(null), []);

  if (!open) return null;
  return (
    <>
      <div className="panel-overlay" onClick={() => setOpen(false)} />
      <div className="panel" role="dialog" aria-label="AI Radar에 질문">
        <div className="chat-head" style={{ borderBottom: "1px solid var(--hairline)" }}>
          <Link href="/chat" className="ln" style={{ fontSize: 12 }} onClick={() => setOpen(false)}>
            크게 보기 → /chat
          </Link>
          <button className="ask-btn" onClick={() => setOpen(false)}>닫기 ✕</button>
        </div>
        <ChatThread compact pendingQuestion={pending} onConsumePending={consume} />
      </div>
    </>
  );
}
