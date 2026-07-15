---
type: use-case
date: 2026-07-10
tools: []
mechanism: [record-replay, mcp]
domain: ops
task: 반복 화면 작업을 한 번 시연으로 재사용 가능한 에이전트 스킬로 자동 변환
outcome: 수치 미확인 — r/AI_Agents 커뮤니티 화제 게시물(반응 규모 등 상세는 접근 제한으로 미확인)
model: 미확인
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course]
source: https://old.reddit.com/r/AI_Agents/comments/1useio9/been_recording_my_repetitive_tasks_and_turning/
---

# 반복 화면 작업 녹화 → MCP 스킬 자동 변환 (r/AI_Agents 화제)

> **공식**: [미상의 MCP 서버]로 record-replay 방식을 활용해 반복적인 화면 작업(웹·데스크톱)을
> 스킬로 자동 변환 → 재사용 가능한 에이전트 스킬 생성 (수치 미확인, 커뮤니티 일화)

## 무엇을 자동화했나

r/AI_Agents에 올라온 게시물로, 작성자가 자신이 반복 수행하던 화면 작업(웹·데스크톱)을
녹화해 에이전트가 재사용할 수 있는 "스킬"로 자동 컴파일하는 도구를 소개했다는 내용이다.
공개 저장소로 배포된 MCP 서버로 구현되어 있다고 하나, 정확한 프로젝트명·저장소 링크는
원문 댓글에 있는 것으로 보이며 이 조사에서는 접근하지 못했다(Reddit 페이지 접근 제한 —
`old.reddit.com`, `www.reddit.com`, JSON API 모두 이 환경에서 fetch 불가).

## 어떻게 구성했나 (아키텍처)

뉴스레터 요약 기준(원문 직접 확인 불가, 교차검증 필요):

- 사용자가 워크플로우를 한 번 시연하면, 네이티브 접근성(accessibility) 이벤트와 화면
  녹화를 동시에 캡처해 시각적 맥락을 함께 저장.
- 캡처된 시연에서 입력값을 템플릿화해 재사용 가능한 스킬로 컴파일.
- 결과물은 agentskills.io 표준을 따르는 `SKILL.json` + `SKILL.md`.
- MCP 서버로 배포되어, 에이전트가 스스로 녹화 시작·중지·컴파일을 트리거할 수 있는
  구조라고 서술됨.
- Windows·macOS·Linux 지원이라고 언급됨.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 미확인 (접근성 이벤트·화면 녹화 캡처 시 필요한 OS 권한 수준 불명) |
| 성숙도 | prototype (개인 프로젝트로 추정, 벤더/회사 확인 안 됨) |

## 성과와 수치

- **일화(anecdotal)**: 커뮤니티 게시물 자체가 화제라는 것 외에, 처리 속도·정확도 등
  구체 수치는 원문 접근 제한으로 확인하지 못했다.
- 게시일(2026-07-10 추정)과 스레드 존재만 확인되며, 추천 수·댓글 수·독립 검증은 미확인.

## 재현 가이드

- **난이도**: 상 (접근성 API 연동 + 화면 녹화 + 스킬 컴파일 파이프라인을 직접 구축해야
  하며, 원 저자의 구현 세부가 공개 저장소에 있는지 여부도 불확실)
- **준비물**: OS 접근성 API 접근 권한, 화면 녹화 도구, agentskills.io 형식의 스킬
  컴파일러, MCP 서버 프레임워크
- **핵심 단계** (원문 미확인 상태이므로 개념적 재구성):
  1. 사용자가 반복 업무를 한 번 수행하며 접근성 이벤트 + 화면을 함께 기록
  2. 기록에서 반복 가능한 입력값(파라미터)을 식별해 템플릿화
  3. `SKILL.json`/`SKILL.md` 형식으로 컴파일
  4. MCP 서버를 통해 에이전트가 녹화·컴파일을 스스로 트리거하도록 노출

## 강의·AX 활용 포인트

- "한 번의 시연으로 에이전트 스킬을 만든다"는 record-replay 패턴은 [[codex-record-replay-automations]]
  (OpenAI 공식 기능)와 개념적으로 동일한 방향이라, 두 사례를 나란히 놓고 "커뮤니티發
  아이디어가 공식 기능으로 수렴하는 흐름"을 보여주는 강의 소재로 쓸 수 있다.
- AX 관점에서는 아직 검증되지 않은 개인/커뮤니티 프로젝트이므로, 파일럿 검토 전
  프로덕션 도입 근거로 인용하지 않도록 주의가 필요하다.
- 원문 재확인이 필요한 항목: 도구/프로젝트명, 저장소 링크, 실제 사용 지표. 접근 가능한
  환경에서 재조사 권장.

## 출처

- [Reddit r/AI_Agents — "Been recording my repetitive tasks and turning..."](https://old.reddit.com/r/AI_Agents/comments/1useio9/been_recording_my_repetitive_tasks_and_turning/) (본 조사에서는 접근 제한으로 원문 직접 확인 불가, 뉴스레터 요약 기반)
