---
type: use-case
date: 2026-09-26
tools: [claude-code]
mechanism: [skills, subagents]
domain: personal-productivity
task: 체스 기보 분석·복기(postmortem) 자료 자동 생성
outcome: 미확인 (개인 프로젝트, 정량 성과 데이터 없음)
model: 미확인
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: low
uses: [course]
source: https://github.com/brumar/chess-postmortem-skills
---

> **공식**: Claude Code Skill로 Stockfish 체스 엔진 분석을 결합해 체스 기보
> 복기 자료 제작을 자동화 → 사람이 읽을 수 있는 주석 PGN·HTML 분석
> 보드·나레이션 영상을 게임당 약 1시간 만에 산출.

## 무엇을 자동화했나

개인 개발자가 만든 Claude Code Skill 모음(`chess-postmortem-skills`)으로,
체스 게임 기보(PGN)를 Stockfish 엔진 분석과 결합해 "왜 이 수가 실수였는지"를
평이한 언어로 설명하는 복기 자료를 자동 생성한다. HN에서 68점을 받아
화제성이 확인됐다.

## 어떻게 구성했나 (아키텍처)

- **Skill 구성**: `chess-analysis`(엔진 분석+설명), `chess-video`(나레이션
  영상), `chess-position`(단일 포지션 분석), `chess-play`(Claude와 대국)
  네 가지 Skill로 나뉘어 있다.
- **핵심 메커니즘**: 먼저 모든 수에 대해 "Stockfish sweep"(엔진 전수 분석)을
  수행한 뒤, **병렬 조사 에이전트(subagent)**를 배치해 각각 엔진에 목표
  지향적 질문을 반복해 던지며 실수를 사람이 이해할 수 있는 언어로 설명할
  때까지 파고든다.
- 옵션 기능으로 대국자의 "생각 소리내어 말하기"(think-aloud) 음성 녹음을
  전사해 PGN 클록 데이터와 시간축으로 정렬하는 기능도 있다.
- 로컬 도구 체인: Python(python-chess·cairosvg) + Stockfish + ffmpeg +
  piper-tts(+옵션 whisper.cpp).

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 설계 | 미확인(로컬 실행 전제, 클라우드 API 키 요구 여부 불명) |
| 성숙도 | prototype (개인 프로젝트 초기 공개) |

## 성과와 수치

정량 성과 지표는 공개돼 있지 않다(미확인). 저장소는 "모든 주장이 Stockfish로
검증됨"이라고만 명시하며, 게임 1건 전체 분석에 약 1시간이 걸린다는 처리
시간만 확인 가능하다. HN 68점은 화제성 신호일 뿐 사용 성과 지표는 아니다.

## 재현 가이드

- **난이도**: 중 (로컬 도구 체인 설치 필요: Stockfish·ffmpeg·piper-tts 등)
- **준비물**: Claude Code, Stockfish 엔진, Python 환경, (영상 제작 시)
  ffmpeg·piper-tts
- **핵심 단계**:
  1. 분석할 게임의 PGN 파일 준비
  2. `chess-analysis` Skill로 전체 게임에 대한 Stockfish sweep 실행
  3. 병렬 조사 에이전트가 각 실수 지점에 대해 엔진에 반복 질의하며 설명
     생성
  4. (선택) `chess-video` Skill로 나레이션 영상까지 자동 제작

## 강의·AX 활용 포인트

- **강의**: "엔진처럼 정답은 내지만 왜 그런지 설명하지 못하는 도구(Stockfish)"와
  "언어로 설명할 수 있지만 정답을 보장 못 하는 도구(LLM)"를 **병렬 조사
  에이전트로 결합**해 서로의 약점을 보완하는 패턴은, 다른 도메인(코드 린터+
  LLM 설명, 통계 모델+LLM 해설 등)에도 그대로 적용 가능한 Claude Code Skill
  설계 예시로 쓸 수 있다.
- **AX**: 개인 생산성 도구 수준의 사례라 기업 적용 근거로는 약하지만,
  "결정론적 엔진의 출력을 LLM이 사람 언어로 번역·설명하는" 구조 자체는
  사내 진단 도구(예: 품질 검사 엔진 결과를 LLM이 리포트화)에 참고할 수 있다.

## 출처

- [GitHub — brumar/chess-postmortem-skills](https://github.com/brumar/chess-postmortem-skills)
- raw: `raw/2026-09/chess-postmortem-skills-claude-code.md`
