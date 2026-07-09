# How to write AI agent loops (How I AI — Lenny's Newsletter)

- **원문 URL**: https://www.lennysnewsletter.com/p/how-i-ai-how-to-write-ai-agent-loops
- **게재일**: 2026-06-22
- **수집일**: 2026-07-09 (WebFetch 마크다운 변환·요약본)
- **저자/출연**: Lenny Rachitsky (진행), Brian Grinstead (Mozilla/Firefox 엔지니어)

---

## 도구·플랫폼

- Claude Code, Codex (주 개발 환경)
- Claude Agent SDK (벤더 제공 하네스)
- 서브에이전트 (부모 에이전트에서 스폰)

## 자동화한 업무

1. **일일 PR 검토 루프**: 병합된 PR을 매일 전수 확인, 스킬 격차 식별, 머지 상태 모니터링
2. **주간 스킬 루프**: 역량 격차를 찾아 검증용 전담 서브에이전트를 스폰, 신규 스킬 생성
3. **아침 브리핑**: 캘린더·이메일 확인 후 Slack 요약 (Claude Cowork 기반 무코딩 입문판)

## 루프 아키텍처 — 4가지 유형

- **Heartbeats**: 정기 반복 실행
- **Crons**: 시간 기반 트리거
- **Webhooks**: 이벤트 기반 반응
- **Goal-based loops**: 결과 검증이 성공할 때까지 실행 — "일이 실제로 끝났을 때 멈춘다"

핵심 메커니즘: "A loop is just a prompt that fires itself" — 특별한 엔지니어링이 아니라 스스로를 다시 발화시키는 프롬프트.

설계 원칙: 신입 직원을 온보딩하듯 확인 항목·빈도·기대 결과·문제 발생 시 대응을 문서화한다. PR·스킬 하나마다 전담 서브에이전트를 배치해 병렬 처리한다.

## 성과·수치 (원문 인용)

- Firefox가 한 달에 "423 security fixes" 출시
- 에이전트가 버그 재현을 위해 "14, 15, 20 different approaches" 시도
- 한 버그는 "14 tries before succeeding"
- 2단계 검증(two-stage verification)으로 오탐(false positive)을 크게 줄임

## 경고

"Loops get expensive if you don't write them carefully" — 성공 기준이 모호하면 에이전트가 무한 루프에 빠져 토큰 비용만 누적된다.

## 성숙도

Firefox 사례는 프로덕션 적용, Claude Code/Codex 예시는 작동 시연 수준으로 제시됨.
