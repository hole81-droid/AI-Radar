---
type: update
date: 2026-10-17
tools: [chatgpt, gemini]
importance: high
uses: [ax]
source: https://www.theverge.com/ai-artificial-intelligence/1013195/ai-agents-blocked-web
---

# 항공·금융·쇼핑 사이트들이 AI 에이전트에 문을 닫기 시작했다

## 무엇이 있었나

The Verge(Emma Roth, 2026-10-17)에 따르면 최근 몇 주간 Meta Muse·xAI Grok·OpenAI
Dots/Instinct 같은 AI 에이전트 사용자들이 주요 웹사이트에서 작업을 막히는 사례가
늘고 있다.

- **Delta**는 에이전트의 항공권 예약을 차단하고 있다.
- **Yelp**는 자사 데이터에 비용을 지불하는 에이전트만 허용한다.
- **JPMorgan Chase·Charles Schwab**은 에이전트의 계정 접근을 차단한다.
- **Amazon**은 Muse의 "지속적 접근"이 자사 사이트 정책을 위반한다고 밝혔다.

차단 이유로 거론되는 것은 금융 등 민감 데이터의 보안 위험, 서비스 약관을 위반하는
무단 스크레이핑, 그리고 "사람이 직접 쓰는 것"을 전제로 설계된 사업 모델(예: 광고
노출, 교차판매) 보호다.

## 왜 중요한가

- OpenAI·Meta·xAI·Google 전부 "에이전트가 대신 다 해준다"를 핵심 비전으로 내세우고
  있지만, 항공·은행·쇼핑처럼 **실제 가치가 큰 영역(high-intent surface)일수록 먼저
  문을 닫고 있다** — 벤더의 비전과 웹의 실제 수용 태세 사이에 간극이 벌어지는
  구간이다.
- 에이전트가 거부당할 때마다 "에이전트에게 맡길 수 있는 일"의 범위가 좁아진다 —
  장바구니·예약처럼 수익과 직결된 작업일수록 이 간극이 가장 크게 체감된다.
- 반대로 Yelp처럼 "유료 데이터 제휴"로 선회하는 사례는, 에이전트 트래픽을 막는
  대신 새로운 B2B 수익 모델(에이전트에게 데이터를 파는)로 만드는 길을 보여준다.

## 활용/시사점

- **AX**: 사내에서 고객 응대·구매 자동화에 외부 에이전트(또는 자체 구축 에이전트가
  외부 사이트를 대신 쓰는 구조)를 설계할 때, "그 사이트가 에이전트 접근을 허용하는가"를
  먼저 확인해야 하는 단계가 새로 생겼다 — 기존에는 API 유무만 봤다면 이제는 봇 차단
  정책까지 봐야 한다.
- **강의**: 에이전트 경제의 "공급 측 저항"을 보여주는 사례로, 에이전트 비전과 실제
  도입 장벽을 함께 가르치는 균형 잡힌 소재가 된다.

## 출처

- [The Verge — Websites are closing their doors to AI agents](https://www.theverge.com/ai-artificial-intelligence/1013195/ai-agents-blocked-web)
- [Hacker News 토론](https://news.ycombinator.com/item?id=50141657) (153점)
