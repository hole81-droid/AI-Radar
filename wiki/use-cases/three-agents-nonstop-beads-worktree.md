---
type: use-case
date: 2026-06-13
tools: [claude-code, codex]
mechanism: [subagents, cli-pipeline]
domain: dev-automation
task: 코딩 에이전트 3종(Claude, Codex, Opencode)+로컬 모델을 3일간 무인·논스톱으로 운영해 여러 코딩 작업을 동시 병렬 개발
outcome: 3일간 무인 논스톱 운영 지속, 플릿 개선·데이터앱 PoC 등 병렬 작업 완료 (자기 보고, 수치 미확인)
model: Claude, Codex, Opencode + 로컬 Qwen 3.6:36B(Ollama)
cost: 미확인
permissions: 미확인
maturity: pilot
evidence: claimed
importance: medium
uses: [course, ax]
source: https://news.ycombinator.com/item?id=48520757
---
# "3개의 코딩 에이전트를 3일 내내 논스톱으로 돌린 방법" — Beads+Worktree+로컬모델 조합

> **공식**: Claude·Codex·Opencode + 로컬 Qwen 모델로 Beads(분산 이슈 트래커)+Git Worktree+Telegram 연동을 활용해 여러 코딩 작업의 3일 무인 병렬 개발을 수행 → 3일간 논스톱 운영, 플릿 개선·데이터앱 PoC 완료 (자기 보고)

## 무엇을 자동화했나

한 개발자가 여러 AI 코딩 에이전트를 3일간 사람 개입 없이 동시 운영한 실전 후기를 HN에 공유해
화제가 됐다. 자동화한 업무는 플릿(에이전트 함대) 자체의 개선 작업과, 데이터 수집·분석 앱의
PoC 개발 등 여러 코딩 작업의 동시 병렬 진행이다.

## 어떻게 구성했나 (아키텍처)

- **모델 구성**: Claude, Codex, Opencode(고성능, 설계·검증 담당) + 로컬 모델 Qwen 3.6:36B
  (Ollama, GPU 2장, 저비용 실행 담당) — 비용 절감을 위한 역할 분담.
- **Beads**: 분산 이슈 트래커로 작업 의존성과 우선순위를 관리.
- **Git Worktree**: 워커(에이전트)별로 작업 공간을 분리해 파일 충돌을 방지.
- **Telegram 연동**: 에이전트가 판단이 필요할 때 실시간으로 질문을 사람에게 전달받는 개입 채널.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | Claude·Codex·Opencode(고성능) + Qwen 3.6:36B(로컬, 저비용) |
| 비용 | 미확인 — 로컬 모델 활용으로 비용 절감을 의도했다는 서술만 있음 |
| 권한 | 미확인 |
| 성숙도 | pilot (3일 실험적 논스톱 운영, 상시 production 여부 불명) |

## 성과와 수치

- 정량 수치는 공개되지 않음 — **주장(claimed)** 수준.
- 핵심 인사이트: "약한 로컬 모델도 과제가 명확하면 좋은 결과를 낸다."
- 저자가 밝힌 가장 어려운 부분은 코딩 자체가 아니라 **오케스트레이션·승인·개입 타이밍 판단**이었다.

## 재현 가이드

- **난이도**: 상
- **준비물**: Claude/Codex/Opencode 등 코딩 에이전트, Ollama+로컬 모델(GPU), Beads, Git, Telegram Bot
- **핵심 단계**:
  1. Beads로 작업을 등록하고 의존성·우선순위를 부여
  2. 에이전트(워커)별로 Git worktree를 분리해 충돌 방지
  3. 설계·검증은 고성능 모델에, 반복 실행은 저비용 로컬 모델에 배정
  4. Telegram으로 개입이 필요한 순간만 사람에게 실시간 전달
  5. 무인 운영 중 개입 타이밍·승인 정책을 지속 조정

## 강의·AX 활용 포인트

- 비용 절감을 위한 "고성능 모델(설계)+저비용 로컬 모델(실행)" 역할 분담 패턴은 AX 비용 최적화
  강의 소재로 바로 쓸 수 있다.
- "가장 어려운 건 코딩이 아니라 개입 타이밍 설계"라는 결론은, AX 도입 시 인간 개입 지점(HITL)
  설계 논의의 실전 근거로 인용 가능.

## 출처

- [Hacker News — 3개 코딩 에이전트 논스톱 운영 후기](https://news.ycombinator.com/item?id=48520757)
