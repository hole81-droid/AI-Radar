---
type: use-case
date: 2026-07-29
tools: [claude-code]
mechanism: [cli-pipeline]
domain: dev-automation
task: 대기업(Microsoft) 수만 명 엔지니어 대상 커맨드라인 AI 코딩 에이전트(Claude Code·GitHub Copilot CLI) 사내 확산 및 생산성 영향 실측
outcome: 채택자는 예상 대비 약 24% 더 많은 PR을 병합(4개월간 지속), 동료의 사용 여부가 개인의 채택을 좌우
model: 미확인 (Claude Code·Copilot CLI 각각 기본 모델 사용, 논문은 도구 간 모델 구분 없이 집계)
cost: 미확인 (단, "토큰 지출이 연간 수백만 달러 규모에 이를 수 있다"는 경고 언급)
permissions: 미확인
maturity: production
evidence: measured
importance: high
uses: [course, ax]
source: https://arxiv.org/abs/2607.01418
---

# Microsoft 사내 확산 연구 — Claude Code·Copilot CLI 채택자, PR 병합량 24% 증가(4개월 추적)

> **공식**: Claude Code+GitHub Copilot CLI(cli-pipeline)를 Microsoft 사내 수만 명 엔지니어에
> 배포해 채택·확산 패턴과 생산성 영향을 4개월간 실측 → 채택자 PR 병합량 예상 대비 약 24%↑,
> 효과는 4개월 내내 유지(실측)

## 무엇을 자동화했나

Microsoft의 2026년 초 커맨드라인 AI 코딩 에이전트(Claude Code, GitHub Copilot CLI) 사내
롤아웃을 다룬 학술 연구가 2026-07 arXiv에 공개됐다("Adoption and Impact of Command-Line AI
Coding Agents: A Study of Microsoft's Early 2026 Rollout of Claude Code and GitHub Copilot CLI").
개별 자동화 스크립트가 아니라, **대기업 규모의 CLI 코딩 에이전트 도입 자체를 4개월간 추적
관찰한 실측 연구**라는 점에서 이 위키의 다른 use-case와 성격이 다르다.

- 대상: 수만 명 규모의 Microsoft 엔지니어
- 기간: 4개월
- 측정 지표: 병합된 PR(Pull Request) 수 — 저자들은 "병합 PR이 전달 가치와 완전히 같지는
  않다"고 인정하면서도 산출량 대리지표로 채택

## 어떻게 구성했나 (아키텍처)

- 별도의 자체 개발 파이프라인이 아니라, Claude Code·GitHub Copilot CLI를 사내 엔지니어들에게
  배포하고 사용 로그·PR 데이터를 수집·분석하는 관찰 연구 설계.
- 채택 여부·지속 사용 여부에 영향을 미치는 요인을 분리해 분석: 동료(팀 내 다른 엔지니어)의
  사용 여부가 개인의 채택 여부에 가장 큰 영향을 미쳤고, 인구통계적 요인보다 기존 코딩 활동량이
  지속 사용과 더 강하게 연관됐다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 — Claude Code·Copilot CLI 각각 기본 모델 사용, 논문은 도구별 모델을 구분해 집계하지 않음 |
| 비용 | 미확인 — "토큰 지출이 연간 수백만 달러 규모에 이를 수 있다"는 규모감만 언급, 구체 수치 없음 |
| 권한 | 미확인 |
| 성숙도 | production — Microsoft 사내 실제 대규모 배포(수만 명) |

## 성과와 수치

- **실측(measured)**: 채택자는 예상(counterfactual) 대비 **약 24% 더 많은 PR을 병합** —
  4개월 관찰 기간 내내 효과가 유지됨(단기 신기효과가 아님을 시사).
  - 채택·지속 사용의 핵심 동인: 동료의 사용 여부(사회적 확산 효과) > 개인 인구통계 요인.
  - 기존 코딩 활동량이 많은 엔지니어일수록 도구를 지속 사용하는 경향.
- PR 병합량이 실제 비즈니스 가치·코드 품질과 정확히 비례하지는 않는다는 저자 스스로의
  한계 인정은 그대로 인용해 과잉 해석을 경계할 필요가 있다.

## 재현 가이드

- **난이도**: 상 (개인·소규모 팀이 재현할 성격의 사례가 아니라, 조직 차원의 도입 전략 참고용)
- **준비물**: 사내 배포 가능한 Claude Code·Copilot CLI 라이선스, PR/사용 로그 수집 체계,
  채택 전후 비교를 위한 베이스라인 데이터
- **핵심 단계**:
  1. 파일럿 팀 단위로 Claude Code·Copilot CLI를 우선 배포해 "동료 효과"를 초기에 형성
  2. PR 병합량 등 산출량 대리지표를 채택 전후로 비교할 수 있도록 베이스라인 확보
  3. 채택률·지속 사용률을 팀별·엔지니어별로 추적해 확산 병목 파악
  4. 토큰 지출 규모를 사전에 시뮬레이션 — 조직 전체 배포 시 연간 수백만 달러 규모 가능성을
     예산에 반영
  5. 4개월 이상 장기 추적해 초기 신기효과와 지속 효과를 구분

## 강의·AX 활용 포인트

- **강의**: "개인의 바이럴 자동화 사례"가 아니라 "대기업 전사 도입이 실제로 측정 가능한 생산성
  효과를 냈는가"를 다룬 드문 학술 실측 사례 — AX 도입 효과 측정 방법론(대리지표 선정, 동료
  효과 분석, 장기 추적) 자체를 가르치는 교재로 적합.
- **AX**: 조직 차원의 AI 코딩 에이전트 도입을 계획하는 기업에게 "동료 효과가 채택을 좌우한다"는
  발견은 파일럿 설계 시사점이 크다 — 무작위 개인 배포보다 팀 단위 집중 배포가 확산에 더
  유리할 수 있다는 근거. 동시에 "연간 토큰 비용이 수백만 달러 규모로 커질 수 있다"는 경고는
  대규모 도입 전 비용 거버넌스(모델별 권한, 지출 한도 등— [[2026-07-03-claude-enterprise-spend-controls]] 참조)를 먼저 갖춰야 한다는 근거로 쓸 수 있다.

## 출처

- [arXiv:2607.01418 — Adoption and Impact of Command-Line AI Coding Agents: A Study of Microsoft's Early 2026 Rollout of Claude Code and GitHub Copilot CLI](https://arxiv.org/abs/2607.01418)
