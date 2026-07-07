---
type: use-case
date: 2026-07-06
importance: medium
uses: [course]
source: https://github.com/MaximeRivest/Riddle
---
# 톰 리들의 일기 — 전자잉크 태블릿을 AI 대화 상대로 만든 오픈소스 프로젝트

## 무엇인가

개발자 Maxime Rivest가 공개한 오픈소스 프로젝트 "Riddle". 전자잉크 태블릿
reMarkable Paper Pro에 펜으로 글을 쓰면 잠시 후 글씨가 종이에 스며들 듯 사라지고,
AI가 유려한 필기체로 답장을 획 단위로 써 내려간다 — 해리포터의 '톰 리들의 일기'를
실물로 재현한 것. 동작 원리는 (1) 손글씨 페이지를 PNG로 캡처 → (2) 비전 LLM
(OpenAI 호환 백엔드 지원)에 전송 → (3) 응답을 문장 단위로 스트리밍하며 손글씨체로
렌더링. 첫 응답이 약 1초 만에 나타나기 시작한다. 개발자 모드로 개조한 reMarkable과
SDK를 활용했으며, 공식 reMarkable 제품 기능은 아니다. 7월 첫 주 내내 테크 미디어와
커뮤니티(reMarkable 사용자·해리포터 팬덤)에서 바이럴을 탔다.

## 왜 주목할 만한가

- "AI = 화면 속 채팅창"이라는 고정관념을 깨는 인터페이스 실험. 키보드도 채팅 UI도 없이
  **종이에 쓰는 행위** 자체가 인터페이스가 된다.
- 기술 스택이 전부 기성품(비전 LLM API + 기기 SDK + 폰트 렌더링)이라는 점 — 마법 같은
  경험이 특별한 신기술 없이 "조합"만으로 나왔다는 것이 진짜 교훈.
- Varun Mayya 등 대형 채널이 해설 영상을 만들 정도로 대중적 화제성이 검증됐다.

## 어디에 써먹을 수 있는가

- **강의 소재**: 멀티모달 API 실습 예제로 최적 — "손글씨 사진 → LLM → 응답" 파이프라인은
  반나절 워크숍 규모로 재현 가능. 'AI 인터페이스 디자인' 토론 소재로도 좋다.
- 전시·팝업스토어·굿즈, 교육용 인터랙티브 콘텐츠 등 **비화면 AI 경험** 기획의 참조 사례.

## 출처

- [GitHub — MaximeRivest/Riddle](https://github.com/MaximeRivest/Riddle)
- [Notebookcheck (2026-07-06)](https://www.notebookcheck.net/Someone-turned-a-reMarkable-tablet-into-Tom-Riddle-s-diary.1335689.0.html)
- [Android Authority](https://www.androidauthority.com/remarkable-paper-pro-tom-riddles-diary-disappearing-ink-3684286/) · [Varun Mayya 해설 영상](https://www.youtube.com/watch?v=3toHU6cr384)
