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
        <header className="masthead">
          <div className="masthead-row">
            <Link href="/" className="wordmark">AI RADAR</Link>
            <nav className="mast-nav">
              <Link href="/">오늘의 이슈</Link>
              <Link href="/issues">아카이브</Link>
              <Link href="/cases">케이스</Link>
              <Link href="/wiki">위키</Link>
              <Link href="/chat">대화</Link>
            </nav>
          </div>
          <div className="rule-3" />
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-inner">
            <span>AI RADAR — 매일 수집·정리되는 AI 트렌드 위키. Claude가 관리합니다.</span>
            <nav style={{ display: "flex", gap: 14 }}>
              <Link href="/agent">AGENT 연동</Link>
              <Link href="/issues">아카이브</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
