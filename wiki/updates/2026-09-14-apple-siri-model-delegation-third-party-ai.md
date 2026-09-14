---
type: update
date: 2026-09-14
tools: [claude-code]
importance: medium
uses: [ax]
source: https://www.macrumors.com/2026/09/14/siri-can-be-swapped-out-for-chatgpt-claude/
---

# iOS 27 비공개 코드에서 Siri를 Claude·ChatGPT로 교체 가능한 구조 발견

## 무엇이 있었나

코드 연구자 "pdfu"가 iOS 27과 macOS "Golden Gate"의 비공개(private) 코드를 분석해,
Apple이 Siri를 서드파티 AI로 교체할 수 있는 인터페이스를 이미 내부적으로 구현해 뒀다는
사실을 공개했다(HN 215점, 09-14).

- **Model Delegation API**: App Intents를 통해 서드파티 AI 서비스가 Siri 안으로 직접
  플러그인될 수 있는 구조. 실제로 ChatGPT를 Siri 대체 모델로 동작시키는 데모까지 확인됨 —
  ChatGPT가 Apple의 Siri 플래너 프롬프트와 도구(tool) 정의를 그대로 전달받아 시스템 동작을
  요청하고, 개인 데이터를 반환받아 답을 구성하면, **Siri 고유의 UI·음성으로 그 답을
  출력**하는 방식이다.
- **Inference Provider 프로토콜**(Model Manager Services): Apple 자체 서버측 Siri 모델을
  GPT-5.6 Terra 같은 대체 모델로 교체할 수 있는 별도 경로.
- 현재 macOS 27 Golden Gate 릴리스 후보(RC)에서 "Ask..." 구현은 **ChatGPT 확장에만
  한정**돼 있고 Claude는 아직 지원되지 않는다. Apple은 이 위임(delegation) 권한을
  서드파티에 아직 공개하지 않았고, 사용자에게 노출되지도 않은 상태다.

## 왜 중요한가 (비개발자 관점)

- Apple이 자체 Siri 모델 성능과 무관하게 **모델 비종속(model-agnostic) 아키텍처**를 이미
  설계해 뒀다는 뜻이다 — Siri의 "두뇌"를 나중에 통째로 바꿔 끼울 수 있는 구조.
- 지금은 ChatGPT만 확인됐지만 코드 구조 자체가 여러 모델을 껴서 쓸 수 있게 설계돼 있어,
  Claude를 비롯한 다른 AI가 향후 Siri의 실제 엔진이 될 가능성을 시사한다.
- 아직 비공개·미출시 기능이라 실제 사용자에게 미치는 영향은 없지만, "빅테크 플랫폼이
  자체 모델 대신 외부 AI 벤더를 꽂아 쓰는" 인터페이스가 표준화되는 흐름의 초기 신호로
  읽을 수 있다(Apple-OpenAI 2024년 파트너십의 기술적 연장선).

## 활용/시사점

- **AX**: 플랫폼(OS·앱) 차원에서 AI 모델을 벤더 종속 없이 갈아끼우는 아키텍처가 업계
  표준으로 자리잡을 조짐 — 기업이 사내 시스템을 설계할 때도 특정 벤더 API에 하드코딩하지
  않는 "모델 추상화 계층" 설계가 장기적으로 유리하다는 근거로 쓸 수 있다.
- **강의**: "AI 에이전트를 앱에 통합하는 방식"을 설명할 때, Apple의 App Intents 기반
  위임 구조를 실제 대기업 사례로 들 수 있다(아직 비공개 기능이라는 단서를 함께 제시).

## 출처

- [MacRumors — Apple's Siri AI Can Be Swapped Out for Claude, ChatGPT, Code Shows](https://www.macrumors.com/2026/09/14/siri-can-be-swapped-out-for-chatgpt-claude/) (2026-09-14, HN 215점)
- [AppleInsider — Code references show Siri AI can be swapped out for ChatGPT or Claude](https://appleinsider.com/articles/26/09/14/siri-ai-is-built-to-be-replaceable-by-claude-or-chatgpt)
- [9to5Mac — iOS 27 code shows you may be able to replace Siri AI with Claude or ChatGPT](https://9to5mac.com/2026/09/14/ios-27-code-shows-you-may-be-able-to-replace-siri-ai-with-claude-or-chatgpt-poll/)
