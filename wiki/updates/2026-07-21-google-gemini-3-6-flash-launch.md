---
type: update
date: 2026-07-21
tools: [gemini]
importance: medium
uses: [ax]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/
---

# Google, Gemini 3.6 Flash·3.5 Flash-Lite·3.5 Flash Cyber 3종 출시 — Flash 라인 세대교체

## 무엇이 있었나

Google이 2026-07-21 Flash 티어 3종을 동시 공개했다. 여전히 지연 중인 Gemini 3.5 Pro
([[2026-07-01-google-gemini-3-5-pro-rollout-delay]])는 이번에도 포함되지 않았다.

- **Gemini 3.6 Flash**: 기존 3.5 Flash보다 코딩·지식노동·멀티모달 성능 향상, 출력 토큰 사용량
  17% 절감. 가격은 입력 $1.50/출력 $7.50(1M 토큰) — 기존 출력 $9.00/1M에서 인하.
- **Gemini 3.5 Flash-Lite**: 초당 350토큰 속도, 가격 입력 $0.30/출력 $2.50(1M 토큰). 이전 세대
  3 Flash를 SWE-Bench Pro·OSWorld-Verified에서 앞선다고 주장.
- **Gemini 3.5 Flash Cyber**: 소프트웨어 취약점 탐지·검증·수정에 특화된 모델. 이중용도(dual-use)
  위험 때문에 정부·신뢰 파트너 한정 제한 공개(pilot)로 출시.
- Google은 이와 함께 Gemini 3.5 Pro를 "곧" 폭넓게 제공하겠다고 재언급했고, 차세대 **Gemini 4**
  사전학습을 시작했다고 밝혔다.

## 왜 중요한가 (비개발자 관점)

- "가장 비싼 최상위 모델"이 아니라 **저렴한 실무용 Flash 티어를 촘촘하게 세분화**하는 전략 —
  일반 기업·개발자가 실제로 대량으로 쓰는 모델은 최상위 모델이 아니라 이런 중저가 티어라는 점에서
  가격 경쟁의 실질적 전장.
- Flash Cyber처럼 "보안 특화 모델을 정부·신뢰 파트너에게만 공개"하는 방식은, 같은 주 벌어진
  OpenAI 모델의 Hugging Face 침해 사고([[2026-07-21-openai-huggingface-security-incident]])와
  대비된다 — 사이버 능력이 있는 모델을 다루는 리스크 관리 접근이 업계 전반에서 화두가 되는 중.
- Gemini 3.5 Pro는 이번에도 빠지며 세 번째 연기 이후에도 여전히 일반 공개가 안 된 상태 — Google의
  플래그십 지연 이슈가 계속됨.

## 활용/시사점

- **강의**: "모델 하나가 아니라 티어 세분화"가 실제 가격 경쟁의 핵심이라는 점을 보여주는 사례 —
  OpenAI·Anthropic의 유사한 저가 티어 전략과 비교 교재로 활용 가능.
- **AX**: 코딩·지식노동 등 대량 반복 작업에는 최상위 모델보다 Flash급 저가 모델이 비용 효율적일
  수 있다는 근거 — 역할별 모델 티어링 전략([[ploy-opus-to-gpt-5-6-migration]],
  [[cursor-agent-swarms-model-economics]] 등 기존 사례와 연결)에 참고 가능.

## 출처

- [Google Blog — Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
- [TechCrunch — Google releases three new Gemini models — but no 3.5 Pro](https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/)
- [MarkTechPost — A Cheaper, More Token-Efficient Flash Tier Built for Agentic Workloads](https://www.marktechpost.com/2026/07/21/google-releases-gemini-3-6-flash-3-5-flash-lite-and-3-5-flash-cyber-a-cheaper-more-token-efficient-flash-tier-built-for-agentic-workloads/)
