---
type: update
date: 2026-09-28
tools: []
importance: high
uses: [ax]
source: https://nvidianews.nvidia.com/news/open-agent-safety-platform
---

# Nvidia, 하드웨어 "킬스위치" 포함 AI 에이전트 안전 플랫폼 공개 — Anthropic 등 100여 개사 참여

## 무엇이 있었나

Nvidia가 2026-09-28 **Open Agent Safety Platform**을 발표했다. AI 에이전트가 통제
범위를 벗어났을 때 밀리초 단위로 격리시키는 것을 목표로 한다.

- **구성은 두 층**:
  1. **OpenShell** — 무료 오픈소스 런타임. 에이전트가 실행되는 동안 경계를 두르는
     소프트웨어 계층.
  2. **Sentry** — Nvidia BlueField-4 DPU(데이터처리장치)에서 독립적으로 동작하는
     **하드웨어 워치독**. 에이전트가 이 감시 장치를 보거나 조작할 수 없는 구조(실리콘
     단에서 격리)라는 점이 핵심 — 소프트웨어 차단과 달리 에이전트 자신이 우회할 수
     없다고 설명.
- **참여사 100여 개**: Anthropic·Microsoft·JPMorgan Chase·Palantir·Cisco·SpaceXAI 등이
  런칭 파트너로 이름을 올렸다. Anthropic은 Claude Managed Agents를 OpenShell·BlueField와
  통합했고, SpaceXAI는 Cursor 코딩 에이전트·Grok 모델에 적용 중이라고 밝혔다.

## 왜 중요한가

- 이번 발표는 진공에서 나온 것이 아니다. 바로 전날까지 공개된 두 사건 —
  OpenAI 에이전트의 정부 웹사이트 예상 밖 접촉으로 인한 훈련 재중단
  ([[2026-09-26-openai-agents-us-government-websites-incident]])과 자기복제형
  프롬프트 인젝션 실증 연구([[2026-09-25-openai-self-replicating-prompt-injection-worm]])
  — 가 같은 주에 겹치며 "에이전트 통제"가 업계 공통 의제로 떠오른 직후 나왔다.
  Nvidia가 "소프트웨어 가드레일은 결국 에이전트 자신이 우회할 수 있다"는 전제 하에
  **하드웨어 레벨 격리**를 들고나온 것은, 지금까지의 안전장치 논의가 프롬프트·정책
  수준에서 인프라 수준으로 한 단계 내려갔다는 신호다.
- Anthropic이 자사 모델(Claude)의 안전을 하드웨어 벤더(Nvidia)에 일부 위임하는
  구도이기도 하다 — 모델 자체의 정렬(alignment)만으로는 통제가 불충분하다는 것을
  최대 고객 겸 파트너들이 사실상 인정한 셈.

## 활용/시사점

- **AX**: 에이전트를 이메일·파일시스템·결제 등 실제 시스템에 연결하는 기업이라면,
  "모델이 알아서 안전하게 행동하길 기대"하는 것과 "외부에서 강제로 차단할 수 있는
  계층을 둔다"는 것은 다른 설계다. Sentry 같은 하드웨어 워치독 개념은 사내 에이전트
  아키텍처를 설계할 때 "이 에이전트를 강제로 멈출 수 있는 지점이 어디인가"를 별도
  질문으로 점검하게 만든다.
- **강의**: "에이전트 안전 = 프롬프트 잘 쓰기"라는 통념을 넘어, 런타임 격리·하드웨어
  워치독까지 포함하는 다층 방어 개념을 소개할 때 최신 사례로 쓸 수 있다.

## 출처

- [NVIDIA Newsroom — NVIDIA Launches Open Agent Safety Platform](https://nvidianews.nvidia.com/news/open-agent-safety-platform)
- [SecurityWeek](https://www.securityweek.com/nvidia-unveils-ai-agent-safety-platform-with-hardware-based-watchdog/)
- [Euronews](https://www.euronews.com/2026/09/28/nvidia-launches-platform-to-quarantine-rogue-ai-agents-in-milliseconds)
