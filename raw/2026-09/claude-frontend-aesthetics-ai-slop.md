# Claude 프론트엔드 "AI 슬롭" 탈피 — Frontend Aesthetics 쿡북 + 커뮤니티 논의

- 원문: https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics
  (원 쿡북 2025-10 발행, Prithvi Rajasekaran)
- 관련 공식 블로그: https://claude.com/blog/improving-frontend-design-through-skills
- 커뮤니티 재부상 확인: r/ClaudeAI 2026-09-28 top/day 피드에 관련 스레드
  "How are people actually getting Claude to build beautiful UIs instead of generic AI slop?"
- 수집일: 2026-09-29 (WebSearch 종합, 원문 전문은 WebFetch 미실시)

## 요약

문제: 분포적 수렴(distributional convergence) — LLM은 학습 데이터의 통계적 중심(무난한
디자인)으로 수렴해 "AI 슬롭" 아웃풋을 낸다.

대응:
1. 타이포그래피 — Inter·Roboto·Arial 금지 지시
2. 색상 전략 — 지배색+강조색 조합, IDE 테마·문화적 미감 참조
3. MCP로 실제 컴포넌트 라이브러리 연동(손으로 새로 만들지 않게)
4. 커뮤니티 `/frontend-design` Claude Code 스킬로 위 원칙 패키징

정량 성과 수치 없음 — 정성적 개선 보고만 확인됨.
