---
type: update
date: 2026-09-30
tools: [chatgpt, codex]
importance: high
uses: []
source: https://oag.ca.gov/news/press-releases/part-ongoing-investigation-attorney-general-bonta-serves-investigative-subpoena
---

# OpenAI, 안전연구원 3명 해고 + 캘리포니아주 검찰총장 수사 소환장

## 무엇이 있었나

OpenAI가 안전연구원 3명(Jasmine Wang, Tomek Korbak, Mikita Balesni)을 민감한 내부
정보를 외부 AI 안전단체와 공유한 혐의로 해고했다. Korbak은 07월 Hugging Face 침해
사건 조사에서 Redwood Research·METR과의 기술 연락 창구 역할을 맡고 있던 인물이다.

해고 직후인 2026-09-30, 캘리포니아주 검찰총장 Rob Bonta가 OpenAI에 수사용 소환장
(investigative subpoena)을 송달했다 — 모델 관련 사이버보안 사고·리스크 전반을
다루는 더 넓은 조사의 일환이다.

## 왜 중요한가 (비개발자 관점)

- 같은 주(09-30) FTC도 OpenAI·Anthropic 등에 제품 리스크 조사를 시작했다
  ([[2026-09-30-ftc-openai-anthropic-ai-safety-investigation]]) — 연방(FTC)과 주
  (캘리포니아) 양쪽에서 거의 동시에 조사가 시작된 셈이다.
- 2026-09-09~11 Anthropic·Google 안전연구원들이 "AI 업계는 목숨 걸고 도박 중"이라며
  잇따라 사퇴해 METR에 합류한 것과 결이 비슷하다 — 다만 이번엔 **자발적 사퇴가 아니라
  해고**이고, 사유가 "외부 안전단체와의 정보 공유"라는 점에서 안전팀과 회사 사이의
  긴장이 한층 날카로워진 사례다.
- 외부 평가기관(METR·Redwood Research)과의 기술 연락 창구였던 인물이 해고 대상에
  포함됐다는 점은, 09-22 OpenAI가 발표한 "외부 평가자 상시 배치" 정책
  ([[2026-09-22-openai-third-party-safety-assessments]])의 실제 운영과 내부 갈등
  가능성을 함께 보여준다.

## 후속 (2026-10-04 추가) — 안전보고서 책임자 David Robinson, "문화가 망가졌다"며 사퇴

이번엔 해고가 아니라 **자발적 사퇴**다. OpenAI에서 3년 반 재직하며 Preparedness
Framework(위험 평가 체계) 초안 작성에 참여하고 **프론티어 모델 출시 12건의 안전보고서
작성을 총괄**해 온 David Robinson이 2026-10-03 The Atlantic에 "I Quit OpenAI Because
Its Culture Is Broken"이라는 에세이를 발표하며 퇴사했다.

- 핵심 주장: OpenAI는 지금까지 "일단 내놓고 고치는"(trial and error) 방식으로
  성장해왔지만, **"시행착오의 시대는 끝났다"**— 모델이 더 유능해질수록 사후 수정이
  통하지 않는 영역에 들어선다는 것.
- "재직 기간 중 비행기를 안전하게 띄우거나, 원자로를 멜트다운 없이 운영하거나, 금융
  시스템을 붕괴 없이 키워본 경험을 가진 동료를 한 번도 만나지 못했다"— 고위험 산업의
  안전공학 경험이 조직에 구조적으로 결여돼 있다는 지적.
- 같은 기사에서 전직 엔지니어 Calvin French-Owen(Codex 팀 출신)의 퇴사 소회도
  함께 조명됐다 — 1년 새 직원 1,000명→3,000명으로 급성장하며 "소통 방식·보고
  체계·제품 출시·채용 프로세스 등 거의 모든 것이 규모를 못 버티고 무너졌다"는 증언.

> Robinson의 사퇴는 해고(이번 글 본론, Wang·Korbak·Balesni)와 달리 **자발적**이지만,
> 같은 주 캘리포니아주 수사 소환장·FTC 조사와 맞물리며 "안전 조직과 회사 사이의 긴장이
> OpenAI에서도 Anthropic·Google 수준으로 번지고 있다"는 09-09 Jacob Coxon 사퇴
> ([[2026-09-09-anthropic-jacob-coxon-resignation]]) 이후의 업계 전반적 흐름과 같은
> 결로 읽힌다.

## 활용/시사점

- **AX**: AI 기업의 안전 조직 내부 갈등이 규제 조사로 직결되는 속도가 빨라지고 있다 —
  기업이 외부 AI 벤더를 선택할 때 벤더의 안전 거버넌스 안정성도 리스크 요인으로
  고려할 만하다.
- **강의**: "자발적 사퇴"(Anthropic·Google 사례)와 "해고"(이번 OpenAI 사례)를 구분해
  AI 업계 안전팀 내부 갈등의 스펙트럼을 설명하는 자료로 적합하다.

## 출처

- [California OAG — Attorney General Bonta Serves Investigative Subpoena on OpenAI](https://oag.ca.gov/news/press-releases/part-ongoing-investigation-attorney-general-bonta-serves-investigative-subpoena)
- [implicator.ai — OpenAI Fires 3 Safety Researchers Over Shared Data](https://www.implicator.ai/openai-fires-three-safety-researchers/)
- [The Hill — California attorney general subpoenas OpenAI over cyber incidents](https://thehill.com/policy/technology/6124245-openai-subpoena-rob-bonta-california/)
- [TechCrunch — OpenAI safety employee resigns, claiming the company's 'culture is broken'](https://techcrunch.com/2026/10/03/openai-safety-employee-resigns-claiming-the-companys-culture-is-broken/) (David Robinson, The Atlantic 에세이 보도)
- raw: `raw/2026-10/openai-safety-researchers-fired-bonta-subpoena.md`
