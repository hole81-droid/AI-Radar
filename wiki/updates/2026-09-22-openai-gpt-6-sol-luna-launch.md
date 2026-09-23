---
type: update
date: 2026-09-22
tools: [chatgpt, codex]
importance: high
uses: [ax]
source: https://openai.com/index/introducing-gpt-6-sol-and-luna/
---

# OpenAI, GPT-6 Sol·Luna 출시 — Anthropic Opus 5.5와 같은 날 가격전쟁 점화

## 무엇이 있었나

Anthropic이 Claude Opus 5.5를 출시한 지 약 한 시간 뒤(2026-09-22), OpenAI가 GPT-6
패밀리의 중급·경량 모델 **GPT-6 Sol**과 **GPT-6 Luna**를 출시했다 — 같은 날 두 회사가
연달아 신모델을 내놓으면서 이번 발표의 헤드라인은 "성능"이 아니라 **"가격"**이었다.

- **역할 분담**: Sol은 코딩 등 복잡한 작업용, Luna는 문서 요약·정보 추출·빠른 질의응답 같은
  "고용량(high-volume) 작업"에 최적화됐다. 두 모델 모두 08-Astra(09-04 출시, GPT-6 플래그십)
  세대의 이점을 계승하면서 캐싱·추론 효율화로 비용을 낮췄다.
- **가격**: GPT-6 Luna는 입력 $0.10/output $0.50(100만 토큰당) — GPT-5.6 Luna
  ($0.20/$1.20) 대비 절반 이하이고, Haiku 4.5($1/$5)의 약 10분의 1 수준이다. GPT-6 Sol도
  GPT-5.6 Sol 대비 비슷한 폭으로 인하됐다. Anthropic도 같은 날 Opus 5.5 입력가를 $4(기존
  Opus 5 $5 대비 20%↓)·출력 $20로 낮추고 캐시 입력은 $0.50→$0.20(60%↓)로 내렸다
  ([[2026-09-22-anthropic-claude-opus-5-5-launch]]).
- **성능**: OpenAI는 Sol이 "이전 세대 대비 오류 약 절반, Astra 수준 신뢰도"를 달성했고
  코딩 오류율도 줄었다고 주장하며, Anthropic Fable·Opus 계열보다 우수하다고 밝혔다(자사
  벤치마크, 제3자 검증 전).
- **이용 경로**: ChatGPT Work·Codex·API에서 순차 제공.
- **GPT-5.5 단종 예고**: 같은 주 별도 공지로 ChatGPT·ChatGPT Work·Codex 전 플랜에서
  GPT-5.5가 2026-10-14부로 퇴역한다고 밝혔다.

## 왜 중요한가

지난 18개월간 중국계 오픈웨이트 모델(Kimi K3·GLM-5.3·Qwen 3.8 등)이 "쓸만한 토큰의
가격"을 계속 끌어내린 압력이, 이제 두 최상위 벤더의 동시 가격 인하로 이어졌다.
Simon Willison은 이를 "새로운 가격전쟁의 시작"으로 짚었다 — 지금까지 신모델 출시가
벤치마크 경쟁이었다면, 이번엔 같은 날 두 회사가 동시에 "얼마나 싸게 내놓을 수 있는가"로
경쟁한 첫 사례라는 것이다.

## 활용/시사점

- **AX 관점**: 기업 AI 비용 산정에서 "가장 비싼 모델을 써야 할 이유"가 계속 줄고 있다.
  특히 대량·반복 작업(요약·추출·1차 분류)에는 Luna급 경량 모델이 충분한 경우가 많아지므로,
  워크로드를 용도별로 나눠 모델을 배분하는 비용 전략이 실무적으로 중요해진다.
  Opus 5.5와 GPT-6 Sol/Luna의 동시 가격 인하는 벤더 록인보다 "작업당 비용 비교"가
  구매 결정의 기준이 되고 있음을 보여준다.
- **강의 소재**: "모델 출시=성능 경쟁"이라는 단순 프레임에서 벗어나, 가격 경쟁이 모델
  선택 기준을 어떻게 바꾸는지 설명하는 사례로 쓸 수 있다.
- OpenAI의 자체 우위 주장(Anthropic보다 우수)은 제3자 검증 전이므로 그대로 인용하지
  않는다 — 독립 벤치마크(Artificial Analysis 등)는 Opus 5.5 페이지의 후속 절 참고.

## 출처

- [OpenAI — Introducing GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
- [TechCrunch — OpenAI launches GPT-6 Sol and Luna, boasting lower cost and fewer mistakes](https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/)
- [Simon Willison — Claude Opus 5.5, GPT-6 Sol, GPT-6 Luna, and a new price war](https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/)
- 관련: [[2026-09-22-anthropic-claude-opus-5-5-launch]] · [[2026-09-04-openai-gpt-6-astra-launch]] · [[openai-gpt-6-astra]]
