#!/usr/bin/env node
// Insight 리포트 문체 린트 — 서술형 구간의 AI 문체 징후를 센다.
// 사용: node scripts/style-lint.mjs outputs/insight-report/2026-09.md [--strict]
import fs from "node:fs";

const file = process.argv[2];
const strict = process.argv.includes("--strict");
if (!file) { console.error("usage: style-lint.mjs <file.md> [--strict]"); process.exit(2); }
let t = fs.readFileSync(file, "utf8");
t = t.split(/^## 부록/m)[0];                 // 부록(표·범례) 제외
t = t.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1"); // 링크 텍스트만 남김
t = t.replace(/^---[\s\S]*?---\n/, "");       // frontmatter 제거
const prose = t.replace(/^\s*[-*] .*$/gm, ""); // 개조식 불릿 제외 → 서술형만
const sents = prose.split(/(?<=[.다요죠])\s+/).map(s => s.trim()).filter(s => s.length > 8);

const count = (re, src = t) => (src.match(re) || []).length;
const metrics = {
  "줄표(—)":               { v: count(/—/g), max: 0 },
  "'아니라' 대비 구문":      { v: count(/아니라/g), max: 3 },
  "굵은 글씨(**)":          { v: count(/\*\*[^*]+\*\*/g), max: 25 },
  "괄호 삽입":             { v: count(/\([^)]{2,}\)/g), max: 60 },
  "강조 부사":             { v: count(/정확히|그대로 |바로 그|전부 |문자 그대로/g), max: 3 },
  "가운뎃점 4연쇄":         { v: count(/[^·\s]+·[^·\s]+·[^·\s]+·[^·\s]+/g), max: 0 },
  "번역투":                { v: count(/에 대한|를 통해|을 통해|에 있어|적인 |에 도달|를 가리킨|을 가리킨|무슨 뜻인가/g), max: 3 },
  "격언식 마무리":          { v: count(/바로 그것|그것이 (이|본) 항목의|정중앙에/g), max: 0 },
  "서술형 평균 문장 길이":   { v: Math.round(sents.reduce((a, s) => a + s.length, 0) / Math.max(1, sents.length)), max: 45 },
  "같은 종결어미 3연속":     { v: 0, max: 0 },
};
// 종결어미 연속
const ends = sents.map(s => (s.match(/(습니다|입니다|합니다|됩니다|있습니다|없습니다|죠|이다|한다|있다|없다|된다)\.?$/) || ["?"])[0]);
let run = 1;
for (let i = 1; i < ends.length; i++) {
  run = ends[i] === ends[i - 1] && ends[i] !== "?" ? run + 1 : 1;
  if (run === 3) metrics["같은 종결어미 3연속"].v++;
}

let fail = 0;
console.log(`\n문체 린트 — ${file}\n서술형 문장 ${sents.length}개 (부록·불릿 제외)\n`);
console.log("항목".padEnd(20) + "측정".padStart(6) + "기준".padStart(6) + "  판정");
for (const [k, m] of Object.entries(metrics)) {
  const ok = m.v <= m.max;
  if (!ok) fail++;
  console.log(k.padEnd(20) + String(m.v).padStart(6) + String(m.max).padStart(6) + (ok ? "  ok" : "  초과"));
}
console.log(fail ? `\n${fail}개 항목 초과` : "\n통과");
if (strict && fail) process.exit(1);
