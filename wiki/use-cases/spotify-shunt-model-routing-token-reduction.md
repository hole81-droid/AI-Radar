---
type: use-case
date: 2026-09-03
tools: [claude-code]
mechanism: [hooks, skills, cli-pipeline]
domain: dev-automation
task: Java 모노레포에서 대용량 파일 읽기·테스트 코드 작성·설정 파일 스캐폴딩을 저비용 모델(Gemini 2.5 Flash)로 자동 위임
outcome: Java 모노레포 4개 시나리오 기준 토큰 사용량 평균 약 90% 절감
model: Claude Code(버전 미기재) → 워커 모델 Gemini 2.5 Flash로 라우팅(포털 인스턴스 설정에 따라 다른 모델 선택도 가능)
cost: 미확인 (절감률(약 90%)만 공개, 절대 비용 수치·건당 비용은 원문에 없음)
permissions: 편집·추론 위임 불가 — bulk-read(대용량 파일 읽기)·code-write(테스트/설정 코드 생성)만 워커 모델에 위임하고, 디버깅·아키텍처 결정·안전 임계 코드는 Claude가 직접 처리
maturity: pilot
evidence: measured
importance: high
uses: [course, ax]
programs: [AI Agent Service 개발자 — LLMOps]
source: https://engineering.atspotify.com/2026/9/portal-by-spotify-cut-my-claude-code-token-usage-by-90
---

> **공식**: Claude Code로 hooks·skills·cli-pipeline 3계층 구조를 활용해 대용량 파일 읽기·테스트/설정
> 코드 생성을 저비용 모델(Gemini 2.5 Flash)로 자동 위임 → Java 모노레포 기준 토큰 사용량 평균 약
> 90% 절감

## 무엇을 자동화했나

Spotify의 Principal Product Manager Dimitri Mazmanov가 사내 플랫폼 "Portal by Spotify"의
AiKA Modes 기능과 이를 Claude Code에 연결하는 자체 플러그인 "Shunt"를 공개했다. Claude Code가
Java 모노레포에서 350줄이 넘는 대용량 파일을 읽거나, 기존 패턴을 따라 테스트·설정 파일을
새로 작성해야 할 때, 이 작업을 최상위 모델(Claude) 대신 저비용 모델(Gemini 2.5 Flash)에
자동으로 넘기도록 설계했다. 핵심 동기는 "2028년까지 개발자당 월 200~500달러(일부는
2,000달러 이상)까지 치솟을 것"으로 예상되는 토큰 비용 추세를, 모든 작업을 최상위 모델에
맡기지 않고 작업 성격별로 모델을 나누는 방식으로 관리하는 것이다.

## 어떻게 구성했나 (아키텍처)

3계층 구조로 위임을 처리한다.

- **Layer 1 — Hooks (PreToolUse)**: 두 개의 후크가 Claude Code의 도구 호출을 가로챈다.
  `check-file-size`는 파일이 설정 가능한 임계값(기본 `SHUNT_MIN_LINES=350`줄)을 넘으면 직접
  읽기를 차단하고 bulk-reader 기술로 우회하도록 지시한다. `check-bash-read`는 `cat`·`head`·
  `tail`·`less`·`more` 등 대용량 파일을 노출할 수 있는 bash 명령을 차단한다(파이프 명령은 예외).
- **Layer 2 — Scripts (bash 래퍼)**: `bulk-read`는 대상 파일을 XML 태그로 감싸 경계를 명확히
  하고 질문과 함께 bulk-reader 모드(Gemini 2.5 Flash)로 전송한다. 재질문 시 파일 재전송은
  워커 모델만 처리하므로 Claude의 컨텍스트 윈도우에는 부담을 주지 않는다. `code-write`는
  명세와 참조 파일을 code-writer 모드로 보내 코드를 생성시키고, 마크다운 펜스를 제거한 뒤
  디스크에 직접 기록한다 — Claude는 생성된 코드 자체를 보지 않는다.
  ```bash
  bulk-read --question "What does this service do?" \
    --paths src/Service.java src/Handler.java

  code-write --spec "Write tests for UserService" \
    --reference tests/OrderTest.java --target tests/UserTest.java
  ```
- **Layer 3 — Skills (마크다운 문서)**: 두 개의 스킬 파일이 Claude에게 "언제·어떻게" 위 스크립트를
  호출할지 지시한다. 인프라를 새로 짜는 대신 선언적 설정(Skill 문서)만으로 라우팅 규칙을 바꿀
  수 있게 한다는 것이 저자가 강조하는 설계 철학이다.

Portal 자체의 접근 제어도 있다 — 모드는 public(전사 공유)·private로 공개 범위를 설정할 수
있고, 해상도는 사용자 > 팀 > 공개 순으로 커스텀 포크가 자동 우선한다.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | Claude Code(버전 미기재), 워커 모델 Gemini 2.5 Flash(포털 인스턴스 설정에 따라 다른 모델도 가능) |
| 비용 | 미확인 — 절감률(약 90%)만 공개, 절대 비용·건당 비용 수치는 원문에 없음 |
| 권한 | 편집·추론(버그 탐지 등 고수준 판단)은 위임 불가. 대용량 읽기·정형화된 코드 생성만 위임 |
| 성숙도 | pilot — Java 모노레포 4개 시나리오로 테스트, 공개 플러그인으로 제공되지만 전사 표준 배포 여부는 원문에 없음 |
| 근거 수준 | measured — 저자가 직접 4개 시나리오를 측정(자사 사례, 외부 검증 없음) |

## 성과와 수치

- **실측**: "Mean bulk-read savings were around a whopping 90%" — Java 모노레포 대상 4개
  시나리오에서 파일 직접 읽기 대비 bulk-reader 요약 방식의 토큰 절감률을 실측 비교한 결과다.
  절대 토큰량·달러 비용은 공개되지 않았다.
- 소형 파일에서는 위임 오버헤드(네트워크 왕복 10~30초)가 절감분을 상회할 수 있어 임계값
  (350줄)을 둔 이유라고 설명한다.
- 저자가 명시한 한계: 워커 모델의 요약에는 신뢰할 만한 라인 번호가 없어 편집 위임은 불가하며,
  스레드 안전성처럼 미묘한 결함은 워커 모델이 놓치는 사례가 보고됐다 — "You can't delegate
  reasoning."

## 재현 가이드

- **난이도**: 중 (Claude Code 플러그인 설치·훅 구성 수준, 별도 인프라 구축은 불필요)
- **준비물**: Claude Code, Portal(또는 유사 사내 AI 게이트웨이) API 접근권, 저비용 워커
  모델(Gemini 2.5 Flash 등) 접근권
- **핵심 단계**:
  1. `claude plugin marketplace add spotify/portal-ai-plugins` → `portal`·`shunt` 플러그인 설치
  2. `/portal:setup`으로 초기 설정
  3. 대용량 파일 읽기를 막는 PreToolUse 훅(`check-file-size`, `check-bash-read`)을 등록하고
     임계 줄 수(`SHUNT_MIN_LINES`)를 정한다
  4. bulk-read/code-write 스크립트가 워커 모델(Gemini 2.5 Flash 등)을 호출하도록 연결한다
  5. Claude에게 "언제 위임할지" 알려주는 스킬 문서 2개를 작성해 배치한다

## 강의·AX 활용 포인트

- **강의**: "모든 작업을 최고 모델에 맡기지 않고 작업 성격별로 모델을 나눈다"는 모델 라우팅
  개념을 hooks·skills·cli-pipeline이라는 Claude Code의 표준 확장 지점만으로 구현한 사례 —
  에이전트 아키텍처 설계 실습에 적합하다.
- **AX**: 토큰 비용이 조직 규모로 커질 때(원문 인용: 2028년 개발자당 월 200~500달러 전망)
  "무엇을 최고 모델에 맡기고 무엇을 위임할지"를 설계 원칙(편집·추론은 위임 불가)과 함께
  제시한 드문 비용 관리 사례. 다만 절감률만 공개되고 절대 비용·전사 배포 여부는 확인되지
  않아 AX 근거로 인용할 때는 "자사 파일럿 사례"라는 단서를 함께 달아야 한다.

## 출처

- [Spotify Engineering — Portal by Spotify: Cut my Claude Code token usage by 90%](https://engineering.atspotify.com/2026/9/portal-by-spotify-cut-my-claude-code-token-usage-by-90) (Dimitri Mazmanov, Principal Product Manager, 2026-09-03)
