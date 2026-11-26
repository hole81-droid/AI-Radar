import { NextRequest, NextResponse } from "next/server";
import { isValidAgentToken } from "@/lib/auth";
import { searchWiki } from "@/lib/search";

export async function GET(req: NextRequest) {
  if (!isValidAgentToken(req.headers.get("authorization"))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const q = req.nextUrl.searchParams.get("q") || "";
  if (q.trim().length < 2) {
    return NextResponse.json({ error: "q parameter required" }, { status: 400 });
  }
  return NextResponse.json({ query: q, results: searchWiki(q, 10) });
}
