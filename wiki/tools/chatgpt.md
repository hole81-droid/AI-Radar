---
type: tool
date: 2026-07-06
tools: [chatgpt]
importance: high
uses: [course, ax]
source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
---

# ChatGPT

OpenAI의 대화형 AI 서비스. 웹·모바일·데스크톱에서 GPT-5.5 계열 모델을 기반으로 대화, 에이전트 작업, 검색, 코딩(Codex), 음성, 앱 연동을 제공한다.

## 현재 상태 (2026-07 기준 스냅샷)

- **기본 모델**: GPT-5.5 Instant — 2026-05-05부터 전 요금제(무료 포함) 기본 모델 ([TechCrunch](https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/))
- **플래그십**: GPT-5.5 Thinking(Plus 이상), GPT-5.5 Pro(Pro/Business/Enterprise) — 2026-04-23 출시 ([OpenAI](https://openai.com/index/introducing-gpt-5-5/))
- **차기 모델**: GPT-5.6 (Sol·Terra·Luna) 제한 프리뷰 시작(2026-06-26). 현재는 API·Codex의 일부 파트너 대상, ChatGPT 확대 예정 ([OpenAI](https://openai.com/index/previewing-gpt-5-6-sol/))
- **모델 선택 UI**: 2026-06-10 개편으로 Instant / Medium / High / Extra High(Pro 전용) 단계형으로 단순화 ([Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- **모델 정리**: GPT-4o·GPT-4.1·o4-mini·초기 GPT-5는 2026-02-13 퇴역, GPT-5.2는 2026-06-12, GPT-4.5는 2026-06-26 퇴역 — 기존 대화는 GPT-5.5로 이어짐 ([Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes), [Wikipedia](https://en.wikipedia.org/wiki/GPT-5.5))

### 요금제 ([chatgpt.com/pricing](https://chatgpt.com/pricing/))

| 플랜 | 가격 | 비고 |
|---|---|---|
| Free | $0 | GPT-5.5 Instant 기본 제공. 영국 등 일부 지역에서 광고 도입 시작(2026-06) |
| Go | $8/월 | 경량 유료 플랜 (2025-08 인도 출시 후 글로벌 확대) |
| Plus | $20/월 | GPT-5.5 Thinking, 개인 금융, 메모리 확장 등 |
| Pro | $200/월 (중간 단계 $100 플랜은 2026-04-09 신설, [비공식 정리](https://techjacksolutions.com/ai-tools/chatgpt/chatgpt-pricing/)) | GPT-5.5 Pro, Deep Research 대폭 확대 |
| Business | $20/시트/월(연간, 2026-04-02 $25→$20 인하, [비공식 정리](https://techjacksolutions.com/ai-tools/chatgpt/chatgpt-pricing/)) | 워크스페이스·커넥터 관리 |
| Enterprise | 협의 | SSO, 관리 기능, Connector Registry |

## 주요 기능

- **에이전트**: ChatGPT agent(가상 컴퓨터에서 조사→실행까지 수행, [OpenAI](https://openai.com/index/introducing-chatgpt-agent/)). 워크스페이스 에이전트는 2026-07-06부터 크레딧 기반 과금 전환 ([Business Release Notes](https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes))
- **Apps(구 커넥터)**: 2025-12-17 커넥터가 "Apps"로 통합·개편. 인터랙티브 UI 앱 + 데이터 참조 커넥터(Google Drive, Slack, SharePoint 등), MCP 기반 개발자 모드 지원 ([Help Center](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt))
- **메모리**: 과거 대화 참조, 메모리 요약 편집·삭제(2026-06-12), Plus/Pro 용량 2배 확대(2026-06-04) ([Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- **검색·쇼핑**: 2026-03-24 쇼핑 개편 — 앱 내 Instant Checkout을 축소하고 제품 탐색·비교(shopping research) 중심으로 전환, 결제는 Apps 내 연결 서비스에서 처리 ([CNBC](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html), [OpenAI](https://openai.com/index/chatgpt-shopping-research/))
- **음성**: 신규 speech-to-text 받아쓰기 모델(2026-06-26) — 다국어 혼용·억양 인식 정확도 개선 ([Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- **Codex**: ChatGPT 요금제에 포함된 코딩 에이전트. Codex Remote GA(2026-06-25)로 폰에서 원격 Mac/Windows 작업 제어 ([Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))

## 최근 주요 업데이트 (날짜순)

- **2026-04-23** — GPT-5.5 (Thinking·Pro) 출시. 코딩, 리서치, 문서·스프레드시트 작성, 소프트웨어 조작 등 "컴퓨터로 일하는 방식"을 겨냥한 플래그십 ([OpenAI](https://openai.com/index/introducing-gpt-5-5/))
- **2026-05-05** — GPT-5.5 Instant가 무료 포함 전체 사용자 기본 모델로 배포 ([TechCrunch](https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/))
- **2026-06-04** — Lockdown Mode(프롬프트 인젝션 대비 웹 접근 제한), Plus/Pro 메모리 용량 2배, Free/Go 광고 영국 롤아웃 시작 ([Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- **2026-06-08** — 인터랙티브 차트(막대·선·파이·산점도), 채팅에서 직접 이메일 발송 ([Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- **2026-06-10** — 모델 피커 단순화: Instant / Medium / High / Extra High ([Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- **2026-06-12** — GPT-5.2 퇴역·GPT-5.5로 이관, 메모리 요약 편집·삭제 기능 ([Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- **2026-06-17** — Scheduled 페이지 신설(리마인더·반복 작업 관리), Pro의 Pulse 기능 종료 ([Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- **2026-06-25** — Codex Remote 전 요금제 GA ([Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- **2026-06-26** — GPT-5.6 (Sol·Terra·Luna) 제한 프리뷰 시작 / GPT-4.5 퇴역 / 개인 금융 대시보드 Plus(미국) 확대 / 신규 받아쓰기 STT 모델 전 플랜 배포 ([OpenAI](https://openai.com/index/previewing-gpt-5-6-sol/), [Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes))
- **2026-07-06** — 워크스페이스 에이전트 무료 기간 종료, 크레딧 기반 과금 시작 ([Business Release Notes](https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes))

## 활용 포인트

- **학습과정(course)**: 모델 피커가 4단계(Instant~Extra High)로 단순화되어 "언제 어떤 강도의 추론을 쓰는가" 중심으로 커리큘럼을 재구성하기 좋다. 무료 플랜에서도 GPT-5.5 Instant 실습이 가능하다.
- **기업 도입(ax)**: Business $20/시트 인하 + Connector Registry·Lockdown Mode 등 관리·보안 기능 강화로 도입 장벽이 낮아졌다. 단, 워크스페이스 에이전트가 2026-07-06부터 크레딧 과금으로 전환되어 에이전트 사용량 기반 비용 산정이 필요하다.

## 출처

- [ChatGPT Release Notes (OpenAI Help Center)](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) · [미러(Releasebot)](https://releasebot.io/updates/openai/chatgpt)
- [Model Release Notes (OpenAI Help Center)](https://help.openai.com/en/articles/9624314-model-release-notes)
- [Introducing GPT-5.5 (OpenAI)](https://openai.com/index/introducing-gpt-5-5/) · [Previewing GPT-5.6 Sol (OpenAI)](https://openai.com/index/previewing-gpt-5-6-sol/)
- [ChatGPT Pricing (OpenAI)](https://chatgpt.com/pricing/) · [ChatGPT Business Release Notes](https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes)
- [Apps in ChatGPT (Help Center)](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt) · [ChatGPT agent (OpenAI)](https://openai.com/index/introducing-chatgpt-agent/)
- [TechCrunch: GPT-5.5 Instant](https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/) · [CNBC: 쇼핑 개편](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html)
