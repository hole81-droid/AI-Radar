---
type: tool
date: 2026-07-06
tools: [gemini]
importance: high
uses: [course, ax]
source: https://blog.google/products/gemini/
---

# Gemini

Google의 플래그십 AI 모델 패밀리이자 이를 기반으로 한 소비자 앱·개발자 API·Workspace 통합 서비스의 총칭.

## 현재 상태 (2026-07 기준 스냅샷)

- **최신 GA 모델**: `gemini-3.6-flash` (2026-07-21 GA) — 코딩·지식노동·멀티모달 성능 향상, 출력 토큰 17% 절감, 가격 입력 $1.50/출력 $7.50(1M 토큰, 기존 3.5 Flash 대비 출력가 인하). 동시에 `gemini-3.5-flash-lite`(초당 350토큰, 입력 $0.30/출력 $2.50)와 보안 특화 `gemini-3.5-flash-cyber`(정부·신뢰 파트너 한정 파일럿)도 함께 출시([[2026-07-21-google-gemini-3-6-flash-launch]]). 이전 GA 모델은 `gemini-3.5-flash`(2026-05-19 Google I/O). ([changelog](https://ai.google.dev/gemini-api/docs/changelog), [출시 공지](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/))
- **Gemini 3.5 Pro**: 2M 토큰 컨텍스트로 예고, I/O 2026에서 제한 프리뷰 공개 후 6월·6/30·7월 중순 목표를 연달아 넘기며 세 번째 연기된 상태. 07-16 보도 기준 원인은 "코딩 성능이 내부 목표 미달", 새 출시일 미정([[2026-07-01-google-gemini-3-5-pro-rollout-delay]]). ([techjournal](https://techjournal.org/gemini-3-5-pro-release-date), [DeepMind 모델 페이지](https://deepmind.google/models/gemini/))
- **Gemini Notebook**(구 NotebookLM): 2026-07-16 리브랜딩, 노트북 내 코드 실행("보안 클라우드 컴퓨터")·Gemini 앱/검색 크로스플랫폼 동기화 추가. AI Ultra 우선 롤아웃([[2026-07-16-google-notebooklm-gemini-notebook-rebrand]]).
- **모델 계보**: Gemini 3 Pro(2025-11-18 출시) → Gemini 3.1 Pro(2026-02-19, 출력 65K 토큰·추론 강도 조절 파라미터) → Gemini 3.5 Flash. ([Gemini 3 발표](https://blog.google/products/gemini/gemini-3/), [DataCamp](https://www.datacamp.com/blog/gemini-3-1))
- **요금제**: Google AI Plus $4.99 / AI Pro $19.99 / AI Ultra $99.99·$199.99(월). I/O 2026에서 Ultra가 기존 $250에서 인하되고 $100 개발자·지식노동자용 티어가 신설됨. ([Google 공식](https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/), [Engadget](https://www.engadget.com/2176060/the-google-ai-ultra-plan-now-starts-at-100-a-month/), [구독 페이지](https://gemini.google/subscriptions/))
- **Gemini CLI 개편**: 2026-06-18부로 개인·AI Pro·Ultra 티어의 Gemini CLI / Gemini Code Assist 서비스가 중단되고 **Antigravity CLI**(멀티 에이전트 플랫폼 Antigravity로 통합)로 이관됨. ([Google Developers Blog](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/))

## 주요 기능

- **Gemini 앱**: 채팅, Gemini Live(실시간 음성), Deep Research, 이미지 생성(Nano Banana 계열), 비디오 생성(Gemini Omni), 학습용 study notebooks. ([앱 릴리스 노트](https://gemini.google/release-notes/), [6월 AI 업데이트](https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-june-2026/))
- **Gemini Spark**: I/O 2026에서 발표된 24/7 상시 실행 개인 에이전트. Google Cloud VM 위에서 Gemini 3.5 Flash + Antigravity 하네스로 구동, Gmail·Docs 등과 API 연동으로 예약·조건부 작업 자동화. AI Ultra 전용, 미국 베타. ([공식 소개](https://gemini.google/overview/agent/spark/), [TechCrunch](https://techcrunch.com/2026/05/19/google-introduces-gemini-spark-a-24-7-agentic-assistant-with-gmail-integration/))
- **Gemini API**: Batch API 웹훅, File Search 멀티모달 검색(`gemini-embedding-2`), Managed Agents, Computer Use, TTS 스트리밍 등 에이전트 지향 기능 확충. ([changelog](https://ai.google.dev/gemini-api/docs/changelog))
- **Workspace 통합**: Docs의 "Help me create"(Drive·Gmail·Chat·웹 데이터 기반 초안 생성), "Match writing style" 등 Workspace Intelligence 기반 기능. ([Workspace Updates](https://workspaceupdates.googleblog.com/2026/04/new-gemini-capabilities-in-google-docs-help-you-go-from-blank-page-to-brilliance.html))

## 최근 주요 업데이트 (2026-04 ~ 2026-07)

- **2026-04-21**: Deep Research 에이전트 API 버전(`deep-research-preview-04-2026`, `deep-research-max-preview-04-2026`) 공개 — [changelog](https://ai.google.dev/gemini-api/docs/changelog)
- **2026-04-22**: `gemini-embedding-2` GA — [changelog](https://ai.google.dev/gemini-api/docs/changelog)
- **2026-05-07**: `gemini-3.1-flash-lite` GA — [changelog](https://ai.google.dev/gemini-api/docs/changelog)
- **2026-05-19 (Google I/O 2026)**: `gemini-3.5-flash` GA, Managed Agents 퍼블릭 프리뷰, `antigravity-preview-05-2026` 범용 에이전트 공개 — [changelog](https://ai.google.dev/gemini-api/docs/changelog); Gemini Spark 발표 — [TechCrunch](https://techcrunch.com/2026/05/19/google-introduces-gemini-spark-a-24-7-agentic-assistant-with-gmail-integration/); AI 구독 개편($100 Ultra 티어) — [Google](https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/)
- **2026-05-28**: `gemini-3.1-flash-image`·`gemini-3-pro-image` GA, video-to-image 생성 추가 — [changelog](https://ai.google.dev/gemini-api/docs/changelog)
- **2026-06-01**: Gemini 2.0 계열 모델(`gemini-2.0-flash` 등) 서비스 종료 — [changelog](https://ai.google.dev/gemini-api/docs/changelog)
- **2026-06-18**: Gemini CLI → Antigravity CLI 전환(개인/Pro/Ultra 티어 서비스 중단) — [[2026-06-18-google-antigravity-cli-transition]], [Google Developers Blog](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
- **2026-06-22**: Workspace Sheets에 Gemini 수식 오류 원클릭 수정 배포 시작 — [[2026-06-22-google-gemini-sheets-formula-fix]]
- **2026-06-22**: DeepMind 핵심 연구자 연쇄 이탈(Shazeer→OpenAI, Jumper→Anthropic), Alphabet 주가 7% 급락 — [[2026-06-22-google-deepmind-talent-exodus]]
- **2026-08-11**: Gemini 앱 월간 활성 사용자(MAU) 10억 명 돌파, Google 역사상 가장 빠르게 성장한 제품 — [[2026-08-11-google-gemini-1-billion-users]]
- **2026-06-24**: `gemini-3.5-flash` Computer Use 퍼블릭 프리뷰 — [changelog](https://ai.google.dev/gemini-api/docs/changelog)
- **2026-06-30**: `gemini-omni-flash-preview`(비디오 생성·편집) 공개, `gemini-3.1-flash-lite-image`(Nano Banana Lite) GA, 구형 Veo 모델 종료 — [changelog](https://ai.google.dev/gemini-api/docs/changelog)
- **2026-06-30**: Gemini Spark 업데이트 — macOS 앱 베타(Ultra 전용), Canva·Dropbox·Instacart·OpenTable·Zillow Rentals 연동, 커스텀 MCP 지원 — [[2026-06-30-google-gemini-spark-macos-mcp]], [blog.google](https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/); Gemini 3.5 Live Translate 출시 — [blog.google](https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-june-2026/)
- **2026-07-01**: Gemini 3.5 Pro, 6/30 GA 목표도 넘기며 두 번째 연기 — 7월 중순 GA 유력, 제한 프리뷰 지속 — [[2026-07-01-google-gemini-3-5-pro-rollout-delay]]
- **2026-07-16**: Gemini 3.5 Pro 세 번째 연기 확인 — 코딩 성능 내부 목표 미달, Alphabet 주가 하락 — [[2026-07-01-google-gemini-3-5-pro-rollout-delay]]; NotebookLM → Gemini Notebook 리브랜딩, 코드 실행·크로스플랫폼 동기화 추가 — [[2026-07-16-google-notebooklm-gemini-notebook-rebrand]]
- **2026-07-21**: `gemini-3.6-flash`·`gemini-3.5-flash-lite`·`gemini-3.5-flash-cyber` 3종 GA — Flash 티어 세대교체, Gemini 3.5 Pro는 이번에도 미포함, Gemini 4 사전학습 시작 언급 — [[2026-07-21-google-gemini-3-6-flash-launch]]
- **2026-07-16~26**: Workspace 확장 — Google Vids에 Gemini Omni(텍스트 프롬프트 영상 생성·편집, 개인 아바타) 탑재, Google Docs의 Gemini 지원 언어가 중국어·네덜란드어 등 11개 추가(유료 구독자 대상, 순차 롤아웃). 동시에 차기 **Gemini 4** 관련 티저가 이어지며 "더 큰 베이스 모델이 있어야 프론티어 경쟁이 가능하다"는 관측이 나옴 — [9to5Google](https://9to5google.com/2026/07/26/google-gemini-4-teases/), [Chrome Unboxed](https://chromeunboxed.com/google-docs-is-getting-a-big-gemini-upgrade-with-support-for-11-new-languages/)

- **2026-07-30** — Gemini Robotics 2 공개 — 휴머노이드 전신(발끝~손끝) 조율+다중 로봇 협업 3종 모델 패밀리, 새 로봇 기종 적응에 수 시간 → [[2026-07-31-google-gemini-robotics-2-launch]]

## 활용 포인트

- **학습과정**: 무료 티어 + AI Plus($4.99)로 진입 장벽이 낮고, study notebooks·Deep Research 등 학습 특화 기능이 있어 교육 커리큘럼 실습 도구로 적합. 단, CLI 실습은 Antigravity CLI 기준으로 갱신 필요.
- **기업 도입(AX)**: Workspace Intelligence 통합(Docs/Gmail 컨텍스트 활용)과 Spark의 스케줄·조건 기반 업무 자동화가 기업 워크플로 자동화의 대표 사례. API 측 Managed Agents·Computer Use·MCP 지원으로 에이전트 구축 스택이 빠르게 표준화되는 중.

## 출처

- https://blog.google/products/gemini/gemini-3/
- https://ai.google.dev/gemini-api/docs/changelog
- https://deepmind.google/models/gemini/
- https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/
- https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/
- https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-june-2026/
- https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
- https://gemini.google/overview/agent/spark/
- https://gemini.google/subscriptions/
- https://gemini.google/release-notes/
- https://workspaceupdates.googleblog.com/2026/04/new-gemini-capabilities-in-google-docs-help-you-go-from-blank-page-to-brilliance.html
- https://techcrunch.com/2026/05/19/google-introduces-gemini-spark-a-24-7-agentic-assistant-with-gmail-integration/
- https://www.engadget.com/2176060/the-google-ai-ultra-plan-now-starts-at-100-a-month/
