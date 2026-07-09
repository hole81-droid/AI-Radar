import { notFound } from "next/navigation";
import IssueView from "../../components/IssueView";
import { getIssue } from "@/lib/issues";
import { newsletters } from "@/lib/content";

export function generateStaticParams() {
  return newsletters.map((n) => ({ date: n.slug }));
}

export default async function IssuePage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const issue = getIssue(date);
  if (!issue) notFound();
  return <IssueView issue={issue} />;
}
