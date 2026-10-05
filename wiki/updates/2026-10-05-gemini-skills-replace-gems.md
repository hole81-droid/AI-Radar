---
type: update
date: 2026-10-05
tools: [gemini]
importance: medium
uses: [course]
source: https://blog.google/products/gemini/
---

# Google Gemini "Skills" 출시 — Gems를 대체하는 재사용 커스텀 지시 기능

## 무엇이 있었나

Google이 Gemini에 **Skills**("재사용 가능한 커스텀 지시")를 공식 도입했다. 프롬프트창에
`/`를 입력해 원하는 Skill을 골라 현재 대화에 바로 적용하는 방식으로, 기존 Gems처럼
별도 사이드패널을 열고 구성을 선택한 뒤 새 세션을 시작해야 하는 절차가 없다. 한 대화
안에서 여러 Skill을 동시에 겹쳐 쓸 수 있고(stack), Gemini가 맥락상 특정 Skill이 유용하다고
판단하면 사용자가 명시적으로 호출하지 않아도 자동으로 적용할 수 있다. 다만 Skill은 앱과
Workspace 간에 동기화되지 않아 양쪽에서 쓰려면 각각 따로 만들어야 한다.

롤아웃은 단계적이다 — **2026-10-05 Workspace 출시 시작 → 10-13 Gemini 앱 도입 →
11-17 Gems가 설정 패널로 이동(격하)**. Gems 지원 축소는 개인 계정 11월, Workspace
기업·엔터프라이즈 2027-03, 교육 계정 2027-06 순으로 늦게 적용된다 — 즉 Gems가 당장
삭제되는 게 아니라 전환기를 거친다.

## 왜 중요한가 (비개발자 관점)

- Claude의 Skills(재사용 작업 지시 묶음), OpenAI의 커스텀 GPT와 같은 "AI 어시스턴트의
  반복 업무 템플릿화" 기능이 이제 3대 벤더 전부에서 수렴하는 개념이 됐다. 벤더 하나에
  익숙해지면 다른 두 곳에서도 비슷한 사고방식(업무를 재사용 가능한 지시 단위로 쪼개기)이
  그대로 통한다는 뜻이다.
- Gems 사용자는 당장 급하게 옮길 필요는 없지만, 신규로 반복 업무를 템플릿화할 계획이라면
  이제 Skills로 만드는 게 맞다 — Gems는 단계적으로 격하되는 쪽이 공식 로드맵이다.

## 활용/시사점

- **강의**: Claude Skills·OpenAI GPTs·Gemini Skills 세 벤더의 "재사용 지시 템플릿" 기능을
  나란히 비교하는 교육 모듈 소재로 적합 — 명명·UX는 다르지만 핵심 설계 사상(업무를
  재사용 가능한 지시로 캡슐화)은 동일함을 보여줄 수 있다.

## 출처

- [Android Authority — Google maps out transition plan to replace Gemini Gems with Skills](https://www.androidauthority.com/gemini-gems-phase-out-timeline-3717503/)
- [Android Headlines — Google Makes Gemini Skills Official to Automate Tasks and Replace Gems](https://www.androidheadlines.com/2026/10/google-makes-gemini-skills-official-to-automate-tasks-and-replace-gems.html)
