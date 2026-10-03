---
type: update
date: 2026-10-01
tools: [gemini]
importance: medium
uses: [ax]
source: https://news.ycombinator.com/item?id=49942592
---

# Google, 10/9부터 Gemini 무료·저가 플랜의 모델 접근 축소 — 무료는 Flash-Lite만 남는다

## 무엇이 바뀌었나

Google이 2026-10-09부터 Gemini 구독 등급별 모델 접근 범위를 아래처럼 재편한다고
발표했다.

| 등급 | 변경 전 | 변경 후 |
|---|---|---|
| 무료 | Flash-Lite + Flash | **Flash-Lite만** |
| AI Plus | Flash-Lite + Flash + (제한적 Pro) | Flash-Lite + **Flash만**(Pro 제외) |
| AI Pro·Ultra | 전체 | 변경 없음(Flash-Lite·Flash·Pro 전체 유지) |

사실상 **유료 등급 중 가장 저렴한 AI Plus가 Pro 모델 접근권을 잃고**, 전체 모델에
접근하려면 AI Pro 이상이 필요해진다. Flash-Lite는 안드로이드 Gemini 앱·검색
AI Overviews에도 쓰이는 가장 경량 모델로, 추론 능력이 상대적으로 약하다는 평가를
받아왔다.

## 왜 중요한가

- 무료 사용자가 접하는 품질이 사실상 낮아지는 변화다 — 다만 Google은 올해 5월 출시한
  **Gemini 3.5 Flash가 구형 Pro를 실무 다수 작업에서 능가한다**는 입장이어서, "등급
  하락"이라기보다 "라인업 단순화"로 포지셔닝하고 있다. 실제 체감 품질 차이는 작업
  종류에 따라 갈릴 것으로 보인다(미확인).
- **AI Pro가 전체 모델에 접근하는 가장 저렴한 플랜이 된다** — 중간 등급(AI Plus)의
  존재 의미가 약해지는 가격 구조 개편으로, 경쟁사(Claude Pro/Max, ChatGPT Plus) 대비
  요금제 설계 비교 시 참고할 만한 변화다.
- 무료로 다양한 모델을 테스트해보고 기업 도입을 검토하던 조직 입장에서는, 10/9 이후
  **무료 평가 범위가 좁아진다**는 점을 실무적으로 감안해야 한다.

## 활용 포인트

- **AX**: 사내에서 Gemini를 무료/저가 플랜으로 시범 평가 중이라면 10/9 이전에 Pro
  모델 성능을 미리 확인해 둘 필요 — 변경 후에는 유료 상위 등급 없이는 Pro 모델 접근이
  막힌다.
- **강의**: "모델 계층(Lite/Flash/Pro)과 요금제 계층을 분리해 가격 정책을 설계하는"
  AI 서비스 사업 모델 사례로 활용 가능.

## 출처

- [Hacker News — Gemini ending free use of Flash and Pro models](https://news.ycombinator.com/item?id=49942592)
- [AndroidHeadlines — Free Gemini Accounts Are Losing Flash Model Access](https://www.androidheadlines.com/2026/10/google-cuts-gemini-ai-model-access-free-ai-plus-tiers-changes.html)
- [OfficeChai — Gemini Flash And Gemini Pro Models To No Longer Be Available To Free Gemini Users](https://officechai.com/ai/gemini-flash-and-gemini-pro-models-to-no-longer-be-available-to-free-gemini-users/)
