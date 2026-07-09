---
type: use-case
date: 2026-07-08
tools: [claude-code]
mechanism: [cron-routines, cli-pipeline]
domain: dev-automation
task: 야간 코드 품질 점검(TODO/FIXME 집계·50줄 초과 함수·잔존 console.log 탐지) 후 마크다운 보고서 자동 생성
outcome: 사람 개입 없는 정기 무인 실행 체계 (성과 수치 미확인)
model: 미확인
cost: 미확인 (Anthropic 대시보드의 usage limits 설정만 언급)
permissions: --allowedTools "Bash,Read,Write"로 사전 승인 + timeout 300초 강제 종료
maturity: demo
evidence: anecdotal
importance: high
uses: [course, ax]
source: https://www.mindstudio.ai/blog/claude-code-goal-routines-autonomous-scheduled-workflows
---
# Claude Code /goal + routines + cron — 자는 동안 도는 야간 품질 점검

> **공식**: Claude Code로 /goal 커맨드 + 종료 마커 + cron을 활용해 야간 코드 품질 점검·보고서 작성을 수행 → 승인 프롬프트 없는 완전 무인 정기 실행

## 무엇을 자동화했나

MindStudio 블로그가 공개한 무인 자동화 레시피. 매일 새벽 사람이 자는 동안:

- JS/TS 파일 전체의 TODO·FIXME 주석 개수 집계
- 50줄 초과 함수 탐지
- 잔존 console.log 문 탐지
- `reports/quality-YYYY-MM-DD.md`에 날짜 스탬프 보고서 자동 생성

같은 틀(goal 파일 + routine 파일 + cron)로 다른 정기 보고 업무에도 그대로 응용 가능한 범용 패턴.

## 어떻게 구성했나 (아키텍처)

- **`.claude/commands/goal.md`** — 재사용 목표 구조: "You are completing a bounded autonomous task. Goal: $ARGUMENTS". 종료는 기계가 grep할 수 있는 마커로 표준화: `GOAL_COMPLETE: [요약]` / `GOAL_FAILED: [사유]`
- **`.claude/commands/nightly-quality.md`** — 작업 단계와 출력 형식을 정의한 routine 파일
- **`CLAUDE.md`** — 상시 지시·안전 제약 (세션 시작 시 자동 로드)
- **비대화형 실행**: `claude --print --allowedTools "Bash,Read,Write" "/nightly-quality"` — 도구를 사전 승인해 무인 실행을 막는 권한 팝업 제거
- **cron**: `30 1 * * * cd /home/user/myproject && claude --print "/nightly-quality" >> …/run.log 2>&1` (바이너리 전체 경로 필수 — cron의 $PATH는 최소)
- **폭주 방지**: `timeout 300 claude --print …` — 5분 후 강제 종료
- **실패 감지**: 로그에서 `grep -q "GOAL_FAILED"` 히트 시 이메일/Slack 웹훅 알림

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 — usage limits 설정 권고만 있음 |
| 권한 | `--allowedTools "Bash,Read,Write"` 사전 승인 + `timeout 300` (원문 확인) |
| 성숙도 | demo (튜토리얼 레시피, 운영 실적 미제시) |

## 성과와 수치

- 원문은 절감 시간·비용 등 실측 수치를 제시하지 않는다 — 성과는 "승인 프롬프트 없이 정해진 시각에 무인 완주"라는 체계 자체 (일화적).
- 핵심 노하우 2가지가 사실상의 성과 조건: ① 권한 팝업이 자동화 실패의 최대 원인 → `--allowedTools` 사전 승인, ② `timeout`으로 폭주 비용 차단.

## 재현 가이드

- **난이도**: 하 (파일 3개 + crontab 1줄)
- **준비물**: Claude Code CLI, cron이 도는 머신, 대상 프로젝트
- **핵심 단계**:
  1. `.claude/commands/goal.md`에 목표 구조 + `GOAL_COMPLETE`/`GOAL_FAILED` 종료 마커 정의
  2. `.claude/commands/nightly-quality.md`에 점검 단계·보고서 형식 작성
  3. 수동 테스트: `claude --print --allowedTools "Bash,Read,Write" "/nightly-quality"` → 마커 출력 확인
  4. `timeout`·로그 리다이렉트·실패 grep을 포함한 셸 래퍼로 감싸 crontab 등록
  5. 로그 모니터링, `GOAL_FAILED` 시 알림 연결

## 강의·AX 활용 포인트

- "권한 사전 승인 + 종료 마커 + 타임아웃" — 무인 에이전트의 3대 안전장치를 가장 짧은 코드로 가르칠 수 있는 실습 교재. 실습 소요 30분 이내로 구성 가능.
- 코드 품질 점검은 예시일 뿐 — 수강생 각자의 정기 보고 업무(주간 리포트, 데이터 점검)로 routine 파일만 바꾸는 응용 과제에 적합.
- AX 관점: 야간 배치라는 익숙한 IT 운영 개념에 LLM을 얹는 구조라 IT 부서 설득이 쉬운 진입 사례.

## 출처

- [Claude Code /goal + Routines + Cron — MindStudio Blog](https://www.mindstudio.ai/blog/claude-code-goal-routines-autonomous-scheduled-workflows)
- 원문 사본: [[../../raw/2026-07/claude-code-goal-routines-nightly-quality]]
