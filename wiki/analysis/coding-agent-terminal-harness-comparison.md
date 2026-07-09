---
type: analysis
date: 2026-06-26
tools: [claude-code, codex]
importance: medium
uses: [course, ax]
source: https://outofcontext.dev/blog/goose-claude-code-opencode-pi/
---
# 터미널 코딩 에이전트 4종 실전 비교 — Claude Code, goose, OpenCode, Pi

"이제 모델 성능은 다 비슷해졌고, 어떤 껍데기(하니스)를 쓰느냐가 관건"이라는 관점의
실전 비교 가이드(outofcontext.dev, 2026-06-26)를 정리한다.

## 비교 대상

| 도구 | 특징 | 모델 지원 |
|---|---|---|
| **Claude Code** | Anthropic 종속형, 가장 성숙한 생태계 | Anthropic 모델 중심 |
| **goose** | Linux Foundation 프로젝트, 벤더 중립 | 15개+ 프로바이더 |
| **OpenCode** | 오픈소스, LSP(언어서버) 진단 통합 | 75개+ 모델 |
| **Pi** | TypeScript로 확장하는 완전한 소유권 강조 | 20개+ 프로바이더 |

## 핵심 차이

- **goose**: "포터블 YAML 워크플로우 템플릿"으로 반복 작업을 팀 간 공유·자동화하는 것이
  특징 — 조직 내 워크플로 표준화에 유리.
- **OpenCode**: LSP 진단을 통합해 코드 품질 신호를 에이전트가 직접 활용 — 코드베이스가
  크고 언어서버 인프라가 이미 갖춰진 팀에 유리.
- **Pi**: TypeScript 확장으로 하니스 자체를 완전히 소유·커스터마이징할 수 있음 — 특수한
  워크플로 요구가 많은 팀에 적합.
- **Claude Code**: 벤더 종속이 특징이자 트레이드오프 — 생태계 성숙도·통합 품질이 가장
  높지만 다른 모델 프로바이더로 전환이 상대적으로 어려움.

## 비용 조언

- 구독형 에이전트는 자율 루프를 오래 돌리면 비쌀 수 있다.
- API 직접 결제형은 작업당 비용을 미리 계산해두면 저렴하게 운영할 수 있다.
- 팀의 사용 패턴(짧고 빈번한 작업 vs 길고 드문 자율 루프)에 따라 구독형·API형 중 유리한
  쪽이 달라진다는 것이 원문의 핵심 조언.

## 강의·AX 활용 포인트

- "모델 성능은 평준화됐고 하니스(껍데기) 선택이 관건"이라는 프레이밍은 도구 선택 강의의
  좋은 도입부가 된다.
- 벤더 종속 회피가 중요한 조직(goose, OpenCode, Pi)과 생태계 성숙도가 중요한 조직(Claude Code)
  으로 나눠 의사결정 트리를 만들 수 있다.
- AX 관점: 자율 루프를 장시간 돌리는 워크로드(예: [[openai-codex-maxxing-25-hour]] 같은 사례)는
  구독형보다 API 직접 결제형 비용 구조를 먼저 검토할 필요가 있다는 조언은 비용 산정 시
  실무적으로 유용하다.

## 출처

- [원문 — outofcontext.dev](https://outofcontext.dev/blog/goose-claude-code-opencode-pi/)
