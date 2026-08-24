---
type: use-case
date: 2026-07-10
tools: [chatgpt]
mechanism: [browser-agent, cron-routines]
domain: personal-productivity
task: ChatGPT Work으로 문서·슬라이드·예산분석·영업자료 등 사무 업무 자율 처리
outcome: 단일 프롬프트로 프로젝트를 쪼개 몇 시간에 걸쳐 무인 실행 (구체 수치는 미공개, 주장)
model: GPT-5.6 Sol/Terra/Luna 기반
cost: 미확인 (Plus 이상 구독 필요, 구체 요금 원문 미기재)
permissions: 사용자가 진행 상황 모니터링·질문 응답·경로 변경·주요 작업 승인 가능 (세부 권한 체계 미공개)
maturity: production
evidence: claimed
importance: high
uses: [course, ax]
source: https://gigazine.net/gsc_news/en/20260710-openai-chatgpt-work/
---

# OpenAI ChatGPT Work 출시 — 사무 업무 자율 처리 에이전트

> **공식**: ChatGPT Work로 Computer Use·Scheduled Tasks·플러그인 연동을 활용해 문서·슬라이드·예산분석·영업자료 준비 등 사무 업무를 수행 → 단일 프롬프트로 몇 시간짜리 프로젝트를 무인 실행 (수치 미공개, 벤더 발표)

## 무엇을 자동화했나

OpenAI가 2026년 7월 10일 "ChatGPT Work"를 출시했다. GPT-5.6 Sol/Terra/Luna 기반으로,
Slack·Microsoft Teams·Google Drive·SharePoint·이메일·캘린더·CRM·프로젝트 관리 도구 등을
플러그인으로 연결해 사무 업무를 대신 처리한다. 원문에 명시된 자동화 업무: 월말 예산
편차 분석(analyzing budget variances), 여러 소스 문서를 취합한 마케팅 캠페인 제안서
작성, 영업 회의 자료 준비.

## 어떻게 구성했나 (아키텍처)

- **Scheduled Tasks**: Slack·Teams 메시지를 백그라운드에서 모니터링하며 결과를 문서에
  자동 반영하는 예약 작업 체계.
- **Computer Use**: 데스크톱 클릭·타이핑을 시뮬레이션해 GUI 기반 업무(문서·슬라이드·
  스프레드시트·웹앱 생성)를 직접 조작.
- **플러그인 디렉터리**: Slack·Teams·Google Drive·SharePoint·이메일·캘린더·CRM·프로젝트
  관리 도구 등과 연결되는 통합 계층.
- **감독 인터페이스**: 사용자가 작업 진행 상황을 모니터링하고, ChatGPT의 질문에 답하고,
  진행 중 방향을 바꾸고, 주요 작업(important operations)을 승인할 수 있는 구조.
- 데스크톱 앱은 Codex(코드 에이전트)를 ChatGPT에 직접 통합해 대화·업무·소프트웨어
  개발을 하나의 앱으로 묶었다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | GPT-5.6 Sol/Terra/Luna 기반 |
| 비용 | 미확인 (원문에 요금 수치 없음, Plus 이상 구독 전제) |
| 권한 | 미확인 — 모니터링·질문응답·경로 변경·주요 작업 승인이 가능하다는 서술만 있고 세부 권한 모델은 불명 |
| 성숙도 | production (Pro/Enterprise/Edu 우선 정식 출시, Plus·Business 순차 확대) |

## 성과와 수치

- **주장(claimed)**: "단일 프롬프트로 프로젝트를 쪼개 몇 시간에 걸쳐 무인 실행"한다는
  벤더 서술만 있으며, 처리 시간·비용 절감 등 구체 실측 수치는 원문에 없다.
- 독립 검증 수치나 3자 벤치마크는 확인되지 않았다.

> **08-24 갱신 — 실제 채택률·비용 데이터(measured)**: TechCrunch 보도(2026-08-24)에
> 따르면 출시 한 달여 시점에 **OpenAI 내부 직원의 98%가 사용** 중이지만, 외부 조직
> 구독자는 17%, 개인 구독자는 1% 미만에 그친다 — 벤더 자체 서술("무인 실행")과
> 실제 외부 확산 사이에 큰 간극이 있음을 보여주는 실측 채택 데이터다. 비용 사례로는
> 한 이용자가 4일간 가벼운("casual") 사용만으로 약 8,000만 토큰·$65를 소비한 사례가
> 보도됨. OpenAI 내부에서도 "소프트웨어 개발자만 대상으로는 수익을 정당화하기
> 어렵다"는 우려가 나온다고 전해진다. [출처](https://techcrunch.com/2026/08/24/openai-is-building-an-ai-agent-for-everything-will-everyone-use-them/)

## 재현 가이드

- **난이도**: 중 (플랫폼 자체 기능이라 별도 구축은 불필요하나, 업무별 플러그인 연동·
  승인 정책 설계가 필요)
- **준비물**: ChatGPT Pro/Enterprise/Edu(또는 순차 확대되는 Plus/Business) 계정, 연동할
  사내 도구 계정(Slack·Teams·Drive·SharePoint·CRM 등)
- **핵심 단계**:
  1. 필요한 플러그인(메시징·문서·CRM 등)을 연결
  2. 반복적으로 발생하는 사무 업무(예산 분석, 제안서 작성)를 하나의 프롬프트로 정의
  3. Scheduled Tasks로 백그라운드 모니터링이 필요한 업무(메시지 추적 등)를 등록
  4. 주요 작업 단계에는 사용자 승인 체크포인트를 두어 무인 실행 리스크를 관리

## 강의·AX 활용 포인트

- Claude Code/Cowork와 정면 경쟁하는 "비개발자용 사무 자율 에이전트" 사례로, 벤더 간
  경쟁 구도 비교 강의 소재로 적합.
- AX 관점에서는 Computer Use(GUI 조작) + Scheduled Tasks(백그라운드 모니터링) 조합이
  기존 RPA와 어떻게 다른지 설명하는 근거로 쓸 수 있다.
- 실측 수치가 없다는 점을 강의·보고서에서 반드시 명시하고, 벤더 주장과 실측 사례
  (예: [[ploy-opus-to-gpt-5-6-migration]])를 구분해 다뤄야 한다.

## 출처

- [Gigazine — OpenAI launches "ChatGPT Work"](https://gigazine.net/gsc_news/en/20260710-openai-chatgpt-work/)
- [TechCrunch — OpenAI is building an AI agent for everything. Will everyone use them? (2026-08-24)](https://techcrunch.com/2026/08/24/openai-is-building-an-ai-agent-for-everything-will-everyone-use-them/)
