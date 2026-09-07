---
type: concept
date: 2026-08-30
tools: []
importance: medium
uses: [ax]
source: https://www.exponentialview.co/p/ev-599
---

# 파인튜닝 오픈모델의 경제성 — 오류 30%↓, 비용 1/14

## 무엇인가

Exponential View #599 "Unbounded self-improvement and its limits"(2026-08-30, 전체공개).
본론은 **재귀적 자기개선(RSI)에 물리적 한계가 있다**는 논증이지만, 기업 실무에 바로 쓰이는
부분은 그 논증을 뒷받침하려 모아 놓은 **실측 수치 3세트**다.

> **채택 근거**: 좋아요 60 · 댓글 2로 자기평균(85.3) **미달**. 화제성 신호는 약하지만
> 2026-09-03 개정 규칙에서 화제성은 관문이 아니라 우선순위 기준이므로, 예산이 남는
> 2차 백필에서 정독해 채택했다.

## 논증 — 왜 무한 가속이 안 오는가

개선 사이클의 **"세대 시간(generation time)"이 0으로 수렴할 수 없다.**
철학자 Toby Ord 인용: *실험에 시간이 걸리고, 학습에 시간이 걸리고, 새 칩을 만드는 데
시간이 걸린다.* 더 근본적으로는 물리 법칙이 천장을 만든다 — **광속 통신 지연,
Bekenstein 정보 한계, Landauer 에너지 비용.**

## 실측 수치

### ① 파인튜닝된 오픈 모델이 폐쇄형 프론티어를 이긴 사례

| 사례 | 결과 |
|---|---|
| **Bridgewater + Thinking Machines** — Qwen 파인튜닝 | 최고 성능 폐쇄형 모델 대비 **오류 약 30% 감소**, 추론 비용 **1/14** |
| **Trainloop** — 27b Qwen 소형 모델 | 특정 과업에서 **GPT-5.6 Sol을 상회**, 비용은 일부에 불과 |

**AX 관점에서 이 위키가 확보한 가장 강한 "오픈모델 파인튜닝" 근거다.** 조건이 붙는다 —
**특정 워크로드에 한정**되고, 파인튜닝 역량(데이터·평가셋·MLOps)이 전제다.
Bridgewater는 헤지펀드, Thinking Machines는 전문 랩이라는 점을 감안해야 한다.

### ② 하드웨어 — AI가 설계한 칩

- **OpenAI Jalapeño**: AI 지원 설계로 **16개월 만에** 동급 Nvidia 실리콘 대비
  **메가와트당 토큰 1.5~1.9배** 우위
  (출시 경위는 [[2026-06-24-openai-jalapeno-chip]] 참조 — 이 수치는 그 후속 실측이다)

### ③ 시장 채택 — 오픈웨이트로의 이동

- **Vercel의 오픈웨이트 토큰 점유율: 2개월 만에 28% → 62%**

한 플랫폼의 수치이므로 일반화는 조심해야 하지만, **오픈웨이트가 실험 단계를 넘어
프로덕션 트래픽을 가져가고 있다**는 신호로는 유효하다.

## 언급된 모델·기업

Qwen, Z.ai GLM 5.3, GPT-5.6 Sol, OpenAI, Anthropic, Cerebras, Fractile,
Trainloop, Bridgewater, Thinking Machines, Vercel

## 함의

- 경쟁이 비용 효율을 끌어내린다. 기업은 **특정 워크로드에 파인튜닝된 소형 모델**을
  쓸 수 있고, 프론티어 사업자는 **서비스 품질·안정성**으로 우위를 유지한다.
- 하드웨어 특화가 시장을 넓힌다(Nvidia 독주 완화).
- **AX 판단 기준**: "전부 프론티어 API" vs "전부 자체 모델"의 이분법이 아니라,
  **반복 대량 워크로드부터 파인튜닝 소형 모델로 내리는 계단식 전환**이 현재 근거가
  가리키는 방향이다. 비용 구조는 [[school-ai-total-cost-infrastructure]]의
  추론 비용 논점과 직결된다.

## 관련

- [[2026-06-24-openai-jalapeno-chip]] · [[2026-08-14-zhipu-glm-5-3-launch]]
- [[2026-07-19-alibaba-qwen-3-8-preview]] · [[2026-07-16-moonshot-kimi-k3-launch]]
- [[ai-capex-productivity-gap]] · [[ai-bubble-five-gauges]]
- [[databricks-ai-gateway-coding-cost-management]] — 비용 관리 실무

## 출처

- 원문: https://www.exponentialview.co/p/ev-599
- 수집 원문: `raw/2026-09/exponential-view-599-unbounded-self-improvement.md`
