---
type: update
date: 2026-10-28
tools: [gemini]
importance: high
uses: [ax]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
---

# Google DeepMind, "Gemini 4 Carbon" 출시 — 독립 벤치마크 1위, 사이버 방어·장시간 에이전트 특화

## 무엇이 있었나

Google DeepMind가 Gemini 4 패밀리의 두 번째 모델 **"Gemini 4 Carbon"**을 공개했다
(Argon 출시 09-30 이후 4주 만). 자사 소개 문구는 "사이버보안과 장시간(long-horizon)
작업에서 최고 수준"이다.

- **독립 벤치마크 1위**: Artificial Analysis Intelligence Index v5.0에서 **59점**으로
  1위 — Anthropic Claude Opus 5.5(58점)·OpenAI GPT-6 Astra(57점)·자사 Argon(50점)을
  앞섰다. 9개 세부 지표 중 4개(HLE-Diamond·Terminal-Bench-Science·AA-Omniscience·
  AutomationBench-AA)에서 최고점.
- **사이버보안 특화 성능**: 취약점 탐지 SEC-bench Pro **88.2%**, 익스플로잇
  ExploitGym **54.8%**, 패치작성 CWE-bench **71.0%**. Chrome 팀은 "다른 프론티어
  랩 대형 모델 대비 패치 품질이 10배 이상 좋았다"고 밝혔다는 인용이 있다.
  Argon 대비 보안 코드 생성 성공률은 2배 이상.
- **"지속형 에이전트(sustained-agent)" 설계**: 멀티스텝 작업을 맥락을 잃지 않고
  수일간 자율 수행하도록 설계됐다는 점을 전면에 내세웠다 — Argon의 "사이버
  방어" 포지셔닝을 이어가면서 지속시간 축을 추가한 것.
- **코딩 에이전트 지표**: Artificial Analysis Coding Agent Index에서 Antigravity
  CLI 조합 59점 — Claude Code+Opus 5.5(62점)에는 3점 뒤짐.

### 가격·공개 범위

도입 가격은 입력 $2/백만 토큰·출력 $10/백만 토큰(캐시 입력 95% 할인), 이후 정가는
$4/$20로 2배 인상 예정 — Argon과 동일한 도입가 구조. **1차 공개는 "신뢰받는 사이버
방어자" 한정**(Fairwind Program 단계적 확대)이며, 개발자·기업·일반 소비자용 정식
공개 일정은 발표에서 밝히지 않았다. Argon은 이 단계에서 2주 만에 확대됐으나, Carbon이
같은 속도로 넓어질지는 불확실.

## 왜 중요한가

Gemini 4 Argon(09-30)이 "신뢰 사이버 방어자 한정 공개"로 조심스럽게 출발한 지 한 달
만에 후속 모델이 나오면서, Google의 신모델 출시 주기가 명백히 **월 단위로 가속**되고
있음을 보여준다. 동시에 독립 평가기관(Artificial Analysis) 기준 **프론티어 지능
지표에서 Anthropic·OpenAI를 모두 제친 첫 공식 1위**라는 점이 이번 출시의 핵심이다 —
다만 Claude Opus 5.5와의 격차는 1점에 불과하고, 코딩 에이전트 지표는 Claude Code
조합이 여전히 앞선다는 점도 함께 읽어야 한다. r/ClaudeAI에서도 출시 당일 바로
화제가 됐다("Google introduced Gemini 4 Carbon, allegedly the most frontier model").

## 활용/시사점

- **AX**: "사이버 방어자 한정 공개"라는 출시 전략이 Argon·Carbon 두 모델 연속으로
  반복되고 있다 — 범용 공개보다 특정 고위험·고가치 업무(보안)에 먼저 모델을 투입해
  신뢰를 쌓은 뒤 확대하는 Google의 출시 플레이북으로 자리잡는 중. 기업 보안팀은
  일반 공개 전 Fairwind Program 신청 경로를 모니터링할 가치가 있다.
- 독립 벤치마크 1위가 **교체 비용 없이 바로 기업 코딩 워크플로의 1위 모델 교체**를
  의미하지는 않는다 — Claude Code+Opus 5.5가 코딩 에이전트 지표에서는 여전히 근소
  우위라는 점에서, "종합 지능 지표"와 "실제 코딩 워크플로 성능"을 분리해 봐야 한다.

## 출처

- [Google — Gemini 4 Carbon: our next frontier model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
- [Artificial Analysis — Gemini 4 Carbon is the new #1 on the Intelligence Index v5](https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1)
- [MarkTechPost — Google DeepMind Introduces Gemini 4 Carbon](https://www.marktechpost.com/2026/10/28/google-deepmind-gemini-4-carbon-frontier-model/)
- [9to5Google — Google announces Gemini 4 Carbon with 'significant' coding gains](https://9to5google.com/2026/10/28/gemini-4-carbon-announcement/)
- 관련: [[2026-09-30-google-gemini-4-argon-launch]]
