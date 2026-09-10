---
type: update
date: 2026-09-08
tools: []
importance: high
uses: [ax]
source: https://theintercept.com/2026/09/08/military-ai-weapons-contracts-openai-anthropic-google/
---

# The Intercept 단독, OpenAI·Anthropic·Google·xAI의 국방부 계약 400여 쪽 공개 — Anthropic Claude는 이란 공습 표적 식별에 실사용

## 무엇이 있었나

탐사매체 The Intercept가 FOIA(정보공개) 소송으로 확보한 400여 쪽의 문서를 공개했다.
OpenAI·Anthropic·Google·xAI 4개 사가 2025년 7월 국방부와 각각 최대 $200M 규모
계약을 맺고 "군사적 이점·군사적 효용을 높이거나 군의 의사결정을 강화하는" AI 도구
프로토타입 개발에 합의했다는 내용이다.

- **핵심 폭로 — 이란 공습에 Claude 실사용**: 2026-02-28 미국·이스라엘의 이란 시설
  합동 공습 초기 단계에서, 국방부는 Anthropic의 Claude를 Palantir의 Maven Smart
  System과 결합해 표적 식별·우선순위화에 사용했다. 작전 첫 24시간 동안 이 통합
  시스템이 약 1,000개의 우선순위 표적(이란 지도부 거점·군사 자산 등)을 상세 운용
  데이터와 함께 산출했다.
- **타이밍 문제**: 공습 하루 전인 2026-02-27, 트럼프 대통령이 연방기관에 Anthropic과의
  작업을 중단하라는 행정명령(Anthropic을 잠재적 "공급망 리스크"로 지정)을 내렸다.
  그럼에도 국방 당국은 이란 작전 기간 Claude 사용을 계속했다.
- 별도로 The Intercept는 국방부가 OpenAI에 "거부율을 최소화(minimal refusal rates)"한
  AI를 요구했다는 계약 초안 문구도 공개했다. OpenAI는 해당 문구가 최종 서명본에는
  들어가지 않았다고 반박했다.

## 왜 중요한가 (비개발자 관점)

> ⚠️ 상충: [[2026-08-27-anthropic-pentagon-blacklist-ruling]]에서 다룬 국방부 갈등의
> 발단은 "Anthropic이 자사 모델의 **자율살상무기·대량감시 사용 제한**을 계약에
> 명시하려다 국방부와 결렬됐다"는 것이었다. 그런데 이번 공개로 드러난 사실은 그
> 갈등이 불거지기 **이전부터**(그리고 트럼프의 작업 중단 명령 **이후에도**) Claude가
> 실제 공습 표적 식별에 쓰이고 있었다는 것이다. "제한을 요구하며 버틴 회사"라는
> 이미지와 "실제로는 살상 작전에 이미 투입돼 있던 모델"이라는 사실이 같은 회사를
> 두고 동시에 성립한다 — 어느 쪽 계약·용도에 대한 이야기인지 구분해서 볼 필요가 있다
> (표적 식별 지원과, 자율 교전·발사 결정을 AI가 직접 내리는 것은 다른 층위의 사용이라는
> 점도 감안해야 한다).
- 4대 AI 랩(OpenAI·Anthropic·Google·xAI)이 예외 없이 국방부와 유사한 규모·성격의
  계약을 맺고 있었다는 점에서, "AI 안전을 표방하는 기업 vs 군사적으로 거리를 두는
  기업"이라는 구도가 업계 전반에 적용되지 않음을 보여준다.
- AI가 이미 실전 표적 식별에 쓰인 구체적 사례(1,000개 표적/24시간)가 문서로 확인된
  드문 경우다 — "AI의 군사적 이용"이 추상적 우려가 아니라 발생한 사실임을 보여준다.

## 활용/시사점

- **AX**: 벤더의 공개 정책·계약 협상 태도와, 실제 계약·정부 사용 이력은 별개로
  확인해야 한다는 리스크 관리 시사점. 공공·방산 섹터向 AI 도입 검토 시 참고할 실제
  사례.
- **강의**: "AI 기업의 안전 원칙이 정부 고객 앞에서 어디까지 관철되는가"를 다룰 때
  [[2026-08-27-anthropic-pentagon-blacklist-ruling]](법정 승소)와 이 문서(실사용 이력)를
  함께 놓고 "원칙 선언"과 "실제 이력"의 시차·간극을 보여주는 사례로 쓸 수 있다.

## 출처

- [The Intercept — AI Giants Work Hand-in-Hand With the Pentagon, Contracts Reveal](https://theintercept.com/2026/09/08/military-ai-weapons-contracts-openai-anthropic-google/)
- [The Intercept — The Pentagon Asked OpenAI for Artificial Intelligence Designed to Rarely Say No](https://theintercept.com/2026/09/08/pentagon-openai-military-contract/)
- [The Defense News — Pentagon Used Anthropic's Claude AI and Palantir Maven to Identify 1,000 Targets in Iran Strikes](https://www.thedefensenews.com/news-details/Pentagon-Used-Anthropics-Claude-AI-and-Palantir-Maven-to-Identify-1000-Targets-in-Iran-Strikes/)
- 관련: [[2026-08-27-anthropic-pentagon-blacklist-ruling]]
