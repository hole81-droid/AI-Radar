---
type: update
date: 2026-06-26
tools: [chatgpt, codex]
importance: high
uses: [ax]
source: https://openai.com/index/previewing-gpt-5-6-sol/
---

# GPT-5.6 (Sol·Terra·Luna) 제한 프리뷰 — 미 정부 요청으로 발이 묶인 차기 플래그십

## 무엇이 있었나

OpenAI가 2026-06-26 차기 모델 패밀리 **GPT-5.6**을 공개했다. 플래그십 **Sol**($5/$30 per Mtok), 중간형 **Terra**($2.50/$15), 경량 **Luna**($1/$6) 3종으로, 코딩·과학·사이버보안 능력 강화와 함께 역대 가장 강한 안전 스택을 갖췄다고 소개했다.

- 그러나 일반 공개가 아니라 **약 20개 신뢰 파트너 조직 한정 제한 프리뷰**(API·Codex 경유, ChatGPT 미포함)로 시작했다. **미국 정부의 요청**에 따른 것으로, 참여 조직 명단도 정부와 공유됐다.
- 배경에는 2026-06-02 백악관 행정명령 — 연방 기관이 신형 AI 모델을 광범위 공개 전 안전성 벤치마크·평가(약 30일 프로세스)하도록 한 조치가 있다.
- OpenAI는 "이런 정부 사전 접근 절차가 장기 기본값이 되어서는 안 된다"고 공개적으로 불만을 표시했다. GA 시점은 "coming weeks"(7월 중순 관측). Cerebras에서 Sol을 초당 최대 750토큰으로 서빙하는 계획도 7월로 예고됐다.

## 왜 중요한가 (비개발자 관점)

**프런티어 AI 출시에 정부 심사가 실제로 개입한 첫 대형 사례**다. 지금까지 AI 규제는 대체로 사후 감독이었지만, 이제 "출시 전 정부 검토"가 미국에서 현실이 됐고 최신 모델을 쓸 수 있는 시점이 회사가 아니라 워싱턴의 일정에 좌우되기 시작했다. 이 갈등은 일주일 뒤 OpenAI의 [[2026-07-02-openai-us-government-stake|정부 지분 5% 제안]]으로 이어지는 직접적 배경이다.

## 활용/시사점

- **AX 관점**: "최신 모델 즉시 도입" 전제의 로드맵은 이제 규제 변수를 포함해야 한다. 모델 세대교체 시점이 불확실해진 만큼, 특정 모델 버전 종속을 피하는 아키텍처가 더 중요해졌다.
- Sol/Terra/Luna의 3단 가격 구조는 GA 후 비용 최적화(작업별 모델 라우팅) 설계의 기준 정보가 된다.

## 출처

- [Previewing GPT-5.6 Sol (OpenAI)](https://openai.com/index/previewing-gpt-5-6-sol/)
- [A preview of GPT-5.6 Sol, Terra, and Luna (OpenAI Help Center)](https://help.openai.com/en/articles/20001325-a-preview-of-gpt-56-sol-terra-and-luna)
- [VentureBeat: only accessible to limited preview partners, per US Gov](https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov)
- [Memeburn: White House asks OpenAI to limit GPT-5.6 release](https://memeburn.com/white-house-asks-openai-to-limit-gpt-5-6-model-release-in-2026/)
