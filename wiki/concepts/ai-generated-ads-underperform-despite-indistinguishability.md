---
type: concept
date: 2026-05-18
tools: []
importance: medium
uses: [ax, course]
source: https://hbr.org/2026/09/research-ai-generated-ads-perform-worse-than-human-made-ones-even-when-customers-cant-tell-them-apart
---

# AI 광고는 구분이 안 될 만큼 좋지만, 그래도 덜 팔린다

## 무엇인가

Syracuse University Newhouse School(Adam Peruta 부교수)과 Ipsos의 공동 연구
(2026-05 발표, HBR이 2026-09-03 "Research:" 시리즈로 요약 게재). 인간이 만든 광고와
동일한 전략 브리프로 생성한 AI 광고를 정면 비교했다.

> **페이월 우회 기록 (2026-09-07 백필 3차)**: HBR 원문은 페이월이지만, 원 연구가 Syracuse
> 대학 공식 보도자료(news.syr.edu)로 2026-05에 이미 전문 공개돼 있어 그대로 확보했다.
> HBR 게재(09-03)보다 원 발표(05-18)가 4개월 앞선, 이 위키에서 확인된 첫 "HBR이 뒤늦게
> 소개한 이미 공개된 연구" 사례.

## 방법론

- Google Gemini로 기존(2021년 이전 제작) 인간 광고에서 크리에이티브 브리프를
  역설계(reverse-engineer) → 샷리스트 작성 → 동일 브리프를 OpenAI Sora 2에 입력해
  AI 광고 생성
- 10개 브랜드(Cheerios, Chewy, Febreze, Fiat, H&M, Old Navy, Herbal Essences,
  Ray-Ban Meta, TurboTax, Visa) × 각 1쌍(인간판·AI판) = 20개 광고
- 미국 소비자 3,000명 대상 반응 측정

## 핵심 수치

| 지표 | 수치 |
|---|---|
| 인간 제작 광고 성과 (벤치마크 대비) | **+11포인트** |
| AI 생성 광고 성과 (벤치마크 대비) | **-5포인트** (약 16포인트 격차) |
| 어느 쪽인지 식별 못 한 응답자 비율 | **40%** |
| AI 광고를 정확히 "AI"로 식별한 비율 | **13%뿐** |

## 왜 중요한가

**"구분이 안 된다"와 "설득력이 있다"는 별개의 축**이라는 것이 이 연구의 핵심이다.
응답자 대다수가 AI 광고를 인간 광고와 구별하지 못했는데도(식별률 13%), 실제 판매 예측
성과는 AI 쪽이 뚜렷하게 낮았다(-5 vs +11). 연구팀의 결론: AI는 "충분히 좋지만(good
enough)", 스토리텔링·감정·고유한 관점이 필요한 창의적 과업에서는 여전히 사람에게
못 미친다.

## 활용 포인트

- **AX**: 마케팅 부서가 AI 생성 광고를 "품질 검수를 통과했으니 문제없다"는 근거로만
  판단하면 안 된다는 경고 — 식별 불가능성 지표와 실제 전환·판매 성과 지표를 분리해서
  측정해야 한다.
- **강의**: "AI가 사람과 구분 안 됨 = AI가 사람만큼 효과적"이라는 흔한 오해를 반박하는
  실측 사례. 튜링테스트류 지표와 비즈니스 성과 지표를 구분해서 가르치는 도입부로 적합.

## 이 위키의 다른 결과와의 관계

- [[customer-resistance-to-ai]] — "AI라고 밝히면 채택률이 떨어진다"는 발견과 겹치는
  주제(AI 정체 노출의 효과)이지만, 이 연구는 반대로 **AI인지 몰라도 성과가 낮다**는
  점에서 결이 다르다 — 브랜드 신뢰 문제가 아니라 창작 품질 자체의 문제.

## 출처

- HBR 요약(페이월, 2026-09-03): https://hbr.org/2026/09/research-ai-generated-ads-perform-worse-than-human-made-ones-even-when-customers-cant-tell-them-apart
- Syracuse 공식 보도자료(전문 무료, 2026-05-18): https://news.syr.edu/2026/05/18/newhouse-research-finds-ai-ads-fall-short-on-sales-impact/
- Ipsos 공동 발표: https://www.ipsos.com/en-us/ai-ads-are-good-enough-and-thats-problem
- 수집 원문: `raw/2026-09/hbr-syracuse-ipsos-ai-ads.md`
