---
type: update
date: 2026-06-22
tools: [gemini]
importance: medium
uses: [course]
source: https://workspaceupdates.googleblog.com/2026/06/troubleshoot-formula-errors-in-sheets.html
---

# Google Sheets, Gemini 원클릭 수식 오류 수정 — 개선된 Gemini in Sheets 확대 배포

## 무엇이 있었나

6/22부터 Google Workspace 전 도메인에 **개선된 Gemini in Sheets** 경험이 점진 배포되기 시작했다. 핵심 신기능은 **수식 오류 원클릭 진단·수정**: `#REF!`, `#VALUE!` 같은 오류를 만나면 Gemini가 주변 데이터 구조를 분석해 문제 원인을 평이한 언어로 설명하고 수정된 수식을 한 번의 클릭으로 적용해 준다. **7/15까지는 전 Workspace 고객에게 상향된 사용 한도가 프로모션으로 제공**되며, 이후에는 사용자별 한도가 적용되고 AI Expanded Access 라이선스 보유자만 높은 한도를 유지한다. 6월에는 스프레드시트 생성·편집 기능의 지원 언어 확대도 함께 발표됐다.

## 왜 중요한가

- 스프레드시트 수식 오류는 비개발자 사무직이 가장 자주 부딪히는 "검색해서 해결하던 문제"다. 이를 문서 안에서 AI가 즉시 해결해 주는 것은 Workspace AI 통합 중 체감이 가장 큰 부류에 속한다.
- "7/15까지 무료 상향 → 이후 라이선스별 차등"이라는 구조는 Google이 Workspace AI를 **맛보기 후 유료 전환**시키는 전형적 수익화 수순을 보여준다 — 기능 발표 자체보다 이 과금 신호가 기업 구매 담당자에게 중요하다.

## 활용/시사점

- 실무: 수식이 깨진 시트를 받았을 때 오류 셀 선택 → Gemini 제안 적용으로 처리. 다만 수정 수식이 의도와 맞는지 검증하는 습관은 여전히 필요.
- 강의 소재: "AI로 엑셀/시트 오류 잡기"는 비개발자 대상 강의에서 즉시 시연 가능한 훅. 프로모션 기간(7/15까지)을 활용한 실습 설계 가능.
- 기업: AI Expanded Access 라이선스 정책을 미리 확인해 7/15 이후 한도 축소로 업무 중단이 없도록 대비.

## 출처

- https://workspaceupdates.googleblog.com/2026/06/troubleshoot-formula-errors-in-sheets.html
- https://workspaceupdates.googleblog.com/2026/06/expanded-language-support-for-gemini-in-sheets.html
- https://www.makeuseof.com/google-sheets-gets-a-gemini-upgrade-thats-actually-useful/
