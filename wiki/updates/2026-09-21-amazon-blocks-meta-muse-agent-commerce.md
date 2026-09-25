---
type: update
date: 2026-09-21
tools: [other]
importance: medium
uses: [ax]
source: https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/
---

# Amazon, Meta의 쇼핑 에이전트 "Muse"를 자사 사이트에서 차단

## 무엇이 있었나

Amazon이 2026-09-20 밤부터 Meta의 신규 개인 AI 에이전트 "Muse"(2026년 9월 출시,
쇼핑·예약 등 온라인 업무 대행용)를 Amazon.com에서 차단하기 시작했다. Meta가
Amazon의 봇 제거 요청을 거부한 뒤 나온 조치다. Muse로 Amazon 구매를 시도하면
"승인되지 않은 AI 에이전트의 지속적 접근은 Amazon 이용약관 위반"이라는 팝업이 뜬다.

- **Amazon이 밝힌 사유**: Muse가 Amazon 사이트에서 쇼핑 의도를 밝히거나 자신을
  봇으로 식별하지 않았다는 점(비공개 자동화), 로그인·세션 처리 방식에 대한 데이터
  보안 우려(Meta는 이 우려를 부인).
- **패턴의 일부**: 이번 조치는 지난 1년간 이어진 Amazon의 제3자 쇼핑 에이전트 차단
  기조의 연장선이다 — Amazon은 Perplexity의 Comet 브라우저를 상대로 소송을 냈고,
  Google·OpenAI가 만든 쇼핑 에이전트도 별도로 차단한 바 있다.

## 왜 중요한가 (비개발자 관점)

AI 에이전트가 쇼핑·예약 등 전자상거래의 "입구" 역할을 점점 더 많이 맡게 되면서,
Amazon 같은 플랫폼 소유자가 "누가 우리 사이트에서 자율적으로 거래할 수 있는지는
우리가 정한다"는 입장을 분명히 하고 있다. 이는 단순한 기술 마찰이 아니라 —
에이전트를 만드는 회사(Meta·Google·OpenAI·Perplexity)와 거래가 일어나는 플랫폼을
소유한 회사(Amazon) 사이에서 "전자상거래의 마지막 단계를 누가 중개하는가"를
둘러싼 새로운 경쟁 전선이 만들어지고 있다는 신호다.

## 활용/시사점

- **AX**: 에이전트 기반 구매·조달 자동화를 설계하는 기업이라면, 대상 플랫폼(예:
  주요 이커머스·B2B 조달 사이트)이 자동화 에이전트를 이용약관 위반으로 차단할 수
  있다는 리스크를 계약·기술 설계 단계에서 확인해야 한다 — "에이전트가 기술적으로
  가능하다"와 "플랫폼이 허용한다"는 별개의 문제다.
- **강의**: 에이전트 경제(agentic commerce)를 다룰 때, 에이전트 벤더 간 경쟁뿐
  아니라 "에이전트 vs 플랫폼 소유자"라는 또 다른 축의 갈등이 있다는 것을 이 사례로
  보여줄 수 있다.

## 후속 (2026-09-25) — Muse가 내부적으로 OpenAI 모델을 쓴다는 정황

한 개발자가 자신의 Muse 사용 로그를 분석해 공개한 결과, 거의 모든 세션이 Meta 자체
모델("Avocado")로 처리되는 가운데 특정 서브에이전트 하나만 `azure/muse-special`이라는
이름의 모델을 호출하고 있었다. 코드베이스에는 "MAGI native Azure OpenAI lane을 통한
GPT Responses 모델 클라이언트"라는 참조가 있었고, 서명 값(`gpt_responses_v1`, `gAAAAA`로
시작하는 암호화 페이로드)도 OpenAI가 쓰는 형식과 일치했다 — 즉 경쟁사인 Meta의 개인
AI 에이전트가 일부 작업에서 Azure 위의 OpenAI 모델을 몰래 빌려 쓰고 있을 가능성이 제기된
것이다. Meta는 이 발견에 대해 공식 확인·설명을 내놓지 않았다. 같은 시기 Muse는 iOS
App Store 무료 앱 1위(ChatGPT 제침)에 오르는 등 다운로드가 급증하고 있어, 경쟁사 모델
의존 의혹은 "Meta가 자체 모델만으로 소비자 에이전트 경쟁력을 확보했는가"에 대한 의문을
키운다. HN 79점.

## 출처

- [Bloomberg — Amazon Blocks Meta's Muse AI Agent From Its Retail Site](https://www.bloomberg.com/news/articles/2026-09-21/amazon-blocks-meta-s-muse-ai-agent-from-its-retail-site)
- [mouse.dev — Is Meta's Muse secretly running an OpenAI model? (09-25 후속)](https://mouse.dev/blog/muse-special/)
- [Hacker News(79점) — Meta's Muse appears to use an OpenAI model labeled muse-special](https://news.ycombinator.com/item?id=49848095)
- [GeekWire — Amazon blocks Meta's Muse AI assistant in new standoff over agentic shopping](https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/)
- [The Register — Amazon shows Meta's Muse AI shopping agent the door](https://www.theregister.com/ai-and-ml/2026/09/21/amazon-shows-metas-muse-ai-shopping-agent-the-door/5297777)
- [TechCrunch — Meta's AI agent has been blocked from using Amazon.com](https://techcrunch.com/2026/09/21/metas-ai-agent-has-been-blocked-from-using-amazon-com/)
