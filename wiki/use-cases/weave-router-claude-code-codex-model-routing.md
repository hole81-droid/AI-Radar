---
type: use-case
date: 2026-09-30
tools: [claude-code, codex]
mechanism: [cli-pipeline]
domain: dev-automation
task: 코딩 에이전트(Claude Code·Codex·Cursor)의 요청별 모델 자동 라우팅으로 비용·속도 최적화
outcome: "Astra 대비 Terminal Bench 4.0 동등 pass rate에 비용 52%·속도 2.2배, SWE Atlas 비용 54%·속도 2.5배 (자체 보고)"
model: 다중 모델 라우팅(쉬운 작업→DeepSeek v4 Flash·GLM 5.2·Kimi K2.6, 어려운 작업→Opus·GPT 프론티어급) — 라우터 자체의 판단 모델은 비공개
cost: 미확인 (상대적 비용 절감률만 공개, 절대 금액·요금제 미기재)
permissions: 미확인
maturity: production
evidence: claimed
importance: medium
uses: [course, ax]
source: https://news.ycombinator.com/item?id=49911500
---

> **공식**: Claude Code·Codex 등 코딩 에이전트에 cli-pipeline 방식 모델 라우터를 앞단에 붙여 요청별 최적 모델 자동 선택을 수행 → Astra 동등 성능에 비용 52~54%·속도 2.2~2.5배 (자체 보고)

## 무엇을 자동화했나

AI 코딩 스타트업 Weave가 "자사 코드 대부분을 AI로 작성"하는 과정에서 비용이 급증하자
(특히 Opus 4.7 출시 당시 토크나이저 변경으로 비용이 치솟은 것이 계기), 모든 요청에
무조건 최고가 모델을 쓰는 대신 **작업 난이도에 맞춰 모델을 자동으로 바꿔 끼우는
라우터**를 만들어 오픈소스로 공개했다(Weave Router 2.0). Claude Code·Codex·Cursor 등
기존 코딩 에이전트를 바꾸지 않고, 그 앞단에서 Anthropic/OpenAI API 엔드포인트처럼
동작하며 요청을 가로채 라우팅한다.

## 어떻게 구성했나 (아키텍처)

- **엔드포인트 프록시**: Weave Router가 Anthropic·OpenAI 호환 엔드포인트로 동작,
  코딩 에이전트는 평소처럼 API를 호출하면 라우터가 중간에서 모델을 결정하고 포맷을
  번역한다.
- **라우팅 판단 — HMM(은닉 마르코프 모델) 기반**: 단순히 "현재 요청이 쉬운가 어려운가"만
  보지 않고, 세션이 **어떤 경로로 현재 상태에 도달했는지**까지 추적하는 은닉 마르코프
  모델로 세션을 몇 개의 유사 모델 버킷으로 분류한다. 에이전트 세션은 보통 100턴
  안팎의 API 호출로 구성되는데, 매 턴마다 ~10개 모델 중 하나를 고르는 전체 경로
  공간(10^100)을 다 탐색할 수 없으므로 이 분류로 탐색 범위를 줄인다.
- **모델 풀**: 쉬운 작업(간단한 프론트엔드 수정 등)은 저렴한 모델(DeepSeek v4 Flash·
  GLM 5.2·Kimi K2.6), 까다로운 디버깅·시스템 설계는 프론티어 모델(Opus·GPT, 필요시
  Astra급)로 분기.
- **캐시 인지 비용 계산**: 모델을 바꾸면 프롬프트 캐시가 깨지는 비용(cache-eviction)까지
  라우팅 결정에 반영해, 단순 토큰 단가만 비교하는 라우팅보다 실질 비용을 더 정확히
  추정한다.
- **한계(댓글에서 확인)**: 라우팅 모델 자체는 오픈소스가 아니고 인프라(프록시·설정)만
  공개됐다. OpenRouter류 외부 모델 접근 계층에 대한 의존성 질문도 제기됨.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 다중 모델 라우팅(미확인 — 라우터 판단 모델 자체는 비공개) |
| 비용 | 미확인 (절대액 없음, Astra 대비 상대 비율만 공개) |
| 권한 설계 | 미확인 |
| 성숙도 | production (Weave 사내 실사용 후 오픈소스화) |
| 근거 유형 | claimed (벤더 자체 벤치마크, 제3자 검증 없음) |

## 성과와 수치

- **Terminal Bench 4.0** (GPT-6 Astra 대비): 동등한 성공률(pass rate) 유지, **비용 52%
  수준**, **실행 속도 2.2배**.
- **SWE Atlas** (GPT-6 Astra 대비): **비용 54% 수준**, **실행 속도 2.5배**.
- 전부 Weave 자체 측정치이며 독립 기관의 재현 검증은 없다.

## 재현 가이드

- **난이도**: 중. 기존 코딩 에이전트 설정을 건드리지 않고 엔드포인트 URL만 라우터로
  바꾸면 되는 구조라 도입 장벽은 낮지만, 라우팅 품질(버킷 분류 정확도)은 자체
  튜닝이 필요하다.
- **준비물**: Claude Code·Codex·Cursor 등 기존 코딩 에이전트, Weave Router
  (오픈소스, `github.com/weave-os/router`) 또는 호스팅판(weaveos.com/router),
  라우팅 대상 모델 각각의 API 키.
- **핵심 단계**:
  1. 코딩 에이전트의 API 엔드포인트를 Weave Router 주소로 교체.
  2. 라우팅 풀에 쓸 모델 조합을 정의(저가 모델 다수 + 프론티어 모델 1~2개).
  3. 벤치마크(Terminal Bench·SWE Atlas 등 사내 대표 작업 샘플)로 비용·속도·품질을
     먼저 측정해 기준선을 잡는다.
  4. 캐시 적중률이 중요한 워크플로라면 모델 전환 빈도를 모니터링해 과도한 캐시
     무효화가 일어나지 않는지 확인.

## 강의·AX 활용 포인트

- **강의**: "모든 작업에 최고가 모델을 쓸 필요는 없다"는 비용 최적화 원칙을 가르치는
  구체 사례 — 에이전트 비용 관리 수업에서 [[databricks-ai-gateway-coding-cost-management]]
  (같은 문제의식의 사내 게이트웨이 사례)와 나란히 비교하면 "자체 구축 vs 오픈소스
  도입"의 선택지를 보여줄 수 있다.
- **AX**: 코딩 에이전트 도입 비용이 부담되는 조직이라면, 모든 요청에 프론티어 모델을
  강제하기 전에 라우팅 계층 도입으로 비용을 먼저 낮출 수 있는지 검토할 가치가 있다.
  다만 수치가 벤더 자체 보고임을 도입 검토 시 반드시 명시해야 한다.

## 출처

- [Hacker News(64점) — Show HN: Open-source model routing for coding agents at Astra-level performance](https://news.ycombinator.com/item?id=49911500)
- [GitHub — weave-os/router](https://github.com/weave-os/router)
- [Weave Router 공식 페이지](https://weaveos.com/router)
- raw: `raw/2026-10/weave-router-2-0-model-routing.md`
