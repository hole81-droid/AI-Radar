import { wikiIndex } from "@/lib/content";
import Markdown from "@/lib/Markdown";

export default function WikiIndexPage() {
  return (
    <article className="article" style={{ margin: "0 auto" }}>
      <Markdown>{wikiIndex}</Markdown>
    </article>
  );
}
