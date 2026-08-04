---
type: update
date: 2026-07-19
tools: []
importance: medium
uses: [ax]
source: https://www.marktechpost.com/2026/07/19/alibaba-previews-qwen3-8-max-a-2-4-trillion-parameter-multimodal-model-days-after-moonshots-kimi-k3-open-weight-launch/
---

# Alibaba Qwen, 2.4조 파라미터 "Qwen 3.8" 프리뷰 공개 — "Fable 5 다음으로 강력"

## 무엇이 있었나

Alibaba의 Qwen 팀이 2026-07-19 차기 플래그십 **Qwen 3.8**(Qwen3.8-Max)을 프리뷰로 공개했다. Moonshot AI의 오픈웨이트 모델 [[2026-07-16-moonshot-kimi-k3-launch|Kimi K3(2.8조 파라미터)]] 공개 사흘 만에 나온 대응 발표다.

- **규모**: 2.4조 파라미터 — 공개된 모델 중 Kimi K3에 이어 두 번째로 크다. 개발자 Shuai Bai에 따르면 팀 최초로 파라미터 1조를 넘는 멀티모달 모델(이미지·영상·문서 처리 가능).
- **주장**: Alibaba는 이 모델이 "Claude Fable 5 다음으로 강력하다"고 자평했으나, 독립 벤치마크는 아직 공개하지 않았다. 코딩·풀스택 개발·데이터 분석·사무 업무에서 전작을 능가한다고 밝힘.
- **이용**: Token Plan·Qoder·QoderWork를 통해 정가의 10% 가격으로 프리뷰 이용 가능. 완전 오픈웨이트 공개는 "곧" 예고됐다 — 실현되면 그동안 Max급 모델을 비공개로 유지해온 Alibaba의 관행을 깨는 것.

## 후속 (2026-08-03 추가) — 정식 공개, 벤치마크 첫 발표

Alibaba가 08-03 Qwen3.8-Max를 프리뷰가 아닌 정식 모델로 공개하며 자체 벤치마크를
처음 발표했다.

- **규모 확정**: 2.4조 파라미터, 컨텍스트 윈도우 100만 토큰. 공개된 Max급 Qwen
  모델 중 최초로 완전 오픈웨이트로 풀리는 모델이 될 예정(가중치는 "다음 주" 공개
  예고) — 실현되면 07-19 프리뷰 당시 예상대로 "최상위 모델은 비공개 유지"라는
  업계 통념을 깨는 선례가 된다.
- **벤치마크 결과(Alibaba 자체 발표, 독립 검증 없음)**: 코딩·멀티모달에서
  Claude Fable 5와 대등하거나 일부 상회, 일반 추론에서는 소폭 열세라고 자평.
  이미지 등 시각 자료 평가에서 Fable 5 변형 모델에 이어 세계 2위. PaperBench
  기준 Qwen3.8-Max 93.0으로 GPT-5.6 Sol(90.5)·Fable 5(88.8)·Opus 4.8(80.3)를
  모두 앞섰다고 주장.
- **유보**: 08-03 시점까지 독립 기관의 재현 벤치마크는 없다 — 07-19 프리뷰 때와
  동일하게 "자체 발표 수치"라는 한계가 이어진다.

## 왜 중요한가 (비개발자 관점)

중국 오픈웨이트 모델 경쟁이 Kimi K3 한 건이 아니라 연쇄 반응으로 번지고 있다는 신호다. 다만 이번 발표는 독립 검증 없이 "두 번째로 강하다"는 자체 주장만 있는 상태라, 실제 성능은 벤치마크가 나온 뒤 재평가가 필요하다.

## 활용/시사점

- **AX 관점**: 오픈웨이트 프론티어 모델 후보가 Kimi K3에 이어 하나 더 늘었다 — 특정 모델에 조기 배팅하기보다 독립 벤치마크·완전 공개 시점까지 대기하며 복수 후보를 계속 추적하는 편이 안전하다.
- Alibaba가 정말 Max급 모델을 오픈웨이트로 공개한다면, "최상위 모델은 비공개 유지"라는 업계 통념을 깨는 선례가 되어 다른 랩의 공개 전략에도 영향을 줄 수 있다.

## 출처

- [MarkTechPost — Alibaba Previews Qwen3.8-Max, a 2.4 Trillion-Parameter Multimodal Model, Days After Moonshot's Kimi K3 Open-Weight Launch](https://www.marktechpost.com/2026/07/19/alibaba-previews-qwen3-8-max-a-2-4-trillion-parameter-multimodal-model-days-after-moonshots-kimi-k3-open-weight-launch/)
- [Bloomberg — Alibaba's Qwen Unveils Preview of Flagship AI Model](https://www.bloomberg.com/news/articles/2026-07-19/alibaba-s-qwen-unveils-preview-of-flagship-ai-model)
- [the-decoder — Alibaba's Qwen takes on Kimi K3 with open-weight Qwen 3.8, says model is "second only to Fable 5"](https://the-decoder.com/alibabas-qwen-takes-on-kimi-k3-with-open-weight-qwen-3-8-says-model-is-second-only-to-fable-5/)
- [Bloomberg — Alibaba's Qwen3.8-Max AI Model Claims Benchmark Scores Rivaling Anthropic (2026-08-03)](https://www.bloomberg.com/news/articles/2026-08-03/alibaba-drops-another-china-ai-model-with-breakthrough-performance)
- [Forbes — Alibaba Unveils Qwen3.8-Max Model — China's Latest AI Challenger To OpenAI And Anthropic](https://www.forbes.com/sites/tylerroush/2026/08/03/alibaba-unveils-qwen38-max-model-chinas-latest-ai-challenger-to-openai-and-anthropic/)
- [Tech Startups — Alibaba unveils 2.4-trillion-parameter Qwen3.8-Max as DeepSeek's new AI model undercuts Anthropic by 100X](https://techstartups.com/2026/08/03/alibaba-unveils-2-4-trillion-parameter-qwen3-8-max-as-deepseeks-new-ai-model-undercuts-anthropic-by-100x/)
