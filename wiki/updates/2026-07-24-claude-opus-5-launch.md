---
type: update
date: 2026-07-24
tools: [claude, claude-code]
importance: high
uses: [ax, course]
source: https://www.anthropic.com/news/claude-opus-5
---

# Anthropic, Claude Opus 5 출시 — Fable 5급 성능을 절반 가격에, "이펙트 강도" 토글 도입

## 무엇이 있었나

Anthropic이 2026-07-24 새 Opus 티어 **Claude Opus 5**를 출시했다. 전작 Opus 4.8을 대체하며
가격은 동일하게 유지된다($5/$25, 100만 토큰당 입력/출력).

- **성능**: Frontier-Bench v0.1에서 Opus 4.8 대비 2배 점수, 컴퓨터 사용 벤치마크 OSWorld 2.0에서는
  Fable 5의 최고 기록을 3분의 1 비용에 넘어섬, CursorBench 3.2에서 Fable 5와 0.5%p 차이(절반
  비용), ARC-AGI-3에서 차순위 모델의 3배 점수, Zapier AutomationBench에서 차순위 대비 약 1.5배
  통과율
- **새 기능(베타)**: 대화 도중 도구를 바꾸는 기능(Claude Platform), 안전 분류기가 걸러낸 요청을
  자동으로 다른 모델로 우회시키는 폴백 기능(API), 시각 출력 생성, 강화된 에이전틱 자가검증
- **이펙트(effort) 토글**: 사용자가 작업 완료에 투입할 노력 수준을 low/medium/high로 직접 선택해
  비용과 성능 사이 균형을 조절 가능
- **제공처**: claude.ai, Claude Code, Claude Cowork, Claude API(`claude-opus-5`), Amazon Bedrock,
  Google Vertex AI. Claude Max의 새 기본 모델, Claude Pro에서는 최상위 모델로 제공

## CLAUDE.md 작성 철학 전환 — "규칙 나열"에서 "모델 판단 신뢰"로

Opus 5 출시와 함께 Anthropic은 Claude Code의 시스템 프롬프트를 대폭(약 80%) 정리하고, 새로운
"점진적 공개(progressive disclosure)" 철학을 제시했다 — "절대 주석을 달지 마라" 같은 하드 규칙을
왕창 나열하는 대신, 모델이 스스로 판단하도록 맡기고 필요할 때만 세부 지침 파일을 불러오는 방식을
권장한다. 낡은 모델을 겨냥해 쓰인 규칙을 감지해주는 `/doctor` 명령도 함께 추가됐다.

커뮤니티 반응은 엇갈렸다 — "모델이 똑똑해질수록 자유를 주는 게 맞다"는 환영론과, "모델별로
CLAUDE.md를 따로 관리해야 하나"라는 멀티모델 사용자들의 반발(Opus 5 기준으로 CLAUDE.md를
가볍게 하면 Sonnet·Haiku·오픈모델 전환 시 지침 부족으로 실패할 수 있다는 우려)이 동시에 나왔다.
[Reddit r/ClaudeAI](https://old.reddit.com/r/ClaudeAI/comments/1v5mhhl/anthropic_cut_80_of_claude_codes_system_prompt/)

## 왜 중요한가 (비개발자 관점)

- 최상위 모델(Fable 5)의 상당수 능력을 훨씬 싼 가격에 쓸 수 있게 되면서, "성능이 필요할 때만
  비싼 모델을 쓴다"가 아니라 "평소 업무는 Opus 5로 충분하다"는 쪽으로 실무 기본값이 이동할 가능성이
  크다. Effort 토글은 비개발자도 "이번 작업은 대충/제대로" 수준을 직접 고를 수 있게 해준다는 점에서
  체감이 크다.
- CLAUDE.md 철학 전환은 Claude Code로 업무를 자동화하는 모든 사용자(이 위키 포함)에게 직접
  영향을 준다 — 지침 파일을 "규칙집"이 아니라 "필요할 때 불러오는 참고자료 트리"로 재설계해야
  할 수 있다는 뜻이다.

## 활용/시사점

- **강의**: "모델이 좋아지면 프롬프트/지침 설계 방식도 바뀐다"는 살아있는 사례 — 프롬프트
  엔지니어링이 고정된 기술이 아니라 모델 세대에 따라 계속 바뀐다는 점을 가르치는 소재로 적합.
- **AX**: 기업이 Claude Code를 이미 CLAUDE.md 기반으로 운영 중이라면, Opus 5 전환 시점에
  지침 파일을 감사(`/doctor`)하고 멀티모델 환경이면 모델별 조건부 블록 관리 전략을 별도로
  세워야 한다.

## 출처

- [Anthropic 공식 — Introducing Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)
- [TechCrunch — Anthropic launches Opus 5](https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/)
- [Bloomberg — Anthropic Launches Claude Opus 5 AI Model for Affordable Workplace Tasks](https://www.bloomberg.com/news/articles/2026-07-24/anthropic-unveils-more-cost-efficient-model-for-everyday-tasks)
- [VentureBeat — Anthropic launches Claude Opus 5, a cheaper AI model for coding, agents and enterprise workflows](https://venturebeat.com/orchestration/anthropic-launches-claude-opus-5-a-cheaper-ai-model-for-coding-agents-and-enterprise-workflows)
- [Fortune — Anthropic releases Claude Opus 5](https://fortune.com/2026/07/24/anthropic-debuts-claude-opus-5-with-feature-that-lets-users-toggle-between-cost-and-capability/)
- [Reddit r/ClaudeAI — Anthropic cut 80% of Claude Code's system prompt for the Claude 5 models](https://old.reddit.com/r/ClaudeAI/comments/1v5mhhl/anthropic_cut_80_of_claude_codes_system_prompt/)
