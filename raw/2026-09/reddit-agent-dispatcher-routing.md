# Reddit r/ClaudeAI — "Agent Dispatcher — Automatically routes tasks to the right role, skills, tools, and context"

- 원문(GitHub): https://github.com/nahid-sparktales/agent-dispatcher
- Reddit 게시글: https://www.reddit.com/r/ClaudeAI/comments/1wku51x/agent_dispatcher_automatically_routes_tasks_to/
- 게시일: 2026-09-19
- 수집일: 2026-09-20
- 반영: [[reddit-agent-dispatcher-routing-benchmark]] (use-case)

## 요지

역할·스킬·MCP·에이전트가 늘어날수록 라우팅이 나빠지는 문제를 해결하는 오픈소스
프로젝트. 27개 역할·79+31개 스킬·19개 MCP 서버로 시작, 162케이스 라우팅 벤치마크에서
Claude/Codex식 라우팅이 top-1 158/162로 키워드 매칭(23/162)·자체 라우터 Jev(143/162)를
능가.
