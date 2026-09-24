---
type: update
date: 2026-09-23
tools: [claude-code]
importance: high
uses: [course, ax]
source: https://www.anthropic.com/news/claude-discovers-novel-enzyme-system
---

# Anthropic, Claude가 CRISPR 유사 신규 효소 시스템을 독립 발견했다고 발표 — 과학자들은 신중론

## 무엇이 있었나

Anthropic이 2026-09-23 공식 발표를 통해, Claude 에이전트들이 박테리오파지(박테리아
감염 바이러스)에서 CRISPR와 유사한 특성을 지닌 미확인 효소 시스템 "배열 연관
역전사효소(ART)"를 독립적으로 발견했다고 밝혔다.

- 약 **950개 에이전트가 21시간**에 걸쳐 작업, **2억 1천만 개 토큰** 소비.
- 20만 개 이상의 역전사효소 후보를 수집 → 3,500개로 압축 → 최종 20개 최고 후보를
  심층 분석.
- 인간 과학자는 초기 프롬프트 설계와 실험실 검증만 수행했고, 거대 DNA 서열
  데이터베이스 탐색·후보 선정·분석은 Claude가 주도.
- Anthropic 신설 생명과학 연구 그룹의 첫 성과로, 대규모 DNA 데이터셋에서 실험실
  검증용 단백질 후보를 발굴하는 것이 목표.

## 왜 중요한가

- Anthropic 스스로도 발표문에서 "이 시스템이 무엇을 하는지, 유사하게 활용 가능한지는
  아직 훨씬 더 많은 연구가 필요하다"고 단서를 달았다 — **서열 유사성 발견**과
  **기능이 검증된 발견**은 다른 수준의 주장이다.
- Bloomberg가 09-24 보도한 바에 따르면, 일부 생물학자들은 "CRISPR와 유사하다"는
  표현이 아직 기능 검증 전인 발견을 실제보다 과장했다고 지적했다 — AI 연구 성과
  발표를 비판적으로 읽어야 하는 이유를 보여주는 사례.
- [[2026-09-04-anthropic-claude-fermat-last-theorem-proof]](수학, 컴퓨터 검증)·
  [[2026-08-10-claude-riemann-hypothesis-research]](수학, 부분 개선)에 이어지는
  "Claude 과학 성과" 시리즈지만, 이번엔 컴퓨터가 한 줄씩 검증 가능한 형식적 증명이
  아니라 **실험실 검증이 아직 남은 가설 생성 단계**라는 점에서 신뢰 수준이 다르다.

## 활용/시사점

- **강의**: "AI가 발견했다"는 발표를 접했을 때 (1)가설 생성 단계인지 (2)형식적으로
  검증된 결과인지 (3)실험적으로 확인된 결과인지 구분해서 읽는 훈련 사례로 쓰기
  좋다. 같은 주 OpenAI 나비어-스톡스 사례([[2026-09-08-openai-navier-stokes-solved]])와
  비교하면 "동료검토 전 주장"과 "컴퓨터 검증 완료"와 "실험 검증 대기 중 가설"의
  3단계 신뢰 스펙트럼을 한 번에 가르칠 수 있다.
- **AX**: 대규모 에이전트 스웜(950개, 21시간, 2억+ 토큰)을 단일 연구 과제에 투입하는
  스케일 감각 자체는 참고할 만하나, "발표=확정된 성과"로 오독하지 않도록 홍보성
  발표와 실제 검증 상태를 구분해 내부에 전달하는 절차가 필요하다.

## 출처

- [Anthropic — Claude discovers a novel enzyme system](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system)
- [Bloomberg — Anthropic Biology Discovery Draws Cautious Notes From Scientists (09-24)](https://www.bloomberg.com/news/articles/2026-09-24/anthropic-biology-discovery-draws-cautious-notes-from-scientists)
- raw: `raw/2026-09/anthropic-claude-novel-enzyme-discovery.md`
