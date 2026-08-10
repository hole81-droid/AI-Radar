---
source_url: https://claude.com/blog/auto-mode-default-in-claude-code
related_url: https://www.anthropic.com/engineering/claude-code-auto-mode
retrieved: 2026-08-08 (소급 스캔 대상일 2026-08-07)
publish_date: 2026-08-07
---

# Auto mode is now the default in Claude Code for Pro, Max, and Team plans

WebSearch로 확인한 원문 요지.

## 핵심 내용

- Claude Code의 "Auto mode"가 2026-08-07부로 Pro·Max·Team 플랜에서 **기본값**이 됨 (기존에는
  Pro 플랜에 선택적으로 제공되던 기능, 2026-03 리서치 프리뷰 → 단계적 확대).
- Auto mode는 권한 프롬프트(매 도구 실행마다 승인받는 방식)를 모델 기반 분류기로 대체 —
  "승인 피로(approval fatigue)"를 줄이는 것이 목표.
- 이중 방어 구조: (1) Claude가 "읽는" 내용에 대한 방어 — 툴 실행 결과를 프롬프트 인젝션 탐지
  프로브로 스캔, (2) Claude가 "하는" 행동에 대한 방어 — 사용자 의도와 정렬되는지 확인하는
  액션 정합성 체크.
- Anthropic 엔지니어링 블로그("How we built Claude Code auto mode: a safer way to skip
  permissions")에서 아키텍처 상세 공개.
- **프로덕션 사용 권고**: Anthropic은 auto mode를 민감한 코드베이스·프로덕션 시스템과 분리된
  격리(sandbox) 환경에서 사용할 것을 권장 — 판단 오류 시 피해 범위를 제한하기 위함. 의미 있는
  프로덕션 세션에는 여전히 사람의 감독이 필요하다고 명시.

## 위키 반영

→ [[2026-08-07-claude-code-auto-mode-default]] (updates)
→ [[claude-code]] 허브 갱신
