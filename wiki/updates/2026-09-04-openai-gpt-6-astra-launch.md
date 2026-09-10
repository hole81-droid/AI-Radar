---
type: update
date: 2026-09-04
tools: [chatgpt, codex]
importance: high
uses: [ax]
source: https://9to5mac.com/2026/09/04/openai-releasing-major-upgrade-to-chatgpt-and-codex-with-gpt-6-astra-details-here/
---

# OpenAI, GPT-6 Astra 출시 — 조직 심사 기반 단계적 롤아웃

## 무엇이 바뀌었나

OpenAI가 2026-09-03(현지) GPT-6 Astra를 출시하고, 하루 만에 요금제별로 순차 확대했다.

- **롤아웃 순서**: 09-03 제한된 조직 대상 배포 시작 → 09-04 Business·Pro 확대 → 09-04 Plus까지
  확대. 09-05에는 Codex 기본 모델이 Astra로 전환됐다.
- **컴퓨터 조작 속도 약 2배 향상**: 데스크톱 작업을 수행하는 컴퓨터 사용 능력의 처리 속도가
  전작 대비 크게 빨라졌다고 발표.
- **Codex 맥락 처리 방식 변경**: 이전 대화 맥락을 요약·압축하지 않고 그대로 검색해 재사용할
  수 있게 바뀌었다.
- **사이버보안 Critical 등급으로 기능 제한**: 자사 기준 최초로 사이버보안 능력을 최고
  위험등급(Critical)으로 분류했고, 해당 능력은 별도 심사(Trusted Access Programme)를
  통과한 조직만 쓸 수 있다. Enterprise 요금제에서는 Astra가 기본값이 아니라 관리자가 켜야
  하는 옵션으로 제공된다.
- **제품명 논란**: 08-01 수학 논문으로 존재를 처음 예고했을 때 OpenAI는 "Astra가 GPT-6는
  아니다"라고 선을 그었으나, 09-03 정식 출시명은 결국 **GPT-6 Astra**가 됐다(모델 ID
  `gpt-6-astra`).

> ⚠️ 상충: 08-01 티저 시점의 "GPT-6가 아니다"라는 공식 입장과 09-03 실제 출시명 사이의
> 불일치는 [[openai-gpt-6-astra]] 분석 문서에도 별도 상충 블록으로 기록돼 있다. 최신
> 정보(출시명 GPT-6 Astra)를 우선한다.

사양(컨텍스트 창·요금·지식 컷오프)과 출시 후 개발자 실사용 평가는 이 페이지에서 반복하지
않는다 — 이미 [[openai-gpt-6-astra]]에 상세 정리돼 있다.

## 왜 중요한가 (비개발자 관점)

- 신모델 출시와 동시에 "누가 어디까지 쓸 수 있는가"를 회사가 직접 제한한 드문 사례다.
  성능 발표와 접근 제한 발표가 같은 날 나왔다는 점이 눈여겨볼 만하다.
- 심사 기반 접근 제한은 앞으로 프론티어 모델 도입이 "사겠다고 결정하면 바로 쓸 수 있는 것"이
  아니라 "심사를 통과해야 쓸 수 있는 것"으로 바뀔 수 있다는 신호다.
- 제품명이 티저 때 입장과 달라진 것은 사소해 보이지만, AI 기업의 공식 발표를 그대로 믿기보다
  최종 발표 시점까지 확인해야 한다는 근거로 인용할 만하다.

## 활용/시사점

- **AX**: 사내에 최상위 모델을 도입할 때 "성능이 좋은가"뿐 아니라 "우리 조직이 심사를
  통과해 쓸 수 있는가", "어떤 기능이 기본으로 꺼져 있는가"를 함께 확인해야 한다는 체크리스트
  사례로 쓸 수 있다.
- **강의**: 신모델 출시를 "발표일=사용 가능일"로 단순화하지 말고, 단계적 롤아웃·권한 심사
  구조를 함께 설명하는 도입 사례로 적합하다.

## 출처

- [9to5Mac — OpenAI releasing major upgrade to ChatGPT and Codex with GPT-6 Astra, details here](https://9to5mac.com/2026/09/04/openai-releasing-major-upgrade-to-chatgpt-and-codex-with-gpt-6-astra-details-here/)
- 사양·가격·개발자 평가 상세: [[openai-gpt-6-astra]]
- 08월 티저 배경: [[2026-08-01-openai-astra-teaser-math-proofs]]
