---
type: update
date: 2026-05-29
tools: [claude-code, codex]
importance: low
uses: [course]
source: https://github.com/h5i-dev/h5i
---
# h5i "Agent Radio" — Git만으로 Claude Code·Codex를 실시간 협업시키는 오픈소스 도구

## 무엇이 있었나

서버나 별도 연결 없이 Git 저장소 자체를 메신저로 써서 서로 다른 코딩 에이전트들이
작업을 조율하게 하는 실험적 오픈소스 프로젝트 h5i(v0.1.5)가 공개됐다.

## 왜 중요한가

- 메시지를 JSON Lines로 Git 레퍼런스(`refs/h5i/msg`)에 append하고, 경량 프로토콜로
  스레드(reply_to)를 유지한다. Push는 대화 공유, Pull은 병합이 되며, 메시지가 불변·
  ID로 키가 잡혀 있어 서로 다른 클론이 갈라져도 충돌 없이 합쳐진다.
- 별도 서버·메시지 브로커 없이 이미 모두가 쓰는 Git만으로 멀티 에이전트 조율을
  구현했다는 점이 참신하다.

## 활용/시사점

- 아직 개인 프로젝트 단계(성숙도: prototype)라 실전 도입 사례는 아니지만, "여러 AI
  코딩 에이전트를 어떻게 조율할 것인가"라는 멀티 에이전트 설계 문제에 대한 참신한 답.
- Git을 다룰 줄 알면 재현 난이도는 중간 수준이라 강의 데모로 쓰기 좋다 — 이미
  존재하는 [[2026-06-12-architect-loop-claude-codex-orchestration|architect-loop]] 등
  다른 멀티 에이전트 조율 도구와 비교 강의에 활용 가능.

## 출처

- [GitHub — h5i-dev/h5i](https://github.com/h5i-dev/h5i)
- [Medium — Claude Code and Codex real-time conversation via Git](https://medium.com/@Koukyosyumei/claude-code-and-codex-can-have-real-time-conversation-via-git-f95b696c1c05)
