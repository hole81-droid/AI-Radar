import IssueView from "./components/IssueView";
import { getIssue, latestIssueDate } from "@/lib/issues";

export default function Home() {
  const date = latestIssueDate();
  const issue = date ? getIssue(date) : undefined;
  if (!issue) return <p className="hint" style={{ marginTop: 40 }}>아직 발행된 이슈가 없습니다.</p>;
  return <IssueView issue={issue} />;
}
