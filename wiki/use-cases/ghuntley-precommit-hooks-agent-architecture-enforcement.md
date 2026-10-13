---
type: use-case
date: 2026-10-13
tools: [claude-code]
mechanism: [hooks]
domain: dev-automation
task: pre-commit hook으로 git diff를 검사해 코딩 에이전트가 사내 관찰성(observability) 라이브러리를 건너뛰고 직접 호출하는 패턴을 커밋 단계에서 차단하고, 교정 프롬프트를 주입해 아키텍처 일관성을 강제
outcome: "확률적 스킬 튜닝"을 "결정론적(검증 가능한) 제약"으로 전환 — 정량 비교 수치는 원문에 없음(기법 자체의 전후 비교는 anecdotal)
model: 미확인
cost: 미확인
permissions: 미확인 (pre-commit hook 실행 권한 수준으로 추정, 명시적 permission 설계 서술 없음)
maturity: production (저자 본인 워크플로에서 상시 사용 중이라고 서술)
evidence: anecdotal
importance: medium
uses: [course]
source: https://ghuntley.com/agency/
---

> **공식**: 코딩 에이전트에 pre-commit hooks(hooks)을 걸어 아키텍처
> 위반(관찰성 라이브러리 우회 등)을 커밋 단계에서 차단 + 교정 프롬프트
> 자동 주입 → "스킬 팩 튜닝"을 "결정론적 검증"으로 대체

## 무엇을 자동화했나

Geoffrey Huntley(ghuntley.com, 2026-10-13 게시, Simon Willison이 같은 날
인용해 재확산)가 코딩 에이전트를 상시 운용하며 쓰는 거버넌스 기법이다.
핵심 주장은 "손으로 코드를 치는 소프트웨어 엔지니어의 자리는 더 이상
없다"는 것이고, 그 결과 생긴 진짜 문제—에이전트가 아키텍처 규칙을
일관되게 지키게 만드는 것—를 **AGENTS.md나 MCP 같은 "스킬 팩"이 아니라
pre-commit hook**으로 해결한다고 소개했다.

## 어떻게 구성했나 (아키텍처)

- **검사 대상**: git diff. 에이전트가 커밋하려는 변경 내용을 pre-commit
  hook이 패턴 매칭으로 검사한다.
- **구체 규칙 예시**: 에이전트가 사내 진단(diagnostics) 라이브러리를
  거치지 않고 관찰성(observability) 모듈을 직접 호출하면 위반으로 간주.
- **동작**: 위반이 감지되면 **커밋을 실패(fail)시키고**, 에이전트에게
  "진단 라이브러리를 쓰라"는 교정 프롬프트를 주입한다. 위반 수정은
  "자니터(Roomba) 업무"로 취급해 에이전트가 반복적으로 정리하게 둔다.
- **표준화 기반**: OpenTelemetry·구조화 로깅 같은 표준 진단 패턴으로
  코드베이스를 먼저 리팩터링해두고, 그 표준에서 벗어나면 hook이 잡아내는
  구조.
- **AGENTS.md/MCP에 대한 반대 입장**: 저자는 이런 "스킬 팩"을
  "소프트웨어 엔지니어를 위한 점성술"이라 부르며, 모델이 업데이트되면
  효과가 반전될 수 있다는 이유로 몇 달에 한 번씩 지워보라고 권고한다.
  검증 기준으로 "스킬 없이도 됐는가?"를 자문하라고 제안.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 미확인 (pre-commit hook 실행 권한 추정) |
| 성숙도 | production (저자 상시 운용 주장, 제3자 검증 없음) |

## 성과와 수치

- **정량 비교 없음**: hook 적용 전후의 위반율·수정 시간 등 구체 수치는
  원문에 없다 — "확률적 튜닝에서 결정론적 제약으로 전환했다"는 서술적
  주장(anecdotal)에 그친다.
- 저자가 제시하는 유일한 구체 수치는 **과거 근무했던 3개 회사의 제품을
  10일 안에 재구현**해 오픈소스(MIT)로 공개했다는 속도 일화인데, 이는
  hooks 기법 자체의 벤치마크가 아니라 "검증 인프라가 갖춰지면 가능한
  속도"를 보여주는 별개의 사례다 — 혼동해서 인용하지 말 것.

## 재현 가이드

- **난이도**: 중 (pre-commit hook 스크립트 작성 + 사내 아키텍처 규칙을
  패턴으로 정의하는 작업이 필요, [[claude-code-hooks-wordswap]]의 텍스트
  치환 데모보다는 설계가 더 들어간다)
- **준비물**: 코딩 에이전트(Claude Code 등), git pre-commit hook 환경,
  검사하고 싶은 아키텍처 규칙(예: 특정 모듈 우회 금지)
- **핵심 단계**:
  1. 강제하고 싶은 아키텍처 규칙을 diff 패턴으로 표현 가능한 형태로 정의
  2. pre-commit hook에서 해당 패턴을 검사하는 스크립트 작성
  3. 위반 시 커밋 실패 + 에이전트에게 교정 지시를 주입하는 흐름 연결
  4. 기존 AGENTS.md/스킬 설정은 "스킬 없이도 되는지" 주기적으로 재검증

## 강의·AX 활용 포인트

- **강의**: Hooks가 "AI 출력 후처리"([[claude-code-hooks-wordswap]])를
  넘어 "에이전트 행동에 대한 거버넌스 레이어"로 쓰일 수 있다는 진지한
  사례로 소개하기 좋다. 다만 수치 근거가 약해 "검증된 기법"이 아니라
  "한 엔지니어의 강한 의견"으로 틀을 잡아야 한다.
- **AX 주의(상충 가능성)**: 이 위키의 [[anthropic-skill-authoring-best-practices]]
  등은 Skill 저작을 긍정적으로 다루는 반면, 이 글은 AGENTS.md·MCP를
  "점성술"이라 부르며 정반대 입장을 취한다. 스킬/하네스 설계를 가르칠 때
  "결정론적 검증(hooks) vs 선언적 가이드(skill/AGENTS.md)"라는 두 접근의
  트레이드오프로 양쪽을 함께 소개하는 것이 안전하다.

## 출처

- [Geoffrey Huntley — "nobody should type code by hand anymore. here's what's left." (Agency)](https://ghuntley.com/agency/)
- [Simon Willison — Quoting Geoffrey Huntley (2026-10-13)](https://simonwillison.net/2026/Oct/13/geoffrey-huntley/)
- raw: `raw/2026-10/simonwillison-ghuntley-agency-hooks.md`
