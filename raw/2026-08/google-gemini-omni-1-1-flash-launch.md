# Gemini Omni 1.1 Flash — 스튜디오급 AI 영상 생성 모델 정식 출시

- 원문: https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/
- 수집일: 2026-08-31 (스캔), 발표일: 2026-08-27
- 커뮤니티 반응: HN "Gemini Omni 1.1 Flash" 361점(2026-08-27) — https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/ (같은 날 Gemini-3.5-Transcribe도 296점으로 동시 화제)

## 요약 (WebFetch 종합)

Google이 개발자용 프로덕션 등급 AI 영상 생성 모델 **Gemini Omni 1.1 Flash**를 정식 출시.
"스튜디오급 영상 제작"을 표방하며 창작 제어 기능을 대폭 강화했다.

### 신규 기능
- **Scene Extension(장면 연장)**: 기존에는 직전 1초만 참고해 이어 그렸다면, 이제 최대
  10초 분량의 이전 맥락을 분석해 10초 단위로 최대 40초까지 연장 생성 가능.
- **Keyframe Control(키프레임 제어)**: 시작·종료 프레임을 지정하면 그 사이를 자연스럽게
  전환 생성 — 복잡한 카메라 워크·완벽한 루프 영상 제작에 활용.
- **Draft Mode(초안 모드)**: 360p 해상도로 최대 60% 빠르고 1/3 비용으로 빠른 프로토타이핑.
- **4K 업스케일링**: 최종본은 1080p·4K로 업스케일 가능.
- **Video References**: 최대 3초 분량의 영상을 참조해 시각적·캐릭터 일관성 유지.

### 포지셔닝 & 배포처
- 개발자용 API로는 첫 "프로덕션 준비 완료" 버전으로 포지셔닝.
- Google AI Studio, Gemini Enterprise Agent Platform에서 API 제공.
- Adobe Firefly, Figma Weave, Runway에 통합.

### 맥락
- Gemini 앱 내 "Gemini Omni" 비디오 생성 기능은 2026-06-30 프리뷰(`gemini-omni-flash-preview`)로
  이미 위키에 기록됨(wiki/tools/gemini.md) — 이번 1.1은 그 API 버전의 정식 GA로 볼 수 있음.
- 같은 날 음성 특화 Gemini-3.5-Transcribe도 별도 발표(HN 296점).
