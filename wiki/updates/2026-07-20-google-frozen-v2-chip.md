---
type: update
date: 2026-07-20
tools: [gemini]
importance: medium
uses: [ax]
source: https://www.cnbc.com/2026/07/20/alphabet-googl-stock-ai-chip-report.html
---

# Google, Gemini 전용 추론칩 "Frozen v2" 개발 — 전력당 최대 10배 효율

## 무엇이 있었나

Bloomberg 보도(2026-07-20)에 따르면 Google이 Gemini 모델 아키텍처 일부를 하드웨어에
직접 새겨 넣는 새 서버 칩 **"Frozen v2"**를 개발 중이다.

- **효율**: 기존 최신 TPU 대비 전력 단위당 **6~10배 많은 토큰**을 처리할 것으로 프로젝션.
  Gemini 아키텍처 일부를 실리콘에 영구적으로 새겨(hardcode) 연산량·데이터 이동을 줄이는 방식.
- **출시 목표**: 2028년으로 이르게는 잡고 있으나, 설계는 아직 확정 전 — 얼마나 많은 모델
  구조를 하드웨어에 새길지도 미정.
- **목적**: Google Cloud의 내부 컴퓨트 부족(일부 기업 고객 서비스 제약 요인)을 완화하려는
  전략. 기존 TPU를 대체가 아니라 보완하는 포지션.
- 이 보도 직후 Alphabet 주가가 상승했다. 같은 Bloomberg 보도는 Gemini 3.5 Pro 지연의
  배경으로 "코딩 소프트웨어 성능 미달"을 재확인했다.

## 왜 중요한가 (비개발자 관점)

- AI 모델을 범용 칩이 아니라 **모델 전용 맞춤 칩**으로 서비스하는 흐름은 OpenAI의 자체 추론칩
  Jalapeño([[2026-06-24-openai-jalapeno-chip]])와 같은 방향 — "프론티어 AI 기업은 결국
  자체 실리콘을 갖는다"는 업계 패턴이 Google에서도 확인됐다.
  전력당 처리량이 대폭 오르면 최종적으로 AI 서비스 이용료·응답 속도에도 영향을 준다.
- Gemini 3.5 Pro 지연 등 소프트웨어 경쟁에서는 밀리는 모습을 보이던 Google이, 인프라
  (전력·칩) 경쟁력에서는 여전히 강점을 갖고 있음을 보여주는 신호이기도 하다.

## 활용/시사점

- **AX**: 클라우드 AI 인프라 비용 구조는 앞으로도 계속 변할 것 — 특정 벤더의 장기 인프라
  투자 방향(자체 칩 유무)은 3년 이상 스팬의 AI 도입 전략에서 참고할 변수.
- **강의**: "왜 AI 기업들이 자체 칩을 만드는가"를 설명할 때 OpenAI Jalapeño·Google Frozen v2
  두 사례를 나란히 비교하는 교재로 활용 가능.

## 출처

- [CNBC — Alphabet stock pops on report it's developing a more efficient AI chip](https://www.cnbc.com/2026/07/20/alphabet-googl-stock-ai-chip-report.html)
- [Tom's Hardware(thenews.com.pk 재게재) — Google developing 'Frozen v2' chip to hardcode Gemini architecture with 10x efficiency](https://www.thenews.com.pk/latest/1409702-google-developing-frozen-v2-chip-to-hardcode-gemini-architecture-with-10x-efficiency)
