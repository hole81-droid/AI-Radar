---
type: update
date: 2026-08-01
tools: [chatgpt, codex]
importance: high
uses: [course, ax]
source: https://openai.com/index/ten-advances-in-mathematics/
---

# OpenAI, 차기 모델 "Astra" 티저 — 10개 미해결 수학·이론컴퓨터과학 난제를 증명하며 공개

## 무엇이 있었나

OpenAI가 2026-08-01, 정식 모델 발표가 아니라 **수학 논문 공개**라는 형태로 차기
주력 모델 "**Astra**"의 존재를 처음으로 드러냈다.

- Astra의 내부 버전이 최소 10년간 본질적 진전이 없었던 장기 미해결 문제 10개를
  풀었다고 발표. 분야는 고차원 기하학, 부호 이론(coding theory), 산술 회로 복잡도,
  군론, 작용소 대수, 양자 복잡도, 격자 암호, 극단 조합론 등 순수수학·이론컴퓨터과학
  전반에 걸쳐 있다.
- 대표 성과: 비소픽(non-sofic) 군의 존재 증명, 고차원 구 채우기(sphere packing)
  상한의 지수적 개선 등.
- **비용**: 문제당 GPT-5.6 Sol API 요금 기준 약 **$2,000** 미만의 토큰만 사용했다고 주장.
- **검증 가능성**: 각 증명에 Lean 4 형식 검증 인증서를 첨부해 `openai/ten-proofs`
  GitHub 저장소에 공개, 기술 논문과 함께 모델이 "증명이 어떻게 만들어졌는지
  스스로 재구성한" 추론 과정 기록물도 함께 배포했다.
- **모델 정체**: Astra는 GPT-6가 아니라고 선을 그었지만, GPT-5.6(Sol·Terra·Luna)
  다음 단계로 GPT-5 계열의 연장인지 별도 패밀리인지는 미확정 — 출시일·가격·모델
  카드·ChatGPT 제공 여부 등 구체 사항은 전혀 공개되지 않았다. "티저"에 가깝다.

## 왜 중요한가 (비개발자 관점)

새 모델을 화려하게 출시하는 대신 "이 모델이 인류가 10년 넘게 못 푼 수학 문제를
풀었다"는 결과물로 존재를 알린 방식 자체가 이례적이다. 수학자 Terence Tao는 이를
인간이 창의적 방향을 잡고 AI가 기술적 노동을 맡는 "빅 매스매틱스(big
mathematics)"로의 전환으로 평가했다 — 체스의 Deep Blue 순간에 비견될 만큼
수학계에 실존적 충격을 주고 있다는 반응도 나온다.

## 유보할 점

- OpenAI는 "$2,000 미만으로 풀었다"는 성공 사례만 공개했을 뿐, **풀지 못하고
  버려진 시도에 얼마의 비용이 들었는지는 공개하지 않았다** — 실제 문제 해결
  성공률은 알 수 없다.
- 사용한 프롬프트·탐색 전략도 비공개라 재현성 검증이 제한적이다.
- 독립 수학자들의 동료검토는 아직 진행 중 단계.

## 활용/시사점

- **강의**: "모델 출시 대신 성과로 예고하는" 마케팅 방식과, "$2,000짜리 토큰으로
  10년 난제를 풀었다"는 비용 프레이밍이 AI 능력 발전 속도를 체감시키는 좋은 사례.
  [[gpt-5-6-sol-ultra-math-proof-subagents]](7/10, GPT-5.6 Sol Ultra의 서브에이전트
  수학 증명 시연)와 나란히 놓고 "수학 증명을 앞세운 모델 역량 과시"가 반복되는
  패턴으로 가르칠 수 있다.
- **AX**: 연구·R&D 조직이라면 "검증 가능한 형식 증명(Lean)을 동반한 결과물 공개"가
  AI 산출물의 신뢰성을 높이는 방법론으로 참고할 만하다. 다만 실패율 비공개라는
  점에서, 벤더의 성공 사례만 보고 실전 배치 성공률을 낙관해서는 안 된다는 반례로도
  쓸 수 있다.

## 출처

- [OpenAI — Ten advances in mathematics and theoretical computer science](https://openai.com/index/ten-advances-in-mathematics/)
- [Simon Willison — Ten advances in mathematics and theoretical computer science](https://simonwillison.net/2026/Aug/1/ten-advances-in-mathematics/)
- [the-decoder — OpenAI announces its "next major model" Astra by dropping ten previously unsolved math solutions](https://the-decoder.com/openai-announces-its-next-major-model-astra-by-dropping-ten-previously-unsolved-math-solutions/)
- [Gizmodo — OpenAI Smuggled the Announcement of Astra, Its Next AI Model, Into a Blog Post About Math](https://gizmodo.com/openai-smuggled-the-announcement-of-astra-its-next-ai-model-into-a-blog-post-about-math-2000793689)
- [BleepingComputer — OpenAI teases Astra, its next major AI model, after it solves 10 long-standing math problems](https://www.bleepingcomputer.com/news/artificial-intelligence/openai-teases-astra-its-next-major-ai-model-after-it-solves-10-long-standing-math-problems/)
