---
type: use-case
date: 2026-07-06
importance: high
tools: [gemini]
uses: [course, ax]
source: https://felloai.com/gemini-spark-vs-claude-cowork/
---
# Gemini Spark vs Claude Cowork — "일 종류별로 AI 비서를 나눠 쓰는" 실전 역할 분담

## 무엇인가

두 AI 에이전트 제품의 실전 사용 구분법이 2026년 7월 초 커뮤니티·유튜브에서 정리되며
"어느 하나를 고르는" 대신 "일 종류별로 라우팅하는" 접근이 확산 중이다.

- **Gemini Spark** (Google, 월 $100 AI Ultra): 클라우드 상주형. 기기를 꺼도 24시간 돌며
  Gmail·Docs·Sheets와 파트너 앱(Canva, Instacart, OpenTable 등)을 자동화. Gemini 3.5 기반.
- **Claude Cowork** (Anthropic, 월 $20부터): 로컬 데스크톱 에이전트(Mac/Windows). 파일
  시스템에 직접 접근해 Excel·Word·PPT·PDF 등 **실제 산출물 파일**을 만든다. 1M 컨텍스트.

정리된 역할 분담: 메일함 정리·상시 모니터링·백그라운드 자동화·예약형 작업 → Spark,
보고서·스프레드시트·문서 산출물·코드·장문 리서치 → Cowork. Jeff Su의 15분 Spark 입문
영상(스킬 등록, 스케줄 자동화) 등 비개발자용 가이드가 이 시기에 함께 확산됐다.

## 왜 주목할 만한가

- 에이전트 제품이 "챗봇 성능 비교" 단계를 지나 **작업 유형별 포트폴리오** 단계로 넘어갔다는
  가장 구체적인 신호. 개인·팀 단위 AI 활용의 새 표준이 되는 중이다.
- 아키텍처 차이(클라우드 상주 vs 로컬 파일 접근)가 그대로 용도 차이로 이어진다는 점 —
  제품 선택 기준을 "벤치마크 점수"에서 "내 일이 어디서 일어나는가"로 바꿔 놓는다.

## 어디에 써먹을 수 있는가

- **강의 소재**: "AI 비서 2개로 내 업무 재설계" 실습 — 수강생 업무를 상시형/산출물형으로
  분류해 각각 배정하는 워크숍. 개념 페이지 [[ai-agent-routing]] 참조.
- **AX 관점**: 부서별 에이전트 도입 시 단일 벤더 일괄 계약 대신 작업 유형별 매핑표를 먼저
  만들어야 한다는 근거. 요금 구조($100 상주형 vs $20 산출물형)도 예산 설계에 직결.

## 출처

- [Fello AI — Gemini Spark vs Claude Cowork 비교](https://felloai.com/gemini-spark-vs-claude-cowork/)
- [Google — Gemini Spark 공식 소개](https://gemini.google/overview/agent/spark/)
- [Jeff Su — Learn 90% of Google's Gemini Spark in 15 Minutes!](https://www.youtube.com/watch?v=7GkIWPPC9i0)
