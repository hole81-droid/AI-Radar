# Claude Code Mods 정식 출시 (v2.1.287)

> 수집일: 2026-10-05 / 발행일: 2026-10-01
> 공식 문서: https://code.claude.com/docs/en/plugins/mods/overview

## 핵심 내용 (WebFetch + WebSearch 요약)

- mod는 플러그인 안에 담긴 JS/TypeScript 이벤트 핸들러. 툴 호출, 프롬프트 제출,
  턴 완료, 슬래시 명령, UI 렌더링 등 Claude Code 내부 이벤트를 관찰·수정·가로챌 수 있음.
- 기존 설정파일 기반 hooks(셸 명령)와 달리 Claude Code 프로세스 안에서 직접 실행 —
  패널·버튼 등 UI를 그리거나 툴 호출 자체를 바꿔치기 가능.
- Anthropic 자사 기능 3종(/diff 패널, AGENTS.md 로더, 텔레메트리)을 전부 mod로
  재구현해 "Built-in mods"로 공개.
- 샘플 mod 3종: blast-radius(위험 명령 영향범위 시각화), token-weather(컨텍스트
  소진 예보), replay-theater(직전 턴 파일수정 재생) — claude-code-playground 저장소.
- 커뮤니티 카탈로그 awesome-claude-code-mods 등장 — GitHub 공개 mod를 스캔해
  읽기/쓰기/실행/네트워크 접근권을 자동 분석.
- 보안: mod는 샌드박싱되지 않고 사용자 전권한으로 실행 — 권한 프롬프트를 사용자
  대신 승인하는 것까지 가능. 신뢰하는 마켓플레이스의 mod만 설치하라고 명시.
- 버전 요구: v2.1.287+, 기본 켜짐. --safe-mode로 세션 단위 비활성화,
  disableAllHooks로 영구 비활성화.
- 09-18 AGENTS.md 지원 기능이 이 mods 체계의 "첫 내장 mod"였던 것이 이번에
  전체 플랫폼으로 공식 출시됨.

## 메모

- 기존 페이지 [[2026-09-18-claude-code-agents-md-support]]에 "10-01 후속" 절로 반영
  (중복 페이지 생성 대신 연속된 사실로 통합).
- [[wiki/tools/claude-code]] 허브에도 기능 추가 반영.

## 출처

- https://code.claude.com/docs/en/plugins/mods/overview
- https://github.com/anthropics/claude-code/tree/main/mods
- https://github.com/anthropics/claude-code-playground/tree/main/claude-code/mods
- https://github.com/karanb192/awesome-claude-code-mods
