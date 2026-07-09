---
type: use-case
date: 2026-07-08
tools: [claude-code]
mechanism: [subagents, mcp]
domain: content-creation
task: 유튜브 채널 리서치 전반 — 콘텐츠 격차·키워드·경쟁 채널 감시·숏폼 포맷·제목/썸네일 패턴 분석
outcome: 월 $15~35 유료 툴(vidIQ·TubeBuddy) 대체, 데모 기준 리서치 1회 60초 내 완료
model: 미확인 (에이전트 YAML에 모델 지정 필드가 있으나 어떤 모델인지 원문 미명시)
cost: YouTube Data API 무료 할당 일 10,000유닛(약 검색 100회) + 비용 한도를 에이전트 YAML에 명시
permissions: 에이전트 YAML에 허용 도구·비용 한도를 선언하는 설계 (원문 확인)
maturity: pilot
evidence: anecdotal
importance: high
uses: [course, ax]
source: https://genaiunplugged.substack.com/p/i-built-a-youtube-research-agent
---
# 비개발자가 만든 유튜브 리서치 에이전트 — vidIQ·TubeBuddy 대체

> **공식**: Claude Code로 마크다운 컨텍스트 + YAML 에이전트 파일 + YouTube API/웹검색 MCP 3계층 구조를 활용해 유튜브 채널 리서치 전반을 수행 → 월 $15~35 유료 구독 대체, 리서치 1회 60초 내 완료(데모)

## 무엇을 자동화했나

17년차 콘텐츠 크리에이터 Kim Doyal(비개발자, 에이전트 33개 구축)이 Dheeraj Sharma와 함께
코딩 없이 만든 유튜브 리서치 에이전트. 5가지 운영 모드로 채널 운영자의 리서치 업무 전반을 커버:

1. `--discover` — 콘텐츠 격차 분석 (빠진 앵글 발굴)
2. `--topic [keyword]` — 검색량·경쟁 성과 심층 리서치
3. `--audit` — 경쟁 채널 상위 성과작·패턴 분석
4. `--shorts` — 숏폼 전환 효과 포맷 리서치
5. `--thumbnails` — 클릭 최적화 제목·썸네일 패턴 분석

## 어떻게 구성했나 (아키텍처)

3계층 설계 — 전부 자연어 파일이며 코드가 없다:

- **Layer 1 데이터**: YouTube Data API(무료 일 10,000유닛), Perplexity/Tavily 웹 리서치 MCP, (선택) Notion·Obsidian 연동
- **Layer 2 컨텍스트** (마크다운 3개): `business-context.md`(니치·오디언스·포지셔닝), `content-strategy.md`(콘텐츠 필러·주기·아카이브), `competitor-watch-list.md`(경쟁자 명단)
- **Layer 3 에이전트** (YAML): 에이전트 이름·허용 도구·실행 모델·**비용 한도**를 명시

에이전트는 매 세션 전에 컨텍스트 파일을 읽어 자기 니치에 맞춘 결과를 낸다 — 범용 툴과의 차별점.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (YAML에 지정 필드만 존재) |
| 비용 | YouTube API 무료 일 10,000유닛 ≈ 검색 100회, 한도를 YAML에 명시 (원문 확인) |
| 권한 | YAML에 허용 도구·비용 한도 선언 (원문 확인) |
| 성숙도 | pilot (비개발자 실사용, 운영 규모·기간 미확인) |

## 성과와 수치

- 유료 구독 **월 $15~35**(TubeBuddy 등) 대체 — 원문 주장.
- 라이브 데모(식물성 식단 니치): **60초 내** 리서치 완료, 콘텐츠 격차(부모 대상 전환 가이드)와 랭킹 기회 도출 — 일화적(anecdotal) 1회 데모.
- 스코어링: 조회수·구독자수·댓글·좋아요를 상관 분석하는 커스텀 시그널 — 정확도 검증 수치는 미확인.

## 재현 가이드

- **난이도**: 중 (코딩은 없지만 API 키·MCP 연결 필요)
- **준비물**: Claude Code, YouTube Data API 키(무료), Perplexity 또는 Tavily MCP
- **핵심 단계**:
  1. 니치·전략·경쟁자를 담은 컨텍스트 마크다운 3개 작성
  2. 허용 도구와 **비용 한도**를 못박은 에이전트 YAML 작성 — 한도를 빼면 무료 API 할당량이 순식간에 소진되는 것이 재현 시 최대 함정
  3. YouTube API·웹검색 MCP 연결
  4. `--discover`부터 모드별로 검증하며 스코어링 기준을 자기 채널에 맞게 조정

## 강의·AX 활용 포인트

- "데이터 / 컨텍스트 / 에이전트(권한·비용)" 3계층 분리는 비개발자 대상 에이전트 설계 교육의 표준 프레임으로 쓰기 좋다 — 33개 에이전트를 만든 비개발자라는 스토리가 수강생 심리 장벽을 낮춘다.
- SaaS 구독 대체(build-not-buy)의 개인 규모 사례 — [[varun-mayya-5-ai-apps-500-person-company]](조직 규모)와 짝으로 스펙트럼 제시 가능.
- AX 관점: 비용 거버넌스를 에이전트 정의 파일에 내장하는 패턴은 기업 배포 시 그대로 요구할 만한 표준.

## 출처

- [I Built a YouTube Research Agent — GenAI Unplugged (Substack)](https://genaiunplugged.substack.com/p/i-built-a-youtube-research-agent)
- 원문 사본: [[../../raw/2026-07/claude-code-youtube-research-agent]]
