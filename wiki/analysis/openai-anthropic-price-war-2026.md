---
type: analysis
date: 2026-10-25
tools: [chatgpt, claude]
importance: medium
uses: [ax]
source: https://minimaxir.com/2026/10/cheap-llms/
---

# OpenAI·Anthropic, 4개월 만에 모델 가격 최대 80% 인하 — 왜?

## 요지

Max Woolf(minimaxir)의 분석(HN 407점)에 따르면 OpenAI·Anthropic 양사가 최근 4개월간
플래그십 라인업 가격을 최대 80%까지 내렸다. 예: GPT-5.6 Luna는 2026-06 말 100만 토큰당
입력 $1·출력 $6으로 출시됐다가 07-30에 입력 $0.20·출력 $1.20으로(각각 80%) 인하됐다.

## 근거로 꼽은 3가지 원인

1. **오픈웨이트 모델과의 경쟁**: DeepSeek V4.1·Kimi K3.1 Pro 등 오픈웨이트 모델이
   수십 개 서드파티 추론 제공사에 걸쳐 널리 호스팅되며 가격 하한을 끌어내림.
2. **인프라 효율 개선**: 추론 효율화·규모의 경제로 마진을 유지하면서도 가격을 내릴
   여력이 생김.
3. **프롬프트 캐싱 구조**: 코딩·에이전트 워크플로에서는 긴 대화 히스토리를 매 턴
   다시 보내기 때문에 캐시 적중 토큰이 전체 토큰 소비의 96~99%를 차지 — 캐시 가격을
   내리는 것이 실질 체감 비용을 크게 낮춘다.

## 이 위키의 관련 사실들과의 연결

이미 개별 사건으로 기록된 가격 인하들이 하나의 지속적 흐름이라는 것을 보여준다:
[[2026-09-22-openai-gpt-6-sol-luna-launch]](Luna $0.10/$0.50, GPT-5.6 대비 절반 이하)·
[[2026-10-07-anthropic-claude-haiku-5-5-launch]](Haiku 4.5 대비 약 75% 저렴)·
[[2026-09-28-anthropic-claude-sonnet-5-5-launch]](가격 동결하며 작업당 비용 최대 30%↓)·
[[2026-10-26-openai-gpt-6-1-terra-launch]](GPT-6 Astra 대비 1/10 가격). 두 회사 모두
IPO를 앞두고 있어 이 타이밍에 대한 추측도 있다.

## AX 활용 포인트

- 벤더 가격표를 스냅샷으로만 보지 말고 **분기 단위로 추적**해야 한다 — 같은 작업의
  토큰 비용이 4개월 만에 1/5로 떨어질 수 있다는 것을 비용 예측·계약 재협상 주기에
  반영할 것.
- 프롬프트 캐싱을 적극 활용하는 워크플로(긴 시스템 프롬프트·반복 컨텍스트)일수록
  가격 인하 체감폭이 크다 — 사내 에이전트 설계 시 캐시 적중률을 높이는 프롬프트
  구조(고정 프리픽스 등)를 우선 점검할 가치가 있다.

## 출처

- [minimaxir — OpenAI and Anthropic cut their LLM prices by up to 80% within a few months. Why?](https://minimaxir.com/2026/10/cheap-llms/)
