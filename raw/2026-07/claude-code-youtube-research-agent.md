# I Built a YouTube Research Agent (GenAI Unplugged)

- **원문 URL**: https://genaiunplugged.substack.com/p/i-built-a-youtube-research-agent
- **수집일**: 2026-07-09 (WebFetch 마크다운 변환·요약본)
- **저자**: Dheeraj Sharma (AI 시스템 빌더), Kim Doyal (17년차 콘텐츠 크리에이터, 비개발자 — 에이전트 33개 구축)

---

## 핵심 도구

- **Claude Code**: `.claude` 폴더에 저장된 평문 영어 지시문 파일로 구동
- **YouTube Data API**: 무료 티어 "10,000 units per day, enough for 100 searches daily"
- **Perplexity 또는 Tavily**: 보강·트렌드 검증용 웹 리서치 MCP
- **선택**: Notion 또는 Obsidian 콘텐츠 데이터베이스 연동

## 자동화한 업무 — 5가지 운영 모드

1. `--discover`: 콘텐츠 격차 분석 — 빠진 앵글 식별
2. `--topic [keyword]`: 검색량·경쟁자 성과 심층 리서치
3. `--audit`: 경쟁 채널 분석 — 상위 성과작·패턴
4. `--shorts`: 숏폼 전환 효과 포맷 리서치
5. `--thumbnails`: 클릭 최적화용 제목·썸네일 패턴 분석

## 3계층 아키텍처

- **Layer 1 — 데이터/통합**: YouTube API, 웹 리서치 MCP, (선택) 개인 데이터베이스
- **Layer 2 — 컨텍스트 프로필** (마크다운 3개):
  - `business-context.md` (니치·오디언스·포지셔닝)
  - `content-strategy.md` (필러·주기·영상 아카이브)
  - `competitor-watch-list.md` (경쟁자 명단·격차)
- **Layer 3 — 에이전트 파일 (YAML)**: "the agent name, tools allowed, model it runs on...and, critically, the cost limits" — 에이전트 이름, 허용 도구, 실행 모델, 그리고 결정적으로 비용 한도를 명시

## 비용 관리·API 할당량

- YouTube Data API 무료 할당 "10,000 units per day"
- 에이전트 파일에 비용 한도를 명시적으로 선언해 할당량 초과 방지
- 대체하는 유료 구독: "$15-35 per month" (TubeBuddy 등, 상위 티어는 그 이상)

## 결과

식물성 식단 니치 라이브 데모: 리서치를 "in under 60 seconds"에 완료 — 콘텐츠 격차(부모 대상 전환 가이드)와 랭킹 기회를 조회수·구독자수·댓글·좋아요를 상관 분석하는 커스텀 시그널 스코어링으로 도출.

## 구현 특징

비개발자가 코딩 없이 설정 단계만 따라 구축. 에이전트는 매 리서치 세션 전에 컨텍스트 파일을 읽어, 일반적인 경쟁자 데이터가 아닌 자기 니치 포지셔닝이 반영된 결과를 낸다.
