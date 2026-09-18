---
type: use-case
date: 2026-09-14
tools: [chatgpt]
mechanism: [cli-pipeline]
domain: dev-automation
task: PR(pull request) 코드리뷰 자동화 — 저가 모델 vs 최상위 모델 정밀도·비용 비교
outcome: Astra가 버그 33% 더 발견(92 vs 69건)·정밀도 96%(Luna 74%), 대신 비용 28배(총 $5.66 vs $0.20)
model: GPT-6 Astra, GPT-5.6 Luna (둘 다 OpenAI)
cost: Luna $0.20/M 입력·$1.20/M 출력, 50건 PR 전체 리뷰 총비용 Luna $0.20 vs Astra $5.66
permissions: 미확인 (공개 PR 대상 읽기 전용 리뷰로 추정 [추정])
maturity: prototype
evidence: measured
importance: medium
uses: [course, ax]
source: https://entelligence.ai/blogs/gpt-5.6-luna-vs-gpt-6-astra-is-a-1.20-model-good-enough-for-code-review
---

> **공식**: GPT-6 Astra·GPT-5.6 Luna로 자동 코드리뷰 파이프라인을 돌려 Sentry·Discourse·
> Keycloak·Cal.com·Grafana 등 공개 저장소의 실제 PR 50건을 리뷰시킴 → 저가 모델(Luna)이
> 비용은 28배 저렴하지만 보안 버그 탐지에서 최상위 모델(Astra) 대비 뚜렷하게 뒤처짐을 실측.

## 무엇을 자동화했나

Entelligence.ai가 자체 코드리뷰 평가 하네스로 GPT-6 Astra와 GPT-5.6 Luna(저가형) 두 모델에
**동일한 50건의 공개 pull request**(Sentry·Discourse·Keycloak·Cal.com·Grafana 등)를
자동 리뷰시키고, 검출된 버그를 사람이 검증해 정밀도·비용·속도를 비교했다.

## 어떻게 구성했나 (아키텍처)

- 두 모델에 동일 PR 세트·동일 프롬프트를 투입하는 재현 가능한 평가 파이프라인
  (GitHub `Entelligence-AI/code_review_evals` 저장소로 재현 자료 공개).
- 모델이 지적한 버그를 사람이 검증(verified bugs)해 "찾았다고 주장" vs "실제 버그"를
  구분 — 정밀도(precision) 산출 근거.
- 버그를 일반 정확성(correctness) 버그와 보안(security) 버그로 나눠 별도 집계.

## 벤치마크 데이터

| 항목 | GPT-6 Astra | GPT-5.6 Luna |
|---|---|---|
| 검증된 버그 발견 수 | 92건 | 69건 |
| 정밀도 | 96% | 74% |
| 보안 버그 발견(전체 24건 중) | 19건 | 9건 |
| 리뷰당 평균 소요 시간 | 36초 | 23초 |
| 50건 PR 전체 비용 | $5.66 | $0.20 |
| 입력/출력 단가 | 미확인 | $0.20/M 입력, $1.20/M 출력 |
| 권한 설계 | 미확인 | 미확인 |
| 성숙도 | prototype(벤치마크용 하네스) | prototype(벤치마크용 하네스) |

## 성과와 수치

- **실측(measured)**: 92 vs 69건(약 33%↑), 정밀도 96% vs 74%, 보안 버그 19 vs 9건,
  총비용 $5.66 vs $0.20(약 28배 차이) — 전부 원문의 재현 가능한 벤치마크 수치.
- 저자 결론(원문 인용 취지): Luna는 "일상적인 정확성 버그"에는 그 가격대로 충분히
  쓸 만하지만, **인증·권한(authentication/permission) 코드 리뷰를 Luna 단독에 맡기는
  것은 권장하지 않는다** — 보안 버그 탐지율이 Astra의 절반 이하이기 때문.

## 재현 가이드

- **난이도**: 중 (평가 하네스 자체는 공개돼 있으나, 검증된 버그 라벨링에는 사람 검토가 필요)
- **준비물**: OpenAI API 키(Astra·Luna), 비교 대상 공개 저장소의 PR diff 세트, 버그
  검증을 수행할 리뷰어(사람 또는 별도 검증 모델)
- **핵심 단계**:
  1. 비교할 두 모델에 동일 PR·동일 프롬프트로 리뷰 요청
  2. 모델이 지적한 이슈를 사람이 실제 버그 여부로 검증(정밀도 계산의 기준)
  3. 버그를 정확성/보안으로 분류해 카테고리별 탐지율 별도 집계
  4. 토큰 사용량 기준 비용·응답 시간을 함께 기록해 "가격 대비 성능" 표로 정리

## 강의·AX 활용 포인트

- **강의**: "더 똑똑한 모델 = 항상 정답"이 아니라 **업무 위험도에 따라 모델 등급을
  분리 배치**해야 한다는 표준 사례 — 일반 PR은 저가 모델, 인증·결제·권한 관련 PR은
  상위 모델로 라우팅하는 "모델 티어링" 설계를 가르치는 소재로 적합.
- **AX**: 사내 코드리뷰 자동화 파이프라인을 설계할 때, 이 벤치마크의 방법론(공개 저장소
  PR로 정밀도·비용·속도를 함께 실측)을 그대로 자체 PR 세트에 적용해 "우리 조직 기준
  가성비 모델"을 스스로 찾아볼 수 있다.

## 출처

- [Entelligence.ai — GPT-5.6 Luna vs. GPT-6 Astra: Is a $1.20 Model Good Enough for Code Review?](https://entelligence.ai/blogs/gpt-5.6-luna-vs-gpt-6-astra-is-a-1.20-model-good-enough-for-code-review)
- [Hacker News(165점)](https://news.ycombinator.com/item?id=49703003)
- [GitHub — Entelligence-AI/code_review_evals (재현 자료)](https://github.com/Entelligence-AI/code_review_evals)
