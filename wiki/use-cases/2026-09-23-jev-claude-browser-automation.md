---
type: use-case
date: 2026-09-23
tools: [claude, claude-code]
mechanism: [browser-agent, cli-pipeline]
domain: personal-productivity
task: 웹 브라우저 조작 작업(쇼핑·리서치·데이터 수집 등) 자동화
outcome: 구글 항공권 예약 작업 7.1초 완료, 브라우저 프로토콜 호출 91%↓(1,092→101)
model: 미확인 (Jev 자체는 TypeSafe API + 소형 텍스트 모델 조합, Claude와의 오케스트레이션 구조는 영상에서 구체 명시 안 됨)
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: measured
importance: medium
uses: [course, ax]
source: https://www.youtube.com/watch?v=L2K__oshGds
---

> **공식**: Claude(Code)로 오픈소스 초고속 브라우저 에이전트 **Jev**(TypeSafe AI)를 결합해
> 웹 브라우저 작업 자동화 워크플로우 6종을 시연 → 구글 항공권 예약 같은 브라우저 작업을
> 초 단위(7.1초)로, 기존 대비 브라우저 프로토콜 호출 91% 감소로 완료.

## 무엇을 자동화했나

유튜버 Ben AI가 오픈소스 브라우저 자동화 라이브러리 **Jev**(저장소:
`browser-use/jev-ultrafast`, TypeSafe AI 개발)를 Claude와 결합해 "실전 업무 자동화"
6개 사례를 시연했다(영상 챕터 00:00 인트로 → 02:43부터 Use Case #1~#6, 08:10 종료).
영상 설명란에는 "Jev 문서를 Claude에게 줘라"는 안내가 있어, 사용자가 Claude(Code)에게
Jev의 API 문서를 읽힌 뒤 이를 호출하는 자동화 스크립트·에이전트를 직접 짜게 하는
패턴으로 보인다 — 다만 각 Use Case별 구체적 업무 내용(쇼핑/리서치/데이터 입력 등
무엇인지)은 영상 설명란에 텍스트로 명시되지 않아 **세부는 미확인**이다.

## 어떻게 구성했나 (아키텍처)

Jev 저장소(`jev-ultrafast`)의 공개 기술 문서에 따르면:

- **동적 인덱스 액션 스페이스**: 페이지 스냅샷을 찍어 요소 테이블을 만들고, TypeSafe API에
  **단일 네트워크 왕복**으로 "어떤 작업을 할지 + 어떤 요소를 대상으로 할지"를 함께 묻는다.
- 작업이 텍스트 입력(`TYPE_TEXT`)일 때만 별도의 소형 LLM이 텍스트를 생성한다 — 나머지
  탐색·클릭 동작은 대형 모델 호출 없이 처리돼 속도가 빠르다.
- 실행 직전 DOM을 재검증해 선택한 대상이 유효한지 확인한다.
- 텍스트 생성 모델은 OpenRouter·Gemini·GLM 등과 연동 가능(문서 기준). **Claude/Claude
  Code와의 통합은 저장소 문서에 직접 명시돼 있지 않다** — Ben AI 영상에서 둘을 결합해
  쓰는 사용 패턴을 시연한 것으로, "Claude가 상위 오케스트레이션/스크립트 작성을 맡고
  Jev가 실제 브라우저 조작을 초고속으로 수행" 하는 역할 분담으로 추정된다(추정 표시).

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Claude 사용 여부는 영상에서 시사되나 구체 모델명 없음) |
| 비용 | 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | prototype (오픈소스 라이브러리, 공식 프로덕션 사례 아님) |

## 성과와 수치

Jev 저장소 자체 벤치마크(구글 플라이트 예약 시나리오, 취리히→런던 검색, **measured**):

- 완료 시간 **7.1초**(페이지 로딩 포함)
- 6회 반복 테스트 중앙값 **9.45초 → 7.09초**(약 25% 개선)
- 브라우저 프로토콜 호출 수 **1,092 → 101**(약 91% 감소)

Ben AI 영상이 보여준 "6개 실전 사례"의 개별 성과 수치는 영상 설명란·자막 확인 범위
안에서는 확보하지 못해 **미확인**이다. 같은 시기 r/AI_Agents에도 Jev를 프로덕션
환경에서 실제 사용자 의도(intent) 299건 기준으로 baseline과 비교 테스트했다는
게시물이 올라와("299 real user intents tested Jev against production baseline") 커뮤니티
차원의 실사용 검증이 진행 중임을 시사하지만, 본문은 Reddit 레이트리밋으로 이번
스캔에서 확보하지 못했다 — 후속 스캔에서 재확인 필요.

## 재현 가이드

- **난이도**: 중 (오픈소스 저장소·API 키 필요, Claude Code로 통합 스크립트 작성 필요)
- **준비물**: TypeSafe AI API 키(jev), `browser-use/jev-ultrafast` 저장소, Claude/Claude Code
- **핵심 단계**:
  1. Jev 문서(`docs.typesafe.ai`)를 Claude(Code)에 컨텍스트로 제공
  2. 목표(goal) 단위로 브라우저 작업을 정의 — "무엇을 할지"만 지정하면 Jev가 동적으로
     페이지를 탐색
  3. Claude로 목표별 스크립트·에이전트 로직을 작성해 Jev API 호출과 결합
  4. 텍스트 입력이 필요한 단계만 소형 LLM이 생성하도록 위임해 비용·속도 최적화

## 강의·AX 활용 포인트

- **강의**: "모든 단계에 대형 모델을 쓰지 않는다"는 비용 최적화 설계 원칙(대형 모델은
  텍스트 생성에만, 나머지는 결정적 로직+소형 모델)을 실습 소재로 쓸 수 있다.
- **AX**: 반복적인 웹 기반 업무(항공권·호텔 예약, 폼 입력, 정보 수집)는 汎LLM 기반
  브라우저 에이전트보다 "액션 스페이스를 좁힌 특화 에이전트 + 오케스트레이션 LLM" 조합이
  속도·비용 면에서 유리할 수 있다는 근거 사례. 다만 오픈소스 프로토타입 단계이고 기업
  사례(회사명·정량 성과)는 아직 없어 도입 판단은 신중해야 한다.

## 출처

- [Ben AI — Jev + Claude Will Change How You Work Forever (Real Use Cases)](https://www.youtube.com/watch?v=L2K__oshGds)
- [GitHub — browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast)
- [Reddit r/AI_Agents — "Jev isn't an LLM killer, and it isn't just a classifier. We put it in production with real users."](https://www.reddit.com/r/AI_Agents/comments/1woavck/jev_isnt_an_llm_killer_and_it_isnt_just_a/)
