---
type: update
date: 2026-09-08
tools: [chatgpt]
importance: high
uses: []
source: https://openai.com/index/navier-stokes-solution/
---

# OpenAI, 밀레니엄 난제 "나비어-스톡스 방정식"을 에이전트 1만 개로 88시간 만에 풀었다고 발표

## 무엇이 있었나

OpenAI가 2026-09-08 자체 미공개 차세대 모델(GPT-6 Astra보다 더 강력하다고 소개된
모델)을 써서 클레이수학연구소의 밀레니엄 난제 7개 중 하나인 **나비어-스톡스 방정식의
존재성·매끄러움 문제**를 풀었다고 발표했다. 이 문제는 각각 $100만 상금이 걸린 7개
난제 중 하나다.

- **작업 방식**: 최대 1만 개의 AI 에이전트를 동시에 가동해 09-05(토)까지 88시간 만에
  결론에 도달했고, 이후 Lean 형식 검증에 GPT-6 Astra로 17시간을 추가로 썼다.
- **결론 내용**: 소용돌이가 점점 더 빠르게 조여들면서도 유체의 에너지 총량은 유한하게
  유지되는 구성("유한시간 블로업")을 찾아냈다는 내용이다.
- **우선권 분쟁**: OpenAI는 09-01에 이 작업을 시작한 계기가 Anthropic 직원 Levent
  Alpöge와 NYU 수학 교수 Tristan Buckmaster에 대한 소문 때문이었다고 밝혔다. 09-06
  자체 증명·검증을 마친 뒤 공동 발표를 제안하려 두 사람에게 연락했는데, 그제야
  이들의 연구가 나비어-스톡스가 아니라 **관련은 있지만 다른 문제인 "강제 오일러
  방정식(forced Euler equations)"**을 다루고 있었다는 사실을 알게 됐다고 설명했다.

## 왜 중요한가 (비개발자 관점)

- 09-04에 이미 Anthropic이 페르마의 마지막 정리를 컴퓨터 검증 가능한 형태로 증명했다고
  발표한 데 이어([[2026-09-08]] 뉴스레터 참고), 나흘 만에 OpenAI가 훨씬 상금이 크고
  풀이 자체가 미해결이던 밀레니엄 난제를 풀었다고 발표한 것이다 — AI 랩들이 서로
  경쟁적으로 최상급 수학 난제를 "증명 소재"로 삼는 흐름이 뚜렷해지고 있다.
- 다만 이번 사례는 **동료검토 전** 주장이고, 발표 과정에서 다른 연구자의 미공개
  연구를 소문으로 접해 시작했다는 정황이 함께 드러나 논란이 됐다 — AI 기업이 학계의
  연구 우선권·연구윤리와 충돌할 수 있음을 보여주는 사례로도 함께 언급된다.
- "에이전트 1만 개를 동시에 돌린다"는 규모 자체가, 에이전트 오케스트레이션이 이제
  개별 작업 단위가 아니라 대규모 병렬 연구 조직 단위로 쓰이고 있다는 신호다.

## 활용/시사점

- **AX**: 대규모 병렬 에이전트 오케스트레이션(수천~수만 개)이 연구·검증 영역에서
  실제로 시도되고 있다는 사례 — 조직 내 대규모 에이전트 운용을 설계할 때 참고할
  스케일 감각을 준다.
- **강의**: "동료검토 전 주장(claimed)"과 "검증된 결과"를 구분해서 다루는 사례로
  적합하다. AI 기업의 연구 성과 발표를 어떻게 비판적으로 읽을지 설명할 때, 이번
  우선권 분쟁을 함께 소개하면 좋다.

## 09-11 후속: 우선권 분쟁 격화 — "미공개 연구를 학습에 썼는가"

> ⚠️ 상충: OpenAI는 09-08 발표 당시 "Buckmaster·Alpöge의 연구를 안 것은 자체 증명을
> 마친 뒤였고, 그마저도 나비어-스톡스가 아니라 다른 문제(강제 오일러 방정식)였다"고
> 설명했다. 그러나 Buckmaster는 이 설명을 재차 공개 반박하며, 자신의 **미공개**
> 저소산(hypodissipative) 결과와 관련해 훈련 데이터 사용 의혹을 다시 제기했다.

- NYU 수학자 Tristan Buckmaster와 Anthropic 소속 연구자 Levent Alpöge가 실제로는
  OpenAI·Anthropic이 만든 AI 도구를 활용해 지난 한 달간 이 문제에서 상당한 진전을
  이루고 있었다는 사실이 추가로 확인됐다 — 이들이 결과를 공개하기 전에 OpenAI가
  막대한 컴퓨팅 자원을 투입해 독자적으로 결론에 도달해 발표를 앞질렀다는 것이다.
- OpenAI는 "특정 사용자 데이터에 접근한 적은 없다"면서도 **비식별화된 간접적 영향
  가능성까지는 배제할 수 없다**고 인정했다.
- 수학자 Andreas Thom은 이번 사건을 "AI 모델이 미공개 상태의 인간 연구 성과를
  대량으로 흡수해 AI가 만든 것처럼 제시하고 있다"는 더 넓은 투명성 문제로 확장해
  제기했다 — OpenAI와 수학계 사이에 학습 데이터 출처를 둘러싼 신뢰 공백이 있다는
  지적이다.

## 09-12 후속: 필즈메달 25명 공개서한 — "발표 관행이 수학 연구 문화를 훼손한다"

- OpenAI가 Buckmaster에게 "공동 논문에서 OpenAI 모델이 문제를 풀었다고 인정하면
  합병 발표를 진행하자"고 제안했다는 사실이 추가로 확인됐다. 다만 이 제안에는
  **Alpöge(Anthropic 소속)를 공저자에서 제외**하는 조건이 붙어 있었다 — Buckmaster는
  이 조건에 격분해 제안을 공개 거부하고 반박에 나섰다.
- **필즈메달 수상자 25명이 공개서한에 서명**, AI 랩들의 최근 발표 관행(독립검증이
  끝나기 전 발표, 결과가 나온 바로 그 주말에 발표하는 관행 등)이 수학 연구 문화 자체를
  훼손하고 있다고 비판했다. "결과가 발표된 주말 안에는 독립검증이 불가능하다"는 점이
  핵심 우려로 지목됐다.
- 학계 최고 권위자 집단의 공개서한이라는 점에서, 이번 사건은 단순한 우선권 분쟁을
  넘어 "AI 기업의 연구 성과 발표 방식 자체"에 대한 제도적 반발로 확대됐다.

## 09-21 후속: 필즈메달 25인 공개서한에 대한 응답 — 독립 수학자문기구 AGMAI 신설

09-12 필즈메달 수상자 25명의 공개서한(발표 관행 비판) 이후, 9명의 저명 수학자
(François Charles·Camillo De Lellis·Timothy Gowers·Martin Hairer·Nikhil
Srivastava·Ulrike Tillmann·Ravi Vakil·Edward Witten·Melanie Matchett Wood)가
프린스턴 고등연구소(IAS) 소속 독립기구 "Advisory Group on Mathematics and
Artificial Intelligence"(AGMAI)를 신설했다고 09-21 Terence Tao의 블로그를 통해
발표했다(작성은 자문위원회 공동명의, Tao 개인 보증은 아님).

- OpenAI가 애초에 이들에게 "OpenAI 전용 외부 자문위원회"를 제안했으나, 수학자들은
  대신 OpenAI에 종속되지 않는 더 넓은 범위의 독립기구를 만들었다 — 목적은
  "수학과 수학계 공동체의 최선의 이익"에 봉사하는 것이라고 명시.
- 신설 직후 첫 과제로 명시한 것은 OpenAI가 자사 미공개 모델로 만들었다고 주장하는
  "다수의 중요 수학 결과"를 앞으로 어떻게 공개·검증·조율할지에 대한 조언이다 —
  이번 나비어-스톡스 사건과 직접 연결되는 실무 대응이다.
- Tao 블로그 댓글란에는 OpenAI와의 협력 자체에 회의적인 반응이 다수 확인됐다.
  나비어-스톡스 우선권 분쟁은 자문위 본문보다는 댓글에서 주로 언급됐다.

이로써 09-08 발표 이후 이어진 논란이 "학계의 공개서한 비판"(09-12)에서
"AI 기업과 학계 사이의 상설 조율 채널 신설"(09-21)로 한 단계 더 진행됐다.

## 출처

- [OpenAI — On the Navier–Stokes Millennium Prize Problem](https://openai.com/index/navier-stokes-solution/)
- [Simon Willison — On the Navier–Stokes Millennium Prize Problem (코멘터리)](https://simonwillison.net/2026/Sep/8/on-navier-stokes/)
- [CNBC — OpenAI claims to have solved the 90-year-old Navier-Stokes math problem in 88 hours](https://www.cnbc.com/2026/09/09/openai-navier-stokes-math-problem-solved.html)
- [Washington Post — OpenAI claims it solved elusive math problem with a $1 million prize](https://www.washingtonpost.com/technology/2026/09/09/openai-claims-it-solved-elusive-math-problem-with-1-million-prize/)
- [Quanta Magazine — AI Has Solved One of Math's $1 Million Millennium Prize Problems](https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/)
- [Axios — OpenAI's historic math solution overshadowed by credit controversy](https://www.axios.com/2026/09/08/openai-math-solution-navier-stokes-credit)
- [Science (AAAS) — How an AI math breakthrough ignited a controversy](https://www.science.org/content/article/how-ai-math-breakthrough-ignited-controversy)
- [The Economist — Top mathematicians are outraged by OpenAI's methods](https://news.ycombinator.com/item?id=49662698) (원문 페이월, HN 94점 스레드로 교차확인)
- [Understanding AI — OpenAI spent millions to solve this famous math problem — mathematicians are furious](https://www.understandingai.org/p/openai-spent-millions-to-solve-this)
- 09-21 후속: [Terence Tao — Advisory Group on Mathematics and Artificial Intelligence](https://terrytao.wordpress.com/2026/09/21/advisory-group-on-mathematics-and-artificial-intelligence/) · [OpenAI — Advisory Group on Mathematics and AI](https://openai.com/index/advisory-group-on-mathematics-and-ai/)
