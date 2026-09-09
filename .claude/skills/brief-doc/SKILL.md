---
name: brief-doc
description: >-
  AI Radar 브리프 서식으로 참조형 문서를 만드는 스킬 — 위키 분석 페이지를 팀 공유용
  화면판(HTML, 아티팩트)과 화면 그대로의 PDF로 낸다. 사용자가 "HTML로 만들어줘",
  "브리프", "정리 문서를 공유용으로", "PDF로", "표준 서식으로", "그 디자인으로"를 말하거나
  wiki/analysis 페이지를 발행·인쇄하려 할 때 따른다. 월간 Insight 리포트는 별도
  insight-report 스킬을 쓴다.
---

# 브리프 문서 (AI Radar 표준 서식)

근거가 많은 참조 문서를 팀이 찾아 읽게 만드는 서식이다. 흑백+빨강, 세리프 제목, 580px 단수,
표는 본문 밖으로 bleed. 사용자가 2026-09-09 GPT-6 Astra 분석 화면판을 표준으로 지정했다.

정본 둘을 먼저 읽는다:
- `docs/brief-style.md` — 토큰·활자·구성요소·규칙
- `docs/brief-template.html` — CSS 정본 + 주석 달린 뼈대

## 절차

1. **원본 md 먼저.** `wiki/analysis/<slug>.md`가 없으면 그것부터 쓴다(CLAUDE.md Query 규칙).
   화면판은 md의 표현이지 별개 문서가 아니다.
2. **템플릿 복사.** `docs/brief-template.html` → `outputs/<slug>.html`. `{{ }}`를 채우고
   안 쓰는 블록은 지운다. 결론이 여러 갈래면 `.verdict`, 아니면 뺀다. 순서·방향·날짜 표시는
   내용이 실제로 그 구조일 때만.
3. **렌더 한 번 확인.** 머리·표·상충 블록. 반복 스크린샷 루프를 만들지 않는다.
4. **아티팩트 발행.** 처음이면 favicon 지정, 개정이면 같은 파일 경로로 재발행(URL 유지),
   `label`에 개정 이유.
5. **PDF.** `node scripts/build-brief-pdf.mjs outputs/<slug>.html`. 화면 그대로 찍는다.
   마지막 쪽이 거의 비면 화면판 분량을 손보고 재실행. PDF는 직접 고치지 않는다.
6. **연결·기록.** md 머리 인용 블록에 화면판·아티팩트·PDF 경로. `index.md` 한 줄, `log.md`
   `output` 항목. 커밋 메시지에 슬러그.

## 서식을 바꿀 때

`docs/brief-template.html`의 `<style>`과 `docs/brief-style.md`를 **함께** 고친다.
기존 화면판들은 소급 적용하지 않는다(각자 자기 시점의 서식을 보존).

## 하지 않는 것

- 다크 모드, 그라데이션, 카드 그림자, 이모지 섹션 마커
- 빨강을 강조용으로 여기저기
- 링크 없는 수치
- `<!DOCTYPE>`·`<html>`·`<head>`·`<body>` 태그
