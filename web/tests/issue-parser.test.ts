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
