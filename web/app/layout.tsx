import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Radar",
  description: "팀을 위한 최신 AI 트렌드 위키",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="topbar">
          <Link href="/" className="brand">
            📡 AI Radar
          </Link>
          <nav>
            <Link href="/">뉴스레터</Link>
            <Link href="/qa">Q&A</Link>
            <Link href="/wiki">위키</Link>
            <Link href="/agent">Agent 연동</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
