import Link from "next/link";
import { latestNewsletter } from "@/lib/content";
import Chat from "./components/Chat";

export default function Home() {
  const latest = latestNewsletter();
  const headline = latest?.body.match(/## 오늘의 헤드라인\n([\s\S]*?)\n##/)?.[1]?.trim();

  return (
    <div className="hero-wrap">
      <section className="hero">
        <h1>
          AI Radar와 <em>대화</em>하세요
        </h1>
        <p className="hero-sub">
          매일 수집·정리되는 최신 AI 트렌드 위키가 근거와 함께 답합니다.
        </p>
        <Chat />
      </section>

      {latest && (
        <Link href={`/newsletter/${latest.slug}`} className="newsletter-card">
          <div>
            <span className="badge">📰 오늘의 뉴스레터</span>
            <strong> {latest.slug}</strong>
          </div>
          {headline && <p>{headline.split("\n")[0]}</p>}
          <span className="more">전체 보기 →</span>
        </Link>
      )}
    </div>
  );
}
