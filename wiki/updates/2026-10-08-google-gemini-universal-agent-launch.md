---
type: update
date: 2026-10-08
tools: [gemini]
importance: high
uses: [ax]
source: https://techcrunch.com/2026/10/08/google-brings-agentic-ai-to-gemini-starting-with-businesses/
---

# Google, 업무용 "유니버설 에이전트" Gemini 공개 — Gemini Code Assist는 단종

## 무엇이 있었나

Google Cloud가 2026-10-08 "Gemini at Work 2026" 행사에서 채팅·업무 위임·코드 생성을 하나의
입력창·API로 처리하는 **단일 "유니버설 에이전트" Gemini**를 공개했다. 핵심 특징:

- Gmail·Drive·Docs·Calendar 등 Google 앱 내부에서 동작하며, 대화형 질의응답뿐 아니라 사용자가
  맡긴 목표를 자율적으로 수행하고 일정을 잡거나 이벤트에 반응할 수 있다.
- 서브에이전트에 작업을 위임하고 여러 모델을 동시에 쓸 수 있으며, **자체 워크스페이스 계정(이메일
  주소 포함)**을 가진 "동료"로 취급된다 — 지출 통제도 개별 설정 가능.
- 이와 함께 **Gemini Code Assist(유료 구독형)의 신규 판매가 10/9부로 종료**됐다. 기존 구독은
  2026년 내 자동갱신되지만 2027년부터는 종료되며, Google은 대안으로 **Antigravity**(Gemini
  Enterprise Agent Platform을 통해 제공)를 안내한다.

## 왜 중요한가 (비개발자 관점)

Google이 "채팅 AI"와 "업무를 대신 처리하는 에이전트"의 경계를 없애고 하나의 창구로 통합한
사례다. 동시에 독립 유료 코딩 도구(Code Assist)를 접고 더 큰 에이전트 플랫폼(Antigravity)으로
사용자를 흡수하는 방향은, Claude Code·Codex와 경쟁하는 코딩 에이전트 시장에서 Google이 "단독
제품"보다 "통합 플랫폼" 전략으로 재편하고 있음을 보여준다.

## 활용/시사점

- **AX 관점**: 이미 Gemini Code Assist를 도입한 기업은 2027년 이전에 Antigravity로의 전환 계획을
  세워야 한다 — 자동갱신 종료 시점이 정해져 있어 벤더 로드맵 변경에 따른 마이그레이션 비용이
  현실화되는 사례.
- "자체 이메일 주소를 가진 에이전트" 설계는 기업이 에이전트의 권한·책임 소재를 인사 체계와 유사하게
  관리해야 할 필요성을 시사한다 — Anthropic의 Claude Managed Agents "Dynamic Workflows"
  ([[2026-10-09-anthropic-claude-managed-agents-dynamic-workflows]])와 같은 "에이전트 오케스트레이션을
  벤더가 떠안는" 흐름의 Google판으로 볼 수 있다.

## 후속 (2026-10-13 확인) — 이 "유니버설 에이전트"가 경쟁사 Claude 모델도 직접 호출한다

Google의 공식 발표문이 명시한 내용을 2026-10-13 교차확인했다 — Gemini Agent는 Google
자체 모델(Argon·Flash·Omni·Gemma)뿐 아니라 **Anthropic의 Claude Opus 5.5·Claude Sonnet
5.5를 오늘 시점부터 선택지로 직접 호출한다.** Google 발표문의 표현: "Gemini is the agent,
and the model underneath it is a separate choice" — 즉 "어떤 에이전트를 쓰는가"와 "그
안에서 어떤 모델이 도는가"를 분리하겠다는 것이다.

- 이는 X 등에 돌던 2차 유출(@testingcatalog, 모델명 일부 오류 포함)이 아니라 **Google
  Cloud(Kurian) 공식 키노트 발표문에 명시된 내용**이다 — 유출이 아니라 공식 확인.
- 다만 세부는 의도적으로 모호하다: 버전·모델ID·가용 시점을 밝히지 않았고, Google
  Antigravity 문서 기준으로는 Claude Opus 5.5/Sonnet 5.5가 **유료 구독 티어에서만** 호출
  가능하다(무료 체험 제외).
- 비용 통제 장치로 "멀티모델 오케스트레이션 + 스마트 라우팅(작업별 최적 모델) + 실시간
  지출 캡"을 함께 공개했다.

**AX 시사점**: 자사 "에이전트 플랫폼"을 팔면서 경쟁사 모델을 정식 옵션으로 포함시키는
것은 "에이전트(제품)"와 "모델(엔진)"의 벤더 록인을 분리하겠다는 전략 신호다 — 기업이
에이전트 플랫폼을 고를 때 "이 플랫폼이 어떤 모델까지 품을 수 있는가"가 구매 기준에
추가될 수 있다.

## 출처

- [TechCrunch — Google brings agentic AI to Gemini, starting with businesses (10-08)](https://techcrunch.com/2026/10/08/google-brings-agentic-ai-to-gemini-starting-with-businesses/)
- [orcarouter.ai — Claude in Gemini Agent: The Leak vs Google's Words (후속 확인)](https://www.orcarouter.ai/blog/claude-models-in-gemini-agent-leak)
- [Bloomberg — Google Launches 'Universal' Gemini AI Agent for Workplace (10-08)](https://bloomberg.com/news/articles/2026-10-08/google-launches-universal-gemini-ai-agent-for-workplace)
- [aiweekly.co — Google Ends Gemini Code Assist Sales, Points Buyers to Antigravity](https://aiweekly.co/alerts/google-ends-gemini-code-assist-sales-points-buyers-to-antigravity)
- [Futurum — Google Collapses Enterprise AI Into a Single Gemini Agent at Gemini at Work 2026](https://futurumgroup.com/insights/google-collapses-enterprise-ai-into-a-single-gemini-agent-at-gemini-at-work-2026/)
- 관련: [[2026-10-09-anthropic-claude-managed-agents-dynamic-workflows]]
