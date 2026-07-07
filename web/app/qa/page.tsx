import { redirect } from "next/navigation";

// 대화는 홈(Hero)으로 승격됨 — 기존 /qa 링크 호환용 리다이렉트
export default function QaRedirect() {
  redirect("/");
}
