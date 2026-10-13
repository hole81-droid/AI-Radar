# Simon Willison, "Quoting Geoffrey Huntley" (2026-10-13) → Geoffrey Huntley, "Agency"

- Simon Willison 포스트: https://simonwillison.net/2026/Oct/13/geoffrey-huntley/
- 원문(1차 소스): https://ghuntley.com/agency/

## 핵심 내용 (WebFetch 정독 요약)

### 주장
- "손으로 코드를 타이핑하는 소프트웨어 엔지니어의 자리는 더 이상 없다" —
  병목이 모델 성능에서 운영자의 스킬·검증·비전으로 옮겨갔다는 주장.

### 핵심 기법 — Pre-commit Hook + 결정론적 아키텍처 강제
- AGENTS.md·MCP 같은 "스킬 팩"에 의존하는 대신, **git diff를 검사하는
  pre-commit hook**을 작성해 결정론적 체크를 건다.
- 예시: 에이전트가 자신의 진단(observability) 라이브러리를 거치지 않고
  직접 관찰성 모듈을 호출하면 → **커밋 실패(fail the commit)** +
  에이전트에게 올바른 라이브러리를 쓰라는 교정 프롬프트를 주입.
- "확률적 튜닝"을 "검증 가능한 제약"으로 바꾸는 패턴 — 위반을 "자동 정리
  대상(자니터 Roomba 업무)"으로 취급.
- OpenTelemetry·구조화 로깅 등 표준 진단 패턴으로 리팩터링 후, 에이전트가
  이를 벗어나면 교정하는 식으로 운영.

### AGENTS.md·skill pack에 대한 반대 입장
- AGENTS.md와 MCP를 "소프트웨어 엔지니어를 위한 점성술(astrology)"이라
  부르며, 느낌만 좋아지는 "별자리 운세" 취급.
- 검증 기준: "스킬 없이도 됐는가?"를 자문해보라고 제안. 모델이 업데이트되면
  효과가 반전될 수 있으니 몇 달에 한 번씩 skill 설정을 지워보라고 권고.

### 일화적 사례
- 과거 근무했던 3개 회사의 제품을 10일 안에 재구현해 컨퍼런스 발표용으로
  오픈소스(MIT)로 공개 — 검증 인프라가 갖춰지면 가능한 속도를 보여주는
  사례로 제시(수치는 hooks 기법 자체의 벤치마크가 아니라 속도 일화).

## 위키 반영 판단

Hooks 메커니즘으로 에이전트의 아키텍처 일관성을 강제하는 재현 가능한 기법
(wordswap.sh 사례처럼 가볍지 않고, 실제 엔지니어링 거버넌스 용도) +
이 위키의 다른 글([[anthropic-skill-authoring-best-practices]] 등 skill
저작을 긍정하는 자료)과 대비되는 반대 입장이라 "업무 적용 Case"로 승격,
상충 가능성을 본문에 명시.
