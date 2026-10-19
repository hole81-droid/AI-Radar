---
type: use-case
date: 2026-10-19
tools: [claude-code]
mechanism: [mcp]
domain: personal-productivity
task: 회의 녹음·전사·요약을 로컬에서 처리하고 Claude에서 바로 검색·채팅하기
outcome: Mac 메뉴바 앱으로 오픈소스 공개, 로컬 저장으로 프라이버시 확보 (수치 미확인)
model: 미확인 (전사는 Cohere Transcribe·pyannote, 온디바이스 옵션은 MLX)
cost: 무료(오픈소스), 전사만 ElevenLabs 클라우드 선택 시 별도 비용 발생 가능
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: low
uses: [course]
source: https://github.com/anonbeat1/overheard
---

# Claude Code로 만든 Mac 회의녹음 앱 — MCP로 Claude에서 바로 검색

> **공식**: Claude Code로 mcp를 활용해 "회의 녹음·전사·요약 후 Claude에서 검색"을
> 수행 → 로컬 우선 설계의 오픈소스 Mac 메뉴바 앱 공개

## 무엇을 자동화했나

Reddit r/ClaudeAI에 "Claude Code로 전부 만든 무료·프라이빗 Mac 회의 녹음 앱"으로
공유된 프로젝트 **Overheard**. Google Meet·Teams·Slack 통화를 봇 없이 자동 녹음하고,
전사·화자 구분·요약까지 처리한 뒤 **MCP(Model Context Protocol) 서버**를 통해
Claude Code·Claude Desktop에서 회의 내용을 바로 검색·채팅할 수 있게 한다.

## 어떻게 구성했나 (아키텍처)

- **녹음**: Google Meet·Teams·Slack 사용 감지 시 자동 시작, 마이크와 시스템 오디오를
  별도 트랙으로 캡처, 단축키(⌃⌥M)로 핵심 순간 북마크.
- **전사·분석**: 화자 구분(diarization) 지원, 결정사항·액션 아이템·북마크를 자동
  정리. 전사는 **클라우드(ElevenLabs)** 또는 **로컬(Mac GPU, MLX 기반 온디바이스
  모델 + Cohere Transcribe/pyannote)** 중 선택 가능.
- **Claude 연동**: 자체 **MCP 서버**를 탑재해 Claude Code·Claude Desktop·Cowork에서
  기존 Claude 구독으로 회의 내용을 검색·요약·채팅할 수 있게 한다.
- **프라이버시**: 모든 데이터가 `~/Meetings` 로컬 폴더에 저장되고, ElevenLabs를
  선택한 경우에만 오디오가 외부로 전송된다.
- 기술 스택: Swift/SwiftUI 네이티브 앱.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 전사: Cohere Transcribe·pyannote(클라우드) 또는 MLX 온디바이스 모델(로컬) |
| 비용 | 앱 자체 무료(오픈소스), ElevenLabs 클라우드 전사 선택 시 별도 과금 추정[추정] |
| 권한 | 미확인 |
| 성숙도 | prototype (개인 오픈소스 프로젝트, 공식 벤더 제품 아님) |

## 성과와 수치

정량 수치 없음(anecdotal) — Reddit 게시자 본인이 "유용해서 오픈소스로 공개했다"는
정성적 평가만 확인됨. 제작 과정에서 Claude Code를 실제로 얼마나 활용했는지(코드
비중 등)는 저장소 README에 명시되어 있지 않다.

## 재현 가이드

**난이도**: 상 (Swift/SwiftUI·MCP 서버 구현 지식 필요)

**준비물**: Mac, Claude Code/Desktop, (선택) ElevenLabs API 키

**핵심 단계**:
1. 회의 앱(Meet/Teams/Slack) 사용을 감지해 자동 녹음을 트리거한다.
2. 마이크·시스템 오디오를 분리 캡처하고 화자 구분 전사를 적용한다.
3. 로컬(MLX)·클라우드(ElevenLabs) 전사 중 선택 가능하게 설계한다.
4. MCP 서버를 구현해 전사 결과를 Claude Code/Desktop에서 조회 가능하게 연결한다.
5. 전사·요약 데이터는 로컬 폴더에 저장해 프라이버시를 기본값으로 삼는다.

## 강의·AX 활용 포인트

- "개인 생산성 도구를 Claude Code로 직접 만들고 MCP로 기존 Claude 구독에 연결한다"는
  패턴을 보여주는 소재 — 벤더 SaaS 구독 없이 사내 회의록 도구를 자체 제작하는
  대안 경로로 소개할 수 있다.
- 로컬 우선(local-first) 설계가 왜 기업 회의록 자동화에서 중요한지(민감 대화 내용의
  외부 전송 최소화) 설명할 때 구체 사례로 쓸 수 있다.

## 출처

- [GitHub — anonbeat1/overheard](https://github.com/anonbeat1/overheard)
- Reddit r/ClaudeAI 게시물 (2026-10-19, 원 게시자 계정·구체 댓글 수 미확인 — 429 레이트리밋으로 재조회 실패)
