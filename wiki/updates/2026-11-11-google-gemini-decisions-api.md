---
type: update
date: 2026-11-11
tools: [gemini]
importance: medium
uses: [ax, course]
source: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
---

# Google, "Gemini Decisions API"·Decision-1 공개 — 글을 쓰지 않고 선택지만 채점하는 모델

## 무엇이 있었나

Google이 11-11 **Decision-1**과 Gemini Decisions API를 공개했다. 문장을 생성하지 않고 **닫힌 선택지**(예/아니오, 최대 255지선다, 루브릭 채점)를 한 번에 점수화하는 "보정된 멀티모달 결정 모델"이다.

- 텍스트·이미지·오디오·비디오·PDF 입력, 요청당 최대 1,000문항, 256K 컨텍스트, 답마다 **신뢰도 점수** 동반
- 지연 약 150~250ms, 가격 입력 **$0.10/백만 토큰·출력 무료**(Google 주장 Flash-Lite 대비 약 5배 저렴)
- 내부 DeepMind 프로토타입을 약 6주 만에 제품화. LangChain이 당일 지원 추가

독립 평가는 엇갈린다. Artificial Analysis Decision Index 66점으로 TypeSafe Jev 1.14와 동률, Drex Max v1.1·GLiDE v1.2보다 7점 낮고 비용도 높다($345 대 $103·$156/백만 과제). Google 자체 비교는 Jev 1.14 대비 7개 중 5개 우세. 즉 "Google이 Anthropic보다 먼저 프로덕션 결정 모델을 냈다"는 의미는 크지만 성능·가격 우위는 확정이 아니다.

## 왜 중요한가

분류·승인·라우팅·품질 채점 같은 반복 판단 업무를 LLM 생성 호출 대신 **싸고 빠른 결정 호출**로 바꾸는 흐름의 신호다. 에이전트 안에서 "이 메일은 환불 요청인가", "이 보고서가 기준을 충족하는가" 같은 게이트 판단을 값싸게 수천 건 처리할 수 있다.

## 활용 포인트

- **ax**: 대량 문서 분류·검수 업무의 단가 재산정 근거. 신뢰도 점수로 "사람 검토로 넘길 기준선"을 설계 가능.
- **course**: LLM 호출을 "생성"과 "결정"으로 나눠 설계하는 에이전트 설계 모듈 소재. 단 현재 성능 비교는 벤더·소수 평가 기반이므로 파일럿 후 판단하라고 안내.

## 출처

- [Google — Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) ([[raw/2026-11/google-gemini-decisions-api]])
- [Simon Willison — Gemini Decisions API](https://simonwillison.net/2026/Nov/11/gemini-decisions-api/)
- [Latent Space — D-Day (Decision Models Day)](https://latent.space/p/ainews-d-day-decision-models-day/)
