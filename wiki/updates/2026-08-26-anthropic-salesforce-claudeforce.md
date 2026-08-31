---
type: update
date: 2026-08-26
tools: [claude]
importance: high
uses: [ax]
source: https://www.salesforce.com/news/press-releases/2026/08/26/salesforce-and-anthropic-announce-claudeforce/
---

# Salesforce·Anthropic, "Claudeforce" 파트너십 발표 — Claude가 세일즈포스 CRM 안으로

> 이 항목은 2026-08-26 발표됐으나 08-27~08-31 스캔에서 누락되어 09-01 스캔에서 소급
> 반영한다 (WebSearch로 뒤늦게 발견 — 2026-08-30 Claude Cowork 브라우저 소급 사례와
> 유사한 패턴).

## 무엇이 있었나

Salesforce와 Anthropic이 2026-08-26 확장 전략적 파트너십 "Claudeforce"를 발표했다.
핵심 제품은 **"Salesforce in Claude"** — Claude 안에서 바로 쓰는 37종의 사전 구축
세일즈 스킬(회의 준비, 딜 헬스 리뷰, 파이프라인 관리 등) 플러그인이다. 세일즈 담당자와
에이전트가 실시간 매출 데이터를 근거로 추론하고, 파이프라인 업데이트를 자동화하고,
거버넌스가 적용된 액션을 Claude에서 직접 실행할 수 있다.

기술적으로는 Salesforce의 엔터프라이즈 하네스 **"AIforce"**가 MCP 서버·API·CLI 도구를
통해 비즈니스 데이터·워크플로를 에이전트에 노출하는 구조다. Claude는 Amazon Bedrock을
경유해 Salesforce Trust Boundary 내부에서 서빙되며, 데이터·추론 워크로드가 제3자 API로
왕복하지 않고 Salesforce 보안 경계 안에 머문다. 현재는 선별된 파일럿 고객 대상이며,
2026년 9월 오픈 베타 예정. 발표 당일(2분기 실적 발표와 겹침) Salesforce 주가가 시간외
거래에서 12% 상승했다.

## 왜 중요한가 (비개발자 관점)

세일즈포스는 세계 최대 CRM 벤더고, Anthropic은 Claude를 만드는 회사다. 두 회사가 손잡고
"영업 담당자가 매일 쓰는 CRM 화면"이 아니라 "Claude 채팅 안에서" 고객 데이터를 보고
다음 행동을 실행할 수 있게 만들었다는 뜻이다. 회사 시스템(CRM)과 AI 비서(Claude)의
경계가 허물어지는 흐름을 보여주는 사례이자, 세일즈포스 입장에서는 자체 AI(Agentforce)
외에 Claude를 CRM 안으로 직접 끌어들이는 선택이라는 점에서 주목할 만하다.

## 활용/시사점

- **AX 관점**: 데이터·추론이 벤더(Salesforce) 보안 경계 안에 머무는 구조는 "AI 도입 시
  데이터가 외부로 나가는가"라는 기업 우려에 대한 답변 모델로 참고할 만하다 — 유사한
  질문을 받는 다른 SaaS-AI 파트너십 평가 시 비교 기준이 된다.
- 37종 사전 구축 스킬이라는 구성은 [[benai-claude-skills-marketing-automation]] 등
  이 위키의 다른 "Skill 카탈로그화" 사례와 같은 패턴 — 특정 업무 영역(영업)을 스킬
  단위로 표준화·배포하는 접근이 벤더 파트너십 수준에서도 반복되고 있음을 보여준다.
- 2026-09 오픈 베타 시점에 실제 도입 성과(파이프라인 처리 시간 등 실측 수치)가 나오면
  [[anthropic-bd-team-claude-cowork-sales-automation]](Anthropic 자체 BD팀 사례)와
  비교해 벤더 자기사례 vs 고객사 실측을 대조할 수 있다.

## 출처

- [Salesforce — Salesforce and Anthropic Announce Claudeforce: The #1 AI Meets the #1 AI CRM](https://www.salesforce.com/news/press-releases/2026/08/26/salesforce-and-anthropic-announce-claudeforce/)
- [CIO — Salesforce, Anthropic partner to deliver Claudeforce](https://www.cio.com/article/4214458/salesforce-anthropic-partner-to-deliver-claudeforce.html)
- [Yahoo Finance — Salesforce and Anthropic launch Claudeforce AI sales plugin](https://finance.yahoo.com/technology/ai/articles/salesforce-anthropic-launch-claudeforce-ai-120620067.html)
