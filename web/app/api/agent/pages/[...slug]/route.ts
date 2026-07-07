import { NextRequest, NextResponse } from "next/server";
import { isValidAgentToken } from "@/lib/auth";
import { getPage, getNewsletter } from "@/lib/content";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  if (!isValidAgentToken(req.headers.get("authorization"))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { slug } = await params;
  const key = slug.join("/");
  const page = getPage(key) || getNewsletter(key);
  if (!page) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  return NextResponse.json(page);
}
