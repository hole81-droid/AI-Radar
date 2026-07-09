---
type: use-case
date: 2026-04-10
tools: [claude-code]
mechanism: [subagents, skills, cron-routines]
domain: dev-automation
task: FE개발팀의 개발 프로세스(코드 생성·컨벤션 검증·문서 생성·코드 분석)를 팀 표준 AI 아키텍처로 통합
outcome: 수치 미공개 — 개인 프롬프트 의존을 벗어난 팀 단위 재현 가능 프로세스 확보 (주장, 시리즈 입문편)
model: 미확인
cost: 미확인
permissions: 미확인
maturity: pilot
evidence: anecdotal
importance: high
uses: [ax, course]
source: https://tech.ktcloud.com/entry/2026-04-ktcloud-claude-ai-architecture-실무-적용
---

# KT Cloud FE개발팀의 Claude Code 팀 단위 도입 — Agent·Skill·Context·Loop 아키텍처

> **공식**: [Claude Code]로 [Agent–Skill–Context–Loop 4요소 아키텍처]를 활용해 [코드 생성·컨벤션 검증·문서 생성·코드 분석의 팀 표준화]를 수행 → [재현 가능한 팀 개발 프로세스 확보 (수치 미공개)]

## 무엇을 자동화했나

KT Cloud FE개발팀(강민호)이 기술블로그에 공개한 팀 단위 도입기 — 국내 대기업의 드문 1차 공개 자료. AI를 실행 엔진으로 두고 맡긴 작업:

- 코드 생성 (컴포넌트 생성 등)
- 규칙 검증 (코드 컨벤션, 디자인 토큰 검증, UI 비교)
- 문서 생성
- 코드 분석

> ⚠️ 이 글은 시리즈 1편(입문편)으로, 아키텍처와 문제 정의가 중심이다. 구체 적용 사례·성과 수치·비용·권한 설계는 후속 연재 예정으로 원문에 없다.

## 어떻게 구성했나 (아키텍처)

개인 프롬프트 방식(`Developer → Prompt → AI → Result`)의 세 가지 구조적 문제 — Context Loss(규칙이 시스템이 아닌 프롬프트에 존재), Non-Deterministic Output(결과 비재현), Knowledge Fragmentation(팀 지식 미축적) — 를 해결하기 위해 AI를 시스템 구성 요소로 재정의:

| 구성 요소 | 역할 | 예시 |
|---------|------|------|
| **Agent** | 작업 실행 주체 · Skill 선택·실행 순서 결정 (Orchestrator) | 코드 리뷰 Agent, UI 분석 Agent, 문서 생성 Agent |
| **Skill** | 재사용 가능한 작업 단위 (기능 모듈) | 코드 분석, 컴포넌트 생성, 디자인 토큰 검증 |
| **Context** | 작업 규칙 — 명확하면 AI가 추론 아닌 규칙 기반으로 동작 | 코드 컨벤션, 디자인 시스템 규칙, 아키텍처 가이드 |
| **Loop** | 일정 간격 반복 실행 (`Scheduler → Agent → Skill → Result`) | 지속 동작하는 자동화 Agent화 |

Prompt Engineering(개인·대화·비재현)과 AI Architecture(조직·Task·재현 가능)를 대비시키며, Claude Code 선택 이유로 "에이전트 분리, 역할 기반 실행, 장기 컨텍스트 관리를 전제로 한 구조"를 든다.

## 벤치마크 데이터

| 항목 | 값 | 근거 |
|------|-----|------|
| 모델 | 미확인 | 원문에 언급 없음 |
| 비용 | 미확인 | 원문에 언급 없음 (후속 연재 예정) |
| 권한 | 미확인 | 원문에 언급 없음 (후속 연재 예정) |
| 성숙도 | pilot — 팀 도입 진행 중인 실무 기록, 정량 검증 전 | 원문 (시리즈 입문편) |

## 성과와 수치

- **정량 수치 없음** — 입문편이라 실측 데이터 미공개. 후속 연재에서 실무 적용 사례를 다룬다고 명시.
- **정성 주장(anecdotal)**: 프로젝트 규칙을 프롬프트가 아닌 Context 저장소에 두어 팀 단위 일관성·재현성을 확보했다는 방향성 제시.

## 재현 가이드

- **난이도**: 중~상 (개인 사용이 아닌 팀 표준 설계가 목적)
- **준비물**: Claude Code, 팀의 명문화된 규칙 문서(코드 컨벤션·디자인 시스템·아키텍처 가이드)
- **핵심 단계**:
  1. 팀이 반복 설명하는 규칙(컨벤션·패턴)을 Context 문서로 명문화해 저장소에 커밋
  2. 반복 작업을 Skill 단위(코드 분석·컴포넌트 생성·검증)로 분해해 정의
  3. 역할별 Agent(리뷰·분석·문서화)를 만들어 Skill 선택과 실행 순서를 위임
  4. 상시 필요한 검증·분석 작업은 Loop(스케줄 반복)로 전환
  5. 개인 프롬프트 노하우를 저장소 자산으로 이관해 팀 공유

## 강의·AX 활용 포인트

- **AX**: 국내 대기업이 "도구 사용법"이 아니라 "업무 절차의 시스템화"로 접근한 1차 근거 — AX 전략 보고에서 'Prompt Engineering vs AI Architecture' 비교표를 그대로 인용할 수 있다. 개인 생산성→조직 표준 전환의 프레임워크 사례.
- **강의**: Agent·Skill·Context·Loop 4요소는 팀 리더 대상 교육에서 "AI 도입 성숙도 모델"로 쓰기 좋은 구조. 단 성과 수치가 없으므로 효과 주장 근거로는 사용하지 말 것 — 후속 연재 추적 필요.

## 출처

- 원문: [KT Cloud 기술블로그 — Claude Code를 선택한 이유와 개발 아키텍처 설계 실무 적용기](https://tech.ktcloud.com/entry/2026-04-ktcloud-claude-ai-architecture-실무-적용) (FE개발팀 강민호, 2026-04-10)
- 로컬 저장본: [[../../raw/2026-07/ktcloud-fe-team-claude-code-adoption]]
