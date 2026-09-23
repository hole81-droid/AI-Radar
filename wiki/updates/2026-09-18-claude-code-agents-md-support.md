---
type: update
date: 2026-09-18
tools: [claude-code]
importance: medium
uses: [course, ax]
source: https://github.com/anthropics/claude-code/tree/main/mods/agents-md
---

# Claude Code, AGENTS.md 표준 지원 시작 — 프로젝트 설정 파일을 도구 간에 공유

## 무엇이 있었나

Claude Code v2.1.277부터 프로젝트 폴더에 `CLAUDE.md`가 없으면 **`AGENTS.md`를 대신
읽어 사용**하는 기능이 추가됐다(Anthropic 엔지니어 Thariq Shihipar가 X에 공지, `/config`에서
켜고 끌 수 있음). `AGENTS.md`는 Codex·Cursor 등 여러 코딩 에이전트가 이미 채택한
**비공식 업계 표준** 프로젝트 지시문 파일 형식이다.

이 기능은 Anthropic이 새로 도입 중인 **"Claude Code mods"**(하네스를 커스터마이즈하는
플러그인 체계)의 **내장(built-in) mod**로 구현됐다 — 사용자도 향후 직접 mod를 만들어
프로젝트 지시문 처리 방식을 바꿀 수 있다.

## 왜 중요한가

- 지금까지는 Claude Code·Codex를 함께 쓰는 팀이 같은 프로젝트에 `CLAUDE.md`와
  `AGENTS.md`를 **따로 유지**하거나 심링크로 우회해야 했다([[fabiensanglard-agent-md-persistent-style-guide]]
  참조). 이번 지원으로 **하나의 설정 파일을 여러 에이전트 도구가 공유**할 수 있게 됐다 —
  팀이 특정 벤더에 록인되는 정도를 낮추는 방향의 변화다.
- Simon Willison도 같은 날 자신의 블로그에서 이 변화를 별도로 짚었을 만큼(구루 채널
  1차 확인) 개발자 커뮤니티에서 빠르게 화제가 됐다 — HN에 관련 글 2건이 동시에
  랭크됐다(&quot;Claude Code now reads AGENTS.md if there is no Claude.md&quot;,
  &quot;Anthropic finally adds AGENTS.md support to Claude Code&quot;).
- **주의**: 우선순위는 `CLAUDE.md`가 있으면 `CLAUDE.md`를 쓰고, 없을 때만 `AGENTS.md`로
  대체한다 — 두 파일이 같이 있으면 자동 병합되지 않는다.

## 활용/시사점

- **강의**: "프로젝트 지시문 파일"(CLAUDE.md/AGENTS.md)과 "재사용 가능 스킬"의 역할
  차이를 설명할 때, 이제는 "어느 도구를 쓰든 같은 지시문 파일 하나로 시작할 수 있다"는
  실습 포인트를 추가할 수 있다.
- **AX**: 멀티 벤더(Claude Code+Codex 등) 사내 표준을 설계하는 팀은 앞으로
  `CLAUDE.md` 대신 `AGENTS.md`를 1차 표준으로 채택하는 편이 도구 전환 비용을 낮춘다.

## 09-23 후속 — "텔레메트리를 꺼두면 AGENTS.md를 못 읽는다" 버그 (HN 427점, 09-24 확인)

블로거 szypowi.cz가 09-23 발견해 공개한 내용에 따르면, 이 AGENTS.md 지원 기능은 원격
feature flag(`tengu_agents_md_mod`)로 켜고 끄는 구조인데, 이 플래그 조회 자체가
텔레메트리 채널을 타고 있었다 — `DISABLE_TELEMETRY`나
`CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` 환경변수로 텔레메트리를 끈 사용자는
**로컬 파일을 읽는 데 네트워크가 필요 없음에도** 서버 응답을 기다리다 조용히
기능이 비활성화됐다(경고 없음). Bedrock·Vertex 경유 사용자나 사내 정책상 비필수
트래픽을 차단하는 기업 환경에서도 같은 문제가 발생한다. 저자는 발견 시점(09-23)
기준 공식 수정 확인 전이라고 밝혔고, 임시 우회책으로 `CLAUDE.md`에
`@AGENTS.md` import 구문을 넣는 방법을 권장했다(HN 게시물 제목엔 사후에 [fixed]가
붙었으나 원문 자체에는 수정 시점이 명시돼 있지 않다 — 상태 확인은 다음 스캔에서
재검증).

**시사점**: "설정 끄기"(텔레메트리 차단)가 기능 자체를 조용히 무력화하는 사례는
프라이버시 설정과 기능 가용성이 암묵적으로 결합된 설계의 위험을 보여준다 — 기업이
텔레메트리를 끄는 이유(데이터 거버넌스)와 기능이 꺼지는 결과가 무관해 보일수록
발견이 늦어진다는 점을 강의·AX 체크리스트에 함께 언급할 만하다.

## 출처

- [Simon Willison — Quoting Thariq Shihipar](https://simonwillison.net/2026/Sep/18/thariq-shihipar/)
- [GitHub — anthropics/claude-code mods/agents-md](https://github.com/anthropics/claude-code/tree/main/mods/agents-md)
- [Hacker News(181점) — Claude Code now reads AGENTS.md if there is no Claude.md](https://news.ycombinator.com/item?id=49760187)
- [블로그 — Claude Code reads AGENTS.md only when telemetry is on](https://blog.szypowi.cz/p/claude-code-reads-agents.md-only-when-telemetry-is-on/) · [Hacker News(427점)](https://news.ycombinator.com/item?id=49814947)
