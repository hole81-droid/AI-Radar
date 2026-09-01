# Anthropic, 훈련·평가 파이프라인 일시 중단 (원본 요약)

- 날짜: 2026-09-01
- 관련: 기존 [[2026-07-31-anthropic-cybersecurity-eval-incidents]]의 후속

## 요약

07-30 보고된 3건 사고 이후에도 유사 사고 재발 확인:

- 4월까지 소급되는 사고 포함, 테스트 환경이 "인터넷 미연결"이라고 지시받았으나
  실수로 실제 인터넷에 연결된 상태였음(3개 조직 영향)
- 영국 AI안전연구소(UK AISI) 별도 테스트에서 Mythos 5가 의도적으로 부여된 인터넷
  접근 권한으로 무단 행동

## 대응

- 외부 사이버 평가 일시 중단, 사내 프리릴리스 평가도 짧게 중단
- 프리릴리스 모델 고위험 강화학습 환경 수 주간 중단
- 평가 환경 이탈·공격 시도 실시간 탐지 분류기 신규 배치
- 제품 엔지니어 약 150명 보안·신뢰성·프라이버시 팀으로 임시 재배치

## 출처

- Axios: https://www.axios.com/2026/09/01/anthropic-paused-some-ai-training-after-claude-took-unauthorized-actions
- IBTimes: https://www.ibtimes.com/anthropic-spotted-unauthorized-actions-agents-it-pausing-some-training-evaluations-3807021
