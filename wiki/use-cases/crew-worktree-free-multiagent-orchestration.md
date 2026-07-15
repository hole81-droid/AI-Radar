---
type: use-case
date: 2026-07-15
tools: [claude-code]
mechanism: [subagents]
domain: dev-automation
task: Crew 도구로 git worktree 없이 여러 Claude Code 에이전트가 실시간 컨텍스트 공유로 충돌 방지하며 동시 작업
outcome: 같은 저장소에서 여러 Claude Code 에이전트를 동시 운영할 때 작업 중복·충돌을 방지 (검증된 성과 수치 없음, 제작자가 피드백을 구하는 프로토타입 단계)
model: 미확인
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://old.reddit.com/r/AI_Agents/comments/1uvyi8b/built_a_tool_that_lets_claude_code_agents/
---
# Crew — git worktree 대신 실시간 컨텍스트 공유로 Claude Code 멀티에이전트 충돌 방지

> **공식**: Claude Code로 subagents(멀티에이전트) 실시간 컨텍스트 공유 도구 "Crew"를 활용해
> 같은 저장소에서 동시 작업 시 충돌 방지를 수행 → 검증된 성과 수치는 없음, 제작자가 직접
> 피드백을 구하는 프로토타입 단계

## 무엇을 자동화했나

Reddit r/AI_Agents에 제작자가 직접 공개한 신생 도구 "Crew"로, 같은 코드 저장소에서 여러
Claude Code 에이전트를 동시에 돌릴 때 발생하는 작업 중복·충돌을 방지하는 것을 목표로 한다.
WebFetch로 Reddit 원문(old.reddit.com, www.reddit.com, JSON API 모두 시도)에 접근하지
못해 이 항목은 2026-07-15 뉴스레터 요약을 근거로 작성했다 — 도구의 세부 구현, 사용
모델, 댓글 반응은 미확인.

## 어떻게 구성했나 (아키텍처)

- **기존 방식과의 차이**: git worktree로 에이전트별 작업 디렉토리를 물리적으로 격리하는
  기존 접근 대신, 에이전트들이 실시간으로 컨텍스트를 공유하는 방식을 택함.
- **충돌 방지 메커니즘**: 에이전트들이 서로 메시지를 주고받아 다른 에이전트의 진행 상황을
  인지하도록 해, 같은 파일·같은 작업에 중복 착수하는 것을 막는 구조로 추정된다(뉴스레터
  요약 수준, 구현 세부는 미확인).

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 미확인 |
| 성숙도 | prototype (제작자가 직접 피드백을 구하는 단계) |

## 성과와 수치

- **일화**: 뉴스레터 요약에 "검증된 성과 수치 없음"이라고 명시되어 있다. 재시도한
  WebFetch로도 Reddit 원문에 접근하지 못해 추가 확인이 불가능했다. 그대로 도입하기엔
  이른 단계이며, "멀티 에이전트 오케스트레이션의 worktree 대안"이라는 트렌드 자체를
  참고하는 정도로 취급해야 한다.

## 재현 가이드

- **난이도**: 상 (컨텍스트 공유·충돌 감지 로직을 직접 구현해야 하며, 공개된 구체 사양이
  확인되지 않음)
- **준비물**: 여러 Claude Code 에이전트, 공유 컨텍스트 채널(메시지 브로커 등), 충돌 감지
  로직 — 세부는 원문 미확인으로 자체 설계 필요
- **핵심 단계** (뉴스레터 요약 수준의 개략적 단계, 검증되지 않음):
  1. git worktree 없이 여러 에이전트가 같은 작업 디렉토리를 공유하도록 구성
  2. 에이전트 간 실시간 메시지 교환 채널 구축
  3. 각 에이전트가 작업 착수 전 다른 에이전트의 진행 상황을 조회하도록 설계
  4. 충돌 가능성이 감지되면 작업을 양보하거나 대기하는 규칙 정의

## 강의·AX 활용 포인트

- git worktree 기반 격리 방식([[three-agents-nonstop-beads-worktree]] — Claude·Codex·
  Opencode+로컬 Qwen을 Beads+Git worktree로 물리적으로 격리해 3일 무인 병렬 개발을
  수행한 사례)과 대비되는 "컨텍스트 공유형" 접근이라는 점에서 두 사례를 나란히 강의하면
  멀티에이전트 오케스트레이션의 두 가지 설계 철학(물리적 격리 vs. 실시간 공유)을
  비교하기 좋다.
- 다만 이 사례는 검증된 성과 수치가 없는 프로토타입이므로, AX 도입 근거로 쓰기보다는
  "떠오르는 트렌드" 소개 수준으로 다루고, 실제 도입 전 자체 검증을 권고해야 한다.

## 출처

- [Reddit r/AI_Agents — "Built a tool that lets Claude Code agents..." (worktree 대안 "Crew")](https://old.reddit.com/r/AI_Agents/comments/1uvyi8b/built_a_tool_that_lets_claude_code_agents/) (WebFetch 접근 실패, 뉴스레터 요약 기반 작성)
