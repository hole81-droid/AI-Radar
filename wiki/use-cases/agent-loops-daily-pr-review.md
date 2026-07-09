---
type: use-case
date: 2026-06-22
tools: [claude-code, codex]
mechanism: [cron-routines, subagents, skills]
domain: dev-automation
task: 매일 병합 PR 전수 검토 + 주간 스킬 격차 분석·신규 스킬 생성을 무인 루프로 처리
outcome: Firefox 한 달 423건 보안 수정 출시 (동일 패턴 적용 사례, 자체 보고)
model: 미확인
cost: 미확인 (성공 기준이 모호하면 토큰 비용 폭증한다는 경고만 있음)
permissions: 미확인
maturity: production
evidence: claimed
importance: high
uses: [course, ax]
source: https://www.lennysnewsletter.com/p/how-i-ai-how-to-write-ai-agent-loops
---
# 스스로 도는 에이전트 루프 — 일일 PR 검토·주간 스킬 생성 (Brian Grinstead)

> **공식**: Claude Code + Codex로 cron·하트비트·목표 기반 루프와 전담 서브에이전트를 활용해 일일 PR 전수 검토와 주간 스킬 격차 보완을 수행 → Firefox 한 달 423건 보안 수정 (자체 보고)

## 무엇을 자동화했나

Mozilla 엔지니어 Brian Grinstead가 Lenny's Newsletter의 How I AI에서 공개한 레시피.
사람 없이 반복 업무를 처리하는 세 가지 루프:

1. **일일 PR 검토 루프** — 그날 병합된 PR을 전수 확인하고 머지 상태를 모니터링
2. **주간 스킬 루프** — 역량 격차를 식별해 검증용 전담 서브에이전트를 스폰, 신규 스킬을 자동 생성
3. **아침 브리핑** — 캘린더·이메일 확인 후 Slack 요약 (Claude Cowork 기반, 코딩 없는 입문판)

## 어떻게 구성했나 (아키텍처)

- 핵심 명제: "A loop is just a prompt that fires itself" — 루프는 스스로를 다시 발화시키는 프롬프트일 뿐, 특별한 엔지니어링이 아니다.
- 트리거 4유형: **하트비트**(정기 반복) · **cron**(시간 기반) · **웹훅**(이벤트 기반) · **목표 기반 루프**(결과 검증이 성공할 때까지 — 타이머가 아니라 "일이 실제로 끝났을 때" 멈춤).
- PR 하나·스킬 하나마다 **전담 서브에이전트**를 배치해 병렬 처리.
- 설계 원칙: 신입 직원 온보딩하듯 확인 항목·빈도·기대 결과·문제 발생 시 대응을 문서화.
- 오탐 방지: **2단계 검증**(발견 에이전트와 별도의 검증 단계)으로 false positive를 크게 감소.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 — "성공 기준이 모호하면 루프가 무한 반복돼 토큰 비용만 누적" 경고만 확인 |
| 권한 | 미확인 |
| 성숙도 | production (Firefox 실적용) / Claude Code·Codex 예시는 시연 수준 |

## 성과와 수치

- Firefox가 에이전트 루프로 한 달에 **423건 보안 수정** 출시 — 원문 인용, **주장(claimed)** 수준 (외부 검증 없음)
- 버그 재현에 에이전트가 14~20가지 접근을 시도, 한 버그는 14번 만에 성공 — 끈질긴 재시도가 루프의 강점이라는 근거로 제시
- 2단계 검증으로 오탐이 "크게" 감소 — 수치 미확인

## 재현 가이드

- **난이도**: 중
- **준비물**: Claude Code 또는 Codex, cron 또는 하트비트 트리거, 대상 리포지토리
- **핵심 단계**:
  1. 자동화할 업무를 신입 온보딩 문서처럼 작성 — 무엇을 확인하고, 얼마나 자주, 기대 결과는 무엇이며, 문제가 생기면 어떻게 하는지
  2. 종료 조건을 시간이 아닌 **"완료/막힘"** 목표 기준으로 정의 (모호하면 토큰만 소모)
  3. 검토 대상(PR·스킬) 하나당 서브에이전트 하나를 배치해 병렬화
  4. 발견과 검증을 분리한 2단계 검증으로 오탐 억제
  5. cron/하트비트/웹훅 중 업무 성격에 맞는 트리거 연결

## 강의·AX 활용 포인트

- "목표(성공/실패 조건) + 스케줄 + 비용 한도"라는 에이전트 자동화 공통 패턴의 대표 교보재 — 도구별 사용법보다 이 패턴 자체를 커리큘럼화할 것.
- 비개발 부서용 진입로로 Claude Cowork 아침 브리핑이 같은 글에서 제시됨 — 개발/비개발 트랙을 한 사례로 묶어 설명 가능.
- AX 관점: Firefox처럼 보안·품질 유지보수 업무가 무인 루프의 1차 적용처 — ROI 논거로 423건 수치 인용 시 "자체 보고"임을 명시할 것.

## 출처

- [How I AI: How to write AI agent loops — Lenny's Newsletter (2026-06-22)](https://www.lennysnewsletter.com/p/how-i-ai-how-to-write-ai-agent-loops)
- 원문 사본: [[../../raw/2026-07/agent-loops-daily-pr-review]]
