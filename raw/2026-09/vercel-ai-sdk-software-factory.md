# Vercel — AI SDK 소프트웨어 팩토리 (원본 요약)

- 원문: https://vercel.com/blog/building-a-software-factory-for-ai-sdk (2026-08-12)
- 픽업: Latent Space "PRs NOT Welcome" https://www.latent.space/p/pr-not-welcome (2026-09-01)
- Vercel X 공지: https://x.com/vercel/status/2087573868877946948

## 요약

Vercel AI SDK 저장소 운영을 위한 다중 특화 에이전트 "소프트웨어 팩토리".

자동화 워크플로 7종: 이슈분류, 버그재현/수정, PR리뷰, 기능분석/구현, 문서갱신,
백포팅, E2E테스트(증거 남김).

아키텍처: 단일목적 에이전트 각각이 격리된 Vercel Sandbox(자체 코드·런타임·최소
시크릿)에서 실행. 인프라: Vercel Functions(API/워커/웹훅)+Queues(작업큐)+
Blob(로그)+Sandbox(격리workspace)+Neon Postgres(팩토리 데이터).

핵심 원칙: "사람 승인 없이는 아무것도 머지되지 않는다."

## 4주 실측 성과

- 주간 PR의 25~35%를 팩토리 작성
- 이슈의 70~80% 자동 종료 (7월 종료건의 75%)
- 오픈 이슈 1,022→844건
- v6 백포팅 50%+ 자동화

## 관련 언급

- Anthropic Opus 4.6이 "PR 급증 변곡점" 계기로 언급됨(팩토리 주력 모델 명시 아님)
- 같은 흐름의 다른 프로젝트: Astro(Flue 제작자 Fred K. Schott 인터뷰), tldraw 등
- Latent Space는 StrongDM의 "Dark Factory"(사람 코드리뷰 없음) 사례도 함께 언급
