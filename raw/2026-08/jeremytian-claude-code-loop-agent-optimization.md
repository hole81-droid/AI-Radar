---
source_url: https://jeremytian.substack.com/p/can-claude-code-in-a-loop-improve
related_url: https://news.ycombinator.com/item?id=49261122
retrieved: 2026-08-12
publish_date: 2026-08-11
---

# Can Claude Code in a loop improve an enterprise AI agent with $10,745 of budget?

WebFetch로 확인한 원문 요지.

## 핵심 내용

- 저자 Jeremy Tian. 이미 프로덕션 배포된 엔터프라이즈 AI 에이전트를 대상으로 자동 최적화
  실험.
- 비교 대상 3개 도구: Claude Code(루프 실행), Andrej Karpathy의 AutoResearch, Kevin Gu의
  오픈소스 AutoAgent. GEPA도 테스트했으나 과적합으로 제외.
- 세 도구 모두 동일 데이터셋 + 동일 채점 기준(judge)으로 정밀도(precision) 측정.
- 결과: 기준선 0.734 → Claude Code 0.818 → AutoResearch 0.843 → AutoAgent 0.877(최고).
- 총 실험 비용 약 $67,000(3개 도구 합산, 에이전트 실행+평가 포함). 제목의 "$10,745"는
  예산 제약으로 추정되나 총지출과의 정확한 관계는 불명.
- 핵심 발견: 세 최적화 도구 모두 "최적해를 초반에 빠르게 찾고 이후 정체"하는 패턴 —
  추가 연산 투입 대비 개선 효율이 급격히 낮아짐.
- Claude Code는 세 도구 중 상대적으로 늦게 시작, 속도도 더 느렸다고 서술(정성적).
- HN 토론(2026-08-11, objectID 49261122, 5점): "Show HN"류 반응 없이 소규모 토론.
