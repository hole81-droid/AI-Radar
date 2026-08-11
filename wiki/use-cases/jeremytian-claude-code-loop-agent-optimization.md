---
type: use-case
date: 2026-08-11
tools: [claude-code]
mechanism: [cli-pipeline]
domain: dev-automation
task: 프로덕션 AI 에이전트의 정확도를 자동으로 개선(루프 기반 프롬프트·설정 최적화)
outcome: 정밀도 0.734→0.818로 개선(경쟁 도구 AutoAgent 0.877·AutoResearch 0.843보다는 낮음)
model: 미확인
cost: 실험 전체(3개 도구 합산) 약 $67,000, Claude Code 단독 비용은 미확인
permissions: 미확인
maturity: prototype
evidence: measured
importance: medium
uses: [course, ax]
source: https://jeremytian.substack.com/p/can-claude-code-in-a-loop-improve
---

> **공식**: Claude Code로 반복 루프(cli-pipeline)를 활용해 프로덕션에 배포된 엔터프라이즈
> AI 에이전트의 정확도 자동 개선을 수행 → 정밀도 0.734→0.818 (경쟁 자동 최적화 도구 대비
> 최저 성과)

## 무엇을 자동화했나

엔지니어 Jeremy Tian이 이미 프로덕션에 배포된 엔터프라이즈 AI 에이전트를 대상으로,
"사람이 프롬프트·설정을 수작업으로 튜닝하는 대신 AI 자체가 반복 루프를 돌며 스스로
성능을 개선할 수 있는가"를 검증했다. Claude Code를 루프 형태로 돌려 자동 최적화를
수행시키고, 동일한 데이터셋·동일한 채점 기준(judge)으로 Andrej Karpathy의 AutoResearch,
Kevin Gu의 오픈소스 AutoAgent와 성능을 비교했다. GEPA라는 별도 최적화 기법도 테스트했으나
과적합(overfitting) 문제로 제외됐다.

## 어떻게 구성했나 (아키텍처)

- **대상**: 이미 운영 중인 프로덕션 엔터프라이즈 AI 에이전트(구체 업무 도메인은 원문에
  명시되지 않음).
- **방법**: Claude Code를 반복 실행(루프)시켜 에이전트의 프롬프트·설정을 스스로 수정·평가·
  재시도하게 하는 자동 최적화 파이프라인. AutoResearch·AutoAgent도 각각 동일한 방식의
  자동 최적화 루프로 같은 문제에 투입해 3자 비교.
- **평가**: 동일한 데이터셋 + 동일한 채점 기준(judge)으로 정밀도(precision)를 측정해
  세 도구를 나란히 비교.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 미확인 (Claude Code가 내부적으로 어떤 Claude 모델을 사용했는지 원문에 명시 안 됨) |
| 비용 | 3개 도구 실험 전체 합산 약 $67,000(에이전트 실행+평가 비용 포함). 기사 제목의 "$10,745"는 예산 제약 조건으로 보이나 실제 총지출과 정확히 어떻게 연결되는지는 불명확. Claude Code 단독 소요 비용은 미확인 |
| 권한 | 미확인 |
| 성숙도 | prototype — 대상 에이전트 자체는 프로덕션이지만, 이번 자동 최적화 실험 자체는 벤치마크·연구 목적 |

## 성과와 수치 (실측)

- 기준선(사람이 튜닝한 기존 설정) 정밀도: **0.734**
- Claude Code 루프 최적화 후: **0.818**
- AutoResearch 최적화 후: **0.843**
- AutoAgent 최적화 후: **0.877** (3개 도구 중 최고 성과)
- 핵심 발견: 세 도구 모두 "최적해를 아주 초반에 찾아낸다" — 즉 자동 최적화는 초기에
  빠르게 개선폭을 확보한 뒤 급격히 정체되는 패턴을 보여, 추가 연산 투입 대비 개선 효율이
  낮아진다는 점을 시사.
- Claude Code는 세 도구 중 상대적으로 늦게 시작했고 속도도 더 느렸다고 원문에 언급됨
  (정성적 서술, 정량 수치는 미확인).

## 재현 가이드

- **난이도**: 상 — 프로덕션 에이전트, 평가용 데이터셋·채점 기준(judge) 설계, 여러 최적화
  도구를 나란히 비교할 실험 인프라가 모두 필요해 개인·소규모 팀이 그대로 재현하기는 어렵다.
- **준비물**: 최적화 대상 AI 에이전트, 평가 데이터셋, 채점 기준(judge) 모델, Claude Code
  CLI + 반복 실행 스크립트, 비교 대상 최적화 도구(AutoResearch/AutoAgent 등).
- **핵심 단계**:
  1. 최적화 대상 에이전트의 현재 성능(기준선)을 동일 데이터셋·채점 기준으로 측정.
  2. Claude Code를 루프로 실행해 프롬프트/설정을 반복적으로 수정·재평가하도록 구성.
  3. 다른 자동 최적화 도구도 동일 조건으로 병행 실행해 비교 기준을 확보.
  4. 개선 곡선(반복 횟수 대비 성능)을 추적해 "초기 급개선 후 정체" 시점을 파악, 그 이후
     투입은 예산 대비 비효율적임을 확인.

## 강의·AX 활용 포인트

- **강의**: "AI로 AI를 자동 튜닝한다"는 loop-engineering 개념을 실측 수치로 보여주는
  드문 사례 — Claude Code·AutoResearch·AutoAgent 세 도구의 접근 방식 차이를 비교
  교재로 쓸 수 있다.
- **AX**: 자동 최적화 도구 도입을 검토하는 조직에 두 가지 시사점을 준다 — (1) 도구별
  성능 편차가 존재하므로 벤더 주장만으로 도구를 고르면 안 되고 자체 데이터로 검증해야
  한다, (2) 초기 개선 이후 급격히 정체되는 패턴이 공통적으로 나타나므로, 예산을 무한정
  투입하기보다 조기 정체 시점을 감지해 투자를 멈추는 기준(stopping rule)을 마련하는
  것이 비용 효율적이다.

## 출처

- [Jeremy Tian — Can Claude Code in a loop improve an enterprise AI agent with $10,745 of budget?](https://jeremytian.substack.com/p/can-claude-code-in-a-loop-improve)
- [Hacker News 토론](https://news.ycombinator.com/item?id=49261122) (2026-08-11, 5점)
