# 레이아웃과 인쇄 파이프라인

화면판 HTML의 시각 규칙과, 인쇄판·PDF를 만들 때 실제로 걸렸던 함정을 적는다.
가장 빠른 시작은 **지난 호 HTML을 골격으로 쓰는 것**이다. 아래는 왜 그렇게 되어 있는지의 설명.

---

## 1. 본문 레이아웃 — 롱블랙 실측값 (2026-09-08)

`longblack.co/note/1886`을 브라우저로 열어 실제 계산값을 재서 가져온 수치다.
전문은 `docs/style-reference.md` 하단 표.

| 항목 | 값 |
|---|---|
| 본문 크기 | 18px (아티팩트 16.5px) |
| 행간 | 1.9 (아티팩트 1.85) |
| 자간 | -0.2px |
| 본문 색 | `#191919` |
| 글 폭 | **580px** (한 줄 33자) |
| 문단 간격 | **36px** = 본문 2배 |
| 문단 길이 | 2~3줄 (80~110자)에서 끊는다 |
| 제목 | 세리프(Noto Serif KR) |

### 여백은 회색이 아니라 간격으로 만든다

이 문서에서 가장 자주 어기게 되는 규칙이다. 읽기 부담을 줄이려고 **본문을 연한 회색으로 죽이면
안 된다.** 롱블랙은 모든 본문이 같은 진한 색이고, 대신 문단을 짧게 끊어 사이를 넓게 벌린다.

- 강조는 **굵기 700만** 쓴다. 색과 크기는 본문과 같게.
- 회색(`--soft`, `--faint`)은 출처 줄·부연 설명 같은 보조 정보에만.

실제로 한 번 반대로 갔다가 되돌렸다. 핵심 문장을 굵게 하고 나머지를 회색으로 죽이는 방식은
읽기 편해 보이지만 레퍼런스와 정반대였다.

---

## 2. 구조별 시각 규칙

### Executive Summary는 박스로 (2026-09-08)

본문에 들어가기 전 내용임을 알 수 있게 배경색 박스로 감싼다. 참고 섹션(`.aside-sec`)과 같은
`var(--wash)` 배경에 위쪽 3px 검은 선, 아래쪽 헤어라인.

```css
.summary{margin-top:calc(var(--gap)*1.4);background:var(--wash);
  padding:44px 32px 44px;border-top:3px solid var(--ink);border-bottom:1px solid #dcdcdc;
  margin-left:-32px;margin-right:-32px}
@media(max-width:640px){.summary{padding:32px 20px 32px;margin-left:-20px;margin-right:-20px}}
```

### 숫자와 라벨은 세로로 짝지어라 (2026-09-08)

헤드라인의 대비 수치를 `75% vs 13%` 한 줄로 쓰고 캡션도 `생산성이 올랐다 · 성과가 좋아졌다`
한 줄로 쓰면, **어느 숫자가 어느 라벨인지 보이지 않는다.** 2열 그리드로 각 숫자 바로 아래에
자기 라벨을 놓는다.

```css
.fig-pair{display:grid;grid-template-columns:1fr 1fr;gap:0 24px;margin-bottom:22px}
.fig-pair .fig-item{min-width:0}
.fig-pair .fig{margin-bottom:6px}
.fig-pair .figcap{margin-bottom:0;word-break:keep-all}
@media(max-width:480px){.fig-pair{grid-template-columns:1fr;gap:14px 0}}
```

```html
<div class="fig-pair">
  <div class="fig-item"><div class="fig">75%</div><div class="figcap">생산성이 올랐다<br>(개인 체감)</div></div>
  <div class="fig-item"><div class="fig"><span class="r">13%</span></div><div class="figcap">성과가 좋아졌다<br>(회사 확인)</div></div>
</div>
```

### 접힘(`<details>`)

화면판은 결론만 보이고 근거는 접는다. 1부는 "근거 N건 보기", 3부는 "프로그램 · 근거 · 주의".
인쇄판에서는 빌드 스크립트가 전부 펼친다.

---

## 3. 인쇄판 빌드

```bash
node scripts/build-print.mjs YYYY-MM --pdf
```

화면판 → 인쇄판 변환은 결정적이다. **인쇄판을 직접 고치지 않는다.**

| # | 변환 |
|---|---|
| 1 | `<title>`에 " (인쇄판)" |
| 2 | `</style>` 앞에 `docs/insight-print.css` 삽입 |
| 3 | `<nav>` 제거 |
| 4 | `<details>` 펼침 → `<div class="unfold">` + `<div class="unfold-lab">` (inline style 보존) |
| 5 | `<a class="goto">` → `<span class="goto">` |
| 6 | 푸터 "다음 호" → "인쇄판 · 다음 호" |

> 2026-09호를 만들 때는 이 변환을 손으로 했다. 수정이 올 때마다 화면판과 인쇄판 두 곳에
> 같은 편집을 반복했고, 결국 인쇄판에 `.fig-pair` 모바일 규칙이 빠지는 드리프트가 생겼다.
> 스크립트는 그 경험에서 나왔다.

### 인쇄 CSS는 별도 파일

`docs/insight-print.css`. A4 여백, pt 단위 크기, 섹션별 페이지 나눔, `break-inside:avoid`.
페이지 넘침을 조정할 때 만지는 곳도 여기다.

---

## 4. PDF는 만들고 나서 반드시 본다

### 고아 페이지

문장 한 줄만 다음 쪽으로 넘어가 **거의 빈 페이지**가 생기는 일이 잦다. 리드 문장 몇 글자가
길어진 것만으로도 일어난다.

```bash
pdftoppm -png -r 55 -f 3 -l 3 outputs/insight-report/YYYY-MM.pdf /tmp/chk
```

빌드 스크립트가 출력하는 페이지 수를 지난 호와 비교하고, 늘었으면 어디서 늘었는지 본다.
2026-09호는 15쪽이 기준이었고, 리드 문장 교체로 16쪽이 되면서 3쪽에 한 줄짜리 고아 페이지가
생긴 적이 있다.

**고치는 순서**: `docs/insight-print.css`의 여백을 줄인다 →
`.summary` 패딩 → `.hl` 패딩 → `.lead` 아래 여백 → `.oneline` 간격 → `.unfold` 여백.
한 줄(약 19pt)을 당기려면 합쳐서 30pt 이상 줄여야 하는 경우가 많다.
본문을 잘라내는 것은 마지막 수단이다.

### 확인할 것

- 마지막 쪽이 거의 비어 있지 않은가
- Executive Summary 상자가 어디서 끝나는가 (한 줄만 넘어가지 않았는가)
- 소제목만 페이지 끝에 남는 고아 소제목이 없는가 (`h3{break-after:avoid}`가 막아준다)

---

## 5. 아티팩트 발행

- 같은 리포트는 **같은 URL로 재발행**한다(`url` 파라미터). 새로 발행하면 코멘트가 끊긴다.
- 재발행 시 `favicon`을 넘기지 않는다. 아티팩트는 기존 아이콘을 유지한다.
- 발행 전 `node scripts/check-html.mjs`로 태그 짝을 확인한다. `</div>` 하나가 어긋나도
  브라우저는 조용히 복구하지만 레이아웃은 무너진다.
