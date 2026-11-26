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
