# AI Radar Web — 작업 가이드

이 디렉토리는 AI Radar 위키의 웹 앱(Next.js 15 App Router)이다.

## UI 작업 전 필독
1. `web/PRD.md` — 무엇을 왜 만드는가 (페이지별 요구사항·비범위)
2. `web/DESIGN.md` — B1 디자인 시스템 (토큰·규칙·클래스 어휘)
설계 배경 전체: `docs/superpowers/specs/2026-07-09-web-redesign-design.md`

## 구조
- `app/` 페이지·컴포넌트. 홈(`/`)=최신 이슈, `/issues`=아카이브, `/chat`=대화,
  전역 채팅 패널은 `components/ChatPanelHost.tsx`(이벤트 `air:ask`로 열림).
- `lib/issue-parser.ts` 뉴스레터 마크다운→구조화 (순수 함수, 테스트 있음).
  `lib/issues.ts` 호수·위키매칭 어셈블리. `lib/chat-store.ts` localStorage 대화.
- `lib/qa.ts` 위키 검색 + Claude 호출. `streamAnswer`(SSE)와 `answerQuestion`(레거시 JSON).
- `scripts/build-content.mjs` 가 predev/prebuild에서 `wiki/`·`newsletter/`를
  `lib/content.generated.json`으로 직렬화한다. **위키·뉴스레터 원본은 여기서 수정하지 않는다.**

## 규칙
- 스타일은 `app/globals.css`의 클래스 어휘를 재사용한다. 새 토큰·컴포넌트는 DESIGN.md에
  먼저 기록하고 globals.css에 추가한다.
- 테스트: `npm test` (tsx + node:test, `tests/`). 파서·스토어 등 순수 로직 변경 시 필수.
- 개발: `npm run dev` (포트 3300). 전 페이지 공유 암호 보호 — 로컬 암호는 `.env.local`.
- `/api/qa`는 스트리밍(`{stream:true, messages}`)과 레거시(`{question}`) 두 계약을 유지한다.
