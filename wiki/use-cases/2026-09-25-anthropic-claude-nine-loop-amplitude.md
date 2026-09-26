---
type: use-case
date: 2026-09-25
tools: [claude]
mechanism: [cli-pipeline]
domain: research
task: 이론물리 최전선 문제(N=4 초대칭 양-밀스 이론 9-루프 산란 진폭) 계산
outcome: 전문가(Lance Dixon) 독립 검증 통과, 약 1주일 자율 연산으로 완료
model: Claude Fable 5.1
cost: 약 $100~$2,000 (96 CPU 약 1주 연산, 원문 추정치)
permissions: 미확인
maturity: demo
evidence: measured
importance: medium
uses: [course, ax]
source: https://www.anthropic.com/research/yes-claude-can-do-nine-loops
---

> **공식**: Claude(Fable 5.1)로 Claude Science 환경에서 부트스트랩·폼팩터
> 계산 파이프라인을 자율 수행 → 이론물리 최전선 문제인 9-루프 산란 진폭을
> 최소 인간 개입으로 계산, 해당 분야 최고 권위자 검증 통과.

## 무엇을 자동화했나

물리학자 Matt von Hippel이 AI에게 던진 공개 챌린지 — N=4 초대칭 양-밀스
(super Yang-Mills) 이론에서 **9-루프 헥사곤 진폭(9-loop hexagon amplitude)**을
계산하는 문제 — 를 Anthropic 팀이 Claude로 풀어낸 사례다. 이 계산은 인간
연구자들도 계산 장벽에 막혀 있던 프론티어 수준 문제였다.

## 어떻게 구성했나 (아키텍처)

- Claude Science 환경 안에서 이미 확립돼 있던 **부트스트랩(bootstrap)**·
  **폼팩터(form-factor)** 계산 기법을 그대로 적용 — 새로운 방법론을
  발명한 것이 아니라 기존 절차를 오랜 시간 정확하게 실행하는 것이 핵심 과제.
- 96개 CPU에서 약 1주일간 연속 연산.
- 인간의 개입은 "계속 진행해"(keep working on this) 수준의 최소한의
  지시에 그침 — 중간 디버깅·재시도 판단을 Claude가 자체적으로 수행.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | Claude Fable 5.1 |
| 비용 | 약 $100~$2,000 [추정] (96 CPU × 약 1주 연산 기준) |
| 권한 설계 | 미확인 |
| 성숙도 | demo (연구 시연, Claude Science 환경 한정) |

## 성과와 수치

- **measured**: 계산 결과가 해당 분야 최고 권위자 중 한 명인 Lance Dixon에
  의해 독립적으로 검증됨.
- 공교롭게도 경쟁 중이던 별도의 인간-AI 협업 연구팀이 유사한 결론에 도달하기
  며칠 앞서 Claude가 먼저 결과를 냈다고 원문은 밝히고 있다.
- 처리 시간·비용 외의 세부 벤치마크(실패율, 재시도 횟수 등)는 원문에 없음
  (미확인).

## 재현 가이드

- **난이도**: 상 (이론물리 전문 지식 + 대규모 컴퓨트 필요, 일반 사용자
  재현 대상 아님)
- **준비물**: Claude Science 접근권, 96 CPU급 컴퓨트, 부트스트랩/폼팩터
  계산 기법에 대한 도메인 지식
- **핵심 단계**:
  1. 기존에 확립된 계산 방법론(부트스트랩·폼팩터)을 절차화해 Claude에 제공
  2. 장시간 자율 연산이 가능하도록 환경 구성(중단 없는 컴퓨트 확보)
  3. "계속 진행해" 수준의 최소 개입만 하며 진행 상황 모니터링
  4. 결과를 도메인 전문가에게 독립 검증 의뢰

## 강의·AX 활용 포인트

- **강의**: "에이전트가 새로운 방법론을 발명하는 것이 아니라, 기존에 확립된
  복잡하고 취약한(디버깅이 잦은) 절차를 장시간 안정적으로 수행하는 것"이
  현재 에이전트 자율성의 핵심 강점이라는 점을 설명하는 사례로 적합 — "AI가
  뭘 새로 발견했다"보다 "AI가 지치지 않고 정확하게 오래 계산했다"는 프레임이
  더 정확하다.
- **AX**: 연구개발·엔지니어링 조직에서 "숙련자가 이미 아는 방법론을 반복
  적용해야 하는데 계산량·소요시간이 부담스러운 작업"(시뮬레이션, 대규모
  수치 검증 등)에 에이전트 장시간 자율 실행을 적용할 수 있는지 검토할
  근거 사례. 다만 이번 사례는 Anthropic 자체 연구 시연이며 제3자 기업의
  프로덕션 적용 사례는 아니다.

## 출처

- [Anthropic Research — Yes, Claude can do nine loops](https://www.anthropic.com/research/yes-claude-can-do-nine-loops)
- raw: `raw/2026-09/anthropic-claude-nine-loop-amplitude.md`
