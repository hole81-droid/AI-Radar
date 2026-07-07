---
type: update
date: 2026-06-30
tools: [gemini]
importance: high
uses: [course, ax]
source: https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/
---

# Gemini Spark, macOS 상륙 + 커스텀 MCP 지원 — 24/7 에이전트가 내 컴퓨터 안으로

## 무엇이 있었나

Google의 24/7 상시 실행 에이전트 **Gemini Spark**가 6/30부터 **macOS용 Gemini 앱 베타**로 배포되기 시작했다(미국 18+ AI Ultra 구독자 한정). 클라우드 VM에서만 돌던 Spark가 이제 로컬 파일에 접근해 폴더 정리, 내 문서 기반 자료 작성, Workspace를 가로지르는 워크플로 자동화를 수행한다. 함께 발표된 확장: ① **커스텀 MCP(Model Context Protocol) 지원** — 원하는 앱·사내 도구를 직접 연결, ② 연동 앱 확대 — Google Tasks·Keep에 더해 Canva, Dropbox, Instacart, OpenTable, Zillow Rentals, ③ 실시간 모니터링 — 주가가 조건에 닿으면 리포트 발송, 경기 종료 즉시 하이라이트 전달 같은 이벤트 반응형 작업.

## 왜 중요한가

- "채팅하는 AI"에서 "시키지 않아도 일하는 AI"로의 전환이 데스크톱까지 내려온 사건. 파일 정리·예약·모니터링 같은 일상 업무를 백그라운드에서 대신하는 개인 비서 경쟁(vs Claude Cowork, ChatGPT 에이전트)의 최전선이다.
- MCP 지원은 Anthropic이 만든 개방 표준을 Google 소비자 제품이 채택했다는 뜻으로, **에이전트-도구 연결 표준이 MCP로 수렴**하고 있음을 보여주는 결정적 신호.
- Ultra 전용·미국 한정이라는 문턱은 "최첨단 에이전트 = 프리미엄 구독" 가격 전략의 지속을 의미한다.

## 활용/시사점

- 개인·팀: 메일함 정리, 반복 예약, 조건부 알림처럼 "잊고 있어도 되는 일"을 Spark에 위임하는 패턴이 표준화 중. Claude Cowork(파일 산출물)와의 역할 분담 라우팅이 실전 활용법으로 정착.
- 기업(AX): 사내 시스템을 MCP 서버로 노출해 두면 Spark 같은 소비자급 에이전트에도 바로 연결된다 — MCP 대응이 벤더 중립적 선행 투자가 되는 이유.
- 강의 소재: "15분 만에 배우는 Spark"류 콘텐츠가 이미 인기(Jeff Su 등). 비개발자 대상 에이전트 실습 교보재로 적합.

## 출처

- https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-june-2026/
- https://9to5google.com/2026/06/30/gemini-spark-mac-app/
- https://techcrunch.com/2026/07/01/gemini-spark-googles-agentic-assistant-is-now-available-on-mac/
- https://www.engadget.com/2205605/google-gemini-spark-macos-app/
