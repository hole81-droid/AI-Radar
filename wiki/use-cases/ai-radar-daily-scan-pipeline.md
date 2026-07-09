---
type: use-case
date: 2026-07-09
tools: [claude-code]
mechanism: [cron-routines, subagents, cli-pipeline]
domain: research
task: 매일 아침 7시 AI 트렌드 뉴스(공식 블로그·Reddit·HN·YouTube RSS)를 무인 스캔해 편집 기준에 맞는 한국어 데일리 뉴스레터를 자동 작성·커밋·배포·알림
outcome: 사람 개입 0으로 매일 뉴스레터 1건 발행 (관측 회당 약 6.5만 토큰·5~9분, 비용 회당 약 $0.15~0.30)
model: claude-sonnet-5 (effort low)
cost: 회당 약 $0.15~0.30 [측정 토큰 기반 산정] · 월 약 $5~9
permissions: 프로젝트 settings.local.json 화이트리스트 23종 (WebSearch/WebFetch/curl·git·읽기전용 Bash) — bypass 아님
maturity: production
evidence: measured
importance: high
uses: [course, ax]
source: /Users/sh/Desktop/AI Radar/.claude/scheduled-tasks (본 저장소 자체)
---
# AI Radar 데일리 스캔 파이프라인 — 이 위키를 매일 채우는 자기참조 에이전트

> **공식**: Claude Code로 cron 루틴(매일 7시)+서브에이전트(model sonnet, effort low)를 활용해 다중 소스 AI 뉴스 스캔·뉴스레터 작성을 수행 → 사람 개입 0으로 매일 1건 발행, 회당 약 $0.15~0.30·5~9분 (실측 토큰 기반)

이 케이스는 **독자가 소유·검증 가능한 유일한 사례**다. 외부 사례와 달리 모델·권한·비용을
저장소에서 직접 확인할 수 있어, 강의 실습·AX 비용 산정의 기준점(reference)으로 쓰기 좋다.

## 무엇을 자동화했나

매일 오전 7시, 스케줄된 Claude Code 작업이 사람 개입 없이 다음을 수행한다:
1. `sources.md`의 소스 스캔 — 공식 블로그(Anthropic·OpenAI·Google), old.reddit RSS, HN Algolia API, YouTube 채널 RSS
2. 편집 기준(비개발자 눈높이, 에이전트·자동화 최우선)에 맞춰 한국어 뉴스레터 작성
3. `git commit && push` → Vercel 재배포로 팀 웹사이트 자동 갱신
4. 완료 푸시 알림(헤드라인 + 뉴스레터 링크) 발송

## 어떻게 구성했나 (아키텍처)

- **오케스트레이션**: 메인 작업이 직접 스캔하지 않고 **서브에이전트 1개(model sonnet, effort low)**
  에 위임 → 토큰 절약. 메인은 완료 확인·알림만 담당.
- **cron-routines**: Claude Code 스케줄 작업(`0 7 * * *`). 앱이 꺼져 있으면 다음 실행 시 밀려 실행.
- **토큰 효율 설계**: RSS/API 우선(curl 1회), 기사 원문은 ★최우선 항목만 정독, WebSearch 5~8회·
  WebFetch 15회 상한. RSS URL은 sources.md에 캐시해 재사용 → 회를 거듭할수록 저렴.
- **무인 완주**: settings.local.json 화이트리스트로 승인 프롬프트 없이 완주. bypass 모드가 아니라
  **필요 도구만 명시 허용**한 것이 핵심 — 재현 시 그대로 복사 가능.

## 벤치마크 데이터

| 항목 | 값 | 근거 |
|---|---|---|
| 모델 | claude-sonnet-5, effort low | 스케줄 작업 설정 (정확) |
| 토큰/회 | 약 6.0만~8.3만 (관측 6회) | 본 세션 동종 sonnet 리서치 서브에이전트 실측 |
| 비용/회 | 약 $0.15~0.30 | 위 토큰 × Sonnet 5 프로모션가 $2/$10(입/출, 1M) [산정] |
| 비용/월 | 약 $5~9 | 일 1회 × 30일 |
| 소요/회 | 약 5~9분 | 관측 duration 276~532초 |
| 권한 | 화이트리스트 23종 (bypass 아님) | settings.local.json (정확) |
| 성숙도 | production (매일 실제 실행 중) | 스케줄 등록·log.md 실행 기록 |

> ⚠️ 비용은 **실측 토큰 × 공표 단가로 산정**한 값이다. 입·출력 토큰 분리 정밀 측정이 아니므로
> ±50% 오차를 감안하라. 정가($3/$15) 전환 시 회당 약 $0.25~0.45로 오른다.

## 성과와 수치 (실측/산정 구분)

- **실측**: 서브에이전트 토큰 6.0만~8.3만/회, 소요 276~532초 (본 세션 관측 6회).
- **산정**: 회당 비용·월 비용 (실측 토큰 × 공표 단가).
- **정성 성과**: 큐레이션·번역·편집·배포·알림의 전 과정 무인화. 사람이 하면 매일 30~60분[추정]
  걸릴 작업 [추정].

## 재현 가이드

난이도: **중**. 준비물: Claude Code(Pro 이상), 공개 RSS/API(무료), 스케줄 기능.

1. 스캔 규칙·편집 기준을 CLAUDE.md에 문서화 (모든 세션 공통 적용)
2. 스케줄 작업 등록 — 프롬프트에 "서브에이전트(sonnet, low)에 위임" 명시
3. settings.local.json에 필요 도구만 화이트리스트 (curl·git·WebSearch·WebFetch·Write) — bypass 금지
4. RSS URL 캐시 섹션 운영으로 회당 검색 횟수 축소
5. 완료 시 PushNotification + git push(웹 배포 트리거)

## 강의·AX 활용 포인트

- **강의**: "에이전트 비용의 실제 크기"를 보여주는 살아있는 벤치마크 — 회당 $0.2 수준이면 일 단위
  자동화의 손익분기가 얼마나 낮은지 체감시킬 수 있다. 권한 화이트리스트는 "안전한 무인 실행"의
  교과서적 예시 (bypass와 대비).
- **AX**: 자동화 과제 비용 산정의 앵커. "뉴스 큐레이션 1건 = 약 $0.2, 월 $6" → 사내 반복 업무를
  같은 틀로 비용 추정하는 출발점. 서브에이전트 위임 = 토큰 예산 통제 패턴.

## 출처

- 본 저장소: `.claude/scheduled-tasks/daily-ai-radar-scan`, `.claude/settings.local.json`, `CLAUDE.md`, `log.md`
- 모델 단가: [[2026-06-30-claude-sonnet-5]] (프로모션 $2/$10, 정가 $3/$15)
- 토큰 실측: 본 세션 sonnet 리서치 서브에이전트 6회 관측치
