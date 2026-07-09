---
type: use-case
date: 2026-07-06
tools: [gemini, claude-cowork]
mechanism: [cron-routines, skills]
domain: personal-productivity
task: 개인 업무를 상시 모니터링·예약형(Spark)과 문서 산출물형(Cowork)으로 나눠 두 에이전트에 라우팅
outcome: 수치 미확인 — 단일 제품 선택 대신 작업 유형별 이원 라우팅 체계 정립
model: Gemini 3.5 + Antigravity 하니스 (Spark) / Claude Opus 4.8·선택형 Sonnet 5, 1M 컨텍스트 (Cowork)
cost: Spark 월 $100~200 (AI Ultra 번들, 단독 요금 없음) / Cowork 월 $20부터 (Pro), Max $100·$200, Teams $25/석
permissions: Spark — 거래별 명시 승인(AP2)+지출 한도·카테고리 허용목록, Google Cloud VM 상주 / Cowork — 샌드박스 Linux VM 내 로컬 파일 읽기·쓰기, 거래 승인 체계 없음
maturity: production
evidence: anecdotal
importance: high
uses: [course, ax]
source: https://felloai.com/gemini-spark-vs-claude-cowork/
---
# Gemini Spark vs Claude Cowork — "일 종류별로 AI 비서를 나눠 쓰는" 실전 역할 분담

> **공식**: Gemini Spark + Claude Cowork로 작업 유형별 에이전트 라우팅([[ai-agent-routing]])을 활용해 상시 모니터링·예약 작업(Spark)과 문서·파일 산출물 작업(Cowork)을 분담 수행 → 단일 제품으로 못 덮는 업무 커버리지 확보 (수치 미확인)

## 무엇을 자동화했나

두 AI 에이전트 제품의 실전 사용 구분법이 2026년 7월 초 커뮤니티·유튜브에서 정리되며
"어느 하나를 고르는" 대신 "일 종류별로 라우팅하는" 접근이 확산 중이다.

- **Spark 담당**: 메일함 정리, 상시 모니터링, 백그라운드 자동화, 예약형 작업 —
  기기를 꺼도 24시간 도는 클라우드 상주형이 유리한 업무
- **Cowork 담당**: 보고서·스프레드시트·문서 산출물, 코드, 장문 리서치 —
  로컬 파일 시스템에서 Excel·Word·PPT·PDF 등 **실제 파일**을 만들어야 하는 업무

Jeff Su의 15분 Spark 입문 영상(스킬 등록, 스케줄 자동화) 등 비개발자용 가이드가
이 시기에 함께 확산됐다.

## 어떻게 구성했나 (아키텍처)

아키텍처 차이가 그대로 용도 차이로 이어진다:

- **Gemini Spark** (Google): Google Cloud VM에서 24시간 상주 실행. Gmail·Docs·Sheets와
  파트너 앱(Canva, Instacart, OpenTable) 연동. 구매·거래는 AP2 프레임워크로 건별 명시 승인 +
  지출 한도·카테고리 허용목록. 스킬 등록과 스케줄(예약) 자동화가 핵심 메커니즘.
- **Claude Cowork** (Anthropic): Mac/Windows 로컬 데스크톱 에이전트. 샌드박스 Linux VM 안에서
  로컬 파일 시스템을 직접 읽고 쓰며, Microsoft 365 네이티브 커넥터 제공. 기기가 잠들면 실행도
  멈춤 — 산출물 중심 세션형 작업에 맞는 구조.

## 벤치마크 데이터

| 항목 | Gemini Spark | Claude Cowork | 근거 |
|---|---|---|---|
| 모델 | Gemini 3.5 (Antigravity 하니스) | Claude Opus 4.8, 선택형 Sonnet 5, 1M 컨텍스트 | Fello AI |
| 비용 | AI Ultra 월 $100 (상위 $200) 번들, 단독 요금·무료 티어 없음 | Pro 월 $20(연납 $17)부터, Max $100/$200, Teams $25/석(Premium $125) | Fello AI |
| 권한 설계 | 거래별 명시 승인(AP2), 지출 한도·카테고리 허용목록, 클라우드 VM 상주 | 샌드박스 Linux VM 내 로컬 파일 읽기·쓰기, 거래 승인 체계 없음 | Fello AI |
| 성숙도 | Beta (2026-05-26 주간, 미국 AI Ultra부터) | GA (2026-04-09부터) | Fello AI |
| 증거 수준 | anecdotal — 라우팅 효과의 실측 수치 없음, 커뮤니티 사용례 종합 | 동일 | — |

## 성과와 수치

- 라우팅 자체의 정량 성과(시간 절감 등)는 **미확인** — 원문(Fello AI)도 측정 수치를 제시하지 않는다.
- 확인된 사실은 요금·아키텍처·권한 설계의 구조적 차이(위 표)이며, 성과 주장은 커뮤니티
  사용담 수준(anecdotal)이다.

## 재현 가이드

- **난이도**: 하 (구독 2개 + 업무 분류만으로 시작 가능)
- **준비물**: Google AI Ultra 구독(월 $100), Claude Pro 이상 구독(월 $20~), 자기 업무 목록
- **핵심 단계**:
  1. 반복 업무를 "상시형(모니터링·예약)"과 "산출물형(파일·문서)"으로 분류한다
  2. 상시형은 Spark에 스킬·스케줄로 등록한다 (Jeff Su 15분 가이드 참조)
  3. 산출물형은 Cowork에 로컬 폴더 접근 권한을 주고 세션 단위로 맡긴다
  4. 지출이 발생하는 자동화는 Spark의 AP2 승인·한도 설정을 먼저 건다
  5. 한 달 뒤 각 에이전트가 실제 처리한 업무를 세어 라우팅표를 조정한다

## 강의·AX 활용 포인트

- **강의**: "AI 비서 2개로 내 업무 재설계" 실습 — 수강생 업무를 상시형/산출물형으로 분류해
  각각 배정하는 워크숍. 개념 페이지 [[ai-agent-routing]] 참조.
- **AX**: 부서별 에이전트 도입 시 단일 벤더 일괄 계약 대신 **작업 유형별 매핑표**를 먼저
  만들어야 한다는 근거. 요금 구조($100 상주형 vs $20 산출물형)가 예산 설계에 직결되고,
  권한 모델 차이(거래 승인형 vs 파일 접근형)는 보안 검토 항목이 서로 다름을 시사한다.
- 에이전트 제품이 "챗봇 성능 비교" 단계를 지나 **작업 유형별 포트폴리오** 단계로 넘어갔다는
  신호 — 제품 선택 기준을 "벤치마크 점수"에서 "내 일이 어디서 일어나는가"로 바꿔 놓는다.

## 출처

- [Fello AI — Gemini Spark vs Claude Cowork 비교](https://felloai.com/gemini-spark-vs-claude-cowork/)
- [Google — Gemini Spark 공식 소개](https://gemini.google/overview/agent/spark/)
- [Jeff Su — Learn 90% of Google's Gemini Spark in 15 Minutes!](https://www.youtube.com/watch?v=7GkIWPPC9i0)
