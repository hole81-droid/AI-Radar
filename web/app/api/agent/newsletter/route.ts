import { NextRequest, NextResponse } from "next/server";
import { isValidAgentToken } from "@/lib/auth";
import { newsletters, latestNewsletter } from "@/lib/content";

// GET /api/agent/newsletter        → 최신호 전문 + 전체 목록
// GET /api/agent/newsletter?date=YYYY-MM-DD → 특정호
export async function GET(req: NextRequest) {
  if (!isValidAgentToken(req.headers.get("authorization"))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const date = req.nextUrl.searchParams.get("date");
  if (date) {
    const issue = newsletters.find((n) => n.slug === date);
    if (!issue) return NextResponse.json({ error: "not found" }, { status: 404 });
    return NextResponse.json(issue);
  }
  return NextResponse.json({
    latest: latestNewsletter() ?? null,
    dates: newsletters.map((n) => n.slug),
  });
}
