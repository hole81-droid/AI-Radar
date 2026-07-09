---
type: use-case
date: 2026-06-04
tools: [claude-code, codex]
mechanism: [subagents, mcp, cli-pipeline]
domain: dev-automation
task: 코딩 에이전트 10~15개를 자체 제작 오케스트레이터로 동시 운영하며 여러 코딩 작업을 병렬 배분·모니터링
outcome: 수 주간 10~15개 에이전트 병렬 운영 지속, CLAUDE.md·Skills 방식을 계층형 지식베이스로 대체 (자기 보고, 수치 미확인)
model: 미확인
cost: 미확인
permissions: 미확인
maturity: production
evidence: claimed
importance: medium
uses: [course, ax]
source: https://news.ycombinator.com/item?id=48256389
---
# Claude Code·Codex 에이전트 10~15개 동시 운영 — "Fleet" 오케스트레이터

> **공식**: Claude Code+Codex로 자체 제작 Python 오케스트레이터("fleet", 중앙 SQLite DB + MCP 챗 인터페이스)를 활용해 코딩 에이전트 10~15개의 작업 배분·모니터링을 수행 → 수 주간 지속 운영, CLAUDE.md/Skills를 대체하는 계층형 지식베이스로 전환 (자기 보고)

## 무엇을 자동화했나

한 개인 개발자가 Show HN에 공개한 사례. Claude Code와 Codex 에이전트 10~15개를 동시에 띄워
여러 코딩 작업(기능 개발, 버그 수정 등)을 병렬로 처리하고, 진행 상황을 하나의 인터페이스에서
모니터링했다.

## 어떻게 구성했나 (아키텍처)

- 자체 제작 Python 오케스트레이터 "fleet" — 중앙 SQLite DB에 작업을 등록해두면 유휴 에이전트가
  스스로 작업을 가져가는 풀(pull) 방식.
- MCP 기반 챗 인터페이스로 코더·모델 선택, 작업 큐잉, 의존성 지정을 UI에서 관리.
- 운영 중 CLAUDE.md·Skills·플러그인 방식이 **매 세션 전체 로드**되어 토큰을 낭비한다는 것을
  발견 → 진짜 프로그레시브 디스클로저(필요한 만큼만 점진적으로 노출)를 구현하는
  **계층형 지식베이스**로 전환.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Claude Code + Codex 혼용, 세부 모델명 비공개) |
| 비용 | 미확인 |
| 권한 | 미확인 |
| 성숙도 | production (수 주간 실제 운영 지속) |

## 성과와 수치

- 정량 성과 수치는 원문에 없음 — **주장(claimed)** 수준의 정성적 운영 후기.
- 핵심 발견: CLAUDE.md는 무조건 전체 로드되어 토큰을 낭비하고, Skills도 컨텍스트 예산이 있어
  10,000개 규모로는 쓸 수 없다는 실전 한계 보고.

## 재현 가이드

- **난이도**: 상 (자체 오케스트레이터 구축 필요)
- **준비물**: Claude Code, Codex, 중앙 작업 DB(SQLite 등), MCP 인터페이스
- **핵심 단계**:
  1. 작업을 중앙 DB에 등록하고 에이전트가 풀(pull) 방식으로 가져가게 설계
  2. CLAUDE.md·Skills 대신 필요한 만큼만 점진적으로 노출하는 계층형 지식베이스 구성
  3. 코더·모델 선택, 큐잉, 의존성 지정을 하나의 UI(MCP 챗)로 통합
  4. 에이전트 수를 늘리며 컨텍스트 낭비 지점을 모니터링·제거

## 강의·AX 활용 포인트

- "에이전트를 10개 이상 규모로 확장할 때 만나는 진짜 문제"를 보여주는 드문 1차 자료 — CLAUDE.md·Skills의
  구조적 한계(전체 로드, 컨텍스트 예산)를 실전에서 짚어낸다.
- AX 관점: 사내에서 에이전트를 소규모(1~3개)에서 대규모(10개+)로 확장할 계획이라면, 지식베이스를
  점진적 노출 구조로 미리 설계해야 토큰 비용이 통제된다는 선행 학습 사례로 인용 가능.

## 출처

- [Show HN — Fleet 오케스트레이터 운영 후기](https://news.ycombinator.com/item?id=48256389)
