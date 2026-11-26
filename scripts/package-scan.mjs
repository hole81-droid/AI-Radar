#!/usr/bin/env node
// 데일리 스캔 산출물 패키징 — 뉴스레터 + 그날 만들어진/갱신된 위키 페이지를 한 폴더·zip으로 묶는다.
//
// 사용법:
//   node scripts/package-scan.mjs [YYYY-MM-DD] [--out DIR] [--all]
//     날짜 생략 시 오늘(Asia/Seoul). --all 은 index/log/sources 같은 관리 파일까지 포함.
//
// 출력: <out>/ai-radar-YYYY-MM-DD/ 폴더와 동명의 .zip, 그리고 stdout에 JSON 요약
//   { date, dir, zip, files: [...], newsletterHtml }
// 전송 수단(메일 등)은 이 스크립트가 뱉은 zip 경로를 첨부하면 된다.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repoRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

// 관리·인덱스 파일 — 전체 파일이 첨부돼도 읽을 가치가 낮아 기본 제외
const HOUSEKEEPING = new Set(["index.md", "log.md", "sources.md", "CLAUDE.md"]);

function git(args) {
  return execFileSync("git", args, { cwd: repoRoot, encoding: "utf8" }).trim();
}

function seoulToday() {
  return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
}

function parseArgs(argv) {
  const opts = { date: null, out: null, all: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--all") opts.all = true;
    else if (a === "--out") opts.out = argv[++i];
    else if (/^\d{4}-\d{2}-\d{2}$/.test(a)) opts.date = a;
    else throw new Error(`알 수 없는 인자: ${a}`);
  }
  opts.date ||= seoulToday();
  opts.out ||= path.join(repoRoot, "_outbox");
  return opts;
}

// 그날 스캔 커밋들이 건드린 파일. 커밋이 없으면(아직 미커밋) 워킹트리 변경분으로 대체.
// Map<경로, "A"|"M"> — A(신규 생성)만 메일 첨부 대상으로 골라내기 위해 상태를 함께 본다.
function changedFiles(date) {
  const hashes = git(["log", `--grep=데일리 스캔 ${date}`, "--format=%H"])
    .split("\n")
    .filter(Boolean);

  const map = new Map();
  const note = (status, p) => {
    if (!p) return;
    // 여러 커밋에 걸쳐 있으면 "신규"가 우선 (생성 후 갱신도 결국 신규 페이지다)
    if (map.get(p) === "A") return;
    map.set(p, status === "A" ? "A" : "M");
  };

  for (const h of hashes) {
    const out = git(["show", "--name-status", "--format=", h]);
    for (const line of out.split("\n")) {
      const [st, ...rest] = line.trim().split(/\t/);
      if (st) note(st[0], rest[rest.length - 1]?.trim());
    }
  }
  if (map.size === 0) {
    for (const line of git(["status", "--porcelain"]).split("\n")) {
      if (!line.trim()) continue;
      const st = line.slice(0, 2).trim();
      note(st.includes("A") || st.includes("?") ? "A" : "M", line.slice(3).trim());
    }
  }
  return map;
}

// 메일 첨부로 보낼 가치가 있는 위키 페이지 — 그날 새로 생성된 지식 페이지만.
// tools/ 허브·timeline·case-catalog 는 증분 갱신이라 단독으로 읽을 값이 낮아 제외한다.
const ATTACH_DIRS = ["wiki/use-cases/", "wiki/updates/", "wiki/players/", "wiki/concepts/"];
const NOT_A_PAGE = /\/case-catalog\.md$/;

function isAttachablePage(file, status) {
  return (
    status === "A" &&
    ATTACH_DIRS.some((d) => file.startsWith(d)) &&
    !NOT_A_PAGE.test(file)
  );
}

function selectOutputs(changed, date, includeAll) {
  const newsletter = `newsletter/${date}.md`;
  const wiki = [];
  const newPages = [];
  for (const [f, status] of changed) {
    if (f === newsletter) continue; // 뉴스레터는 따로 최상단에 둔다
    if (!includeAll && HOUSEKEEPING.has(path.basename(f))) continue;
    if (f.startsWith("wiki/")) wiki.push(f);
    else if (includeAll) wiki.push(f);
    if (isAttachablePage(f, status)) newPages.push(f);
  }
  wiki.sort();
  newPages.sort();
  const hasNewsletter = fs.existsSync(path.join(repoRoot, newsletter));
  return { newsletter: hasNewsletter ? newsletter : null, wiki, newPages };
}

/* ---------- 뉴스레터 마크다운 → 읽기 좋은 HTML ----------
   뉴스레터는 CLAUDE.md의 고정 템플릿을 따르므로 그 문법만 다룬다.
   web/DESIGN.md의 B1 규칙(흑백+레드, 괘선 위계, " — "→": ")을 그대로 적용. */

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// " — " → ": "(2026-07-09), "★최우선" → "업무 적용 Case"(2026-08-19). 원본은 보존, 표시만 치환.
const prettify = (s) =>
  s.replace(/★\s*최우선/g, "업무 적용 Case").replace(/\s+—\s+/g, ": ");

function inline(text) {
  let s = esc(prettify(text));
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1&#8239;↗</a>');
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
  return s;
}

function renderNewsletter(md) {
  const body = md.replace(/^---\n[\s\S]*?\n---\n/, ""); // frontmatter 제거
  const out = [];
  let listDepth = 0;

  const closeLists = (to = 0) => {
    while (listDepth > to) {
      out.push("</ul>");
      listDepth--;
    }
  };

  for (const raw of body.split("\n")) {
    const line = raw.replace(/\s+$/, "");
    if (!line.trim()) continue;

    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) {
      closeLists();
      const lv = h[1].length;
      // 섹션 제목의 ★최우선 표기는 제거 (2026-07-09 사용자 지정)
      const txt = inline(h[2].replace(/\s*★.*$/, ""));
      out.push(`<h${lv}>${txt}</h${lv}>`);
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      closeLists();
      out.push("<hr>");
      continue;
    }

    if (line.startsWith(">")) {
      closeLists();
      out.push(`<blockquote>${inline(line.replace(/^>\s?/, ""))}</blockquote>`);
      continue;
    }

    const li = line.match(/^(\s*)-\s+(?:\[[ xX]\]\s*)?(.*)$/);
    if (li) {
      const depth = Math.floor(li[1].length / 4) + 1; // 템플릿은 4칸 들여쓰기
      while (listDepth < depth) {
        out.push(listDepth === 0 ? '<ul class="items">' : "<ul>");
        listDepth++;
      }
      closeLists(depth);
      out.push(`<li>${inline(li[2])}</li>`);
      continue;
    }

    closeLists();
    out.push(`<p>${inline(line)}</p>`);
  }
  closeLists();
  return out.join("\n");
}

const CSS = `
:root{--ink:#111;--red:#e63329;--body:#333;--soft:#555;--faint:#888;--hair:#e5e5e5;--wash:#f7f7f7}
body{margin:0;background:#fff;color:var(--body);line-height:1.7;font-size:16px;
  font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic",sans-serif;
  letter-spacing:-.01em}
.wrap{max-width:760px;margin:0 auto;padding:32px 24px 64px}
.mast{font-size:13px;font-weight:700;letter-spacing:.18em;color:var(--ink)}
.rule{border-top:3px solid var(--ink);margin:8px 0 0}
h1{font-size:27px;font-weight:600;color:var(--ink);letter-spacing:-.02em;line-height:1.3;margin:22px 0 6px}
h2{font-size:14px;font-weight:700;color:var(--ink);letter-spacing:.1em;
  border-top:1px solid var(--ink);margin:34px 0 12px;padding-top:10px}
h3{font-size:15px;color:var(--ink);margin:20px 0 6px}
p{margin:10px 0}
a{color:var(--red);text-decoration:none;border-bottom:1px solid rgba(230,51,41,.35)}
code{background:var(--wash);padding:1px 5px;font-size:13.5px;
  font-family:ui-monospace,"SF Mono",Menlo,monospace}
blockquote{margin:14px 0;padding:9px 16px;border-left:3px solid var(--red);
  background:var(--wash);font-size:14.5px;color:var(--ink)}
ul.items{list-style:none;padding:0;margin:12px 0}
ul.items>li{border:1px solid var(--hair);padding:13px 16px;margin:0 0 -1px}
ul.items ul{margin:8px 0 0;padding-left:0;list-style:none}
ul.items ul li{font-size:14px;color:var(--soft);padding:3px 0 3px 12px;
  border-left:2px solid var(--hair);margin:0}
strong{color:var(--ink)}
hr{border:none;border-top:1px solid var(--hair);margin:26px 0}
.foot{border-top:3px solid var(--ink);margin-top:32px;padding-top:10px;
  font-size:11.5px;color:var(--faint);letter-spacing:.06em}
@media print{a{border-bottom:none}.wrap{padding:0}}
`;

function newsletterHtml(md, date, webUrl) {
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>AI Radar 데일리 — ${date}</title>
<style>${CSS}</style></head>
<body><div class="wrap">
<div class="mast">AI RADAR</div><div class="rule"></div>
${renderNewsletter(md)}
<div class="foot">AI RADAR · 자동 생성 아카이브 · 웹: <a href="${webUrl}">${webUrl}</a></div>
</div></body></html>`;
}

/* ---------- 실행 ---------- */

const { date, out, all } = parseArgs(process.argv.slice(2));
const changed = changedFiles(date);
const { newsletter, wiki, newPages } = selectOutputs(changed, date, all);

if (!newsletter && wiki.length === 0) {
  console.error(`[package-scan] ${date} 산출물을 찾지 못했습니다. 스캔이 실행되지 않았을 수 있습니다.`);
  process.exit(2);
}

const stageName = `ai-radar-${date}`;
const stageDir = path.join(out, stageName);
fs.rmSync(stageDir, { recursive: true, force: true });
fs.mkdirSync(stageDir, { recursive: true });

const bundled = [];
const attachments = []; // 메일 첨부용 — zip 없이 개별 텍스트 파일만 (회사 메일 필터 안전)
const webUrl = `https://ai-radar-web-five.vercel.app/issues/${date}`;
let headline = [];

if (newsletter) {
  const md = fs.readFileSync(path.join(repoRoot, newsletter), "utf8");
  // 파일명은 ASCII로 — 한글 파일명은 macOS가 분해형(NFD)으로 인코딩해
  // Windows/Outlook에서 자모가 분리돼 보일 수 있다. 내용은 한국어 그대로.
  const mdName = `ai-radar-${date}.md`;
  const htmlName = `ai-radar-${date}.html`;
  const mdPath = path.join(stageDir, mdName);
  const htmlPath = path.join(stageDir, htmlName);
  fs.writeFileSync(mdPath, md);
  fs.writeFileSync(htmlPath, newsletterHtml(md, date, webUrl));
  bundled.push(mdName, htmlName);
  attachments.push(htmlPath, mdPath); // HTML을 앞에 — 수신자가 먼저 열어보게

  headline = (md.match(/##\s*오늘의 헤드라인\s*\n([\s\S]*?)(?=\n##|$)/)?.[1] ?? "")
    .split(/\n+/)
    .map((s) => prettify(s.trim()))
    .filter(Boolean);
}

for (const f of wiki) {
  const src = path.join(repoRoot, f);
  if (!fs.existsSync(src)) continue; // 삭제된 파일은 건너뛴다
  const dest = path.join(stageDir, f);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  bundled.push(f);
  if (newPages.includes(f)) attachments.push(dest);
}

const manifest = [
  `# AI Radar 데일리 산출물 — ${date}`,
  "",
  `웹에서 보기: ${webUrl}`,
  "",
  newsletter
    ? `## 뉴스레터\n- ai-radar-${date}.html (브라우저에서 바로 읽기)\n- ai-radar-${date}.md (원본)`
    : "## 뉴스레터\n- (없음)",
  "",
  "## 새로 만들어진 위키 페이지",
  newPages.length ? newPages.map((f) => `- ${f}`).join("\n") : "- (없음)",
  "",
  "## 갱신된 위키 페이지 (허브·연대기·인덱스 포함)",
  wiki.filter((f) => !newPages.includes(f)).map((f) => `- ${f}`).join("\n") || "- (없음)",
  "",
  `_${new Date().toISOString()} 자동 생성_`,
].join("\n");
fs.writeFileSync(path.join(stageDir, "CONTENTS.md"), manifest);
bundled.push("CONTENTS.md");

const zipPath = path.join(out, `${stageName}.zip`);
fs.rmSync(zipPath, { force: true });
execFileSync("zip", ["-r", "-q", "-X", zipPath, stageName], { cwd: out });

console.log(
  JSON.stringify(
    {
      date,
      dir: stageDir,
      zip: zipPath,
      webUrl,
      headline,
      attachments, // 메일에 붙일 개별 파일 절대경로
      newPages,
      files: bundled,
      count: bundled.length,
    },
    null,
    2
  )
);
