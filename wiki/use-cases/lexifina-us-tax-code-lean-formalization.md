---
type: use-case
date: 2026-11-14
tools: []
mechanism: [cli-pipeline]
domain: finance
task: 미국 세법(Title 26) 조문 오류·허점 탐지를 AI 에이전트와 Lean 증명기로 자동화
outcome: 상호참조 검사 257건 중 138건 실제 입법 오류 확인, 소득세 모델이 PolicyEngine-US와 5,000가구 중 4,993건 일치
model: 미확인 (AI 에이전트 사용, 모델명 비공개)
cost: 미확인
permissions: 미확인 (공개 법령 데이터·CC0 저장소, 읽기 전용 분석)
maturity: prototype
evidence: claimed
importance: medium
uses: [ax, course]
source: https://lexifina.com/blog/formalizing-the-us-tax-code
---

# Lexifina — 미국 세법을 Lean으로 형식화해 입법 오류와 절세 허점을 찾다

> **공식**: AI 에이전트+Lean 증명기로 CLI 파이프라인을 활용해 미국 세법 조문의 오류·허점 탐지를 수행 → 상호참조 오류 138건 확인, 계산기 교차검증 4,993/5,000가구 일치 (자체 보고)

## 무엇을 자동화했나

Lexifina가 미국 연방법 Title 26(내국세입법)을 증명 검증기 Lean으로 옮겨, 조문 간 참조 오류와 의도치 않은 허점을 기계적으로 찾았다. 법령 텍스트는 Law Revision Counsel의 2026-11-03 기준 XML이고, 공개 법률 1건당 git 커밋 1개로 이력을 관리한다. 결과는 CC0 `global-law` 저장소의 `lean-proofs` 폴더에 공개했다.

## 어떻게 구성했나 (아키텍처)

1. XML 법문을 파싱해 문장형 참조까지 모든 상호참조를 검사.
2. 소득세(소득·공제·AMT·세액공제)를 Lean으로 번역하고 IRS 표·예시로 검증, 별도 에이전트가 적대적 검토.
3. 오픈소스 계산기 3종(PolicyEngine-US·Tax-Calculator·UsTaxes)과 결과 비교.
4. 절세 선택지를 탐색하고 모든 입력에 성립하는 성질을 증명.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (AI 에이전트, 모델명 비공개) |
| 비용 | 미확인 |
| 권한 | 미확인 (공개 데이터 분석, 쓰기 없음) |
| 성숙도 | prototype (소득세 일부만 모델링) |
| 근거 | claimed — 자체 보고, 변호사·세무사 검증 없음 |

## 성과와 수치

- 상호참조 검사 **257건 → 138건이 실제 입법상 결함**(각각 Lean 증명서 첨부), 검사 재실행 약 2.5분 (자체 보고)
- 2025년 소득세 모델: 5,000가구(일반 2,000·복잡 3,000)에서 PolicyEngine-US와 **4,993건 일치**, 나머지 7건은 최대 $11 차이(모두 EITC). Tax-Calculator·UsTaxes에서는 버그 발견(UsTaxes는 Schedule C 소득 누락, 일반 가구 약 6곳 중 1곳 영향)
- 탐색 결과: 알려진 전략 재발견 외 신규로 보이는 3건(부부 별도신고로 사회보장 과세 감소, 급여·투자소득 분리신고로 3.8% 세금 감소, Schedule 8812 환급이 법정보다 큼) — 예시 금액 $1,482·$1,621·$500
- **한계(원문 명시)**: 아동소득세·해외소득·소극적활동 규칙·대부분의 AMT 항목 제외, 다년도 모델은 2025년 법 고정, AI 검토만 거쳤고 전문가 검증 없음, 계산기 간 일치가 정답의 증거는 아님

## 재현 가이드

- 난이도: **상** (Lean 숙련 필요)
- 준비물: 법령 XML, Lean 환경, 코딩 에이전트, 비교용 오픈소스 계산기
- 핵심 단계: ① 법령 XML 파싱·참조 검사 ② 핵심 계산을 Lean으로 번역 ③ 다른 구현과 대량 표본 비교 ④ 불일치·허점은 증명서 형태로 보존

## 강의·AX 활용 포인트

- 규정·계약·내규처럼 **문서 간 참조가 얽힌 업무**에서 "에이전트가 번역, 증명기가 검증"이라는 이중 구조가 환각 방지 장치가 된다는 점이 핵심 교훈.
- 사내 규정집·약관의 상호참조 점검에 응용 가능. 단 결과의 법적 효력 판단은 전문가 검토가 필수.
- 같은 세무 영역의 실측 사례: [[openai-thrive-tax-ai-self-improving]].

## 출처

- [Lexifina — Formalizing US Tax Code (Using Lean)](https://lexifina.com/blog/formalizing-the-us-tax-code) (HN 152점, 11-14)
