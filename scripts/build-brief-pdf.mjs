#!/usr/bin/env node
/**
 * 브리프 문서 PDF 빌드 — 화면판을 "그대로" 종이에 옮긴다
 *
 *   node scripts/build-brief-pdf.mjs outputs/openai-gpt-6-astra.html [--out path.pdf]
 *
 * build-print.mjs(Insight 리포트용)와 달리 재조판하지 않는다. 화면판의 폰트·색·간격·표를
 * 그대로 두고, 인쇄에 필요한 최소 조정만 한다:
 *   1. 화면판 안의 @media print 블록을 제거 — 화면 모습 그대로 찍기 위해 (브리프 서식의
 *      print 블록은 "브라우저에서 직접 인쇄"용이라 폰트 축소·내비 제거를 하는데, 이 스크립트는
 *      화면판 보존이 목적이므로 그 규칙을 쓰지 않는다)
 *   2. @page A4·여백 지정, 배경색 강제 인쇄(print-color-adjust) — 워시·상충 박스 배경 보존
 *   3. 페이지 나눔 힌트만 추가 — 제목이 페이지 끝에 홀로 남거나 표 행·근거 항목이
 *      갈리지 않게. 시각은 바꾸지 않는다.
 *
 * 폭: 브리프 서식은 본문 580px + 표 좌우 bleed 56px = 692px. A4(794px@96dpi)에서 좌우 13mm
 * 여백을 빼면 약 696px이라 딱 들어간다. 여백을 더 키우면 표가 잘리니 주의.
 */

import { readFileSync, writeFileSync, existsSync, unlinkSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve, dirname, basename } from "node:path";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const args = process.argv.slice(2);
const src = args.find((a) => !a.startsWith("--"));
const outIdx = args.indexOf("--out");
if (!src || !existsSync(src)) {
  console.error("사용법: node scripts/build-brief-pdf.mjs <화면판.html> [--out <파일.pdf>]");
  process.exit(1);
}
if (!existsSync(CHROME)) {
  console.error(`Chrome을 찾을 수 없습니다: ${CHROME}`);
  process.exit(1);
}

const srcPath = resolve(src);
const pdfPath = outIdx !== -1 ? resolve(args[outIdx + 1]) : srcPath.replace(/\.html$/, ".pdf");
const tmpPath = resolve(dirname(srcPath), `.${basename(srcPath, ".html")}.print-tmp.html`);

// @media print{ … } 블록을 중괄호 균형 맞춰 제거 (중첩 규칙 포함)
function stripPrintBlocks(css) {
  let out = css;
  let i;
  while ((i = out.indexOf("@media print")) !== -1) {
    const open = out.indexOf("{", i);
    if (open === -1) break;
    let depth = 0, k = open;
    for (; k < out.length; k++) {
      if (out[k] === "{") depth++;
      else if (out[k] === "}") { depth--; if (depth === 0) break; }
    }
    out = out.slice(0, i) + out.slice(k + 1);
  }
  return out;
}

const PAPER = `
/* --- build-brief-pdf: 인쇄 최소 조정 (시각 불변) --- */
@page{size:A4;margin:16mm 13mm 18mm}
html,body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{padding-top:6mm;padding-bottom:0}
/* 큰 컨테이너(section·appendix)에는 걸지 않는다 — 통째로 다음 쪽으로 밀려 빈 쪽이 생긴다 */
.verdict .v,ul.ev>li,ol.how li,ul.plain li,.clash,.caveat,tr{break-inside:avoid}
h1,h2,h3,h4,.sec-head,.lede{break-after:avoid}
.tbl{overflow:visible}
thead{display:table-header-group}
`;

let html = readFileSync(srcPath, "utf8");
let stripped = 0;
html = html.replace(/<style>([\s\S]*?)<\/style>/, (m, css) => {
  const cleaned = stripPrintBlocks(css);
  stripped = (css.match(/@media print/g) || []).length;
  return `<style>${cleaned}\n${PAPER}</style>`;
});

writeFileSync(tmpPath, html);
try {
  execFileSync(
    CHROME,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      "--virtual-time-budget=10000", // Google Fonts 로딩 여유
      `file://${tmpPath}`,
    ],
    { stdio: ["ignore", "ignore", "ignore"] }
  );
} finally {
  if (existsSync(tmpPath)) unlinkSync(tmpPath);
}

const pdf = readFileSync(pdfPath);
const pages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
console.log(`✓ ${pdfPath}`);
console.log(`  ${pages}쪽 · ${(pdf.length / 1024).toFixed(0)}KB · 제거한 @media print 블록 ${stripped}개`);
console.log("  마지막 쪽이 거의 비어 있으면(고아 페이지) 화면판에서 분량을 조정하고 다시 돌린다.");
