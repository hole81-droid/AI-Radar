# liao.gg — "Agents Don't Need Memory. They Need Documentation." (Kevin Liao)

> 수집일: 2026-10-05 / 발행일: 2026-10-03 (추정, HN 게시 기준)
> 원문: https://liao.gg/blog/agents-dont-need-memory
> Hacker News: https://news.ycombinator.com/item?id=49945933 (330점)

## 핵심 내용 (WebFetch 요약)

- 저자 Kevin Liao(GitHub: aerovato)는 현재 AI 에이전트 "메모리" 플러그인들이
  RAG(벡터 임베딩+유사도 검색) 방식에 의존하는 것이 잘못된 전제라고 주장한다.
- RAG 메모리의 5가지 구조적 결함:
  1. 유사도로만 호출되고 정확성과 무관하게 표면화됨
  2. 저장된 조각에 주변 맥락이 빠져 있음
  3. 코드베이스가 바뀌어도 과거 정보가 그대로 낡음
  4. "모르는 것을 모른다" — 미지의 정보를 능동적으로 찾을 수 없음
  5. 임베딩 저장소 자체가 감사 불가능한 블랙박스
- 대안: 벡터DB·임베딩·요약기·백그라운드 데몬 없이 `internal/` 폴더 아래
  스펙·계획·리서치·인덱스·결정기록을 평문 마크다운으로 관리.
- 작업 루프: "prompt → build → forget" → "prompt → consult → build → update"로 전환.
- 오픈소스 도구 "Operator Memory" 공개 (github.com/aerovato/operator-memory).
- 특정 코딩 에이전트(Claude Code, Codex, Cursor 등)에 종속되지 않는 범용 워크플로.
- 정량적 전후 비교 수치는 제시되지 않음 — 논증 중심 글.

## 메모

- wiki/use-cases/liao-agents-documentation-not-memory.md 로 구조화 반영
  (mechanism: second-brain, evidence: anecdotal, maturity: prototype).
- AI Radar 이 저장소 자체가 벡터DB 없이 마크다운만으로 지식을 관리하는 동일 패턴이라
  교육 소재로 교차 인용 가능.
