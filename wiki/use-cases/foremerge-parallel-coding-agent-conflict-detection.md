---
type: use-case
date: 2026-09-24
tools: [claude-code, codex, cursor]
mechanism: [mcp, subagents]
domain: dev-automation
task: 병렬로 작업하는 여러 코딩 에이전트 사이의 "의도 충돌" 사전 감지
outcome: 미확인(pre-1.0 버전, 공식 벤치마크 결과 없음을 자체 명시)
model: 해당 없음(에이전트 자체가 아니라 조율 계층 도구)
cost: 미확인
permissions: 로컬 SQLite, 파일 잠금·차단 없이 경고만 제공(자체 명시)
maturity: prototype
evidence: claimed
importance: low
uses: [course]
source: https://github.com/naw103/foremerge
---

> **공식**: Claude Code·Codex·Cursor 등 병렬 코딩 에이전트에 MCP 서버로 "공유 화이트보드"를
> 붙여 의도 충돌을 사전 감지 → GitHub 507 stars, 정량 벤치마크는 미확인

## 무엇을 자동화했나

여러 코딩 에이전트를 동시에 돌릴 때 Git은 텍스트 수준 충돌만 잡아낼 뿐, "의미상 충돌"은
놓친다 — 예를 들어 한 에이전트가 `PaymentService`를 `StripePaymentService`로 교체하는
동안 다른 에이전트가 원래의 `PaymentService`에 PayPal 지원을 추가하면, Git은 둘 다
무리 없이 병합하지만 PayPal 작업은 아무도 호출하지 않는 죽은 클래스에 남게 된다.
Foremerge는 이런 "의도 충돌"을 코드 작성 전에 미리 잡아내는 조율 도구다.

## 어떻게 구성했나 (아키텍처)

- **동작 방식**: "공유 화이트보드"처럼 작동 — 에이전트들이 `symbol:PaymentService=replace`
  같은 시맨틱 범위로 자신이 수정하려는 대상을 코드 작성 전에 먼저 선언한다.
- **공유 상태**: 모든 에이전트가 Git 공통 디렉터리(`<git-common-dir>/foremerge/state.sqlite3`)의
  SQLite DB를 함께 읽어, 격리된 worktree 사이에서도 서로의 선언을 볼 수 있다.
- **조기 경고**: 선언된 작업들을 비교해 실제 구현이 시작되기 전에 충돌 경고를 띄운다.
  단, "파일을 잠그거나 에이전트를 막지 않는다 — 경고는 참고용이고 최종 판단은 사람"이라고
  문서에 명시.
- **기술 구성**: Rust 바이너리, CLI·JSON HTTP API·MCP 서버 3가지 인터페이스 제공. Claude
  Code·Codex·Cursor와 MCP로 연동.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 해당 없음(조율 계층 도구, 에이전트 자체가 아님) |
| 비용 | 미확인 |
| 권한 | 파일 잠금·차단 없음, 경고만 제공(advisory) |
| 성숙도 | prototype (버전 0.5.0, "pre-1.0 local-first MVP"로 자체 명시) |
| 근거 수준 | claimed (제작자 README 서술, "공식 벤치마크 결과 아직 없음"을 스스로 명시) |

## 성과와 수치

리포지토리가 "Published benchmark results do not yet exist"라고 스스로 밝히고 있어
정량 성과는 **미확인**이다. GitHub 507 stars·21 forks가 유일한 채택 지표.

## 재현 가이드

**난이도: 중** (MCP 서버 설정 + 에이전트별 사전 선언 습관화 필요)

준비물:
- Claude Code·Codex·Cursor 중 하나 이상(MCP 지원)
- Git 저장소 + worktree 기반 병렬 작업 환경

핵심 단계:
1. Foremerge를 MCP 서버로 등록해 각 에이전트 세션에 연결한다.
2. 에이전트가 코드를 쓰기 전에 수정 대상을 시맨틱 범위로 먼저 선언하도록 지시(prompt)에
   포함한다.
3. 공유 SQLite 상태를 통해 다른 worktree의 에이전트가 겹치는 선언을 하면 경고를 확인한다.
4. 경고는 차단이 아니므로, 최종적으로 병합할지는 사람이 판단한다.

## 강의·AX 활용 포인트

- **강의**: 여러 코딩 에이전트를 동시에 굴리는 워크플로([[fleet-orchestrator-claude-codex-10-agents]]·
  [[three-agents-nonstop-beads-worktree]] 등 기존 사례)에서 "Git이 못 잡는 충돌"이라는
  구체적 실패 유형(예시: PaymentService 교체 vs PayPal 추가)을 설명할 때 좋은 교재.
- **AX**: 병렬 에이전트 오케스트레이션을 도입하려는 조직이라면, 이런 "의도 충돌 감지"
  계층이 아직 pre-1.0·벤치마크 미검증 단계임을 감안해 프로덕션 도입보다는 실험적
  파일럿 단계에서 리스크를 낮추는 용도로 접근해야 한다는 점이 시사점이다.

## 출처

- [GitHub — naw103/foremerge](https://github.com/naw103/foremerge)
- [Hacker News(277점) — Show HN: Foremerge – Catch intent conflicts between parallel coding agents](https://news.ycombinator.com/item?id=49789356)
