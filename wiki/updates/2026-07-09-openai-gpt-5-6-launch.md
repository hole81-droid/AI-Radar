---
type: update
date: 2026-07-09
tools: [chatgpt, codex]
importance: high
uses: [ax, course]
source: https://www.marktechpost.com/2026/07/09/openai-releases-gpt-5-6-a-three-tier-model-family-with-programmatic-tool-calling/
---

# GPT-5.6 정식 출시 — 정부발 프리뷰 제한이 풀리고 ChatGPT·API·Codex 전면 롤아웃

## 무엇이 있었나

[[2026-06-26-openai-gpt-5-6-preview|약 20개 파트너 한정 프리뷰]]로 시작했던 GPT-5.6이 2026-07-09~10 사이 일반 공개(GA)로 전환됐다. 미 정부 요청에 따른 사전 심사 제약이 풀리며, 플래그십 **Sol**($5/$30 per Mtok), 균형형 **Terra**($2.50/$15), 경량 **Luna**($1/$6) 3단 모델군이 ChatGPT·API·Codex 전면에 롤아웃됐다.

- **ChatGPT**: Plus·Pro·Business·Enterprise 사용자가 추론 강도별로 Sol에 접근. ChatGPT Work와 Codex에서는 Free·Go 사용자가 Terra를 쓰고, 유료 사용자는 세 모델 중 선택 가능. API는 개발자에게 세 티어 모두 개방.
- **프로그래매틱 도구 호출(programmatic tool calling)** 신기능이 함께 도입됐다 — 모델이 작성한 JavaScript를 네트워크 접근이 차단된 격리 V8 런타임에서 실행하는 방식으로, 문서화된 API 계약을 통해 named-customer 기준 토큰 사용량을 38~63.5% 절감했다고 보고됐다.
- Codex는 macOS·Windows용 새 ChatGPT 데스크톱 앱(Chat·Work와 나란히 배치) 안에 통합됐지만, 코딩 전용 경험 자체는 유지된다.
- 같은 시점에 **"ChatGPT Work"도 별도로 공개**돼 Pro·Enterprise 대상 멀티에이전트 "ultra" 기능 등을 제공하는 것으로 확인된다 — 기업용 워크스페이스 라인의 별도 출시가 GPT-5.6 GA와 시점이 겹친 것으로, 두 뉴스가 함께 다뤄지는 경우가 많다.

## 왜 중요한가 (비개발자 관점)

한 달 가까이 "정부 승인 대기"로 발이 묶였던 최신 모델이 마침내 일반 사용자에게 풀렸다는 뜻이다. [[2026-06-26-openai-gpt-5-6-preview]]에서 지적했던 "최신 모델 접근 시점이 회사가 아니라 워싱턴 일정에 좌우된다"는 리스크가 이번엔 예상보다 빠르게 해소된 사례이기도 하다. 동시에 "프로그래매틱 도구 호출"처럼 에이전트가 스스로 코드를 짜서 작업을 처리하고 토큰(비용)을 크게 아끼는 기능은, 비개발자 업무에서도 "AI 에이전트를 쓸수록 비용이 예측 가능한 수준으로 내려간다"는 실질적 신호다.

## 활용/시사점

- **AX 관점**: 3단 가격 구조(Sol/Terra/Luna)가 이제 GA로 확정된 만큼, 작업 성격별 모델 라우팅(고난도=Sol, 일상 업무=Terra/Luna) 설계를 실제 예산에 반영할 시점이다.
- **학습과정 소재**: 프로그래매틱 도구 호출은 "에이전트가 도구를 어떻게, 왜 코드로 호출하는가"를 설명하는 좋은 예시 — 토큰 절감률(38~63.5%)이라는 구체적 수치가 있어 강의에서 ROI 근거로 쓰기 좋다.
- Codex가 별도 앱이 아니라 통합 ChatGPT 데스크톱 앱의 한 모드로 재배치된 것은, OpenAI가 "여러 앱"에서 "하나의 앱, 여러 모드"로 제품 구조를 정리하는 흐름의 일부로 볼 수 있다.

## 출처

- [Marktechpost — OpenAI Releases GPT-5.6: A Three-Tier Model Family With Programmatic Tool Calling](https://www.marktechpost.com/2026/07/09/openai-releases-gpt-5-6-a-three-tier-model-family-with-programmatic-tool-calling/)
- 관련: [[2026-06-26-openai-gpt-5-6-preview]] (프리뷰 단계 배경)
