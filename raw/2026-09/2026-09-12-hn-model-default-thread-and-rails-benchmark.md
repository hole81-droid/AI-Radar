---
sources:
  - https://news.ycombinator.com/item?id=49672966
  - https://rubyonrails.org/2026/9/9/agents-on-rails-stage-2
fetched: 2026-09-12
---

# HN "기본 모델" 스레드 + Rails 에이전트 벤치마크 (WebFetch 정독)

## Ask HN: What default model do you use and why? (60점)
- Claude Opus 5: 지나치게 장황("wordslop machine") — 많은 사용자가 Opus 4.8로 회귀
- GPT Luna: 빠르고 저렴, 130k 이하 문맥에서 효율적 / Sol: Opus보다 간결·빠르나 과도한
  전체 재작성 경향 / Terra: Sonnet보다 일관되게 우수 / Astra: 정확하나 비용 높고 과도한 검증반복
- DeepSeek v4.1 Flash: Fable 대비 32배 저렴, 프라이버시 우려
- Gemini 3.8 Flash: 속도 3-4배, Vision 강점
- 수렴점: (1) Claude 장황성 비판 반복 (2) 계획=강력모델·구현=빠른모델·검토=전문가모델의
  계층형 조합 확산 (3) 비용민감도(Opus $200/월 vs DeepSeek $2/월) (4) 벤치마크-실무 체감 격차

## Agents on Rails: Stage 2 (Rails 공식 블로그, 09-09, HN 09-12 재확산 20점)
- 10개 모델 비교: GPT-6 Astra, Claude Fable 5.1, Gemini 3.8 Flash, Claude Opus 5, GPT-5.6 Sol,
  GLM 5.3 Flash, Grok 4.6, Kimi K3, Muse Spark 1.3, GPT-5.6 Luna
- 벤치마크: 실제 칸반 앱 "Fizzy" 대상 20개 실무 기능 티켓(불완전 요구사항, 엣지케이스 포함),
  제약 90분/400단계/$60
- 결과: 최고 정확도 GPT-6 Astra(35%, 21/60) / 가성비 GLM 5.3 Flash(13%, $18.78) /
  종합 최선 GPT-6 Astra(중간 effort, 9분·$2.51)
- 시사점: 모델들이 명시 안 된 엣지케이스는 잘 안 만듦, 소형 모델은 작은 작업엔 되지만
  복잡한 기능에선 완전성 보장 안 됨
