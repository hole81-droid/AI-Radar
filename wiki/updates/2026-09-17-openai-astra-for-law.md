---
type: update
date: 2026-09-17
tools: [chatgpt, codex]
importance: medium
uses: [ax]
source: https://openai.com/index/astra-for-law/
---

# OpenAI, 법률 특화 "Astra for Law" 출시 — GPT-6 Astra 도메인 버전 1호

## 무엇이 있었나

OpenAI가 2026-09-17 **GPT-6 Astra를 법률 업무에 맞춰 구성한 "Astra for Law"**를 출시했다.
대형 로펌·리걸테크 기업을 우선 대상으로 한다.

- **법률 검색 인덱스 내장**: 미국 판례법·법령·규정·법원 규칙·행정결정을 아우르는 2억
  3,000만 건 이상의 URL 규모 법률 검색 인덱스를 기본 탑재.
- **26종 생태계 플러그인**: Relativity·Clio 등 리걸테크 전문 도구와 연동하도록 구성.
- **성능(자체 평가)**: 최고 추론 강도(reasoning effort) 기준, 웹검색만 쓰는 일반 GPT-6
  Astra 대비 **전체 정답률 54% vs 38.7%**(상대 개선 약 40%), 판례 중심 질문에서는
  **참조 판례를 24% 더 많이** 찾아냈다.
- **제공 방식**: 우선 선별된 로펌 대상으로 ChatGPT·Codex 내 Trusted Access로 제공, 이후
  API(`gpt-6-astra-law`)로 확대 예정. Harvey·Legora 같은 리걸테크 API 고객이 자사 제품에
  통합할 수 있도록 개방한다.

## 왜 중요한가

- GPT-6 Astra는 출시 당시(2026-09-04) 사이버보안 능력을 자체 최고 위험등급(Critical)으로
  분류해 심사 통과 조직만 쓸 수 있도록 제한했던 모델이다([[2026-09-04-openai-gpt-6-astra-launch]]).
  그 기반 모델의 **첫 산업 도메인 특화 버전이 법률**이라는 점은, 규제·리스크가 큰
  전문직 시장을 프론티어 모델 상용화의 우선순위로 삼고 있음을 보여준다.
- "정답률 54%"라는 수치 자체는 아직 절반 수준에 불과해, 법률 리서치를 전적으로
  맡기기보다 "검토자가 최종 확인하는 리서치 보조" 단계임을 시사한다.
- Harvey·Legora 같은 기존 리걸테크 스타트업이 경쟁자가 아니라 API 고객으로 통합된다는
  점은, 프론티어 랩이 버티컬 AI 스타트업 생태계와 "잠식"이 아니라 "인프라 공급" 관계를
  맺는 사례로 참고할 만하다.

## 활용/시사점

- **AX**: 법무·컴플라이언스 조직이 AI 리서치 도구를 검토할 때 "정확도 수치가 공개돼
  있는가", "결과에 참조 판례·근거가 함께 제시되는가"를 판단 기준으로 삼을 수 있는
  구체적 벤치마크 사례.
- **강의**: 범용 모델(GPT-6 Astra) 위에 도메인 특화 검색 인덱스·플러그인을 얹어
  버티컬 제품을 만드는 패턴 — RAG(검색 증강 생성) 개념을 설명하는 실전 사례로 쓸 수 있다.

## 출처

- [OpenAI — Introducing Astra for Law](https://openai.com/index/astra-for-law/)
- [LawSites — OpenAI Releases Astra for Law, A GPT-6 Model Tailored for Legal Work](https://www.lawnext.com/2026/09/openai-releases-astra-for-law-a-gpt-6-model-configured-for-legal-work.html)
- [Legal IT Insider — OpenAI GPT-6 Astra: What legal needs to know and early reactions](https://legaltechnology.com/openai-gpt-6-astra-what-legal-needs-to-know-and-early-reactions/)
- 기반 모델 상세: [[openai-gpt-6-astra]], [[2026-09-04-openai-gpt-6-astra-launch]]
