# tmux와 Claude Code: Sessions, Send-Keys, and the Ceiling

- URL: https://crystl.dev/guides/tmux-for-ai-agents/
- HN 토론: https://news.ycombinator.com/item?id=50148855 (145점)
- 사건일: 2026-10-19 (HN 게시 기준)
- 수집: WebFetch

## 핵심 내용

- tmux를 Claude Code의 세션 매니저로 사용 — 저장소당 세션 하나(세션명=저장소명).
- `send-keys`: 실행 중인 에이전트에 명령/텍스트 주입.
- `capture-pane`: 에이전트 화면 캡처로 상태 확인.
- `pipe-pane`: 에이전트 출력을 파일로 실시간 스트리밍.
- 효과: SSH 연결 끊김에도 에이전트 지속 실행, 스크립트로 여러 에이전트 동시 제어.
- 한계(저자 직접 언급): "어떤 에이전트가 대기 중인지" tmux가 표시 못함, 재부팅
  시 세션 손실.
- 저자명·구체 발행일 미표시(crystl.dev 가이드 문서).

## 수집 메모

- 멀티 에이전트 오케스트레이션의 가장 저수준·저비용 구현 — 벤더 제공
  오케스트레이션(Claude Managed Agents Dynamic Workflows 등)과 대비 설명하기 좋음.
