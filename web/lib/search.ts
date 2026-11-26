import { pages, newsletters, type Page } from "./content";

// 단순 키워드 스코어링 검색 — 위키 규모(수십~수백 페이지)에 충분하다.
// 한국어 조사가 붙은 형태도 잡히도록 부분 포함 매칭을 함께 쓴다.

const PARTICLES = /(은|는|이|가|을|를|의|에|에서|으로|로|과|와|도|만|까지|부터|처럼|라는|이라는)$/;

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[\s.,!?;:()\[\]{}"'`~<>|/\\*#+=—·•-]+/)
    .map((t) => t.replace(PARTICLES, ""))
    .filter((t) => t.length >= 2);
}

export type SearchHit = {
  slug: string;
  title: string;
  type: "wiki" | "newsletter";
  score: number;
  snippet: string;
};

function scorePage(tokens: string[], page: Page): number {
  const title = page.title.toLowerCase();
  const body = page.body.toLowerCase();
  const tags = JSON.stringify(page.meta).toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (title.includes(t)) score += 8;
    if (tags.includes(t)) score += 3;
    // 본문 등장 횟수 (상한 5회)
    let idx = 0;
    let count = 0;
    while (count < 5 && (idx = body.indexOf(t, idx)) !== -1) {
      count++;
      idx += t.length;
    }
    score += count;
  }
  return score;
}

function snippetFor(tokens: string[], body: string): string {
  const lower = body.toLowerCase();
  for (const t of tokens) {
    const i = lower.indexOf(t);
    if (i !== -1) {
      const start = Math.max(0, i - 60);
      return (
        (start > 0 ? "…" : "") +
        body.slice(start, i + 140).replace(/\n+/g, " ").trim() +
        "…"
      );
    }
  }
  return body.slice(0, 160).replace(/\n+/g, " ") + "…";
}

export function searchWiki(query: string, limit = 8): SearchHit[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  const candidates: SearchHit[] = [];
  for (const p of pages) {
    const score = scorePage(tokens, p);
    if (score > 0)
      candidates.push({
        slug: p.slug,
        title: p.title,
        type: "wiki",
        score,
        snippet: snippetFor(tokens, p.body),
      });
  }
  for (const n of newsletters) {
    const score = scorePage(tokens, n) * 0.7; // 뉴스레터는 위키 페이지보다 낮게
    if (score > 0)
      candidates.push({
        slug: n.slug,
        title: `뉴스레터 ${n.slug}`,
        type: "newsletter",
        score,
        snippet: snippetFor(tokens, n.body),
      });
  }
  return candidates.sort((a, b) => b.score - a.score).slice(0, limit);
}
