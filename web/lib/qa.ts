import Anthropic from "@anthropic-ai/sdk";
import { searchWiki, type SearchHit } from "./search";
import { getPage, getNewsletter, wikiIndex, pages } from "./content";

// 에이전트·자동화 케이스 카탈로그 — 강의 설계·AX 질문의 품질을 위해 항상 컨텍스트에 포함한다.
// 각 줄: 도구 × 방식 × 업무 → 성과 + 벤치마크 요약 (A-B-C-D 공식)
function caseCatalog(): string {
  const s = (v: string | string[] | undefined) =>
    !v ? "" : Array.isArray(v) ? v.join(",") : v;
  const lines = pages
    .filter((p) => p.meta.type === "use-case")
    .map(
      (p) =>
        `- [${s(p.meta.domain) || "기타"}] ${p.title} :: 도구=${s(p.meta.tools)} | 방식=${s(p.meta.mechanism)} | 업무=${s(p.meta.task)} | 성과=${s(p.meta.outcome)} | 모델=${s(p.meta.model) || "미확인"} | 비용=${s(p.meta.cost) || "미확인"} | 권한=${s(p.meta.permissions) || "미확인"} | slug=${p.slug}`
    );
  return lines.join("\n").slice(0, 8000);
}

export type QaResult = {
  answer: string;
  sources: { title: string; href: string }[];
};

const MAX_CONTEXT_CHARS = 6000; // 페이지당 컨텍스트 상한
const MAX_PAGES = 4;

// 서버리스 인스턴스별 best-effort 일일 카운터 (콜드 스타트 시 리셋됨 — 대략적 상한)
let counterDate = "";
let counterCount = 0;

function underDailyLimit(): boolean {
  const limit = Number(process.env.QA_DAILY_LIMIT || 200);
  const today = new Date().toISOString().slice(0, 10);
  if (counterDate !== today) {
    counterDate = today;
    counterCount = 0;
  }
  return counterCount++ < limit;
}

function contextFor(hits: SearchHit[]): { text: string; sources: QaResult["sources"] } {
  const parts: string[] = [];
  const sources: QaResult["sources"] = [];
  for (const hit of hits.slice(0, MAX_PAGES)) {
    const page = hit.type === "wiki" ? getPage(hit.slug) : getNewsletter(hit.slug);
    if (!page) continue;
    const href = hit.type === "wiki" ? `/wiki/${hit.slug}` : `/newsletter/${hit.slug}`;
    sources.push({ title: hit.title, href });
    parts.push(
      `<page slug="${hit.slug}" title="${hit.title}">\n${page.body.slice(0, MAX_CONTEXT_CHARS)}\n</page>`
    );
  }
  return { text: parts.join("\n\n"), sources };
}

export async function answerQuestion(question: string): Promise<QaResult> {
  if (!process.env.ANTHROPIC_API_KEY) {
    return {
      answer:
        "관리자가 아직 Anthropic API 키를 설정하지 않아 Q&A를 사용할 수 없습니다. 뉴스레터와 위키 열람은 정상 동작합니다.",
      sources: [],
    };
  }
  if (!underDailyLimit()) {
    return {
      answer: "오늘의 Q&A 사용 한도에 도달했습니다. 내일 다시 시도해 주세요.",
      sources: [],
    };
  }

  const hits = searchWiki(question, MAX_PAGES + 2);
  const { text: context, sources } = contextFor(hits);

  const client = new Anthropic();
  const response = await client.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 4000,
    system: [
      "당신은 'AI Radar' 위키의 사서다. 팀원의 최신 AI 트렌드 질문에 위키 내용을 근거로 한국어로 답한다.",
      "규칙:",
      "- 제공된 위키 페이지 내용만 근거로 답하고, 근거가 된 페이지 제목을 답변에 자연스럽게 언급한다.",
      "- 위키에 없는 내용은 추측하지 말고 '위키에 아직 수집되지 않았다'고 답한다.",
      "- 간결하게: 핵심 답 → 필요한 보충 순서. 불릿은 필요할 때만.",
      "",
      "아래는 위키의 인덱스(전체 목차), 에이전트·자동화 케이스 카탈로그, 그리고 질문과 관련해 검색된 페이지들이다.",
      "케이스 카탈로그는 '도구로 방식을 활용해 업무를 수행 → 성과' 공식으로 정리되어 있다.",
      "강의 소재·자동화 사례·AX 근거 질문에는 카탈로그에서 조건에 맞는 케이스를 고르고,",
      "벤치마크(모델·비용·권한)를 함께 제시하라. '미확인' 필드는 미확인이라고 정직하게 말하라.",
      `<index>\n${wikiIndex.slice(0, 3000)}\n</index>`,
      `<case-catalog>\n${caseCatalog()}\n</case-catalog>`,
      context ? context : "(검색된 페이지 없음)",
    ].join("\n"),
    messages: [{ role: "user", content: question }],
  });

  let answer = response.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("\n");

  if (response.stop_reason === "max_tokens") {
    answer +=
      "\n\n*(답변이 길이 제한에 걸려 여기서 잘렸습니다 — 범위를 좁혀 다시 질문해 주세요.)*";
  }

  return { answer, sources };
}
