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

## 08-26 갱신 — 가격 경쟁 구도 추가 확인

같은 FT 기사에서 다뤄진 가격·경쟁 데이터를 추가로 확인했다(HN 토론 805점으로 재화제):

- Fable 5 가격은 약 **$10/백만 토큰**으로 GPT-5.6 Sol의 약 2배. FT는 별도로 Fable 5가
  **기업 전체 LLM 지출의 11%**를 차지한다고 보도했다(위 Ramp 수치 "Anthropic 모델 내
  8.0%"와는 집계 기준이 달라 보이므로 직접 비교는 유의할 것).
- OpenAI가 8/21 GPT-5.6 Sol 가격을 20% 이상 인하(입력 $5→$4, 출력 $30→$20/백만 토큰)해
  Claude Opus 5보다 입출력 모두 저렴해졌다. Anthropic 모델 평균 결제 단가도 7월 중순
  이후 약 25% 하락한 것으로 나타나, 가격 경쟁이 실제 지표로 확인된다.
- 기업들이 쉬운 작업은 저가 모델, 복잡한 작업만 고가 모델로 보내는 "모델 라우팅" 전략을
  점점 더 채택하는 추세라고 FT는 전한다.
- 배경 참고: Anthropic은 2026-08-10 Claude Sonnet 5의 도입가($2/$10, 백만 토큰당
  입력/출력)를 9/1부터 $3/$15로 올릴 예정이었던 인상 계획을 철회하고 도입가를 영구
  표준가로 확정했다 — 이번 가격 경쟁 압력과 같은 방향의 결정으로 읽힌다.

## 08-27 갱신 — IPO 투자자 피치: "잠재 매출 $30조" 시장 규모 제시

WSJ 보도(HN 40점, 2026-08-25)에 따르면 Anthropic이 IPO 투자자들에게 **총주소가능시장(TAM)
$30조 이상**이라는 수치를 제시할 예정이다.

- 이 수치는 SpaceX가 자사 상장 전 투자자에게 제시했던 $28.5조 추정치를 웃돈다.
- TAM 산출 근거는 "AI 모델로 대체 가능한 전체 작업 범위" — 특정 회사가 가능한 모든 고객을
  확보했을 때 낼 수 있는 이론상 최대 연매출을 뜻하며, IPO 신고서에서 성장 여력을 강조하는
  용도로 흔히 쓰이는 지표다(실제 매출 전망치가 아님에 유의).
- 최대 **$100B 조달**, 밸류에이션 약 **$2조**를 목표로 하는 것으로 알려짐 — 두 수치 모두
  SpaceX의 실제 기록($86B 조달, $1.77조 밸류에이션)을 넘어서는 규모다.
- 2분기 매출은 전 분기 대비 두 배 이상 늘어난 **$11.6B**로 보도됨(본 페이지 위쪽의 "7월 기준
  연환산 $65B"와는 집계 기준이 다른 수치이므로 직접 비교 시 유의).
- S-1 등 IPO 관련 서류가 곧 공개될 것으로 보이며, 9월 말~10월 초 상장 가능성이 거론된다
  ([[2026-07-15-anthropic-ipo-investor-meetings]]에서 다룬 "10월 목표"와 궤를 같이함).

TAM $30조라는 숫자 자체는 "이론상 최대치"이지 실제 매출 전망이 아니지만, 위쪽에서 다룬 실측
연환산매출 급성장($47B→$65B, 7월 기준)과 함께 놓고 보면 IPO를 앞두고 회사가 성장 서사를
공격적으로 밀어붙이고 있다는 맥락이 뚜렷해진다.

## 출처

- [Simon Willison — Anthropic's best AI model struggles to attract users as cheaper tools thrive](https://simonwillison.net/2026/Aug/23/anthropics-best-ai-model-struggles-to-attract-users-as-cheaper-t/) (2026-08-23)
- [Financial Times (원문, 유료)](https://www.ft.com/content/5ee49718-c258-4f01-aa32-7e5b76ae5245)
- [Ramp AI Index](https://ramp.com/data/ai-index)
- [Hacker News 토론(805점, 2026-08-25)](https://news.ycombinator.com/item?id=49411102)
- [Claude Platform Docs — Pricing](https://platform.claude.com/docs/en/about-claude/pricing) (Sonnet 5 도입가 영구화 확인)
- [WSJ — Anthropic expected to tell investors it sees over $30 trillion in potential revenue](https://www.wsj.com/tech/ai/anthropic-expected-to-tell-investors-it-sees-over-30-trillion-in-potential-revenue-a611efea) (Hacker News 토론 40점, 2026-08-25)
- [Yahoo Finance — Anthropic pitches IPO investors on $30 trillion market opportunity](https://finance.yahoo.com/technology/ai/articles/anthropic-pitches-ipo-investors-30-172107288.html)
