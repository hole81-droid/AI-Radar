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
