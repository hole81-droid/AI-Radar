#!/usr/bin/env node
// AI Radar 전체 아카이브를 zip 하나로 묶어 Mail.app으로 발송한다.
//
// 사용법: node scripts/send-archive.mjs [--to addr] [--from addr] [--send]
//   --send 없으면 초안만 만든다.
//
// 참고: 데일리 발송(send-scan.mjs)은 회사 메일 필터를 피해 개별 파일을 첨부하지만,
// 전체 아카이브는 파일이 200개가 넘어 zip이 유일한 현실적 선택이다. zip이 차단될
// 가능성이 있으므로 본문에 웹 링크를 함께 넣는다.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.dirname(scriptDir);

const RECIPIENT = "shoon.lee@sk.com, david.j@sk.com";
const WEB = "https://ai-radar-web-five.vercel.app";

function parseArgs(argv) {
  const o = { to: RECIPIENT, from: "", send: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--send") o.send = true;
    else if (a === "--to") o.to = argv[++i];
    else if (a === "--from") o.from = argv[++i];
    else throw new Error(`알 수 없는 인자: ${a}`);
  }
  return o;
}

const { to, from, send } = parseArgs(process.argv.slice(2));

// 1) 아카이브 패키징
let pkg;
try {
  pkg = JSON.parse(
    execFileSync("node", ["scripts/package-archive.mjs"], {
      cwd: repoRoot,
      encoding: "utf8",
      maxBuffer: 10 * 1024 * 1024,
    })
  );
} catch (e) {
  console.error("[send-archive] 패키징 실패:", e.stderr?.toString?.() ?? e.message);
  process.exit(2);
}

if (!fs.existsSync(pkg.zip)) {
  console.error("[send-archive] zip 파일이 없습니다:", pkg.zip);
  process.exit(2);
}

const c = pkg.counts;
const cat = (k, label) => (c.byCategory[k] ? `  - ${label} ${c.byCategory[k]}건\n` : "");

const subject = `[AI Radar] 전체 아카이브 — ${pkg.period} (데일리 ${c.issues}호 · 위키 ${c.wiki}건)`;

const body = [
  "AI Radar가 지금까지 수집·정리한 자료 전체를 보내드립니다.",
  "",
  `수집 기간: ${pkg.period}`,
  `데일리 브리핑 ${c.issues}호 / 위키 페이지 ${c.wiki}건 (첨부 ${pkg.sizeMB}MB)`,
  "",
  "위키 구성",
  cat("use-cases", "에이전트·자동화 Use Case") +
    cat("updates", "업데이트") +
    cat("concepts", "개념") +
    cat("players", "회사·인물") +
    cat("tools", "도구 허브") +
    cat("analysis", "분석"),
  "─────────────────────────────",
  "",
  "[보시는 방법]",
  "첨부 zip을 풀고 index.html 을 브라우저로 열면 전체 목록에서 바로 탐색할 수 있습니다.",
  "인터넷 연결 없이도 동작하며, 문서 사이 링크도 그대로 이어집니다.",
  "",
  "  index.html    아카이브 표지 · 전체 목록",
  "  issues/       데일리 브리핑 (HTML)",
  "  wiki/         위키 페이지 (HTML)",
  "  source/       원본 마크다운 (편집·재활용용)",
  "",
  `[웹에서 보기] 최신 내용은 여기서도 볼 수 있습니다: ${WEB}`,
  "  (사내 메일 정책으로 zip 첨부가 차단되면 위 링크를 이용해 주세요.)",
  "",
  "AI Radar는 Claude가 매일 자동으로 수집·정리하는 AI 트렌드 위키입니다.",
].join("\n");

const osaArgs = [
  path.join(scriptDir, "mail-send.applescript"),
  subject,
  body,
  to,
  from,
  send ? "send" : "draft",
  pkg.zip,
];

let result;
try {
  result = execFileSync("osascript", osaArgs, { encoding: "utf8" }).trim();
} catch (e) {
  console.error("[send-archive] Mail.app 호출 실패:", e.stderr?.toString?.() ?? e.message);
  process.exit(3);
}

if (result.startsWith("ERROR")) {
  console.error(`[send-archive] ${result}`);
  process.exit(4);
}

console.log(
  JSON.stringify(
    {
      mode: result,
      to,
      from: from || "(기본 계정)",
      subject,
      zip: pkg.zip,
      sizeMB: pkg.sizeMB,
      counts: c,
    },
    null,
    2
  )
);
