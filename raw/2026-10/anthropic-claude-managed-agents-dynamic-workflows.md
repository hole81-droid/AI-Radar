# Anthropic — Claude Managed Agents "Dynamic Workflows" 퍼블릭 베타

- URL: https://platform.claude.com/docs/en/release-notes/overview
- 추가 출처: https://x.com/ClaudeDevs/status/2108591328732856655
  · https://www.tokenpost.com/news/technology/29146
- 발표일: 2026-10-09
- 수집: WebSearch

## 핵심 내용

- Claude Managed Agents에 Dynamic Workflows 추가(`managed-agents-2026-04-01` 베타
  헤더, 퍼블릭 베타).
- 리드 에이전트가 직접 워크플로(여러 에이전트·여러 단계·결과 결합 프로그램)를
  작성하는 새로운 멀티에이전트 오케스트레이션.
- 설정: `multiagent` 필드를 `{"type": "multiagent_20261001", "workflows":
  {"type": "enabled"}}`로 지정. 시스템 프롬프트로 시작 조건 지시, `workflow_run.*`
  이벤트로 추적.
- 런당 최대 1,000개 에이전트를 서버가 백그라운드에서 오케스트레이션. 대량 문서
  리뷰 등 "조각이 많은 업무"에 적합하다고 소개.

## 수집 메모

- ClaudeDevs X 공식 계정이 1차 발표, platform.claude.com 릴리스노트가 기술 상세 출처.
