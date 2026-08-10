---
source_url: https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards
related_url: https://x.com/claudeai/status/2085563808773189680
retrieved: 2026-08-08
publish_date: 2026-08-07
---

# Improving Fable 5's biology safeguards

WebSearch로 확인한 원문 요지.

## 핵심 내용

- Anthropic이 2026-08-07 Claude Fable 5의 생물학 관련 안전장치(safeguard classifier)를
  재조정 — 테스트에서 생물학 관련 "폴백"(안전 차단 후 하위 모델로 전환되는 현상)을 약 85%
  줄임.
- 배경: 기존 분류기가 건강 정보 검색·교육용 생물학 질문까지 과도하게 차단(false positive)하는
  경우가 많았음. 분류기의 "constitution"(허용/차단 기준 규칙셋)을 다시 작성 — 양성 사용
  사례에 대한 세부 예외를 만들고, 내외부 전문가 피드백을 수집해 새 학습 데이터를 생성, 재학습.
- 효과: 검사결과 해석, 증상 이해, 교육용 생물학 학습 등 일상적 건강·교육 질문에 대해 훨씬 덜
  차단됨. 의료 전문가의 임상 업무 지원도 개선.
- 제한은 유지: 바이러스학·독성학·분자설계 등 이중용도(dual-use) 우려가 있는 요청은 여전히
  Fable 5가 Claude Opus 5로 폴백 처리.
- 제품별 영향(폴백 총량 감소 추정): Claude.ai 약 67%↓, Cowork 약 55%↓, Claude Code 약 17%↓,
  Claude Platform(API) 약 7%↓.
- 참고: Forkast News는 같은 날 Stanford 연구진이 "AI로 바이러스를 설계할 수 있음을 입증"한
  연구와 겹쳐 "완화와 동시에 우려도 커진" 날이라고 보도 — 이번 완화 자체는 이중용도 영역은
  건드리지 않는다는 점에서 별개 이슈로 취급.

## 위키 반영

→ [[2026-08-07-claude-fable-5-biology-safeguards-update]] (updates)
→ [[anthropic]] 플레이어 페이지 갱신, [[claude-code]] 허브에 짧게 교차링크
