---
type: update
date: 2026-07-25
tools: [chatgpt, codex]
importance: medium
uses: [ax]
source: https://finance.biggo.com/news/d7df18cc-2d03-4fc5-a0f4-07fcf9ccbc0a
---

# OpenAI, 17일 연속 "완전 정상" 없이 나흘 연속 장애 — 7/25 ChatGPT·API·Codex 동시 글로벌 다운

## 무엇이 있었나

OpenAI 서비스가 2026-07-09부터 07-25까지 17일 동안 단 하루도 "완전 정상(fully operational)"
상태를 유지하지 못했다. 이 기간 7/12·7/16에 대형 장애가 있었고, 나머지 날들도 "성능 저하"와
"부분 장애" 상태를 오갔다.

- **7/25 사고**: ChatGPT·개발자 API·Codex가 전 세계적으로 동시에 오류율 급증을 겪었다. 이용자들은
  내부 오류 코드 "biscuit_baker_service_me_circuit_open"이 붙은 503 에러를 받았고, 요청이
  서버까지 도달하지 못하는 상태가 약 1시간 51분 지속됐다.
- OpenAI는 사고 발생 약 1시간 만에 "조사 중"에서 "모니터링 중"으로 상태를 변경, 완화 조치를
  적용했다고 밝혔다.
- 이 사고는 **나흘 연속 네 번째** 서비스 장애였다.

## 왜 중요한가 (비개발자 관점)

- ChatGPT·Codex에 업무를 의존하는 개인·기업 입장에서, 이번 사고는 "가끔 있는 일시적 오류"가
  아니라 3주 가까이 이어진 구조적 불안정성의 정점이었다는 점이 핵심이다. 특히 Codex까지
  ChatGPT·API와 동시에 멈췄다는 것은 코딩 자동화 파이프라인을 OpenAI 하나에만 의존할 경우
  업무가 통째로 멈출 수 있다는 뜻이다.
- 같은 주 Anthropic이 Claude Opus 5를 출시하며 성능·가격 경쟁을 이어가는 것과 대비되는 소식이라,
  "어느 벤더가 더 안정적인가"라는 잣대가 모델 성능 못지않게 부각되는 계기가 됐다.

## 활용/시사점

- **AX**: 특정 AI 벤더의 API·에이전트 도구에만 의존하는 업무 파이프라인이 있다면, 장애 시
  전환 가능한 폴백 모델/프로바이더 구성(Claude, Gemini, 오픈웨이트 모델 등)을 사전에 마련해둘
  필요가 있다는 근거 사례. 특히 Codex 기반 야간 자동화·CI 파이프라인을 운영 중이라면 장애
  대응 재시도·알림 로직이 필수다.
- 지속적인 서비스 안정성 이슈는 OpenAI의 기업 고객 신뢰도에 누적 리스크로 작용할 수 있어,
  향후 SLA·장애 보상 정책 변화 여부를 지켜볼 만하다.

## 출처

- [BigGo Finance — OpenAI's 17-Day Stability Crisis: A $0 Bill for Downtime That the AI Industry Can No Longer Ignore](https://finance.biggo.com/news/d7df18cc-2d03-4fc5-a0f4-07fcf9ccbc0a)
- [unite.ai — Global Outage Hits OpenAI's ChatGPT, API and Codex](https://www.unite.ai/global-outage-hits-openais-chatgpt-api-and-codex/)
- [IBTimes Australia — ChatGPT Down? Codex and OpenAI's APIs Go Down Worldwide Saturday, Marking the Fourth Outage in as Many Days](https://www.ibtimes.com.au/openai-fourth-outage-global-impact-1872895)
- [TheNextWeb — OpenAI hit by another outage as ChatGPT, Codex, and APIs go down together](https://thenextweb.com/news/openai-outage-chatgpt-codex-api-july-2026)
