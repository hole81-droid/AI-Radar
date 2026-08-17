#!/usr/bin/env node
// 데일리 스캔 산출물을 Mail.app으로 발송한다 (package-scan.mjs → Mail.app).
//
// 사용법:
//   node scripts/send-scan.mjs [YYYY-MM-DD] [--to addr] [--from addr] [--send]
//     --send 없으면 "초안(draft)"만 만든다 — 내용을 눈으로 확인하고 직접 보낼 때 사용.
//     --send 를 붙이면 실제로 발송한다 (스케줄 작업이 쓰는 경로).
//
// 기본 수신자는 RECIPIENT 상수. Mail.app이 자격증명을 갖고 있으므로 이 스크립트는
// 비밀정보를 읽거나 저장하지 않는다.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.dirname(scriptDir);

const RECIPIENT = "shoon.lee@sk.com, david.j@sk.com";

function parseArgs(argv) {
  const o = { date: null, to: RECIPIENT, from: "", send: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--send") o.send = true;
    else if (a === "--to") o.to = argv[++i];
    else if (a === "--from") o.from = argv[++i];
    else if (/^\d{4}-\d{2}-\d{2}$/.test(a)) o.date = a;
    else throw new Error(`알 수 없는 인자: ${a}`);
  }
  return o;
}

// 마크다운 강조 문법을 평문 메일 본문용으로 벗긴다
function stripMd(s) {
  return s
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1")
    .replace(/^\d+\.\s*/, "");
}

const { date, to, from, send } = parseArgs(process.argv.slice(2));

// 1) 산출물 패키징
const pkgArgs = ["scripts/package-scan.mjs"];
if (date) pkgArgs.push(date);
let pkg;
try {
  pkg = JSON.parse(execFileSync("node", pkgArgs, { cwd: repoRoot, encoding: "utf8" }));
} catch (e) {
  console.error("[send-scan] 패키징 실패 — 발송을 건너뜁니다.");
  console.error(e.stderr?.toString?.() ?? e.message);
  process.exit(2);
}

const attachments = pkg.attachments.filter((p) => fs.existsSync(p));
if (attachments.length === 0) {
  console.error("[send-scan] 첨부할 파일이 없습니다 — 발송을 건너뜁니다.");
  process.exit(2);
}

// 2) 제목·본문 구성
const subject = `[AI Radar] 데일리 브리핑 ${pkg.date}`;

const headlineBlock = pkg.headline.length
  ? pkg.headline.map((h, i) => `${i + 1}. ${stripMd(h)}`).join("\n\n")
  : "(오늘은 특이사항이 없었습니다.)";

const newPageBlock = pkg.newPages.length
  ? pkg.newPages.map((f) => `  - ${path.basename(f, ".md")}`).join("\n")
  : "  - (신규 페이지 없음)";

const body = [
  `AI Radar 데일리 브리핑 — ${pkg.date}`,
  "",
  "오늘의 헤드라인",
  "",
  headlineBlock,
  "",
  "─────────────────────────────",
  "",
  `웹에서 보기: ${pkg.webUrl}`,
  "",
  "첨부",
  `  - 뉴스레터 (HTML: 브라우저에서 바로 읽기 / MD: 원본)`,
  `  - 새로 정리된 위키 페이지 ${pkg.newPages.length}건`,
  newPageBlock,
  "",
  "이 메일은 AI Radar 데일리 스캔이 자동으로 보냈습니다.",
].join("\n");

// 3) Mail.app 호출
const osaArgs = [
  path.join(scriptDir, "mail-send.applescript"),
  subject,
  body,
  to,
  from,
  send ? "send" : "draft",
  ...attachments,
];

let result;
try {
  result = execFileSync("osascript", osaArgs, { encoding: "utf8" }).trim();
} catch (e) {
  console.error("[send-scan] Mail.app 호출 실패:", e.stderr?.toString?.() ?? e.message);
  process.exit(3);
}

if (result.startsWith("ERROR")) {
  console.error(`[send-scan] ${result}`);
  process.exit(4);
}

console.log(
  JSON.stringify(
    { mode: result, date: pkg.date, to, from: from || "(기본 계정)", attachments, subject },
    null,
    2
  )
);
