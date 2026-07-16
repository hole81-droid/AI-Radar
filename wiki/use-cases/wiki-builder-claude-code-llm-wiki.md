---
type: use-case
date: 2026-05-01
tools: [claude-code]
mechanism: [skills, second-brain]
domain: research
task: Claude Code 스킬/플러그인으로 LLM이 관리하는 지식베이스(위키)를 자동으로 짜고 유지보수
outcome: 한 문장 명령으로 위키 폴더 구조·설정·프롬프트 템플릿 자동 배치, 벡터DB 없이 순수 마크다운 기반 자가 유지보수
model: 미확인
cost: 미확인
permissions: 미확인
maturity: pilot
evidence: claimed
importance: medium
uses: [course, ax]
source: https://academy.dair.ai/blog/wiki-builder-claude-code-plugin
---
# Wiki Builder — Claude Code로 LLM 지식베이스를 자동으로 짜고 유지보수

> **공식**: Claude Code 플러그인(스캐폴딩+프롬프트 템플릿+SKILL.md)을 활용해 지식베이스 구축·컴파일·유지보수 전 루프를 수행 → 한 문장 명령으로 위키 구조 자동 배치, 벡터DB 없이 순수 마크다운 기반 자가 유지보수

## 무엇을 자동화했나

dair.ai Academy가 공개한 Claude Code 플러그인. "start a new wiki on agent memory using the
research flavor" 같은 한 문장 명령으로 위키 폴더 구조·설정 파일·프롬프트 템플릿을 자동
배치하고, 이후 raw 자료 저장 → 에이전트가 구조화된 위키 페이지로 컴파일 → 질문에 답하며
위키에 자동 저장 → 얇은 페이지·누락 링크 등을 정기적으로 점검하는 유지보수까지 지식베이스
구축의 전체 루프를 자동화한다.

## 어떻게 구성했나 (아키텍처)

- **스캐폴딩 스크립트**: 폴더 레이아웃(원본/컴파일된 페이지/설정)을 자동 생성.
- **프롬프트 템플릿**: 색인·페이지·개념을 컴파일하는 규칙을 사전 정의.
- **SKILL.md**: 에이전트에게 위키 관리 워크플로우(수집→컴파일→질의응답→유지보수 점검)를
  가르치는 지침 파일.
- 벡터DB 없이 순수 마크다운 파일 기반으로 동작 — 별도 인프라 없이 저장소 자체가 지식베이스.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 미확인 |
| 성숙도 | pilot (플러그인 공개, 대규모 실사용 사례는 원문에 없음) |

## 성과와 수치

- 정량 수치는 원문에 없음 — **주장(claimed)** 수준의 설계 소개.
- 이 위키(AI Radar) 자체가 이미 구조적으로 동일한 "LLM이 관리하는 위키" 패턴을 실제 운영
  중이라는 점에서, 이 패턴의 실현 가능성은 [[ai-radar-daily-scan-pipeline]]으로 간접 검증된다.

> ⚠️ 상충 아님 — 독립 재현 사례 추가(2026-07-16): dair.ai 플러그인과 별개로, Claude Code +
> Obsidian 조합으로 같은 패턴을 구현한 사례가 커뮤니티에서 공유됐다. 볼트 구조를
> `CLAUDE.md`(규칙서)·`Raw/`(원본, 수정 금지)·`Inbox/`(대기)·`Wiki/`(Index·Log·Entities·
> Concepts·Summaries)로 나누고, "Ingest"(원본 저장→요약→관련 엔티티/개념 페이지에 정보
> 전파("Ripple")→색인 갱신)와 "Query"(색인부터 읽고 관련 페이지만 열람, 인용 포함 응답) 두
> 명령으로 운영한다. 정기 "lint" 커맨드로 모순·고아 페이지·누락 링크를 점검한다는 점까지 이
> 저장소(AI Radar)의 실제 운영 방식과 구조적으로 거의 동일 — 서로 다른 두 팀이 독립적으로
> 수렴한 설계라는 점에서 이 패턴의 타당성을 한 번 더 뒷받침한다.
> 출처: [natural20.com — Using Claude Code to set up a second brain (aka LLM wiki)](https://natural20.com/using-claude-code-to-setup-a-second-brain-aka-llm-wiki),
> [Reddit r/ClaudeAI — Claude Code and Obsidian as an AI-maintained second brain](https://old.reddit.com/r/ClaudeAI/comments/1uwrxbo/claude_code_and_obsidian_as_an_aimaintained/)

## 재현 가이드

- **난이도**: 중
- **준비물**: Claude Code, 마크다운 저장소, SKILL.md 작성 능력
- **핵심 단계**:
  1. 폴더 레이아웃(raw/원본, wiki/컴파일본, index)을 스캐폴딩 스크립트로 생성
  2. 색인·페이지·개념 컴파일 규칙을 프롬프트 템플릿으로 고정
  3. SKILL.md에 수집→컴파일→질의응답→유지보수 점검 루프를 명시
  4. 벡터DB 없이 grep·파일 탐색 기반으로 동작하게 설계해 인프라 비용을 낮춤

## 강의·AX 활용 포인트

- 이 저장소(AI Radar)가 이미 수행하고 있는 패턴과 정확히 같은 발상이라, 강의에서 "왜 이런
  구조로 설계했는가"를 설명할 때 외부 검증 사례로 바로 인용할 수 있다.
- AX 관점: 사내 지식관리를 에이전트가 스스로 유지보수하게 하는 사례로, 벡터DB·RAG 인프라
  투자 없이도 시작할 수 있다는 진입장벽 낮은 대안으로 제시 가능.

## 출처

- [dair.ai Academy — Wiki Builder Claude Code Plugin](https://academy.dair.ai/blog/wiki-builder-claude-code-plugin)
- [natural20.com — Using Claude Code to set up a second brain (aka LLM wiki)](https://natural20.com/using-claude-code-to-setup-a-second-brain-aka-llm-wiki) (2026-07-16 추가)
- [Reddit r/ClaudeAI — Claude Code and Obsidian as an AI-maintained second brain](https://old.reddit.com/r/ClaudeAI/comments/1uwrxbo/claude_code_and_obsidian_as_an_aimaintained/) (2026-07-16 추가)
