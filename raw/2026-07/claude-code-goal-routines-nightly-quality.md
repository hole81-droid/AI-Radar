# Claude Code /goal + Routines + Cron: Autonomous Scheduled Workflows (MindStudio)

- **원문 URL**: https://www.mindstudio.ai/blog/claude-code-goal-routines-autonomous-scheduled-workflows
- **수집일**: 2026-07-09 (WebFetch 마크다운 변환·요약본)

---

## 자동화한 업무 — 야간 코드 품질 점검

- JavaScript/TypeScript 파일 전체의 TODO·FIXME 주석 개수 집계
- 50줄 초과 함수 탐지
- 잔존 console.log 문 탐지
- `reports/quality-YYYY-MM-DD.md`에 타임스탬프 마크다운 보고서 생성

## 아키텍처 구성요소

### Goal 커맨드 파일 (.claude/commands/goal.md)

재사용 가능한 목표 구조 정의:

> "You are completing a bounded autonomous task. Goal: $ARGUMENTS"

기계가 읽을 수 있는 종료 마커:

> "When complete, output exactly: GOAL_COMPLETE: [one-line summary]"
> "If you cannot complete it, output exactly: GOAL_FAILED: [reason]"

### Routine 커맨드 파일 (.claude/commands/*.md)

반복 가능한 단계와 출력 형식을 정의한 작업별 지시문.

### CLAUDE.md

세션 시작 시 자동 로드되는 프로젝트 컨텍스트 — 상시 지시사항·안전 제약 포함.

## 실행 방법

비대화형 실행 (`--print` 플래그):

```
claude --print "/nightly-quality"
```

권한 사전 승인 (`--allowedTools`):

```
claude --print --allowedTools "Bash,Read,Write" "/nightly-quality"
```

도구를 제한하면 무인 실행을 막는 런타임 권한 프롬프트가 사라진다.

## Cron 설정

```
30 1 * * * cd /home/user/myproject && claude --print "/nightly-quality" >> /var/log/claude-nightly/run.log 2>&1
```

- cron은 `$PATH`가 최소이므로 `claude` 바이너리의 전체 경로 사용
- `.claude/`와 `CLAUDE.md`를 찾도록 프로젝트 디렉토리로 이동
- stdout·stderr 모두 리다이렉트

## 타임아웃 보호

```
timeout 300 claude --print "/nightly-quality"
```

5분 후 강제 종료 — 폭주 프로세스 방지.

## 실패 감지

```
if grep -q "GOAL_FAILED" "$LOG_FILE"; then
  # 이메일 또는 Slack 웹훅으로 알림
fi
```

## 모델·비용

원문은 사용 Claude 모델 버전·요금제·비용 실측치를 명시하지 않음. Anthropic 대시보드의 "usage limits" 설정만 언급.

## 재현 단계

1. `.claude/commands/goal.md` 생성 (목표 + 완료 마커)
2. `.claude/commands/nightly-quality.md` 생성 (작업 단계 + 출력 형식)
3. `CLAUDE.md` 생성 (프로젝트 컨텍스트 + 안전 규칙)
4. 로깅·실패 감지 포함 셸 스크립트 래퍼 작성
5. 바이너리 전체 경로 + 프로젝트 `cd` 포함 crontab 등록
6. 수동 테스트: `claude --print --allowedTools "Bash,Read,Write" "/nightly-quality"`
7. 출력에 `GOAL_COMPLETE:` 또는 `GOAL_FAILED:` 마커 확인
8. cron 배포 후 로그 모니터링
