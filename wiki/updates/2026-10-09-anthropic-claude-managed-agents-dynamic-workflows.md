---
type: update
date: 2026-10-09
tools: [claude-code]
importance: medium
uses: [course, ax]
source: https://platform.claude.com/docs/en/release-notes/overview
---

# Anthropic, Claude Managed Agents "Dynamic Workflows" 퍼블릭 베타 — 최대 1,000개 에이전트 오케스트레이션

## 무엇이 바뀌었나

Claude Managed Agents에 **Dynamic Workflows**가 퍼블릭 베타로 추가됐다
(`managed-agents-2026-04-01` 베타 헤더, 2026-10-09). 기존 단일 에이전트 호출과
달리, **리드 에이전트가 직접 "워크플로"(여러 에이전트를 여러 단계로 실행하고
결과를 결합하는 프로그램)를 작성**하는 새로운 멀티에이전트 오케스트레이션 방식이다.

- 설정: 에이전트의 `multiagent` 필드를 `{"type": "multiagent_20261001", "workflows":
  {"type": "enabled"}}`로 지정하면 활성화.
- 시스템 프롬프트로 "언제 워크플로를 시작할지"를 에이전트에 지시하고, 세션
  이벤트 스트림의 `workflow_run.*` 이벤트로 진행 상황을 추적한다.
- **런당 최대 1,000개 에이전트**를 서버가 백그라운드에서 오케스트레이션 — 수백 건의
  문서 리뷰처럼 "조각이 아주 많은 업무"에 적합하다고 공식 소개됐다.

## 왜 중요한가

- 지금까지의 멀티에이전트 사례(이 위키의 서브에이전트·orchestrator 패턴 다수)는
  대부분 개발자가 직접 오케스트레이션 로직을 짜야 했다. Dynamic Workflows는 이
  오케스트레이션 자체를 **에이전트가 설계하고 서버가 실행**하는 쪽으로 넘긴다 —
  "에이전트를 쓰는 법"에서 "에이전트 여러 개를 관리하는 법"으로 교육 비중을
  옮겨야 한다는 최근 Josh Bersin의 멀티에이전트 HR 가이드([[multi-agent-ai-architecture-hr]])
  논지와 같은 방향의 플랫폼 변화다.
- 1,000개 규모는 지금까지 이 위키에 기록된 개인·소규모 팀 사례(수십 개 에이전트
  오케스트레이션)보다 한 단계 위의 스케일을 공식 지원한다는 선언이다.

## 활용 포인트

- **강의**: 기존 수동 서브에이전트 설계([[claude-managed-agents-dreaming-outcomes-orchestration]]
  등)와 비교해 "에이전트가 워크플로를 직접 설계하는" 패턴의 차이를 가르치는 최신
  레퍼런스로 적합.
- **AX**: 대량 문서 리뷰·반복 심사 업무(계약서·규정 검토 등)를 가진 조직이
  오케스트레이션 레이어를 직접 구축하지 않고도 대규모 병렬 처리를 시도해볼 수 있는
  시점 — 다만 베타 단계이므로 프로덕션 적용 전 파일럿이 필요하다.

## 출처

- [Claude Platform — Release Notes](https://platform.claude.com/docs/en/release-notes/overview)
- [TokenPost — Anthropic Opens Claude Managed Agents to Public Beta for AI Workflows](https://www.tokenpost.com/news/technology/29146)
- raw/2026-10/anthropic-claude-managed-agents-dynamic-workflows.md
