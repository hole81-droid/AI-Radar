---
name: insight-report
description: >-
  월간 'AI 역량육성 Insight' 리포트(outputs/insight-report/YYYY-MM)를 기획·작성·발행하는 스킬.
  AI 역량육성 컬리지 담당 임원 한 사람이 독자다. 위키에서 재료를 고르고(주제 3단 분류),
  골조를 쓰고, 문체 교정 패스를 돌리고, 화면판 아티팩트와 인쇄판 PDF를 함께 낸 뒤,
  아티팩트 코멘트를 받아 반영하는 전 과정을 다룬다.
  사용자가 "Insight 리포트", "월간 리포트", "9월호/10월호", "임원 리포트", "인사이트 작성",
  "이번 달 리포트"를 언급하면 — 신규 작성이든 코멘트 반영 같은 부분 수정이든 — 이 스킬을 따른다.
---

# AI 역량육성 Insight 월간 리포트

한 사람을 위해 쓴다. **AI 역량육성 컬리지 담당 임원**이고, AI 뉴스를 따로 챙겨 보지 않는다.
그래서 이 리포트의 성패는 정보량이 아니라 **한 번 읽고 판단할 수 있는가**로 갈린다.

세 가지가 매달 반복되는 실패 지점이다. 재료를 잘못 고르고(주 관심사가 아닌 걸 본체에 넣음),
문체가 AI 티가 나고, 화면판과 인쇄판이 어긋난다. 아래 절차는 그 셋을 막기 위한 것이다.

## 산출물과 원본 관계

| 파일 | 성격 | 고치는 법 |
|---|---|---|
| `outputs/insight-report/YYYY-MM.md` | **텍스트 원본**. 문체 린트 대상 | 직접 편집 |
| `outputs/insight-report/YYYY-MM.html` | **화면판 원본**. 아티팩트로 발행 | 직접 편집 |
| `outputs/insight-report/YYYY-MM-print.html` | 파생물 | **직접 고치지 말 것.** 화면판 고치고 재생성 |
| `outputs/insight-report/YYYY-MM.pdf` | 파생물 | 위와 같음 |

`.md`와 `.html`은 같은 내용의 두 표현이라 **양쪽 모두 손대야 한다**. 화면판에만 있는 시각 요소
(헤드라인 도식, 배지)는 마크다운에 대응물이 없으니 그때는 그렇다고 말하고 넘어간다.

## 절차

### 0. 준비

```bash
git pull --rebase origin main
ls outputs/insight-report/
```

지난 호 발행일 다음 날부터 오늘까지가 이번 호 수집 기간이다.

### 1. 재료 선별 — 여기서 리포트의 질이 정해진다

`wiki/` 페이지 중 이번 기간 것을 모으고 `programs:` 필드가 붙은 것을 우선 후보로 본다.
그 다음 **주제 3단 분류**(→ `references/editorial-rules.md`)로 거른다. **①②만 본체에 넣는다.**
③(학교·대학의 AI 정책, 부정행위, edtech 시장)은 흥미롭지만 우리 임무가 아니다. 말미 "참고"에만.

배치 목표: 1부 트렌드 3건 · 2부 시사점 3~4건 · 3부 적용 3~6건 · 참고 3~5건.

1부 트렌드 한 건은 자료 2~4개가 **같은 결론에 도착할 때** 성립한다. 자료 하나면 트렌드가 아니라
소식이다. 서로 다른 영역(조달·관리·보안·추론)의 자료가 한 곳을 가리키면 그게 가장 좋은 트렌드다.

### 2. 골조 — 사실과 구조만

`.md`를 쓴다. 이 단계에서는 **문체를 신경 쓰지 않는다.** 수치·출처·구조를 정확히 넣는 데 집중한다.

- 각 주장 아래 출처 한 줄: 출처 유형 · 표본·설계 | 링크들 (→ `references/editorial-rules.md`)
- 위키가 "미확인"으로 남긴 것은 리포트에서도 미확인으로 둔다. 지어내지 않는다
- 1부는 결론 먼저(BLUF), 3부는 제안 → 프로그램·모듈 → 근거 → 주의 순서

### 3. 문체 교정 패스 — 따로 돈다

골조가 끝난 뒤 **문체만** 고치는 패스를 별도로 돈다. 이 패스는 수치·출처·링크를 바꾸지 않는다.

```bash
node scripts/style-lint.mjs outputs/insight-report/YYYY-MM.md --strict
```

린트 결과(어느 항목이 몇 개 초과)를 교정의 입력으로 쓴다. 통과할 때까지 반복한다.
문체 규칙과 롱블랙 레퍼런스는 `references/editorial-rules.md`와 `docs/style-reference.md`.

### 4. 화면판 HTML → 아티팩트

레이아웃 스펙은 `references/layout-and-print.md`. 지난 호 HTML을 골격으로 쓰는 게 가장 빠르다.

```bash
node scripts/check-html.mjs outputs/insight-report/YYYY-MM.html
```

통과하면 Artifact로 발행한다. **URL을 기록해 둔다** — 코멘트 대응 때 같은 URL로 재발행해야
링크가 유지된다. 재발행 시 `favicon`은 넘기지 않는다.

### 5. 인쇄판·PDF — 생성물이다

```bash
node scripts/build-print.mjs YYYY-MM --pdf
```

화면판에서 결정적으로 파생한다(내비 제거, 접힘 펼침, 인쇄 CSS 주입). 인쇄판을 직접 고치면
다음 생성 때 사라진다.

**만들고 끝내지 말고 페이지를 확인한다.** 특히 마지막 쪽과 Executive Summary가 끝나는 쪽:

```bash
pdftoppm -png -r 55 -f 3 -l 3 outputs/insight-report/YYYY-MM.pdf /tmp/chk
```

문장 한 줄만 다음 쪽으로 넘어가 **거의 빈 고아 페이지**가 생기는 일이 잦다. 그러면
`docs/insight-print.css`의 여백(`.summary` 패딩, `.hl` 패딩, `.lead`·`.oneline` 간격)을 줄여
다시 담는다. 본문을 잘라내는 것은 마지막 수단이다.

### 6. 마무리

`log.md`에 `## [YYYY-MM-DD] output | ...` 기록 → 커밋·푸시 → PDF를 사용자에게 전달.

## 발행 후: 코멘트 대응 루프

아티팩트 코멘트로 수정 요청이 온다. **한 번에 하나씩, 끝까지 동기화한다.**

1. **먼저 중복인지 확인한다.** 같은 코멘트가 다시 전달되는 일이 잦다.
   `Artifact action="comments"`에 `thread_id`를 주고 `open`인지 `resolved`인지 본다.
   이미 처리된 것이면 `acknowledge_duplicate: true`로 답글만 남기고 파일은 건드리지 않는다.
2. **지목된 곳만 고치지 않는다.** 같은 문제가 다른 곳에도 있으면 함께 고치고, 답글에 밝힌다.
   실제 사례: 헤드라인 2의 숫자 정렬을 지적받아 헤드라인 3도 함께 고침. 모듈 언급 한 곳을
   지적받아 13곳을 고침. 약어 `T`를 지적받은 다음 호출에 `A`도 왔다.
3. **반복되는 지적은 규칙으로 승격한다.** 두 번 나오면 `references/editorial-rules.md`에 적는다.
   같은 지적을 다음 호에서 또 받지 않기 위해서다.
4. 순서: 화면판 수정 → `check-html` → 아티팩트 재발행 → `.md` 반영 → `style-lint` →
   `build-print --pdf` → 페이지 확인 → 답글 + `resolve` → `log.md` → 커밋·푸시 → PDF 전달.

## 참조

- `references/editorial-rules.md` — 주제 3단 분류, 독자 기준, 문체, 용어, 출처 표기
- `references/layout-and-print.md` — 레이아웃 실측값, HTML 구조, 인쇄 파이프라인과 함정
- `docs/style-reference.md` — 롱블랙 발췌와 거기서 가져올 것 8가지, 레이아웃 실측표
- `wiki/programs/2026-program-catalog.md`, `program-module-map.md` — 프로그램명·모듈 ID 정본
