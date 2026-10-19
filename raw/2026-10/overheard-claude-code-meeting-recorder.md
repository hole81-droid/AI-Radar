# Overheard — Claude Code로 만든 Mac 회의녹음 앱(MCP 연동)

- URL: https://github.com/anonbeat1/overheard
- 발견 경로: Reddit r/ClaudeAI top/day(2026-10-19), "I built a free, private
  meeting recorder for Mac entirely with Claude Code. You can chat with your
  meeting notes in Claude Desktop via MCP" 게시물에서 언급 추정(레이트리밋으로
  원 게시물 상세 재확인 실패 — WebSearch로 매칭되는 오픈소스 프로젝트 확인)
- 수집: WebSearch + WebFetch(GitHub README)

## 핵심 내용

- Mac 메뉴바 앱. Google Meet·Teams·Slack 사용 감지 시 자동 녹음, 마이크·시스템
  오디오 별도 트랙 캡처, ⌃⌥M 북마크.
- 화자 구분(diarization), 결정사항·액션아이템·북마크 자동 정리.
- 전사: 클라우드(ElevenLabs) 또는 로컬(Mac GPU, MLX+Cohere Transcribe/pyannote).
- Claude 연동: 자체 MCP 서버로 Claude Code/Desktop/Cowork에서 회의 내용 검색.
- 프라이버시: 모든 데이터 `~/Meetings` 로컬 저장, ElevenLabs 선택 시만 외부 전송.
- 기술스택: Swift/SwiftUI 네이티브.
- 개발 배경(Claude Code로 얼마나 만들었는지 등)은 README에 명시 안 됨.

## 수집 메모

- Reddit 원 게시물 재조회는 429 레이트리밋으로 실패 — 제목 기반으로 매칭되는
  오픈소스 프로젝트를 WebSearch로 특정. 완전 동일 프로젝트인지는 100% 확정
  못함(유사 프로젝트 Parrot·MeetingRecorder-claude도 존재, README 설명이
  Reddit 제목과 가장 일치하는 것을 선택).
