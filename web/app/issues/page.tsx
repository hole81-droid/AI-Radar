import Link from "next/link";
import { listIssues } from "@/lib/issues";

export default function IssuesPage() {
  const issues = listIssues();
  return (
    <div>
      <h1 className="page-title">아카이브</h1>
      <p className="page-meta">발행된 모든 호 — 최신순</p>
      <div className="archive-grid">
        {issues.map((i) => (
          <Link key={i.date} href={`/issues/${i.date}`} className="archive-card">
            <div className="issue-strip" style={{ padding: 0 }}>
              <span className="issue-no num">NO. {i.no}</span>
              <span className="issue-date num">{i.date}</span>
            </div>
            <h2>{i.headline}</h2>
            {i.counts && <p className="counts num">{i.counts}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}
