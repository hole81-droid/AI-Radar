---
type: update
date: 2026-10-22
tools: [claude-code, chatgpt]
importance: high
uses: [course, ax]
source: https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation
---

# Anthropic, "Agent Skills" 표준을 Agentic AI Foundation에 기부 — 1개 벤더 소유에서 중립 거버넌스로

## 무엇이 있었나

Anthropic이 Claude Code의 핵심 기능인 **Agent Skills**(반복 워크플로를 패키징해 에이전트에게
가르치는 표준 — [[skill-file-management]])의 소유권을 **Agentic AI Foundation(AAIF)**에
기부했다. AAIF는 Linux Foundation 산하 조직으로, **Anthropic·Block·OpenAI**가 공동 설립했다.

- 기부 대상은 Agent Skills라는 **이름·로고, GitHub 조직, agentskills.io 도메인** 전체다.
- Anthropic은 이미 **MCP(Model Context Protocol)**도 같은 방식으로 AAIF에 기부한 바 있다 —
  이번이 두 번째 핵심 표준 이양이다.
- 2025년 12월 표준 공개 이후 **ChatGPT, Cursor, GitHub Copilot, VS Code 등 70개 이상의
  에이전트 플랫폼**이 Agent Skills를 채택했고, **누적 100만 개 스킬이 게시**돼
  **약 2억 8천만 회 설치**됐다고 Anthropic이 밝혔다.
- 개발자는 AAIF에 참여하지 않아도 표준을 계속 쓰거나 기여할 수 있다.

## 왜 중요한가

- Claude Code의 "Skills" 기능은 이 위키에서도 반복 업무 자동화([[benai-claude-skills-reverse-engineer-rea]],
  [[theaxlabs-claude-code-diagram-design-skill]] 등 다수 use-case)의 핵심 메커니즘으로
  계속 등장했다. 이것이 **1개 벤더 종속 포맷이 아니라 업계 공통 표준**으로 굳어진다는
  의미다 — 특정 도구에 맞춰 만든 Skill이 다른 에이전트(ChatGPT, Copilot 등)에서도
  재사용될 가능성이 커진다.
- MCP에 이은 두 번째 기부는 Anthropic이 "핵심 인프라는 개방해 생태계를 넓히고, 그 위의
  제품(Claude, Claude Code)으로 경쟁한다"는 전략을 반복하고 있음을 보여준다.
- 70개 플랫폼·1억 회 이상의 설치 규모는 Skills가 더 이상 실험적 기능이 아니라
  **에이전트 업계의 공용 인프라**가 됐음을 뜻한다.

## 활용/시사점

- **강의**: "표준은 왜, 언제 오픈 거버넌스로 넘어가는가"를 MCP·Agent Skills 두 사례로
  연속 설명할 수 있다. 사내 교육에서 "Skill 만들기" 실습을 할 때 "이 포맷이 Claude 전용이
  아니라 여러 도구에서 쓰인다"는 점을 함께 짚으면 학습 전이 효과가 커진다.
- **AX**: 사내에서 Skill을 자산으로 축적할 때, 벤더 종속을 걱정하지 않고 투자할 근거가
  됐다 — 표준이 중립 재단 소유이므로 특정 도구를 교체해도 Skill 자산이 승계될 가능성이
  높아졌다.

## 출처

- [Anthropic — Donating Agent Skills to the Agentic AI Foundation](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation)
- [Simon Willison — Donating Agent Skills to the Agentic AI Foundation](https://simonwillison.net/2026/Oct/22/donating-agent-skills/)
- [Mixed News — Anthropic hands its widely used AI skills standard to an independent foundation](https://mixed-news.com/en/anthropic-agent-skills-agentic-ai-foundation/)
