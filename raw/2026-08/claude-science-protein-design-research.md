# Anthropic, Claude로 단백질 결합체 설계 자동화 — 업계 대비 2배 적중률

- 원문: https://www.anthropic.com/research/Claude-accelerates-protein-design (공식 연구 발표)
- 게시일: 2026-08-18
- 수집일: 2026-08-22 (WebFetch로 공식 원문 대조)

## 요지

Anthropic이 Claude Opus 4.8과 Claude Mythos Preview 두 모델을 Claude Science 환경에서
자율적으로 단백질 설계 소프트웨어를 오케스트레이션하도록 테스트, 15개 타깃 중 14개에서
작동하는 단백질 결합체를 만들어냈다고 발표.

## 핵심 수치

- 총 1,320개 설계 중 354개가 실제로 결합 확인(외부 검증 포함).
- 적중률: Opus 4.8 다중타깃 22.6%, Mythos 다중타깃 26.7%, Mythos 단일타깃 35.1%
  — 업계 통상치 10~15% 대비 약 2배.
- RBX1 타깃: Mythos 40% 적중률 vs 경쟁 참가자 평균 3.7%.
- TREM2(알츠하이머 연관) 타깃: 90개 중 72개 결합 성공(80%).
- 분석화학(NMR·LC-MS) 원자료 처리도 테스트: NMR 23분, LC-MS 19분 만에 처리, 수소 개수는
  실험실 표준 대비 0.08 이내 오차, 순도 측정 96.4% vs 실험실 96.33%.

## 검증

- Adaptyv Bio·Twist Bioscience 두 독립 기관이 Claude 설계 단백질을 실제 습식 실험실에서
  제작·검증.

## 왜 중요한가 (Anthropic 주장)

- 단백질 설계는 전통적으로 타깃당 수개월의 계산·최적화·스크리닝이 필요한 전문 영역인데,
  Claude가 이 과정의 시간·전문성 요구를 크게 줄일 수 있음을 시사.
- [[2026-08-10-claude-riemann-hypothesis-research]](리만 가설)·
  [[2026-07-20-claude-fable-jacobian-conjecture]](야코비안 추측)에 이어 "AI가 과학
  연구 자체를 가속한다"는 Anthropic의 발표 패턴이 반복됨 — 이번엔 수학이 아니라 생물학·
  신약개발 분야.
