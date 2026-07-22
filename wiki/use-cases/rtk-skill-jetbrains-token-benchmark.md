---
type: use-case
date: 2026-07-21
tools: [claude-code]
mechanism: [skills]
domain: dev-automation
task: 바이럴 확산 중인 Claude Code 토큰 절감 스킬(rtk)의 실제 비용 절감 효과를 실측 벤치마크로 검증
outcome: 주장 60~90% 절감 → 실측 저-effort 구간 오히려 비용 +7.6%(p=0.004), 고-effort 구간 ±0%(p=0.99)
model: claude-sonnet-5
cost: 벤치마크 실행 자체에 총 425회 테스트·약 $320 소요 (스킬 자체의 비용 절감액은 마이너스로 측정됨)
permissions: 미확인
maturity: production
evidence: measured
importance: high
uses: [course, ax]
source: https://blog.jetbrains.com/ai/2026/07/rtk-claude-code-token-savings/
---

# "60~90% 토큰 절감" 주장한 rtk 스킬, JetBrains 실측 벤치마크선 오히려 비용 증가

> **공식**: JetBrains 리서처가 Claude Code Skill(rtk, 셸 출력 압축 프록시)을 실측 벤치마크(skills)로
> 검증 → 자체 보고 절감률 99.8%(9,620만 토큰)와 달리 실제 청구 비용은 낮은 reasoning effort에서
> 오히려 7.6% 증가, 높은 effort에서는 유의미한 변화 없음(±0%)

## 무엇을 자동화했나

**rtk**(Rust Token Killer)는 Claude Code의 PreToolUse 훅으로 동작하는 CLI 프록시로, 에이전트가
실행하는 셸 명령의 출력을 압축한다 (예: `git status`의 11줄 출력을 `* master / M a.txt / ?? b.txt`
한 줄로 축약). 커뮤니티에서 "토큰 60~90% 절감"이라는 주장과 함께 빠르게 확산됐다. JetBrains
리서처 Denis Shiryaev가 이 주장이 실제 청구 비용에도 적용되는지 독립적으로 검증했다 — 같은
저자가 앞서 검증한 "Caveman 스킬"(주장 출력토큰 65% 절감 → 실측 8.5%)에 이은 두 번째 검증이다.

## 어떻게 구성했나 (아키텍처/방법론)

- **모델·에이전트**: claude-sonnet-5, Claude Code v2.1.201
- **벤치마크**: SkillsBench(86개 과제) 기반, 총 425회 테스트(~$320 소비)
- **실험 구조**: 기존 트랜스크립트 83개 사전 분석 → Bash 집약적 과제 10개에서 k=1·k=3 반복 검증 →
  86개 전체 과제를 낮은/높은 reasoning effort 두 조건으로 각각 실행
- **측정 대상**: rtk 자체 보고 절감량(rtk gain) vs 실제 세션 청구 토큰/비용, 턴 수, 캐시 재읽기
  비율, "new input" 토큰만 별도 집계

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | claude-sonnet-5 |
| 비용 | 벤치마크 실행 총 ~$320 (425회 테스트) |
| 권한 | 미확인 |
| 성숙도 | production — 실사용 확산 중인 스킬 대상 |

## 성과와 수치 (실측)

- **주장**: 토큰 60~90% 절감 / rtk 자체 집계 절감량 9,620만 토큰(터치한 전체의 99.8%)
- **실측**: 낮은 reasoning effort 조건에서 비용 **+7.6% 증가**(p=0.004) / 높은 effort 조건에서는
  **±0%**(p=0.99, 유의미한 차이 없음)
- 부가 측정: 턴 수 +13.8%(p=0.03), 캐시 재읽기 +14.3%(p=0.008), 순수 "new input" 토큰만 보면
  +3.2%(p=0.23, 유의미하지 않음)
- **괴리 원인 5가지**: (1) rtk 훅이 셸 출력의 약 20%만 처리, Read/Grep 도구는 우회됨 (2) Claude
  Code가 이미 병리적으로 긴 출력을 사전 절단 — "1.2MB CSV에서 32만 토큰 절감"이라 주장했지만
  에이전트는 원래도 수천 토큰만 수신 (3) 캐시 재읽기는 1/10 가격인데 rtk는 이를 정가로 계산 (4)
  rtk의 자체 스코어보드가 "압축 없는 전체 원본 출력"이라는 비현실적 반사실 기준을 사용 (5) 복합
  `find` 술어 재작성 오류 등 개별 손상 사례
- **품질**: smoke 테스트 약 150개 Bash 호출 중 손상된 재작성 1건, 전체 86개 과제에서는 품질 동점
  (sign test p=1.0) — "품질은 유지됐다"는 점은 확인됨.
- 저자 결론: **"정직한 엔지니어링, 잘못된 반사실적 기준(honest engineering, wrong counterfactual)"**
  — 필터 자체는 우아하지만 청구서는 오르며, "도구의 자체 보고 절감치는 청구서가 아니라 주장일 뿐".

## 재현 가이드

- **난이도**: 상 (통제된 A/B 벤치마크 설계 필요)
- **준비물**: SkillsBench류 표준화된 과제 세트, 청구 데이터 접근 권한, 통계 검정 도구
- **핵심 단계**:
  1. 검증하려는 스킬의 자체 보고 지표(예: rtk gain)와 실제 API 청구 데이터를 분리해서 수집
  2. 같은 과제 세트를 스킬 on/off 두 조건으로 반복 실행(가능하면 reasoning effort 등 조건별로도 분리)
  3. 턴 수·캐시 재읽기 비율·순수 신규 입력 토큰 등을 각각 분해해 어디서 괴리가 나는지 특정
  4. 품질(정답률)이 유지되는지 별도로 검정해 "비용 vs 품질" 트레이드오프를 분리 보고

## 강의·AX 활용 포인트

- **강의**: "바이럴 절감 주장을 어떻게 검증하는가"의 모범 사례 — 자체 도구가 보고하는 지표(character/4
  같은 근사치)와 실제 벤더 청구서 사이의 괴리를 다루는 방법론 교재로 적합. Caveman 스킬 검증과
  묶어 "AI 도구 벤치마크 리터러시" 세션 소재로 활용 가능.
- **AX**: 사내에 확산되는 "이 스킬/프롬프트로 비용 N% 절감했다"는 보고를 도입 전에 반드시 실제
  청구 데이터 기준으로 재검증해야 한다는 근거 사례. 자체 신고 지표만으로 스킬 도입을 결정하면
  오히려 비용이 늘 수 있다는 구체적 반례.

## 출처

- [JetBrains AI Blog — Does "rtk" skill really cut agent tokens by 60–90%? We tested it](https://blog.jetbrains.com/ai/2026/07/rtk-claude-code-token-savings/)
- [Hacker News — 관련 토론](https://news.ycombinator.com/item?id=48998362)
- [TechTimes — rtk Raises Claude Code Costs at Low Effort: JetBrains Benchmark Debunks 60–90% Claim](https://www.techtimes.com/articles/321223/20260721/rtk-raises-claude-code-costs-low-effort-jetbrains-benchmark-debunks-6090-claim.htm)
