---
type: analysis
date: 2026-07-14
tools: [claude, claude-code]
importance: high
uses: [course, ax]
source: https://support.claude.com/en/articles/15425996
---

# Claude 엔터프라이즈 도입 경로 — 데이터 정책·사내망 제약 옵션 (2026-07)

## 핵심 요약

- **Claude Enterprise 데이터 정책**: 기본 학습 미사용, 30일 보존, 조직 단위 ZDR(Zero Data Retention) 콘솔 설정 가능. 7/3 신규 "지출 통제·모델별 권한" 기능으로 모델 단위 차단 가능.
- **사내망 제약 기업의 현실 옵션**: AWS Bedrock 경유 — PrivateLink + SCP(Service Control Policy)로 ZDR 강제. "CIO에게 지시할 수 있는 수준"의 경로.
- **SI 경로**: Anthropic × Accenture 파트너십(엔터프라이즈 전환). 국내 접점: SK AX가 Claude Cowork 분석 인사이트 자체 발행 중.

## 활용 포인트

- **AX**: 보안·IT 부서가 실제로 물을 질문("데이터가 학습에 쓰이나", "사내망 안에서 돌릴 수 있나")에 대한 1차 출처 기반 답변 — 거버넌스 논의의 출발점으로 적합.
- **강의**: "IT·보안 부서 요청사항" 실습 세션의 팩트 근거로 활용 가능 (ZDR 콘솔 설정, Bedrock PrivateLink 경로).

## 출처

- https://support.claude.com/en/articles/15425996 (Enterprise 데이터 정책)
- https://aws.amazon.com/blogs/security/enforce-zero-data-retention-on-amazon-bedrock-with-bedrock-projects-and-service-control-policies/
- https://www.anthropic.com/news/anthropic-accenture-partnership · https://www.skax.co.kr/insight/trend/3672
