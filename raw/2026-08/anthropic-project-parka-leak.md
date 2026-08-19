# Anthropic "Project Parka" — 미출시 기능 리버스엔지니어링 (커뮤니티 화제)

- 원문(기술 분석): https://runtimewire.com/article/anthropic-s-project-parka-sits-through-meetings-and-assigns-claude-agents-the-ho
- 커뮤니티 링크: https://old.reddit.com/r/ClaudeAI/comments/1vsgxgn/anthropics_project_parka_sits_through_meetings/
- 게시일: 2026-08-19 (Reddit 게시 기준)
- 수집일: 2026-08-20

## 요지

RuntimeWire가 Claude Desktop 패키지 안에 비활성화 상태로 포함된 미공개 기능 "Project Parka"를
리버스엔지니어링으로 발견해 보도. Anthropic의 공식 발표는 아직 없음(2026-08-20 기준).

## 핵심 내용

- **상태**: 공식 제품 아님. Claude Desktop 패키지에 비활성화 상태로 존재, "공개 빌드는 기능을
  사용 불가로 표시".
- **추정 메커니즘**:
  1. macOS ScreenCaptureKit으로 시스템 오디오·마이크 오디오(또는 혼합) 녹음
  2. 실시간 자막 생성(발화자 라벨·타임스탬프 포함)
  3. 회의 내용을 작업 유형 3가지로 변환: `code`(Claude Code 에이전트용), `cowork`(Claude
     Cowork 에이전트용), `manual`(수동 작업). 각 작업은 제목·설명·담당자·전체 프롬프트·
     실행 유형·autoRunnable 값을 포함.
- 출시 일정 미공지, 현재 일반 사용자 접근 불가.
- r/ClaudeAI에서 화제(리버스엔지니어링 보도를 근거로 한 추측성 논의).

## 원문 URL

https://runtimewire.com/article/anthropic-s-project-parka-sits-through-meetings-and-assigns-claude-agents-the-ho
