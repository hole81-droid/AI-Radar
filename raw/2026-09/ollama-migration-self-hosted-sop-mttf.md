# patrickmccanna.net — "Notes on gotchas while migrating large preprompts away from Anthropic/OpenAI to self-hosted LLMs" (원본 요약)

- 원문: https://patrickmccanna.net/notes-on-migrating-large-prompts-away-from-anthropic-openai-to-self-hosted-llms/
- HN: 139점 (2026-09-14 게시, https://news.ycombinator.com/ 검색 확인)

## 배경

35KB짜리 대형 프리프롬프트(시스템 프롬프트)를 Claude Opus(Anthropic) 기반에서
자체 호스팅 Ollama(로컬 하드웨어: AMD Ryzen AI MAX+ 395, 128GB 중 96GB를
추론에 할당)로 옮기며 겪은 문제와 해법 정리.

## 문제

- 35KB 프리프롬프트가 65K 토큰짜리 로컬 컨텍스트 창의 **14%를 즉시 소모**.
- 컨텍스트가 포화되자 3분 안에 에이전트가 반복 툴콜에서 헛돌고(thrash), 이미
  읽은 파일을 다시 읽고, 끝난 작업을 다시 쓰는 현상 발생.
- 핵심 통찰: 프론티어 제공사(Anthropic·OpenAI)의 진짜 강점은 모델 성능만이
  아니라 **큰 컨텍스트 창이 Chain-of-Thought에 여유 공간을 주는 것** — 셀프호스팅
  환경에서는 이 여유가 없어 프롬프트 설계의 허점이 즉시 드러난다.

## 해법 — Single Objective Prompting (SOP)

- 거대한 단일 프롬프트를 하나의 목표에 집중한 단위들로 재구성.
- Claude Code의 비정형적 접근에서 OpenCode의 "선언적 에이전트(declarative
  agents)" 방식으로 이전.
- Ollama의 컨텍스트 길이 기본값이 매우 작다는 점을 명시적으로 튜닝.
- 세션 상태를 디스크에 자주 기록(logging)해 핸드오프.
- 스텝당 툴콜 수를 줄이고, "~하지 마라" 식 부정 제약 대신 긍정 지시로 대체.

## 진단 지표 — MTTF (Mean Tokens To Forget)

경고 신호로 정의: 동일한 툴콜 연속 반복, 중복 파일 읽기, 실제 진행 대비 과도한
턴 수.

## 결론

작성자는 프라이버시 보호("프론티어 제공사에 맡기는 모든 것은 결국 활용당한다")를
셀프호스팅의 핵심 이유로 제시하며, 개발자들에게 셀프호스팅 전환을 권장.

## 평가 메모

evidence: anecdotal(1인 경험, 정량적 전/후 비교 수치는 제한적 — 컨텍스트 14%
소모, "3분 내 붕괴" 정도만 구체적). 다만 SOP·MTTF 등 재현 가능한 기법·진단
지표를 제시해 use-case로 승격.
