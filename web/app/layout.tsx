import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Frap from "./components/Frap";

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
            <span className="brand-dot">📡</span> AI Radar
          </Link>
          <nav>
            <Link href="/">AI Radar 대화하기</Link>
            <Link href="/newsletter">뉴스레터</Link>
            <Link href="/cases">케이스</Link>
            <Link href="/wiki">위키</Link>
            <Link href="/agent">Agent 연동</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-inner">
            <div>
              <strong>📡 AI Radar</strong>
              매일 수집·정리되는 최신 AI 트렌드 위키.
              <br />
              Claude가 관리하고, 근거와 함께 답합니다.
            </div>
            <nav>
              <Link href="/newsletter">뉴스레터</Link>
              <Link href="/cases">케이스</Link>
              <Link href="/wiki">위키</Link>
              <Link href="/agent">Agent 연동</Link>
            </nav>
          </div>
        </footer>
        <Frap />
      </body>
    </html>
  );
}
