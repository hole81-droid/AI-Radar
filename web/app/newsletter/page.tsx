import { redirect } from "next/navigation";
import { latestNewsletter } from "@/lib/content";

export default function NewsletterIndex() {
  const latest = latestNewsletter();
  if (!latest) return <p>아직 발행된 뉴스레터가 없습니다.</p>;
  redirect(`/newsletter/${latest.slug}`);
}
