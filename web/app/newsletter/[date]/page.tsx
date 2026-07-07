import Link from "next/link";
import { notFound } from "next/navigation";
import { newsletters, getNewsletter } from "@/lib/content";
import Markdown from "@/lib/Markdown";

export function generateStaticParams() {
  return newsletters.map((n) => ({ date: n.slug }));
}

export default async function NewsletterPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const issue = getNewsletter(date);
  if (!issue) notFound();

  return (
    <div className="layout-2col">
      <aside className="sidebar">
        <h3>지난 뉴스레터</h3>
        <ul>
          {newsletters.map((n) => (
            <li key={n.slug} className={n.slug === date ? "active" : ""}>
              <Link href={`/newsletter/${n.slug}`}>{n.slug}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <article className="card">
        <Markdown>{issue.body}</Markdown>
      </article>
    </div>
  );
}
