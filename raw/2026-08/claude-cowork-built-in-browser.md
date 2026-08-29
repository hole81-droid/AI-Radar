# Claude Cowork gets a built-in browser: nothing to install

- 원문: https://claude.com/blog/cowork-built-in-browser (Anthropic 공식, WebFetch로 정독)
- 참고: https://support.claude.com/en/articles/16607400-use-the-built-in-browser-in-claude-cowork ·
  https://claude.com/blog/cowork-chrome-side-panel (기존 08-12 발표, 비교용)
- 발표일: 2026-08-26
- 수집일: 2026-08-30 (스캔)

## 요약 (WebFetch 정독)

- Claude Cowork 데스크톱 앱에 **독립형(self-contained) 내장 브라우저**가 추가됨 — 별도
  설치 없이 동작하며, 사용자의 실제 브라우저(Chrome 등)와 완전히 분리된 세션.
- 기존 "Claude in Chrome 사이드패널"(2026-08-12, [[2026-08-12-claude-cowork-chrome-integration]])
  과의 핵심 차이:
  | 구분 | 신규 내장 브라우저 | 기존 Claude in Chrome |
  |---|---|---|
  | 용도 | 새 웹 작업을 처음부터 수행 | 이미 열려 있는 페이지에서 작동 |
  | 계정/세션 | 사용자 브라우저 계정과 완전 격리 | 사용자의 기존 로그인 세션 공유 |
  | 데이터 접근 | 탭·북마크·비밀번호 등 미접근 | 기존 로그인 상태 그대로 활용 |
- 롤아웃: Pro·Max·Team은 이번 주(08-24주)부터 데스크톱 앱, Enterprise는 관리자 설정으로
  즉시 사용 가능. 지원 플랫폼은 macOS·Windows·Linux(베타).
- 보안장치: "Claude in Chrome과 동일한 안전장치"(요청과 실제 행동을 대조 검토하는 체크)를
  적용한다고 명시. 다만 프롬프트 인젝션 위험을 완전히 제거할 수는 없어 신뢰할 수 있는
  사이트부터 사용을 권장.
- Settings → Cowork → Preferred browser에서 "내장 브라우저 vs Claude in Chrome(내 로그인
  세션 사용)" 중 선택 가능 — 두 옵션을 상황별로 병행하는 구조.

## 왜 다른가 (맥락)

- 계정 격리형 신규 브라우저는 "낯선/미검증 사이트에서 새 작업을 시킬 때"에 적합하고,
  기존 Chrome 사이드패널 통합은 "이미 로그인된 내 계정으로 작업을 이어갈 때"에 적합 — 두
  방식을 용도에 따라 나눠 쓰도록 설계된 것으로 해석됨.
- OpenAI가 자체 AI 브라우저 ChatGPT Atlas를 출시 8개월 만에 단종(2026-08-09,
  [[2026-07-09-openai-atlas-browser-shutdown]])한 것과 대비된다 — Anthropic은 반대로
  "브라우저를 자체 내장"하는 방향으로 움직이고 있다.

## 반영 메모

- 발표일(08-26)이 08-27~08-29 스캔에서 누락됐던 것으로 보임(사후 확인, RSS/WebSearch에
  즉시 걸리지 않았던 것으로 추정) — 이번 스캔에서 소급 반영. 기존
  [[2026-08-12-claude-cowork-chrome-integration]] 페이지에 후속 절로 추가.
