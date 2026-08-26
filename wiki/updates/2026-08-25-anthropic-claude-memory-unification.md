---
type: update
date: 2026-08-25
tools: [claude, claude-cowork]
importance: medium
uses: [course, ax]
source: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
---

# Claude 메모리, Chat과 Cowork 전체로 통합

## 무엇이 바뀌었나

Anthropic이 2026-08-25 Claude의 **메모리를 Chat과 Cowork 사이에 통합**했다. 지금까지는 대화창(Chat)에서 기억한 내용과 Cowork(클라우드 작업 에이전트)가 수집한 정보가 서로 분리돼 있었는데, 이제 한쪽에서 쌓인 맥락을 다른 쪽에서도 그대로 이어받는다 — Chat에서 나눈 대화 맥락이 Cowork의 작업에 반영되고, Cowork가 작업 중 알아낸 정보도 다음 Chat 대화에 이어진다.

- **Settings > Memory 탭 신설**: 토글 2개(대화에서 메모리 생성 여부, 민감 주제 포함 여부) + Claude가 기억한 내용을 짧은 파일 단위로 나열하는 "Topics" 목록 + 전체 초기화 버튼. 각 항목을 개별적으로 보기·수정·삭제할 수 있다.
- **실시간 갱신**: 대화 중 "프로젝트 마감이 9월로 밀렸다"처럼 말하면, 별도 요청 없이 다음 대화부터 바로 반영된다.
- **민감 주제 기본 차단**: 건강·인종/민족·종교·정치 성향·성 정체성 관련 정보는 기본적으로 메모리에 저장하지 않는다(토글로 별도 허용 가능).
- **기본값 켜짐**: Free·Pro·Max 플랜, 웹·데스크톱·모바일 전체에서 기본으로 켜져 있다.

## 왜 중요한가 (비개발자 관점)

지금까지는 "Claude와 채팅하며 알려준 내 상황"과 "Claude Cowork에게 시킨 백그라운드 작업이 알아낸 것"이 서로 다른 기억 창고에 있었다. 예를 들어 채팅으로 "우리 회사는 매주 금요일에 주간보고를 낸다"고 말해도 Cowork가 보고서를 작성할 때는 그 정보를 몰랐다. 이제는 하나로 합쳐져, 어느 쪽에서 대화하든 "같은 비서가 계속 나를 기억하는" 경험에 가까워졌다. 동시에 무엇을 기억하고 무엇을 지울지 설정 화면에서 직접 통제할 수 있게 한 점도 눈에 띈다.

## 활용/시사점

- **강의**: "AI 비서가 맥락을 어떻게 유지하는가"를 설명할 때 Before/After 비교 소재로 쓰기 좋다 — 메모리 설정 화면을 직접 열어 Topics 목록을 보여주면 "AI가 무엇을 기억하는지 사용자가 확인·삭제할 수 있다"는 투명성 개념을 체감시킬 수 있다.
- **AX**: 사내 도입 시 "민감 정보가 부서 간 대화에 새어나가지 않는가"를 점검할 때, 이 메모리 통합이 오히려 정보 격리를 어렵게 할 수 있다는 점을 검토 항목에 넣을 필요가 있다(민감 주제 토글·개별 삭제 기능이 실질적 통제 수단이 되는지 파일럿에서 확인 권장).

## 출처

- [Anthropic Help Center — Use Claude's chat search and memory to build on previous context](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context)
- [9to5Mac — Anthropic update unifies memory feature across Claude Cowork and chat](https://9to5mac.com/2026/08/25/anthropic-update-unifies-memory-feature-across-claude-cowork-and-chat/) (2026-08-25)
- [Engadget — Claude's memory now works across both chats and Cowork sessions](https://www.engadget.com/2243753/claude-memory-now-works-across-both-chats-and-cowork-sessions/)
