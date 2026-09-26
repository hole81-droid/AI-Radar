# Chess Postmortem Skills — Claude Code + Stockfish 체스 기보 복기 자동화

원문: https://github.com/brumar/chess-postmortem-skills (HN 68점, 2026-09-26 확인)

## 요약

Claude Code용 Skill 모음. Stockfish 체스 엔진 분석과 Claude의 언어 능력을
결합해 체스 게임을 사람이 읽을 수 있는 복기(postmortem) 자료로 변환한다.

**구성 Skill:**
- `chess-analysis`: 엔진 분석 + 사람이 이해할 수 있는 설명
- `chess-video`: 보드 시각화·평가 게이지가 포함된 나레이션 영상 생성
- `chess-position`: 단일 포지션의 전술·포지셔널 분석
- `chess-play`: PGN을 통해 Claude와 대국

**동작 방식:**
1. 모든 수에 대해 "Stockfish sweep"(엔진 전수 분석) 수행
2. 병렬 조사 에이전트(investigator agents)를 배치해 엔진에 목표 지향적
   질문을 던지며 실수를 평이한 언어로 설명할 때까지 반복 질의
3. (옵션) 플레이어의 생각 소리내어 말하기(think-aloud) 녹음을 전사하고
   PGN 클록 데이터로 특정 수에 정렬

**요구사항**: Python(python-chess·cairosvg), Stockfish, ffmpeg, piper-tts,
(옵션) whisper.cpp. 게임 1건 전체 분석에 약 1시간 소요.

**주장하는 결과**: "모든 주장은 Stockfish로 검증됨" — 계층화된 주석 PGN,
독립 실행 HTML 뷰어, 6~7분 나레이션 영상(자막 포함) 산출.

모델/비용/권한 구체 수치는 저장소에 명시되지 않음(미확인). 개인 프로젝트
성격의 초기 공개(HN 68점).
