---
type: concept
date: 2026-07-06
importance: medium
uses: [course, ax]
source: https://felloai.com/gemini-spark-vs-claude-cowork/
---
# AI Agent Routing (작업별 에이전트 라우팅) — "하나를 고르지 말고 일 종류별로 배정하라"

## 무엇인가

여러 AI 에이전트·모델 중 하나를 "제일 좋은 것"으로 고르는 대신, 작업 유형별로 가장 잘 맞는
에이전트에 배정(라우팅)하는 사용 전략. 2026년 중반 에이전트 제품들이 서로 다른 아키텍처로
분화하면서(클라우드 상주형 vs 로컬 파일 접근형), 벤치마크 점수가 아니라 **작업의 성격**이
선택 기준이 되는 단계로 넘어왔다.

## 기본 프레임 (2026-07 기준)

| 작업 성격 | 적합 유형 | 예 |
|---|---|---|
| 상시 감시·수신함 자동화·예약 실행 | 클라우드 상주형 | Gemini Spark |
| 문서·엑셀·PPT 등 파일 산출물 제작 | 로컬 데스크톱형 | Claude Cowork |
| 코드 작성·실행·검증 | 샌드박스 실행형 | Claude Code, Codex |
| 전화·음성 응대 | 음성 특화 스택 | xAI Voice Agent Builder ([[2026-07-03-xai-grok-voice-agent-imagine]]) |

## 근거 사례·동향

- [[gemini-spark-claude-cowork-routing]] — 이 프레임이 정리된 대표 비교. 요금 구조까지
  달라서(월 $100 상주형 vs $20 산출물형) 라우팅이 곧 예산 설계가 된다.
- 프런티어 모델의 가격·정책 변동(수출통제로 인한 서비스 중단, 과금 전환 등)이 잦아지면서,
  단일 벤더 올인의 리스크 회피 수단으로도 주목받고 있다.

## 활용 포인트

- **강의**: "내 업무 목록 → 작업 유형 분류 → 에이전트 배정표 만들기" 실습 모듈로 구성 가능.
  도구별 기능 나열보다 전이 가능한(도구가 바뀌어도 유효한) 사고 틀이라는 점이 강점.
- **AX**: 기업 에이전트 도입 시 ①작업별 에이전트 포트폴리오 ②요금·정책 변동 대응
  ③벤더 이중화까지 포함한 운영 모델의 뼈대 개념. 부서별 도입 우선순위 산정에도 사용.

## 출처

- [Fello AI — Gemini Spark vs Claude Cowork](https://felloai.com/gemini-spark-vs-claude-cowork/)
- [Google — Gemini Spark](https://gemini.google/overview/agent/spark/)
