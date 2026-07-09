# AI Radar Web — 디자인 시스템 (B1 "인터내셔널")

참조 계보: Monocle·신문 국제판. 흑백 + 레드 포인트. 모든 UI 작업은 이 문서를 따른다.
토큰의 유일한 구현처는 `app/globals.css`다 — 새 색·새 컴포넌트가 필요하면 여기 먼저 추가한다.

## 토큰
| 변수 | 값 | 역할 |
|---|---|---|
| `--paper` | `#ffffff` | 페이지 캔버스 |
| `--ink` | `#111111` | 제목·강조·괘선 |
| `--red` | `#e63329` | 포인트 (규칙 아래 참조) |
| `--body` | `#333333` | 본문 |
| `--soft` / `--faint` | `#555` / `#888` | 보조 텍스트 |
| `--hairline` | `#e5e5e5` | 옅은 구분선·카드 보더 |
| `--wash` | `#f7f7f7` | 옅은 면 (AX 박스, 입력바) |

## 규칙
- **레드는 신호다**: 섹션 번호, 액티브 상태, 프라이머리 액션(전송·더 알아보기)에만. 장식 금지.
- **괘선 위계**: 3px 잉크(큰 단락: 마스트헤드·푸터·이슈 푸터) → 1px 잉크(섹션 경계)
  → 1px 헤어라인(항목·카드).
- **형태**: 라운드·그림자·그라데이션 금지. 컨트롤은 각진 사각형. 링크는 `.ln`(밑줄) 또는
  레드 텍스트.
- **다크모드 없음** — 종이 컨셉 고정.

## 타이포
- Pretendard 계열 산세리프 단일 체계. 본문 16px/1.7 `--body`.
- 헤드라인: 600, `-0.02em`. 리드 32px(모바일 24px), 아이템 16px.
- 라벨(`.label`): 11px, 자간 0.14em. 숫자·날짜는 `.num`(tabular-nums).

## 컴포넌트 어휘 (globals.css 클래스)
`.masthead` `.wordmark` `.ask-btn` — 상단 / `.issue-strip` `.lead` `.section-head`
`.item-card` `.item-fields` `.item-grid` `.ax-box` `.issue-foot` — 이슈 /
`.archive-grid` `.archive-card` — 아카이브 / `.chat-frame` `.bubble-user` `.bubble-ai`
`.src-chips` `.chat-inputbar` — 채팅 / `.panel` `.panel-overlay` — 패널 /
`.tag` `.tag-red` `.btn` `.btn-red` `.meta-strip` `.article` — 공용.

## Do / Don't
- Do: 항목 사이는 헤어라인, 단락 사이는 잉크 룰. 여백보다 괘선으로 위계를 만든다.
- Do: 새 화면도 위 클래스 어휘를 재사용 — 인라인 스타일은 레이아웃 미세조정만.
- Don't: 필 버튼, 그린 계열, 그림자 카드, 이모지 남용(마스트헤드·본문 UI에 이모지 금지).
- Don't: 레드 배경의 대면적 사용 (버튼·포인트 최대 수십 px 높이까지만).
