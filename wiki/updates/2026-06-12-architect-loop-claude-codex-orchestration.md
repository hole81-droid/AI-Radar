---
type: update
date: 2026-06-12
tools: [claude-code, codex]
importance: medium
uses: [course]
source: https://github.com/DanMcInerney/architect-loop
---
# /architect-loop — Claude가 설계·리뷰하고 Codex가 구현하는 오픈소스 "자율 소프트웨어 팩토리"

## 무엇이 있었나

오케스트레이터 하나, 전략가 에이전트, 빌더 에이전트를 조합해 이슈 처리부터 병합까지
자동화하는 오픈소스 도구 `architect-loop`가 GitHub에 공개됐다. Claude가 전략가·리뷰어
역할을, Codex가 빌더(구현) 역할을 맡는 역할 분리 구조다.

## 왜 중요한가

- 오케스트레이터가 저장소 접근·에이전트 파견·최종 병합 권한을 쥐고, 각 빌더는 격리된
  git worktree에서 정확히 하나의 이슈만 처리하는 구조는 멀티 에이전트 개발 파이프라인의
  참고 설계로 쓸 만하다.
- 실행 전 "고정된 체크리스트"를 걸어두고, 에이전트는 판정 없이 증거만 수집하며 최종
  병합 여부는 포스트플라이트 단계에서 결정하는 안전장치 설계가 특징이다.

## 활용/시사점

- 전략가/빌더 역할 분리와 워크트리 격리는 멀티 에이전트 개발 파이프라인을 가르칠 때
  참고할 만한 구조 — 학습과정에서 오케스트레이션 설계 실습 소재로 적합.
- "대규모 토큰 절감"을 주장하지만 구체적 절감률은 공개하지 않아 [추정] 성격이 강하다 —
  실제 도입 전 비용 측정이 필요하다는 점을 함께 짚을 것.

## 출처

- [GitHub — DanMcInerney/architect-loop](https://github.com/DanMcInerney/architect-loop)
