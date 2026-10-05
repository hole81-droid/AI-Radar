---
type: use-case
date: 2026-10-05
tools: [claude]
mechanism: [subagents, cli-pipeline]
domain: research
task: 상온 자성(스핀분리) 반도체 신소재 후보 탐색 — 문헌리뷰부터 양자계산 스크리닝까지
outcome: 3일 만에 후보 2종 도출(신규 설계 1종 + 1999년 화합물 재발견 1종), 실험 검증은 미완
model: claude-opus-5.5
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: measured
importance: medium
uses: [course, ax]
source: https://www.vals.ai/blogs/room-temperature-magnetic-semiconductors
---

> **공식**: Claude Opus 5.5 기반 다중 에이전트로 문헌리뷰+신소재 설계+양자계산(DFT)
> 스크리닝 파이프라인을 활용해 상온 스핀분리 반도체 후보 탐색을 수행 → 3일 만에 계산적
> 후보 2종(밴드갭·스핀윈도우·자기정렬온도 전부 요건 충족 예측) 도출

## 무엇을 자동화했나

AI 모델 평가 전문업체 Vals AI가 재료과학 신소재 발견 워크플로 전 과정 — ① 기존 문헌·화합물
데이터베이스 리뷰, ② 요건(상온에서 작동하는 스핀분리 반도체)에 맞는 신규 화합물 설계,
③ 밀도함수이론(DFT) 양자계산으로 전자구조 시뮬레이션(PBE+U·HSE06 두 근사 수준),
④ 밴드갭·스핀윈도우·자기정렬온도 기준으로 후보 스크리닝 — 을 Claude Opus 5.5 에이전트에게
맡겼다. 사람 연구자가 수개월~수년 걸릴 수 있는 초기 후보 물질 탐색 단계를 3일로 압축했다.

## 어떻게 구성했나 (아키텍처)

- 보도에 따르면 "a team of AI agents"(복수 에이전트)가 투입됐고, 일부 2차 보도는 "90개 이상"
  이라고 추정했으나 Vals AI 원문은 정확한 에이전트 수를 명시하지 않았다.
- 파이프라인은 리서치(문헌리뷰·설계) → 계산(DFT 시뮬레이션 실행) → 분석(스크리닝·판정)
  3단계로 나뉘는 것으로 보이며, 각 단계가 서로 다른 서브에이전트/도구 호출로 이어지는
  cli-pipeline 구조로 추정된다(원문에 오케스트레이션 세부 다이어그램은 없음).
- 결과물(input 파일, raw output, 분석 코드)을 GitHub에 전부 공개해 제3자가 동일 계산을
  재현할 수 있게 했다 — "주장만 하고 증거는 숨기는" 식이 아니라 검증 가능한 형태로 공개한
  점이 특징.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | Claude Opus 5.5 |
| 비용 | 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | prototype (계산적 가설 단계, 실험 미검증) |
| 소요 시간 | 약 3일(문헌리뷰~스크리닝 전 과정) |

## 성과와 수치

**실측(measured, 계산 결과 기준)**:
- 후보 1 YBaMnFeO₅(신규 설계): 밴드갭 2.35eV, 스핀윈도우 정공 1.0eV·전자 1.4eV, 예측
  자기정렬온도 최대 ~490K. 다만 표준 합성 조건에서 ~950K 부근에 원자배열이 무질서해질
  위험이 있어 합성 난도가 높을 것으로 평가.
- 후보 2 KV[Cr(CN)₆](1999년 화합물 재조명): 밴드갭 2.1eV, 스핀윈도우 정공 2.6eV·전자
  1.6eV. 자기정렬온도는 1999년 실측 데이터로 376K까지 이미 확인된 바 있어 계산 결과와
  과거 실험값이 교차 검증되는 드문 경우.

**한계**: 두 후보 모두 스핀분리 반도체로서의 전자구조는 **계산 예측일 뿐 실험으로
확인되지 않았다.** "발견"이라는 표현보다 "계산적 후보 제시"로 읽는 것이 정확하다.

## 재현 가이드

- **난이도**: 상 (DFT 계산 인프라·재료과학 전문성이 필요해 일반 업무 자동화 재현과는
  결이 다르다)
- **준비물**: Claude Opus 5.5(또는 동급 모델) API 접근, DFT 계산 도구(VASP·Quantum
  ESPRESSO 등으로 추정, 원문 미명시), 재료과학 분야 지식으로 작업을 설계·검증할 전문가.
- **핵심 단계**:
  1. 목표 물성(밴드갭·스핀윈도우·자기정렬온도 범위)을 요건으로 명확히 정의.
  2. 에이전트에게 문헌 리뷰 + 신규 화합물 설계를 위임.
  3. 설계안을 DFT 계산으로 시뮬레이션(두 근사 수준으로 교차검증).
  4. 요건 충족 여부로 자동 스크리닝, 상위 후보만 사람이 재검토.
  5. 전체 입력·출력·코드를 공개해 제3자 재현 가능하게 함.

## 강의·AX 활용 포인트

- **강의**: "AI 에이전트가 과학연구 초기 탐색 단계를 압축하는 법"을 보여주는 사례로,
  Anthropic 자체 발표(단백질 설계·RSA-260 등)와 달리 **제3자가 독립적으로 수행·검증
  가능한 형태로 공개**했다는 점이 특히 유용 — "벤더 자체 발표 vs 제3자 재현"의 차이를
  가르치는 소재로 쓸 수 있다.
- **AX**: R&D 조직이 AI 에이전트를 "가설 생성기"로 쓰는 패턴(최종 검증은 여전히 사람·
  실험실의 몫)을 보여준다. 신약·신소재 탐색처럼 탐색 공간이 넓은 R&D 업무에 적용 각도가
  있으나, "계산적 가설"과 "실제 발견"을 구분해 커뮤니케이션해야 할 필요성도 함께 보여준다.

## 출처

- [Vals AI — Two Room-Temperature Antiferromagnetic Semiconductor Candidates](https://www.vals.ai/blogs/room-temperature-magnetic-semiconductors)
- [Hacker News — Opus 5.5 agents discover two room-temperature magnetic semiconductor candidates](https://news.ycombinator.com/item?id=49970667)
- [AlphaSignal — Vals AI Deploys 90 Claude Agents to Hunt Room-Temperature Magnetic Semiconductors](https://alphasignal.ai/news/vals-ai-deploys-90-claude-agents-to-hunt-room-temperature-magnetic)
