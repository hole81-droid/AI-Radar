# OpenAI Agents API — 공개 베타 출시 (2026-09-10/11)

- 원문(문서): https://developers.openai.com/api/docs/guides/agents-api/overview
- 공식 발표(WebFetch 403으로 직접 확인 불가, WebSearch로 교차확인): https://openai.com/index/introducing-the-agents-api/
- HN 스레드: 346점 (2026-09-11 KST 확인)

## 핵심 내용
- 구성 요소: Agent(모델+지침+도구+MCP서버), Environment(선택적 샌드박스), Session(지속), 이벤트 스트림.
- 세션 내 코드 실행, 파일 편집, 웹검색, Skill 적용, 산출물 생성 가능.
- 서브에이전트 동시 최대 4개 위임.
- 샌드박스: OpenAI 자체 / 고객 자체 / Vercel·DigitalOcean 등 파트너 선택 가능.
- 기본 모델: GPT-6 Astra.
- 과금: 별도 플랫폼 수수료 없음, 모델 표준 토큰 요금 + 도구/MCP/샌드박스 표준 요금.
- 제약: 미국 데이터만 지원, Zero Data Retention 미지원.
- 언어 SDK: JS, Python, Go, Java, Ruby, cURL 등.
- 동시 발표: GPT-Live-1 API GA (실시간 양방향 음성, 전화망 연동).

## 출처 목록 (WebSearch 결과)
- gekro.com/news/2026-09-11/ — "OpenAI releases Agents API for autonomous cloud deployment; GPT-Live-1 speech model reaches production"
- valueaddvc.com/pulse/openai-agents-api-public-beta-2026
