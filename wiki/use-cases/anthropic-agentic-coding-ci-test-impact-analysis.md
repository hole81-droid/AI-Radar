---
type: use-case
date: 2026-09-14
tools: [claude-code]
mechanism: [cli-pipeline]
domain: dev-automation
task: Claude Code가 작성하는 코드 비중이 급증하며 25배로 폭증한 CI(지속적 통합) 부하를 감당하도록 테스트 선택(test impact analysis) 서비스를 재설계
outcome: 6개월간 CI job 25배 증가·분기당 코드량 8배 증가(80%를 Claude가 저작)를 엔지니어 1명이 3주 만에 재설계해 흡수 — 이후 팀에는 "2분기 안에 25배 부하"를 v0 설계 기준으로 가정하라고 권고
model: Claude(구체 버전 미확인, "Claude가 신규 코드의 80% 저작"으로만 명시)
cost: 미확인
permissions: 미확인 (에이전트 실행 권한 관련 서술 없음, 인프라 재설계 중심 글)
maturity: production
evidence: measured
importance: high
uses: [course, ax]
source: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic
---

> **공식**: Anthropic이 Claude Code(cli-pipeline)로 폭증한 CI 부하 대응 테스트 선택
> 서비스를 재설계 → 6개월간 25배 CI job 증가를 엔지니어 1명·3주 만에 흡수

## 무엇을 자동화했나

Anthropic 엔지니어링팀 자신이 Claude Code(에이전틱 코딩)를 전사 도입한 결과,
엔지니어 1인당 코드 생산량이 2021~2025년 평균 대비 **분기당 8배**로 늘었고
그중 **80%를 Claude가 직접 작성**하게 됐다. 문제는 사람이 아니라 CI 파이프라인이
이 속도를 못 따라간 것 — PR마다 모든 테스트를 돌리는 방식은 애초에 스케일이 안 되고,
"어떤 테스트를 돌릴지 결정론적으로 골라주는" 테스트 선택(test impact analysis)
서비스가 정작 6개월 만에 25배로 불어난 CI job 부하에 무너지기 시작했다. 이 글은
그 서비스를 어떻게 재설계했는지 다룬 Anthropic 엔지니어링 블로그 글이다.

## 어떻게 구성했나 (아키텍처)

기존 구조는 두 컴포넌트로 나뉜다 — 테스트 결과를 기록하는 **listener**와, 과거
실행 이력·코드 관련성을 바탕으로 이번 PR에 어떤 테스트를 돌릴지 정하는
**selector**. 문제는 v0 설계가 listener를 **단일 프로세스(singleton)**로 짜
수평 확장이 원천적으로 불가능했다는 것.

3차례 땜질이 순서대로 실패했다:

1. 머신 코어를 2배로 늘림 — 70일 버팀
2. 코드 패키지 단위로 샤딩해 listener를 병렬화 — 29일 버팀
3. 매일 재시작 — 효과 없음, 서비스가 시간 단위로 뒤처지기 시작

결국 **인메모리 데이터 스토어 + 상태 없는(stateless) listener 워커가 저널에
append만 하는 구조**로 전면 재설계해 진짜 수평 확장과 메모리 제약 해소를
달성했다. 이 재설계는 엔지니어 **1명이 3주** 만에 완료했다.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | Claude (구체 버전 미확인) |
| 비용 | 미확인 |
| 권한 설계 | 미확인 (본문은 인프라 재설계 중심, 에이전트 권한 서술 없음) |
| 성숙도 | production (Anthropic 자사 CI에 실사용 중) |
| evidence | measured (자사 실측 지표 공개) |

## 성과와 수치 (실측, measured)

- 코드량: 분기당 **8배** 증가
- Claude 저작 비중: 신규 코드의 **80%**
- 테스트 수: 코드베이스 전체 **10배** 증가
- CI job 수: 6개월간 **25배** 증가
- 재설계 소요: 엔지니어 **1명·3주**

## 재현 가이드

- **난이도**: 상 (자체 CI 인프라 재설계 — 조직 고유 스택에 맞춘 아키텍처 작업)
  - 준비물: 테스트 선택/영향 분석 서비스(자체 구축 또는 상용), 확장 가능한
    메시지/저널 스토어, 수평 확장이 가능한 워커 아키텍처
  - 핵심 단계:
    1. v0 설계 단계부터 **"2분기 안에 25배 부하"**를 전제로 용량 계획
    2. 에이전트(Claude 등)가 서비스 상태를 모니터링·자율 최적화할 수 있도록
       **계측(instrument)**
    3. 입출력 job 수 일치 여부로 추적 신뢰성 확보
    4. 카나리 배포로 측정 가능하지 않다면 핵심 서비스에 **싱글톤 구조를 피할 것**
    5. listener·selector처럼 역할을 분리하고, 상태는 저널(append-only)에 두어
       수평 확장을 원천적으로 가능하게 설계

## 강의·AX 활용 포인트

- **강의**: "AI가 코드를 짠다"의 다음 단계 — AI가 짜는 코드량이 늘어나면
  코드가 아니라 **그 코드를 검증하는 인프라(CI)가 먼저 병목**이 된다는
  구체적 사례. 에이전틱 코딩 도입 강의에서 "생산성 지표만 보지 말고 CI·리뷰
  용량을 함께 계획하라"는 교훈으로 쓰기 좋다.
- **AX**: Claude Code·Codex 등을 조직 전체에 배포하려는 기업이라면, 코드 생산
  속도가 늘어나는 만큼 CI·QA 인프라도 같은 배수로 확장해야 한다는 것을
  Anthropic 자사 사례로 보여주는 벤치마크. "우리 조직도 에이전틱 코딩을
  도입하면 CI가 얼마나 커져야 하는가"를 역산하는 근거로 인용 가능.

## 출처

- [Claude by Anthropic — Agentic coding is straining CI. Here's how we scaled test impact analysis at Anthropic](https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic) (2026-09-14, Sachin Malhotra)
