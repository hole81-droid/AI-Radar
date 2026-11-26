#!/usr/bin/env node
/**
 * HTML 태그 짝 검사
 *
 *   node scripts/check-html.mjs outputs/insight-report/2026-09.html [...]
 *
 * 아티팩트로 발행하기 전에 태그가 제대로 닫혔는지 확인한다. 리포트 본문을 손으로
 * 고치다 보면 </div> 하나가 어긋나 레이아웃이 통째로 무너지는데, 브라우저는 조용히
 * 복구해버려서 눈으로는 알아채기 어렵다. 발행 전 게이트로 쓴다.
 *
 * 어긋난 태그가 있으면 종료 코드 1.
 */

import { readFileSync, existsSync } from "node:fs";

const VOID = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("사용법: node scripts/check-html.mjs <파일> [...]");
  process.exit(1);
}

let failed = false;

for (const file of files) {
  if (!existsSync(file)) {
    console.error(`${file}: 파일 없음`);
    failed = true;
    continue;
  }

  const html = readFileSync(file, "utf8");
  const stack = [];
  const errors = [];

  // 주석·style·script 안의 내용은 태그로 세지 않는다
  const scrubbed = html
    .replace(/<!--[\s\S]*?-->/g, (m) => " ".repeat(m.length))
    .replace(/(<style\b[^>]*>)([\s\S]*?)(<\/style>)/gi,
      (_m, a, b, c) => a + " ".repeat(b.length) + c)
    .replace(/(<script\b[^>]*>)([\s\S]*?)(<\/script>)/gi,
      (_m, a, b, c) => a + " ".repeat(b.length) + c);

  const tagRe = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)\b([^>]*)>/g;
  let m;
  while ((m = tagRe.exec(scrubbed)) !== null) {
    const [full, slash, rawName, attrs] = m;
    const name = rawName.toLowerCase();
    if (VOID.has(name) || attrs.trimEnd().endsWith("/")) continue;

    const line = scrubbed.slice(0, m.index).split("\n").length;
    if (!slash) {
      stack.push({ name, line });
    } else {
      const top = stack[stack.length - 1];
      if (!top) {
        errors.push(`${line}행: </${name}> — 열린 태그가 없음`);
      } else if (top.name !== name) {
        errors.push(
          `${line}행: </${name}> — 여기서 닫혀야 할 것은 <${top.name}> (${top.line}행에서 열림)`
        );
        stack.pop();
      } else {
        stack.pop();
      }
    }
  }

  for (const open of stack) {
    errors.push(`${open.line}행: <${open.name}> — 닫히지 않음`);
  }

  const short = file.split("/").pop();
  if (errors.length === 0) {
    console.log(`✓ ${short}`);
  } else {
    failed = true;
    console.log(`✗ ${short} — ${errors.length}건`);
    for (const e of errors.slice(0, 10)) console.log(`    ${e}`);
    if (errors.length > 10) console.log(`    … 외 ${errors.length - 10}건`);
  }
}

process.exit(failed ? 1 : 0);
