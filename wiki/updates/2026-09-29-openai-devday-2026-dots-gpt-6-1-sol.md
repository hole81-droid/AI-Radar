---
type: update
date: 2026-09-29
tools: [chatgpt, codex]
importance: high
uses: [course, ax]
source: https://openai.com/index/introducing-dots/
---

# OpenAI DevDay 2026 — 상시 가동 에이전트 "Dots"와 초저가 모델 GPT-6.1 Sol 동시 공개

## 무엇이 있었나

OpenAI가 2026-09-29 연례 DevDay 키노트에서 20여 건의 발표를 쏟아냈다. 그중 가장 무게가
큰 두 가지는 다음과 같다.

- **Dots — "상시 가동(always-on)" 에이전트**: 사용자가 노트북을 덮어도 계속 일하는
  자율 에이전트. 각 dot는 자체 클라우드 컴퓨터와 웹 브라우저를 갖고 GPT-6 Astra(플래그십
  모델) 위에서 동작하며, 4,000개 이상의 연동 앱에 접근할 수 있다. ChatGPT·음성 통화·
  Slack·Teams로 상호작용하고 SMS 연동도 예정돼 있다. 사용자 피드백에서 선호를 학습한다.
  **이용 경로**: 해당 국가의 Pro·Business Premium 플랜에 첫 dot 1개 포함, Free·Plus는
  제외.
- **GPT-6.1 Sol**: "에이전틱 코딩·컴퓨터 사용·전문 업무에서 GPT-6 Astra에 근접한 성능을
  Astra 토큰 가격의 5분의 1로" 제공한다고 OpenAI가 주장(자사 발표, 제3자 검증 전). ChatGPT
  Work·Codex·API·교육 티어(Pro·Plus·Business·Enterprise·Edu)에 전면 적용.
- **Codex Ultrafast**: 초당 300토큰까지 속도를 낸다는 프리미엄 속도 티어(표준 대비 최대
  8배 속도), 신설된 월 $500 "Pro 500" 플랜에 포함.
- **ChatGPT Space**: 사람과 에이전트가 문서·프로젝트를 함께 편집하는 협업 워크스페이스,
  인간-AI 협업 전용 "Pages" 기능 포함.

## 왜 중요한가

- OpenAI의 GPT-6 Sol은 불과 일주일 전(09-22)에 출시됐다([[2026-09-22-openai-gpt-6-sol-luna-launch]]).
  일주일 만에 후속 버전(6.1)을 내놓은 것은 이례적으로 빠른 반복 주기다 — 같은 날 커뮤니티
  (r/ClaudeAI)에서는 "Opus 5.5·Sonnet 5.5가 Sol·Astra보다 낫다"는 평가가 먼저 돌았고, 이것이
  다음날 OpenAI의 더 큰 발표 물량("20여 건")으로 이어졌다는 관측도 있었다 — 경쟁사 신모델
  발표 직후 벌어진 "물량 대응"의 성격이 있다.
- **Dots는 OpenAI가 처음 내놓는 진짜 의미의 "상시 가동" 소비자·기업용 에이전트**다 —
  기존 ChatGPT agent가 요청 시점에 작업을 수행했다면, Dots는 사용자가 로그아웃한 뒤에도
  계속 동작한다는 점에서 Anthropic Claude Cowork·Meta Muse와 같은 "개인비서형 상시 에이전트"
  경쟁 구도에 정면으로 합류한 것이다.
- Free·Plus 사용자를 Dots에서 제외한 것은 상시 가동 에이전트를 상위 요금제 전용 기능으로
  포지셔닝했다는 뜻 — Business Premium 단계에서 처음 접근 가능하다.

## 활용/시사점

- **강의**: "요청-응답형 에이전트"와 "상시 가동형 에이전트"의 구분을 가르치는 최신 사례로
  쓸 수 있다. Dots·Claude Cowork·Meta Muse 세 제품을 나란히 비교하면 상시 에이전트의
  아키텍처(자체 컴퓨터·앱 연동 개수·요금 티어 제한)를 한눈에 보여줄 수 있다.
- **AX**: GPT-6.1 Sol의 "Astra급 성능을 1/5 가격에"라는 주장이 사실이면 에이전틱 코딩·
  컴퓨터 사용 워크로드의 비용 구조가 또 한 번 낮아진다 — 09-22 GPT-6 Sol/Luna·Opus 5.5
  가격 인하([[2026-09-22-openai-gpt-6-sol-luna-launch]])에 이은 연속 인하로, "가장 비싼
  모델을 쓸 이유"가 계속 줄어드는 흐름이 이어지고 있다. 단, OpenAI 자체 벤치마크이므로
  독립 검증 전이라는 점은 명시해야 한다.
- Codex Ultrafast·Pro 500 같은 고가 티어 신설은 "상위 사용자에게 속도를 프리미엄으로
  판매"하는 새로운 과금 축이 열렸다는 신호 — 기업 도입 시 요금제 설계 벤치마크로 참고할
  만하다.

## 후속 (2026-10-01) — Codex 하네스 오픈소스 공개 확인

DevDay 발표 항목 중 당시 반영하지 못했던 세부 하나를 WebSearch로 추가 확인했다 —
Dots의 기반이 되는 **도구 사용·복구(tool-use and recovery) 래퍼인 "Codex harness"가
오픈소스로 공개**됐다. 코딩 에이전트의 재시도·오류복구 로직을 직접 들여다보고
재사용할 수 있게 된 것으로, 자체 에이전트 하네스를 설계하는 조직이라면 참고할 만한
레퍼런스 구현이 하나 더 늘었다.

## 출처

- [Decrypt — OpenAI Gave AI Agents Their Own Computers at DevDay 2026](https://decrypt.co/379584/openai-ai-agents-computers-devday-2026-everything-announced)
- [CNBC — OpenAI DevDay recap: AI lab rolls out Dots agents](https://www.cnbc.com/2026/09/29/openai-devday-2026-live-updates.html)
- OpenAI 공식(WebFetch 403, WebSearch 요약으로 교차확인): [Introducing dots](https://openai.com/index/introducing-dots/) · [Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/) · [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap/)
- 관련: [[2026-09-22-openai-gpt-6-sol-luna-launch]] · [[2026-09-04-openai-gpt-6-astra-launch]] · [[2026-08-12-claude-cowork-chrome-integration]]
- raw: `raw/2026-09/openai-devday-2026-dots-gpt-6-1-sol.md`
