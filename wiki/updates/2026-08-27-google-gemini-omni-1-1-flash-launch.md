---
type: update
date: 2026-08-27
tools: [gemini]
importance: medium
uses: [course, ax]
source: https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/
---

# Gemini Omni 1.1 Flash — 스튜디오급 AI 영상 생성 모델 개발자용 정식 출시

## 무엇이 있었나

2026-08-27, Google이 AI 영상 생성 모델 **Gemini Omni 1.1 Flash**를 개발자용 API로
정식 출시했다. Gemini 앱 내 영상 생성 기능("Gemini Omni")은 2026-06-30에
`gemini-omni-flash-preview`로 이미 공개된 바 있으며([[gemini]] 참고), 이번 1.1은 그
API 버전의 "프로덕션 준비 완료" 정식 출시로 볼 수 있다.

- **Scene Extension(장면 연장)**: 기존 "직전 1초만 참고"에서 "최대 10초 맥락 분석"으로
  개선, 10초 단위로 최대 40초까지 이어 생성.
- **Keyframe Control**: 시작·종료 프레임을 지정해 자연스러운 전환 생성 — 복잡한 카메라
  워크나 완벽한 루프 영상 제작에 활용.
- **Draft Mode**: 360p로 최대 60% 빠르고 1/3 비용에 빠른 프로토타이핑.
- **4K 업스케일링**: 최종본은 1080p·4K로 업스케일.
- **Video References**: 최대 3초 영상을 참조해 시각적·캐릭터 일관성 유지.
- Google AI Studio·Gemini Enterprise Agent Platform에서 API 제공, Adobe Firefly·Figma
  Weave·Runway에 이미 통합.
- 같은 날 음성 특화 모델 Gemini-3.5-Transcribe도 별도 발표(HN 296점). Gemini Omni 1.1
  Flash는 HN 361점으로 더 큰 화제.

## 왜 중요한가 (비개발자 관점)

AI 영상 생성이 "재미있는 데모"에서 "제품에 바로 넣는 API"로 넘어가는 단계라는 신호다.
Adobe·Figma·Runway 같은 실제 크리에이티브 툴에 바로 탑재됐다는 것은, 광고·마케팅·
콘텐츠 제작 현장에서 AI 영상 생성이 실무 파이프라인에 들어오기 시작했다는 뜻이다.
초안(Draft Mode)과 최종본(4K)을 비용·속도 다르게 나눠 쓸 수 있게 한 설계는, "일단 싸고
빠르게 여러 안을 뽑아보고 확정된 것만 고품질로 만든다"는 실무 워크플로를 그대로 반영한다.

## 활용/시사점

- **학습과정(course)**: "AI 영상 생성 파이프라인" 실습 소재로 적합 — 키프레임 제어·
  Draft→4K 단계별 워크플로가 실제 제작 과정과 유사해 강의 데모로 쓰기 좋다.
- **AX 관점**: 마케팅·콘텐츠팀이 영상 제작 외주·리소스를 일부 내재화할 수 있는 근거
  사례. Draft Mode의 "1/3 비용·60% 빠른 속도" 구조는 AI 영상 도입 시 비용 관리
  체크리스트(초안은 저가 모델, 확정본만 고품질 모델)로 참고할 만하다.

## 출처

- [Google — Build with Gemini Omni 1.1 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/)
- raw: [[raw/2026-08/google-gemini-omni-1-1-flash-launch]]
