---
type: use-case
date: 2026-11-10
tools: [claude-code]
mechanism: [skills]
domain: education
task: 에이전트가 강의 대신 질문으로 학습자를 가르치는 소크라테스식 튜터링 세션 운영
outcome: 미확인 (스킬 파일 공개, 성과 수치 없음)
model: 미확인
cost: 미확인
permissions: 읽기 전용 대화 (세션 상태 저장 명령만 제공)
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course]
programs: [AI Leader Program (팀장)]
source: https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md
---

# Jane Street — "Socratic Tutor" 에이전트 스킬 공개 (HN 715점)

> **공식**: 코딩 에이전트의 Skill(SKILL.md)을 활용해 소크라테스식 학습 세션 운영을 수행 → 성과 수치 미확인 (스킬 설계 공개)

## 무엇을 자동화했나

사용자가 "가르쳐줘·퀴즈 내줘·연습시켜줘"라고 명시했을 때만 켜지는 튜터링 모드. 설명하지 않고 **질문으로 가르친다**. 일회성 질문에는 평소처럼 답한다.

## 어떻게 구성했나 (아키텍처)

102줄짜리 `SKILL.md` 하나로 구성(GitHub `janestreet/agent_skills`).

- **시작**: 주제를 4~10개 하위 기술로 분해, 진단 질문 3~5개로 출발점 제안.
- **스킬 맵**: 하위 기술별 0~5단계(미인지~가르칠 수 있음)를 ASCII 진행바로 표시.
- **루프**: 질문은 한 번에 하나, 오답엔 더 좁은 질문으로 파고들기, 직접 설명은 2~3번 실패한 뒤에만 하고 다른 각도로 재검증.
- **엄격한 승급 규칙**: 두 개의 독립 점검(그중 하나는 힌트 없는 회상)을 통과해야 단계 상승, 애매한 답은 정답 불인정, 간격 복습을 예고 없이 끼워 넣고 실패 시 단계 하락, 5단계는 반례·적대적 질문 처리와 설명 능력 요구. 칭찬 금지.
- **사용자 명령**: show progress, harder/easier, just tell me, save state, resume from.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 대화형, 상태 저장 명령만 |
| 성숙도 | prototype — Jane Street 내부 사용 방식은 페이지에 없음 |
| 근거 | anecdotal — 설계 문서만 공개, 효과 측정 없음 |

## 성과와 수치

효과 수치는 없다. 확인되는 사실은 설계 파라미터(하위 기술 4~10개, 진단 3~5문항, 독립 점검 2회, 기본 목표 4/5)뿐이다.

## 재현 가이드

- 난이도: **하** (SKILL.md를 가져와 쓰면 됨)
- 준비물: Skills를 지원하는 에이전트(Claude Code 등), 학습 주제
- 핵심 단계: ① 파일을 skills 폴더에 배치 ② "X를 가르쳐줘"로 시작 ③ 진행바로 약점 확인 ④ save state로 중단·재개

## 강의·AX 활용 포인트

- **course**: "AI가 정답을 알려주는 도구가 아니라 학습자를 검증하는 도구"로 쓰는 설계 패턴의 실물 템플릿. 팀장·구성원 대상 AI 학습 모듈에서 학습자가 AI와 함께 자기 직무 개념을 점검하는 실습에 그대로 쓸 수 있다. 같은 주간 [[2026-10-22-anthropic-agent-skills-agentic-ai-foundation]]의 Skills 표준 확산과 연결.
- 학습 시간·성과는 미확인이므로 도입 전 소규모 파일럿으로 검증.

## 출처

- [janestreet/agent_skills — socratic-tutor](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md)
- [HN 토론 (715점, 11-10)](https://news.ycombinator.com/item?id=50438261)
