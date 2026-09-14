---
type: update
date: 2026-09-11
tools: [codex]
importance: high
uses: [course, ax]
source: https://developers.openai.com/api/docs/guides/agents-api/overview
---

# OpenAI, 관리형 에이전트 구축 인프라 "Agents API" 공개 베타 출시

## 무엇이 있었나

OpenAI가 2026-09-10(현지시간, 09-11 한국 기준 HN 최상위 346점으로 확인) **Agents API**를
공개 베타로 출시했다. 기존 Assistants API·Responses API처럼 대화 하나를 처리하는 것을
넘어, **오케스트레이션·세션 지속성·컨텍스트 관리를 OpenAI가 대신 맡아주는 관리형 에이전트
인프라**다.

- **구성 요소**: Agent(모델+지침+도구+MCP 서버), 선택적 Environment(샌드박스),
  지속되는 Session, 세션이 방출하는 이벤트 스트림 — 네 가지 객체로 API가 구성된다.
- **핵심 기능**: 세션 안에서 코드 실행, 파일 편집, 웹 검색, 사전 정의된 Skill 적용,
  산출물(artifact) 생성이 가능하고, **최대 4개 동시 작업**까지 서브에이전트에 위임해
  병렬 처리할 수 있다.
- **샌드박스**: OpenAI 자체 인프라, 고객 자체 인프라, 또는 Vercel·DigitalOcean 같은
  파트너 인프라 중에서 선택해 샌드박스 컴퓨트를 붙일 수 있다.
- **기본 모델**: 이 API로 만든 에이전트는 기본값으로 OpenAI의 최상위 모델
  **GPT-6 Astra**([[2026-09-04-openai-gpt-6-astra-launch]])를 사용한다.
- **과금**: API 자체에 별도 플랫폼 수수료는 없다 — 선택한 모델의 표준 토큰 요금 +
  사용한 도구·MCP 연결·호스팅 샌드박스의 표준 요금만 부과된다.
- **제약**: 현재 미국 데이터만 지원하며 Zero Data Retention(무보관 처리)은 아직 미지원.
- **개발 언어**: JavaScript, Python, Go, Java, Ruby, cURL 등 다중 언어 SDK 제공.
- **동시 발표**: 실시간 양방향(full-duplex) 음성 대화 모델 **GPT-Live-1**도 같은 날
  API로 정식 출시돼([[2026-07-29-openai-gpt-live-codex-voice]] 후속) 전화 통화형
  음성 에이전트 구축까지 지원 범위에 들어왔다.

## 왜 중요한가 (비개발자 관점)

- 지금까지 "에이전트를 만든다"는 것은 개발자가 직접 루프·상태관리·서브에이전트 분배
  로직을 짜야 한다는 의미였다. Agents API는 이 오케스트레이션 자체를 OpenAI가
  관리형 서비스로 대신 맡아준다는 점에서, Claude Code의 Subagents·Anthropic의
  Claude Platform과 정면으로 겨루는 "에이전트 구축 인프라" 경쟁이 본격화됐다는 신호다.
- 서브에이전트 최대 4개 동시 처리, 세션 지속성, 이벤트 스트림 같은 구성은 "챗봇 하나를
  API로 감싸는" 이전 세대 API와 달리 처음부터 다중 에이전트 운영을 전제로 설계됐다.

## 활용/시사점

- **강의**: "에이전트를 처음부터 코드로 짜는 것"과 "관리형 API로 오케스트레이션을
  위임하는 것"의 차이를 설명하는 최신 사례 — Claude Code Subagents·Anthropic
  Managed Agents와 나란히 비교 실습하기 좋다.
- **AX**: 자체 에이전트 인프라를 구축할 여력이 없는 기업이 검토할 만한 관리형 대안.
  다만 데이터가 미국 리전에 한정되고 무보관 옵션이 없어, 데이터 거버넌스가 엄격한
  기업은 현재로선 도입 제약이 있다는 점을 확인해야 한다.

## 출처

- [OpenAI Developers — Agents API Overview](https://developers.openai.com/api/docs/guides/agents-api/overview)
- [OpenAI Developers — Agents API Quickstart](https://developers.openai.com/api/docs/guides/agents/quickstart)
- Hacker News 스레드 "OpenAI Agents API" (346점, 09-11 확인)
