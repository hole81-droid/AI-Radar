---
type: use-case
date: 2026-09-25
tools: [claude-code]
mechanism: [hooks, second-brain]
domain: dev-automation
task: Claude Code 세션 간 프로젝트 결정·제약·버그·TODO 자동 기억
outcome: 미확인(오픈소스 초기 단계, GitHub 66 stars·3 forks)
model: 미확인 (외부 채점 API "Jev" 사용, 기반 모델 비공개)
cost: 미확인
permissions: 로컬 실행 전 비밀값·이메일·카드번호 형태 스크러빙(자체 명시)
maturity: prototype
evidence: claimed
importance: low
uses: [course]
source: https://github.com/Avinash-jetwani/jevmem
---

> **공식**: Claude Code용 오픈소스 도구 jevmem이 "Jev" 채점 API(hooks)를 활용해 세션 간
> 프로젝트 메모리를 자동 기록 → 초기 오픈소스 단계(66 stars), 정량 성과는 미확인

## 무엇을 자동화했나

같은 날(09-25) r/AI_Agents에서 "Memory layer for AI agents is totally FUCKED"라는
불만 글이 화제가 될 만큼, 세션 간 컨텍스트를 잃어버리는 문제는 코딩 에이전트 사용자들의
공통 고충이다. jevmem은 이 문제를 겨냥해 Claude Code(+Cursor·Codex)의 대화 중 결정·
제약조건·버그·할일을 자동으로 판별해 한 줄 요약으로 저장하고, 다음 세션에서 다시
불러오는 오픈소스 메모리 레이어다.

## 어떻게 구성했나 (아키텍처)

- **4단계 파이프라인**: ① 스크러빙 — 비밀값·이메일·카드번호 형태 데이터를 로컬에서
  먼저 제거 ② Jev 채점 — TypeSafe AI의 외부 API "Jev"에 "이 내용이 결정/규칙/버그/
  인젝션 시도인가"를 고정 질문으로 물어 확률 점수를 받음 ③ 임계값 로직 —
  `jevmem.config.json`의 코드 규칙이 저장 여부를 결정 ④ 메모리 쓰기 — 200자 이내
  한 줄 요약을 생성하고, 기존 항목을 갱신할 때는 삭제 대신 "[superseded]" 표시.
- **설계 철학**: 풀 LLM 기반 요약 대신 가벼운 확률 점수 API(Jev)로 판단해 속도·비용을
  낮추는 방향을 택했다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Jev API의 기반 모델 비공개) |
| 비용 | 미확인 |
| 권한 | 로컬 실행 전 스크러빙(비밀값·이메일·카드번호 패턴 제거)만 자체 명시 |
| 성숙도 | prototype (GitHub 66 stars·3 forks, 초기 단계) |
| 근거 수준 | claimed (제작자 README 서술, 독립 벤치마크 없음) |

## 성과와 수치

리포지토리에 정량적 전후 비교나 벤치마크 결과가 없다 — **미확인**. 스타·포크 수(66/3)
정도가 유일하게 확인 가능한 채택 지표다.

## 재현 가이드

**난이도: 중** (config.json 임계값 튜닝, 외부 Jev API 키 필요)

준비물:
- Claude Code(또는 Cursor·Codex) 환경
- TypeSafe AI "Jev" API 접근
- `jevmem.config.json` 임계값 설정

핵심 단계:
1. 저장 전 비밀값·개인정보를 걸러내는 스크러빙 단계를 먼저 구성한다.
2. Jev API로 대화 turn 단위 확률 점수(결정/규칙/버그/인젝션 여부)를 받는다.
3. 프로젝트 특성에 맞게 저장 임계값을 config로 조정한다.
4. 기존 메모리 갱신 시 삭제 대신 "superseded" 표시로 이력을 남긴다.

## 강의·AX 활용 포인트

- **강의**: "메모리 파일이 아니라 대화 기록 자체가 개선의 원천"이라는 기존 위키 실측
  결과([[andrewjesson-claude-code-conversation-vs-memory-self-improvement]])와 대비해
  "그렇다면 대화에서 무엇을 골라 기억할지 자동화하는 계층"이 왜 필요한지 설명하는
  교재로 묶어 쓸 수 있다.
- **AX**: 에이전트 메모리 설계가 아직 표준화되지 않은 영역임을 보여주는 사례 — 사내
  에이전트 도입 시 "세션 간 기억"을 자체 구축할지, 검증된 벤더 솔루션을 기다릴지 판단할
  때 이런 초기 오픈소스 시도들의 성숙도(66 stars, 벤치마크 없음)를 근거로 신중론을
  펼 수 있다.

## 출처

- [GitHub — Avinash-jetwani/jevmem](https://github.com/Avinash-jetwani/jevmem)
- [Hacker News(59점) — Jevmem – automatic project memory for Claude Code, built on Jev](https://news.ycombinator.com/item?id=49846391)
