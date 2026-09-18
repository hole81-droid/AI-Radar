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

## 출처

- [Simon Willison — Quoting Thariq Shihipar](https://simonwillison.net/2026/Sep/18/thariq-shihipar/)
- [GitHub — anthropics/claude-code mods/agents-md](https://github.com/anthropics/claude-code/tree/main/mods/agents-md)
- [Hacker News(181점) — Claude Code now reads AGENTS.md if there is no Claude.md](https://news.ycombinator.com/item?id=49760187)
