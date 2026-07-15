---
type: use-case
date: 2026-07-11
tools: [codex]
mechanism: [record-replay, cron-routines]
domain: ops
task: Codex Record & Replay 스킬과 Automations로 반복 사무 업무(리포트 추출·CRM 정리 등)를 코드 없이 자동화
outcome: 화면 녹화만으로 스킬을 만들고 예약 실행까지 연결 (구체 처리시간·비용 수치는 공식 문서에 미공개)
model: 미확인
cost: 미확인
permissions: 미확인
maturity: production
evidence: claimed
importance: high
uses: [course, ax]
source: https://developers.openai.com/codex/use-cases/reusable-codex-skills
---

# Codex Record & Replay + Automations — 코드 없는 반복 업무 자동화

> **공식**: Codex로 record-replay 방식의 스킬 생성과 Automations 예약 실행을 활용해
> 리포트 추출·CRM 정리 등 반복 사무 업무를 수행 → 화면 녹화 한 번으로 스킬화, 예약 등록만으로
> 완전 자동 실행 (공식 기능, 구체 수치는 미공개)

## 무엇을 자동화했나

OpenAI 공식 Codex 문서(개발자 포털)가 소개하는 워크플로우로, 반복적인 사무 업무를
"화면 녹화 → 스킬 생성 → 예약 실행"까지 코드 작성 없이 구성하는 공식 기능이다. 뉴스레터에서
확인된 구체 활용 예시로는 Google Search Console 리포트 내보내기·국가 필터링·CSV
다운로드 후 클라이언트 폴더 이동, 월간 애널리틱스 추출, YouTube 업로드 체크리스트, CRM
정리 등이 있다. 이 조사에서 직접 접근한 공식 문서 페이지(`reusable-codex-skills`,
`developers.openai.com` → `learn.chatgpt.com`으로 리다이렉트)는 스킬 생성의 일반
메커니즘(`$skill-creator`, `SKILL.md` 구조, `~/.codex/skills` 저장 위치)을 확인해주지만,
Record & Replay의 화면 녹화 캡처 방식이나 GSC·CRM 등 개별 사례의 세부 수치는 이번
페이지에서 직접 확인되지 않았다 — 뉴스레터가 정리한 별도 콘텐츠(영상 데모 등 텍스트
변환 시 누락되는 요소일 가능성)를 근거로 기재했다.

## 어떻게 구성했나 (아키텍처)

- **1단계 — 녹화/시연**: 반복 업무를 화면 녹화하며 한 번 수행(또는 문서에서 확인된 방식대로
  진행 중이던 Codex 작업을 그대로 활용 — "use this task"라고 지시).
- **2단계 — 스킬 변환**: Codex가 같은 앱·브라우저·데스크톱 단계를 재현할 수 있는 재사용
  가능한 스킬로 변환. `$skill-creator` 도구가 워크플로우 정보를 수집하고 스킬을 스캐폴딩,
  핵심 지시문을 간결하게 유지, 결과를 검증하는 역할을 한다(공식 문서 확인).
- **3단계 — 저장 구조**: 스킬은 `SKILL.md`(필수) + `references/`·`scripts/`·`assets/`
  (선택) 폴더로 구성되며, 전역 스킬은 `~/.codex/skills`에, 저장소 전용 스킬은 해당 repo
  안에 저장돼 팀과 공유(커밋)할 수 있다(공식 문서 확인).
- **4단계 — 호출/예약**: 슬래시 명령(`$스킬명`)으로 즉시 호출하거나, Automations에 반복
  일정으로 등록해 완전 무인 실행.
- **권장 패턴(공식 문서 확인)**: 스킬 파일을 처음부터 직접 작성하지 말고, 먼저 대화로
  원하는 결과를 한 번 얻은 뒤(좋은 예시·소스 자료·재사용할 스크립트·완성된 결과물을
  제공) 그 과정을 역설계해 스킬로 추출하라는 것이 공식 권장 워크플로우다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (문서에 Codex가 사용하는 기반 모델 명시 없음) |
| 비용 | 미확인 |
| 권한 | 미확인 (Automations 예약 실행 시 필요한 접근 권한 범위 불명) |
| 성숙도 | production (공식 기능으로 문서화·정식 제공) |

## 성과와 수치

- **주장(claimed)**: "화면 녹화만으로 반복 업무를 코드 없이 스킬화하고 예약 자동 실행할
  수 있다"는 공식 문서의 기능 설명이며, 처리 시간 단축·비용 절감 등 정량적 실측 수치는
  이번에 확인한 문서 페이지에는 없다.
- Skills 일반 사용 예시(`$buildkite-fix-ci`, `$pr-review-comments`, `$frontend-skill` 등)는
  개발 워크플로우 중심이며, GSC·CRM 등 비개발 사무 업무 사례는 별도 콘텐츠 확인이
  필요하다.

## 재현 가이드

- **난이도**: 중 (Codex 계정과 대상 워크플로우만 있으면 되지만, 안정적인 재현을 위해선
  좋은 시연 예시·소스 자료 준비가 중요)
- **준비물**: Codex CLI/앱 접근권, 자동화 대상 업무의 좋은 실행 예시(완료된 작업·문서·
  스크립트·최종 결과물), Automations 예약 등록 권한
- **핵심 단계**:
  1. 자동화하고 싶은 업무를 한 번 정상적으로 수행(직접 시연 또는 기존 Codex 작업 재사용)
  2. `$skill-creator`에 작업 예시·소스 자료·재사용 스크립트·좋은 결과물을 제공해 스킬 생성
  3. 생성된 `SKILL.md`를 검증하고 핵심 지시문을 간결하게 다듬기
  4. 전역(`~/.codex/skills`) 또는 저장소 스킬로 저장해 팀과 공유
  5. 반복 주기가 있는 업무는 Automations에 일정 등록해 무인 실행으로 전환

## 강의·AX 활용 포인트

- "시연 한 번 → 재사용 스킬"이라는 record-replay 패턴은 비개발자도 이해하기 쉬운
  자동화 진입점으로, 강의에서 코딩 없는 업무 자동화의 대표 예시로 쓰기 좋다.
- AX 관점에서는 사무직 반복 업무(리포트 추출, CRM 정리)를 대상으로 한 저난이도 자동화
  ROI 사례로 인용 가능하나, 실측 수치가 없으므로 사내 파일럿으로 효과를 검증한 뒤
  확산하는 접근이 필요하다.
- 관련 사례: [[record-replay-mcp-skill-recorder]] — 동일한 record-replay 개념을 다루는
  커뮤니티발 프로토타입과 비교해 "공식 기능 vs 커뮤니티 실험"을 함께 다룰 수 있다.

## 출처

- [OpenAI Codex 공식 문서 — Save workflows as skills](https://developers.openai.com/codex/use-cases/reusable-codex-skills) (리다이렉트: `learn.chatgpt.com/use-cases/reusable-codex-skills`)
