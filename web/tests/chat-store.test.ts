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
