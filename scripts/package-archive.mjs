#!/usr/bin/env node
// AI Radar 전체 아카이브 패키징 — 처음부터 지금까지의 뉴스레터·위키를
// 브라우저에서 바로 읽을 수 있는 HTML 사이트 + 원본 마크다운으로 묶어 zip을 만든다.
//
// 사용법: node scripts/package-archive.mjs [--out DIR]
// 출력: <out>/ai-radar-archive-<오늘>.zip  (+ 같은 이름의 폴더)
//   stdout에 JSON 요약 { zip, dir, counts, sizeMB }

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import {
  parseFrontmatter,
  renderMarkdown,
  htmlPage,
  esc,
  prettify,
  CSS,
} from "./lib/md-html.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.dirname(scriptDir);

const WEB = "https://ai-radar-web-five.vercel.app";
const CATEGORY_LABELS = {
  "use-cases": "에이전트·자동화 Use Case",
  updates: "업데이트",
  concepts: "개념",
  players: "회사·인물",
  tools: "도구 허브",
  analysis: "분석",
  ".": "기타",
};
const CATEGORY_ORDER = ["use-cases", "updates", "concepts", "players", "tools", "analysis", "."];

function seoulToday() {
  return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
}

function parseArgs(argv) {
  const o = { out: path.join(repoRoot, "_outbox") };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--out") o.out = argv[++i];
    else throw new Error(`알 수 없는 인자: ${argv[i]}`);
  }
  return o;
}

function walk(dir, base = dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(full, base));
    else if (e.name.endsWith(".md")) out.push(path.relative(base, full));
  }
  return out;
}

const titleOf = (body, fallback) => body.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? fallback;

// 상대경로 계산 — fromDir(아카이브 루트 기준)에서 target(루트 기준)으로
const rel = (fromDir, target) => {
  const r = path.relative(fromDir || ".", target);
  return r.split(path.sep).join("/");
};

/* ---------- 수집 ---------- */

const { out } = parseArgs(process.argv.slice(2));
const today = seoulToday();

const newsletterFiles = walk(path.join(repoRoot, "newsletter")).sort().reverse(); // 최신 먼저
const wikiFiles = walk(path.join(repoRoot, "wiki")).sort();

if (newsletterFiles.length === 0 && wikiFiles.length === 0) {
  console.error("[package-archive] 아카이브할 내용이 없습니다.");
  process.exit(2);
}

// 위키 슬러그 → 아카이브 내 HTML 경로 (위키링크 해석용)
const wikiPages = wikiFiles.map((f) => {
  const slug = f.replace(/\.md$/, "").split(path.sep).join("/");
  const raw = fs.readFileSync(path.join(repoRoot, "wiki", f), "utf8");
  const { meta, body } = parseFrontmatter(raw);
  const dir = path.dirname(slug) === "." ? "." : path.dirname(slug).split("/")[0];
  return {
    slug,
    file: f,
    raw,
    meta,
    body,
    title: titleOf(body, slug),
    category: dir,
    htmlPath: `wiki/${slug}.html`,
  };
});

const bySlug = new Map(wikiPages.map((p) => [p.slug, p]));
const byLeaf = new Map();
for (const p of wikiPages) {
  const leaf = p.slug.split("/").pop();
  if (!byLeaf.has(leaf)) byLeaf.set(leaf, p);
}

function makeResolver(fromDir) {
  return (name) => {
    const n = name.trim();
    const hit = bySlug.get(n) ?? byLeaf.get(n) ?? byLeaf.get(n.replace(/\.md$/, ""));
    return hit ? rel(fromDir, hit.htmlPath) : null;
  };
}

/* ---------- 출력 준비 ---------- */

const stageName = `ai-radar-archive-${today}`;
const stageDir = path.join(out, stageName);
fs.rmSync(stageDir, { recursive: true, force: true });
fs.mkdirSync(stageDir, { recursive: true });

const write = (relPath, content) => {
  const p = path.join(stageDir, relPath);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
};

write("style.css", CSS);

/* ---------- 뉴스레터 → issues/*.html ---------- */

const issues = [];
for (const f of newsletterFiles) {
  const date = f.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(repoRoot, "newsletter", f), "utf8");
  const { body } = parseFrontmatter(raw);
  const resolver = makeResolver("issues");

  const headline = (body.match(/##\s*오늘의 헤드라인\s*\n([\s\S]*?)(?=\n##|$)/)?.[1] ?? "")
    .split(/\n+/)
    .map((s) => prettify(s.trim().replace(/^\d+\.\s*/, "").replace(/\*\*/g, "")))
    .filter(Boolean);

  const nav = [];
  const idx = newsletterFiles.indexOf(f);
  if (idx < newsletterFiles.length - 1)
    nav.push(`<a href="${newsletterFiles[idx + 1].replace(/\.md$/, ".html")}">← 이전 호</a>`);
  if (idx > 0)
    nav.push(`<a href="${newsletterFiles[idx - 1].replace(/\.md$/, ".html")}">다음 호 →</a>`);
  nav.push(`<a href="../index.html">아카이브 목록</a>`);

  write(
    `issues/${date}.html`,
    htmlPage({
      title: `AI Radar 데일리 — ${date}`,
      crumb: `데일리 브리핑 · ${date}`,
      cssHref: "../style.css",
      homeHref: "../index.html",
      body: renderMarkdown(body, resolver),
      footer: `${nav.join(" · ")} · 웹: <a href="${WEB}/issues/${date}">${WEB}/issues/${date}</a>`,
    })
  );

  issues.push({ date, headline: headline[0] ?? "", headlineAll: headline });
  write(`source/newsletter/${f}`, raw);
}

/* ---------- 위키 → wiki/**.html ---------- */

for (const p of wikiPages) {
  const fromDir = path.dirname(p.htmlPath);
  const depth = p.htmlPath.split("/").length - 1;
  const resolver = makeResolver(fromDir);

  const tags = [];
  const pushTag = (v, hi = false) => v && tags.push(`<span class="tag${hi ? " hi" : ""}">${esc(v)}</span>`);
  pushTag(typeof p.meta.type === "string" ? p.meta.type : null);
  pushTag(typeof p.meta.date === "string" ? p.meta.date : null);
  if (typeof p.meta.importance === "string") pushTag(`중요도 ${p.meta.importance}`, p.meta.importance === "high");
  for (const u of Array.isArray(p.meta.uses) ? p.meta.uses : []) pushTag(`활용 ${u}`);
  if (typeof p.meta.maturity === "string") pushTag(p.meta.maturity, p.meta.maturity === "production");

  const src =
    typeof p.meta.source === "string" && p.meta.source.startsWith("http")
      ? `<p class="crumb" style="margin-top:10px"><a href="${esc(p.meta.source)}" target="_blank" rel="noreferrer">원문 출처&#8239;↗</a></p>`
      : "";

  write(
    p.htmlPath,
    htmlPage({
      title: p.title,
      crumb: `${CATEGORY_LABELS[p.category] ?? p.category} · ${p.slug}`,
      cssHref: `${"../".repeat(depth)}style.css`,
      homeHref: `${"../".repeat(depth)}index.html`,
      body:
        (tags.length ? `<div class="meta">${tags.join("")}</div>` : "") +
        src +
        renderMarkdown(p.body, resolver),
      footer: `<a href="${"../".repeat(depth)}index.html">아카이브 목록</a> · 웹: <a href="${WEB}/wiki/${p.slug}">${WEB}/wiki/${p.slug}</a>`,
    })
  );

  write(`source/wiki/${p.file}`, p.raw);
}

// index.md도 원본에 포함
const rootIndex = path.join(repoRoot, "index.md");
if (fs.existsSync(rootIndex)) write("source/index.md", fs.readFileSync(rootIndex, "utf8"));

/* ---------- index.html (아카이브 표지) ---------- */

const monthGroups = new Map();
for (const it of issues) {
  const m = it.date.slice(0, 7);
  if (!monthGroups.has(m)) monthGroups.set(m, []);
  monthGroups.get(m).push(it);
}

const issueHtml = [...monthGroups.entries()]
  .map(
    ([month, list]) => `<h3>${month.replace("-", "년 ")}월 <span class="crumb">${list.length}건</span></h3>
<ul class="lv1">${list
      .map(
        (it) =>
          `<li><a class="wl" href="issues/${it.date}.html"><strong>${it.date}</strong></a>${
            it.headline ? `<br><span style="font-size:13.5px;color:var(--soft)">${esc(it.headline)}</span>` : ""
          }</li>`
      )
      .join("")}</ul>`
  )
  .join("\n");

const wikiByCat = new Map();
for (const p of wikiPages) {
  if (!wikiByCat.has(p.category)) wikiByCat.set(p.category, []);
  wikiByCat.get(p.category).push(p);
}

const wikiHtml = CATEGORY_ORDER.filter((c) => wikiByCat.has(c))
  .map((c) => {
    const list = wikiByCat.get(c).sort((a, b) => {
      const da = typeof a.meta.date === "string" ? a.meta.date : "";
      const db = typeof b.meta.date === "string" ? b.meta.date : "";
      return db.localeCompare(da) || a.title.localeCompare(b.title);
    });
    return `<h3>${CATEGORY_LABELS[c] ?? c} <span class="crumb">${list.length}건</span></h3>
<ul class="lv1">${list
      .map((p) => {
        const d = typeof p.meta.date === "string" ? p.meta.date : "";
        const extra =
          c === "use-cases" && typeof p.meta.outcome === "string"
            ? `<br><span style="font-size:13px;color:var(--soft)">${esc(prettify(p.meta.outcome))}</span>`
            : "";
        return `<li><a class="wl" href="${p.htmlPath}">${esc(p.title)}</a>${
          d ? ` <span class="crumb">${d}</span>` : ""
        }${extra}</li>`;
      })
      .join("")}</ul>`;
  })
  .join("\n");

const period = issues.length
  ? `${issues[issues.length - 1].date} ~ ${issues[0].date}`
  : "(뉴스레터 없음)";

write(
  "index.html",
  htmlPage({
    title: `AI Radar 아카이브 — ${period}`,
    crumb: `전체 아카이브 · ${today} 기준`,
    cssHref: "style.css",
    homeHref: "index.html",
    body: `
<h1>AI Radar 전체 아카이브</h1>
<p>Claude가 매일 수집·정리한 AI 트렌드 기록입니다. 수집 기간 <strong>${period}</strong>.
데일리 브리핑 <strong>${issues.length}건</strong>, 위키 페이지 <strong>${wikiPages.length}건</strong>.</p>
<div class="meta">
  <span class="tag hi">데일리 브리핑 ${issues.length}</span>
  ${CATEGORY_ORDER.filter((c) => wikiByCat.has(c))
    .map((c) => `<span class="tag">${CATEGORY_LABELS[c] ?? c} ${wikiByCat.get(c).length}</span>`)
    .join("")}
</div>
<p class="crumb" style="margin-top:14px">이 폴더의 <code>index.html</code>을 브라우저로 열면 전체를 오프라인으로 열람할 수 있습니다.
원본 마크다운은 <code>source/</code> 폴더에 있습니다. 최신 내용은 웹에서도 볼 수 있습니다: <a href="${WEB}">${WEB}</a></p>

<h2>데일리 브리핑</h2>
${issueHtml}

<h2>위키</h2>
${wikiHtml}
`,
    footer: `AI RADAR · ${today} 생성 · 웹: <a href="${WEB}">${WEB}</a>`,
  })
);

write(
  "README.txt",
  [
    `AI Radar 전체 아카이브 (${today} 생성)`,
    "",
    `수집 기간: ${period}`,
    `데일리 브리핑 ${issues.length}건 / 위키 페이지 ${wikiPages.length}건`,
    "",
    "[읽는 방법]",
    "  index.html 을 브라우저로 열면 전체 목록에서 바로 탐색할 수 있습니다.",
    "  인터넷 연결 없이도 동작합니다.",
    "",
    "[폴더 구성]",
    "  index.html          아카이브 표지·전체 목록",
    "  issues/             데일리 브리핑 (HTML)",
    "  wiki/               위키 페이지 (HTML)",
    "  source/             원본 마크다운 (편집·재활용용)",
    "",
    `[웹] ${WEB}`,
  ].join("\n")
);

/* ---------- zip ---------- */

const zipPath = path.join(out, `${stageName}.zip`);
fs.rmSync(zipPath, { force: true });
execFileSync("zip", ["-r", "-q", "-X", zipPath, stageName], { cwd: out });

const sizeMB = (fs.statSync(zipPath).size / 1024 / 1024).toFixed(2);

console.log(
  JSON.stringify(
    {
      zip: zipPath,
      dir: stageDir,
      period,
      counts: {
        issues: issues.length,
        wiki: wikiPages.length,
        byCategory: Object.fromEntries([...wikiByCat].map(([k, v]) => [k, v.length])),
      },
      sizeMB: Number(sizeMB),
    },
    null,
    2
  )
);
