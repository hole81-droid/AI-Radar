---
type: update
date: 2026-08-23
tools: [claude-code]
importance: high
uses: [ax]
source: https://www.ft.com/content/5ee49718-c258-4f01-aa32-7e5b76ae5245
---

# Anthropic 매출 급성장 — 그런데 최상위 모델 Fable 5는 오히려 외면받는 중

## 무엇이 있었나

- Financial Times가 "사정에 정통한 관계자들"을 인용해 보도한 내용을 Simon Willison이
  정리했다. Anthropic의 연환산 매출(annualized revenue)이 **7월 기준 $65B**로,
  5월의 $47B에서 크게 뛰었다.
- Anthropic은 2분기에 이어 3분기도 흑자를 예상한다고 투자자에게 밝혔으며, 연 $100,000
  이상을 지출하는 고객이 **6,000곳**이라고 공개했다.
- 같은 기사는 OpenAI 수치도 함께 다뤘다 — OpenAI의 연환산 매출은 분기 들어 35% 증가해
  **$40B+**를 넘겼고, 7월 출시된 GPT-5.6이 "부진했던 상반기 이후 반등"을 이끌었다고
  전한다.
- 눈에 띄는 대목은 결제 데이터 업체 **Ramp**의 "AI 인덱스"(자사 신용카드를 쓰는 기업
  7만 곳의 결제 내역 기반)로 본 Anthropic **모델별** 지출 비중이다(2026년 7월 기준):
  Opus 4.8 28.0%, Sonnet 4.6 8.3%, **Fable 5 8.0%**, Opus 4.6 6.9%, Sonnet 5 3.6%,
  Opus 5 3.5%, Opus 4.7 1.7%, Sonnet 4.5 1.3%, Haiku 4.5 1.0%, Opus 4.5 0.7%.
  즉 회사 전체 매출은 급성장하는데, 7/24 출시된 최상위·최고가 모델 **Fable 5의 실제
  기업 지출 비중은 8%대**에 그쳐 오히려 구형 모델인 Opus 4.8(28%)보다 한참 낮다.

## 왜 중요한가 (비개발자 관점)

- "제일 비싼 최신 모델 = 제일 많이 쓰는 모델"이 아니라는 걸 실제 결제 데이터로 보여주는
  사례다. 기업들은 최상위 모델이 나와도 비용 대비 성능이 검증된 구형·중간 등급 모델을
  계속 주력으로 쓰는 경향이 뚜렷하다.
- Anthropic 입장에서는 회사 매출 총액은 늘어도 정작 가장 마진이 높은 최상위 모델의
  채택은 더디다는 뜻이라, 가격·모델 라인업 전략에 대한 압박 신호로 읽힌다.

## 활용/시사점

- **AX**: 사내 AI 도입 시 "최신 최상위 모델을 무조건 쓴다"보다 "업무별로 비용 대비
  성능이 맞는 모델을 고른다"는 실제 시장의 다수 선택이 데이터로 확인된 셈이다. 모델
  라우팅(업무 난이도별 모델 자동 선택) 전략을 검토할 근거 자료로 쓸 수 있다.

## 출처

- [Simon Willison — Anthropic's best AI model struggles to attract users as cheaper tools thrive](https://simonwillison.net/2026/Aug/23/anthropics-best-ai-model-struggles-to-attract-users-as-cheaper-t/) (2026-08-23)
- [Financial Times (원문, 유료)](https://www.ft.com/content/5ee49718-c258-4f01-aa32-7e5b76ae5245)
- [Ramp AI Index](https://ramp.com/data/ai-index)
