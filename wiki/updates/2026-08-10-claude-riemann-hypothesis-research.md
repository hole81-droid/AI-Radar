---
type: update
date: 2026-08-10
tools: [claude]
importance: high
uses: [course, ax]
source: https://www.anthropic.com/research/riemann-zeta
---

# 미공개 연구용 Claude, 리만 가설 관련 하한을 41.6%→67.2%로 끌어올림 (증명은 아님)

## 무엇이 있었나

Anthropic이 2026-08-10, **미공개(unreleased) 연구용 Claude 모델**에게 수학계 최고 난제 중
하나인 **리만 가설(Riemann hypothesis)**에 도전시킨 결과를 공개했다. 가설 자체를 증명하지는
못했지만, 관련 문제인 "리만 제타함수의 영점 중 가설을 만족하는 비율의 하한(lower bound)"을
**41.6% → 67.2%**로 끌어올렸다.

- 2개 세션에 걸쳐 **3,100만 출력 토큰**을 사용, 약 **60개 서브에이전트**를 조율해 **2,400회
  셸 명령**을 실행하고 수백 개의 Python 스크립트를 작성했다.
- 초기 아이디어 수백 개를 생성 → 최근 문헌 탐색 → 자기 증명에 대한 반박 시도(self-critique)
  → 최종 결과를 **Lean으로 형식 검증**하는 과정을 거쳤다.
- Anthropic 소속 수학자 2명이 논문을 검토했고, 외부 전문가 **Brian Conrey·Dan Goldston**
  (리만 가설 분야 권위자)이 짧은 시간 안에 논문을 검토해줬다.
- 저자들 스스로 "이 기법으로 리만 가설 자체가 증명될 것이라 기대하지 않는다"고 명시했고,
  최근 다른 수학자들의 진전을 종합·정리한 성격이 강하며 근본적으로 새로운 접근법은 아니라는
  점도 밝혔다. 정식 동료검토(peer review)를 완전히 거친 것은 아니다.

## 왜 중요한가 (비개발자 관점)

[[2026-07-20-claude-fable-jacobian-conjecture|3주 전 야코비안 추측 반증 주장]]에 이어,
"AI가 미해결 수학 난제에 기여했다"는 발표가 다시 한번 나온 사례다. 이번엔 Anthropic이
공식 리서치 채널로 직접 발표했고, 사용된 자원(토큰·서브에이전트·셸 명령 수)까지 구체적으로
공개했다는 점에서 이전보다 투명성이 높다 — 다만 "증명이 아니라 하한 개선"이라는 점과
"미공개 연구용 모델"이라 일반 사용자가 재현할 수 없다는 한계는 분명히 구분해야 한다.

## 활용/시사점

- **강의**: [[2026-07-20-claude-fable-jacobian-conjecture]]·
  [[gpt-5-6-sol-ultra-math-proof-subagents]]와 함께 "AI 수학 연구 발표를 어떻게 비판적으로
  읽을 것인가"(증명 vs 진전, 동료검토 여부, 공개 모델 여부) 교재로 묶어 쓰기 좋다.
- **AX**: 60개 서브에이전트 조율 + 자기비판 루프 + 형식검증(Lean)이라는 구조 자체가
  "복잡한 검증 가능 업무에 다중 에이전트를 어떻게 조직하는가"의 참고 사례가 될 수 있다.

## 출처

- [Anthropic Research — Learning more about Claude's mathematical capabilities](https://www.anthropic.com/research/riemann-zeta)
- [Anthropic 공식 X 스레드](https://x.com/AnthropicAI/status/2086867246073401655)
- raw/2026-08/claude-riemann-hypothesis-research.md
- 관련: [[anthropic]], [[2026-07-20-claude-fable-jacobian-conjecture]]
