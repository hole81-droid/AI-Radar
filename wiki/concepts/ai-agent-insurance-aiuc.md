---
type: concept
date: 2026-09-17
tools: []
importance: medium
uses: [ax]
programs: [AI Agent Service — Mastery Course]
source: https://www.latent.space/p/aiuc
---

# AI 에이전트 "보험·인증" 인프라 — AIUC와 신뢰의 병목

## 무엇인가

Latent Space가 2026-09-17 공개한 인터뷰(Rune Kvist, AIUC 창업자)가 제시하는 관점 —
**AI 에이전트 도입의 병목은 이제 성능이 아니라 신뢰와 책임(liability)**이라는 것.
AIUC(Artificial Intelligence Underwriting Consortium)는 이 병목을 풀기 위해 에이전트의
보안·안전·신뢰성을 검증하는 인증 표준 **AIUC-1**(분기별 갱신)을 만들고, 이 인증을
보험 상품과 직접 연결하는 회사다.

- **핵심 비유**: Waymo는 이미 사람보다 뛰어난 운전 능력을 갖췄지만, 규제·법적 책임
  불확실성 때문에 널리 배치되지 못하고 있다 — AI 에이전트도 같은 함정에 빠질 수 있다는
  것이 Kvist의 문제의식이다. "능력"과 "배치 가능"은 다른 문제다.
- **비즈니스 모델**: ① 기업 대상 AIUC-1 인증·심사(건당 3~10주 소요) 수수료, ② Lloyd's
  of London 등 보험사와 파트너십을 맺고 보험료 수익 일부를 공유, ③ 표준 자체를
  비영리가 아닌 영리 조직으로 운영(비영리 표준기구는 대응이 느리다는 판단).
- **실적**: Series A $40M(Ribbit Capital·First Harmonic 주도), 직원 20명. 고객사에
  Cursor·Harvey·Lovable·ElevenLabs·Sierra. **ElevenLabs는 Lloyd's가 보증하는 "업계
  최초 AI 에이전트 보험"을 실제로 구매**한 사례로 소개됐다.

## 왜 중요한가

- 지금까지 AI 에이전트 리스크 논의는 "안전장치를 어떻게 설계하는가"(가드레일·권한
  설계)에 집중돼 있었다면, 이 개념은 "그래도 사고가 나면 누가 책임지는가"를 **보험이라는
  금융 인프라**로 풀려는 시도다. AX 도입 논의에서 자주 빠지는 축이다.
- JPMorgan의 Devspace(같은 날 확인, [[2026-09-17-jpmorgan-claude-code-devspace-sandbox]])가
  "사고가 나도 피해가 없도록 설계"하는 접근이라면, AIUC는 "사고가 나도 금전적으로
  감당 가능하게 만드는" 접근이다 — 같은 문제(에이전트 리스크)에 대한 서로 다른 두 해법이
  같은 주에 관찰된 셈이다.
- 다만 이 개념은 AIUC라는 특정 스타트업의 자체 설명(투자 유치를 위한 인터뷰)에 근거한
  것으로, 인증의 실효성이나 보험 가입 기업 수 같은 독립적 검증 수치는 아직 없다 —
  `evidence: anecdotal`에 가깝게 다뤄야 한다.

## 강의·AX 활용 포인트

- **AX**: AI 에이전트를 고객 대면 업무(결제·계약·의료 등 고위험 영역)에 배치하려는
  조직이라면, 기술적 안전장치 검토뿐 아니라 "이 업무에 보험·인증이 존재하는가"를
  도입 체크리스트에 추가할 근거로 쓸 수 있다.
- **강의**: "AI 도입의 장애물은 성능이 아니라 신뢰"라는 프레임은 AI Agent 도입 전략
  강의에서 기술 성숙도 논의 이후 배치할 만한 결론부 소재다.

## 출처

- [Latent Space — Underwriting Superintelligence: Backing Agents you can Sue — Rune Kvist, AIUC](https://www.latent.space/p/aiuc)
