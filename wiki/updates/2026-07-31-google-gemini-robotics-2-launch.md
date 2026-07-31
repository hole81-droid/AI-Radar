---
type: update
date: 2026-07-31
tools: [gemini]
importance: medium
uses: [ax]
source: https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/
---

# Google DeepMind, 로봇 전신 제어 모델 "Gemini Robotics 2" 공개

## 무엇이 있었나

Google DeepMind가 2026-07-30, 휴머노이드 로봇의 발끝부터 손끝까지 전신을 조율하는 AI 모델
패밀리 **Gemini Robotics 2**를 공개했다.

- **모델 구성**: 3종 모델, 3단계 접근 등급
  - VLA(Vision-Language-Action) 모델
  - 임베디드(온보드) 추론 VLM
  - 온디바이스 VLA
- **핵심 능력**: 휴머노이드 전신 동작 조율(걷기·구부리기·선반에 물건 놓기), 복수 로봇의
  동시 협업, 새로운 로봇 기종에 몇 시간 만에 적응
- **시연**: 카세트테이프 삽입, 전구 교체, 쓰레기봉투 묶기 등 정교한 조작 영상 공개
- **성능 특징**: 두 손가락 그리퍼가 다지(多指) 핸드보다 안정적인 성능을 보였다고 테스트 결과
  공개

## 왜 중요한가 (비개발자 관점)

지금까지 로봇 AI는 팔·손 등 부분 동작 제어에 머무는 경우가 많았는데, 이번 발표는 "전신"을
하나의 모델이 조율하고 여러 로봇이 협업까지 하도록 확장했다는 점에서 실제 물리적 작업 자동화
(창고·제조·서비스 로봇)에 한 걸음 더 다가간 신호다. Gemini가 챗봇·코딩 도구를 넘어 물리
세계로 확장되는 흐름을 보여주는 사례이기도 하다.

## 활용/시사점

- **AX**: 물류·제조·서비스 분야에서 로봇 자동화를 검토 중인 기업이라면, "새 로봇 기종 적응에
  몇 시간"이라는 주장이 실제 도입 비용(로봇 교체·재훈련 비용) 절감으로 이어질지 추후 벤치마크를
  주시할 가치가 있다.
- **강의**: LLM 기반 AI가 텍스트·코드를 넘어 물리적 행동(전신 제어)까지 확장되는 "에이전틱
  AI의 다음 단계" 사례로, Claude/Codex의 소프트웨어 에이전트와 대비해 설명하기 좋다.

## 출처

- [Google DeepMind 공식 — Gemini Robotics 2 brings whole body intelligence to robots](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/)
- [Bloomberg — Gemini Robotics 2 Expands Google's AI Capabilities for Humanoid Robots](https://www.bloomberg.com/news/articles/2026-07-30/google-unveils-gemini-ai-for-robots-struggling-with-dexterity)
- [Engadget — Google's new Gemini Robotics 2 platform allows for 'intelligent whole-body control'](https://www.engadget.com/2227268/google-gemini-robotics-2-platform-intelligent-whole-body-control/)
