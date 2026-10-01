# Anthropic Frontier Red Team — "GLM-5.3 and the spread of advanced cyber capabilities"

> 수집일: 2026-10-02 / 발행일: 2026-09-29 (Simon Willison 인용으로 포착)
> 원문: https://www.anthropic.com/research/glm-5-3-and-the-spread-of-advanced-cyber-capabilities
> 1차 포착: https://simonwillison.net/2026/Sep/29/anthropic-frontier-red-team/

## 핵심 내용 (WebFetch 요약)

- Anthropic Frontier Red Team이 내부 Binary Exploitation 벤치마크 100개 과제(무작위
  선정)로 여러 모델의 사이버 공격 능력을 평가.
  - **Claude Mythos Preview**: 완전한 제어 흐름 탈취(control-flow hijack) 성공률 6%
  - **GLM-5.3**(Zhipu, 오픈웨이트): 성공률 4%
  - **Claude Opus 4.6·GLM-5.2**: 0% (이전 세대는 전혀 성공 못함)
- **임계점의 의미**: 두 모델(Mythos Preview, GLM-5.3)이 이전 모델이 하지 못했던
  완전한 제어 흐름 탈취를 해냈다는 점에서 "의미 있는 임계값을 넘었다."
- **결정적 차이는 접근성**: Claude Mythos Preview는 검증된 사용자에게만 제한
  배포되지만, **GLM-5.3은 완전한 오픈웨이트로 누구나 다운로드 가능** — 안전장치
  없이 공개됐다고 Anthropic이 지적.
- **정책 제언**: 오픈웨이트 모델의 안전장치는 Abliteration 같은 간단한 기법으로
  우회 가능하므로, 정부 차원의 독립적 안전성 검증이 필요하고, 방어자(디펜더)도
  최고 수준 모델에 대한 접근권이 있어야 한다고 결론.

## 메모

- 기존 [[2026-08-14-zhipu-glm-5-3-launch]] 페이지에 후속 절로 추가. Anthropic이
  경쟁사(Zhipu)의 오픈웨이트 모델을 안전성 관점에서 직접 평가·비판한 드문 사례 —
  "오픈웨이트 모델 위험 확산" 논쟁에 직접 데이터를 제공한 것이 핵심.
- 인용 규칙 준수: Anthropic 공식 연구 블로그(1차 채널)를 Simon Willison의 인용으로
  포착했고, 원문 URL을 직접 WebFetch로 대조해 반영.
