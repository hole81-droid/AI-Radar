---
type: update
date: 2026-09-30
tools: [gemini]
importance: high
uses: [ax]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
---

# Google, "Gemini 4" 계열 첫 모델 "Gemini 4 Argon" 출시 — 사이버 보안·장문 출력 특화

## 무엇이 있었나

Google이 2026-09-30 **Gemini 4 Argon**을 공개했다. 09-24 신임 DeepMind SVP
Koray Kavukcuoglu가 "Gemini 4가 포스트트레이닝에 들어갔다"고 밝힌
([[2026-09-24-google-deepmind-gemini-4-post-training]]) 지 불과 6일 만의
실제 출시로, Gemini 3.x 계열(3.8 Flash·3.8 Live 등)을 잇는 차세대 프론티어
모델 라인의 첫 공개 버전이다.

- **출력 토큰 한도 100만**(기존 6.4만에서 대폭 확대) — 단일 작업 흐름 안에서
  훨씬 긴 추론·작업 연쇄가 가능.
- **소프트웨어 엔지니어링·기업 지식노동(법무·금융)·사이버 보안 방어**에 강점을
  둔 포지셔닝. 자율적 취약점 발견·패치 기능을 갖췄다고 발표.
- 영상·차트 분석을 포함한 멀티모달 성능 강화.
- **벤치마크**: DeepSWE v1.1 코딩 테스트 77.9%, Vals Index(금융·코딩·법무를
  GDP 기여도로 가중) 1위, AutomationBench 1위(51.3점), LVBench(장영상 이해)
  91.7%, CWE-bench v1(취약점 원격수정) 68%로 공동 1위.
- **가격**: 도입 특가 입력 $2·출력 $10(100만 토큰), 캐시 입력 95% 할인. 특가
  종료 후 정가는 입력 $4·출력 $20.
- **제공 범위**: 우선 "신뢰받는 사이버 방어자" 대상 Fairwind Program으로
  제한 공개, 미 정부 사전심사 절차를 거쳐 단계적 확대 예정. 이후 API·Google
  AI Ultra 구독자에게 순차 공개.
- Hacker News 658점(blog.google 발표)·42점(Artificial Analysis 벤치마크
  분석)으로 프론트페이지 최상위. 같은 날 r/ClaudeAI에서도 "Gemini 4 is out:
  The competition has woken up"·"Gemini 4 Argon tops Val AI benchmark on
  speed, cost and accuracy" 등 화제가 됐다.

## 왜 중요한가

- Gemini 3.5 Pro가 세 차례 연기된 전례([[2026-07-01-google-gemini-3-5-pro-rollout-delay]])와
  달리, "포스트트레이닝 진입" 공개(09-24) 이후 단 6일 만에 실제 출시로
  이어진 것은 이례적으로 빠른 속도다 — 신임 리더십의 "출시 우선" 기조가
  선언에 그치지 않고 실행으로 확인된 첫 사례.
- 프론티어 3사(OpenAI GPT-6.1 Sol·Astra, Anthropic Opus/Sonnet 5.5, Google
  Gemini 4 Argon)가 같은 주간에 모두 신모델을 내놓으며 경쟁이 한층
  압축됐다. 다만 Argon은 범용 대화·코딩 모델이 아니라 **사이버 보안 방어
  특화 + 정부 사전심사를 거치는 제한 공개**로 시작한다는 점에서 다른
  두 회사의 광범위 동시 출시와 결이 다르다.
- "출력 토큰 100만"은 단일 요청 안에서 처리 가능한 작업의 범위를 크게
  늘려, 장시간 자율 작업(에이전틱 코딩·장문 리포트 등)에 직접적인 영향을
  준다.

## 활용/시사점

- **강의**: 프론티어 모델의 "출력 토큰 한도"가 왜 에이전트 자율성의
  실질적 병목인지 설명할 때 이번 확장(6.4만→100만)을 구체 사례로 쓸 수
  있다.
- **AX**: 초기 공개가 일반 기업이 아니라 "신뢰받는 사이버 방어자"로
  한정돼 있으므로, 당장 도입 가능한 모델이 아니라는 점을 먼저 확인해야
  한다. 사이버 보안 방어 업무가 있는 조직은 Fairwind Program 참여 여부를
  모니터링할 가치가 있다. 일반 API·소비자 접근은 이후 순차 공개를
  기다려야 한다.

## 후속 (2026-10-13) — Fairwind 제한 공개 → Gemini 앱 Pro·Ultra 전면 롤아웃

- Google이 **Gemini 4 Argon을 Gemini 앱에서 AI Pro·AI Ultra 구독자 전체로
  확대**했다 — 09-30 발표 당시 "신뢰받는 사이버 방어자" 한정의 Fairwind
  Program·Ultra 전용에서, 일반 유료 구독자까지 넓어진 것. (Google
  Antigravity·AI Studio·Android Studio Canary는 여전히 AI Ultra 전용.)
- 응답이 "헤징 없이 더 직접적"이고 스타일 지시를 더 안정적으로 따른다고
  자평.
- 공개 성능 예시: **Chrome 팀**이 수백 개 파일에 걸친 아키텍처 리팩터를
  몇 달 걸릴 일을 몇 주로 단축, **Gemma 최적화**에서 A100 GPU 기준 추론
  처리량이 초당 약 37,900 → 108,000+ 토큰으로 **2.85배** 향상, **YouTube**
  댓글 로드 지연을 서버 30ms·클라이언트 20ms 단축.
- API 가격은 기존과 동일(도입 특가 입력 $2·출력 $10/100만 토큰, 11-30까지
  유효 후 정가 $4·$20).
- 같은 날 HN에서 "Gemini 4 Argon"(823점)·"Gemini 4 Argon for Robotics"
  (157점, 로보틱스 특화 버전 별도 공개)가 모두 프론트페이지 최상위에 올라
  09-30 발표 때보다 더 큰 반향을 모았다.

> ⚠️ **상충(표기 아님, 범위 확인)**: 09-30 당시 "제한 공개 후 단계적 확대"
> 예고가 2주 만에 실제 대중 롤아웃으로 이어진 것으로, 초기 기록과 모순되지
> 않고 예고된 경로를 그대로 따른 것이다.

## 출처

- [Google — Gemini 4 Argon 공식 발표](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
- [Artificial Analysis — Gemini 4 Argon (High): Intelligence, Performance and Price Analysis](https://artificialanalysis.ai/models/gemini-4-argon)
- [Hacker News(658점) — Gemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
- [9to5Google — Gemini app rolling out Gemini 4 Argon to AI Pro and AI Ultra (2026-10-13)](https://9to5google.com/2026/10/13/gemini-app-4-argon)
- [DeepMind — Gemini 4 Argon for Robotics](https://developers.googleblog.com/gemini-4-argon-for-robotics/)
- raw: `raw/2026-09/google-gemini-4-argon-launch.md`, `raw/2026-10/google-gemini-4-argon-public-rollout.md`
