---
type: use-case
date: 2026-09-12
tools: [claude-code, codex]
mechanism: [cli-pipeline, mcp, hooks, skills]
domain: dev-automation
task: 코딩 에이전트가 이슈 유입부터 PR 생성·검증·병합까지 처리하는 파이프라인("AI Software Factory") 구축
outcome: Stripe 주당 1,300+PR 병합·Shopify 30일 3,536PR·MS 878PR(10개월, 14% 점유)
model: 미확인 (Claude Code·Codex 등 회사별 상이, 개별 모델명 비공개)
cost: 미확인
permissions: 회사별 명시적 "머지 게이트"에서 사람 승인 필수(자동 병합 아님)
maturity: production
evidence: measured
importance: high
uses: [course, ax]
programs: [AI Agent Service 개발자 — LLMOps]
source: https://www.firecrawl.dev/blog/ai-software-factory
---

> **공식**: Claude Code·Codex로 5단계 파이프라인(Intake-Isolation-Tools-Verification-Merge
> Gate)을 구성해 코딩 에이전트의 PR 생성·검증·병합 전 과정을 수행 → Stripe 주당 1,300+PR,
> Shopify 30일 3,536PR 등 다수 기업 실측 병합량 확보

## 무엇을 자동화했나

Firecrawl 블로그가 Stripe·Shopify·Spotify·Microsoft·Airbnb·Ramp·Faire 등 여러 기업의
코딩 에이전트 운영 방식을 종합해 하나의 공통 패턴으로 정리했다. 개별 회사 사례가 아니라
"여러 기업이 수렴한 아키텍처"라는 점이 이 페이지의 특징이다 — 정의: "work arrives from
a queue, agents run in isolated workspaces, verification happens automatically, and a
human sits at an explicit merge gate."

## 어떻게 구성했나 (아키텍처)

5단계 파이프라인:

1. **Intake(작업 선별)** — 모든 이슈에 에이전트를 투입하지 않는다. Sentry의 Seer는
   들어오는 에러를 "실행 가능성" 점수로 매기고, 라벨 필터링으로 작은 작업만 에이전트에
   배정한다.
2. **Isolation(격리 환경)** — Git worktree(1~5개 에이전트, 가장 저렴) / 컨테이너(의존성
   충돌 방지) / 클라우드 샌드박스(무제한 병렬) 3단계 중 규모에 맞춰 선택. Stripe는 약
   10초 만에 뜨는 사전 예열 devbox를 쓴다.
3. **Tools(도구 접근)** — Stripe는 자체 "Toolshed"로 내부 MCP 도구 약 500개를 에이전트에
   연결(테스트 러너·원격측정·기능 플래그 포함). Firecrawl 자신의 개발자 인덱스로 웹
   컨텍스트를 더한다.
4. **Verification(검증)** — 내부 루프(린트·컴파일·테스트, 로컬 5초 이내) → LLM 판정
   (Spotify는 이 단계에서 세션의 약 25%를 거부) → 외부 루프(CI/PR 체크) → 스크린샷
   기반 시각적 검증까지 4중 게이트.
5. **Merge Gate(병합 게이트)** — Faire는 에이전트 PR에 사람 리뷰어 2명을 강제하고 속성
   추적(어떤 에이전트가 어떤 코드를 만들었는지)을 필수화한다.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 미확인 — Claude Code·Codex를 공통으로 언급하나 회사별 구체 모델명은 비공개 |
| 비용 | 미확인 |
| 권한 설계 | 명시적 머지 게이트에서 사람 승인 필수 — 완전 자동 병합 아님. Faire는 리뷰어 2명 강제 |
| 성숙도 | production — 전부 실제 운영 중인 기업 사례 |

## 성과와 수치 (실측, 기업별 공개 수치 인용)

- **Shopify**: 30일간 3,536개 PR 병합, 이 중 1/8이 자체 구현체 "River"가 작성자.
- **Stripe**: 주당 1,300개 이상 PR 병합 (자체 구현체 "Minions").
- **Ramp**: 전체 PR의 약 30%가 에이전트 저자.
- **Microsoft (.NET)**: 10개월간 에이전트 PR 878개(전체의 14% 점유). 단, 병합률은
  에이전트 PR 67.9% vs 사람이 커밋에 관여한 PR 87.1%·완전 인간 PR 86.2% — **에이전트
  PR의 병합률이 사람보다 낮다는 부정적 데이터도 함께 공개됨.**
- **Airbnb**: 3,500개 테스트 파일을 6주 만에 마이그레이션.

## 재현 가이드 (난이도: 중)

준비물: 이슈 트래커(Sentry 등)·git worktree 또는 컨테이너 인프라·MCP 도구 연결·CI 파이프라인.

핵심 단계:
1. 게이트 하나부터 시작한다 — 리뷰 용량이 실제 병목이므로 전면 자동화를 노리지 않는다.
2. Git worktree로 에이전트를 격리한다(`.worktreeinclude`로 `.env` 등 필요한 파일만 공유).
3. MCP로 테스트 러너·원격측정·기능 플래그 조회 도구를 연결한다.
4. 자동 검증을 린트→테스트→스크린샷→CI 순으로 쌓아 사람이 보기 전에 거를 것을 거른다.
5. 리뷰 정책을 명시적으로 분류한다(기계적 변경/범위 제한 변경/민감도 높은 변경마다 다른
   승인 절차).

## 강의·AX 활용 포인트

- **강의**: "에이전트에게 코딩을 맡긴다"를 5단계 파이프라인으로 쪼개 설명할 수 있는
  가장 구체적인 참조 프레임 — AI Agent Service 과정의 아키텍처 실습 소재로 바로 쓸 수
  있다.
- **AX**: Microsoft의 "에이전트 PR 병합률이 사람보다 낮다"는 수치는 "에이전트 도입 =
  즉시 생산성 향상"이라는 낙관 서사에 대한 균형추로 쓸 수 있다 — 머지 게이트 설계가
  없으면 오히려 리뷰 부채가 쌓인다는 근거.
- 기존 위키의 개별 사례([[danluu-agentic-testing-technique-benchmark]],
  [[uber-adr-claude-code-cursor-codex-security-monitoring]])와 함께 보면 "에이전트가
  코드를 쓰는 능력"과 "그 코드를 검증·통제하는 체계"가 별개 문제임을 강의에서
  구분해 다룰 수 있다.

## 출처

- [Firecrawl — How to Build an AI Software Factory: Agents That Open, Review, and Merge PRs](https://www.firecrawl.dev/blog/ai-software-factory)
