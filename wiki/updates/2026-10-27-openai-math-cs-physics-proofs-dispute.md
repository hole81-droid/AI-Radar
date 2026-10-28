---
type: update
date: 2026-10-27
tools: [chatgpt]
importance: high
uses: []
source: https://www.aljazeera.com/economy/2026/10/27/ai-makes-discoveries-in-mathematics-computer-science-physics-openai-says
---

# OpenAI, 수학·전산학·물리학 3개 분야 "AI 모델 생성" 증명 공개 — 검증자들은 "확정 아니다"며 거리 두기

## 무엇이 있었나

OpenAI가 자사 미공개 모델이 세 분야에서 새로운 결과를 냈다고 발표했다.

1. **수학 — Local Smoothing Conjecture**: 조화해석학의 핵심 추측(1991년 Christopher
   Sogge 제시)을 **모든 공간 차원에서** 처음으로 증명했다는 주장. 기존에는 3차원에서만
   증명돼 있었다. 이 추측이 성립하면 Kakeya 추측과 Stein의 restriction 추측도 모든
   차원에서 함께 해결된다. 자연어 결과물은 10-18 산출, Lean 형식검증은 10-19 완료.
2. **전산학 — Exponential Time Hypothesis(ETH) 반증**: 복잡한 계산 문제를 푸는 데
   걸리는 시간과 관련된 가설로, P vs NP 문제와 밀접하게 연결된 불(Boolean) 논리식
   충족가능성 문제의 복잡도를 다룬다. 자연어 반증은 10-16, Lean 검증은 10-17.
3. **물리학 — 양자색동역학(QCD)**: 쿼크·글루온 상호작용을 다루는 순수 Yang-Mills
   이론의 존재성에 대해 "수학적으로 엄밀한" 증명을 제시했다고 주장. 자연어 증명은
   9월 9일·18일에 이미 나왔고, Lean 형식화는 10-16 완료 — 단 **물리학 쪽 결과는
   공개를 유보**했다(아래 참고).

### 검증 상태 — "확정됐다"고 보기 어렵다

수학·CS 결과는 Lean(정형 증명 보조도구) 검증을 통과했지만, **OpenAI가 검증을 맡긴
연구자들이 "검증됐다"고 선언하는 것 자체를 거부**했다. 근거로 OpenAI의 과거 발표
전례를 들었다 — Erdős 미해결 문제 10개를 풀었다는 주장이 실제로는 기존 논문을
찾아낸 것뿐이었다는 "과장 표현" 논란, 논쟁적인 Navier-Stokes 증명
([[2026-09-08-openai-navier-stokes-solved]]), 부호 오류로 철회된 프리프린트 3건이
그 전례다. Erdős 문제 목록을 관리하는 수학자는 OpenAI 부사장 Kevin Weil의 "GPT-5가
Erdős 문제 10개를 풀었다"는 주장을 "극단적인 사실 왜곡"이라고 공개 비판한 바 있다.

Fields상 수상자 Timothy Gowers는 이번 결과 중 Yang-Mills(물리학) 자료의 전면 공개를
요구했고, Navier-Stokes 논란을 계기로 09-21 신설된 독립 자문기구
**AGMAI**(프린스턴 IAS 소재)도 같은 요구를 했다 — OpenAI는 물리학 쪽 결과를
"외부 연구그룹과 협업해 자체 해석을 작성할 시간을 갖기 위해" 공개를 보류했다고
설명했다. 수학·CS 결과는 대조적으로 커뮤니티의 자발적 검증을 위해 즉시 공개했다.

## 왜 중요한가

- Anthropic의 페르마 마지막 정리 증명(09-04)·OpenAI 자신의 Navier-Stokes 증명
  (09-08) 이후, 같은 패턴(비공개 모델이 낸 결과를 동료검토 전에 발표)이 또 반복됐다.
  다른 점은 **이번엔 검증을 맡은 측이 먼저 "확정 아니다"라고 선을 그었다**는 것 —
  업계가 "AI 수학 성과 발표"에 대한 회의적 반응 체계(AGMAI 같은 독립 검증 기구)를
  실제로 갖추고 작동시키고 있다는 신호이기도 하다.
- 물리학 결과만 선택적으로 공개를 유보한 것은, OpenAI 스스로도 발표 신뢰도
  관리에 더 신중해졌음을 보여준다 — 다만 이는 동시에 "검증 가능한 것만 먼저
  내놓고 논란이 큰 것은 늦춘다"는 선택적 공개로도 읽힐 수 있어 비판의 소지가 있다.

## 활용/시사점

- **AX/강의**: "AI가 낸 연구 결과"를 다룰 때는 ① 동료검토 여부 ② 형식검증(Lean 등)
  통과 여부 ③ 검증을 맡은 제3자가 실제로 결과를 승인했는지를 구분해서 읽어야
  한다는 사례로 쓸 수 있다 — 이번 건은 ②는 통과했지만 ③에서 막힌 경우다.
- 이 패턴(랩이 주장 → 외부 검증자가 거리 두기 → 커뮤니티 논쟁)은 이제 반복되는
  업계 각본이 됐다 — AI 리터러시 교육에서 "큰 수학·과학 성과 발표를 어떻게
  비판적으로 읽는가"의 반복 사례로 쌓을 가치가 있다.

## 출처

- [Al Jazeera — AI makes discoveries in mathematics, computer science, physics, OpenAI says](https://www.aljazeera.com/economy/2026/10/27/ai-makes-discoveries-in-mathematics-computer-science-physics-openai-says)
- [Unite.AI — OpenAI Says Its Models Produced Three Proofs in Math, CS, and Physics](https://www.unite.ai/openai-says-its-models-produced-three-proofs-in-math-cs-and-physics/)
- [Cryptopolitan — Mathematicians greet OpenAI's ETH claim with caution after past misfires](https://www.cryptopolitan.com/mathematicians-openai-eth-claim-with-caution/)
- [xenospectrum — OpenAI Claims AI Produced New Results in Math, CS and Physics, but Withholds the Physics Proofs](https://xenospectrum.com/en/openai-yang-mills-kakeya-eth-release/)
- 관련: [[2026-09-08-openai-navier-stokes-solved]] (AGMAI 신설 배경)
