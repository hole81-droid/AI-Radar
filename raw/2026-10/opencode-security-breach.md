# OpenCode — 보안 침해 공개 (2026-10-17)

- URL: https://startupfortune.com/opencode-breach-exposes-stored-openai-and-anthropic-keys-prompts-urgent-key-rotation/
- 관련: https://news.ycombinator.com/item?id=50133401 (HN 542점, "OpenCode Hacked: User credentials leaked")
- 발행일: 2026-10-17
- 수집: WebSearch 요약 (OpenCode 자체 공지 X 게시 + 2차 보도 다수 교차확인 — cryptobriefing,
  officechai, cellcog.ai 등)

## 핵심 내용

- OpenCode(Claude Code·Codex의 오픈소스 대안 AI 코딩 에이전트 플랫폼)가 2026-10-17
  보안 침해를 공식 공개.
- **원인**: 공격자가 레거시 시스템 취약점을 악용해 사용자 워크스페이스에 저장된 API
  키에 무단 접근. OpenCode는 "대규모 model distillation attack"으로 규정.
- **영향 범위**: 외부 AI 공급사(Anthropic·OpenAI·Google) 계정을 연동한 Console 사용자
  중 1.4%.
- **영향**: 일부 사용자 계정 잔액이 급격히 소진, 청구액이 수백 달러까지 상승.
- **노출**: 워크스페이스에 저장된 Anthropic·OpenAI·Google API 키.
- **대응**: 영향받은 고객에 이메일 통보, 키 폐기·재발급 권고. 3개 공급사와 공동 대응
  진행 중, 조사 계속.
