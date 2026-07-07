---
type: update
date: 2026-06-24
tools: [chatgpt]
importance: high
uses: [ax]
source: https://openai.com/index/openai-broadcom-jalapeno-inference-chip/
---

# OpenAI 첫 자체 칩 'Jalapeño' 공개 — Broadcom과 만든 LLM 추론 전용 프로세서

## 무엇이 있었나

OpenAI가 2026-06-24 Broadcom과 공동 개발한 첫 자체 칩 **Jalapeño**를 공개했다. LLM 추론(inference)에 최적화된 "Intelligence Processor"로, 여러 세대에 걸친 자체 컴퓨트 플랫폼의 첫 제품이다.

- 설계 착수부터 제조 테이프아웃까지 **9개월** — 고성능 반도체 기준 이례적으로 빠른 개발 사이클로, 설계·최적화 일부에 OpenAI 자체 모델을 활용했다고 밝혔다.
- 초기 결과 기준 현존 최고 수준 대비 **와트당 성능(performance-per-watt)이 크게 우수**하다고 주장.
- 2026년 말 첫 배포 목표. Broadcom은 Microsoft 등 파트너와 기가와트급 데이터센터 배포를 계획.
- 2025-10 발표된 Broadcom 파트너십의 첫 결과물로, NVIDIA GPU 의존도를 낮추려는 오랜 칩 내재화 계획이 실물로 나온 것.

## 왜 중요한가 (비개발자 관점)

AI 서비스의 원가는 결국 칩에서 결정된다. OpenAI가 Google(TPU)·Amazon(Trainium)처럼 자체 칩을 갖게 되면 NVIDIA에 지불하던 마진을 내재화해 **같은 돈으로 더 많은 AI를 더 싸게** 돌릴 수 있고, 이는 장기적으로 ChatGPT 요금과 무료 사용량에 직결된다. "모델 회사"였던 OpenAI가 칩→데이터센터→모델→앱까지 풀스택 수직계열화로 가겠다는 선언이기도 하다.

## 활용/시사점

- **AX 관점**: 프런티어 AI 벤더들의 원가 경쟁이 칩 레벨로 내려갔다. 추론 비용의 구조적 하락이 예고되는 만큼, 장기 계약 시 "지금 요금"을 기준으로 과도하게 보수적인 도입 계획을 세울 필요가 없다.
- NVIDIA 중심 공급망 리스크(가격·물량)가 완화되는 신호로, AI 인프라 투자 판단의 참고 지표가 된다.

## 출처

- [OpenAI and Broadcom unveil LLM-optimized inference chip (OpenAI)](https://openai.com/index/openai-broadcom-jalapeno-inference-chip/)
- [TechCrunch: OpenAI unveils its first custom chip](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)
- [CNBC: OpenAI and Broadcom reveal Jalapeño](https://www.cnbc.com/2026/06/24/openai-and-broadcom-reveal-jalapeno-first-ai-chip-in-partnership.html)
- [VentureBeat: development sped up with OpenAI's own models](https://venturebeat.com/infrastructure/openai-unveils-first-custom-ai-inference-chip-jalapeno-with-broadcom-and-its-development-was-sped-up-with-openais-own-models)
