# blog.szypowi.cz — "Claude Code reads AGENTS.md only when telemetry is on"

- 원문: https://blog.szypowi.cz/p/claude-code-reads-agents.md-only-when-telemetry-is-on/
- 2차 확인(HN, 427점): https://news.ycombinator.com/item?id=49814947
- 게시일: 2026-09-23
- 수집일: 2026-09-24

## 핵심 문제

Claude Code 2.1.277에서 발표한 AGENTS.md 지원 기능([[2026-09-18-claude-code-agents-md-support]])이
원격 feature flag(`tengu_agents_md_mod`) 뒤에 숨어 있어, 텔레메트리를 비활성화한
사용자는 로컬 파일을 읽을 수 없다.

## 기술적 원인

플러그인 코드에서 `isAvailable`이 원격 `tengu_agents_md_mod` 플래그를 확인하며,
통신 실패 시 `false`로 폴백된다. 파일을 읽는 동작 자체는 네트워크가 필요 없는데도
서버 스위치 응답을 기다리는 구조.

## 발견 방식

저자가 canary word를 포함한 테스트 파일로 실험, `DISABLE_TELEMETRY`와
`CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` 두 환경변수가 이 기능을 차단함을 확인.

## 주요 문제점

- **침묵의 실패**: 경고 없이 파일을 건너뜀.
- **프라이버시 모순**: 텔레메트리를 끈 선택이 로컬 파일 읽기 기능까지 영향.
- **정책적 타격**: Bedrock/Vertex 경유 사용자·비필수 트래픽 차단 기업 환경에서도
  동일 문제 발생.

## 현재 상태 (글 작성 시점, 09-23)

공식 수정 확인 전. 임시 우회책: `CLAUDE.md`에 `@AGENTS.md` import 구문 추가 권장.
HN 게시물 제목엔 사후에 [fixed]가 붙었으나, 원문 자체에는 수정 여부·시점이 명시돼
있지 않음 — 다음 스캔에서 상태 재확인 필요.
