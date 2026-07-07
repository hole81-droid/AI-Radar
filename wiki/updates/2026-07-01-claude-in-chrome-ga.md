---
type: update
date: 2026-07-01
tools: [claude, claude-code]
importance: medium
uses: [course]
source: https://claude.com/claude-for-chrome
---

# Claude in Chrome 정식 출시(GA) — 브라우저에서 일하는 AI가 기본 기능으로

## 무엇이 있었나

Anthropic의 브라우저 에이전트 **Claude in Chrome**이 7/1 정식 출시(GA)됐다. 2025년 8월 리서치 프리뷰 → 2025년 12월 전체 유료 플랜 확대를 거쳐 약 10개월 만의 정식화다. Chrome 확장으로 설치하면 Claude가 사용자의 브라우저에서 **웹페이지를 읽고, 클릭하고, 폼을 채우고, 여러 단계의 웹 작업을 대신 수행**한다. 유료 구독자 전체가 대상이다.

같은 릴리스(Claude Code v2.1.198, 7/1)에서 **서브에이전트 백그라운드 실행이 기본화**됐다 — 위임한 작업이 뒤에서 돌아가는 동안 사용자는 계속 다른 일을 할 수 있고, 백그라운드 에이전트는 작업 완료 시 자동으로 커밋·푸시·draft PR 생성까지 수행한다.

## 왜 중요한가 (비개발자 관점)

- "AI에게 웹에서 하는 일을 시킨다"(예약, 자료 조사, 반복 입력)가 실험 기능이 아니라 **정식 지원 기능**이 됐다. GA는 기업이 안심하고 배포할 수 있다는 신호다.
- OpenAI·Google·Perplexity가 모두 브라우저 에이전트에 뛰어든 가운데, 별도 브라우저를 새로 깔게 하는 경쟁사와 달리 **쓰던 Chrome에 확장을 얹는** 접근이라 진입 장벽이 가장 낮다.
- 백그라운드 위임 기본화와 묶어 보면, AI 사용 방식이 "지켜보며 시키기"에서 **"맡겨두고 결과 받기"**로 넘어가는 흐름.

## 활용/시사점

- **강의**: 비개발자 대상 에이전트 실습에 최적 — 코드 없이 브라우저에서 AI 위임을 체험시킬 수 있는 도구. "웹 폼 자동 입력 → 다단계 워크플로우" 순의 커리큘럼 구성 가능.
- 조직 도입 시 주의점: 브라우저 에이전트는 사내 웹 시스템 접근 권한을 그대로 갖게 되므로 권한 정책 선행 필요.

## 출처

- https://claude.com/claude-for-chrome (공식 제품 페이지)
- https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome
- https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md (v2.1.198, 2026-07-01)
