---
type: update
date: 2026-08-20
tools: [claude-code]
importance: high
uses: [course, ax]
source: https://www.salesforce.com/introducing-slack-code/
---
# Salesforce, "Slack Code" 출시 — 팀 채널에서 여러 AI 코딩 에이전트를 함께 쓰는 협업 공간

## 무엇이 바뀌었나

Salesforce(Slack)가 AI 코딩을 "개발자 1명 대 에이전트 1개"의 사적 대화에서 팀 전체가
지켜보는 공개 활동으로 바꾸는 신제품 **Slack Code**를 2026-08-20 발표했다. 팀원이
코딩 에이전트를 태그하면 전용 "코드 채널"이 열리고, 에이전트가 별도 작업 공간에서
문제를 풀며 결과물을 캔버스에 표시한다. 채널의 모든 사람이 대화·코드 diff·실시간
미리보기를 보고 피드백을 남기고, 배포 전 승인할 수 있다. 지원 에이전트는 Anthropic
Claude Code·Claude Tag, Vercel v0, Cognition Devin, GitHub Copilot, OpenAI ChatGPT 등.
고위험 작업(프로덕션 배포 등)은 채널의 전문가가 별도 승인해야 하며, 권한 체계는 Slack
기존 보안·관리자 설정을 그대로 상속한다. 출시 시점에 전 Slack 플랜에서 제공된다.

## 왜 중요한가

코딩 에이전트가 "개인 생산성 도구"에서 "팀 커뮤니케이션 플랫폼에 상주하는 협업 주체"로
옮겨가는 흐름을 보여주는 사례다. Claude Code를 포함해 경쟁 관계인 여러 벤더의 에이전트를
한 제품 안에서 동시에 지원한다는 점도 특징 — Slack이 특정 벤더에 종속되지 않는 "에이전트
중립 허브"를 자처했다. HN 반응은 회의적이었다("마케팅 카피만 요란하다", "이미 비슷한
툴을 여러 개 쓰는데 생태계 피로", "Zed Delta·Buzz.xyz와 비슷한데 Slack이 뒤늦게
따라간 모양새").

## 활용 포인트

- AX: 에이전트 도입을 사내 협업 툴(채팅) 안으로 통합하는 설계가 표준 패턴으로 자리잡는
  신호. 팀 전체가 diff·승인 과정을 지켜보는 구조는 "에이전트 신뢰 구축"의 실무 사례로
  인용 가능.
- 강의: 여러 벤더의 에이전트(Claude Code·Devin·v0·Copilot·ChatGPT)가 한 플랫폼에서
  공존하는 멀티 에이전트 협업 UX 설계 사례.
- 같은 날 AX LABS가 정리한 Slack CPO의 "에이전트를 팀원으로 쓰는 5원칙"
  ([[theaxlabs-slack-cpo-ai-teammate-principles]])과 문제의식이 직접 이어진다.

## 출처

- [Salesforce — Introducing Slack Code](https://www.salesforce.com/introducing-slack-code/)
- [SiliconANGLE — Salesforce introduces Slack Code](https://siliconangle.com/2026/08/20/salesforce-introduces-slack-code-to-bring-agentic-team-coding-into-the-open/)
- [Hacker News 토론](https://news.ycombinator.com/item?id=49374965)
