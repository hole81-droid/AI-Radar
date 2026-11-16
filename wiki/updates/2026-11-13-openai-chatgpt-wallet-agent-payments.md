---
type: update
date: 2026-11-13
tools: [chatgpt]
importance: high
uses: [ax]
source: https://openai.com/index/introducing-chatgpt-wallet/
---

# ChatGPT Wallet 출시 — 에이전트가 카드번호 없이 결제한다

## 무엇이 있었나

OpenAI가 **ChatGPT Wallet**을 발표했다(2026-11-13 공식 발표, 2026-11-16부터 미국
ChatGPT Pro 구독자 롤아웃 시작). 사용자를 대신해 쇼핑·결제를 수행하는 AI 에이전트가
**사용자의 실제 카드 정보에는 접근하지 못한 채** 결제를 완료할 수 있게 하는 결제
도구다. 결제망(American Express·Chase·Mastercard·Visa)이 거래별로 범위가 한정된
토큰(스코프가 좁은 카드번호·보안코드·만료일)을 에이전트에 발급하고, 에이전트는 사용자의
실제 카드 정보를 받지 않는다. 모든 구매에는 보안 확인 절차가 있고, 기존 카드 혜택·분쟁
보호도 그대로 유지된다. 1차 출시 대상은 미국의 18세 이상 ChatGPT Pro 구독자(미국 발행
카드)로 한정된다. OpenAI는 에이전트발 결제를 받으려는 가맹점을 위한 도구·가이드도
함께 공개했다.

## 왜 중요한가

"AI 에이전트가 대신 결제한다"는 시나리오에서 가장 큰 장벽은 카드 정보 노출이었다.
ChatGPT Wallet은 이를 **거래별 범위 제한 토큰** 방식으로 풀어 카드사·결제 네트워크와
함께 표준화를 시도한 첫 사례다. 같은 주 United Airlines가 제3자 에이전트의 항공권
예약을 금지한 것([[2026-11-11-united-airlines-bans-ai-agents-booking]])과 대비하면,
"에이전트 결제"가 신뢰할 수 있는 방식으로 자리잡으려면 카드사·플랫폼의 공식 지원이
전제조건이라는 점이 드러난다.

## 활용 포인트

- **ax**: 에이전트 커머스를 검토하는 조직은 "에이전트가 카드 정보를 직접 보유하지
  않는 구조"를 결제 리스크 관리의 최소 기준으로 삼을 만하다. 가맹점 측에서 에이전트
  결제를 받을지 여부도 이제 정책 결정 사항이 된다.
- 현재는 미국·Pro 구독자·4개 카드사 한정이라 국내 적용까지는 시차가 있다. 확산
  속도와 가맹점 채택률을 다음 분기 지표로 추적할 만하다.

## 출처

- [OpenAI — Introducing ChatGPT Wallet](https://openai.com/index/introducing-chatgpt-wallet/)
- [TechCrunch — ChatGPT's new Wallet lets AI agents shop and check out for you](https://techcrunch.com/2026/11/13/chatgpts-new-wallet-lets-ai-agents-shop-and-check-out-for-you/)
