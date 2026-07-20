---
type: update
date: 2026-07-01
tools: [claude, claude-code]
importance: high
uses: [course, ax]
source: https://www.anthropic.com/news/redeploying-fable-5
---

# Claude Fable 5 글로벌 복귀 — 그리고 7/7부터 크레딧 과금 전환

## 무엇이 있었나

미국 정부 수출통제로 19일간 전면 중단됐던 Anthropic 최상위 모델 **Claude Fable 5**(및 Claude Mythos 5)가 규제 해제(6/30 발표)로 **7/1부터 전 세계에 다시 배포**됐다. Claude Platform, claude.ai, Claude Code, Claude Cowork에서 이용 가능하다.

- **경위**: 6/12 미국 정부가 Fable 5·Mythos 5에 즉시 발효 수출통제를 부과 — Amazon 연구진이 Fable 5의 세이프가드를 우회해 소프트웨어 취약점을 대량 발굴하는 방법을 찾아낸 보고서가 계기였다. 실시간 국적 확인 수단이 없던 Anthropic은 전 사용자 접근을 중단했었다.
- **재배포 조건**: 새 사이버보안 분류기(classifier)를 추가해 복귀. Pro·Max·Team·일부 Enterprise 플랜에서 **7/7까지는 주간 사용 한도의 50%까지 무료 포함**, 이후에는 **별도 사용 크레딧**($10/$50 per 백만 토큰, 입력/출력)으로 전환된다.

> ⚠️ 상충: 최초 발표는 "7/7까지 무료 포함"이었으나, 실제로는 수요·경쟁 상황에 따라 두 차례 더
> 연장됐다 — 7/7→7/12(1차 연장)→7/19(2차 연장). **최종적으로 7/19(PT) 자정에 무료 포함 기간이
> 끝났고, 7/20부터 종량 크레딧제($10/$50 per 백만 토큰, 입력/출력)가 실제 발효됐다.**
> (2026-07-20 갱신, 출처: [Vantage Point](https://vantagepoint.io/blog/ai/claude-fable-5-included-access-july-19), [Forbes](https://www.forbes.com/sites/sandycarter/2026/07/13/claude-fable-5-extends-to-july-19-7-days-7-power-moves/))

> ⚠️ 상충 (2026-07-20 소급 스캔 중 발견): r/ClaudeAI에 Anthropic 계정으로 추정되는 게시물
> (`u/tessahannah`, 2026-07-17 게시 "Fable staying on Max")은 위와 다른 내용을 전한다 —
> **"7/20부터 Claude Fable 5는 모든 Max·Team Premium 요금제에 한도 50%로 계속 포함되며,
> Pro·Team Standard 사용자만 사용 크레딧(+1회성 $100 크레딧)으로 전환된다"**는 내용이다.
> 이는 "Pro·Max 등 구독만으로는 못 쓰게 된다"는 위 Vantage Point 요약과 정면으로 배치된다.
> 두 출처의 신뢰도를 이 세션에서 확정하지 못해 병기한다 — Max·Team Premium 사용자는 실제
> 크레딧 차감 여부를 계정에서 직접 확인할 것을 권장한다. [Reddit](https://old.reddit.com/r/ClaudeAI/comments/1uzjcop/fable_staying_on_max/)

## 왜 중요한가 (비개발자 관점)

- 사상 처음으로 **정부 수출통제가 상용 AI 모델을 중단시켰다 복귀시킨** 사건의 완결편. AI가 반도체처럼 국가 안보 통제 대상이 됐음을 보여준다.
- 구독자 입장에선 **최고 성능 AI의 요금 구조가 2주 만에 두 번 바뀐** 셈 — "구독에 포함"에서 "종량 크레딧"으로. 최상위 모델은 프리미엄 종량제로 가는 업계 흐름의 신호탄.
- 중단 기간 중 사용자가 미국 정부를 상대로 소송을 제기하는 등, AI 접근성이 법적 권리 문제로 비화되기도 했다.

## 활용/시사점

- **AX**: 단일 모델 의존 전략의 리스크(규제·요금 변동)를 보여주는 교과서적 사례 — 모델 포트폴리오와 폴백 체계가 필수. Fable 5 상시 사용 조직은 크레딧 예산 편성 필요.
- **강의**: "AI와 지정학·규제" 주제의 대표 사례. 모델 티어별 과금 구조(구독 vs 크레딧) 설명 소재.

## 출처

- https://www.anthropic.com/news/redeploying-fable-5 (공식 발표)
- https://venturebeat.com/technology/anthropic-is-bringing-back-claude-fable-5-globally-after-us-lifts-export-control-order-where-can-enterprises-access-it
- https://9to5mac.com/2026/07/01/claude-fable-5-cleared-to-return-as-us-lifts-anthropics-export-control-restriction/
- https://www.marktechpost.com/2026/07/01/anthropic-redeploys-claude-fable-5-on-july-1-after-us-export-controls-lift-adds-new-cybersecurity-classifier/
