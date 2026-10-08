---
type: concept
date: 2026-10-08
importance: medium
uses: [course]
programs: [AI Agent Service 개발자 — LLMOps]
source: https://joshbersin.com/2026/10/introducing-the-leaders-guide-to-multi-agent-ai-architecture/
---

# Multi-Agent AI Architecture (HR 맥락 — Josh Bersin HR 2030)

> **요지**: "AI의 안전성과 성능을 좌우하는 것은 모델이 아니라 당신의 아키텍처다."
> HR 기능 전체를 8개 superagent·150개 이상의 AI 에이전트가 구동하는 시대에,
> 거버넌스 설계가 모델 선택보다 중요하다는 Josh Bersin(HR 2030™)의 프레임워크.

## 핵심 내용

Josh Bersin이 2026-10-08 발표한 "The Leader's Guide To Multi-Agent AI Architecture"는
HR 기능에 다수의 AI 에이전트가 동시에 투입되는 상황(**HR 2030 Multiagent HR Technology
Stack** — 8개 superagent + 150개 이상 개별 에이전트)을 가정하고, 이것이 응집된
시스템으로 작동할지 "비용이 드는 통제불능 확산"으로 전락할지를 가르는 **6가지 결정**을
제시한다:

1. 에이전트를 어떻게 오케스트레이션·거버넌스할 것인가
2. 에이전트를 어떻게 모니터링·보안할 것인가
3. 에이전트가 어떤 규칙·데이터로 추론하는가
4. 어디에 사람의 통제를 남겨야 하는가
5. 어떤 역량을 공유 라이브러리로 구축할 것인가
6. 무엇을 자체 구축·구매·확장할 것인가

ISS North America·Great Wolf Resorts·Costa Coffee·DBS Bank·ASICS·Mastercard를
실제 적용 사례로 들고 있다(개별 성과 수치는 원문 미확인 — 리포트 본문 유료 접근
필요로 추정, 확인 필요).

## 왜 중요한가

- 우리 조직의 핵심 과제인 "AI 역량육성 방법론"과 정면으로 겹친다 — 특정 업무를
  어떻게 자동화하느냐(use-case 다수가 다루는 영역)를 넘어, **에이전트가 여러 개로
  늘어났을 때 조직 전체를 어떻게 설계하느냐**라는 다음 단계 질문을 다룬다.
- 6가지 결정 사항은 [[loop-engineering]]·[[agent-prompt-injection-defense-architecture]]
  등 기존 위키의 "하네스·거버넌스" 계열 개념 페이지들과 같은 문제의식(오케스트레이션·
  모니터링·권한 경계)을 HR 기능이라는 구체 도메인에 적용한 것으로 볼 수 있다.

## 활용 포인트

- **강의(course)**: "AI Agent Service 개발자 — LLMOps" 과정의 거버넌스·모니터링·
  배포 설계 모듈에 바로 적용 가능한 6축 체크리스트. HR 영역 사례(DBS Bank·Mastercard
  등)는 비개발자 대상 리더십 교육에서 "에이전트가 여럿일 때 무엇을 결정해야 하는가"를
  설명하는 도입부로 쓸 수 있다.
- **주의**: 개별 기업 사례의 정량 성과가 이번 수집에서 확인되지 않았다 — 교육
  자료로 쓸 때는 "프레임워크"로만 인용하고, 수치 주장은 원문 확인 전까지 보류할 것.

## 출처

- [Josh Bersin — Introducing The Leader's Guide To Multi-Agent AI Architecture](https://joshbersin.com/2026/10/introducing-the-leaders-guide-to-multi-agent-ai-architecture/)
- raw/2026-10/josh-bersin-multi-agent-hr-architecture.md
