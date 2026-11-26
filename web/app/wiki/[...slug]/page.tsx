import { notFound } from "next/navigation";
import { pages, getPage } from "@/lib/content";
import Markdown from "@/lib/Markdown";

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug.split("/") }));
}

export default async function WikiPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) notFound();

  const meta = page.meta;
  const tags = [
    typeof meta.type === "string" ? meta.type : null,
    typeof meta.importance === "string" ? `중요도 ${meta.importance}` : null,
    ...(Array.isArray(meta.uses) ? meta.uses.map((u) => `활용 ${u}`) : []),
  ].filter(Boolean) as string[];

  return (
    <article className="article" style={{ margin: "0 auto" }}>
      <div className="meta-strip">
        {tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
        {typeof meta.date === "string" && <span className="num">{meta.date}</span>}
        {typeof meta.source === "string" && meta.source.startsWith("http") && (
          <a href={meta.source} target="_blank" rel="noreferrer" className="ln">
            원문 출처 ↗
          </a>
        )}
      </div>
      <Markdown>{page.body}</Markdown>
    </article>
  );
}
