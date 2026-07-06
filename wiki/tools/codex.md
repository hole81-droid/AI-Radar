---
type: tool
date: 2026-07-06
tools: [codex]
importance: high
uses: [course, ax]
source: https://developers.openai.com/codex
---

# Codex

OpenAI의 AI 코딩 에이전트. 코드 작성·리뷰·디버깅·자동화를 CLI, IDE 확장, 데스크톱 앱, 클라우드, ChatGPT 통합 등 여러 접점에서 수행한다.

## 현재 상태 (2026-07 기준 스냅샷)

- **제공 형태**: 데스크톱 앱(macOS/Windows), CLI, IDE 확장, 클라우드/웹, ChatGPT 네이티브 통합, SDK(프로그래매틱 접근)의 6개 표면으로 제공. ([developers.openai.com/codex](https://developers.openai.com/codex))
- **접근 방식**: ChatGPT Free/Go/Plus/Pro/Business/Edu/Enterprise 전 요금제에 번들로 포함되며, 별도 구독 없이 사용 가능. CI 등 공유 환경 자동화는 API Key 방식(사용량 과금)도 지원. ([developers.openai.com/codex/pricing](https://developers.openai.com/codex/pricing))
- **최신 모델**: GPT-5.5가 "대부분의 Codex 작업에 권장"되는 최신 모델(2026-04-23 Codex 제공, 04-24 API 제공). 그 외 GPT-5.4, GPT-5.4 mini 선택 가능. GPT-5.3-Codex-Spark는 Pro 구독자용 실시간 코딩 특화 리서치 프리뷰. GPT-5.3-Codex와 GPT-5.2는 2026-05-26부로 ChatGPT 로그인 사용자 대상 deprecated(API 키 워크플로는 계속 사용 가능). ([changelog](https://developers.openai.com/codex/changelog), [models](https://developers.openai.com/codex/models))
- **범위 확장**: 코딩을 넘어 Computer Use(macOS/Windows 데스크톱 자동화), 브라우저 조작(Chrome 확장), 모바일 원격 제어(Codex Remote)까지 포괄하는 범용 에이전트로 진화 중. ([changelog](https://developers.openai.com/codex/changelog))

## 주요 기능

- **멀티 서레피스 작업**: 로컬(앱/CLI/IDE)과 클라우드 간 스레드 핸드오프, 모바일(ChatGPT 앱)에서 Mac/Windows 호스트 원격 제어. ([changelog](https://developers.openai.com/codex/changelog))
- **Computer Use / Browser Use**: macOS·Windows 데스크톱 앱 자동화, 로컬 개발용 인앱 브라우저, 백그라운드에서 탭 병렬 작업하는 Chrome 확장. ([changelog](https://developers.openai.com/codex/changelog))
- **자동화·스킬**: 스케줄 기반 스레드 자동화, Record & Replay(시연한 워크플로를 스킬로 변환), Goal mode, 플러그인 마켓플레이스. ([changelog](https://developers.openai.com/codex/changelog))
- **개발 워크플로 통합**: GitHub PR 검사·코멘트, 자동 코드 리뷰(auto-review), 멀티 터미널, 아티팩트 뷰어(PDF/스프레드시트 등). ([changelog](https://developers.openai.com/codex/changelog))

## 최근 주요 업데이트 (최근 3개월, 날짜순)

- **2026-04-16** — Codex 앱 26.415 대규모 확장: 인앱 브라우저, macOS Computer Use, 스케줄 자동화, GitHub PR 워크플로, 멀티 윈도우/터미널, Intel Mac 지원. ([changelog](https://developers.openai.com/codex/changelog))
- **2026-04-23** — GPT-5.5 출시, "대부분의 Codex 작업에 권장" 모델로 지정. GPT-5.4 대비 더 지능적이면서 토큰 효율이 크게 개선. ([changelog](https://developers.openai.com/codex/changelog), [openai.com](https://openai.com/index/introducing-gpt-5-5/))
- **2026-05-07** — Chrome 확장 출시: 브라우저를 점유하지 않고 여러 탭에서 백그라운드 병렬 작업. ([changelog](https://developers.openai.com/codex/changelog))
- **2026-05-14** — 모바일 원격 연결 출시: ChatGPT 모바일 앱에서 Codex 앱이 실행 중인 Mac에 연결. ([changelog](https://developers.openai.com/codex/changelog))
- **2026-05-21** — Goal mode GA, Appshots(양쪽 Command 키로 앱 화면을 Codex로 전송), 플러그인 공유. ([changelog](https://developers.openai.com/codex/changelog))
- **2026-05-26** — GPT-5.3-Codex, GPT-5.2 deprecated (ChatGPT 로그인 사용자 대상). ([changelog](https://developers.openai.com/codex/changelog))
- **2026-05-29** — Windows Computer Use 및 Windows 원격 제어 지원. ([changelog](https://developers.openai.com/codex/changelog))
- **2026-06-01** — Amazon Bedrock 통합: AWS 관리 인증·과금으로 Codex 로컬 실행. ([changelog](https://developers.openai.com/codex/changelog))
- **2026-06-02** — Sites 플러그인 출시: 웹사이트/대시보드/웹앱을 만들어 OpenAI 호스팅으로 배포. ([changelog](https://developers.openai.com/codex/changelog))
- **2026-06-09** — Claude Code / Claude Cowork에서의 마이그레이션 플로 추가. ([changelog](https://developers.openai.com/codex/changelog))
- **2026-06-16** — EEA·영국·스위스에 Computer Use, Chrome 확장, Memories 등 지역 롤아웃. ([changelog](https://developers.openai.com/codex/changelog))
- **2026-06-18** — Record & Replay(macOS): 사용자가 시연한 워크플로를 스킬로 변환. ([changelog](https://developers.openai.com/codex/changelog))
- **2026-06-25** — Codex Remote GA: ChatGPT 앱에서 QR 페어링으로 Mac/Windows 호스트를 모바일 제어. ([changelog](https://developers.openai.com/codex/changelog))

## 요금제

- **번들 포함**: ChatGPT 전 요금제(Free $0 ~ Pro $100+/월, Business 연간 결제 시 $20/인/월)에 Codex 포함. ([developers.openai.com/codex/pricing](https://developers.openai.com/codex/pricing))
- **크레딧 시스템**: 2026-04-02부터 메시지 단위가 아닌 API 토큰 사용량 기반 과금으로 전환. 포함 한도 초과 시 크레딧 구매로 연장. 100만 토큰당 크레딧: GPT-5.5 = 125(입력)/750(출력), GPT-5.4 = 62.5/375, GPT-5.4 mini = 18.75/113. 캐시된 입력 토큰은 약 90% 할인. ([pricing](https://developers.openai.com/codex/pricing), [rate card](https://help.openai.com/en/articles/20001106-codex-rate-card))
- **사용 한도**: Plus는 5시간당 GPT-5.5 메시지 약 15~80건, Pro 20x는 300~1,600건 수준. 한도 도달 시 크레딧 구매 또는 소형 모델 전환. ([pricing](https://developers.openai.com/codex/pricing))
- **API Key 플랜**: 표준 API 요금 기반 사용량 과금. CI 등 공유 환경 자동화에 적합(클라우드 기능은 미포함). ([pricing](https://developers.openai.com/codex/pricing))
- **엔터프라이즈**: Codex access token으로 비대화형 로컬 워크플로 지원(2026-05-05), Amazon Bedrock 경유 계정 통제·과금 옵션. ([changelog](https://developers.openai.com/codex/changelog))

## 활용 포인트

- **학습과정**: CLI→IDE→앱→클라우드로 이어지는 표면별 실습 설계가 가능하며, Free 요금제에도 포함되어 수강생 진입 장벽이 낮다. Claude Code 마이그레이션 플로가 있어 타 도구 사용자 대상 비교 실습에도 적합.
- **기업 도입(AX)**: Amazon Bedrock 통합·access token·크레딧 기반 과금으로 거버넌스와 비용 통제가 가능해졌고, Computer Use·자동화·Record & Replay로 코딩 외 업무 자동화까지 도입 범위가 확장되고 있다.

## 출처

- https://developers.openai.com/codex — Codex 개요 (제공 형태, 접근 방식)
- https://developers.openai.com/codex/changelog — 공식 체인지로그 (2026-04 ~ 2026-06 업데이트)
- https://developers.openai.com/codex/models — 모델 목록
- https://developers.openai.com/codex/pricing — 요금제·크레딧·한도
- https://help.openai.com/en/articles/20001106-codex-rate-card — 크레딧 레이트 카드
- https://openai.com/index/introducing-gpt-5-5/ — GPT-5.5 발표
