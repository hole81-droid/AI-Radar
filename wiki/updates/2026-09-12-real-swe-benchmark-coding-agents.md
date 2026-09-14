---
type: update
date: 2026-09-12
tools: [claude-code, codex, gemini]
importance: medium
uses: [ax, course]
source: https://withspecific.com/benchmarks/real-swe
---

# Real-SWE 벤치마크 — 실제 엔터프라이즈 코드베이스에서 코딩 에이전트 해결률 20~40%대

## 무엇이 있었나

Specific(withspecific.com)이 공개(비공개 실제 기업) 프로덕션 코드베이스 기준 벤치마크
"Real-SWE"를 발표했다(HN 270점). 공개 리포지터리·합성 과제 중심인 기존 벤치마크(SWE-bench 등)와
달리, 청구 처리·세금 계산·고객 마이그레이션 등 **실제 비즈니스 영향이 있는 작업**으로 8개
모델·도구 조합을 평가했다.

| 순위 | 모델 | 도구 | 해결률 |
|---|---|---|---|
| 1 | Fable 5.1 | Claude Code | 38.8% |
| 2 | GPT-6 Astra | Codex CLI | 33.8% |
| 3 | Gemini 3.8 Flash | Gemini CLI | 31.2% |
| 4 | GLM 5.3 | Claude Code | 28.8% |
| 5 | Grok 4.6 | Grok Build | 23.8% |

- 회차당 비용 $2.50~$6.96
- 가장 어려운 과제(Analytics stream reducer)는 해결률 0.0%
- 평균 실패율 71~73%, 주요 원인은 "요구사항 누락"·"통합 오류"

## 왜 중요한가 (비개발자 관점)

"AI 코딩 에이전트가 개발자를 대체한다"는 화제가 많지만, 실제 회사 코드에 투입하면 절반도
못 푸는 것이 현재 수준이라는 실측 데이터다. 1위 조합(Claude Code + Fable 5.1)도 38.8%에
그친다 — 회사별 코딩 관례·요구사항을 이해하는 능력이 병목이라는 뜻.

## 활용/시사점

- **AX 관점**: 코딩 에이전트 도입 ROI를 "공개 벤치마크 1위"만으로 판단하면 안 된다 —
  자사 코드베이스 기준 파일럿 테스트가 필수라는 근거 자료.
- **강의 소재**: 도구별(Claude Code·Codex CLI·Gemini CLI) 비교 데이터로 "적합한 도구
  선택" 실습에 바로 쓸 수 있음.
- [[real-swe-benchmark-coding-agents|이 페이지]]는 [[claude-code]]·[[codex]]·[[gemini]]
  세 허브에서 교차 참조.

## 출처

- [Specific — Real-SWE Benchmark](https://withspecific.com/benchmarks/real-swe)
