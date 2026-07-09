---
type: use-case
date: 2026-05-06
tools: [claude-code]
mechanism: [subagents, second-brain]
domain: dev-automation
task: Claude Managed Agents(Cowork)에 드리밍(자가개선)·아웃컴즈(품질평가)·멀티에이전트 오케스트레이션 기능을 결합해 에이전트 팀을 조직처럼 운영
outcome: 아웃컴즈 도입으로 문서 생성 품질 8~10% 향상 (자체 발표); 5/19 런던 편에서 자체 호스팅 샌드박스·MCP 터널 지원으로 확장
model: Claude (Managed Agents/Cowork)
cost: 미확인
permissions: 미확인
maturity: production
evidence: claimed
importance: high
uses: [course, ax]
source: https://www.reuters.com/business/retail-consumer/anthropic-unveils-dreaming-feature-help-its-ai-agents-self-improve-2026-05-06/
---
# Claude Managed Agents — 드리밍·아웃컴즈·멀티에이전트 오케스트레이션

> **공식**: Claude Managed Agents(Cowork)로 subagents+장기 메모리(세션 리뷰)+평가자-작업자 루프를 활용해 에이전트 팀의 자가개선·품질평가·병렬분업 운영을 수행 → 아웃컴즈로 문서 생성 품질 8~10% 향상 (자체 발표)

## 무엇을 자동화했나

Anthropic이 Claude가 관리하는 에이전트(Managed Agents/Cowork)에 세 가지 새 기능을
추가했다. **드리밍(Dreaming)** — 과거 세션들을 리뷰해 반복되는 실수와 팀 전체의 선호
패턴을 찾아내 에이전트가 시간이 지날수록 스스로 개선. **아웃컴즈(Outcomes)** — 성공
기준을 채점표(rubric)로 명시하면 별도 평가자 에이전트가 결과물을 검토해 부족한 부분을
지적하고 재작업을 지시. **멀티에이전트 오케스트레이션** — 리드 에이전트가 배포 기록·
에러 로그·지표 분석 같은 하위 작업을 여러 전문 에이전트에 병렬로 분담.

5/6 SF "Code with Claude" 컨퍼런스에서 최초 공개됐고(Reuters·ArsTechnica·ZDNet 동시
보도), 5/19 런던 편에서는 같은 기능을 재소개하며 **기업용 자체 호스팅 샌드박스·MCP
터널 지원**으로 확장했다.

## 어떻게 구성했나 (아키텍처)

- **드리밍**: subagents + 장기 메모리(과거 세션 리뷰) — 반복 실수·팀 선호 패턴을 학습.
- **아웃컴즈**: 평가자-작업자 루프 — 채점표(rubric) 기반 별도 평가자 에이전트가 결과물을
  검토·재작업 지시.
- **멀티에이전트 오케스트레이션**: 리드 에이전트가 하위 작업을 여러 전문 에이전트에
  병렬 분담.
- **(5/19 런던 편 확장)**: 자체 호스팅 샌드박스·MCP 터널 지원으로 기업이 자사 인프라
  안에서 Managed Agents를 운영할 수 있게 확장. Claude Code 5시간 요금 한도도 전 플랜에서
  2배로 상향(SpaceX 컴퓨트 확보와 연동).

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | Claude (Managed Agents/Cowork) |
| 비용 | 미확인 |
| 권한 | 미확인 (5/19부터 자체 호스팅 옵션 추가) |
| 성숙도 | production (Anthropic 공식 기능으로 정식 배포) |

## 성과와 수치

- **자체 발표**: 아웃컴즈 도입으로 문서 생성 품질 **8~10% 향상** — 외부 독립 검증은
  없어 **주장(claimed)** 수준.
- 그 외 정량 성과는 원문에 없으며, 세 기능 모두 "에이전트를 조직처럼 운영하는" 정성적
  설계 원칙 소개가 중심.

## 재현 가이드

- **난이도**: 중 (Anthropic 공식 기능 활용, 별도 인프라 구축은 자체 호스팅 옵션 선택 시에만 필요)
- **준비물**: Claude Managed Agents/Cowork 접근권, 성공 기준(rubric) 정의
- **핵심 단계**:
  1. 반복 작업의 성공 기준을 채점표(rubric)로 명시해 아웃컴즈 평가자에게 전달
  2. 과거 세션 리뷰를 통한 자가개선(드리밍)이 누적되도록 장기간 운영
  3. 하위 작업을 리드 에이전트가 여러 전문 에이전트에 병렬 분담하도록 오케스트레이션 설계
  4. 기업 인프라 안에서 운영이 필요하면 자체 호스팅 샌드박스·MCP 터널 옵션 검토

## 강의·AX 활용 포인트

- 세 기능 모두 "에이전트를 어떻게 조직처럼 운영할 것인가"에 대한 답이라, 강의에서
  멀티에이전트 오케스트레이션 사례로, AX 보고서에서는 "AI 에이전트 팀의 자가개선·품질
  관리 체계" 근거로 쓰기 좋다.
- SF(5/6)→런던(5/19) 순회 발표에서 같은 기능이 지역별로 다르게 보도된 점은 "공식
  발표 자료도 언론 보도에 따라 프레이밍이 달라질 수 있다"는 미디어 리터러시 예시로도
  쓸 수 있다.

## 출처

- [Reuters — Anthropic Dreaming 기능 공개](https://www.reuters.com/business/retail-consumer/anthropic-unveils-dreaming-feature-help-its-ai-agents-self-improve-2026-05-06/)
- [ArsTechnica](https://arstechnica.com/ai/2026/05/anthropics-claude-can-now-dream-sort-of/)
- [ZDNet](https://www.zdnet.com/article/your-claude-agents-can-dream-now-how-anthropics-new-feature-works/)
- [InfoQ — Code with Claude London (자체 호스팅 확장)](https://www.infoq.com/news/2026/05/code-with-claude/)
