// 채팅 히스토리 — localStorage. 팀 공유 계정이므로 서버 저장 없음(스펙 §5).

export type ChatSource = { title: string; href: string };
export type ChatMsg = { role: "user" | "assistant"; content: string; sources?: ChatSource[] };
export type Conversation = { id: string; title: string; messages: ChatMsg[]; updatedAt: number };

const KEY = "air.chats.v1";
const MAX_CONVERSATIONS = 20;

export function titleFrom(text: string): string {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > 40 ? t.slice(0, 40) + "…" : t;
}

export function upsertConversation(list: Conversation[], conv: Conversation): Conversation[] {
  return [conv, ...list.filter((c) => c.id !== conv.id)]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, MAX_CONVERSATIONS);
}

export function loadConversations(): Conversation[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveConversations(list: Conversation[]): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    // 저장 실패(용량 등)는 무시 — 대화는 메모리에서 계속된다
  }
}
