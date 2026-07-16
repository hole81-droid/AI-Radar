---
type: use-case
date: 2026-07-15
tools: [claude-code, codex]
mechanism: [skills]
domain: dev-automation
task: 코드 리팩토링 시 SOLID 원칙 적용 여부를 과잉설계 없이 자동 판단
outcome: 수치 미확인 — 4단계 강도 조절 + 프로젝트별 설정 파일로 재현 가능한 가드레일 제시 (주장)
model: 미확인
cost: 미확인
permissions: 애매한 판단은 자동 수정 대신 사용자에게 질문 (강도별 차등: advisory는 편집 없음)
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://old.reddit.com/r/ClaudeAI/comments/1ux4yp6/i_built_a_skill_that_teaches_claude_code_how_to/
---

# solidifier — Claude Code Skill로 "과잉설계 없는 SOLID 원칙 적용" 자동화

> **공식**: Claude Code Skill(solidifier)을 활용해 코드 리팩토링 시 SOLID 원칙 적용 여부 판단을 수행
> → 단일 구현체용 인터페이스·불필요한 팩토리 패턴 같은 과잉설계를 결함으로 취급해 억제

## 무엇을 자동화했나

작성자는 Claude Code가 "기술적으로는 맞지만 오히려 수정하기 더 어려운" 코드로 리팩토링하는 패턴
— 구현체 하나짜리 인터페이스, 생성자 하나를 감싸는 팩토리 등 필요 없는 패턴 적용 — 을 반복적으로
겪고서 이를 막는 Skill **solidifier**를 만들어 공개했다. 목표는 SOLID 원칙 자체를 금지하는 게
아니라, "지금 존재하는 구체적 문제에 대한 근거 없는 추상화"를 걸러내는 것이다.

## 어떻게 구성했나 (아키텍처)

- **핵심 지침**: "SOLID는 도구일 뿐"이라는 원칙을 최상위에 명시. "미래의 유연성"은 근거로 인정하지
  않고, 모든 추상화는 지금 존재하는 문제에 대한 구체적 근거가 있어야 통과된다.
- **4단계 강도(rigor level)**:
  - `advisory` — 검토만 하고 코드는 건드리지 않음
  - `conservative`(기본값) — 명백한 위반만 수정
  - `standard` — 실제로 마찰을 일으키는 지점에 SOLID 적용
  - `thorough` — 포괄적 리팩토링, 단 모든 변경에 근거 필수
- **프로젝트별 설정**: `.solidifier.json` 파일로 적용할 원칙, 허용/금지 패턴, 공개 시그니처 변경
  가능 여부, 추상화 계층 추가 상한을 프로젝트마다 제약 가능.
- **판단 애매 시 확인 요청**: 자동으로 결정하지 않고 사용자에게 되묻도록 설계 — 에이전트 자율성과
  사람 개입 지점 사이의 균형을 Skill 설계 단계에서 명시적으로 잡았다.
- **툴 호환성**: Claude Code뿐 아니라 OpenCode·GitHub Copilot·Codex에서도 각 에이전트가 저장소 내
  자체 복사본을 갖는 방식으로 동일하게 동작하도록 만들어졌다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 강도별 차등 — advisory(편집 없음) ~ thorough(포괄 리팩토링), 애매한 판단은 사용자 확인 |
| 성숙도 | prototype (GitHub 공개, 커뮤니티 반응 초기 — Reddit 댓글 2건 시점 기준) |

## 성과와 수치

- 정량적 개선 수치(리뷰 시간 단축, 버그 감소 등)는 원문에 없음 — **일화(anecdotal)** 수준의 설계
  소개.
- 작성자 본인의 반복 경험("Claude가 계속 과잉설계로 흘러갔다")이 문제 제기의 근거이며, 이를 규칙화한
  Skill 자체가 산출물이다.

## 재현 가이드

- **난이도**: 하
- **준비물**: Claude Code(또는 Codex/Copilot/OpenCode), GitHub 저장소 접근
- **핵심 단계**:
  1. [github.com/FernandoJRR/solidifier](http://github.com/FernandoJRR/solidifier)에서 Skill을
     프로젝트에 설치
  2. 기본값(conservative)으로 먼저 사용해보며 "명백한 위반"만 수정되는지 확인
  3. 프로젝트 성격에 맞춰 `.solidifier.json`으로 허용 패턴·추상화 상한을 조정
  4. 팀 성숙도에 따라 advisory→standard로 강도를 단계적으로 올림

## 강의·AX 활용 포인트

- **강의**: "에이전트에게 원칙을 가르치는 것"과 "에이전트의 자율성에 한계를 긋는 것"이 같은 Skill
  안에서 어떻게 공존하는지 보여주는 좋은 예시 — Skill 설계 실습 소재로 적합.
- **AX**: 코드 품질 가드레일을 Skill 하나로 여러 에이전트 툴(Claude Code/Codex/Copilot/OpenCode)에
  동일하게 이식할 수 있다는 점은, 사내에서 도구별로 따로 표준을 만들 필요가 없다는 시사점을 준다.
  "애매하면 사람에게 묻는다"는 기본값은 AX 거버넌스 설계 시 권한 경계 설정의 참고 패턴.

## 출처

- [Reddit r/ClaudeAI — I built a skill that teaches Claude Code how to apply SOLID principles and design patterns](https://old.reddit.com/r/ClaudeAI/comments/1ux4yp6/i_built_a_skill_that_teaches_claude_code_how_to/)
- [GitHub — FernandoJRR/solidifier](http://github.com/FernandoJRR/solidifier)
