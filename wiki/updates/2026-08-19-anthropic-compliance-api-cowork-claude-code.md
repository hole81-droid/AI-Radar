---
type: update
date: 2026-08-19
tools: [claude-code]
importance: medium
uses: [ax]
source: https://claude.com/blog/compliance-api-cowork-and-claude-code
---

# Anthropic, Compliance API를 Cowork·Claude Code 전체로 확장 — 기업 감사 대응 강화

## 무엇이 있었나

Anthropic이 Claude의 **Compliance API** 적용 범위를 Cowork(데스크톱·웹·모바일)와
Claude Code(CLI·데스크톱 앱)까지 확장했다. Claude Enterprise 고객 대상 베타.

- 보안팀이 감사(audit)·전자증거개시(eDiscovery)를 위해 통합 세션 콘텐츠·메타데이터를
  API로 조회할 수 있게 됐다.
- 새 세션 엔드포인트는 Cowork·Claude Code 세션마다 프롬프트·응답·툴 실행 기록을 하나로
  묶은, 서버에 저장된 트랜스크립트를 반환한다.
- 기존 Compliance Access Key로 바로 사용 가능 — 별도 통합 작업이 필요 없다.
- 베타 범위 밖: Claude Code 웹 버전, Claude Platform 경유 세션, Amazon Bedrock·Google
  Vertex AI·Microsoft Foundry에서 실행된 세션은 아직 미포함.

## 왜 중요한가 (비개발자 관점)

직원이 회사 안에서 Claude로 무슨 대화를 나누고 무슨 작업을 시켰는지, 보안·감사 부서가
하나의 창구에서 들여다볼 수 있게 됐다는 뜻이다. "AI 에이전트를 회사에 들였는데 통제가
안 된다"는 기업의 흔한 불안을 겨냥한 기능으로, 규제 산업(금융·의료 등)에서 Claude
Code·Cowork 도입 장벽을 낮추는 효과를 노린다.

## 활용/시사점

- **AX**: 엔터프라이즈 AI 에이전트 도입 제안서에서 "통제·감사 가능성"을 뒷받침하는 근거로
  인용할 수 있다. 다만 베타 단계이며 클라우드 플랫폼(Bedrock 등) 경유 세션은 아직 빠져
  있어, 멀티클라우드 조직은 커버리지 공백을 확인해야 한다.
- **강의**: "에이전트 도입 = 생산성"뿐 아니라 "에이전트 도입 = 거버넌스 설계"라는 축을
  같이 가르칠 때의 사례로 유용.

## 출처

- [Anthropic — Compliance API coverage extends to Claude Cowork and Claude Code](https://claude.com/blog/compliance-api-cowork-and-claude-code)
