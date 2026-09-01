---
type: use-case
date: 2026-07-29
tools: [perplexity]
mechanism: [browser-agent]
domain: research
task: Perplexity Comet(자율 에이전트) vs Perplexity Search(전통 검색) 실사용 로그 비교 — AI 에이전트가 지식노동의 범위·유형·소요시간을 어떻게 바꾸는지 대규모 실측
outcome: 세션당 자율 작업시간 33초→26분(약 48배), 비교 가능 작업 기준 87% 시간단축·94% 비용절감, 본업 외 업무 비중 50%→59%
model: 미확인 (Perplexity Comet/Search 백엔드 모델 미공개)
cost: 미확인 (모델+인건비 결합 94% 절감이라는 결과치만 공개, 절대 금액 미확인)
permissions: 미확인
maturity: production
evidence: measured
importance: high
uses: [ax, course]
source: https://hbr.org/2026/07/research-how-ai-agents-broaden-the-scope-of-knowledge-work
---

> **공식**: Perplexity가 자사 제품 Comet(자율 에이전트)과 Search(전통 검색)의 실사용 로그
> 10만 건을 대조 분석해 → AI 에이전트가 세션당 자율 작업시간을 48배 늘리고, 비교 가능한
> 작업 기준 시간 87%·비용 94%를 절감하며, 사용자가 본업 밖 업무를 더 많이 시도하게
> 만든다는 것을 실측

## 무엇을 자동화했나

Harvard Business School 연구진(Jeremy Yang, Kate Zyskowski, Noah Yonack, Jerry Ma)이
Perplexity의 실제 제품 사용 로그를 분석해 "AI 에이전트가 검색과 근본적으로 다른 방식으로
지식노동을 바꾼다"는 것을 실증했다. HBR 기사(2026-07-29/30, "Research: How AI Agents
Broaden the Scope of Knowledge Work")는 구독 페이월 뒤에 있어 2026-09-01 첫 백필 때는
제목·리드만 확인하고 페이지화를 보류했으나, 저자들이 소속한 Perplexity 자체 리서치
페이지와 arXiv 논문("How AI Agents Reshape Knowledge Work: Autonomy, Efficiency, and
Scope", arXiv:2606.07489)에서 원 데이터를 확인해 이번 재점검(2026-09-02)에서 페이지화했다
— 페이월로 막혔던 항목이 실제로는 구체적 실측 수치를 갖춘 A등급(구체성) 자료였다.

## 어떻게 구성했나 (아키텍처)

- 비교 대상은 동일 제품군 내 **자율 에이전트(Comet)** vs **전통 검색(Search)** — 같은
  사용자 기반에서 도구 선택에 따른 행동 차이를 관찰하는 준실험 설계.
- **매칭 페어 설계**: 동일하거나 거의 동일한 초기 질의를 양쪽 제품에서 비교(5,000개
  매칭 질의 쌍), 다중턴 세션은 1,000쌍 매칭.
- **표본**: Computer(Comet) 무작위 질의 10만 건 샘플링, 8,000명 사용자·8개 직군
  클러스터로 직군간 이동 측정.
- 방법론은 실사용 텔레메트리 기반 관찰 연구이지 설문이 아니다 — 이 위키의 "실측"
  기준에 해당.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델/도구 | Perplexity Comet(자율 에이전트) vs Perplexity Search — 구체 백엔드 모델명은 미확인 |
| 비용 | 모델+인건비 결합 기준 평균 94% 절감(도메인별 87~96%) — 절대 금액은 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | production — Perplexity 상용 제품의 실사용 로그 기반 |

## 성과와 수치 (전부 실측 — HBS 연구진의 Perplexity 실사용 로그 분석)

- **자율 실행시간**: Computer 세션 평균 26분 vs Search 33초 — **약 48배** (중앙값 9분 vs
  14초, 약 40배).
- **도구 연동**: Computer 세션의 7.9%가 커넥터(외부 도구) 호출을 최소 1회 수행 vs
  Search 1.8% (약 4배 격차).
- **사용자 개입 빈도**: Computer 질의의 13%가 중간 확인(pause-for-user) 필요 vs
  Search 0.3%.
- **품질**: 다음 턴 불만족률 Computer 1.3% vs Search 2.9% — 55% 감소.
- **업무 범위 확장(수평)**: Computer 사용자가 본업 외 직군 업무를 시도한 비율 59% vs
  Search 50%(8,000명·8개 직군 클러스터 표본).
- **업무 범위 확장(수직, 인지 복잡도)**: Create급(생성/창작) 질의 비중 Computer 50% vs
  Search 26%. 고차 인지 요구 질의 비중 76% vs 55%. 필요 지식 도메인 수 2.40 vs 1.74
  (38%↑). Computer 질의의 23~41%는 매칭 Search 표본에서 전혀 시도된 적 없는 유형.
- **효율성**: 비교 가능 작업 기준 시간 87% 단축(269분→36분, 도구 기반 추정치), 비용
  94% 절감(도메인별 79~96%).
- 방법론: 실사용 텔레메트리 기반(설문 아님), 10만 건 무작위 Computer 질의 샘플링,
  매칭페어 설계(질의 쌍 5,000개, 다중턴 세션 1,000쌍).

## 재현 가이드

- **난이도**: 상 (기업이 직접 재현하려면 자사 제품의 에이전트/비-에이전트 사용 로그를
  대량으로 텔레메트리 수집·매칭페어 분석해야 함 — 컨설팅·리서치 조직 수준의 방법론)
- **준비물**: 에이전트 모드와 비에이전트 모드를 모두 제공하는 자사 제품, 세션 단위
  로깅·매칭 인프라, 직군·질의유형 분류 체계
- **핵심 단계**:
  1. 동일 사용자군이 에이전트/비에이전트 두 경로를 모두 쓰는 제품에서 실사용 로그 확보
  2. 초기 질의가 유사한 세션을 매칭페어로 구성해 비교 대조군 확보
  3. 실행시간·개입빈도·다음턴 만족도 등 행동 지표를 정의해 자동 집계
  4. 직군·인지복잡도 태깅으로 "업무 범위가 넓어졌는가"를 정량화

## 강의·AX 활용 포인트

- **강의**: "AI 에이전트 도입 효과를 어떻게 측정하는가"의 모범 사례 — 설문이 아니라
  실사용 로그의 매칭페어 비교로 인과에 가까운 근거를 만든 방법론 자체가 교육 소재.
- **AX**: 에이전트 도입의 가치가 "같은 일을 더 빨리"가 아니라 "안 하던 일을 하게
  됨"(범위 확장)에 있다는 시사점 — 생산성 지표만으로 에이전트 ROI를 측정하면 이
  효과를 놓친다는 경고로 활용 가능. "13% 개입 필요·다음턴 불만족 1.3%"는 완전 자율화가
  아니라 인간 개입 지점 설계가 여전히 핵심임을 보여주는 반례이기도 하다.
- 원문(HBR)은 페이월이라 이 수치는 Perplexity 자체 리서치 페이지·arXiv 논문에서
  교차 확인했다 — HBR 기사 자체를 인용할 때는 "Perplexity 자체 공개 데이터로 교차검증"
  임을 함께 밝힐 것.

## 출처

- [HBR — Research: How AI Agents Broaden the Scope of Knowledge Work (2026-07-29, 페이월)](https://hbr.org/2026/07/research-how-ai-agents-broaden-the-scope-of-knowledge-work)
- [Perplexity Research — How AI Agents Reshape Knowledge Work (원 데이터)](https://research.perplexity.ai/articles/how-ai-agents-reshape-knowledge-work)
- [arXiv:2606.07489 — How AI Agents Reshape Knowledge Work: Autonomy, Efficiency, and Scope](https://arxiv.org/abs/2606.07489)
