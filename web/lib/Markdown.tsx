import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { resolveWikilink } from "./content";

// [[위키링크]] → 마크다운 링크로 전처리한 뒤 렌더링한다.
// 해석 실패한 링크는 일반 텍스트로 남긴다 (아직 페이지가 없는 개념).
function preprocessWikilinks(md: string): string {
  return md.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, name, label) => {
    const page = resolveWikilink(name);
    const text = label || name;
    if (!page) return text;
    return `[${text}](/wiki/${page.slug})`;
  });
}

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {preprocessWikilinks(children)}
      </ReactMarkdown>
    </div>
  );
}
