---
type: update
date: 2026-08-07
tools: [claude, claude-code]
importance: medium
uses: [ax]
source: https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards
---

# Claude Fable 5, 생물학 안전장치 재조정 — 오차단 85% 감소

## 무엇이 바뀌었나

Anthropic이 Claude Fable 5의 생물학 관련 안전장치(safeguard classifier)를 재조정해,
테스트에서 생물학 관련 "폴백"(안전 차단 후 하위 모델로 전환)을 약 85% 줄였다. 검사결과
해석·증상 이해·교육용 생물학 학습 같은 일상적 건강·교육 질문이 예전만큼 자주 차단되지
않는다. 분류기의 허용/차단 기준(constitution)을 다시 써서 양성 사용 사례에 세부 예외를
추가하고, 내외부 전문가 피드백을 반영한 새 학습 데이터로 재학습하는 방식으로 진행했다.

바이러스학·독성학·분자설계 등 이중용도(dual-use) 우려가 있는 요청은 여전히 Opus 5로
폴백 처리돼 제한이 유지된다. 제품별 폴백 총량 감소 추정치는 Claude.ai 약 67%↓, Cowork
약 55%↓, Claude Code 약 17%↓, Claude Platform(API) 약 7%↓다.

## 왜 중요한가

"안전 장치가 지나치게 조심스러워 정상적인 질문까지 막는다"는 흔한 불만(오차단, false
positive)을 수치로 확인하고 개선한 사례다. 일반 사용자 입장에서는 건강 관련 질문에 Claude가
더 유용해졌다는 뜻이고, 동시에 위험한 영역(이중용도)에는 여전히 선을 긋고 있다는 점에서
"완화"와 "통제 유지"를 구분해 설계한 사례로 볼 수 있다.

## 활용 포인트

- **AX**: 안전장치·컴플라이언스 필터를 설계할 때 "차단률"뿐 아니라 "오차단률(false
  positive)"도 함께 관리 지표로 삼아야 한다는 근거 사례.
- **학습과정**: 세이프가드 분류기가 "규칙 나열"이 아니라 "constitution 재작성 + 재학습"
  방식으로 튜닝된다는 점 — [[2026-07-02-claude-cyber-jailbreak-framework]]와 함께 다루면
  안전장치 설계 전반을 설명하기 좋다.

## 출처

- https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards
- https://x.com/claudeai/status/2085563808773189680
- raw/2026-08/claude-fable-5-biology-safeguards-update.md
