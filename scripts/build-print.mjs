#!/usr/bin/env node
/**
 * Insight 리포트 인쇄판 빌드
 *
 *   node scripts/build-print.mjs 2026-09 [--pdf]
 *
 * 화면판(outputs/insight-report/YYYY-MM.html)에서 인쇄판(YYYY-MM-print.html)을
 * 파생한다. 변환은 결정적이므로 **인쇄판을 직접 고치지 않는다** — 화면판을 고치고
 * 이 스크립트를 다시 돌린다. (2026-09호 작성 중 같은 수정을 두 파일에 손으로 두 번씩
 * 적용하다 드리프트가 난 경험에서 만들어진 스크립트다.)
 *
 * 변환 규칙
 *   1. <title>에 " (인쇄판)" 추가
 *   2. </style> 앞에 docs/insight-print.css 삽입 (pt 단위 인쇄 전용 규칙)
 *   3. <nav>…</nav> 제거 (화면 전용 내비게이션)
 *   4. <details>를 펼침 — 접힌 근거를 인쇄판에서는 모두 보여준다 (inline style은 보존)
 *        <details class="X"><summary>L</summary>  →  <div class="unfold"><div class="unfold-lab">L</div>
 *        </details>                                →  </div>
 *   5. 본문 내 이동 링크 <a class="goto" …>를 <span class="goto">로 (종이에서 링크는 무의미)
 *   6. footer의 "다음 호"를 "인쇄판 · 다음 호"로
 *
 * --pdf 를 주면 Chrome headless로 YYYY-MM.pdf까지 렌더하고 페이지 수를 출력한다.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const issue = process.argv[2];
const wantPdf = process.argv.includes("--pdf");

if (!issue || !/^\d{4}-\d{2}$/.test(issue)) {
  console.error("사용법: node scripts/build-print.mjs YYYY-MM [--pdf]");
  process.exit(1);
}

const srcPath = resolve(ROOT, `outputs/insight-report/${issue}.html`);
const outPath = resolve(ROOT, `outputs/insight-report/${issue}-print.html`);
const pdfPath = resolve(ROOT, `outputs/insight-report/${issue}.pdf`);
const cssPath = resolve(ROOT, "docs/insight-print.css");

for (const [label, p] of [["화면판", srcPath], ["인쇄 CSS", cssPath]]) {
  if (!existsSync(p)) {
    console.error(`${label}을 찾을 수 없습니다: ${p}`);
    process.exit(1);
  }
}

let html = readFileSync(srcPath, "utf8");
const printCss = readFileSync(cssPath, "utf8").trimEnd();
const counts = {};
const bump = (k, n = 1) => (counts[k] = (counts[k] || 0) + n);

// 1. 제목
html = html.replace(/<title>(.*?)<\/title>/, (m, t) => {
  if (t.includes("(인쇄판)")) return m;
  bump("제목");
  return `<title>${t} (인쇄판)</title>`;
});

// 2. 인쇄 CSS 삽입
if (html.includes("═══ 인쇄판")) {
  console.error("이미 인쇄 CSS가 들어 있습니다. 화면판을 원본으로 쓰고 있는지 확인하세요.");
  process.exit(1);
}
const styleEnd = html.lastIndexOf("</style>");
if (styleEnd === -1) {
  console.error("</style>를 찾지 못했습니다.");
  process.exit(1);
}
html = html.slice(0, styleEnd) + "\n" + printCss + "\n" + html.slice(styleEnd);
bump("인쇄 CSS");

// 3. 내비게이션 제거
html = html.replace(/[ \t]*<nav class="nav">[\s\S]*?<\/nav>\n?/g, () => {
  bump("내비 제거");
  return "";
});

// 4. details 펼치기
html = html.replace(
  /<details\b([^>]*)><summary>([\s\S]*?)<\/summary>/g,
  (_m, attrs, label) => {
    bump("접힘 펼침");
    const style = /\sstyle="([^"]*)"/.exec(attrs);
    const keep = style ? ` style="${style[1]}"` : "";
    return `<div class="unfold"${keep}><div class="unfold-lab">${label}</div>`;
  }
);
html = html.replace(/<\/details>/g, () => {
  bump("접힘 닫기");
  return "</div>";
});

// 5. 이동 링크를 평문으로
html = html.replace(/<a class="goto"[^>]*>([\s\S]*?)<\/a>/g, (_m, text) => {
  bump("이동 링크");
  return `<span class="goto">${text}</span>`;
});

// 6. 푸터
html = html.replace(/<span>다음 호 /, () => {
  bump("푸터");
  return "<span>인쇄판 · 다음 호 ";
});

// 정합성: details 열기/닫기 짝이 맞아야 한다
if (counts["접힘 펼침"] !== counts["접힘 닫기"]) {
  console.error(
    `접힘 블록 짝이 맞지 않습니다: 열기 ${counts["접힘 펼침"]}개, 닫기 ${counts["접힘 닫기"]}개`
  );
  process.exit(1);
}
if (html.includes("<details") || html.includes("<summary")) {
  console.error("펼치지 못한 <details>가 남아 있습니다.");
  process.exit(1);
}

writeFileSync(outPath, html);
console.log(`인쇄판 생성: outputs/insight-report/${issue}-print.html`);
console.log(
  "  " +
    Object.entries(counts)
      .map(([k, v]) => `${k} ${v}`)
      .join(" · ")
);

if (!wantPdf) {
  console.log("  (PDF까지 만들려면 --pdf)");
  process.exit(0);
}

if (!existsSync(CHROME)) {
  console.error(`Chrome을 찾을 수 없습니다: ${CHROME}`);
  process.exit(1);
}

execFileSync(
  CHROME,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdfPath}`,
    "--virtual-time-budget=8000",
    `file://${outPath}`,
  ],
  { stdio: ["ignore", "ignore", "ignore"] }
);

// 페이지 수 — 마지막 페이지가 거의 비어 있는 '고아 페이지'는 눈으로 확인해야 한다
const pdf = readFileSync(pdfPath);
const pages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
console.log(`PDF 생성: outputs/insight-report/${issue}.pdf (${pages}쪽)`);
console.log(
  "  마지막 쪽과 Executive Summary 끝을 확인하세요: " +
    `pdftoppm -png -r 55 -f <쪽> -l <쪽> outputs/insight-report/${issue}.pdf /tmp/chk`
);
