// 뉴스레터 마크다운 → 구조화 이슈. CLAUDE.md의 뉴스레터 템플릿에 맞춘 관용 파서.
// 템플릿과 어긋나면 fallback=true — 렌더 측은 마크다운 폴백을 쓴다.

export type IssueLink = { label: string; url: string };
export type IssueItem = {
  title: string;
  summary: string;
  links: IssueLink[];
  fields: { label: string; value: string }[];
  wikiSlug?: string;
};
export type SectionKind = "agent" | "news" | "community" | "youtube" | "other";
export type IssueSection = { kind: SectionKind; title: string; items: IssueItem[] };
export type ParsedIssue = {
  headline: string[];
  sections: IssueSection[];
  ax: string;
  fallback: boolean;
};

const KIND_RULES: [RegExp, SectionKind][] = [
  [/에이전트/, "agent"],
  [/빅 뉴스/, "news"],
  [/커뮤니티/, "community"],
  [/youtube/i, "youtube"],
];

const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;

function parseItems(content: string): IssueItem[] {
  const chunks = content.split(/\n(?=- \[[ x]\] )/).filter((c) => c.startsWith("- ["));
  return chunks.map((chunk) => {
    const lines = chunk.split("\n");
    const first = lines[0].replace(/^- \[[ x]\]\s*/, "");
    const titleMatch = first.match(/\*\*(.+?)\*\*/);
    const title = titleMatch ? titleMatch[1].trim() : first.slice(0, 80);
    let rest = titleMatch ? first.slice(first.indexOf(titleMatch[0]) + titleMatch[0].length) : first;

    const links: IssueLink[] = [];
    rest = rest.replace(LINK_RE, (_, label, url) => {
      links.push({ label, url });
      return "";
    });
    const summary = rest
      .replace(/^\s*[—–-]\s*/, "")
      .replace(/[\s·]+$/g, "")
      .trim();

    const fields: IssueItem["fields"] = [];
    for (const line of lines.slice(1)) {
      const m = line.match(/^\s+-\s+\*\*(.+?)\*\*:\s*(.*)$/);
      if (m) fields.push({ label: m[1].trim(), value: m[2].trim() });
    }
    return { title, summary, links, fields };
  });
}

export function parseIssueBody(body: string): ParsedIssue {
  let headline: string[] = [];
  const sections: IssueSection[] = [];
  let ax = "";

  for (const block of body.split(/\n(?=## )/)) {
    const m = block.match(/^## +(.+?)\s*\n([\s\S]*)$/);
    if (!m) continue;
    const rawTitle = m[1].trim();
    const content = m[2].trim();
    if (/헤드라인/.test(rawTitle)) {
      headline = content
        .split(/\n+/)
        .map((s) => s.trim())
        .filter((s) => s && !s.startsWith("("));
      continue;
    }
    if (/AX/.test(rawTitle)) {
      ax = content.split(/\n---/)[0].trim();
      continue;
    }
    const title = rawTitle.replace(/\s*★.*$/, "").trim();
    const kind = KIND_RULES.find(([re]) => re.test(title))?.[1] ?? "other";
    const items = parseItems(content);
    if (items.length > 0) sections.push({ kind, title, items });
  }

  return { headline, sections, ax, fallback: headline.length === 0 && sections.length === 0 };
}

export type WikiPageLite = { slug: string; title: string; meta: Record<string, unknown> };

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[\s.,!?;:()\[\]{}"'`~<>|/\\*#+=—·•-]+/)
    .filter((t) => t.length >= 2);
}

export function matchWiki(item: IssueItem, pages: WikiPageLite[]): WikiPageLite | undefined {
  for (const link of item.links) {
    const hit = pages.find((p) => {
      const src = p.meta.source;
      return typeof src === "string" && src.startsWith("http") &&
        (link.url.startsWith(src) || src.startsWith(link.url));
    });
    if (hit) return hit;
  }
  const itemTokens = new Set(tokens(item.title));
  let best: WikiPageLite | undefined;
  let bestScore = 0;
  for (const p of pages) {
    const pt = tokens(p.title);
    if (pt.length === 0) continue;
    const overlap = pt.filter((t) => itemTokens.has(t)).length;
    const score = overlap / pt.length;
    if (overlap >= 2 && score > bestScore) { best = p; bestScore = score; }
  }
  return bestScore >= 0.5 ? best : undefined;
}
