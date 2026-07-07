import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { isValidAgentToken } from "@/lib/auth";
import { searchWiki } from "@/lib/search";
import { getPage, getNewsletter, latestNewsletter, wikiIndex } from "@/lib/content";

export const maxDuration = 60;

// MCP 서버: 팀원의 Claude Code·Cursor 등에서
//   claude mcp add --transport http ai-radar https://<도메인>/api/mcp --header "Authorization: Bearer <토큰>"
// 으로 연결한다.
const handler = createMcpHandler(
  (server) => {
    server.tool(
      "search_wiki",
      "AI Radar 위키(최신 AI 트렌드 지식 베이스)에서 키워드로 페이지를 검색한다. 결과의 slug를 get_page에 넘겨 전문을 읽을 수 있다.",
      { query: z.string().describe("검색어 (한국어/영어)") },
      async ({ query }) => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(searchWiki(query, 10), null, 2),
          },
        ],
      })
    );

    server.tool(
      "get_page",
      "AI Radar 위키 페이지의 전문(frontmatter 포함)을 slug로 가져온다. 예: 'tools/claude-code', 'updates/2026-06-30-claude-sonnet-5', 뉴스레터는 '2026-07-07'.",
      { slug: z.string().describe("search_wiki 결과의 slug") },
      async ({ slug }) => {
        const page = getPage(slug) || getNewsletter(slug);
        if (!page) {
          return {
            content: [{ type: "text", text: `페이지 없음: ${slug}` }],
            isError: true,
          };
        }
        return {
          content: [
            {
              type: "text",
              text: `# ${page.title}\nmeta: ${JSON.stringify(page.meta)}\n\n${page.body}`,
            },
          ],
        };
      }
    );

    server.tool(
      "get_latest_newsletter",
      "AI Radar의 최신 데일리 뉴스레터(오늘의 AI 트렌드 요약) 전문을 가져온다.",
      {},
      async () => {
        const issue = latestNewsletter();
        return {
          content: [
            {
              type: "text",
              text: issue ? `[${issue.slug}]\n\n${issue.body}` : "발행된 뉴스레터 없음",
            },
          ],
        };
      }
    );

    server.tool(
      "get_wiki_index",
      "위키 전체 카탈로그(index.md)를 가져온다. 어떤 페이지들이 있는지 훑을 때 사용.",
      {},
      async () => ({ content: [{ type: "text", text: wikiIndex }] })
    );
  },
  {},
  { basePath: "/api" }
);

function withAuth(req: NextRequest): Response | null {
  if (!isValidAgentToken(req.headers.get("authorization"))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  return null;
}

export async function POST(req: NextRequest) {
  return withAuth(req) ?? handler(req);
}
export async function GET(req: NextRequest) {
  return withAuth(req) ?? handler(req);
}
export async function DELETE(req: NextRequest) {
  return withAuth(req) ?? handler(req);
}
