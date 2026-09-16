---
type: use-case
date: 2026-09-14
tools: [ollama]
mechanism: [cli-pipeline]
domain: dev-automation
task: 대형(35KB) 프리프롬프트를 프론티어 API(Claude Opus)에서 자체 호스팅 Ollama로 이전
outcome: 컨텍스트 즉시 14% 소모→3분 내 반복 툴콜·재작업으로 붕괴하던 문제를 SOP(단일목표 프롬프팅)로 해결(정성적)
model: 미확인 (로컬 Ollama, 특정 모델명 비공개)
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course]
source: https://patrickmccanna.net/notes-on-migrating-large-prompts-away-from-anthropic-openai-to-self-hosted-llms/
---

> **공식**: Ollama(자체 호스팅 LLM)로 대형 프리프롬프트를 옮기면서 Single Objective
> Prompting(SOP) 기법과 MTTF(Mean Tokens To Forget) 진단 지표를 활용 → 컨텍스트
> 포화로 인한 에이전트 반복 헛돌기(thrash)·재작업 문제를 완화

## 무엇을 자동화했나

프라이버시를 이유로 Claude Opus(Anthropic) 기반 코딩 에이전트 워크플로를 로컬
하드웨어(AMD Ryzen AI MAX+ 395, 128GB 중 96GB 추론 할당)의 Ollama로 이전하는
과정에서, 프론티어 API에서는 문제없이 쓰던 35KB짜리 프리프롬프트가 로컬 환경에서는
바로 붕괴하는 것을 발견하고 프롬프트 구조 자체를 재설계했다.

## 어떻게 구성했나 (아키텍처)

- **문제 진단**: 35KB 프리프롬프트가 로컬 65K 토큰 컨텍스트 창의 14%를 즉시
  소모. 이후 3분 안에 에이전트가 동일 툴콜을 반복하고, 이미 읽은 파일을 다시
  읽고, 끝난 작업을 다시 쓰는 현상 발생. 핵심 통찰: 프론티어 제공사의 우위는
  모델 성능뿐 아니라 **큰 컨텍스트 창이 Chain-of-Thought에 주는 여유 공간**에도
  있으며, 로컬 환경은 이 여유가 없어 프롬프트 설계 결함이 즉시 노출된다.
- **해법 — Single Objective Prompting(SOP)**: 거대한 단일 프롬프트를 하나의
  목표에 집중한 단위들로 재구성. Claude Code의 비정형적 접근 대신 OpenCode의
  "선언적 에이전트(declarative agents)" 방식으로 전환.
- **세부 튜닝**: Ollama의 기본 컨텍스트 길이 설정이 매우 작다는 점을 명시적으로
  늘림, 세션 상태를 디스크에 자주 기록해 핸드오프 지원, 스텝당 툴콜 수를
  줄이고 "~하지 마라"류 부정 제약을 긍정 지시로 대체.
- **진단 지표 — MTTF(Mean Tokens To Forget)**: 동일 툴콜 연속 반복, 중복 파일
  읽기, 실제 진행 대비 과도한 턴 수를 경고 신호로 정의해 추적.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (로컬 Ollama, 구체 모델명 비공개) |
| 비용 | 미확인 |
| 권한 | 미확인 |
| 성숙도 | prototype (개인 워크플로 실험) |

## 성과와 수치 (evidence: anecdotal)

정량적 전/후 비교 수치는 제한적으로만 제시됨 — "프리프롬프트가 컨텍스트의 14%를
즉시 소모", "3분 내 붕괴 시작"이라는 문제 상황의 정량치는 있으나, SOP 적용 후의
개선폭을 숫자로 제시하지는 않음(정성적 서술: 반복 툴콜·재작업 감소).

## 재현 가이드

- **난이도**: 상 (로컬 추론 인프라 구축 + 프롬프트 아키텍처 재설계 필요).
- **준비물**: 로컬 GPU/통합메모리 하드웨어, Ollama, 기존 대형 시스템 프롬프트,
  OpenCode 등 선언적 에이전트 프레임워크.
- **핵심 단계**:
  1. 이전 전, 기존 프리프롬프트가 새 환경의 컨텍스트 창에서 차지하는 비율을
     먼저 계산해 위험도를 가늠한다.
  2. 프리프롬프트를 하나의 목표 단위(SOP)로 쪼갠다 — 여러 목적을 한 프롬프트에
     욱여넣지 않는다.
  3. 로컬 런타임(Ollama 등)의 컨텍스트 길이 기본값을 반드시 명시적으로 확인·조정한다.
  4. 세션 상태를 대화 컨텍스트가 아니라 디스크에 기록해 컨텍스트 소모와 상태
     관리를 분리한다.
  5. MTTF류 지표(반복 툴콜, 중복 읽기, 턴 수 대비 진행도)로 붕괴 조짐을 조기
     감지한다.

## 강의·AX 활용 포인트

- **강의**: "같은 프롬프트도 컨텍스트 창 크기에 따라 다르게 작동한다"는 것을
  보여주는 실전 사례 — 프론티어 API와 자체 호스팅 모델을 오갈 때 프롬프트를
  그대로 재사용할 수 없다는 점, SOP·MTTF 같은 구체적 기법·지표를 제공해
  루프 엔지니어링/하네스 엔지니어링 강의 자료로 바로 활용 가능([[loop-engineering]]
  참조).
- **AX**: 데이터 프라이버시·비용을 이유로 자체 호스팅 모델 전환을 검토하는 조직에,
  "모델 교체"만이 아니라 "프롬프트·하네스 재설계"가 함께 필요하다는 구체적
  경고 사례로 쓸 수 있다.

## 출처

- [patrickmccanna.net — Notes on gotchas while migrating large preprompts away from Anthropic/OpenAI to self-hosted LLMs](https://patrickmccanna.net/notes-on-migrating-large-prompts-away-from-anthropic-openai-to-self-hosted-llms/)
- Hacker News 139점 (2026-09-14)
