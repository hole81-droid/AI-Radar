---
type: update
date: 2026-06-23
importance: medium
uses: [course, ax]
source: https://venturebeat.com/data/mistral-launches-ocr-4-turning-document-extraction-into-a-full-enterprise-ai-play
---
# Mistral OCR 4 출시 — "서류 더미를 구조화 데이터로", 문서 AI의 기업용 승부수

## 무엇인가

프랑스 Mistral AI가 6/23 출시한 문서 인텔리전스 모델. PDF·Word·PPT 등에서 텍스트를
뽑는 수준을 넘어, 문서 전체를 **구조화된 표현**(단어별 위치 좌표 bounding box, 블록 유형
분류, 단어별 신뢰도 점수)으로 반환한다. 170개 언어 지원, 자사 인프라에 단일 컨테이너로
설치하는 셀프호스팅 옵션 제공. 가격은 1,000페이지당 $4(배치 시 $2), 주석·구조화 출력이
포함된 Document AI 등급은 $5. 독립 평가자 블라인드 테스트(600여 개 실제 문서, 12개 언어)에서
경쟁사 대비 평균 72% 승률을 기록했다고 발표.

## 왜 주목할 만한가

- 기업 데이터의 대부분은 비정형 문서다. "AI 도입 = 챗봇"을 지나 실제 병목인
  **문서 처리 파이프라인**을 겨냥한 제품으로, 문서 AI가 독립 시장으로 분화되는 신호.
- 셀프호스팅 지원이 핵심 차별점 — 금융·의료·공공처럼 문서를 외부 API로 못 보내는
  규제 산업을 정면으로 겨냥했다. 유럽 대표 AI 기업다운 포지셔닝.
- Mistral이 €200M(2025) → €1B(2026 목표) 매출 성장과 €20B 밸류에이션 조달설 속에서
  범용 챗봇 대신 기업용 수직 제품으로 수익화하는 전략의 대표 사례.

## 어디에 써먹을 수 있는가

- **AX 관점**: 계약서·전표·보고서 등 문서 기반 업무 자동화 PoC의 구체적 시작점.
  "페이지당 요금"이라 ROI 계산이 쉬워 도입 품의 만들기 좋은 유형의 제품이다.
- **강의 소재**: OCR → 문서 이해(Document AI)로의 진화, 온프레미스 배포가 왜 규제 산업의
  필수 요건인지 설명하는 사례로 적합.

## 출처

- [VentureBeat](https://venturebeat.com/data/mistral-launches-ocr-4-turning-document-extraction-into-a-full-enterprise-ai-play)
- [TechTimes](https://www.techtimes.com/articles/318978/20260624/mistral-ocr-4-ships-structure-aware-document-ai-runs-your-own-infrastructure.htm)
- [Mistral News](https://mistral.ai/news/)
