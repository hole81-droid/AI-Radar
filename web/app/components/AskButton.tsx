"use client";

export function askRadar(question: string) {
  window.dispatchEvent(new CustomEvent("air:ask", { detail: { question } }));
}

export default function AskButton({ context }: { context: string }) {
  return (
    <button className="ask-item" onClick={() => askRadar(`${context} 항목에 대해 더 자세히 알려줘`)}>
      더 알아보기 ↗
    </button>
  );
}
