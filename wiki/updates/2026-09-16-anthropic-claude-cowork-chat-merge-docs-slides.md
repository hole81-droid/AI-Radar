---
type: update
date: 2026-09-16
tools: [claude, claude-cowork]
importance: high
uses: [course, ax]
source: https://claude.com/blog/cowork-is-now-claude
---

# Claude Cowork와 Chat이 하나의 앱으로 통합 + Claude Docs·Slides·Design 출시

## 무엇이 바뀌었나

Anthropic이 2026-09-16 **Claude Cowork(클라우드 작업 에이전트)와 기존 채팅(Chat)을 하나의
Claude 앱으로 통합**했다. 지금까지는 "짧은 질문은 Chat, 긴 작업은 Cowork"로 사용자가 먼저
선택해야 했는데, 이제 같은 대화 안에서 짧은 질문으로 시작했다가 그대로 보고서·리서치 같은
장시간 작업으로 넘어갈 수 있다 — Claude가 무엇이 필요한지 스스로 판단한다.

- **같은 날 신규 도구 3종**: **Claude Docs**(대화 안에서 함께 쓰는 문서), **Claude Slides**
  (대화 안에서 만드는 프레젠테이션 — 직접 편집·Claude 안에서 바로 발표·PowerPoint/PDF
  내보내기), **Claude Design**이 대화 내부로 통합(기존 독립형 Design도 계속 별도 작동).
  셋 다 유료 플랜 베타.
- **롤아웃 순서**: Pro·Max 플랜부터 웹·데스크톱·모바일에 수 주에 걸쳐 순차 적용 → Team·Free
  플랜 후속 → Enterprise는 관리자에게 최소 30일 사전 고지 후 전환.
- **세션 연속성**: 대화 하나로 공유 가능한 단일 링크가 생성되고, 맥락·스킬·커넥터가 대화 간에
  그대로 이어진다. "체크인" 빈도를 사용자가 조정 가능(작업 전 매번 확인 vs 문제 생겼을 때만
  알림). 모바일에서 진행 상황 확인 가능.
- **스케줄링**: "매주 월요일에 이 리포트를 시작해줘"처럼 예약하면 별도 요청 없이 Claude가
  먼저 작업을 시작한다.
- Anthropic 공식 사례: 시니어 이코노미스트가 법률 리서치 데이터베이스를 Claude에 연결해
  관련 판례를 스스로 찾아 읽고 필요한 다른 사례까지 제시하도록 활용한 사례를 소개.

## 왜 중요한가

- OpenAI가 Codex를 ChatGPT 브랜드로 통합한 최근 흐름과 같은 패턴 — Simon Willison은 이를
  "업계 전반이 챗봇과 에이전트의 경계를 지우는 방향으로 수렴하고 있다"는 신호로 짚었다.
  "Cowork인지 Chat인지 먼저 정해야 하는" 진입장벽 자체가 없어진다.
  ([Simon Willison](https://simonwillison.net/2026/Sep/16/one-claude/))
- Docs·Slides가 대화 안에서 바로 만들어진다는 것은, "챗봇에게 물어본다 → 결과물을 다른
  도구로 옮겨 다듬는다"는 기존 워크플로 자체를 없애려는 시도로 읽힌다 — Microsoft
  365·Google Workspace와 정면으로 겹치는 영역이다.
- 커뮤니티 반응은 엇갈렸다 — 편의성 환영과 함께, 기존 Chat에 있던 "브랜칭(대화 분기)"
  기능이 통합 버전에서 아직 지원되지 않는다는 불만이 r/ClaudeAI에서 즉시 제기됐다(→
  아래 관련 페이지).

## 활용/시사점

- **강의**: "챗봇 대 에이전트"라는 이분법이 제품 설계 차원에서 사라지고 있다는 사례로,
  AI 도구 선택 기준을 "어떤 모드를 쓸까"에서 "무엇을 맡길까"로 재구성해 가르칠 수 있다.
- **AX**: 보고서·프레젠테이션 제작을 사내 도구(PowerPoint 등)에서 Claude로 옮길 가능성을
  시사 — 다만 Enterprise는 30일 사전고지 후 전환이라는 점에서 기업은 급하게 대응할
  필요는 없고, 베타 기간 기능 안정성(브랜칭 등 기능 손실)부터 확인할 필요가 있다.

## 출처

- [Claude by Anthropic — Claude Cowork and chat are now one Claude](https://claude.com/blog/cowork-is-now-claude)
- [Simon Willison — Claude Cowork and chat are now one Claude](https://simonwillison.net/2026/Sep/16/one-claude/)
- [Pulse2 — Anthropic Merges Claude Cowork And Chat Into One Claude, Launches Claude Docs And Claude Slides](https://pulse2.com/anthropic-merges-claude-cowork-and-chat-into-one-claude-launches-claude-docs-and-claude-slides/)
