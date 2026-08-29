---
type: update
date: 2026-08-12
tools: [claude-code, claude-cowork]
importance: medium
uses: [course, ax]
source: https://claude.com/blog
---

# Claude in Chrome 사이드패널이 정식 Claude Cowork 세션으로 통합

## 무엇이 있었나

Anthropic이 2026-08-12 브라우저 확장 **Claude in Chrome**의 사이드패널을 별도 모드 선택 없이
곧바로 **Claude Cowork** 정식 세션으로 시작하도록 통합했다.

- 브라우저에서 시작한 대화가 Claude 계정 히스토리에 저장되어 데스크톱·웹·모바일 앱에서
  이어서 진행 가능해졌다 (기존에는 브라우저 세션이 고립돼 있었음).
- 계정에 이미 설정된 Skills·커넥터가 브라우저에서도 별도 설정 없이 그대로 동작.
- Claude가 현재 로그인된 페이지를 읽고 링크 클릭·페이지 이동·텍스트 입력·폼 작성을 수행 —
  예: 여러 벤더 사이트에서 인보이스 데이터를 수집한 뒤 데스크톱에서 이어서 정리하는 식의
  "브라우저에서 시작해 다른 기기에서 마무리" 흐름이 가능해짐.
- **제공 범위**: Max·Team 고객 즉시 제공, Pro는 향후 수 주 내 순차 롤아웃. Enterprise
  관리자는 기능 활성화 여부와 승인 도메인을 제한 가능.
- **한계**: 여전히 Chrome 전용(타 Chromium 브라우저·모바일 브라우저 미지원). Anthropic도
  "브라우저 에이전트는 프롬프트 인젝션에 취약하다"고 인정하며, 결제·데이터 공유 등 중요
  행동 전에는 확인 절차를 유지한다고 밝혔다.

## 왜 중요한가 (비개발자 관점)

- "Claude in Chrome"이라는 별도 브랜드가 사실상 Claude Cowork 안으로 흡수되면서, 사용자
  입장에서는 어느 화면(브라우저·데스크톱·웹·모바일)에서 시작하든 하나의 연속된 에이전트
  세션으로 경험하게 된다. 도구가 파편화되지 않고 하나의 "일하는 AI"로 수렴하는 흐름.
- 브라우저는 로그인 상태를 그대로 활용할 수 있어, 별도 API 연동 없이도 웹사이트 기반 업무
  (송장 수집, 양식 작성, 예약 등)를 에이전트에 맡기기 쉬워진다.

## 활용/시사점

- **AX**: 사내 업무 도구가 API 연동이 안 된 레거시 웹사이트인 경우에도 브라우저 에이전트로
  자동화 범위를 넓힐 수 있다는 신호. 다만 Enterprise 도메인 제한 기능을 반드시 활용해 승인
  안 된 사이트 접근을 막아야 한다.
- **강의**: "브라우저 에이전트 vs API 연동 에이전트"의 트레이드오프(접근성 vs 프롬프트 인젝션
  리스크)를 설명하는 최신 사례로 활용 가능.

## 후속 업데이트 (2026-08-18)

Claude Cowork가 **모든 유료 플랜(Pro 포함)** 대상 모바일(iPhone·iPad)·웹으로 전체
롤아웃을 완료했다. 최초 발표(2026-07)는 Max 플랜에 한정됐던 롤아웃이 약 한 달 만에
전 유료 플랜으로 확대된 것 — Chrome 사이드패널 통합에 이어 "어디서 시작해도 하나의
세션"이라는 방향을 모바일까지 넓힌 조치다. Android 지원 여부는 확인되지 않았다.
OpenAI의 [[openai-chatgpt-work-launch|ChatGPT Work]]와 정면 경쟁 구도.

## 후속 업데이트 (2026-08-26) — 계정 격리형 "내장 브라우저" 추가

Anthropic이 08-12 발표한 "Claude in Chrome 사이드패널" 통합과는 별개로, Cowork 데스크톱
앱에 **독립형(self-contained) 내장 브라우저**를 새로 추가했다. 별도 설치가 필요 없고, 사용자의
실제 브라우저(Chrome 등) 계정·로그인 세션과 완전히 격리된다는 점이 기존 방식과 다르다.

| 구분 | 신규 내장 브라우저 (08-26) | 기존 Claude in Chrome 사이드패널 (08-12) |
|---|---|---|
| 용도 | 새 웹 작업을 처음부터 수행 | 이미 열려 있는 페이지에서 이어서 작동 |
| 계정/세션 | 사용자 브라우저 계정과 완전 격리 | 사용자의 기존 로그인 세션 공유 |
| 데이터 접근 | 탭·북마크·비밀번호 등 미접근 | 기존 로그인 상태 그대로 활용 |

- **제공 범위**: Pro·Max·Team은 08-24주부터 데스크톱 앱(macOS·Windows·Linux 베타), Enterprise는
  관리자 설정으로 즉시 사용 가능.
- **보안**: "Claude in Chrome과 동일한 안전장치"(요청과 실제 행동을 대조 검토)를 적용한다고
  명시하되, 프롬프트 인젝션 위험을 완전히 제거할 수는 없어 신뢰할 수 있는 사이트부터 쓰라고
  권고. Settings → Cowork → Preferred browser에서 두 방식 중 선택 가능 — 상황별 병행 설계.
- **경쟁 구도 대비**: OpenAI가 자체 AI 브라우저 ChatGPT Atlas를 출시 8개월 만에 단종한 것
  (2026-08-09, [[2026-07-09-openai-atlas-browser-shutdown]])과 반대로, Anthropic은 브라우저를
  자체 내장하는 방향으로 움직이고 있다.

## 출처

- [Claude Blog — Cowork gets a built-in browser: nothing to install (2026-08-26)](https://claude.com/blog/cowork-built-in-browser)
- [Anthropic Help Center — Use the built-in browser in Claude Cowork](https://support.claude.com/en/articles/16607400-use-the-built-in-browser-in-claude-cowork)
- [Claude Blog — 목록 확인 (개별 글 URL은 접근 불가로 확인 실패)](https://claude.com/blog)
- [9to5Mac — Claude's Chrome side panel is now a full Cowork session](https://9to5mac.com/2026/08/12/claude-cowork-chrome/)
- [9to5Mac — Anthropic says Claude Cowork is now available on mobile for all paid plans (2026-08-18)](https://9to5mac.com/2026/08/18/anthropic-says-claude-cowork-is-now-available-on-mobile-for-all-paid-plans/)
