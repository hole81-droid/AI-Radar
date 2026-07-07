---
type: update
date: 2026-06-18
tools: [gemini]
importance: medium
uses: [ax]
source: https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
---

# Gemini CLI 강제 종료·Antigravity CLI 전환 발효 — 오픈소스 커뮤니티 반발 확산

## 무엇이 있었나

I/O 2026(5/19)에서 예고된 대로 **6/18부로 개인·AI Pro·Ultra 티어의 Gemini CLI와 Gemini Code Assist가 서비스 중단**되고, Google의 에이전트 개발 플랫폼 **Antigravity CLI**로 강제 전환됐다(옵트아웃 없음). 이후 2주간(6월 말~7월 초) 반발이 확산됐다: GitHub 스타 105K의 Apache 2.0 오픈소스였던 Gemini CLI가 외부 기여자 PR 6,000여 건을 흡수한 뒤 **클로즈드소스 Go 바이너리**로 대체됐고, 무료 티어 한도는 일 1,000회 → 약 20회로 급감했으며, MCP 설정 변경으로 기존 CI/CD 파이프라인이 조용히 깨지는 사례가 속출했다. Linux Foundation은 Open Source Summit NA 2026에서 이런 패턴을 겨냥한 Model Openness Tool을 소개하며 이 사건을 대표 사례로 지목했다.

## 왜 중요한가

- 개발자 사건이지만 본질은 일반적인 교훈이다: **무료·오픈소스로 모은 생태계를 유료·폐쇄형 제품으로 회수**하는 플랫폼 전략의 리스크가 표면화됐다. "Google이 또 서비스를 죽였다"는 불신은 소비자 제품 신뢰에도 전이된다.
- 커뮤니티 기여(6,000+ PR)를 받아들인 뒤 기여자를 배제하는 구조가 논란의 핵심 — AI 도구의 오픈소스 거버넌스 논쟁을 촉발했고 Linux Foundation까지 대응에 나섰다.
- Anthropic(Claude Code)·OpenAI(Codex CLI)와의 CLI 에이전트 경쟁 구도에서 Google이 자발적 이탈 요인을 만든 셈이라는 평가도 있다.

## 활용/시사점

- 기업(AX): 특정 벤더의 무료·저가 도구에 워크플로를 깊게 결합하기 전에 **종료·유료화 시나리오**를 계약·아키텍처 수준에서 대비해야 한다는 실물 사례. CI/CD가 하루아침에 깨진 팀들이 그 비용을 증명했다.
- 교육·실습 커리큘럼에서 Gemini CLI 기반 자료는 전면 폐기 대상 — Antigravity CLI 또는 타사 CLI 기준으로 재작성 필요.

## 출처

- https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/
- https://www.techtimes.com/articles/318660/20260618/gemini-cli-shutdown-takes-effect-ci-cd-pipelines-break-go-based-antigravity-cli-arrives.htm
- https://news.ycombinator.com/item?id=48196867
- https://future-stack-reviews.com/gemini-cli-shutdown-antigravity-cli/
