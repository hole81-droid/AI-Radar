---
type: update
date: 2026-06-23
tools: [claude-code, gemini, codex]
importance: medium
uses: [course, ax]
source: https://github.com/miopea/swarm
---
# Swarm — 이메일이 자동으로 작업이 되는 오픈소스 멀티 에이전트 관제탑

## 무엇이 있었나

Claude Code·Gemini CLI·Codex를 브라우저 하나로 지휘하는 오픈소스 플랫폼 "Swarm"이
공개됐다. 들어온 이메일을 작업 카드로 자동 전환하고, 여러 코딩 에이전트("일꾼")에게
작업을 배분·감독하는 웹 대시보드를 제공한다. MCP 도구 16종과 Outlook·Jira Cloud 연동을
갖췄다.

## 왜 중요한가

- 웹 대시보드에서 각 에이전트를 PTY-오버-웹소켓으로 붙여 터미널을 그대로 들여다보고,
  "Queen"이라는 헤드리스 감독 에이전트가 작업 배정과 이메일 답장 초안 작성을 제안하면
  사람이 승인해야 실행되는 구조다.
- 16개 MCP 도구로 에이전트끼리 메시지·파일 점유·작업 상태를 주고받아 충돌을 피하는
  멀티 에이전트 조율 설계를 갖췄다.
- 이메일 답장은 초안까지만 만들고 자동 발송하지 않는 등, 사람 승인 지점을 명확히 둔
  설계가 특징이다.

## 활용/시사점

- "에이전트 여러 개를 동시에 굴리는 운영" 워크플로우의 실전 참고 사례로, 승인 게이트
  설계는 다른 자동화 사례들과 함께 HITL(Human-in-the-loop) 강의 소재로 쓸 수 있다.
- AX 관점: 이메일 인박스를 작업 큐로 전환하는 패턴은 고객지원·영업 등 인바운드 업무가
  많은 부서의 자동화 파일럿 설계에 참고할 만하다.

## 출처

- [GitHub — miopea/swarm](https://github.com/miopea/swarm)
