import { wikiIndex } from "@/lib/content";
import Markdown from "@/lib/Markdown";

export default function WikiIndexPage() {
  return (
    <article className="card">
      <Markdown>{wikiIndex}</Markdown>
    </article>
  );
}
