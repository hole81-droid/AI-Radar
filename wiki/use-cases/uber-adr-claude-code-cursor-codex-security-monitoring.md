---
type: use-case
date: 2026-08-06
tools: [claude-code, codex]
mechanism: [mcp, hooks]
domain: ops
task: Claude Code·Cursor·Codex 등 사내 사용 코딩 에이전트의 위험 명령(자격증명 유출·시스템 파괴 등)을 실시간 탐지·차단
outcome: Uber 프로덕션 배포 확인, MLSys 2026 논문 게재 — 벤치마크 300+ 태스크·133개 MCP 서버·17종 공격 기법 커버
model: 미확인 (관측 센서는 모델 비종속, 위협 판정에 별도 LLM 추론 사용 — 구체 모델명 미공개)
cost: 미확인
permissions: 관측(observability)+탐지(threat detection)+차단(prevention) 3단계, 고recall 1차 분류 후 의심 세션만 심층 에이전틱 추론으로 재검토하는 2단 구조
maturity: production
evidence: measured
importance: high
uses: [course, ax]
source: https://github.com/uber/ADR
---

# Uber, Claude Code·Cursor·Codex를 노리는 공격을 실시간 탐지하는 오픈소스 "ADR" 공개

> **공식**: Uber가 자체 개발한 ADR(Agentic AI Detection and Response, mcp+hooks 기반
> 관측 센서)로 Claude Code·Cursor·Codex 등 코딩 에이전트의 위험 명령을 실시간 탐지·차단
> → 프로덕션 배포 확인, MLSys 2026 논문 게재(측정)

## 무엇을 자동화했나

Uber가 사내에서 널리 쓰이는 AI 코딩 에이전트(Claude Code·Cursor·Codex)와 사내 자동화·
고객 응대 에이전트를 대상으로, 사람이 매 명령을 일일이 검토하지 않아도 되는 **에이전트
보안 관측·탐지·차단 플랫폼 ADR**을 만들어 오픈소스로 공개했다(2026-08-06 HN 화제,
관측 센서·벤치마크·탐지기 구성요소 공개, 사전 배포용 레드팀 엔진 ADR Explorer는 비공개
유지).

## 어떻게 구성했나 (아키텍처)

- **4대 기능**: 관측(agent activity 모니터링) → 벤치마킹(보안 테스트) → 위협 탐지
  (위험 행동 식별) → 차단(불안전 행동 실행 전 정지)의 파이프라인.
- **텔레메트리 수집**: Claude Code·Cursor·Codex를 포함한 코딩 어시스턴트와 사내
  자동화·고객지원 에이전트의 활동을 macOS·Linux·Windows 전 환경에서 수집.
- **2단 탐지 구조**: 1차로 고recall 트리아지(빠르게 대량 필터링) → 의심스러운 세션만
  더 깊은 에이전틱 추론으로 재검토하는 계층형 구조로, 오탐·연산 비용을 동시에 관리.
- **연구 검증**: 300개 이상의 태스크, 133개 MCP 서버, 17종 에이전트 공격 기법을
  포괄하는 벤치마크 스위트를 구축해 MLSys 2026에 논문으로 게재.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (관측 센서 자체는 모델 비종속, 위협 판정 단계의 LLM 모델명은 원문 미공개) |
| 비용 | 미확인 |
| 권한 | 관측→탐지→차단 3단계, 2단 트리아지 구조(고recall 1차 필터 + 의심 세션 심층 재검토) |
| 성숙도 | production — "Uber 프로덕션에 배포됨"이라고 저장소 문서에 명시 |

## 성과와 수치

- **배포 상태(측정/공식 확인)**: Uber 프로덕션 환경에 실제 배포됨.
- **연구 검증(측정)**: MLSys 2026 학회 논문 게재. 벤치마크 스위트 300개+ 태스크, 133개
  MCP 서버, 17종 공격 기법 커버 — 구체적인 탐지율·오탐률 등 세부 성능 수치는 저장소
  문서에 공개되지 않음(공식 확인만 가능한 구간).
- **오픈소스 범위**: 관측 센서·벤치마크 스위트·탐지기(detector)는 공개, 배포 전 레드팀용
  ADR Explorer 엔진은 비공개 유지.

## 재현 가이드

- **난이도**: 상 (엔터프라이즈급 보안 파이프라인, 대규모 조직 배포 전제)
- **준비물**: Claude Code·Cursor·Codex 등 사내 사용 중인 코딩 에이전트, macOS/Linux/
  Windows 텔레메트리 수집 인프라
- **핵심 단계**:
  1. GitHub(uber/ADR)에서 관측 센서를 설치해 사내 코딩 에이전트 활동 텔레메트리 수집을
     시작한다.
  2. 공개된 벤치마크 스위트(300+ 태스크·17종 공격 기법)로 자사 환경에서 기존 승인
     프로세스의 탐지 공백을 먼저 측정한다.
  3. 2단 트리아지 구조(고recall 1차 필터 + 심층 재검토)를 자사 위험 허용도에 맞게
     튜닝한다.
  4. 사전 배포 레드팀이 필요하면 별도로 자체 구축(ADR Explorer 상당 기능은 비공개).

## 강의·AX 활용 포인트

- **강의**: "코딩 에이전트를 도입하면 그 자체를 감시하는 보안 계층도 함께 필요하다"는
  것을 보여주는 실전 사례 — 이 위키의 [[mozilla-claude-mythos-firefox-vulnerability-detection]]
  (에이전트로 취약점을 찾는 사례)과 대비해 "에이전트가 만드는 리스크 vs 에이전트로
  막는 리스크" 두 축을 함께 가르칠 수 있다.
- **AX**: 코딩 에이전트를 대규모 조직에 확산할 때, 대기업(Uber)이 이미 별도 관측·탐지·
  차단 계층을 프로덕션에 배포했다는 것은 "생산성 도구 도입"과 "보안 거버넌스 구축"이
  동시에 진행돼야 함을 시사한다. 같은 주 화제가 된 40,000회 게임 시뮬레이션 연구
  ("사람이 AI 에이전트 명령 승인 시 위협의 1/3을 놓친다", [[2026-08-07]] 뉴스레터 참고)와
  함께 보면, "사람이 매 명령을 검토하는 모델" 자체의 한계를 뒷받침하는 근거로 쓸 수 있다.

## 출처

- [GitHub — uber/ADR: Agentic AI Detection and Response](https://github.com/uber/ADR)
- [Hacker News 토론](https://news.ycombinator.com/item?id=49197869)
