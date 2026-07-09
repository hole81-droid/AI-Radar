import Link from "next/link";
import Markdown from "@/lib/Markdown";
import AskButton from "./AskButton";
import type { Issue } from "@/lib/issues";
import type { IssueItem, IssueSection } from "@/lib/issue-parser";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

function fmtDate(date: string): string {
  const d = new Date(`${date}T00:00:00+09:00`);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${WEEKDAYS[d.getDay()]}요일`;
}

function ItemActions({ item, issue, section }: { item: IssueItem; issue: Issue; section: IssueSection }) {
  return (
    <div className="item-actions">
      {item.links.map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="ln">
          원문 — {l.label}
        </a>
      ))}
      {item.wikiSlug && (
        <Link href={`/wiki/${item.wikiSlug}`} className="ln">관련 위키</Link>
      )}
      <AskButton context={`[NO. ${issue.no} · ${section.title}] '${item.title}'`} />
    </div>
  );
}

export default function IssueView({ issue }: { issue: Issue }) {
  if (issue.fallback) {
    return (
      <article className="article" style={{ margin: "0 auto" }}>
        <div className="issue-strip">
          <span className="issue-no num">NO. {issue.no}</span>
          <span className="issue-date num">{fmtDate(issue.date)}</span>
        </div>
        <Markdown>{issue.body}</Markdown>
      </article>
    );
  }

  return (
    <article>
      <div className="issue-strip">
        <span className="issue-no num">NO. {issue.no}</span>
        <span className="issue-date num">{fmtDate(issue.date)} · 데일리 브리핑</span>
      </div>

      {issue.headline.length > 0 && (
        <header className="lead" style={{ borderBottom: "1px solid var(--ink)" }}>
          <h1>{issue.headline[0]}</h1>
          {issue.headline.length > 1 && <p>{issue.headline.slice(1).join(" ")}</p>}
        </header>
      )}

      {issue.sections.map((section, si) => (
        <section key={section.title}>
          <div className={`section-head ${si > 0 ? "rule-1" : ""}`}>
            <span className="section-no num">{String(si + 1).padStart(2, "0")}</span>
            <span className="label">{section.title}</span>
          </div>

          {section.kind === "agent" ? (
            section.items.map((item) => (
              <div className="item-card" key={item.title}>
                <p className="item-title">{item.title}</p>
                {item.summary && <p className="item-summary">{item.summary}</p>}
                {item.fields.length > 0 && (
                  <table className="item-fields">
                    <tbody>
                      {item.fields.map((f) => (
                        <tr key={f.label}>
                          <td>{f.label}</td>
                          <td>{f.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <ItemActions item={item} issue={issue} section={section} />
              </div>
            ))
          ) : (
            <div className="item-grid">
              {section.items.map((item) => (
                <div className="grid-item" key={item.title}>
                  <p className="item-title" style={{ fontSize: 14 }}>{item.title}</p>
                  {item.summary && <p className="item-summary">{item.summary}</p>}
                  <ItemActions item={item} issue={issue} section={section} />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {issue.ax && (
        <aside className="ax-box">
          <span className="label label-red">AX 시사점</span>
          <p>{issue.ax}</p>
        </aside>
      )}

      <nav className="issue-foot rule-3">
        <span>
          {issue.prev && (
            <Link href={`/issues/${issue.prev.date}`} className="ln">
              ← NO. {issue.prev.no} ({issue.prev.date})
            </Link>
          )}
        </span>
        <span style={{ display: "flex", gap: 16 }}>
          {issue.next && (
            <Link href={`/issues/${issue.next.date}`} className="ln">
              NO. {issue.next.no} →
            </Link>
          )}
          <Link href="/issues" className="ln">아카이브 전체 보기</Link>
        </span>
      </nav>
    </article>
  );
}
