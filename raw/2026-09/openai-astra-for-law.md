# OpenAI — "Introducing Astra for Law" (원본 요약)

- 원문: https://openai.com/index/astra-for-law/
- 교차 확인: https://www.lawnext.com/2026/09/openai-releases-astra-for-law-a-gpt-6-model-configured-for-legal-work.html ,
  https://legaltechnology.com/openai-gpt-6-astra-what-legal-needs-to-know-and-early-reactions/ ,
  https://www.investing.com/news/stock-market-news/openai-launches-astra-for-law-on-gpt6-for-legal-research-93CH-4906439
- 게시일: 2026-09-17

## 개요

OpenAI가 GPT-6 Astra를 법률 업무에 맞춰 구성한 "Astra for Law"를 출시. 대형
로펌·리걸테크 기업을 우선 대상으로 한다.

## 주요 사양

- **법률 검색 인덱스 내장**: 미국 판례법·법령·규정·법원 규칙·행정결정을
  아우르는 2억 3,000만 건 이상의 URL 규모 법률 검색 인덱스 기본 탑재.
- **26종 생태계 플러그인**: Relativity·Clio 등 리걸테크 전문 도구 연동.

## 성능 (자체 평가)

- 최고 추론 강도(reasoning effort) 기준, 웹검색만 쓰는 일반 GPT-6 Astra 대비
  **전체 정답률 54% vs 38.7%**(상대 개선 약 40%).
- 판례 중심 질문에서는 **참조 판례를 24% 더 많이** 찾아냄.

## 제공 방식

- 우선 선별된 로펌 대상 ChatGPT·Codex 내 Trusted Access로 제공.
- 이후 API(`gpt-6-astra-law`)로 확대 예정.
- Harvey·Legora 같은 리걸테크 API 고객이 자사 제품에 통합할 수 있도록 개방.

## 맥락

- GPT-6 Astra는 2026-09-04 출시 당시 사이버보안 능력을 자체 최고 위험등급
  (Critical)으로 분류해 심사 통과 조직만 쓸 수 있도록 제한했던 모델.
  Astra for Law는 그 기반 모델의 첫 산업 도메인 특화 버전.

## 평가 메모

evidence: 공식 발표(claimed, 자체 벤치마크) + 리걸테크 전문지(LawNext,
Legal IT Insider) 교차 확인. 구체적 정확도 수치·경쟁 구도가 있는 제품 출시라
update 페이지화(2026-09-17-openai-astra-for-law.md), 기존
[[openai-gpt-6-astra]] 분석 페이지와 교차링크.
