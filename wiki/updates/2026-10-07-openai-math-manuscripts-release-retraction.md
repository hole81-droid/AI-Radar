---
type: update
date: 2026-10-07
tools: [chatgpt]
importance: medium
uses: [ax]
source: https://www.implicator.ai/openai-posts-372-ai-math-results-then-withdraws-three-papers-over-a-sign-error/
---

# OpenAI, 수학증명 722건 공개 하루 뒤 3건 철회 — 기호 오류로 의존 체인 붕괴

## 무엇이 있었나

OpenAI가 2026-10-06 공개하지 않은 내부 모델을 활용해 생성한 **372개 계열·총 722건**의
수학 매뉴스크립트(미해결/준해결 문제에 대한 증명 시도)를 한꺼번에 공개했다. 바로
다음 날인 10-07, 그중 **3건을 철회**했다 — 원인은 "분할 아벨 8중체(split abelian
eightfolds)상의 Weil 클래스 대수성(algebraicity)"을 다루는 논문의 **기호 오류**로,
이 오류가 안정화-트레이스 상쇄(stabilization-trace cancellation) 논증을 무효화시켜
의존 관계에 있던 두 논문("K3 표면의 Kuga–Satake 대응의 대수성", "K3 표면 곱의 유리
호지 추측")까지 함께 무너졌다.

같은 변경 내역에서 **14건의 증명이 보정**됐고(그중 4건은 "Lipschitz 높이와
Ashkin–Teller 전류" 관련 교차·경계부착·수렴 논증 보정), 13건의 관련 논문이 수정판을
반영해 갱신됐다. 공개 시점 기준 카탈로그 상위 결과의 약 **42%가 Lean으로 기계검증**된
상태였다.

## 왜 중요한가

- 722건을 하루에 쏟아내고 바로 다음 날 일부를 철회한 속도 자체가 "AI가 생성한 수학
  증명의 검증 속도가 생성 속도를 못 따라간다"는 업계의 우려(증명 검증 희소성,
  arXiv의 "Verification abundance, adjudication scarcity" 논의)를 실증하는 사례다.
- 2026-07-10 공개된 [[gpt-5-6-sol-ultra-math-proof-subagents]](GPT-5.6 Sol Ultra,
  64개 서브에이전트로 Cycle Double Cover Conjecture 증명)와 마찬가지로 "자체 발표,
  동료심사 전" 단계의 성과였다는 공통점이 있다 — 이번 철회는 그 유형의 발표를 받아들일
  때 반드시 동료검증·형식검증(Lean 등) 결과까지 확인해야 한다는 반증 사례로 기능한다.
- 2026-08-01 공개된 [[2026-08-01-openai-astra-teaser-math-proofs]](Astra 수학증명
  예고)의 후속 전개로도 읽을 수 있다 — 예고됐던 대규모 수학 성과가 실제로는
  "생성량은 많지만 결함도 함께 나온다"는 패턴으로 나타났다.

## 활용 포인트

- **AX**: AI가 생성한 "연구 성과"를 도입·인용할 때는 발표 시점이 아니라 **형식검증
  (Lean 등) 완료 여부와 동료검토 결과**를 기준으로 신뢰도를 판단해야 한다는 체크리스트
  사례로 쓸 수 있다.
- **강의**: "생성은 빠르지만 검증은 느리다"는 AI 연구 성과의 구조적 비대칭을
  설명하는 실제 사례(42% 형식검증 완료, 3건 철회, 14건 보정)로 적합.

## 출처

- [implicator.ai — OpenAI Posts 372 AI Math Results, Then Withdraws Three Papers Over a Sign Error](https://www.implicator.ai/openai-posts-372-ai-math-results-then-withdraws-three-papers-over-a-sign-error/)
- [Retraction Watch — OpenAI withdraws three preprints a day after releasing 722 manuscripts on unsolved math problems](https://retractionwatch.com/2026/10/08/openai-withdraws-preprints-722-manuscripts-unsolved-math-problems/)
- [GitHub — openai/math history.md (변경 내역 원문)](https://github.com/openai/math/blob/main/history.md)
- raw/2026-10/openai-math-manuscripts-release-retraction.md
