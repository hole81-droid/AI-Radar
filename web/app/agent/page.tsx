// Agent 연동 안내 페이지 — 팀원이 자신의 에이전트에 위키를 연결하는 방법
export default function AgentGuidePage() {
  return (
    <article className="article markdown" style={{ margin: "0 auto" }}>
      <h1>외부 Agent에 AI Radar 끌어쓰기</h1>
      <p>
        AI Radar 위키는 MCP와 REST API 두 가지로 노출됩니다. 아래의{" "}
        <code>&lt;토큰&gt;</code>은 관리자에게 받은 Agent API 토큰,{" "}
        <code>&lt;도메인&gt;</code>은 이 사이트 주소입니다.
      </p>

      <h2>1. MCP로 연결 (Claude Code · Claude Desktop · Cursor 등)</h2>
      <pre>
        <code>{`claude mcp add --transport http ai-radar https://<도메인>/api/mcp \\
  --header "Authorization: Bearer <토큰>"`}</code>
      </pre>
      <p>연결되면 에이전트가 다음 도구를 쓸 수 있습니다:</p>
      <ul>
        <li>
          <code>search_wiki(query)</code> — 위키 검색
        </li>
        <li>
          <code>get_page(slug)</code> — 페이지 전문 읽기
        </li>
        <li>
          <code>get_latest_newsletter()</code> — 최신 뉴스레터
        </li>
        <li>
          <code>get_wiki_index()</code> — 전체 카탈로그
        </li>
      </ul>
      <p>
        예: 에이전트에게 <em>"AI Radar에서 Sonnet 5 관련 내용 찾아서 요약해줘"</em>
        라고 하면 됩니다.
      </p>

      <h2>2. REST API</h2>
      <pre>
        <code>{`# 검색
curl -H "Authorization: Bearer <토큰>" \\
  "https://<도메인>/api/agent/search?q=에이전트+자동화"

# 페이지 전문
curl -H "Authorization: Bearer <토큰>" \\
  "https://<도메인>/api/agent/pages/tools/claude-code"

# 최신 뉴스레터
curl -H "Authorization: Bearer <토큰>" \\
  "https://<도메인>/api/agent/newsletter"`}</code>
      </pre>

      <h2>활용 아이디어</h2>
      <ul>
        <li>자기 Claude Code에 연결해 "오늘 뉴스레터 요약해서 슬랙 초안 써줘"</li>
        <li>사내 챗봇이 AI 트렌드 질문을 받으면 이 위키를 근거로 답하게 하기</li>
        <li>보고서 작성 에이전트가 AX 근거자료를 여기서 인용하게 하기</li>
      </ul>
    </article>
  );
}
