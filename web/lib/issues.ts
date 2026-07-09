import { newsletters, pages } from "./content";
import { parseIssueBody, matchWiki, type ParsedIssue } from "./issue-parser";

export type Issue = ParsedIssue & {
  date: string;
  no: number;
  body: string;
  prev?: { date: string; no: number };
  next?: { date: string; no: number };
};

// newsletters는 최신 먼저 정렬돼 있다. 호수는 발행 순(오래된 것이 NO.1).
const ordered = [...newsletters].map((n) => n.slug).sort();

export function issueNo(date: string): number {
  return ordered.indexOf(date) + 1;
}

export function listIssues(): { date: string; no: number; headline: string; counts: string }[] {
  return newsletters.map((n) => {
    const parsed = parseIssueBody(n.body);
    return {
      date: n.slug,
      no: issueNo(n.slug),
      headline: parsed.headline[0] ?? n.title,
      counts: parsed.sections
        .map((s) => `${s.title.split(" · ")[0]} ${s.items.length}`)
        .join(" · "),
    };
  });
}

export function getIssue(date: string): Issue | undefined {
  const n = newsletters.find((x) => x.slug === date);
  if (!n) return undefined;
  const parsed = parseIssueBody(n.body);
  for (const s of parsed.sections)
    for (const item of s.items) item.wikiSlug = matchWiki(item, pages)?.slug;
  const i = ordered.indexOf(date);
  return {
    ...parsed,
    date,
    no: i + 1,
    body: n.body,
    prev: i > 0 ? { date: ordered[i - 1], no: i } : undefined,
    next: i < ordered.length - 1 ? { date: ordered[i + 1], no: i + 2 } : undefined,
  };
}

export function latestIssueDate(): string | undefined {
  return newsletters[0]?.slug;
}
