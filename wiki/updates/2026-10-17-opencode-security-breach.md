---
type: update
date: 2026-10-17
tools: [claude-code, codex, gemini]
importance: high
uses: [ax]
source: https://startupfortune.com/opencode-breach-exposes-stored-openai-and-anthropic-keys-prompts-urgent-key-rotation/
---

# OpenCode(AI 코딩 에이전트 플랫폼), "대규모 distillation 공격"으로 보안 침해 공개 — Console 사용자 1.4% API 키 노출

## 무엇이 있었나

Claude Code·Codex의 오픈소스 대안으로 쓰이는 AI 코딩 에이전트 플랫폼 **OpenCode**가
2026-10-17 보안 침해를 공식 공개했다(HN 542점).

- **원인**: 공격자가 레거시 시스템의 취약점을 악용해 사용자 워크스페이스에 저장된
  API 키에 무단 접근. OpenCode는 이를 "대규모 모델 distillation 공격"이라고 규정했다
  (경쟁 모델을 값싸게 학습시키려는 목적으로 다른 공급사 API를 대량 호출하는 패턴으로
  추정).
- **영향 범위**: 외부 AI 공급사(Anthropic·OpenAI·Google) 계정을 연동해 둔 사용자 중
  **Console 사용자의 1.4%**. 영향받은 사용자들은 자신의 계정 잔액이 빠르게 소진되거나
  요금이 수백 달러까지 치솟았다고 보고했다.
- **노출된 것**: 사용자가 워크스페이스에 저장해 둔 Anthropic·OpenAI·Google API 키.
- **대응**: 영향받은 고객에게 이메일 통보, 키 폐기·재발급 권고. OpenAI·Anthropic·Google과
  공동으로 후속조치 진행 중이며 조사는 아직 끝나지 않았다고 밝혔다.

## 왜 중요한가 (비개발자 관점)

Claude Code·Codex 같은 "공식" AI 코딩 도구뿐 아니라, 그 생태계 주변에서 자라난
**서드파티 오픈소스 대안 도구들도 같은 수준의 공급망 보안 문제를 안고 있다**는 사례다.
사용자가 API 키를 어디에 저장·연동하느냐에 따라 한 플랫폼의 보안 사고가 여러
LLM 공급사 계정으로 동시에 번질 수 있다 — 10-09~10-16 사이 반복된 "에이전트가
통제 밖에서 행동한 사고"들과는 다른 종류의 리스크(제3자 플랫폼의 전통적 보안 침해)지만,
"AI 코딩 도구 전반에 걸친 거버넌스·보안 비용이 과소평가돼 있다"는 10월 초부터의 흐름과
같은 결을 공유한다.

## 활용/시사점

- **AX 관점**: 사내에서 Claude Code·Codex 같은 공식 도구 외에 서드파티 AI 코딩 플랫폼
  도입을 검토할 때는 (1) API 키를 플랫폼에 평문 저장하는지, (2) 키 로테이션·폐기가
  얼마나 쉬운지, (3) 플랫폼 자체의 보안 침해 공시 이력을 함께 점검해야 한다는 교훈.
- 조직이 LLM API 키를 여러 서드파티 도구에 연동해 둔 경우, 한 도구의 침해가 전체
  LLM 공급사 계정 예산을 동시에 위협할 수 있다는 점에서 **키 범위를 플랫폼별로
  분리·제한**하는 설계가 필요하다.

## 출처

- [Startup Fortune — OpenCode breach exposes stored OpenAI and Anthropic keys, prompts urgent key rotation](https://startupfortune.com/opencode-breach-exposes-stored-openai-and-anthropic-keys-prompts-urgent-key-rotation/)
- [Hacker News — OpenCode Hacked: User credentials leaked (542점)](https://news.ycombinator.com/item?id=50133401)
- raw: `raw/2026-10/opencode-security-breach.md`
