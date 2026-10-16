# Postgres 19 delayed after AI reviewers find more bugs than humans can fix

- 출처: https://www.theregister.com/databases/2026/10/16/postgres-19-delayed-after-ai-reviewers-find-more-bugs-than-humans-can-fix/5303471
- HN: https://news.ycombinator.com/ (165점, 2026-10-16)
- 수집일: 2026-10-17

## 요약 (WebFetch 정독)

PostgreSQL 19 출시가 9월 말~10월 초에서 2026-11-19로 연기됐고, 중요 기능 8~10개가
PostgreSQL 20으로 밀렸다.

**원인**: 출시 전 몇 달간 LLM 보조 코드리뷰가 점점 더 효과적으로 작동하면서, 인간
리뷰어라면 출시 후에야 발견했을 많은 이슈를 미리 찾아냈다. EDB 부사장·PostgreSQL
커미터 Peter Eisentraut: "LLM 보조 코드리뷰로 이런 것들이 훨씬 빨리 발견되는데, 그러면
40건짜리 결함 리포트 목록을 보고 있게 된다."

**수치**: 결함 리포트 약 40건(엣지 케이스 위주), 개별 수정은 평균 "3줄짜리"로 작아도
합쳐지면 관리 부담이 커짐. 핵심은 AI가 팀이 출시 전에 현실적으로 처리할 수 있는
것보다 훨씬 많은 버그를 찾아냈다는 것 — 코드 품질이 나빠진 게 아니라 **검증 기준
자체가 올라간 것**(이 이슈들은 AI 리뷰 도구가 없던 시절에 커밋된 코드에 원래
있었던 것).

## 메모
이 위키의 [[2026-10-12-harvard-ai-coding-agents-review-bottleneck]](AI가 코드량은
늘려도 산출물은 그대로, 원인은 리뷰 병목)와 정확히 같은 패턴의 실제 사례 — 대형
오픈소스 프로젝트에서 "AI 리뷰가 너무 잘 작동해서 오히려 출시가 늦어지는" 역설적
상황.
