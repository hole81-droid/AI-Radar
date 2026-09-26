# Claude, N=4 초대칭 양-밀스 이론 9-루프 진폭을 자율 계산 (Anthropic 공식, 2026-09-25)

원문: https://www.anthropic.com/research/yes-claude-can-do-nine-loops

## 요약

물리학자 Matt von Hippel이 이론물리 최전선 문제 — N=4 초대칭 양-밀스(super
Yang-Mills) 이론의 9-루프 산란 진폭(9-loop hexagon amplitude) 계산 — 을 AI가
풀 수 있는지 공개 챌린지로 제시했다.

- Anthropic 팀이 Claude(Fable 5.1)를 Claude Science 환경에서 활용해 이 계산에
  도전.
- 기존에 확립된 부트스트랩(bootstrap)·폼팩터(form-factor) 계산 기법을 그대로
  적용.
- 96개 CPU에서 약 1주일간 연산 실행, 비용은 약 $100~$2,000 수준으로 추정.
- Claude는 "계속 진행해"(keep working on this) 같은 최소한의 인간 개입만
  받으며 자율적으로 9-루프 결과를 계산 완료.
- 결과는 해당 분야 최고 권위자 중 한 명인 Lance Dixon이 독립적으로 검증.
- 공교롭게도 경쟁 중이던 인간-AI 협업 연구팀이 유사한 결론에 도달하기 며칠
  전에 Claude가 먼저 풀어냄.

## 시사점

- 복잡하고 여러 단계로 구성된, 디버깅이 필요한 취약한 계산 레시피를
  장시간(1주일) 안정적으로 수행할 수 있음을 보여준 사례.
- 에이전트형 시스템이 지속적인 프론티어 수준 연구 작업을 최소 감독으로 수행할
  수 있다는 근거로 제시됨.
