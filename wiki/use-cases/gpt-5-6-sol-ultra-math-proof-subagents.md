---
type: use-case
date: 2026-07-10
tools: [chatgpt]
mechanism: [subagents]
domain: research
task: GPT-5.6 Sol Ultra로 50년 미해결 수학 난제(Cycle Double Cover Conjecture) 증명 생성
outcome: 64개 서브에이전트로 1시간 이내 증명 완성, 프롬프트·증명 전문 공개 (자체 발표, 동료검토 전)
model: GPT-5.6 Sol Ultra (2026-07-09 GA)
cost: 미확인
permissions: 미확인
maturity: demo
evidence: claimed
importance: medium
uses: [course, ax]
source: https://officechai.com/ai/openai-says-gpt-5-6-sol-produced-a-proof-of-the-50-year-old-cycle-double-cover-conjecture-using-64-subagents-in-1-hour/
---
# GPT-5.6 Sol Ultra — 64개 서브에이전트로 50년 묵은 수학 난제 증명, 프롬프트 전문 공개

> **공식**: ChatGPT(GPT-5.6 Sol Ultra)로 최대 64개 서브에이전트 동시 관리를 활용해 그래프이론
> 미해결 난제(Cycle Double Cover Conjecture) 증명을 수행 → 1시간 이내 완성, 사용 프롬프트 전문 공개
> (OpenAI 자체 발표, 동료검토 전)

## 무엇을 자동화했나

OpenAI가 2026-07-09 GA된 GPT-5.6 Sol Ultra 모드로, 1979년 Paul Seymour가 제기한 그래프이론
미해결 난제 **Cycle Double Cover Conjecture**("다리 없는 모든 그래프는 각 간선이 정확히 두
사이클에 포함되도록 사이클들의 집합으로 덮을 수 있다")의 증명을 생성했다고 07-10 발표했다.
개방형 수학 리서치라는, 정답이 알려지지 않은 업무를 에이전트에게 맡긴 사례다.

## 어떻게 구성했나 (아키텍처)

- 공개된 프롬프트는 모델이 **최대 64개의 서브에이전트**를 동시에 띄우고 "공격적이고 동적으로"
  관리하도록 지시한다.
- 초반 라운드는 서브에이전트들이 서로 다른 정식화(formulation)·대수적 접근·구조적 귀납을
  독립적으로 탐색하도록 **다양성을 강제**해, 같은 막다른 길로 전부 수렴하는 것을 방지.
- 이후 라운드에서 유망한 방향을 추리고 심화하는 방식으로 좁혀나간 것으로 추정(프롬프트·증명
  PDF가 OpenAI CDN에 그대로 공개돼 재현 가능).

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | GPT-5.6 Sol Ultra |
| 비용 | 미확인 |
| 권한 | 미확인 |
| 성숙도 | demo (연구 시연, 실제 업무 파이프라인 적용 사례 아님) |

## 성과와 수치

- **자체 발표(claimed)**: 64개 서브에이전트를 동원해 1시간 이내 증명 완성.
- 동료검토 전 단계이며, 수학자 Thomas Bloom은 X에서 "훌륭하지만(nice) 초등적(elementary)"이라며
  "1980년대에도 나올 수 있었을 수준"이라 평가 — 난제치고는 상대적으로 접근 가능한 증명이었을
  가능성을 시사. 이 난제는 과거에도 여러 결함 있는 증명 시도가 있었던 이력이 있다.
- HN 538점으로 화제(자체 발표 성과에 대한 검증 요구·회의론 댓글도 다수).

## 재현 가이드

- **난이도**: 중 (프롬프트·증명 PDF가 공개돼 있어 동일 구조를 다른 문제에 적용해볼 수 있으나,
  Sol Ultra 등 최상위 추론 모드 접근권이 필요)
- **준비물**: GPT-5.6 Sol Ultra(또는 유사한 대규모 서브에이전트 팬아웃을 지원하는 모델), 공개된
  프롬프트 원문
- **핵심 단계**:
  1. 문제를 다수(최대 64개) 서브에이전트가 병렬로 탐색하도록 프롬프트 설계
  2. 초반 라운드는 서로 다른 접근법(정식화·대수·구조적 귀납 등)을 쓰도록 다양성을 명시적으로 강제
  3. 이후 라운드에서 유망한 갈래를 좁혀 심화
  4. 결과를 동료검토·2차 검증 없이 성과로 단정하지 않기 — "생성된 증명 초안"으로 취급

## 강의·AX 활용 포인트

- **강의**: "서브에이전트 팬아웃"을 실물 프롬프트로 가르치기 좋은 사례 — 공개된 프롬프트 원문을
  그대로 교재로 쓸 수 있다. 단, 이 위키의 다른 실측(measured) 케이스와 달리 **자체 발표·동료검토
  전**이라는 한계를 함께 짚을 것.
  개방형 리서치·미해결 문제 탐색에 다중 에이전트를 투입하는 접근은 기업 R&D에도 응용 가능하나,
  결과 검증 없이 그대로 신뢰해서는 안 된다는 반면교사이기도 하다.

## 출처

- [officechai — OpenAI Says GPT 5.6 Sol Produced A Proof Of The 50-Year-Old Cycle Double Cover Conjecture Using 64 Subagents In 1 Hour](https://officechai.com/ai/openai-says-gpt-5-6-sol-produced-a-proof-of-the-50-year-old-cycle-double-cover-conjecture-using-64-subagents-in-1-hour/)
- [MLQ News — OpenAI Claims GPT-5.6 Sol Ultra Solved 50-Year-Old Math Conjecture in Under an Hour](https://mlq.ai/news/openai-claims-gpt-56-sol-ultra-solved-50-year-old-math-conjecture-in-under-an-hour/)
- [the-decoder — OpenAI's GPT-5.6 Sol Ultra reportedly solves a 50-year-old math problem in under an hour](https://the-decoder.com/openais-gpt-5-6-sol-ultra-reportedly-solves-a-50-year-old-math-problem-in-under-an-hour/)
- Hacker News (538점, 원 발표 PDF 링크)
