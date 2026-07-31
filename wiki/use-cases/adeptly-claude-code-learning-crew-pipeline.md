---
type: use-case
date: 2026-07-31
tools: [claude-code]
mechanism: [cli-pipeline, subagents, prd-driven]
domain: dev-automation
task: Claude Code 고급 기능(플랜모드·서브에이전트·스킬·훅·MCP)을 계획서에 자동 삽입해 학습시키고, "Crew" 파이프라인으로 설계→구현→검증→PR까지 자동 실행
outcome: 무료 오픈소스 로컬 CLI(npx adeptly)로 API 키·서버·텔레메트리 없이 동작 (주장, 정량 성과 미확인)
model: 미확인 (사용자의 로컬 claude CLI를 그대로 호출 — 모델 특정 안 함)
cost: 미확인 (도구 자체는 무료, 기반 Claude Code 사용료는 별도)
permissions: 로컬 실행 전용, API 키 불필요, 백엔드·텔레메트리·회원가입 없음(저자 명시)
maturity: pilot
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://old.reddit.com/r/AI_Agents/comments/1vakqpn/most_people_use_like_15_of_claude_code_i_built_a/
---

> **공식**: Claude Code로 로컬 CLI 파이프라인(플랜 생성+"Crew" 역할 체인)을 활용해 프로젝트
> 계획 수립부터 구현·테스트·PR까지의 개발 워크플로를 수행 → Claude Code 고급 기능을 계획서
> 안에서 자동으로 배우게 하는 오픈소스 도구 (주장)

## 무엇을 자동화했나

제작자가 "Claude Code를 몇 달째 쓰면서도 기능의 15%밖에 못 쓰고 있었다"는 문제의식에서
출발했다. 플랜모드·서브에이전트·스킬·훅·MCP·`/security-review`·auto-memory 등은 모두
존재하지만, "언제 꺼내 써야 하는지"를 몰라 방치하고 있었다는 것. 이를 해결하기 위해 무료
오픈소스 CLI **Adeptly**(MIT 라이선스)를 만들었다.

- 사용자가 만들고 싶은 것을 말하면 제대로 된 계획서를 작성해주고, 그 계획의 적절한 지점에
  맞는 Claude Code 기능을 삽입하면서 각 기능이 왜/무엇을 위해 쓰이는지 짧은 설명을 붙인다 —
  "문서를 뒤지는 대신 자기 계획서를 읽으며 Claude Code를 배우게" 하는 것이 목적.
- v0.5(글 작성 당일 출시)부터는 계획을 그냥 알려주기만 하던 것에서 나아가, "Crew"라는
  역할별 파이프라인이 계획을 실제로 실행까지 한다.

## 어떻게 구성했나 (아키텍처)

- **실행 방식**: `npx adeptly`로 로컬에서 실행, `localhost`에서 열리는 웹 UI
- **입력**: `docs/plans/`에서 계획서를 읽음
- **AI 백엔드**: 사용자의 로컬 `claude` CLI를 그대로 호출 — 별도 API 키·자체 백엔드 없음,
  텔레메트리·회원가입 없음(저자 명시, "이미 Claude Code를 신뢰한다면 추가로 신뢰할 게 없다"고
  주장)
- **Crew 파이프라인(v0.5 신규)**: 역할별 헤드리스 Claude 턴을 순차 연결
  1. **Architect** — 설계
  2. **Approval Gate** — 사람 승인 지점
  3. **Builder** — 구현
  4. **Medic** — 빌드/테스트 실행 후 실패 시 자동 수정
  5. **Reviewer** — 코드 리뷰
  6. **Security** — 보안 점검
  7. **Pilot** — PR 오픈

승인 게이트(Approval Gate)를 파이프라인 중간에 명시적으로 둔 것이 특징 — 완전 무인 자동
실행이 아니라 설계 단계 이후 사람이 개입할 지점을 구조적으로 남겨뒀다.

## 벤치마크 데이터

| 항목 | 값 |
|------|-----|
| 모델 | 미확인 — 사용자의 로컬 Claude Code/claude CLI를 그대로 사용하므로 모델 자체를 특정하지 않음 |
| 비용 | 미확인 — 도구 자체는 무료(MIT), 기반 Claude Code 이용료는 사용자 부담 |
| 권한 | 로컬 실행 전용, API 키·백엔드 서버 없음, 텔레메트리 없음(저자 명시) |
| 성숙도 | pilot — v0.5를 글 작성 당일 갓 출시한 초기 단계 |

## 성과와 수치

이용자 수, 재현 성공률 등 정량 성과는 제시되지 않았다(**미확인**). 저자 1인의 자기 보고이며,
Crew 파이프라인 자체도 막 출시된 기능이라 검증된 사례는 아직 없다(anecdotal).

## 재현 가이드

- **난이도**: 하 (설치·실행 자체는 `npx adeptly` 한 줄, Claude Code가 이미 설정돼 있으면
  추가 설정 거의 없음)
- **준비물**: 로컬에 설정된 Claude Code(`claude` CLI), Node.js(npx 실행용)
- **핵심 단계**:
  1. `npx adeptly` 실행 → localhost 웹 UI에서 만들고 싶은 것을 설명
  2. 생성된 계획서(`docs/plans/`)에서 Claude Code 기능별 설명을 읽으며 학습
  3. (v0.5+) Crew 파이프라인 실행 — Architect가 설계 후 Approval Gate에서 사람이 승인
  4. Builder→Medic→Reviewer→Security 단계를 거쳐 자동으로 구현·검증
  5. Pilot 단계에서 PR이 열리면 최종 사람 리뷰 후 머지

## 강의·AX 활용 포인트

- **강의**: "기능을 나열한 문서보다, 실제 작업 계획 안에 기능을 맥락과 함께 끼워 넣는 편이
  학습 곡선을 낮춘다"는 컨셉 자체가 Claude Code 강의 설계에 참고할 만하다. Architect→Approval
  Gate→Builder→Medic→Reviewer→Security→Pilot 7단계는 "에이전트 파이프라인에 사람 승인
  지점을 어디에 둘 것인가"를 설명하는 좋은 다이어그램 소재.
- **AX**: 오늘 함께 반영된 [[gpt-5-6-sol-autonomous-business-failure]](완전 자율 위임의
  위험 사례)와 대비해서 보면, Approval Gate 같은 구조적 승인 지점의 필요성을 뒷받침하는
  실무 반례로 강의에 짝지어 쓸 수 있다. 다만 막 출시된 초기 도구이므로 기업 도입 전에는
  안정성 검증이 필요하다.

## 출처

- 원문: [Reddit r/AI_Agents — "Most people use like 15% of Claude Code. I built a free tool that teaches the rest by baking the features into your own plans."](https://old.reddit.com/r/AI_Agents/comments/1vakqpn/most_people_use_like_15_of_claude_code_i_built_a/) (2026-07-31 확인)
