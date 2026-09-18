---
type: concept
date: 2026-09-16
tools: []
importance: medium
uses: [course, ax]
source: https://harnesstax.github.io/
---

# "하네스 세금(HarnessTax)" — 코딩 에이전트 하네스는 성능보다 비용을 가른다

## 무엇인가

2026-09-16 공개된 벤치마크 연구 "HarnessTax: How Much Does the Harness Matter for Coding
Agents?"(HN 225점). **같은 모델을 다른 "하네스"(Claude Code·Codex·Pi·OpenCode 등 에이전트
실행 환경)에 태웠을 때 결과가 얼마나 달라지는가**를 통계적으로 검정했다.

## 방법론

- **21개 모델-하네스 조합**, 각 30개 과제(SWE-bench Lite + Terminal-Bench 2.0), 과제당
  3회 시도.
- 비용은 2026-09-01 기준 고정 가격표로 산출.
- 하네스 간 품질 차이를 **양측 Fisher 정확검정**으로 통계 검정(42개 모델 내 하네스 비교쌍).

## 핵심 발견 — "품질은 거의 안 갈리는데, 비용은 크게 갈린다"

- **품질**: 42개 비교쌍 중 p<0.05인 결과가 **1건**뿐 — 우연으로도 약 2건이 나올 수 있는
  수준이라, Holm-Bonferroni 보정을 적용하면 **통계적으로 유의미한 하네스 간 품질 차이는
  0건**이다. 일반적인 코딩 과제에서는 "더 정교한 하네스"가 성공률을 유의미하게 끌어올리지
  못한다는 뜻.
- **비용**: 반대로 비용 차이는 극적이다 — **동일 모델(GPT-5.6 Sol)이 같은 결과를 내는데도
  Pi 하네스가 Claude Code 하네스보다 71% 저렴**했다.
- **예외**: 모델 능력의 한계에 가까운 어려운 문제(과학적 발견 등)에서는 구조화된 탐색·
  평가·피드백 학습을 제공하는 정교한 하네스가 여전히 유리할 수 있다고 저자들은 밝힌다 —
  "일반 코딩 과제"에 한정된 결론.

## 왜 중요한가

- "어떤 코딩 에이전트 하네스를 쓸 것인가"를 둘러싼 업계 논쟁에 처음으로 **통제된 실험·
  통계 검정**을 들이댄 연구다. 지금까지는 개별 사용자의 인상 비교(anecdotal)가 대부분이었다.
- [[entelligence-gpt56-luna-vs-gpt6-astra-code-review-benchmark|같은 주 GPT-5.6 Luna vs
  Astra 코드리뷰 벤치마크]]와 함께 읽으면 "모델 선택은 위험도별로(저가/고급 티어링),
  하네스 선택은 비용 기준으로" 결정하라는 실무 원칙이 뚜렷해진다.

## 활용/시사점

- **AX**: 사내 코딩 에이전트 표준을 정할 때 "더 유명한 하네스"보다 **같은 모델을 여러
  하네스에서 돌려 비용을 직접 비교**하는 절차를 먼저 거치라는 근거로 쓸 수 있다 — 이
  연구의 방법론(동일 모델·동일 과제셋·가격표 고정) 자체가 재현 가능한 체크리스트다.
- **강의**: "에이전트가 잘 작동하는 이유가 모델인가 하네스인가"를 구분해 가르치는 실측
  자료 — 대부분의 성능은 모델에서 나오고, 하네스는 주로 비용·UX를 가른다는 반직관적
  결론을 다루기에 좋다.

## 관련 페이지

- [[entelligence-gpt56-luna-vs-gpt6-astra-code-review-benchmark]] — 같은 주 발표된
  모델 티어링(저가 vs 고급) 벤치마크. 이 페이지(하네스 비교)와 짝을 이룬다.

## 출처

- [HarnessTax — How Much Does the Harness Matter for Coding Agents?](https://harnesstax.github.io/)
- [Hacker News(225점)](https://news.ycombinator.com/item?id=49733726)
