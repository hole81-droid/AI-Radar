# Google Gemini Agent, Anthropic Claude 모델 라우팅 공식 확인 (원문 메모)

- 출처: https://www.orcarouter.ai/blog/claude-models-in-gemini-agent-leak
- 확인일: 2026-10-13

## 핵심

- Google 공식 발표문(2026-10-08, Kurian 키노트): "Gemini 에이전트는 오늘부터 Google
  Gemini 모델군과 Anthropic의 Claude 모델을 오케스트레이션한다"
- X 유출(@testingcatalog)이 먼저 모델명을 거론했으나 모델명 3/4가 부정확했고, Google
  공식 발표가 이를 무의미하게 만들 만큼 명시적으로 확인함 — "유출 발견"이 아니라 "공식
  확인"으로 분류해야 함.
- 세부 사항은 의도적으로 모호: 버전 번호·모델 ID·가용 시점 없음.
- Google Antigravity 문서: Claude Opus 5.5·Claude Sonnet 5.5는 유료(비체험) 티어에서만
  노출.
- "Gemini Business" 티어는 아직 미검증 — SSO 리다이렉트만 존재, 공식 제품 페이지 없음.
- Gemini 4 Argon은 발표됐지만 호출 가능한 모델 ID가 아직 없음. Gemini 3.8 Flash는
  2026-09-02부터 이미 호출 가능.
