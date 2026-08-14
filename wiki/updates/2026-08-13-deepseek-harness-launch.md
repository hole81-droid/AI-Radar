---
type: update
date: 2026-08-13
tools: []
importance: high
uses: [ax, course]
source: https://venturebeat.com/technology/deepseek-harness-launches-as-open-source-rival-to-claude-code-alongside-v4-pro-on-api-with-higher-prices
---

# DeepSeek Harness v0.1 개발자 프리뷰 공개 — 오픈소스 Claude Code 대항마

## 무엇이 있었나

2026-08-13 DeepSeek이 에이전트 코딩 하니스 **DeepSeek Harness v0.1**을 개발자 프리뷰로
공개하고 코드 전체를 **MIT 라이선스**로 오픈소스화했다. 같은 날 V4-Pro 모델을 API에 더 높은
가격으로 올렸다.

- **철학**: "Everything is a plugin" — 모델·툴·스킬·세션·샌드박스·파일시스템·루프·오케스트레이션·
  UI까지 전부 교체·조합 가능한 플러그인으로 설계했다. 기반은 자체 "Cordis" 메타프레임워크.
- **설치**: `npx @deepseek-ai/dsh web`으로 즉시 실행 가능.
- **포지셔닝**: Anthropic Claude Code와 정면으로 경쟁하는 오픈소스 에이전틱 코딩 도구로 보도됨.
- **상태**: 저장소에 "호환성을 깨는 변경이 있을 것"이라는 경고가 명시된 개발자 프리뷰 단계 —
  아직 안정적인 프로덕션 대체재로 제시되지는 않았다.
- HN 프론트페이지 1위(514점, 2026-08-13 기준)로 개발자 커뮤니티에서 화제.

## 왜 중요한가 (비개발자 관점)

- 지금까지 "코딩 에이전트 하니스" 경쟁은 Claude Code·Codex·Muse Code·Grok Bot 등 빅테크·
  대형 스타트업 중심이었는데, DeepSeek이 하니스 자체를 무료·오픈소스로 공개하면서 경쟁의
  성격이 달라졌다. 하니스는 공짜로 풀어 채택을 넓히고, 모델 API 사용료로 수익을 내는 구조가
  오픈소스 진영에서도 자리 잡는 신호로 볼 수 있다.
- 기업이 벤더 락인 없는 코딩 에이전트 인프라를 원한다면 이제 선택지가 하나 늘었지만, 아직
  developer preview 단계라는 점은 도입 판단 시 주의가 필요하다.

## 활용/시사점

- **AX**: 코딩 에이전트 하니스를 사내 표준으로 도입할 때 "오픈소스 무료 하니스 + 유료 모델
  API"와 "폐쇄형 통합 제품(Claude Code, Codex)" 두 갈래 전략을 비교 기준에 넣어야 한다.
- **강의**: "Everything is a plugin" 아키텍처는 에이전트 프레임워크 설계(모델/툴/샌드박스를
  독립 교체 가능한 컴포넌트로 분리하는 방식)를 설명하는 최신 교재로 활용 가능.

## 출처

- [VentureBeat — DeepSeek Harness launches as open source rival to Claude Code, alongside V4-Pro on API with higher prices](https://venturebeat.com/technology/deepseek-harness-launches-as-open-source-rival-to-claude-code-alongside-v4-pro-on-api-with-higher-prices)
- [DeepSeek Harness 공식 소개](https://deepseek.com/harness/en/)
- [GitHub — deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)
