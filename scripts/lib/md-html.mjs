// 마크다운 → HTML 렌더러 (의존성 없음).
// AI Radar의 뉴스레터·위키 문법만 다룬다: 제목, 표, 목록(중첩), 인용, 코드블록,
// [[위키링크]], 인라인 강조·링크·코드, hr.
// 스타일 규칙은 web/DESIGN.md의 B1(흑백+레드) 체계를 따른다.

export const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// 본문 다듬기: " — "는 ": "로(2026-07-09), 구 표기 "★최우선"은 "업무 적용 Case"로(2026-08-19).
// 원본 마크다운은 기록으로 보존하고 표시 시점에만 치환한다.
export const prettify = (s) =>
  String(s)
    .replace(/★\s*최우선/g, "업무 적용 Case")
    .replace(/\s+—\s+/g, ": ");

export function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) return { meta: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { meta: {}, body: raw };
  const head = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\s*\n/, "");
  const meta = {};
  for (const line of head.split("\n")) {
    const m = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim();
    if (v.startsWith("[")) {
      const close = v.indexOf("]");
      if (close !== -1) v = v.slice(1, close).split(",").map((s) => s.trim()).filter(Boolean);
    }
    meta[m[1]] = v;
  }
  return { meta, body };
}

// resolveWikilink(name) -> href | null  (null이면 평문으로 남긴다)
function inline(text, resolveWikilink) {
  let s = esc(prettify(text));

  // [[위키링크]] 또는 [[링크|표시]]
  s = s.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, name, label) => {
    const shown = (label || name).trim();
    const href = resolveWikilink?.(name.trim());
    return href ? `<a class="wl" href="${href}">${shown}</a>` : shown;
  });

  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noreferrer">$1&#8239;↗</a>'
  );
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
  return s;
}

const isTableSep = (l) => /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(l) && l.includes("-");
const splitRow = (l) =>
  l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());

export function renderMarkdown(md, resolveWikilink) {
  const lines = md.split("\n");
  const out = [];
  let listDepth = 0;
  let inCode = false;
  let codeBuf = [];

  // 마크다운처럼 연속된 평문 줄은 한 문단으로 합친다 (빈 줄이 문단 경계).
  let paraBuf = [];
  let paraClass = "";
  const flushPara = () => {
    if (paraBuf.length === 0) return;
    const cls = paraClass ? ` class="${paraClass}"` : "";
    out.push(`<p${cls}>${paraBuf.join(" ")}</p>`);
    paraBuf = [];
    paraClass = "";
  };

  const closeLists = (to = 0) => {
    flushPara();
    while (listDepth > to) {
      out.push("</ul>");
      listDepth--;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i].replace(/\s+$/, "");

    // 코드블록
    if (/^\s*```/.test(raw)) {
      if (inCode) {
        out.push(`<pre><code>${esc(codeBuf.join("\n"))}</code></pre>`);
        codeBuf = [];
        inCode = false;
      } else {
        closeLists();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeBuf.push(raw);
      continue;
    }

    if (!raw.trim()) {
      flushPara(); // 빈 줄 = 문단 경계
      continue;
    }

    // 표 — 헤더행 + 구분행이 연속으로 올 때만
    if (raw.includes("|") && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      closeLists();
      const head = splitRow(raw);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      i--;
      out.push(
        "<div class=\"tw\"><table><thead><tr>" +
          head.map((c) => `<th>${inline(c, resolveWikilink)}</th>`).join("") +
          "</tr></thead><tbody>" +
          rows
            .map(
              (r) =>
                "<tr>" + r.map((c) => `<td>${inline(c, resolveWikilink)}</td>`).join("") + "</tr>"
            )
            .join("") +
          "</tbody></table></div>"
      );
      continue;
    }

    const h = raw.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      closeLists();
      const lv = h[1].length;
      const txt = inline(h[2].replace(/\s*★.*$/, ""), resolveWikilink); // ★최우선 표기 제거
      out.push(`<h${lv}>${txt}</h${lv}>`);
      continue;
    }

    if (/^\s*(---+|\*\*\*+)\s*$/.test(raw)) {
      closeLists();
      out.push("<hr>");
      continue;
    }

    if (/^\s*>/.test(raw)) {
      closeLists();
      const txt = raw.replace(/^\s*>\s?/, "");
      const cls = /⚠️|상충/.test(txt) ? "bq warn" : /\*\*공식\*\*/.test(txt) ? "bq formula" : "bq";
      out.push(`<blockquote class="${cls}">${inline(txt, resolveWikilink)}</blockquote>`);
      continue;
    }

    const li = raw.match(/^(\s*)[-*]\s+(?:\[[ xX]\]\s*)?(.*)$/);
    if (li) {
      const depth = Math.floor(li[1].length / 4) + 1; // 템플릿은 4칸 들여쓰기
      while (listDepth < depth) {
        out.push(listDepth === 0 ? '<ul class="lv1">' : "<ul>");
        listDepth++;
      }
      closeLists(depth);
      out.push(`<li>${inline(li[2], resolveWikilink)}</li>`);
      continue;
    }

    // "1. …" 는 새 문단을 시작한다 (헤드라인 3줄처럼 빈 줄 없이 이어지는 경우 대비).
    // 뒤따르는 평문 줄은 같은 문단에 이어 붙는다.
    const ol = raw.match(/^\s*\d+\.\s+(.*)$/);
    if (ol) {
      closeLists();
      paraClass = "numbered";
      paraBuf.push(inline(ol[1], resolveWikilink));
      continue;
    }

    if (listDepth > 0) closeLists(); // 목록 뒤 평문은 목록을 닫고 새 문단으로
    paraBuf.push(inline(raw, resolveWikilink));
  }
  flushPara();
  if (inCode && codeBuf.length) out.push(`<pre><code>${esc(codeBuf.join("\n"))}</code></pre>`);
  closeLists();
  return out.join("\n");
}

export const CSS = `
*{box-sizing:border-box}
:root{--ink:#111;--red:#e63329;--body:#333;--soft:#555;--faint:#888;--hair:#e5e5e5;--wash:#f7f7f7}
body{margin:0;background:#fff;color:var(--body);line-height:1.7;font-size:16px;
  font-family:-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo","Malgun Gothic","Segoe UI",sans-serif;
  letter-spacing:-.01em;-webkit-text-size-adjust:100%}
.wrap{max-width:780px;margin:0 auto;padding:26px 22px 72px}
.top{display:flex;justify-content:space-between;align-items:baseline;gap:12px;flex-wrap:wrap}
.mast{font-size:13px;font-weight:700;letter-spacing:.18em;color:var(--ink);text-decoration:none}
.crumb{font-size:12px;color:var(--faint);letter-spacing:.04em}
.crumb a{color:var(--soft);text-decoration:none;border-bottom:1px solid var(--hair)}
.crumb a:hover{color:var(--red)}
.rule{border-top:3px solid var(--ink);margin:8px 0 0}
h1{font-size:26px;font-weight:600;color:var(--ink);letter-spacing:-.02em;line-height:1.3;margin:22px 0 8px}
h2{font-size:14px;font-weight:700;color:var(--ink);letter-spacing:.1em;
  border-top:1px solid var(--ink);margin:32px 0 12px;padding-top:10px}
h3{font-size:15.5px;color:var(--ink);margin:20px 0 6px}
h4{font-size:14px;color:var(--soft);margin:16px 0 4px}
p{margin:10px 0}
p.numbered{margin:10px 0 10px 4px}
a{color:var(--red);text-decoration:none;border-bottom:1px solid rgba(230,51,41,.3)}
a:hover{border-bottom-color:var(--red)}
a.wl{color:var(--ink);border-bottom:1px solid var(--hair)}
a.wl:hover{color:var(--red);border-bottom-color:var(--red)}
code{background:var(--wash);padding:1px 5px;font-size:13.5px;
  font-family:ui-monospace,"SF Mono",Menlo,Consolas,monospace}
pre{background:var(--ink);color:#eaeaea;padding:14px 16px;overflow-x:auto;font-size:13px;line-height:1.6}
pre code{background:none;padding:0;color:inherit}
blockquote.bq{margin:14px 0;padding:9px 16px;border-left:3px solid var(--red);
  background:var(--wash);font-size:14.5px;color:var(--ink)}
blockquote.warn{border-left-color:#b8860b;background:#fdf8ec}
blockquote.formula{border-left-width:4px;font-weight:600}
ul.lv1{list-style:none;padding:0;margin:12px 0}
ul.lv1>li{border:1px solid var(--hair);padding:12px 15px;margin:0 0 -1px}
ul.lv1 ul{margin:8px 0 0;padding-left:0;list-style:none}
ul.lv1 ul li{font-size:14px;color:var(--soft);padding:3px 0 3px 12px;
  border-left:2px solid var(--hair);margin:0}
strong{color:var(--ink)}
hr{border:none;border-top:1px solid var(--hair);margin:24px 0}
.tw{overflow-x:auto;margin:14px 0}
table{border-collapse:collapse;width:100%;font-size:13.5px}
th{border-bottom:2px solid var(--ink);padding:7px 10px;text-align:left;color:var(--ink);white-space:nowrap}
td{border-bottom:1px solid var(--hair);padding:7px 10px;text-align:left;vertical-align:top}
.meta{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0 0;padding:10px 0;
  border-top:1px solid var(--hair);border-bottom:1px solid var(--hair)}
.tag{font-size:11.5px;border:1px solid var(--hair);color:var(--soft);padding:2px 9px}
.tag.hi{border-color:var(--red);color:var(--red)}
.foot{border-top:3px solid var(--ink);margin-top:34px;padding-top:10px;
  font-size:11.5px;color:var(--faint);letter-spacing:.05em}
.foot a{color:var(--soft);border:none}
@media (max-width:640px){.wrap{padding:18px 15px 56px}h1{font-size:21px}}
@media print{a{border-bottom:none}.wrap{padding:0}pre{background:#f4f4f4;color:#111}}
`;

// homeHref는 호출부가 폴더 깊이에 맞춰 넘긴다 (예: 깊이 2면 "../../index.html").
export function htmlPage({
  title,
  crumb = "",
  body,
  cssHref = null,
  homeHref = "index.html",
  footer = "",
}) {
  const style = cssHref
    ? `<link rel="stylesheet" href="${cssHref}">`
    : `<style>${CSS}</style>`;
  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
${style}</head>
<body><div class="wrap">
<div class="top"><a class="mast" href="${homeHref}">AI RADAR</a>
<span class="crumb">${crumb}</span></div><div class="rule"></div>
${body}
<div class="foot">${footer || "AI RADAR · 자동 생성 아카이브"}</div>
</div></body></html>`;
}
