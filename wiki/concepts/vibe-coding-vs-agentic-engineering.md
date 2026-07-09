---
type: concept
date: 2026-06-04
tools: [claude-code]
importance: medium
uses: [course, ax]
source: https://motherduck.com/blog/vibe-coding-dangerous-agentic-engineering-wes-mckinney/
---
# 바이브 코딩 vs 에이전틱 엔지니어링

Pandas 창시자 Wes McKinney가 Motherduck 블로그에서 제시한 구분으로, AI 코딩 실무에서
자주 뒤섞이는 두 접근을 명확히 나눈다.

## 정의

- **바이브 코딩(vibe coding)**: 한 번의 프롬프트로 결과물을 받아 검토 없이 그대로 배포하는
  접근. 속도는 빠르지만 품질·안전 보증이 없다.
- **에이전틱 엔지니어링(agentic engineering)**: 사양(spec)·리뷰·테스트를 갖춘 상태로 에이전트를
  운영하는 접근. 각 단계에 사람의 확인 지점을 명시적으로 남긴다.

## 실무 구성 예시

- **Superpowers 프레임워크**로 프롬프트 전에 스펙을 상세히 작성.
- 역할별(보안·CI·성능) 리뷰 에이전트(**Roborev**)를 배치해 자동 검토.
- 회귀 테스트로 버그를 방지하고, 각 단계마다 사람이 확인.

## 왜 구분이 필요한가

- "자동화된 코드 리뷰는 엔지니어링 경험을 대체하지 못한다"는 것이 저자의 결론 — AX
  담론에서 자주 빠지는 균형점이다. 속도(바이브 코딩)와 신뢰성(에이전틱 엔지니어링) 중
  업무의 위험도에 맞는 접근을 선택해야 한다는 메시지.
- 프로토타입·내부 도구처럼 실패 비용이 낮은 작업은 바이브 코딩이 효율적이지만, 프로덕션
  코드·고객 대면 시스템은 에이전틱 엔지니어링 수준의 보증이 필요하다.

## 강의·AX 활용 포인트

- 바이브 코딩과의 대조 사례로 쓰기 좋은 강의 소재 — "속도 대 신뢰성" 트레이드오프를
  구체적 실무 구성(스펙 작성 → 역할별 리뷰 에이전트 → 회귀 테스트)으로 보여준다.
- AX 관점: 사내 AI 코딩 도입 시 "이 업무는 바이브 코딩으로 충분한가, 에이전틱 엔지니어링
  수준의 거버넌스가 필요한가"를 판단하는 체크리스트로 활용할 수 있다. 관련 사례:
  [[2026-06-14-the-engineer-github-issue-to-pr]]류의 감사 추적·승인 정책 설계가 에이전틱
  엔지니어링의 구체적 구현 예시다.

## 출처

- [Motherduck 블로그 — Wes McKinney](https://motherduck.com/blog/vibe-coding-dangerous-agentic-engineering-wes-mckinney/)
