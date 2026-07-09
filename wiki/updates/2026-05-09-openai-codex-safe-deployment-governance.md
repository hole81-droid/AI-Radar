---
type: update
date: 2026-05-09
tools: [codex]
importance: medium
uses: [course, ax]
source: https://openai.com/index/running-codex-safely/
---
# "Running Codex Safely at OpenAI" — 사내 코딩 에이전트 안전 운영 체계 공개

## 무엇이 있었나

OpenAI가 자사 엔지니어링 조직 전체에서 코딩 에이전트 Codex를 승인 병목 없이 폭넓게
쓰도록 하는 운영·보안 체계를 공식 블로그로 공개했다. 샌드박스, 승인 정책(approval
policy), AI 기반 보안 트리아지 에이전트를 조합한 구조다.

## 왜 중요한가

- 샌드박스가 "Codex가 어디에 쓸 수 있는지, 네트워크에 접근할 수 있는지"라는 기술적
  실행 경계를 정의하고, 승인 정책이 "언제 사람에게 물어봐야 하는지"를 결정한다. 일상적인
  명령은 마찰 없이 허용하고 위험한 명령은 차단하거나 승인을 요구한다.
- Codex의 활동 로그를 AI 보안 트리아지 에이전트가 상시 분석해 원래 요청·도구 실행·
  승인 여부·네트워크 정책 위반 여부를 종합, 이상 징후만 보안팀에 올린다 — "AI가 AI를
  감시하는" 계층 설계다.

## 활용/시사점

- 코딩 에이전트를 개인 실험이 아니라 조직 전체에 배포하려는 기업이라면 "권한 경계
  설계 + AI 트리아지 계층"이라는 구조를 그대로 참고할 수 있다.
- AX 강의에서 "에이전트 신뢰 설계"의 실제 사례로 쓰기 좋다 — 유사한 감사·승인 설계
  원칙을 다룬 [[the-engineer-github-issue-to-pr]]와 비교 강의도 가능하다.

## 출처

- [OpenAI — Running Codex Safely](https://openai.com/index/running-codex-safely/)
