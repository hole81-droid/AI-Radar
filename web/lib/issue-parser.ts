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

// 섹션 제목 → 종류. "업무 적용 Case"(2026-08-19~)와 구 표기 "에이전트 구축…★최우선"을 모두 받는다.
const KIND_RULES: [RegExp, SectionKind][] = [
  [/적용\s*case|use\s*case|에이전트/i, "agent"],
  [/빅 뉴스/, "news"],
  [/커뮤니티/, "community"],
  [/youtube/i, "youtube"],
];

const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;

// 표시용 다듬기.
// ① 문장 사이 em dash를 콜론으로 (2026-07-09 사용자 지정: "—"는 가독성이 떨어짐)
// ② 구 표기 "★최우선"을 "업무 적용 Case"로 (2026-08-19 사용자 지정). 과거 뉴스레터 원본은
//    기록으로 보존하고 화면에만 치환한다 — 신규 뉴스레터는 애초에 이 표현을 쓰지 않는다.
export function prettify(text: string): string {
  return text
    .replace(/★\s*최우선/g, "업무 적용 Case")
    .replace(/\s+—\s+/g, ": ");
}

// YouTube 링크 → 영상 ID (썸네일용). 못 찾으면 undefined.
export function youtubeId(url: string): string | undefined {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?(?:[^#]*&)?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/
  );
  return m?.[1];
}

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
    const summary = prettify(
      rest
        .replace(/^\s*[—–-]\s*/, "")
        .replace(/[\s·]+$/g, "")
        .trim()
    );

    const fields: IssueItem["fields"] = [];
    for (const line of lines.slice(1)) {
      const m = line.match(/^\s+-\s+\*\*(.+?)\*\*:\s*(.*)$/);
      if (m) fields.push({ label: m[1].trim(), value: prettify(m[2].trim()) });
    }
    return { title: prettify(title), summary, links, fields };
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
        .map((s) => prettify(s.trim()))
        .filter((s) => s && !s.startsWith("("));
      continue;
    }
    if (/AX/.test(rawTitle)) {
      ax = prettify(content.split(/\n---/)[0].trim());
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
