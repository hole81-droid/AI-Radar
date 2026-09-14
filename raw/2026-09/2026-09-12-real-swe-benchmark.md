---
source: https://withspecific.com/benchmarks/real-swe
hn: https://news.ycombinator.com (270점, 2026-09-12 20:25 UTC 게시)
retrieved: 2026-09-14 (2026-09-13 소급 스캔, WebFetch 요약)
---

# Real-SWE 벤치마크 — 실제 엔터프라이즈 코드베이스 기준 코딩 에이전트 평가 (WebFetch 요약 정리)

## 측정 대상
비공개(private) 실제 기업 프로덕션 코드베이스에서의 소프트웨어 엔지니어링 작업 — 청구 처리, 세금 계산, 고객 마이그레이션 등 비즈니스 영향도가 있는 실무 과제.

## 비교 대상 (모델 + 도구, 8개 조합 중 상위 5개)

| 순위 | 모델 | 도구 | 해결률 |
|---|---|---|---|
| 1 | Fable 5.1 | Claude Code | 38.8% |
| 2 | GPT-6 Astra | Codex CLI | 33.8% |
| 3 | Gemini 3.8 Flash | Gemini CLI | 31.2% |
| 4 | GLM 5.3 | Claude Code | 28.8% |
| 5 | Grok 4.6 | Grok Build | 23.8% |

## 핵심 수치
- 회차당 비용: $2.50~$6.96
- 가장 어려운 작업(Analytics stream reducer): 해결률 0.0%
- 평균 실패율 71~73%
- 주요 실패 원인: "Missed requirement"(요구사항 누락), "Integration error"(통합 오류)

## 결론
현재 최상위 코딩 에이전트도 실제 엔터프라이즈 코드베이스에서는 회사별 코딩 패턴 이해·요구사항 검증에 취약해 절반에도 못 미치는 해결률을 보임 — 벤치마크(예: SWE-bench 등 공개 리포·합성 과제) 점수와 실무 성능 사이 괴리를 보여주는 사례.
