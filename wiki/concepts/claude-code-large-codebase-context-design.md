---
type: concept
date: 2026-05-14
tools: [claude-code]
importance: medium
uses: [course, ax]
source: https://claude.com/blog/how-claude-code-works-in-large-codebases-best-practices-and-where-to-start
---
# 대규모 코드베이스에서 Claude Code가 실제로 어떻게 동작하는가

Anthropic이 공식 블로그(2026-05-14, HN 248점)로 공개한, 수백만 라인 모노레포·수십 년 된
레거시 시스템·수십 개 저장소로 흩어진 분산 아키텍처에서 Claude Code가 코드를 탐색·수정·
리팩터링하는 방식을 정리한다.

## 핵심 메커니즘

- 코드베이스를 벡터 DB로 미리 인덱싱하지 않고, 사람 개발자처럼 디렉터리를 열고 grep으로
  심볼을 찾아 참조를 따라가는 방식으로 동작한다.
- 작업 범위를 특정 하위 디렉터리로 좁혀 시작하면 불필요한 모듈 간 리팩터링을 시도하지
  않고 컨텍스트도 깨끗하게 유지된다.
- **핵심 메시지**: "모델 자체보다 그 주변을 감싸는 하니스(CLAUDE.md·Hooks·Skills·
  Plugins·MCP·Subagents의 조합)가 실제 동작을 결정한다."

## 실무 시사점 — 개발자 역할의 변화

시니어 개발자 Henrik Warne이 자신의 Claude Code 워크플로우 변화를 기록한 에세이
(2026-05-31)는 이 메커니즘이 실무에서 어떻게 느껴지는지를 보여준다. 티켓 설명을
Claude에게 먼저 검증시키고 해결책을 제안받은 뒤, 생성된 코드를 리뷰하며 "왜 이렇게
구현했는지" 후속 질문을 주고받는 대화형 워크플로우로 세부를 확인하는 방식이다.
벤치마크 수치는 없지만(evidence: anecdotal), "AI가 코드를 짜고 사람은 이해·검증·
품질보증에 집중한다"는 역할 전환을 구체적으로 보여준다.

## 강의·AX 활용 포인트

- 수천 명 규모 개발 조직이 이미 프로덕션에서 이 구조로 Claude Code를 쓰고 있다는
  사실 자체가 엔터프라이즈 AX 관점에서 중요한 신호다.
- AX 강의에서 "에이전트를 대규모 조직에 확장할 때 필요한 컨텍스트 설계"를 설명할
  1차 자료로 쓰기 좋다.
- "AI 시대 개발자의 역할 변화"(코딩→검증·품질보증)를 설명할 때 Henrik Warne의 실사용
  후기를 구체적 실사례로 인용할 수 있다.

## 출처

- [Claude 공식 블로그 — How Claude Code works in large codebases](https://claude.com/blog/how-claude-code-works-in-large-codebases-best-practices-and-where-to-start)
- [Henrik Warne's blog — With Claude, less coding, more testing](https://henrikwarne.com/2026/05/31/with-claude-less-coding-more-testing/)
