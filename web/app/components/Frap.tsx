"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// 플로팅 원형 대화 버튼 — 홈(대화 화면)에서는 숨긴다
export default function Frap() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/login") return null;
  return (
    <Link href="/" className="frap" aria-label="AI Radar와 대화하기" title="AI Radar와 대화하기">
      💬
    </Link>
  );
}
