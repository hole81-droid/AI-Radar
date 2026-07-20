---
type: update
date: 2026-07-16
tools: []
importance: high
uses: [ax]
source: https://venturebeat.com/technology/chinas-moonshot-ai-releases-kimi-k3-the-largest-open-source-model-ever-rivaling-top-u-s-systems
---

# 중국 Moonshot AI, 역대 최대 오픈웨이트 모델 "Kimi K3" 공개 — 프론트엔드 코딩에선 Claude Fable 5도 제쳤다

## 무엇이 있었나

중국 Moonshot AI가 2026-07-16 **Kimi K3**를 공개했다. 2.8조 파라미터 규모로 "역대 가장 큰 오픈웨이트(open-weight) 모델"이며, 완전한 가중치 공개는 2026-07-27로 예고됐다. 핵심 스펙:

- **아키텍처**: Kimi Delta Attention(KDA, 하이브리드 선형 어텐션) + Attention Residuals, 네이티브 비전 이해, 컨텍스트 1M 토큰
- **효율**: 896개 전문가(MoE) 중 토큰당 16개(약 1.8%)만 활성화
- **벤치마크**: GPQA Diamond 93.5%(공개 시점 오픈웨이트 최고), Terminal-Bench 2.1 88.3%, BrowseComp(에이전틱 작업) 91.2%(당시 공개 최고치). Arena의 Frontend Code 평가에서는 1,679점으로 **Claude Fable 5를 제치고 1위**(블라인드 개발자 테스트 기준). 자체 발표 벤치마크는 Claude Opus 4.8 max·GPT-5.5 high를 대체로 앞서지만 Claude Fable 5·GPT-5.6 Sol에는 못 미친다고 밝힘.
- **가격**: API 기준 캐시 히트 입력 $0.30/M, 캐시 미스 입력 $3/M, 출력 $15/M 토큰

## 왜 중요한가 (비개발자 관점)

- "가장 큰 오픈소스 모델"이 미국이 아니라 중국에서, 그것도 미국의 대중국 반도체 수출 규제 속에서 나왔다는 점 자체가 뉴스다. 최소 일부 벤치마크(프론트엔드 코딩)에서 Anthropic의 최신 모델을 앞서는 결과가 나오며, "미·중 AI 격차가 좁혀지고 있다"는 서사에 힘을 싣는다.
- 오픈웨이트로 풀리면 누구나 자체 서버에 내려받아 돌릴 수 있어, API 요금을 내지 않고 자체 인프라에서 프론트급 코딩 성능을 쓰려는 기업·개발자들의 선택지가 넓어진다.
- 같은 주 조코딩 등 국내 유튜브 채널도 "Kimi K3 열풍"을 헤드라인으로 다룰 만큼 커뮤니티 반응이 빨랐다.

## 활용/시사점

- **AX**: 오픈웨이트 프론티어급 모델의 등장은 "특정 벤더 API 종속" 리스크를 낮추는 협상 카드가 된다. 코딩 특화 업무에서 Claude·GPT 계열과 함께 K3를 벤치마크 후보에 넣어볼 가치가 있다. 단, 자체 호스팅에는 2.8T 파라미터급 인프라 비용이 따로 든다는 점을 감안해야 한다.
- 벤치마크 우위는 "프론트엔드 코딩" 등 특정 영역에 한정된 결과이며, 자체 발표 수치가 섞여 있어 실제 도입 전 별도 검증이 필요하다.

## 후속 반응 (2026-07-20 갱신)

- **수요 폭증 → 신규 구독 일시 중단**: 공개 직후 수요가 몰리며 Moonshot AI가 기존 회원에게 컴퓨트를
  우선 배정하기 위해 신규 구독을 일시 중단했다.
- **OpenAI 임원의 "AI 공산주의" 경고**: OpenAI 전략담당(Head of Strategic Futures) Dean Ball은
  오픈웨이트 모델 확산이 결국 "AI를 시장 상품이 아닌 국가가 제공하는 공공재로 만드는 AI 공산주의"로
  귀결될 수 있다고 공개 경고했다. 다만 그도 Kimi를 "매우 좋은 모델"이라 인정했고, 에이전틱 코딩
  세션에서는 "2026년 1분기 최상위 공개 모델과 비슷한 수준"이라 평가했다.
- **시사점**: 오픈웨이트 vs 폐쇄형 모델 논쟁이 성능 비교를 넘어 지정학·규제 이슈로 번지고 있다 —
  프론트엔드 코딩 등 일부 영역의 오픈웨이트 우위가 이어지면 미국 정부의 규제 개입 가능성도 거론된다.

## 후속 반응 2 (2026-07-20/21 갱신 — IPO 추진 + 미 정부 규제 검토)

- **Moonshot AI, 홍콩 IPO 추진**: Kimi K3 흥행에 힘입어 6개월 내 홍콩 상장을 추진하며,
  목표 밸류에이션은 **$30B**. 2025년 말 약 $4B였던 기업가치가 2026년 5월 $2B 펀딩 라운드로
  $20B를 넘겼고, 이번 K3 흥행 이후 $30B까지 거론된다. 매출은 2026년 3~6월 사이 ARR 기준
  $100M→$300M으로 증가. Kimi K3 공개 이후 수요 급증으로 신규 구독을 일시 중단했던 것과 같은
  맥락의 급성장이다.
- **미국 정부, 중국산 오픈웨이트 AI 모델 규제 검토 (Axios 단독, 2026-07-20)**: Kimi K3를
  계기로 트럼프 행정부 내에서 중국산 AI 모델(오픈웨이트 포함)을 견제하는 방안이 다시
  논의되고 있다. 상무부가 과거 검토했던 "Entity List"(라이선스 없이는 미국 접근 차단) 등재
  카드가 재부상했고, 직접 금지 대신 조달 규정·블랙리스트 위협·"백도어·보안 취약점" 부각 등
  간접적 방식으로 미국 기업의 중국 모델 이탈을 유도하는 방안도 거론된다.
  - **반대 목소리**: 백악관 AI 자문 David Sacks는 "선두 폐쇄형 모델 기업들이 정부 권력을
    동원해 오픈웨이트 경쟁자를 제거하려 한다"며 이는 혁신을 저해하고 소수 기업의 과점을
    굳힐 것이라 경고했다. 커뮤니티에서도 이 규제 시도를 "미국 AI가 폐쇄적이라 오히려
    뒤처지고 있다"는 서사로 받아들이는 반응이 많다(r/singularity·r/OpenAI에서 같은 날 화제).
  - 미국 기업들이 저렴하고 성능도 비등한 중국 오픈웨이트 모델을 점점 더 채택하고 있다는
    점이 이 논쟁의 배경이다.

## 출처

- [VentureBeat — China's Moonshot AI releases Kimi K3, the largest open-source model ever, rivaling top U.S. systems](https://venturebeat.com/technology/chinas-moonshot-ai-releases-kimi-k3-the-largest-open-source-model-ever-rivaling-top-u-s-systems)
- [Tom's Hardware — China's 2.8-trillion-parameter Kimi K3 beats Claude Fable 5 in Frontend Code Arena benchmark](https://www.tomshardware.com/tech-industry/artificial-intelligence/moonshot-releases-2-8-trillion-parameter-kimi-k3)
- [Simon Willison — Kimi K3, and what we can still learn from the pelican benchmark](https://simonwillison.net/2026/Jul/16/kimi-k3/)
- [Bloomberg — Moonshot Unveils Kimi K3 AI Model, Narrowing Gap With US Rivals](https://www.bloomberg.com/news/articles/2026-07-17/china-s-powerful-new-moonshot-ai-model-closes-gap-with-us-rivals)
- [wccftech — An OpenAI Exec Thinks Kimi K3 And Other Open-Weight Models Are Bringing On "AI Communism"](https://wccftech.com/an-openai-exec-thinks-kimi-k3-and-other-open-weight-models-are-bringing-on-ai-communism/)
- [Axios — The secret Trump administration battle to fight Chinese AI](https://www.axios.com/2026/07/20/ai-us-china-open-source-kimi)
- [Yahoo Finance — Moonshot AI Plans Hong Kong IPO After Kimi K3 Model Debut](https://finance.yahoo.com/markets/stocks/articles/moonshot-ai-plans-hong-kong-123000193.html)
- [TheNextWeb — Moonshot plans to list in Hong Kong within six months at a $30 billion valuation](https://thenextweb.com/news/moonshot-ai-ipo-six-months-30-billion-kimi-k3)
- [r/OpenAI — The Trump administration considers banning Chinese open-source AI models, sparked by Kimi K3 -Axios](https://old.reddit.com/r/OpenAI/comments/1v1qk08/the_trump_administration_considers_banning/)
