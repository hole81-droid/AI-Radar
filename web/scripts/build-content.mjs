// 위키 마크다운 → lib/content.generated.json 직렬화 (prebuild/predev에서 실행)
// 위키 루트는 web/의 부모 디렉토리다.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const wikiRoot = path.dirname(webRoot);
const outFile = path.join(webRoot, "lib", "content.generated.json");

function parseFrontmatter(raw) {
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
    // 배열 값 — "] " 뒤에 인라인 YAML 주석이 붙어도 배열 부분만 취한다
    if (v.startsWith("[")) {
      const close = v.indexOf("]");
      if (close !== -1) {
        v = v.slice(1, close).split(",").map((s) => s.trim()).filter(Boolean);
      }
    }
    meta[m[1]] = v;
  }
  return { meta, body };
}

function titleOf(body, fallback) {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : fallback;
}

function collect(dir, prefix) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...collect(full, `${prefix}${entry.name}/`));
    } else if (entry.name.endsWith(".md")) {
      const raw = fs.readFileSync(full, "utf8");
      const { meta, body } = parseFrontmatter(raw);
      const slug = `${prefix}${entry.name.replace(/\.md$/, "")}`;
      out.push({ slug, title: titleOf(body, slug), meta, body });
    }
  }
  return out;
}

const pages = collect(path.join(wikiRoot, "wiki"), "");
const newsletters = collect(path.join(wikiRoot, "newsletter"), "")
  .sort((a, b) => (a.slug < b.slug ? 1 : -1)); // 최신 먼저

// index.md는 위키의 카탈로그 — Q&A 검색의 1차 힌트로 함께 담는다
const indexPath = path.join(wikiRoot, "index.md");
const indexBody = fs.existsSync(indexPath)
  ? parseFrontmatter(fs.readFileSync(indexPath, "utf8")).body
  : "";

const bundle = {
  generatedAt: new Date().toISOString(),
  index: indexBody,
  pages,
  newsletters,
};

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(bundle));
console.log(
  `content bundle: ${pages.length} wiki pages, ${newsletters.length} newsletters -> ${path.relative(webRoot, outFile)}`
);
