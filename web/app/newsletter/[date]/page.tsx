import { redirect } from "next/navigation";

export default async function NewsletterDateRedirect({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  redirect(`/issues/${date}`);
}
