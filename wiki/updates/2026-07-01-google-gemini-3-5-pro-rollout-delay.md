---
type: update
date: 2026-07-01
tools: [gemini]
importance: high
uses: [course, ax]
source: https://www.marketscale.com/industries/software-and-technology/gemini-3-5-pro-still-in-preview-what-enterprise-teams-evaluating-a-model-should-do-now
---

# Gemini 3.5 Pro, 두 번째 GA 시한도 넘기며 7월 중순 출시로 — "2M 컨텍스트 플래그십"의 진통

## 무엇이 있었나

Google이 I/O 2026(5/19)에서 공개한 플래그십 모델 **Gemini 3.5 Pro**가 6월 GA 약속과 6/30 GA 목표를 연달아 넘기고, 7월 첫 주 기준 여전히 Vertex AI 소수 기업 고객 대상 제한 프리뷰에 머물러 있다. 업계 보도로는 7월 중순(유출 기준 7/17) GA가 유력하다. 연기 사유로는 ① 장시간 에이전트 작업에서 토큰을 과다 소모하는 토큰 효율 문제, ② 플래그십 기준에 못 미치는 코딩 성능, ③ 장기·다단계 추론 성능 미달 세 가지가 지목됐다. 모델 자체는 경쟁 모델의 2배인 **2M 토큰 컨텍스트**와 Deep Think 추론을 내세운다.

> ⚠️ 상충: 일부 매체(LLM Stats 등)와 07-07 뉴스레터는 "7월 초 순차 배포 시작"으로 전했으나, 7월 둘째 주 진입 시점 기준 확인된 상태는 "제한 프리뷰 지속, GA 미확정·벤치마크·가격 미공개"다(MarketScale, BuildFastWithAI 7/6). 최신 확인 정보를 우선한다.

## 왜 중요한가

- 비개발자 관점에서 2M 컨텍스트는 "책 수십 권 분량을 한 번에 읽고 답하는 AI"를 뜻한다. 장문 계약서·연구자료·회계장부 통짜 분석이 현실화되는 단계.
- 반면 두 차례 연기는 프런티어 모델 경쟁의 압박을 보여준다. 같은 시기 Anthropic은 Sonnet 5(6/30)와 Fable 5 재배포로 치고 나갔고, Google은 인재 이탈([[2026-06-22-google-deepmind-talent-exodus]])까지 겹쳐 "지연되는 플래그십"이 주가 악재로도 작용했다.
- "발표 → 프리뷰 → GA" 사이 간극이 길어지는 것은 업계 전반의 추세로, 발표 시점 스펙만 믿고 도입 계획을 세우면 안 된다는 교훈.

## 활용/시사점

- 기업 도입 검토 시: GA·가격·벤치마크 3종이 확정되기 전까지는 평가 보류가 합리적. 당장은 GA 상태인 Gemini 3.5 Flash로 검증하고 Pro는 스왑 가능한 구조로 설계.
- 장문 분석 수요가 있는 조직은 7월 중순 GA 시점에 가격 대비 성능을 재평가할 것 — Google은 "프런티어급 최저가" 포지셔닝을 예고한 상태다.

## 출처

- https://www.marketscale.com/industries/software-and-technology/gemini-3-5-pro-still-in-preview-what-enterprise-teams-evaluating-a-model-should-do-now
- https://www.techtimes.com/articles/319318/20260629/gemini-35-pro-cleared-july-launch-fable-5-nears-return-gpt-56-stays-locked.htm
- https://tech-insider.org/au/gemini-3-5-pro-delayed-july-2026/
- https://www.buildfastwithai.com/blogs/ai-news-today-july-6-2026
