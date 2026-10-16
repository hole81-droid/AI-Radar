# AI coding agents generate more code, but not more software (Harvard study)

- 출처(원문, WebFetch 실패로 2차 확인): https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/
- 교차 확인: Slashdot(https://tech.slashdot.org/story/26/10/12/0234217/ai-coding-agents-generate-more-code-but-not-more-software),
  AI Weekly(https://aiweekly.co/alerts/harvard-study-ai-coding-agents-lift-code-30-shipped-output-flat),
  RealClearMarkets(https://www.realclearmarkets.com/2026/10/10/ai_agents_can_create_more_code_not_more_software_1210927.html)
- 원 HN 게시: https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/ (2026-10-12, 364점)
- 수집일: 2026-10-17 (WebSearch 교차확인, arstechnica 본문 직접 fetch는 차단됨)

## 요약

700개 이상의 소프트웨어 기업을 대상으로 한 Harvard 연구. AI 코딩 에이전트가 개발자의
코드 산출량을 크게 늘리지만, 기업이 실제로 출시하는 소프트웨어 양은 늘리지 못한다는 것을
발견했다.

- 코드 라인 수 +30%, 커밋 +20%, PR +23% 증가
- 그러나 완료된 기능(Jira 이슈·에픽 해결률 기준)은 통계적으로 변화 없음
- 원인: 인간 코드리뷰가 "병목"으로 작동 — 코딩 단계의 효율 향상을 그대로 흡수.
  리뷰 사이클이 길어지고, PR이 더 많은 수정을 요구하고, 리뷰어가 더 많은 코멘트를 남김
- 결론: "기업이 AI 코딩 도구로 소프트웨어 산출량을 늘리거나 고용을 줄인다는 증거는
  거의 없다"

## 메모
- arstechnica 본문 직접 WebFetch는 차단(접근 불가) — Slashdot·AI Weekly·RealClearMarkets
  등 2차 보도로 핵심 수치 교차 확인.
- 같은 날짜대 [[2026-10-09-anthropic-unintended-model-actions-report]] 계열과는 무관한
  별개 연구. 10-16 뉴스레터의 McKinsey "판단력 병목" 진단과 같은 결의 실증 데이터 — 같은
  날 발견한 [[anthropic-claude-code-team-pr-review-automation]](이 병목을 위험기반 승인+
  자동화로 실제로 줄인 반례)와 대조해서 읽을 가치가 있음.
