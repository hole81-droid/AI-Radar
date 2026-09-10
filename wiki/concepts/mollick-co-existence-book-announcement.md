---
type: concept
date: 2026-06-04
tools: [claude-code]
importance: medium
uses: [course, ax]
source: https://www.oneusefulthing.org/p/co-existence-and-the-end-of-co-intelligence
---

# Mollick의 신간 예고 "Co-Existence" — "가끔은 나보다 나은 AI"와 일하는 법

> **채택 근거(화제성)**: One Useful Thing(Ethan Mollick), 2026-06-04 발행. 좋아요
> 953건 — 이 뉴스레터 자기 평균(1,136.9)보다는 낮지만 절대치가 크고, 과제 지정
> 후보(A2)로 명시돼 처리한다. 본문의 핵심 수치(코딩 생산량 17배, Anthropic 코드
> 80% AI 작성)는 **원 출처를 직접 대조해 확인**했다 — 지어낸 수치가 아니다.

## 무엇인가

Mollick의 2024년 베스트셀러 *Co-Intelligence*(뉴욕타임스 베스트셀러, 25개
언어 이상 번역, 최대 시장은 네덜란드·한국) 후속작 *Co-Existence*(2026-10-20
출간 예정) 예고 글. *Co-Intelligence*가 "챗봇과 주고받는 협력"을 다뤘다면,
*Co-Existence*는 **"때로는 나보다 낫고, 때로는 아닌 AI와 어떻게 일할
것인가"**를 다룬다 — AI 에이전트가 실제로 사람보다 뛰어난 영역이 생긴
2026년 현재 상황을 반영한 문제의식 전환이다.

## 원 출처로 확인한 핵심 수치

- **"한 연구는 코딩 생산량이 17배 늘었다고 봤다"** — Mollick이 인용한 연구는
  [[ai-coding-bottleneck-shifts-review-not-writing]]에 정리한 것과 **동일한
  NBER Working Paper #35275**(Demirer·Musolff·Yang)다. 이 위키가 이미 확보한
  "커밋 +180%"와는 다른 지표(코드 **줄 수 기준** 비동기 에이전트 17.3배)를
  인용한 것으로, 2차 보도(Medium 등)로 교차확인했다. 같은 논문이 릴리스
  증가는 겨우 1.3배(=+30%)라고 함께 보고한다는 점도 일치한다.
- **"Anthropic은 코드의 80%를 AI가 작성한다고 밝혔다"** — Anthropic 공식
  채널(anthropic.com/institute/recursive-self-improvement)에서 원문 대조
  완료: *"As of May 2026, more than 80% of the code we merge into
  Anthropic's codebase was authored by Claude."* 개발자 1인당 생산량도
  2026년 2분기 기준 **2024년 대비 8배**(같은 원문: *"the typical engineer
  was merging 8× as much code per day as they were in 2024"*)로 확인된다.

## 저자 자신의 집필 실험 — "AI로 책 쓰기"의 경계 설정

- **본문은 전부 사람이 썼다** — "AI는 뛰어난 장문 작가가 아니다. 이야기를
  잘 못 풀고, 티가 확 나고, 많이 읽으면 지루하다"는 것이 이유. 초안은 전부
  직접 씀.
- **AI를 쓴 부분**: 챕터별 AI 독자 피드백, 여러 AI 모델로 구성한 "팩트체크
  위원회"(인용·출처는 본인이 전부 재확인), 막힐 때 AI로 돌파구 찾기.
- **부작용도 인정**: 너무 빨리 풀린 지적 씨름, 은연중에 사고가 유도됐을
  가능성. 전작 대비 em-dash(—) 사용을 의도적으로 줄임 — "AI가 쓴 것처럼
  보이지 않으려는" 노력의 흔적으로 스스로 소개.
- **책 웹사이트는 정반대로 AI에 위임** — Claude Code(Opus 4.8)에 지시 몇
  줄과 책 원고·표지만 주고 사이트를 만들게 했다 ("몇 시간이 아니라 몇 분").
- **"AI 독자"를 위한 별도 페이지**까지 만들었다 — AI 에이전트가 사람을
  대신해 이 책을 읽고 추천 여부를 판단하는 시대가 온다고 보고, "AI에게
  어떻게 어필할 것인가"를 진지하게 설계(과거처럼 숨긴 프롬프트 주입 문구를
  쓰는 대신, 여러 모델에게 초안을 보여주고 피드백을 받아 투명하게 재작성).

## 다음 질문들 — 신간이 다루려는 문제의식

"언제 AI의 도움을 거절해야 하는가, 언제는 완전히 맡겨야 하는가, AI가
비서가 아니라 내 글의 독자·비평가·관문지기가 될 때는 어떻게 해야 하는가"
— 저자는 이 세 질문을 본인의 집필 과정에서 동시에 겪었다고 밝힌다.

## 이 위키의 다른 결과와의 관계

- [[ai-coding-bottleneck-shifts-review-not-writing]] — 같은 NBER 논문의
  다른 지표(커밋 기준)를 정리한 페이지. 두 페이지를 함께 읽으면 "코드 줄 수
  17배·커밋 180%"처럼 지표에 따라 체감 배수가 크게 달라진다는 것을 보여준다.
- [[ai-agents-are-not-employees]] — "AI를 사람처럼 대하지 말라"는 이
  연구와, Mollick이 AI 독자를 "사람은 아니지만 사람처럼 행동하니 존중하는
  멘탈모델을 쓴다"고 밝힌 태도는 실무적으로 긴장 관계에 있다 — 강의에서
  두 입장을 나란히 놓고 토론시키기 좋다.

## 강의·AX 활용 포인트

- **강의**: "어디까지 AI에 맡기고 어디는 직접 하는가"를 저자 자신의
  실제 사례(본문은 직접, 웹사이트는 전적으로 위임)로 구체화한 도입
  스토리로 쓸 수 있다.
- **AX**: Anthropic 80%/8배 수치는 "AI 도입이 실제로 어디까지 갔는가"를
  보여주는 벤더 자체 공개 최신 사례로, 위 [[ai-coding-bottleneck-shifts-review-not-writing]]의
  "그래도 릴리스는 30%만 는다"는 병목 데이터와 대비시키면 균형 잡힌
  브리핑이 된다.
- **한계**: 이 글 자체는 신간 예고·마케팅 성격이 강해 evidence는
  `anecdotal`(저자 개인 실험)로 다룬다. 수치 두 건만 원 출처 확인된
  `claimed`/`measured`급이다.

## 출처

- 원문: https://www.oneusefulthing.org/p/co-existence-and-the-end-of-co-intelligence
- NBER #35275 (17배 수치 원 논문): https://www.nber.org/papers/w35275
- Anthropic 공식 (80%·8배 수치 원문): https://www.anthropic.com/institute/recursive-self-improvement
