---
type: update
date: 2026-10-06
tools: [claude]
importance: medium
uses: [ax]
source: https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides
---

# Claude for Google Workspace 퍼블릭 베타 — Google 문서 안에 사이드바로 상주

## 무엇이 바뀌었나

Anthropic이 2026-10-06 **Claude for Google Workspace**를 모든 유료 Claude 플랜에 퍼블릭
베타로 출시했다. 기존 [[2026-09-16-anthropic-claude-cowork-chat-merge-docs-slides]]의
**Claude 자체 Docs·Slides**(Claude 앱 안에서 만드는 문서)와는 별개로, 이번에는 **Google의
Docs·Sheets·Slides 안에** Claude 사이드바가 상주한다.

- 애드온을 설치하면 열려 있는 Google 파일 옆에 Claude 사이드바가 뜬다.
- **Docs**: 텍스트 재작성·수정 제안. **Sheets**: 수식 작성, 피벗테이블·차트 생성, Python으로
  데이터 처리. **Slides**: 기존 레이아웃을 활용해 새 슬라이드 생성.
- 신규 **Google Docs·Sheets·Slides 커넥터**(베타)로 Claude 채팅에서 바로 Google 파일을
  만들고 편집할 수도 있다.
- **승인 제어**: "Ask before edits" 설정으로 편집 전 변경안을 승인받는 방식 선택 가능.
- **관리자 배포**: Google Admin 콘솔로 특정 도메인·그룹 단위 배포 가능 — 기업 IT가 롤아웃
  범위를 통제할 수 있다.

## 왜 중요한가

- Microsoft 365 Copilot·Google 자체 Gemini와 정면으로 겹치는 영역에, **Google의 자체 앱
  안으로 직접 들어가는** 방식을 택했다 — "Claude로 옮겨와서 작업하라"가 아니라 "지금 쓰는
  Google 문서에 Claude를 데려온다"는 유통 전략 차이다.
- 기업이 이미 Google Workspace 전사 라이선스를 쓰고 있다면, Claude 도입의 마찰이
  "새 도구 학습"이 아니라 "사이드바 애드온 설치"로 낮아진다.

## 활용/시사점

- **AX**: Google Workspace를 표준으로 쓰는 조직에서 Claude 도입 PoC의 진입장벽이 낮아진다 —
  Admin 콘솔 배포 범위 설정, "Ask before edits" 기본값 정책부터 설계 과제로 검토할 만하다.
  데이터 거주지·보안 정책은 Claude 자체 Docs/Slides와 다를 수 있어 별도 확인이 필요하다.

## 출처

- [Claude — Claude now works with Google Docs, Sheets, and Slides](https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides)
- [9to5Google — Claude launches Google Docs, Sheets, and Slides integration with sidebar and more](https://9to5google.com/2026/10/06/claude-google-docs-sheet-slides/)
