# AI Radar 웹 전면 재설계 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 웹을 "매거진 홈(오늘의 이슈) + 어디서나 열리는 채팅 패널" 구조로 재구축하고 B1 인터내셔널(흑백+레드) 디자인 시스템과 PRD/DESIGN/CLAUDE 문서 체계를 갖춘다.

**Architecture:** Next.js 15 App Router(기존 유지). 뉴스레터 마크다운을 순수 파서(`lib/issue-parser.ts`)로 구조화해 서버 컴포넌트에서 매거진 렌더, 파싱 실패 시 마크다운 폴백. 채팅은 localStorage 저장소 + SSE 스트리밍 `/api/qa` + 공용 스레드 컴포넌트(전용 페이지·슬라이드 패널 겸용). 스펙: `docs/superpowers/specs/2026-07-09-web-redesign-design.md`.

**Tech Stack:** Next.js 15 / React 19 / TypeScript, @anthropic-ai/sdk(스트리밍), react-markdown, node:test + tsx(파서 테스트). CSS는 `globals.css` 단일 파일(프레임워크 없음).

---

## 사전 지식 (실행 전 필독)

- 작업 루트: `/Users/sh/Desktop/AI Radar` (이하 상대경로). 웹 앱은 `web/`.
- 개발 서버: `cd web && npm run dev` → `http://localhost:3300`. `predev`가 `scripts/build-content.mjs`를 실행해 `wiki/`·`newsletter/` 마크다운을 `web/lib/content.generated.json`으로 직렬화한다. **뉴스레터 마크다운 원문은 수정 금지**(raw/·newsletter/는 위키 규칙상 원본).
- 전 페이지는 공유 암호 세션(미들웨어)으로 보호된다. 브라우저 검증 시 로그인 암호는 `web/.env.local`의 `SITE_PASSWORD`(현재 `radar-test`). curl로 API를 칠 때는 세션 쿠키가 필요하다:
  ```bash
  cd web && COOKIE=$(node -e '
  const c=require("crypto");
  const fs=require("fs");
  const env=Object.fromEntries(fs.readFileSync(".env.local","utf8").split("\n").filter(Boolean).map(l=>l.split("=")));
  console.log(c.createHmac("sha256",env.AUTH_SECRET).update(env.SITE_PASSWORD).digest("hex"));')
  # 사용: curl -H "Cookie: air_session=$COOKIE" ...
  ```
- 현재 상태: 직전 세션에서 스타벅스 디자인이 임시 적용됨(`globals.css`, `layout.tsx`, `app/components/Frap.tsx`, feature-band 등). **이번 계획이 이를 전부 대체한다.**
- 커밋은 태스크마다. 커밋 메시지 끝에 `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.

---

### Task 1: B1 디자인 토큰 + 글로벌 레이아웃

**Files:**
- Modify(전면 재작성): `web/app/globals.css`
- Modify(전면 재작성): `web/app/layout.tsx`
- Delete: `web/app/components/Frap.tsx`

- [ ] **Step 1: globals.css 전면 재작성**

```css
/* ============================================================
   AI Radar — B1 "International" design system
   paper white · ink black · red point · rule hierarchy
   스펙: docs/superpowers/specs/2026-07-09-web-redesign-design.md §7
   ============================================================ */

:root {
  --paper: #ffffff;
  --ink: #111111;
  --red: #e63329;
  --body: #333333;
  --soft: #555555;
  --faint: #888888;
  --hairline: #e5e5e5;
  --wash: #f7f7f7;
  color-scheme: light;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--paper);
  color: var(--body);
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    "Pretendard", "Noto Sans KR", "Segoe UI", sans-serif;
  line-height: 1.7;
  font-size: 16px;
}

a { color: inherit; text-decoration: none; }
.ln { border-bottom: 1px solid var(--ink); padding-bottom: 1px; }
.ln:hover { color: var(--red); border-color: var(--red); }

h1, h2, h3 { color: var(--ink); letter-spacing: -0.02em; line-height: 1.3; }

.label {
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--ink);
  font-weight: 500;
}
.label-red { color: var(--red); }
.num { font-variant-numeric: tabular-nums; }

/* ---------- rules (괘선 위계) ---------- */
.rule-3 { border-top: 3px solid var(--ink); }
.rule-1 { border-top: 1px solid var(--ink); }
.rule-h { border-top: 1px solid var(--hairline); }

/* ---------- masthead ---------- */
.masthead { max-width: 1020px; margin: 0 auto; padding: 18px 24px 0; }
.masthead-row {
  display: flex; justify-content: space-between; align-items: baseline;
  flex-wrap: wrap; gap: 8px 16px; padding-bottom: 10px;
}
.wordmark { font-size: 20px; font-weight: 700; letter-spacing: 0.16em; color: var(--ink); }
.mast-nav { display: flex; gap: 20px; align-items: baseline; flex-wrap: wrap; }
.mast-nav a { font-size: 13px; letter-spacing: 0.08em; color: var(--ink); }
.mast-nav a:hover { color: var(--red); }
.ask-btn {
  font-size: 13px; letter-spacing: 0.08em; color: var(--red);
  background: none; border: 1px solid var(--red); padding: 4px 14px;
  cursor: pointer; font-family: inherit;
}
.ask-btn:hover { background: var(--red); color: #fff; }

main { max-width: 1020px; margin: 0 auto; padding: 0 24px 72px; }

/* ---------- buttons ---------- */
.btn {
  font-family: inherit; font-size: 13px; cursor: pointer;
  padding: 8px 18px; border: 1px solid var(--ink);
  background: var(--paper); color: var(--ink);
}
.btn:hover { background: var(--ink); color: #fff; }
.btn-red { background: var(--red); border-color: var(--red); color: #fff; }
.btn-red:hover { background: #c22014; border-color: #c22014; }
.btn:disabled { opacity: 0.4; cursor: default; }

/* ---------- issue (매거진) ---------- */
.issue-strip {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 8px 0 0; flex-wrap: wrap; gap: 4px 12px;
}
.issue-no { font-size: 13px; letter-spacing: 0.14em; color: var(--red); font-weight: 500; }
.issue-date { font-size: 12px; letter-spacing: 0.1em; color: var(--soft); }

.lead { padding: 20px 0 18px; }
.lead h1 { font-size: 32px; font-weight: 600; margin: 0; }
.lead p { font-size: 15px; color: var(--soft); margin: 12px 0 0; max-width: 720px; }
@media (max-width: 640px) { .lead h1 { font-size: 24px; } }

.section-head {
  display: flex; align-items: baseline; gap: 10px;
  padding: 12px 0 0; margin-top: 8px;
}
.section-no { font-size: 15px; font-weight: 600; color: var(--red); }

.item-card { border: 1px solid var(--hairline); padding: 16px 18px; margin-top: 12px; }
.item-card + .item-card { margin-top: -1px; }
.item-title { font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; line-height: 1.45; }
.item-summary { font-size: 13.5px; color: var(--soft); margin: 6px 0 0; }
.item-fields { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px; }
.item-fields td { padding: 3px 0; vertical-align: top; }
.item-fields td:first-child {
  color: var(--faint); width: 92px; letter-spacing: 0.06em; font-size: 12px;
  padding-right: 10px; white-space: nowrap;
}
.item-actions { display: flex; gap: 16px; align-items: center; margin-top: 12px; flex-wrap: wrap; }
.item-actions a, .item-actions span.src { font-size: 12.5px; }
.ask-item {
  margin-left: auto; font-size: 12px; background: var(--red); color: #fff;
  border: none; padding: 5px 12px; cursor: pointer; font-family: inherit;
}
.ask-item:hover { background: #c22014; }

.item-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 20px; margin-top: 12px; }
@media (max-width: 800px) { .item-grid { grid-template-columns: 1fr; } }
.grid-item { padding: 10px 0; border-top: 1px solid var(--hairline); font-size: 14px; }
.grid-item .item-summary { font-size: 12.5px; }

.ax-box { background: var(--wash); border-left: 3px solid var(--red); padding: 14px 18px; margin-top: 24px; }
.ax-box p { margin: 6px 0 0; font-size: 13.5px; color: var(--body); }

.issue-foot {
  display: flex; justify-content: space-between; align-items: baseline;
  margin-top: 28px; padding-top: 10px; flex-wrap: wrap; gap: 8px;
}
.issue-foot a { font-size: 12px; letter-spacing: 0.08em; }

/* ---------- archive ---------- */
.archive-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 20px; }
@media (max-width: 700px) { .archive-grid { grid-template-columns: 1fr; } }
.archive-card { border: 1px solid var(--hairline); padding: 18px 20px; display: block; }
.archive-card:hover { border-color: var(--ink); }
.archive-card h2 { font-size: 17px; font-weight: 600; margin: 8px 0 0; }
.archive-card .counts { font-size: 12px; color: var(--faint); margin-top: 10px; }

/* ---------- page/article ---------- */
.page-title { font-size: 26px; font-weight: 600; margin: 18px 0 4px; }
.page-meta { font-size: 12.5px; color: var(--faint); margin-bottom: 20px; }
.meta-strip {
  display: flex; gap: 14px; align-items: baseline; flex-wrap: wrap;
  padding: 10px 0; margin: 14px 0 18px; font-size: 12px; color: var(--soft);
  border-top: 3px solid var(--ink); border-bottom: 1px solid var(--hairline);
}
.article { max-width: 680px; }

.tag {
  display: inline-block; font-size: 11.5px; letter-spacing: 0.04em;
  border: 1px solid var(--hairline); color: var(--soft);
  padding: 2px 10px; margin-right: 6px;
}
.tag-red { border-color: var(--red); color: var(--red); }
button.tag { background: var(--paper); cursor: pointer; font-family: inherit; }
button.tag:hover { border-color: var(--ink); color: var(--ink); }
button.tag.on { background: var(--ink); border-color: var(--ink); color: #fff; }

/* ---------- markdown ---------- */
.markdown { font-size: 15.5px; }
.markdown h1 { font-size: 24px; margin-top: 0; }
.markdown h2 { font-size: 18px; margin-top: 34px; padding-bottom: 6px; border-bottom: 1px solid var(--ink); }
.markdown h3 { font-size: 15.5px; }
.markdown a { color: var(--red); }
.markdown a:hover { text-decoration: underline; }
.markdown li { margin: 5px 0; }
.markdown input[type="checkbox"] { display: none; }
.markdown blockquote {
  margin: 16px 0; padding: 10px 16px; border-left: 3px solid var(--red);
  background: var(--wash); color: var(--body); font-size: 14px;
}
.markdown table { border-collapse: collapse; width: 100%; display: block; overflow-x: auto; font-size: 14px; }
.markdown th { border-bottom: 2px solid var(--ink); padding: 7px 10px; text-align: left; }
.markdown td { border-bottom: 1px solid var(--hairline); padding: 7px 10px; text-align: left; }
.markdown code {
  background: var(--wash); padding: 1px 6px;
  font-size: 13.5px; font-family: ui-monospace, "SF Mono", Menlo, monospace;
}
.markdown pre { background: var(--ink); color: #eee; padding: 14px 16px; overflow-x: auto; }
.markdown pre code { background: none; padding: 0; color: inherit; }
.markdown hr { border: none; border-top: 1px solid var(--hairline); margin: 24px 0; }

/* ---------- chat ---------- */
.chat-frame { display: flex; flex-direction: column; height: calc(100dvh - 150px); border: 1px solid var(--hairline); }
.chat-head {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 16px; border-bottom: 1px solid var(--ink); gap: 12px;
}
.chat-scroll { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 12px; }
.bubble-user {
  align-self: flex-end; max-width: 78%; background: var(--ink); color: #fff;
  padding: 10px 14px; font-size: 14px; line-height: 1.6; white-space: pre-wrap;
}
.bubble-ai { align-self: flex-start; max-width: 90%; border: 1px solid var(--hairline); padding: 12px 14px; font-size: 14px; }
.bubble-ai .markdown { font-size: 14px; }
.bubble-ai .markdown > :first-child { margin-top: 0; }
.bubble-ai .markdown > :last-child { margin-bottom: 0; }
.src-chips { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.src-chips a { font-size: 11px; border: 1px solid var(--red); color: var(--red); padding: 1px 8px; }
.src-chips a:hover { background: var(--red); color: #fff; }
.typing { font-size: 12px; color: var(--faint); }
.chat-inputbar { border-top: 1px solid var(--hairline); background: var(--wash); padding: 10px 14px; }
.chat-inputbar form { display: flex; gap: 8px; }
.chat-inputbar input {
  flex: 1; border: 1px solid #ccc; background: #fff; padding: 10px 14px;
  font-size: 14px; font-family: inherit;
}
.chat-inputbar input:focus { outline: none; border-color: var(--ink); }
.chat-hint { font-size: 11px; color: var(--faint); margin-top: 6px; }
.suggestions { display: flex; gap: 8px; flex-wrap: wrap; padding: 4px 0; }

/* ---------- slide panel ---------- */
.panel-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.25); z-index: 40; }
.panel {
  position: fixed; top: 0; right: 0; bottom: 0; width: min(440px, 100vw);
  background: var(--paper); z-index: 41; border-left: 1px solid var(--ink);
  display: flex; flex-direction: column;
}
.panel .chat-frame { border: none; height: auto; flex: 1; min-height: 0; }

/* ---------- login ---------- */
.login-wrap { display: flex; justify-content: center; padding-top: 12vh; }
.login-card { width: 360px; border: 1px solid var(--ink); padding: 28px; text-align: center; }
.login-card input {
  width: 100%; border: 1px solid #ccc; padding: 10px 14px; margin: 16px 0 12px;
  font-size: 15px; font-family: inherit;
}
.login-card input:focus { outline: none; border-color: var(--ink); }
.error { color: var(--red); font-size: 13.5px; }
.hint { color: var(--faint); font-size: 13px; }

/* ---------- footer ---------- */
.footer { border-top: 3px solid var(--ink); margin-top: 40px; }
.footer-inner {
  max-width: 1020px; margin: 0 auto; padding: 16px 24px 28px;
  display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font-size: 12px; color: var(--faint); letter-spacing: 0.06em;
}
.footer a { color: var(--soft); }
.footer a:hover { color: var(--red); }
```

- [ ] **Step 2: layout.tsx 재작성** (Frap 제거, 마스트헤드·푸터·패널 호스트)

`ChatPanelHost`는 Task 8에서 만들므로 여기서는 자리만 잡는다 — Task 8 전까지 빌드가 깨지지 않도록 **이 시점에는 import·마운트 없이** 작성한다.

```tsx
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
```

- [ ] **Step 3: Frap 삭제**

```bash
rm web/app/components/Frap.tsx
```

- [ ] **Step 4: 빌드 확인** — 홈(`app/page.tsx`)이 아직 구 스타일 클래스(`hero`, `feature-band`)를 쓰지만 CSS만 없어진 것이므로 렌더는 된다. `cd web && npx tsc --noEmit` 통과 확인. dev 서버로 `/login` 화면이 B1 스타일(각진 카드·잉크 보더)인지 확인.

- [ ] **Step 5: Commit** — `git add web/app/globals.css web/app/layout.tsx && git rm web/app/components/Frap.tsx` 후 `design: B1 인터내셔널 토큰·마스트헤드·푸터`

### Task 2: 테스트 러너 + 이슈 파서 (순수 함수)

**Files:**
- Modify: `web/package.json` (devDependency `tsx`, script `test`)
- Create: `web/lib/issue-parser.ts`
- Test: `web/tests/issue-parser.test.ts`

- [ ] **Step 1: tsx 설치 + test 스크립트**

```bash
cd web && npm i -D tsx
```
`package.json`의 scripts에 추가: `"test": "tsx --test tests/*.test.ts"`

- [ ] **Step 2: 실패하는 테스트 작성** — `web/tests/issue-parser.test.ts`

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { parseIssueBody } from "../lib/issue-parser";

const SAMPLE = `# AI Radar 데일리 — 2026-07-08

## 오늘의 헤드라인
Anthropic이 연환산 매출 기준으로 OpenAI를 처음 앞질렀습니다.
Claude Cowork가 모바일·웹으로 확장됐습니다.

## 에이전트 구축 · 업무 자동화 ★최우선

- [ ] **Claude Code + Codex로 "스스로 도는" 에이전트 루프 만들기 (Lenny's Newsletter)** — 하트비트·크론에 에이전트를 결합해 반복 업무를 처리하는 법. [Lenny's Newsletter](https://example.com/loop)
    - **도구**: Claude Code + Codex
    - **자동화한 업무**: 매일 PR 전수 검토
    - **방법**: 목표 기반 루프 설계
    - **포인트**: 성공 기준이 모호하면 토큰만 소모

## 빅 뉴스

- [ ] **Anthropic, 매출 기준 OpenAI 첫 추월** — 연환산 매출 $47B. [Fortune](https://example.com/fortune) · [보조](https://example.com/sub)

## AX 시사점

오늘의 핵심은 표준화입니다.

---
*위키에 반영할 항목에 체크하세요.*
`;

test("헤드라인을 문단 배열로 파싱한다", () => {
  const r = parseIssueBody(SAMPLE);
  assert.equal(r.fallback, false);
  assert.equal(r.headline.length, 2);
  assert.match(r.headline[0], /Anthropic/);
});

test("섹션 종류를 분류하고 ★최우선 표기를 제거한다", () => {
  const r = parseIssueBody(SAMPLE);
  assert.deepEqual(r.sections.map((s) => s.kind), ["agent", "news"]);
  assert.equal(r.sections[0].title, "에이전트 구축 · 업무 자동화");
});

test("에이전트 항목의 제목·요약·링크·서브필드를 추출한다", () => {
  const item = parseIssueBody(SAMPLE).sections[0].items[0];
  assert.match(item.title, /^Claude Code \+ Codex/);
  assert.match(item.summary, /^하트비트/);
  assert.equal(item.links[0].url, "https://example.com/loop");
  assert.equal(item.fields.length, 4);
  assert.deepEqual(item.fields[0], { label: "도구", value: "Claude Code + Codex" });
});

test("일반 항목은 서브필드 없이 링크 여러 개를 파싱한다", () => {
  const item = parseIssueBody(SAMPLE).sections[1].items[0];
  assert.equal(item.fields.length, 0);
  assert.equal(item.links.length, 2);
  assert.match(item.summary, /\$47B/);
  assert.ok(!item.summary.includes("["));
});

test("AX 시사점은 푸터(---) 앞까지만 담는다", () => {
  const r = parseIssueBody(SAMPLE);
  assert.equal(r.ax, "오늘의 핵심은 표준화입니다.");
});

test("템플릿이 아니면 fallback을 세운다", () => {
  const r = parseIssueBody("# 제목\n\n그냥 산문입니다.");
  assert.equal(r.fallback, true);
});
```

- [ ] **Step 3: 실패 확인** — `cd web && npm test` → `Cannot find module '../lib/issue-parser'` 류 FAIL 확인.

- [ ] **Step 4: 파서 구현** — `web/lib/issue-parser.ts` (콘텐츠 번들 import 없는 순수 모듈)

```ts
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
```

- [ ] **Step 5: 통과 확인** — `cd web && npm test` → 6 tests pass.

- [ ] **Step 6: Commit** — `feat: 뉴스레터 → 이슈 구조화 파서 + 테스트`

### Task 3: 이슈 어셈블리 + 위키 매칭

**Files:**
- Create: `web/lib/issues.ts`
- Modify: `web/lib/issue-parser.ts` (matchWiki 추가 — 순수 유지, pages 주입)
- Test: `web/tests/match-wiki.test.ts`

- [ ] **Step 1: 실패하는 테스트** — `web/tests/match-wiki.test.ts`

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { matchWiki, type IssueItem } from "../lib/issue-parser";

const PAGES = [
  { slug: "use-cases/agent-loops-daily-pr-review", title: "Claude Code 에이전트 루프 — 일일 PR 검토", meta: { source: "https://example.com/loop" } },
  { slug: "tools/claude-code", title: "Claude Code", meta: {} },
];

function item(over: Partial<IssueItem>): IssueItem {
  return { title: "", summary: "", links: [], fields: [], ...over };
}

test("출처 URL이 일치하면 그 위키 페이지를 잇는다", () => {
  const hit = matchWiki(item({ title: "전혀 다른 제목", links: [{ label: "src", url: "https://example.com/loop" }] }), PAGES);
  assert.equal(hit?.slug, "use-cases/agent-loops-daily-pr-review");
});

test("제목 토큰이 절반 이상 겹치면 잇는다", () => {
  const hit = matchWiki(item({ title: "에이전트 루프로 일일 PR 검토 자동화" }), PAGES);
  assert.equal(hit?.slug, "use-cases/agent-loops-daily-pr-review");
});

test("겹침이 약하면 잇지 않는다", () => {
  assert.equal(matchWiki(item({ title: "완전히 무관한 소식" }), PAGES), undefined);
});
```

- [ ] **Step 2: 실패 확인** — `npm test` → `matchWiki is not exported` FAIL.

- [ ] **Step 3: matchWiki 구현** — `issue-parser.ts`에 추가

```ts
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
```

- [ ] **Step 4: 통과 확인** — `npm test` → 전체 pass.

- [ ] **Step 5: 어셈블리 모듈** — `web/lib/issues.ts` (콘텐츠 번들과 파서를 잇는 층)

```ts
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
```

- [ ] **Step 6: 타입 확인** — `npx tsc --noEmit` 통과.

- [ ] **Step 7: Commit** — `feat: 이슈 어셈블리(호수·이전/다음)와 위키 매칭`

### Task 4: IssueView 컴포넌트 + 홈

**Files:**
- Create: `web/app/components/AskButton.tsx`
- Create: `web/app/components/IssueView.tsx`
- Modify(전면 재작성): `web/app/page.tsx`

- [ ] **Step 1: AskButton (클라이언트)** — 채팅 패널로 컨텍스트를 보내는 유일한 통로. 패널(Task 8) 전에도 이벤트만 쏘므로 무해하다.

```tsx
"use client";

export function askRadar(question: string) {
  window.dispatchEvent(new CustomEvent("air:ask", { detail: { question } }));
}

export default function AskButton({ context }: { context: string }) {
  return (
    <button className="ask-item" onClick={() => askRadar(`${context} 항목에 대해 더 자세히 알려줘`)}>
      더 알아보기 ↗
    </button>
  );
}
```

- [ ] **Step 2: IssueView (서버 컴포넌트)**

```tsx
import Link from "next/link";
import Markdown from "@/lib/Markdown";
import AskButton from "./AskButton";
import type { Issue, } from "@/lib/issues";
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
```

- [ ] **Step 3: 홈 재작성** — `web/app/page.tsx`

```tsx
import IssueView from "./components/IssueView";
import { getIssue, latestIssueDate } from "@/lib/issues";

export default function Home() {
  const date = latestIssueDate();
  const issue = date ? getIssue(date) : undefined;
  if (!issue) return <p className="hint" style={{ marginTop: 40 }}>아직 발행된 이슈가 없습니다.</p>;
  return <IssueView issue={issue} />;
}
```

- [ ] **Step 4: 검증** — dev 서버에서 홈 확인: NO./날짜 스트립, 리드 헤드라인, 01 에이전트 카드(도구/자동화한 업무/방법 표), 02~ 그리드, AX 박스, 하단 이전 호 링크. `★` 문자가 화면에 없어야 한다. 콘솔 에러 0.

- [ ] **Step 5: Commit** — `feat: 매거진 홈(오늘의 이슈) — IssueView·구조화 렌더`

### Task 5: 아카이브 + 과거 호 + 리다이렉트

**Files:**
- Create: `web/app/issues/page.tsx`
- Create: `web/app/issues/[date]/page.tsx`
- Modify(전면 재작성): `web/app/newsletter/page.tsx`, `web/app/newsletter/[date]/page.tsx`

- [ ] **Step 1: 아카이브 페이지** — `web/app/issues/page.tsx`

```tsx
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
```

- [ ] **Step 2: 과거 호 페이지** — `web/app/issues/[date]/page.tsx`

```tsx
import { notFound } from "next/navigation";
import IssueView from "../../components/IssueView";
import { getIssue } from "@/lib/issues";
import { newsletters } from "@/lib/content";

export function generateStaticParams() {
  return newsletters.map((n) => ({ date: n.slug }));
}

export default async function IssuePage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const issue = getIssue(date);
  if (!issue) notFound();
  return <IssueView issue={issue} />;
}
```

- [ ] **Step 3: 구 URL 리다이렉트** — `web/app/newsletter/page.tsx`:

```tsx
import { redirect } from "next/navigation";

export default function NewsletterRedirect() {
  redirect("/issues");
}
```

`web/app/newsletter/[date]/page.tsx`:

```tsx
import { redirect } from "next/navigation";

export default async function NewsletterDateRedirect({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  redirect(`/issues/${date}`);
}
```

- [ ] **Step 4: 검증** — `/issues` 카드 그리드, `/issues/2026-07-07` 과거 호, `/newsletter/2026-07-08` → `/issues/2026-07-08` 리다이렉트 확인. `lib/qa.ts`의 출처 href(`/newsletter/...`)도 리다이렉트로 안전하다.

- [ ] **Step 5: Commit** — `feat: 이슈 아카이브·과거 호·/newsletter 리다이렉트`

### Task 6: QA 스트리밍 API (SSE + 멀티턴)

**Files:**
- Modify: `web/lib/qa.ts` (streamAnswer 추가 — 기존 answerQuestion 유지)
- Modify(전면 재작성): `web/app/api/qa/route.ts`

- [ ] **Step 1: streamAnswer 구현** — `qa.ts` 하단에 추가. 시스템 프롬프트 조립을 answerQuestion과 공유하도록 함수로 추출한다.

```ts
export type ChatTurn = { role: "user" | "assistant"; content: string };
export type StreamEvent =
  | { type: "text"; text: string }
  | { type: "sources"; sources: QaResult["sources"] }
  | { type: "error"; message: string };

function buildSystem(context: string): string {
  return [
    "당신은 'AI Radar' 위키의 사서다. 팀원의 최신 AI 트렌드 질문에 위키 내용을 근거로 한국어로 답한다.",
    "규칙:",
    "- 제공된 위키 페이지 내용만 근거로 답하고, 근거가 된 페이지 제목을 답변에 자연스럽게 언급한다.",
    "- 위키에 없는 내용은 추측하지 말고 '위키에 아직 수집되지 않았다'고 답한다.",
    "- 간결하게: 핵심 답 → 필요한 보충 순서. 불릿은 필요할 때만.",
    "- 답변은 마크다운으로 작성한다 (제목·굵게·목록·표 사용 가능).",
    "",
    "아래는 위키의 인덱스(전체 목차), 에이전트·자동화 케이스 카탈로그, 그리고 질문과 관련해 검색된 페이지들이다.",
    "케이스 카탈로그는 '도구로 방식을 활용해 업무를 수행 → 성과' 공식으로 정리되어 있다.",
    "강의 소재·자동화 사례·AX 근거 질문에는 카탈로그에서 조건에 맞는 케이스를 고르고,",
    "벤치마크(모델·비용·권한)를 함께 제시하라. '미확인' 필드는 미확인이라고 정직하게 말하라.",
    `<index>\n${wikiIndex.slice(0, 3000)}\n</index>`,
    `<case-catalog>\n${caseCatalog()}\n</case-catalog>`,
    context ? context : "(검색된 페이지 없음)",
  ].join("\n");
}

export async function* streamAnswer(turns: ChatTurn[]): AsyncGenerator<StreamEvent> {
  if (!process.env.ANTHROPIC_API_KEY) {
    yield { type: "error", message: "관리자가 아직 Anthropic API 키를 설정하지 않아 Q&A를 사용할 수 없습니다." };
    return;
  }
  if (!underDailyLimit()) {
    yield { type: "error", message: "오늘의 Q&A 사용 한도에 도달했습니다. 내일 다시 시도해 주세요." };
    return;
  }

  const question = [...turns].reverse().find((t) => t.role === "user")?.content ?? "";
  const hits = searchWiki(question, MAX_PAGES + 2);
  const { text: context, sources } = contextFor(hits);

  const client = new Anthropic();
  const stream = client.messages.stream({
    model: "claude-sonnet-5",
    max_tokens: 4000,
    system: buildSystem(context),
    messages: turns.slice(-12),
  });

  for await (const event of stream) {
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      yield { type: "text", text: event.delta.text };
    }
  }
  const final = await stream.finalMessage();
  if (final.stop_reason === "max_tokens") {
    yield { type: "text", text: "\n\n*(답변이 길이 제한에 걸려 잘렸습니다 — 범위를 좁혀 다시 질문해 주세요.)*" };
  }
  yield { type: "sources", sources };
}
```

기존 `answerQuestion`의 system 배열도 `buildSystem(context)` 호출로 교체해 중복을 없앤다(레거시 경로 유지). 출처 href는 `/newsletter/`를 `/issues/`로 바꾼다(`contextFor` 내부 한 줄):

```ts
const href = hit.type === "wiki" ? `/wiki/${hit.slug}` : `/issues/${hit.slug}`;
```

- [ ] **Step 2: route.ts 재작성** — 스트리밍 + 레거시 JSON 하위호환

```ts
import { NextRequest, NextResponse } from "next/server";
import { answerQuestion, streamAnswer, type ChatTurn } from "@/lib/qa";

export const maxDuration = 60;

function validTurns(v: unknown): ChatTurn[] | null {
  if (!Array.isArray(v) || v.length === 0 || v.length > 40) return null;
  const turns: ChatTurn[] = [];
  for (const t of v) {
    if (!t || (t.role !== "user" && t.role !== "assistant") || typeof t.content !== "string") return null;
    if (t.content.length > 4000) return null;
    turns.push({ role: t.role, content: t.content });
  }
  const last = turns[turns.length - 1];
  if (last.role !== "user" || last.content.trim().length < 2) return null;
  return turns;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));

  // 레거시 경로: { question } → 단건 JSON (Agent 등 기존 호출 호환)
  if (typeof body.question === "string" && !body.stream) {
    const q = body.question.trim();
    if (q.length < 2) return NextResponse.json({ error: "질문을 입력해 주세요." }, { status: 400 });
    if (q.length > 1000) return NextResponse.json({ error: "질문이 너무 깁니다 (1000자 이내)." }, { status: 400 });
    try {
      return NextResponse.json(await answerQuestion(q));
    } catch (e) {
      console.error("qa error", e);
      return NextResponse.json(
        { error: "답변 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
        { status: 500 }
      );
    }
  }

  const turns = validTurns(body.messages);
  if (!turns) return NextResponse.json({ error: "질문을 입력해 주세요." }, { status: 400 });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (data: unknown) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      try {
        for await (const evt of streamAnswer(turns)) send(evt);
      } catch (e) {
        console.error("qa stream error", e);
        const msg = e instanceof Error && e.message.includes("credit balance")
          ? "Anthropic API 크레딧이 소진되어 Q&A가 일시 중지됐습니다. 관리자에게 알려주세요."
          : "답변 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
        send({ type: "error", message: msg });
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache" },
  });
}
```

- [ ] **Step 3: curl 검증** — dev 서버 켠 상태에서 (사전 지식의 `$COOKIE` 사용):

```bash
curl -s -N -X POST http://localhost:3300/api/qa \
  -H "Content-Type: application/json" -H "Cookie: air_session=$COOKIE" \
  -d '{"stream":true,"messages":[{"role":"user","content":"Sonnet 5가 뭐가 좋아졌어?"}]}' | head -20
```
기대: `data: {"type":"text","text":"..."}` 줄들이 점진적으로 출력되고 마지막에 `sources` 이벤트와 `[DONE]`. 레거시도 확인:

```bash
curl -s -X POST http://localhost:3300/api/qa \
  -H "Content-Type: application/json" -H "Cookie: air_session=$COOKIE" \
  -d '{"question":"Sonnet 5가 뭐가 좋아졌어?"}' | head -c 300
```
기대: `{"answer":"...","sources":[...]}` JSON.

- [ ] **Step 4: Commit** — `feat: /api/qa SSE 스트리밍 + 멀티턴 (레거시 JSON 호환)`

### Task 7: 채팅 스토어 + 스레드 컴포넌트 + /chat

**Files:**
- Create: `web/lib/chat-store.ts`
- Test: `web/tests/chat-store.test.ts`
- Create: `web/app/components/ChatThread.tsx`
- Modify(전면 재작성): `web/app/qa/page.tsx` → 삭제하고 `web/app/chat/page.tsx` 생성
- Delete: `web/app/components/Chat.tsx`

- [ ] **Step 1: 스토어 테스트 작성** — `web/tests/chat-store.test.ts`

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { upsertConversation, titleFrom, type Conversation } from "../lib/chat-store";

const conv = (id: string, updatedAt: number): Conversation => ({
  id, title: id, messages: [], updatedAt,
});

test("upsert는 최신순 정렬·중복 교체·20개 상한을 지킨다", () => {
  let list: Conversation[] = [];
  for (let i = 0; i < 25; i++) list = upsertConversation(list, conv(`c${i}`, i));
  assert.equal(list.length, 20);
  assert.equal(list[0].id, "c24");
  list = upsertConversation(list, { ...conv("c24", 100), title: "updated" });
  assert.equal(list.filter((c) => c.id === "c24").length, 1);
  assert.equal(list[0].title, "updated");
});

test("titleFrom은 첫 질문을 40자로 자른다", () => {
  assert.equal(titleFrom("짧은 질문"), "짧은 질문");
  assert.equal(titleFrom("가".repeat(60)).length, 41); // 40 + …
});
```

- [ ] **Step 2: 실패 확인** — `npm test` FAIL.

- [ ] **Step 3: 스토어 구현** — `web/lib/chat-store.ts`

```ts
// 채팅 히스토리 — localStorage. 팀 공유 계정이므로 서버 저장 없음(스펙 §5).

export type ChatSource = { title: string; href: string };
export type ChatMsg = { role: "user" | "assistant"; content: string; sources?: ChatSource[] };
export type Conversation = { id: string; title: string; messages: ChatMsg[]; updatedAt: number };

const KEY = "air.chats.v1";
const MAX_CONVERSATIONS = 20;

export function titleFrom(text: string): string {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > 40 ? t.slice(0, 40) + "…" : t;
}

export function upsertConversation(list: Conversation[], conv: Conversation): Conversation[] {
  return [conv, ...list.filter((c) => c.id !== conv.id)]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, MAX_CONVERSATIONS);
}

export function loadConversations(): Conversation[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveConversations(list: Conversation[]): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    // 저장 실패(용량 등)는 무시 — 대화는 메모리에서 계속된다
  }
}
```

- [ ] **Step 4: 통과 확인** — `npm test` 전체 pass. Commit: `feat: 채팅 대화 저장소 (localStorage)`

- [ ] **Step 5: ChatThread 구현** — `web/app/components/ChatThread.tsx`. 전용 페이지와 패널이 공유하는 클라이언트 컴포넌트. 표준 채팅 문법: 시간순 스레드, 하단 고정 입력, 자동 스크롤, SSE 소비.

```tsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Markdown from "@/lib/Markdown";
import {
  loadConversations, saveConversations, upsertConversation, titleFrom,
  type Conversation, type ChatMsg,
} from "@/lib/chat-store";

const SUGGESTIONS = [
  "이번 주 가장 중요한 AI 뉴스는?",
  "Claude Code로 업무 자동화한 사례 알려줘",
  "기업 AX 관점에서 최근 주목할 흐름은?",
];

function newConversation(): Conversation {
  return { id: crypto.randomUUID(), title: "새 대화", messages: [], updatedAt: Date.now() };
}

export default function ChatThread({
  compact = false,
  pendingQuestion,
  onConsumePending,
}: {
  compact?: boolean;
  pendingQuestion?: string | null;
  onConsumePending?: () => void;
}) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [current, setCurrent] = useState<Conversation>(newConversation);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(current);
  currentRef.current = current;

  useEffect(() => {
    const list = loadConversations();
    setConversations(list);
    if (list[0]?.messages.length) setCurrent(list[0]);
  }, []);

  const persist = useCallback((conv: Conversation) => {
    setCurrent(conv);
    setConversations((list) => {
      const next = upsertConversation(list, conv);
      saveConversations(next);
      return next;
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [current.messages, busy]);

  const send = useCallback(async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    setInput("");
    setBusy(true);

    const base = currentRef.current;
    let conv: Conversation = {
      ...base,
      title: base.messages.length === 0 ? titleFrom(q) : base.title,
      messages: [...base.messages, { role: "user", content: q } as ChatMsg, { role: "assistant", content: "" } as ChatMsg],
      updatedAt: Date.now(),
    };
    persist(conv);

    const patchLast = (patch: Partial<ChatMsg>) => {
      const msgs = [...conv.messages];
      msgs[msgs.length - 1] = { ...msgs[msgs.length - 1], ...patch };
      conv = { ...conv, messages: msgs, updatedAt: Date.now() };
      persist(conv);
    };

    try {
      const res = await fetch("/api/qa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stream: true,
          messages: conv.messages.slice(0, -1).map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const frames = buf.split("\n\n");
        buf = frames.pop() ?? "";
        for (const frame of frames) {
          if (!frame.startsWith("data: ")) continue;
          const data = frame.slice(6);
          if (data === "[DONE]") continue;
          const evt = JSON.parse(data);
          if (evt.type === "text") {
            acc += evt.text;
            patchLast({ content: acc });
          } else if (evt.type === "sources") {
            patchLast({ sources: evt.sources });
          } else if (evt.type === "error") {
            patchLast({ content: acc ? `${acc}\n\n${evt.message}` : evt.message });
          }
        }
      }
    } catch {
      patchLast({ content: "네트워크 오류가 발생했습니다. 다시 시도해 주세요." });
    } finally {
      setBusy(false);
    }
  }, [busy, persist]);

  useEffect(() => {
    if (pendingQuestion) {
      onConsumePending?.();
      send(pendingQuestion);
    }
  }, [pendingQuestion, onConsumePending, send]);

  function startNew() {
    setCurrent(newConversation());
  }

  return (
    <div className="chat-frame">
      <div className="chat-head">
        <span className="label">대화 — AI RADAR</span>
        <span style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {!compact && conversations.length > 0 && (
            <details style={{ position: "relative" }}>
              <summary className="hint" style={{ cursor: "pointer", listStyle: "none" }}>최근 대화 ▾</summary>
              <div style={{
                position: "absolute", right: 0, top: "120%", zIndex: 5, background: "#fff",
                border: "1px solid var(--ink)", minWidth: 260, maxHeight: 300, overflowY: "auto",
              }}>
                {conversations.map((c) => (
                  <button
                    key={c.id}
                    onClick={(e) => {
                      setCurrent(c);
                      (e.currentTarget.closest("details") as HTMLDetailsElement).open = false;
                    }}
                    style={{
                      display: "block", width: "100%", textAlign: "left", padding: "8px 12px",
                      background: "none", border: "none", borderBottom: "1px solid var(--hairline)",
                      fontSize: 12.5, cursor: "pointer", fontFamily: "inherit",
                    }}
                  >
                    {c.title}
                  </button>
                ))}
              </div>
            </details>
          )}
          <button className="ask-btn" onClick={startNew}>+ 새 대화</button>
        </span>
      </div>

      <div className="chat-scroll" ref={scrollRef}>
        {current.messages.length === 0 && (
          <div>
            <p className="hint">궁금한 것을 물어보세요 — 위키가 근거와 함께 답합니다.</p>
            <div className="suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="tag" onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          </div>
        )}
        {current.messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="bubble-user">{m.content}</div>
          ) : (
            <div key={i} className="bubble-ai">
              {m.content ? <Markdown>{m.content}</Markdown> : <span className="typing">답변 작성 중…</span>}
              {m.sources && m.sources.length > 0 && (
                <div className="src-chips">
                  {m.sources.map((s, si) => (
                    <a key={s.href} href={s.href}>{si + 1} {s.title}</a>
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>

      <div className="chat-inputbar">
        <form onSubmit={(e) => { e.preventDefault(); send(input); }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="궁금한 것을 물어보세요"
            disabled={busy}
          />
          <button className="btn btn-red" disabled={busy || !input.trim()}>전송</button>
        </form>
        <p className="chat-hint">대화는 이 브라우저에 저장됩니다 · Enter 전송</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 6: /chat 페이지 생성 + /qa 정리** — `web/app/chat/page.tsx`:

```tsx
import ChatThread from "../components/ChatThread";

export default function ChatPage() {
  return <ChatThread />;
}
```

`web/app/qa/page.tsx`는 리다이렉트 목적지를 바꾼다:

```tsx
import { redirect } from "next/navigation";

export default function QaRedirect() {
  redirect("/chat");
}
```

구 컴포넌트 삭제: `rm web/app/components/Chat.tsx`

- [ ] **Step 7: 검증** — `/chat`에서: 하단 입력창 고정, 질문 → 스트리밍으로 글자가 점진 표시, 답변 마크다운 렌더, 근거 칩 클릭 시 위키 이동, 새로고침 후 대화 유지, "+ 새 대화" 후 "최근 대화 ▾"에서 이전 대화 복귀. 콘솔 에러 0.

- [ ] **Step 8: Commit** — `feat: 표준 채팅 UX(/chat) — 스트리밍·마크다운·히스토리`

### Task 8: 채팅 슬라이드 패널 + 컨텍스트 연동

**Files:**
- Create: `web/app/components/ChatPanelHost.tsx`
- Modify: `web/app/layout.tsx` (마스트헤드 "질문 ↗" 버튼 + 패널 호스트 마운트)

- [ ] **Step 1: ChatPanelHost 구현**

```tsx
"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import ChatThread from "./ChatThread";
import { askRadar } from "./AskButton";

export function AskOpenButton() {
  return (
    <button className="ask-btn" onClick={() => askRadar("")}>질문 ↗</button>
  );
}

export default function ChatPanelHost() {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<string | null>(null);

  useEffect(() => {
    function onAsk(e: Event) {
      const q = (e as CustomEvent<{ question: string }>).detail?.question ?? "";
      setOpen(true);
      if (q.trim()) setPending(q);
    }
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement;
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(t.tagName) && !t.isContentEditable) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("air:ask", onAsk);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("air:ask", onAsk);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const consume = useCallback(() => setPending(null), []);

  if (!open) return null;
  return (
    <>
      <div className="panel-overlay" onClick={() => setOpen(false)} />
      <div className="panel" role="dialog" aria-label="AI Radar에 질문">
        <div className="chat-head" style={{ borderBottom: "1px solid var(--hairline)" }}>
          <Link href="/chat" className="ln" style={{ fontSize: 12 }} onClick={() => setOpen(false)}>
            크게 보기 → /chat
          </Link>
          <button className="ask-btn" onClick={() => setOpen(false)}>닫기 ✕</button>
        </div>
        <ChatThread compact pendingQuestion={pending} onConsumePending={consume} />
      </div>
    </>
  );
}
```

- [ ] **Step 2: layout.tsx에 연결** — 마스트헤드 nav 끝에 `<AskOpenButton />`, body 끝(footer 뒤)에 `<ChatPanelHost />`:

```tsx
import ChatPanelHost, { AskOpenButton } from "./components/ChatPanelHost";
// nav 안:
//   <Link href="/chat">대화</Link>
//   <AskOpenButton />
// footer 뒤:
//   <ChatPanelHost />
```

- [ ] **Step 3: 검증** — ① 홈에서 "질문 ↗" → 패널 열림 ② 이슈 항목의 "더 알아보기 ↗" → 패널 열리며 `[NO. n · 섹션] '제목' 항목에 대해 더 자세히 알려줘`가 자동 전송·스트리밍 ③ `/` 키로 열림, ESC·바깥 클릭으로 닫힘 ④ 패널에서 시작한 대화가 `/chat`의 최근 대화에 보임(패널과 페이지는 localStorage로 동기화 — 동시 열람 실시간 동기화는 비범위).

- [ ] **Step 4: Commit** — `feat: 채팅 슬라이드 패널 + 이슈 항목 컨텍스트 연동`

### Task 9: 케이스·위키·Agent·로그인 재스타일

**Files:**
- Modify: `web/app/cases/CaseExplorer.tsx`
- Modify: `web/app/wiki/[...slug]/page.tsx`
- Modify: `web/app/wiki/page.tsx`
- Modify: `web/app/login/page.tsx` (클래스 확인만 — CSS는 Task 1에서 끝남)

- [ ] **Step 1: CaseExplorer B1 전환** — `Chip` 컴포넌트를 `.tag` 기반으로:

```tsx
function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`tag${active ? " on" : ""}`}>
      {children}
    </button>
  );
}
```

케이스 카드(`newsletter-card` 클래스 사용부)를 `.item-card`로 교체하고, 배지를 `.tag`로, maturity가 `production`이면 `tag tag-red`로:

```tsx
<Link key={c.slug} href={`/wiki/${c.slug}`} className="item-card" style={{ display: "block", marginTop: 12 }}>
  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
    <span className="tag">{DOMAIN_LABELS[c.domain] ?? c.domain}</span>
    {c.tools.map((t) => (
      <span className="tag" key={t}>{t}</span>
    ))}
    {c.maturity && (
      <span className={`tag${c.maturity === "production" ? " tag-red" : ""}`}>
        {MATURITY_LABELS[c.maturity] ?? c.maturity}
      </span>
    )}
  </div>
  <p className="item-title">{c.title}</p>
  <p className="item-summary" style={{ margin: "8px 0" }}>
    <b>{c.task || "업무 미분류"}</b>
    {c.outcome && <> → {c.outcome}</>}
  </p>
  <p className="hint" style={{ margin: 0 }}>
    방식: {c.mechanism.join(", ") || "—"} · 모델: {c.model || "미확인"} · 비용:{" "}
    {c.cost || "미확인"} · 권한: {c.permissions || "미확인"}
  </p>
</Link>
```

- [ ] **Step 2: 위키 아티클 뷰** — `web/app/wiki/[...slug]/page.tsx`의 반환부를 메타 스트립 + 아티클 폭으로:

```tsx
return (
  <article className="article" style={{ margin: "0 auto" }}>
    <div className="meta-strip">
      {tags.map((t) => (
        <span className="tag" key={t}>{t}</span>
      ))}
      {typeof meta.date === "string" && <span className="num">{meta.date}</span>}
      {typeof meta.source === "string" && meta.source.startsWith("http") && (
        <a href={meta.source} target="_blank" rel="noreferrer" className="ln">원문 출처 ↗</a>
      )}
    </div>
    <Markdown>{page.body}</Markdown>
  </article>
);
```

`web/app/wiki/page.tsx`도 카드 제거:

```tsx
import { wikiIndex } from "@/lib/content";
import Markdown from "@/lib/Markdown";

export default function WikiIndexPage() {
  return (
    <article className="article" style={{ margin: "0 auto" }}>
      <Markdown>{wikiIndex}</Markdown>
    </article>
  );
}
```

- [ ] **Step 3: 로그인·Agent 확인** — `login/page.tsx`는 클래스(`login-wrap`·`login-card`·`btn`)가 새 CSS와 맞는지 확인, 버튼 `className="btn btn-red"`로 교체. `agent/page.tsx`는 `<article className="article markdown" style={{margin:"0 auto"}}>`로 감싸는 것 외 변경 없음.

- [ ] **Step 4: 검증** — `/cases` 필터 태그(각진 사각, 활성=잉크 채움), production 케이스에 레드 아웃라인 태그. `/wiki/tools/claude-code` 아티클 폭 680px·메타 스트립. `/login`·`/agent` B1 일관.

- [ ] **Step 5: Commit** — `style: 케이스·위키·agent·로그인 B1 전환`

### Task 10: 문서 체계 (PRD · DESIGN · CLAUDE)

**Files:**
- Create: `web/PRD.md`
- Create: `web/DESIGN.md`
- Create: `web/CLAUDE.md`
- Modify: `CLAUDE.md` (루트 — 포인터 1줄)

- [ ] **Step 1: web/PRD.md 작성**

```markdown
# AI Radar Web — PRD

## 제품 정의
팀을 위한 AI 트렌드 데일리 매거진 + 위키 Q&A. "매일 발행되는 큐레이션 뉴스 미디어 위에서
바로 질문한다"가 핵심 경험이다. 설계 근거: docs/superpowers/specs/2026-07-09-web-redesign-design.md

## 사용자
팀 구성원(비개발자 포함). 공유 암호 세션으로 로그인. 개인 계정 없음.

## 핵심 job (우선순위 순)
1. 오늘의 이슈(뉴스레터) 읽기 — 홈에서 즉시.
2. 읽다가 그 자리에서 질문 — 항목의 "더 알아보기 ↗" → 채팅 패널.
3. 지난 호·케이스·위키 탐색.

## 페이지 요구사항
| 경로 | 요구사항 |
|---|---|
| `/` | 최신 이슈를 매거진 레이아웃으로. 파싱 실패 시 마크다운 폴백으로 깨지지 않게. |
| `/issues` | 호 카드 그리드(NO.·날짜·리드 헤드라인·섹션 건수), 최신순 |
| `/issues/[date]` | 홈과 동일 렌더 + 이전/다음 호 네비 |
| `/chat` | 표준 채팅: 하단 입력·스트리밍·마크다운·근거 칩·localStorage 히스토리 |
| 전역 패널 | "질문 ↗"/`/`키로 열림, 항목 컨텍스트 자동 전송, /chat과 저장소 공유 |
| `/cases` | 업무영역×도구×방식 필터 유지 |
| `/wiki/*` | 아티클 뷰(680px, 메타 스트립) |
| `/newsletter/*` | `/issues/*`로 영구 리다이렉트 |

## 비범위
서버측 대화 저장, 개인화·개별 계정, 뉴스레터 원본 형식 변경, 위키 스키마 변경,
Agent API(MCP/REST) 변경, 다크모드.

## 성공 기준
스펙 §10과 동일. 요약: 매거진 렌더+폴백, 컨텍스트 질문 자동 전송·스트리밍,
표준 채팅 동작(하단 입력·히스토리 유지), B1 토큰 일관, 문서 상호 참조 정확.
```

- [ ] **Step 2: web/DESIGN.md 작성**

```markdown
# AI Radar Web — 디자인 시스템 (B1 "인터내셔널")

참조 계보: Monocle·신문 국제판. 흑백 + 레드 포인트. 모든 UI 작업은 이 문서를 따른다.
토큰의 유일한 구현처는 `app/globals.css`다 — 새 색·새 컴포넌트가 필요하면 여기 먼저 추가한다.

## 토큰
| 변수 | 값 | 역할 |
|---|---|---|
| `--paper` | `#ffffff` | 페이지 캔버스 |
| `--ink` | `#111111` | 제목·강조·괘선 |
| `--red` | `#e63329` | 포인트 (규칙 아래 참조) |
| `--body` | `#333333` | 본문 |
| `--soft` / `--faint` | `#555` / `#888` | 보조 텍스트 |
| `--hairline` | `#e5e5e5` | 옅은 구분선·카드 보더 |
| `--wash` | `#f7f7f7` | 옅은 면 (AX 박스, 입력바) |

## 규칙
- **레드는 신호다**: 섹션 번호, 액티브 상태, 프라이머리 액션(전송·더 알아보기)에만. 장식 금지.
- **괘선 위계**: 3px 잉크(큰 단락: 마스트헤드·푸터·이슈 푸터) → 1px 잉크(섹션 경계)
  → 1px 헤어라인(항목·카드).
- **형태**: 라운드·그림자·그라데이션 금지. 컨트롤은 각진 사각형. 링크는 `.ln`(밑줄) 또는
  레드 텍스트.
- **다크모드 없음** — 종이 컨셉 고정.

## 타이포
- Pretendard 계열 산세리프 단일 체계. 본문 16px/1.7 `--body`.
- 헤드라인: 600, `-0.02em`. 리드 32px(모바일 24px), 아이템 16px.
- 라벨(`.label`): 11px, 자간 0.14em. 숫자·날짜는 `.num`(tabular-nums).

## 컴포넌트 어휘 (globals.css 클래스)
`.masthead` `.wordmark` `.ask-btn` — 상단 / `.issue-strip` `.lead` `.section-head`
`.item-card` `.item-fields` `.item-grid` `.ax-box` `.issue-foot` — 이슈 /
`.archive-grid` `.archive-card` — 아카이브 / `.chat-frame` `.bubble-user` `.bubble-ai`
`.src-chips` `.chat-inputbar` — 채팅 / `.panel` `.panel-overlay` — 패널 /
`.tag` `.tag-red` `.btn` `.btn-red` `.meta-strip` `.article` — 공용.

## Do / Don't
- Do: 항목 사이는 헤어라인, 단락 사이는 잉크 룰. 여백보다 괘선으로 위계를 만든다.
- Do: 새 화면도 위 클래스 어휘를 재사용 — 인라인 스타일은 레이아웃 미세조정만.
- Don't: 필 버튼, 그린 계열, 그림자 카드, 이모지 남용(마스트헤드·본문 UI에 이모지 금지).
- Don't: 레드 배경의 대면적 사용 (버튼·포인트 최대 수십 px 높이까지만).
```

- [ ] **Step 3: web/CLAUDE.md 작성**

```markdown
# AI Radar Web — 작업 가이드

이 디렉토리는 AI Radar 위키의 웹 앱(Next.js 15 App Router)이다.

## UI 작업 전 필독
1. `web/PRD.md` — 무엇을 왜 만드는가 (페이지별 요구사항·비범위)
2. `web/DESIGN.md` — B1 디자인 시스템 (토큰·규칙·클래스 어휘)
설계 배경 전체: `docs/superpowers/specs/2026-07-09-web-redesign-design.md`

## 구조
- `app/` 페이지·컴포넌트. 홈(`/`)=최신 이슈, `/issues`=아카이브, `/chat`=대화,
  전역 채팅 패널은 `components/ChatPanelHost.tsx`(이벤트 `air:ask`로 열림).
- `lib/issue-parser.ts` 뉴스레터 마크다운→구조화 (순수 함수, 테스트 있음).
  `lib/issues.ts` 호수·위키매칭 어셈블리. `lib/chat-store.ts` localStorage 대화.
- `lib/qa.ts` 위키 검색 + Claude 호출. `streamAnswer`(SSE)와 `answerQuestion`(레거시 JSON).
- `scripts/build-content.mjs` 가 predev/prebuild에서 `wiki/`·`newsletter/`를
  `lib/content.generated.json`으로 직렬화한다. **위키·뉴스레터 원본은 여기서 수정하지 않는다.**

## 규칙
- 스타일은 `app/globals.css`의 클래스 어휘를 재사용한다. 새 토큰·컴포넌트는 DESIGN.md에
  먼저 기록하고 globals.css에 추가한다.
- 테스트: `npm test` (tsx + node:test, `tests/`). 파서·스토어 등 순수 로직 변경 시 필수.
- 개발: `npm run dev` (포트 3300). 전 페이지 공유 암호 보호 — 로컬 암호는 `.env.local`.
- `/api/qa`는 스트리밍(`{stream:true, messages}`)과 레거시(`{question}`) 두 계약을 유지한다.
```

- [ ] **Step 4: 루트 CLAUDE.md에 포인터 추가** — "## 디렉토리 구조" 코드블록 아래 적당한 위치(코드블록 종료 직후)에 한 줄:

```markdown
> 웹 앱(web/) 작업 시에는 `web/CLAUDE.md` → `web/PRD.md` → `web/DESIGN.md`를 따른다.
```

- [ ] **Step 5: Commit** — `docs: web PRD·DESIGN·CLAUDE 문서 체계`

### Task 11: 최종 검증 스윕

**Files:** 수정 없음 (발견된 문제만 수정)

- [ ] **Step 1: 테스트·타입 전체 통과** — `cd web && npm test && npx tsc --noEmit`

- [ ] **Step 2: 전 화면 육안 검증** — dev 서버 + 브라우저(또는 preview 도구)로:
  `/login` → `/` (매거진, ★ 없음) → 항목 "더 알아보기 ↗"(패널+자동 질문+스트리밍) →
  `/issues` → `/issues/2026-07-06` (구형 템플릿이면 폴백 확인) → `/chat` (히스토리 유지) →
  `/cases` → `/wiki/tools/claude-code` → `/agent` → `/newsletter/2026-07-08` 리다이렉트.
  각 화면 콘솔 에러 0, 스타벅스 잔재(그린·필 버튼·크림 배경) 0.

- [ ] **Step 3: 모바일 뷰포트(375px) 확인** — 마스트헤드 줄바꿈, 아이템 그리드 1열, 패널 전폭.

- [ ] **Step 4: 잔여 정리 커밋** — 발견 수정분 커밋: `fix: 재설계 검증 스윕 수정`

---

## Self-Review 체크 결과

- **스펙 커버리지**: §3 IA→T1/T4/T5/T7/T8, §4 매거진·파서·위키매칭→T2/T3/T4, §5 채팅·SSE→T6/T7/T8, §6 나머지 페이지→T9, §7 디자인→T1, §8 문서→T10, §10 성공기준→T11. 갭 없음.
- **플레이스홀더**: 없음 (모든 코드 스텝에 실제 코드 포함).
- **타입 일관성**: `IssueItem/IssueSection/ParsedIssue`(T2) ↔ `Issue`(T3) ↔ IssueView(T4), `ChatTurn/StreamEvent`(T6) ↔ ChatThread SSE 소비(T7), `askRadar`(T4) ↔ `air:ask` 리스너(T8) 확인 완료.
