---
source: https://www.latent.space/p/airbnb
date: 2026-10-02
title: "Inside-Out AI: Rebuilding Airbnb Behind the Scenes and Across the Guest Experience"
author: Richard MacManus (Latent Space, interview with Ahmad Al-Dahle)
captured: 2026-10-03
---

# Latent Space — Airbnb AI 전환 인터뷰 (요약 캡처)

Ahmad Al-Dahle(전 Meta Llama 모델 총괄, 현 Airbnb AI 책임자)와의 인터뷰. WebFetch로 추출한
핵심 내용 (원문은 Substack 유료 구간 포함, 아래는 공개 구간 기준 요약):

## 사내 AI 도구·개발 관행

- **AirChat**: 제품팀이 쓰는 사내 에이전트. 조직 전체의 필요한 MCP 컨텍스트를 포함.
- **Everest**: LLM+임베딩+AI 기반 검색으로 만든 "조직 컨텍스트 그래프". 제너럴리스트가
  전문 영역 코드에 접근해 작업할 수 있게 해줌 — 이 덕분에 식료품 배달 서비스(8~9개월),
  공항 픽업 서비스(6주) 같은 신규 서비스를 빠르게 론칭.
- **비동기 에이전트**: 모니터링 알림이 뜨면 컨테이너에서 자동으로 온콜 사고를 트리아지하는
  이벤트 기반 에이전트.
- **코드 우선 개발**: 요구사항 문서 대신 프로토타입·코드를 1차 산출물로 삼는 방식으로 전환.
- **AI 보조 PR**: 에이전트가 수정안을 제안하고 사람 엔지니어가 검토.

## 수치

- 코드의 60%가 AI 저작
- 전년 대비 기능 출시량 약 80% 증가
- 평균 엔지니어 PR 처리량 1.6배
- 고객 지원 티켓의 약 45~50%를 AI가 단독 해결(안전 이슈는 사람 유지)

## 모델 전략

Airbnb는 "멀티모델 기업"으로 프로덕션에 최소 10개의 커스텀 모델을 운영, 유스케이스별
비용·성능·지연시간 파레토 프론티어로 모델을 선택.

## 평가 메모

- 구체적 벤치마크 방법론(측정 기간, 비교 기준선)은 공개 구간에 노출되지 않음 — 수치는
  Airbnb 자체 발표 기준, 제3자 검증 없음.
- 인터뷰이가 Airbnb AI 책임자 본인이라 자사 긍정 사례 위주로 구성됐을 가능성 고려.
