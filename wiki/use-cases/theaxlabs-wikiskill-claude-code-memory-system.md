---
type: use-case
date: 2026-09-01
tools: [claude-code]
mechanism: [skills, second-brain, prd-driven]
domain: dev-automation
task: Google Research "WikiSkill" 논문의 3계층 지식구조(raw/wiki/skills)를 Claude Code 메모리 시스템에 실제 적용하는 프롬프트 설계
outcome: 5단계 파이프라인(분석→제안→승인→구현→릴리스노트)으로 논문 개념을 실무 프롬프트로 변환, 원 논문 벤치마크는 정확도 48.7%→63.7%
model: 미확인 (AX LABS 자체 적용 프롬프트는 모델 비종속 설계, 인용 원논문은 Qwen 4B/9B/27B·Gemma 31B·Gemini 3.5 Flash로 검증)
cost: 미확인
permissions: 미확인 (각 단계 사이 사람 승인 대기 지점 존재 — "일시정지 후 승인" 구조가 핵심 설계 원칙)
maturity: prototype
evidence: claimed
importance: medium
uses: [course, ax]
source: https://theaxlabs.com/blog/wikiskill-memory-system-update-prompt-claude-code
---

> **공식**: Claude Code로 skills(스킬 시스템)·second-brain(메모리 계층화)을 활용해
> 연구 논문(WikiSkill)의 3계층 지식구조를 에이전트 메모리 시스템에 이식하는 프롬프트
> 템플릿을 설계 → 5단계 승인 게이트 파이프라인으로 재현 가능하게 정형화

## 무엇을 자동화했나

AX LABS(국내 AX 블로그)가 2026-08-27 공개된 Google Research의 **WikiSkill** 논문을
검토([[#출처|리뷰 글]])한 뒤, 그 핵심 아이디어(에이전트가 실행 로그를 위키 지식으로
누적하고, 그 지식에서 재사용 가능한 "스킬"을 자동 승격시키는 구조)를 **Claude Code의
메모리 시스템에 실제로 적용하는 프롬프트**를 별도 글로 설계·공개했다. "논문을 읽고
아는 것"과 "그 구조를 지금 쓰는 도구에 이식하는 프롬프트를 쓰는 것" 사이의 간극을
메운 실무 적용 사례다.

## 어떻게 구성했나 (아키텍처)

WikiSkill 원 논문의 4요소 순환 구조:
1. **Inference Agent** — 현재 스킬로 작업 수행, 모든 행동을 raw/에 기록
2. **Wiki Maintainer** — 성공/실패를 분석해 재사용 가능한 패턴 문서로 정리
3. **Skill Proposer** — 누적된 위키 지식을 읽고 원자적(단일 기능) 스킬 개선을 제안
4. **Gating(승인 게이트)** — 성능이 실제로 개선될 때만 롤포워드, 기각된 제안도
   위키에 남겨 같은 실수 반복을 방지

AX LABS가 이를 Claude Code에 적용하며 설계한 **5단계 프롬프트 파이프라인**:
1. 현재 시스템 상태 분석
2. 우선순위화된 구현 포인트 생성 → **사람 승인 대기**
3. 승인된 항목만 구현
4. 수정 단위별 커밋
5. 릴리스 노트 생성

핵심 설계 원칙은 "지식 계층(wiki/)은 런타임 참조가 아니라 개발 도구로 기능해야 한다"
— 즉 실행 중인 에이전트가 위키를 직접 참조하게 하지 않고, 스킬 제안 시스템만
위키에 접근하게 분리했다. 이 저장소(AI Radar)의 `raw/`(불변 원본)·`wiki/`(구조화
지식)·자동 스캔 파이프라인 구조와 개념적으로 유사하다.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 미확인 (적용 프롬프트 자체는 모델 비종속 설계) |
| 비용 | 미확인 |
| 권한 설계 | 단계 2→3 사이 사람 승인 게이트 명시 (완전 자동화가 아님) |
| 성숙도 | prototype (AX LABS의 적용 프롬프트 공개, 실사용 사례 축적은 미확인) |
| evidence | claimed (원 논문 벤치마크는 measured, AX LABS 적용 자체의 효과 실측은 없음) |

## 성과와 수치

- **원 논문(WikiSkill) 벤치마크**: 수학 추론·웹 검색·스프레드시트 조작·문서 QA·
  임바디드 태스크 5종 벤치마크에서 위키 계층 추가로 평균 정확도 **48.7% → 63.7%**
  향상(measured, Qwen 4B/9B/27B·Gemma 31B·Gemini 3.5 Flash로 검증). 스킬은 모델
  간 전이 가능하지만 모델 특화 우회책이 섞이면 전이 시 성능이 떨어질 수 있고,
  작은 모델이 큰 모델의 스킬을 받으면 상당한 향상을 보였다.
- **AX LABS 적용 자체의 효과**: 실측 수치 없음(claimed) — "이런 구조로 프롬프트를
  짜면 재현 가능하다"는 방법론 제시가 핵심이며, 실제 프로덕션 적용 결과는 아직
  공개되지 않았다.

## 재현 가이드

- **난이도**: 중 (프롬프트 엔지니어링 + Claude Code 메모리 훅 이해 필요, 별도 인프라
  구축은 불요)
  - 준비물: Claude Code, CLAUDE.md 또는 스킬 파일을 위키형으로 구조화할 저장소
  - 핵심 단계 4가지:
    1. raw(원본 로그)·wiki(정제 지식)·skills(실행 절차) 3계층을 파일/디렉토리로 분리
    2. "현재 상태 분석 → 우선순위 제안" 프롬프트로 스킬 개선 후보를 뽑아내기
    3. 사람이 승인한 항목만 구현하도록 승인 게이트를 프롬프트에 명시
    4. 수정 단위별 커밋 + 릴리스 노트 자동 생성으로 변경 이력을 위키에 축적

## 강의·AX 활용 포인트

- **강의**: "연구 논문 → 실무 프롬프트" 변환 과정 자체가 좋은 교육 소재 — 논문의
  추상적 아키텍처(4요소 순환)를 실제 도구의 승인 게이트 워크플로로 옮기는 사고
  과정을 단계별로 보여준다.
- **AX**: 에이전트가 스스로 학습·개선하는 시스템을 도입하려는 조직에 "완전 자동
  롤아웃이 아니라 사람 승인 게이트를 명시적으로 두라"는 설계 원칙을 제공한다.
  이 위키(AI Radar)의 raw/wiki 분리 구조와 사상이 겹쳐 자기참조적으로도 유효성을
  검증할 수 있는 사례다.

## 출처

- [AX LABS — WikiSkill 논문을 Claude Code 메모리 시스템에 적용하는 프롬프트 (2026-09-01)](https://theaxlabs.com/blog/wikiskill-memory-system-update-prompt-claude-code)
- [AX LABS — WikiSkill 논문 리뷰 (2026-09-01)](https://theaxlabs.com/blog/wikiskill-paper-review-agent-skill-evolution)
- 원 논문: Google Research, "WikiSkill"(2026-08-27 공개, 제목·arXiv 링크는 AX LABS 글 인용 기준)
