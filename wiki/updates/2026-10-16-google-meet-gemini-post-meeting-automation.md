---
type: update
date: 2026-10-16
tools: [gemini]
importance: medium
uses: [course, ax]
source: https://workspaceupdates.googleblog.com/2026/10/find-your-routine-next-steps-on-post-meeting-screen-in-Google-Meet.html
---

# Google Meet, Gemini 기반 "회의 후속업무 루틴" 자동화 도입 — 후속 이메일 초안·Tasks 등록

## 무엇이 바뀌었나

Google이 Gemini와 Workspace Studio를 결합해 **Google Meet 회의 종료 후 화면**에서
반복적인 후속 업무를 자동화하는 기능을 공개했다(2026-10-05부터 순차 확대 롤아웃,
10-16 공식 블로그 공지).

- **"이번 회의를 위한 루틴"**: 회의 종료 화면에 섹션이 뜨고, 사용자는 두 가지 루틴을
  켤 수 있다 — (1) Gmail에 **후속 이메일 초안 작성**, (2) **Google Tasks에 액션
  아이템 등록**.
- **적용 범위**: 1회성 회의와 반복 회의 모두 지원, 특정 루틴을 **모든 회의에 공통
  적용**하도록 설정할 수도 있다.
- **전제조건**: 회의 중 "Take notes for me"(Gemini 자동 회의록) 기능을 켜야 후속
  루틴이 나타난다.
- **대상**: Business Standard/Plus, Enterprise Standard/Plus, Google AI Pro for
  Education 애드온. 관리는 Meet 종료화면 또는 Workspace Studio Flows 라이브러리에서.

## 왜 중요한가 (비개발자 관점)

"회의 후 이메일 쓰기·할 일 등록하기"는 화이트칼라 업무에서 가장 흔하지만 가장
미뤄지는 잡무다. 이 기능은 회의록 생성(이미 널리 쓰이는 기능)에서 한 단계 더 나가
**회의 내용을 실제 액션(이메일 발송용 초안, 할 일 목록)으로 자동 변환**한다 —
"회의 요약"과 "회의 결과의 실행"을 분리했던 기존 흐름을 하나로 합치는 시도다.

## 활용/시사점

- **강의**: "회의 자동화 3단계(녹음·요약 → 액션 추출 → 실행)"를 가르칠 때, 앞 두
  단계는 이미 흔하지만 세 번째 "실행까지 자동화"를 실제로 보여주는 최신 사례로 쓸 수
  있다.
- **AX**: 반복 회의가 많은 조직(주간 스탠드업, 고객 미팅 등)에서 액션 아이템 추적
  누락을 줄이는 저비용 자동화 지점으로 검토할 만하다. 단, 액션 아이템 추출의 정확도
  (회의 중 실제로 결정된 것과 논의만 된 것을 구분하는지)는 도입 전 검증이 필요하다.

## 출처

- [Google Workspace Updates — Find your routine next steps on the post-meeting screen in Google Meet (10-16)](https://workspaceupdates.googleblog.com/2026/10/find-your-routine-next-steps-on-post-meeting-screen-in-Google-Meet.html)
- raw: `raw/2026-10/google-meet-gemini-post-meeting-automation.md`
