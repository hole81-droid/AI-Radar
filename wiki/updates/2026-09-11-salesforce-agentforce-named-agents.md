---
type: update
date: 2026-09-11
tools: []
importance: high
uses: [ax]
source: https://www.salesforce.com/news/stories/agentforce-job-ready-ai-agents/
---

# Salesforce, "곧바로 업무 투입 가능한" 네임드 AI 에이전트 7종 Agentforce에 추가

## 무엇이 있었나

Salesforce가 2026-09-11 자사 Customer 360 플랫폼 위에서 동작하는 **이름이 붙은
직무별 AI 에이전트 7종**을 Agentforce에 추가 공개했다 — Dreamforce 2026을 앞둔 발표다.

- **7종 에이전트**: Casey(고객서비스 — 음성·SMS·WhatsApp·웹챗 전 채널 응대), Paige(IT·HR
  임직원 지원), Carter(쇼핑 에이전트 — 상품 비교·인챗 결제), Hunter(영업 리드 발굴),
  Marshall(공급망), Piper, Fin(고객경험) 등 영업·서비스·커머스·IT/HR·공급망 등
  업무 영역별로 나뉜다.
- **가용성**: 6종은 정식 출시(GA), Hunter만 파일럿 단계 — 대화 하나가 아니라 **몇 주에
  걸쳐 목표를 추적하는 새 "장기 실행(long-horizon) 런타임"**을 처음 적용한 에이전트다.
- **플랫폼 요소**: Multi-Agent Orchestration이 정식 출시됐고, Coworker의 AI Skills와
  Agent Optimizer는 파일럿 단계(10월 정식 출시 예정)다.
- **권한 설계**: 각 에이전트는 기업이 이미 설정해 둔 Customer 360 데이터·업무 규칙·
  보안 권한 범위 안에서만 동작한다고 설명됐다.
- **실적**: 초기 고객사 기준 Agentforce+Slack 전체에서 처리된 "에이전트 작업 단위"가
  누적 수십억 건 규모라고 공개, 자율 해결률도 높다고 밝혔다(구체 수치는 고객사별
  비공개).

## 왜 중요한가 (비개발자 관점)

- Anthropic·Salesforce의 "Claudeforce" 파트너십([[2026-08-26-anthropic-salesforce-claudeforce]],
  Claude 기반 세일즈 스킬 37종, 9월 오픈베타)과 Slack Code([[2026-08-20-salesforce-slack-code-launch]],
  Claude Code 등 여러 코딩 에이전트를 팀 채널에 상주시키는 제품) 이후 한 달여 만에,
  Salesforce가 "이름을 가진 직무 에이전트"라는 훨씬 소비자 친화적인 패키징으로
  에이전트 제품 라인을 확장했다. 세 발표를 나란히 놓으면 Salesforce가 (1) 개발자용
  코딩 에이전트 상주 플랫폼, (2) Claude 기반 세일즈 스킬, (3) 이름이 있는 업무별
  에이전트 페르소나까지 에이전트 시장의 여러 층위를 동시에 공략하고 있음이 드러난다.
- "몇 주에 걸쳐 목표를 추적하는 장기 실행 런타임"은 단발성 챗봇 상호작용을 넘어
  에이전트가 스스로 진행 상황을 관리하며 장기 과제를 수행하는 방향으로 엔터프라이즈
  에이전트 제품이 이동하고 있음을 보여준다.

## 활용/시사점

- **AX**: 에이전트를 "이름이 있는 직무 페르소나"로 패키징하는 방식은 현업 부서가
  에이전트 도입을 이해·수용하는 데 심리적 장벽을 낮추는 효과가 있다 — 사내 에이전트
  롤아웃 커뮤니케이션 설계에 참고할 만한 접근.
- **강의**: "챗봇 응답형 에이전트"에서 "몇 주 단위로 목표를 추적하는 장기 실행
  에이전트"로의 전환을 설명하는 최신 사례로 Hunter(파일럿)를 소개할 수 있다.

## 출처

- [Salesforce — Salesforce Expands Agentforce With a New Portfolio of AI Agents Built for High-Value Work](https://www.salesforce.com/news/stories/agentforce-job-ready-ai-agents/)
- [SiliconANGLE — Salesforce introduces new AI agents to automate sales, support tasks](https://siliconangle.com/2026/09/11/salesforce-introduces-new-ai-agents-to-automate-sales-support-tasks/)
- [Unite.AI — Salesforce Debuts Job-Ready Agentforce Agents and Long-Horizon Runtime](https://www.unite.ai/salesforce-debuts-job-ready-agentforce-agents-and-long-horizon-runtime/)
- 관련: [[2026-08-26-anthropic-salesforce-claudeforce]], [[2026-08-20-salesforce-slack-code-launch]]
