---
source_url: https://www.anthropic.com/research/riemann-zeta
related_url: https://x.com/AnthropicAI/status/2086867246073401655
retrieved: 2026-08-11
publish_date: 2026-08-10
---

# Learning more about Claude's mathematical capabilities (Riemann zeta)

WebFetch/WebSearch로 확인한 원문 요지.

## 핵심 내용

- Anthropic이 **미공개(unreleased) 연구용 Claude 모델**에게 리만 가설(Riemann hypothesis)에
  도전하도록 시켰다. 가설 자체를 증명하지는 못했지만, 관련 문제인 "리만 제타함수의 영점 중
  가설을 만족하는 비율의 하한(lower bound)"을 **41.6% → 67.2%**로 끌어올렸다.
- 사용 자원: 2개 세션에 걸쳐 **31M(3,100만) 출력 토큰**, 약 **60개 서브에이전트**를 조율,
  **2,400회 셸 명령** 실행, 수백 개의 Python 스크립트 작성. 초기 아이디어 수백 개를 생성한 뒤
  문헌 탐색·자기비판(자신의 증명에 반박 시도)을 거쳐 최종 결과를 **Lean으로 형식 검증**.
- 검증: Anthropic 소속 수학자 2명이 논문을 검토해 전문가용 요약 노트를 작성했고, 외부
  전문가 **Brian Conrey·Dan Goldston**(리만 가설 관련 권위자)이 단기간 내 논문을 검토.
- 저자들 스스로 유보 명시: "이 기법으로 리만 가설 자체가 증명될 것으로 기대하지 않는다."
  최근 다른 수학자들의 진전을 종합·정리한 성격이 강하고, 근본적으로 새로운 접근법을 제시한
  것은 아니라는 점도 언급.
- 발표일: 2026-08-10. 아직 정식 동료검토(peer review)를 완전히 거친 것은 아님.

## 위키 반영

→ [[2026-08-10-claude-riemann-hypothesis-research]] (updates, 신규)
→ [[2026-07-20-claude-fable-jacobian-conjecture]]와 교차링크 (AI-수학연구 발표 패턴 반복)
→ [[anthropic]] 플레이어 페이지 갱신
