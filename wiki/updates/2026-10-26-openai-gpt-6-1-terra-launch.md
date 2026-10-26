---
type: update
date: 2026-10-26
tools: [chatgpt, codex]
importance: medium
uses: [course, ax]
source: https://www.bleepingcomputer.com/news/artificial-intelligence/openai-launches-gpt-61-terra-with-3x-faster-ai-agents-50-percent-lower-pricing/
---

# OpenAI, GPT-6.1 Terra 출시 — 컴퓨터 사용·코딩 특화 경량 모델, GPT-6 Astra 1/10 가격

## 무엇이 있었나

OpenAI가 **GPT-6.1 Terra**를 출시했다. [[2026-09-29-openai-devday-2026-dots-gpt-6-1-sol]]에서
나온 GPT-6.1 Sol의 하위 라인업으로, 컴퓨터 사용(화면 이해·앱 간 동작)·시각적 추론·코딩·
일상 업무(양식 작성, 기술도면 해석, 영상 편집 등)에 특화됐다.

- **가격**: 100만 토큰당 입력 $1·출력 $5 — GPT-5.6 Terra·GPT-6.1 Sol 대비 50% 저렴,
  GPT-6 Astra 대비로는 **1/10 가격**인데도 일부 벤치마크에서 Astra급 성능.
- **속도**: GPT-6 Astra·GPT-6.1 Sol보다 **3배 이상 빠르게** 작업을 완료.
- **코딩 벤치마크**: Terminal-Bench 4.0에서 21.5%(GPT-5.6 Terra) → **50.3%**로 개선,
  낮은 추론 강도에서의 오류율이 53.6%→16.7%로 감소.
- **제공 범위**: ChatGPT Work·Codex(Plus/Pro/Enterprise/Edu)와 API(`gpt-6.1-terra`)로
  동시 제공.
- OpenAI는 가장 복잡한 코딩 작업에는 여전히 GPT-6.1 Sol·GPT-6 Astra를 권장한다 —
  Terra는 "빠르고 저렴한 중간 옵션"으로 포지셔닝.

## 왜 중요한가

- GPT-6 Astra(09-04)·GPT-6.1 Sol(09-29) 이후 세 번째 단계로, **"최상위 모델 성능을
  하위 모델 가격으로"** 끌어내리는 다운마켓 압력이 이번에도 반복됐다. 같은 주
  [[openai-anthropic-price-war-2026]]에서 다루는 "4개월간 최대 80% 가격
  인하" 흐름과 같은 패턴이다.
- 컴퓨터 사용(화면 조작) 성능을 이 가격대까지 내렸다는 점은, "에이전트가 화면을 보고
  직접 조작하는" 업무(양식 작성·데이터 입력 등 반복 사무)의 단가가 급격히 낮아지고
  있음을 보여준다.

## 활용/시사점

- **강의**: 같은 세대 모델 패밀리(Astra/Sol/Terra) 안에서 "성능-속도-가격"을 어떻게
  트레이드오프하는지 설명하는 교재로 적합 — 업무 난이도별로 어떤 모델을 쓸지 고르는
  실습에 쓸 수 있다.
  - **AX**: 반복적인 화면 조작·양식 처리 업무를 자동화할 때, 최상위 모델을 쓰지 않고도
  충분한 성능을 더 싼 가격에 얻을 수 있는 선택지가 생겼다는 점을 비용 설계에 반영할
  가치가 있다.

## 출처

- [BleepingComputer — OpenAI launches GPT-6.1 Terra with 3x faster AI agents, 50% lower pricing](https://www.bleepingcomputer.com/news/artificial-intelligence/openai-launches-gpt-61-terra-with-3x-faster-ai-agents-50-percent-lower-pricing/)
- [Decrypt — OpenAI Launches GPT-6.1 Terra](https://decrypt.co/381883/openai-launches-gpt-6-1-terra-half-good-half-price)
- 관련: [[2026-09-29-openai-devday-2026-dots-gpt-6-1-sol]] · [[2026-09-04-openai-gpt-6-astra-launch]]
