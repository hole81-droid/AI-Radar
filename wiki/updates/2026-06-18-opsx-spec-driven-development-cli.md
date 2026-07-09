---
type: update
date: 2026-06-18
tools: [claude-code, codex]
importance: medium
uses: [course, ax]
source: https://github.com/davidpv/opsx-spec-driven-development-toolkit
---
# opsx — Claude Code·OpenCode·Codex에 "스펙 우선" 개발을 강제하는 CLI

## 무엇이 있었나

코드 작성을 맨 뒤로 미루고 제안·사양·설계·작업 순으로 먼저 구조화하는 오픈소스 도구
`opsx`가 공개됐다. `.claude/`, `.opencode/`, `.codex/` 디렉토리에 동일한 명령어·스킬을
배포해 Claude Code·OpenCode·Codex 세 플랫폼에서 같은 워크플로 거버넌스를 강제한다.

## 왜 중요한가

- 관리 평면(Jira, 무엇을 할 것인가)과 거버넌스 평면(OpenSpec, 어떻게 동작하는가)을 분리하고,
  `/opsx:propose`로 변경을 제안 → 리뷰어 검토 → `openspec validate --strict` 통과라는
  의무 게이트를 통과해야만 코드 작성이 허용되는 구조다.
- Discovery→Task(Jira)→Change→Commits→PR로 이어지는 추적성 체인을 커밋 푸터에 남겨,
  "작업이 존재해도 코드 작성은 허가되지 않는다"는 원칙을 도구 차원에서 강제한다.
- 에이전트가 스펙과 다르게 구현하면 먼저 스펙을 고치게 강제해 스펙 드리프트를 막는다.

## 활용/시사점

- 여러 코딩 에이전트를 함께 쓰는 조직의 워크플로 거버넌스 강의 소재로 적합하다.
- AX 관점: 여러 에이전트/여러 팀이 동시에 코드를 건드리는 환경에서 "스펙 없이는 구현 불가"
  원칙을 도구로 강제하는 패턴은 거버넌스 설계의 참고 사례가 된다.
- 재현 난이도는 중간(OpenSpec·Jira 연동 설정 필요).

## 출처

- [GitHub — davidpv/opsx-spec-driven-development-toolkit](https://github.com/davidpv/opsx-spec-driven-development-toolkit)
