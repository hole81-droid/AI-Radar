---
type: update
date: 2026-07-20
tools: [claude]
importance: high
uses: [course, ax]
source: https://kingy.ai/blog/claude-fable-jacobian-conjecture-counterexample/
---

# Anthropic 연구자, Claude Fable로 87년 미해결 "야코비안 추측" 반증 주장 (동료검토 전)

## 무엇이 있었나

Anthropic 소속 수학자 **Levent Alpöge**(Harvard 출신)가 공동연구자 "Akhil"과 함께
2026-07-19~20일 밤 X(트위터)에 **야코비안 추측(Jacobian conjecture, 1939년 제기)**을
반증하는 반례를 찾았다고 발표했다. Claude Fable(정확히 어느 버전인지는 불명, 다수 매체는
Fable 5로 추정)의 도움을 받았다고 밝혔다.

- 야코비안 추측은 Steve Smale이 1998년 21세기 수학 난제 18선(P vs NP, 리만 가설과 같은
  리스트)에 포함시킨 문제.
- 공개된 반례는 3변수 정수계수 다항식 사상(F1, F2, F3)으로, 서로 다른 세 유리수 입력이
  동일한 출력 (−1/4, 0, 0)으로 매핑되면서도 야코비안 행렬식이 0이 아닌 상수 −2로 계산된다 —
  야코비안 추측의 핵심 전제를 무너뜨리는 구조.
- **검증 가능성이 핵심 특징**이다: 이 반례는 SymPy·Sage로 누구나 직접 재현·검산할 수 있는
  구체적 공식으로 공개됐다 — AI 기업들이 흔히 인용하는 "벤치마크 점수" 방식과 달리, 독립
  수학자들이 공개적으로 대수 검증에 나섰다.

## 왜 중요한가 (비개발자 관점)

- AI가 벤치마크가 아니라 **87년 동안 아무도 풀지 못한 실제 미해결 수학 문제**에 기여했다고
  주장되는 사례라는 점에서 화제성이 크다 — 같은 주 r/ClaudeAI·r/singularity·Hacker News에서
  동시다발적으로 화제가 됐다.
- 다만 **아직 동료검토(peer review)를 거치지 않았다.** AI가 실제로 어떻게 사용됐는지(채팅,
  코드 실행, 에이전트 방식 등), 얼마나 걸렸는지, 사람이 얼마나 개입했는지에 대한 상세 공개는
  아직 없다 — 프롬프트나 세션 기록이 공개되지 않았다.
- Anthropic 소속 연구자 본인의 발표라는 점에서 이해상충 소지가 있고(자사 모델 홍보 효과),
  "자체 발표 → 커뮤니티 검증 → 동료검토"의 초기 단계임을 감안해야 한다.

## 활용/시사점

- **강의**: OpenAI GPT-5.6 Sol Ultra의 그래프이론 난제 증명 사례([[gpt-5-6-sol-ultra-math-proof-subagents]])와
  같은 패턴 — "AI가 미해결 수학 문제에 기여했다"는 주장이 반복되고 있다는 점에서, "동료검토 전
  자체 발표"를 어떻게 비판적으로 다뤄야 하는지 가르치는 교재로 두 사례를 함께 쓸 수 있다.
- **AX**: 검증 가능한 형태(재현 가능한 공식·코드)로 결과를 공개하는 것이 AI 성과 주장의
  신뢰도를 높이는 방법이라는 점을 시사 — 기업이 AI 활용 성과를 대외 공개할 때 참고할 만한 접근.

> ⚠️ 상충: 최초 X 게시물은 "87년 된" 추측이라 했으나 이후 저자가 "죄송합니다, 87세가 아니라
> [문제 제기 연도 기준] 87년"이라고 정정하는 등 세부 수치가 보도마다 85~87년으로 엇갈린다.
> 문제 제기 연도(1939)는 여러 매체가 일치해 이 문서에서는 1939년을 기준으로 삼았다.

## 출처

- [kingy.ai — Jacobian Conjecture Disproved? Claude Fable Evidence](https://kingy.ai/blog/claude-fable-jacobian-conjecture-counterexample/)
- [Inshorts — Mathematician claims Claude Fable helped him disprove 87-year-old Jacobian conjecture](https://inshorts.com/en/news/mathematician-claims-claude-fable-helped-him-disprove-87-year-old-jacobian-conjecture-1784559581684)
- [officechai — An Anthropic Researcher Says Fable Just Helped Him Disprove The 85-year-old Jacobian Conjecture](https://officechai.com/ai/an-anthropic-researcher-says-fable-just-helped-him-disprove-the-85-year-old-jacobian-conjecture/)
- [r/ClaudeAI — Fable may have disproved a 100 year old conjecture](https://old.reddit.com/r/ClaudeAI/comments/1v1b4i8/fable_may_have_disproved_a_100_year_old_conjecture/)
- [r/singularity — Apparently the Jacobian conjecture was just proven false by Fable](https://old.reddit.com/r/singularity/comments/1v1aie6/apparently_the_jacobian_conjecture_was_just/)
