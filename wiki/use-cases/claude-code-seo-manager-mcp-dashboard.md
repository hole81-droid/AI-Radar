---
type: use-case
date: 2026-07-31
tools: [claude-code]
mechanism: [mcp, cron-routines, cli-pipeline]
domain: marketing
task: SEO 키워드 리서치·블로그/인터랙티브 툴 자동 발행·검색 순위 모니터링 자동화
outcome: 오픈소스 대시보드+MCP+GitHub Actions로 SEO 매니저 역할을 Claude Code에 상시 위임 (주장, 트래픽·순위 개선 수치는 미공개)
model: 미확인
cost: 미확인
permissions: 미확인(헤드리스 Claude Code가 컨테이너 내에서 콘텐츠 발행·GitHub PR까지 자동 처리 — 저장소 쓰기 권한 이상으로 추정 [추정])
maturity: production
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://old.reddit.com/r/AI_Agents/comments/1vapk9l/i_was_tired_of_doing_seo_manually_so_i_turned/
---

> **공식**: Claude Code로 MCP 서버+GitHub Actions 크론+헤드리스 컨테이너 파이프라인을 활용해 SEO 업무(키워드 리서치·콘텐츠 발행·순위 모니터링)를 수행 → 유료 SEO 툴(ahrefs) 구독 없이 오픈소스 대시보드로 상시 자동 운영 (주장)

## 무엇을 자동화했나

1인 창업자가 자신의 스타트업 블로그·SEO를 수동으로 운영하다가(ahrefs 구독으로 키워드 확인,
직접 글 작성) Claude Code가 이미 블로그 글 작성을 도와주고 있던 것에 착안해, 아예 "SEO 매니저"
역할 자체를 Claude Code에 넘겼다. 결과물을 대시보드로 만들어 관리하다가 통째로 오픈소스로
공개했다(AGPL-3.0).

핵심 기능:
- 키워드 리서치(검색량·난이도 분석)
- 블로그 글 매일 자동 발행 + 인터랙티브 무료 툴 매주 자동 발행 (GitHub Actions 스케줄)
- 검색 순위 분석·검색 성과 모니터링(Google Search Console API·DataForSEO·SerpApi 연동)

## 어떻게 구성했나 (아키텍처)

- **앱**: Next.js 16(React 19, App Router) + TypeScript + Tailwind v4 — SEO 대시보드
- **DB**: PostgreSQL (자체 호스팅 시 번들 컨테이너, 클라우드 배포 시 Supabase)
- **연결 계층**: 자체 MCP 서버(`mcp-handler` + `@modelcontextprotocol/sdk`)로 대시보드와
  에이전트를 연결
- **빌더**: Claude Code를 헤드리스로 컨테이너 안에서 실행 — 실제 콘텐츠 생성·발행을 담당
- **오케스트레이션**: Docker Compose로 앱+DB+크론+빌더를 한 스택에 묶고, GitHub Actions가
  일정에 따라 빌더를 트리거해 자신의 저장소에 콘텐츠를 커밋·PR
- **외부 데이터 소스**: Google Search Console API, DataForSEO, SerpApi (순위·키워드 데이터)
- **알림**: Resend(이메일 알림)

즉 "대시보드가 지휘하고, 헤드리스 Claude Code가 실제로 리서치·집필·발행을 수행하며, GitHub
Actions가 정해진 주기로 그 사이클을 돌리는" 구조다.

## 벤치마크 데이터

| 항목 | 값 |
|------|-----|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 미확인 — 헤드리스 Claude Code가 컨테이너 내에서 자율적으로 콘텐츠를 발행하고 GitHub Actions로 PR까지 여는 구조로 보아 저장소 쓰기 권한 이상일 것으로 추정 [추정] |
| 성숙도 | production — 저자 본인의 스타트업 블로그에 실사용 중이라고 주장 |

## 성과와 수치

트래픽 증가·검색 순위 개선 등 정량적 성과는 게시글에 제시되지 않았다(**미확인**). 저자는
"생각보다 잘 작동했다(worked better than I thought)"고만 밝혔다 — 구체적 벤치마크가 없는
자기 보고(anecdotal) 수준이다.

## 재현 가이드

- **난이도**: 중~상 (Next.js/PostgreSQL/Docker Compose/MCP/GitHub Actions를 모두 엮어야 함)
- **준비물**: Claude Code(헤드리스 실행 가능한 계정/플랜), Docker, GitHub 저장소(Actions
  사용), Google Search Console·DataForSEO·SerpApi 계정, PostgreSQL
- **핵심 단계**:
  1. SEO 대시보드(Next.js)와 MCP 서버로 "에이전트가 호출할 수 있는 SEO 도구"를 노출 정의
  2. Claude Code를 헤드리스로 컨테이너에서 실행할 수 있도록 Docker Compose 스택 구성
  3. GitHub Actions로 키워드 리서치→콘텐츠 생성→발행 주기를 스케줄링(cron)
  4. Search Console·DataForSEO 등 외부 API를 연동해 순위·성과 데이터를 대시보드에 반영
  5. 발행물을 저장소에 커밋·PR하는 흐름으로 마무리, 이메일 알림(Resend) 연결

## 강의·AX 활용 포인트

- **강의**: "대시보드(사람이 보는 창) + MCP(에이전트가 쓰는 도구) + cron(주기 실행)"이라는
  3분리 아키텍처가, 반복 업무를 Claude Code로 상시 파이프라인화할 때의 표준 패턴으로 가르치기
  좋다. 이 위키 자체의 [[ai-radar-daily-scan-pipeline]](cron+서브에이전트) 구조와 나란히
  비교하면 "정기 리서치·발행 자동화"의 두 가지 구현 사례로 묶을 수 있다.
- **AX**: 마케팅/그로스팀이 SEO 콘텐츠 운영에 Claude Code를 투입할 때, 유료 SEO 툴 대체
  가능성과 함께 "발행 전 승인 단계가 없다"는 리스크(자동 발행된 콘텐츠 품질·브랜드 리스크
  관리)를 함께 검토해야 한다. 정량 성과가 없는 자기 보고 사례이므로 도입 근거보다는 아키텍처
  참고용으로 한정.

## 출처

- 원문: [Reddit r/AI_Agents — "I was tired of doing SEO manually, so I turned Claude Code into my SEO manager (open-source)"](https://old.reddit.com/r/AI_Agents/comments/1vapk9l/i_was_tired_of_doing_seo_manually_so_i_turned/) (2026-07-31 확인)
