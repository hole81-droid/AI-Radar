---
type: use-case
date: 2026-09-16
tools: [claude-code]
mechanism: [cli-pipeline]
domain: ops
task: Claude Code 주간·5시간 사용한도 변화를 세션 로그+/usage API 폴링으로 직접 계측
outcome: 09-14 한도 인하 실측 약 19%(공식 발표 17%), Max 20x 주간한도는 세션한도(4.4배)와 달리 5x 대비 2.2배에 불과함을 확인
model: 미확인 (Fable 5·5.1 혼재 기간)
cost: 미확인 (API 환산가치는 산출 — Max 5x 주당 약 $790, Max 20x 주당 약 $1,710)
permissions: 미확인
maturity: prototype
evidence: measured
importance: medium
uses: [ax, course]
source: https://www.reddit.com/r/ClaudeAI/comments/1why2zx/a_lot_of_talk_about_reduced_weekly_limits_but_a/
---

> **공식**: Claude Code로 자체 세션 트랜스크립트+`/usage` API를 SQLite 원장(ledger)으로
> 수집하는 파이프라인을 구축해 사용한도 변화를 실측 → 공식 발표(17% 인하)와 독립적으로
> 근접한 수치(19% 인하)를 검증하고, "Max 20x=Max 5x의 4배"라는 통념이 주간 한도 기준으로는
> 틀렸다는 것(실제 2.2배)을 데이터로 반박

## 무엇을 자동화했나

2026-09-14 시행된 Claude Code 주간 사용한도 변경(공식 발표: +50% 프로모션 종료 후
+25% 영구 인상, 체감 17% 감소)을 둘러싼 커뮤니티 불만이 "느낌"에 근거한 주장뿐이었던
상황에서, 한 사용자가 자기 계정의 실제 사용 데이터를 자동으로 수집·분석하는 파이프라인을
만들어 정량적으로 검증했다.

## 어떻게 구성했나 (아키텍처)

- **수집**: `~/.claude/projects` 아래 모든 세션 트랜스크립트를 파싱해 모델별·시간대별
  토큰 사용량(캐시 읽기/쓰기 분리)을 SQLite에 적재.
- **실시간 계측**: Claude Code CLI가 실제로 읽는 것과 동일한 `/usage` 엔드포인트를
  2분 간격으로 폴링해, 5시간·7일 사용률(utilization) 시계열을 별도 로깅.
- **왜곡 요인 통제**: Claude Code 밖(claude.ai 채팅)에서의 사용은 트랜스크립트에
  잡히지 않으므로, 프로모션 대상이 아니었던 "5시간 세션 한도"를 기준점(reference)으로
  삼아 주간 한도와의 비율을 비교하는 방식으로 두 왜곡 요인(채팅 사용·토큰 가중치 미상)을
  상쇄시켰다. 이 비율이 5x 플랜에서 7월 11.2, 9월 11.1로 거의 일치해 방법론 자체의
  타당성을 자체 검증.
- **도구**: 오픈소스로 공개된 자체 제작 CLI `ccstats` (https://github.com/eksdeexD/ccstats).

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (측정 기간 중 Fable 5→5.1 혼재) |
| 비용 | 미확인 (직접 지출은 구독료뿐, API 환산가치만 별도 산출) |
| 권한 | 미확인 |
| 성숙도 | prototype (개인용 오픈소스 CLI 1개) |

## 성과와 수치 (evidence: measured)

- 주간 한도 인하폭: 공식 발표 17%(150%→125%) vs 실측 약 19%(150%→약122%, 오차범위
  10~25%).
- 시행 시점: 발표일(09-13)이 아니라 각 계정의 **주간 리셋 시점**부터 적용됨을 확인
  (09-13~14는 구 한도로 소진되는 것을 관측).
- Max 20x vs Max 5x: 동일 계정으로 7월(5x)·8월(20x) 비교 시 5시간 세션 한도는 4.4배
  증가했지만 **주간 한도는 2.2배만 증가** — "20x면 다 4배"라는 통념이 주간 기준으로는
  성립하지 않음. 5x는 주간 버킷에 풀세션 약 11회, 20x는 약 5회만 들어감.
- API 리스트가 기준 환산가치(Fable 5 시대, +50% 프로모션 적용 중): Max 5x ≈ 주당 $790·
  세션당 $70, Max 20x ≈ 주당 $1,710·세션당 $310.

## 재현 가이드

- **난이도**: 중 (스크립팅 가능한 개발자 대상, 별도 계정 접근 권한 외 특별한 인프라
  불필요).
- **준비물**: Claude Code 사용 계정(트랜스크립트 로그 접근), Python/SQLite 등 스크립팅
  환경, `ccstats` 저장소.
- **핵심 단계**:
  1. 로컬 트랜스크립트 디렉터리를 정기적으로 파싱해 토큰 사용량을 모델·시간대별로
     원장화.
  2. `/usage` API를 짧은 주기로 폴링해 실시간 utilization을 별도 시계열로 기록.
  3. 프로모션·플랜 변경 등으로 왜곡되지 않는 "고정 기준점"(이 사례에서는 세션 한도)을
     찾아 비율로 비교함으로써 알 수 없는 가중치·외부 사용량 문제를 상쇄.
  4. 최소 두 시점(변경 전/후)의 비율을 비교해 변화폭을 추정.

## 강의·AX 활용 포인트

- **강의**: "느낌"이 아니라 "직접 계측"으로 벤더 발표를 검증하는 방법론 사례 — 데이터
  리터러시·자체 모니터링 파이프라인 구축 실습 소재로 적합.
- **AX**: 기업이 Claude Code 등 사용량 기반 라이선스를 대규모로 도입할 때, 벤더가
  공지한 한도 변경치를 **자체 계측으로 검증**하는 관행이 실제로 가능하고 유효하다는
  근거. 플랜 등급(5x/20x)이 마케팅상 배수와 실제 주간 처리량 배수가 다를 수 있다는
  점은 라이선스 규모 산정 시 체크포인트가 된다.
- 같은 날 확인된 [[reddit-claude-code-usage-stats-overstate-tokens]](공식 `/usage`
  Stats 탭 자체가 토큰을 2배 부풀려 표시하는 버그)와 함께 읽으면, 사용한도 논쟁에서
  "무엇을 측정 기준으로 삼을지"가 얼마나 까다로운 문제인지 보여준다.

## 출처

- [Reddit r/ClaudeAI — A lot of talk about reduced weekly limits but a lack of data](https://www.reddit.com/r/ClaudeAI/comments/1why2zx/a_lot_of_talk_about_reduced_weekly_limits_but_a/)
- [ccstats (GitHub)](https://github.com/eksdeexD/ccstats)
- 관련: [[2026-08-31-claude-code-weekly-limit-change]] (원 발표 페이지, 이 실측치로 후속 갱신)
