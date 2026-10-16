---
type: update
date: 2026-10-12
tools: [claude-code, codex]
importance: high
uses: [ax, course]
source: https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/
---

# Harvard 연구, "AI 코딩 에이전트는 코드를 늘리지만 소프트웨어는 안 늘린다" — 700개+ 기업 실측

## 무엇이 있었나

Harvard 연구진이 700개 이상의 소프트웨어 기업을 대상으로 AI 코딩 에이전트 도입 효과를
실측했다. 코드 라인 수는 +30%, 커밋은 +20%, PR은 +23% 증가했지만, **완료된 기능(Jira
이슈·에픽 해결률 기준)은 통계적으로 변화가 없었다.**

원인으로 지목된 것은 **인간 코드리뷰라는 병목**이다 — 코딩 단계에서 생긴 효율
향상을 리뷰 단계가 그대로 흡수한다. AI 에이전트가 산출물을 늘릴수록 리뷰 사이클이
길어지고, PR이 더 많은 수정을 요구받고, 리뷰어가 더 많은 코멘트를 남긴다. 연구의
결론: "기업이 AI 코딩 도구로 소프트웨어 산출량을 늘리거나 고용을 줄인다는 증거는
거의 없다."

## 왜 중요한가 (비개발자 관점)

"AI가 코드를 더 빨리 쓴다"와 "회사가 더 많은 소프트웨어를 더 빨리 내놓는다"는
서로 다른 주장이라는 것을 700개 기업 규모로 실측 확인한 것이다. 같은 주
10-16 뉴스레터에 실린 McKinsey의 "판단력 병목"(에이전트 속도를 조직의 판단·검증
역량이 못 따라간다는 진단)과 정확히 같은 결의 실증 데이터다.

흥미로운 대조는 같은 시기 공개된
[[anthropic-claude-code-team-pr-review-automation]] 사례다 — Anthropic의 Claude
Code 팀은 같은 "리뷰 병목"을 겪었지만, 위험도 기반 차등 승인 + 자동 AI 리뷰로
재설계해 되돌리기율 40%↓·1회 통과율 65%→78%를 실측했다. 즉 **병목 자체는
업계 공통이지만, 그걸 뚫은 조직과 그대로 막힌 대다수 조직의 차이**가 이번
연구가 가리키는 지점이다.

## 활용/시사점

- **AX 관점**: "에이전트 도입 → 산출량 증가"를 자동으로 가정하지 말고, 리뷰·배포
  단계의 조직 설계를 함께 바꿔야 한다는 근거 자료로 쓸 수 있다. 코딩 에이전트
  도입 ROI를 측정할 때 "코드량"이 아니라 "출시된 기능 수"를 지표로 삼아야 한다는
  교훈.
- **강의 관점**: AI 생산성 담론의 "속도 신화"에 대한 균형추로, 과대 기대를
  관리하는 사례로 쓸 수 있다.
- arstechnica 원문은 WebFetch가 차단되어 Slashdot·AI Weekly·RealClearMarkets 등
  2차 보도로 수치를 교차 확인했다.

## 출처

- [Ars Technica — AI coding agents generate more code, but not more software](https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/)
- [Slashdot 재게시](https://tech.slashdot.org/story/26/10/12/0234217/ai-coding-agents-generate-more-code-but-not-more-software)
- [AI Weekly 요약](https://aiweekly.co/alerts/harvard-study-ai-coding-agents-lift-code-30-shipped-output-flat)
- 관련: [[anthropic-claude-code-team-pr-review-automation]] (같은 병목을 자동화로 뚫은 반례)
