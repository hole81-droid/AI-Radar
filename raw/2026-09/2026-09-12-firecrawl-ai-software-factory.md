---
source: https://www.firecrawl.dev/blog/ai-software-factory
fetched: 2026-09-12
---

# How to Build an AI Software Factory: Agents That Open, Review, and Merge PRs (요약, WebFetch 정독)

## 정의
"work arrives from a queue, agents run in isolated workspaces, verification happens
automatically, and a human sits at an explicit merge gate."

## 5단계 파이프라인
1. Intake — Sentry Seer가 에러를 실행가능성으로 점수화, 라벨 필터링으로 작은 작업만 선택
2. Isolation — Git worktrees(1-5개 에이전트, 가장 저렴) / 컨테이너(의존성 충돌 방지) /
   클라우드 샌드박스(무제한 병렬). Stripe: "pre-warmed devboxes in about 10 seconds"
3. Tools — Stripe Toolshed(~500개 내부 MCP 도구), 테스트 러너·원격측정·기능플래그 연결,
   Firecrawl 개발자 인덱스로 웹 컨텍스트 추가
4. Verification — 내부 루프(린트/컴파일/테스트, 로컬 <5초), LLM 판정(Spotify 약 25% 세션 거부),
   외부 루프(CI/PR 체크), 스크린샷 기반 시각적 검증
5. Merge Gate — Faire: 에이전트 PR 2명 리뷰 필수, 속성추적 필수. MS 데이터: 인간 커밋 받은 PR
   86.2% 병합, 완전자동 PR 55.1%만 병합

## 사용 도구
Claude Code, Codex(에이전트) / Stripe Minions, Spotify Honk, Shopify River(자체 구현) /
Firecrawl(웹 컨텍스트)

## 성과 수치
| 회사 | 메트릭 |
|---|---|
| Shopify | 30일간 3,536개 PR 병합(1/8이 River 저자) |
| Stripe | 주당 1,300+ 병합 PR |
| Ramp | ~30% PR이 에이전트 저자 |
| Microsoft dotnet | 10개월 878개 에이전트 PR(14% 점유), 병합률 67.9% vs 인간 87.1% |
| Airbnb | 3,500개 테스트 파일 6주 마이그레이션 |

## 재현 단계
1. 게이트 하나부터 시작(리뷰 용량이 병목)
2. worktree 격리(.worktreeinclude로 .env 공유)
3. MCP 도구 연결(테스트/원격측정/기능플래그)
4. 자동 검증 우선(린트→테스트→스크린샷→CI)
5. 명시적 리뷰 정책(기계적/범위제한/민감도별 분류)
