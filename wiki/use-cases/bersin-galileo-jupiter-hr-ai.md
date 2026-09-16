---
type: use-case
date: 2026-09-15
tools: [Galileo(Josh Bersin Company)]
mechanism: [second-brain, mcp]
domain: hr
task: 25년 이상 축적한 HR·리더십 벤치마킹 데이터를 Microsoft Copilot·Workday·ServiceNow 등 기존 기업용 AI 에이전트에 "주입"해 보상·커리어·관리자 코칭 질의에 답하게 함
outcome: "1,000개 이상 기업이 사용 중이라 주장, 명시 고객사 Keurig-Dr Pepper·Microsoft·Seagate·IATA — 토큰 사용량 기존 대비 1/10로 절감하며 환각 제거 주장"
model: 미확인 (플랫폼 자체 아키텍처 "ARC" 언급, 하부 LLM 미명시)
cost: 미확인
permissions: 미확인
maturity: production
evidence: claimed
importance: medium
uses: [course, ax]
programs: [AI Leader Program (팀장)]
source: https://joshbersin.com/2026/09/hr-intelligence-goes-enterprise-the-galileo-jupiter-release/
---

> **공식**: Galileo(Josh Bersin Company)로 second-brain형 HR 지식 코퍼스를
> mcp 방식 주입을 활용해 Copilot·Workday·ServiceNow 등 기존 AI 에이전트에
> HR 전문성을 이식 → 1,000개 이상 기업 사용 주장, 토큰 1/10·환각 제거 주장

## 무엇을 자동화했나

HR·인재개발 업계 애널리스트 Josh Bersin의 회사가 자사 HR 인텔리전스
플랫폼 "Galileo"의 신규 릴리스 "Jupiter"를 공개했다. 기존에는 Galileo
자체 인터페이스로만 쓰던 것을, 기업이 이미 쓰고 있는 AI 에이전트
(Microsoft Copilot·Workday·ServiceNow 등) **"어디에나" 심는(inject)**
방식으로 전환한 것이 이번 릴리스의 핵심이다. 회사 발표문은 "이제 Galileo는
'어디서나' 돌아간다. 우리의 HR·리더십 맥락·벤치마킹 데이터를 어떤 직원용
AI 시스템에도 주입할 수 있다"고 설명한다.

자동화 대상 업무:
- 보상·커리어 성장·역량 개발에 대한 **직원 질문 응답**
- 채용·팀 관리에 대한 **관리자 코칭**
- 관리 범위(span of control)·임금 비교 등 **조직 지표 벤치마킹**
- 인터뷰 가이드·역량 평가 도구 자동 생성

## 어떻게 구성했나 (아키텍처)

25년 이상 축적된 자체 리서치와 1,700개 이상 업계 사례연구, 직무·급여·
리더십 역량·규제 관행을 다루는 외부 DB를 통합한 지식 코퍼스를 구축하고,
이를 "ARC(Agent Ready Corpus)"라는 신규 아키텍처로 다른 AI 에이전트
플랫폼에 컨텍스트로 주입하는 구조다. 기업이 이미 배포한 Copilot·Workday·
ServiceNow 등의 에이전트가 이 코퍼스를 참조해 HR 관련 질의에 답하게
만드는 방식 — 별도 채팅 인터페이스를 새로 배우게 하는 대신 기존 워크플로
안에 HR 전문성을 "겹쳐 씌우는" 접근이다.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 미확인 (하부 LLM 미명시, 자체 아키텍처 "ARC"만 언급) |
| 비용 | 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | production (다수 고객사 명시) |
| evidence | claimed (벤더 자체 발표, 제3자 검증 없음) |

## 성과와 수치 (벤더 발표, claimed)

- 명시 고객사: **Keurig-Dr Pepper, Microsoft, Seagate, IATA**(국제항공운송협회)
- "**1,000개 이상**의 기업이 사용 중"이라고 주장 (제3자 검증 없음)
- ARC 아키텍처로 **토큰 사용량 기존 대비 1/10**, **환각(hallucination) 제거**를
  주장 (측정 방법 비공개)

## 재현 가이드

- **난이도**: 상 (자체 지식 코퍼스 구축 + 타사 에이전트 플랫폼 연동 — 벤더
  제품을 도입하지 않는 한 조직이 직접 복제하기는 어려움)
  - 준비물: HR 도메인 지식 코퍼스(사내 정책·벤치마크 데이터), 기존 배포된
    직원용 AI 에이전트(Copilot 등), 해당 에이전트에 컨텍스트를 주입할 수
    있는 연동 경로
  - 핵심 단계(벤더 접근법에서 유추):
    1. HR 전문 지식을 별도 코퍼스로 구조화(정책·벤치마크·역량모델)
    2. 이를 하나의 채팅 UI가 아니라 **여러 기존 에이전트 플랫폼에 공통
       주입**하는 방식으로 설계 — 직원의 기존 워크플로를 바꾸지 않음
    3. 토큰 비용·환각률을 모니터링할 수 있는 자체 벤치마크 체계 마련

## 강의·AX 활용 포인트

- **강의**: "회사 전용 지식을 여러 AI 에이전트 플랫폼에 공통으로 얹는"
  구조(second-brain + mcp형 컨텍스트 주입)를 HR·인재개발 도메인 사례로
  가르칠 수 있다. mySUNI AI Leader Program 등 관리자 대상 과정에서
  "AI로 조직 벤치마킹·코칭을 어떻게 확장하는가"의 참고 사례로 적합.
- **AX**: 기업이 사내 HR 데이터를 이미 배포된 AI 에이전트(Copilot 등)에
  얹어 활용하려 할 때 참고할 벤더 사례. 단, 수치가 전부 벤더 자체 발표라
  독립 검증 전까지는 "1,000개 기업 사용" 등을 그대로 인용하지 말고
  claimed임을 명시할 것.

## 출처

- [Josh Bersin — HR Intelligence Goes Enterprise: The Galileo Jupiter Release](https://joshbersin.com/2026/09/hr-intelligence-goes-enterprise-the-galileo-jupiter-release/) (2026-09-15)
