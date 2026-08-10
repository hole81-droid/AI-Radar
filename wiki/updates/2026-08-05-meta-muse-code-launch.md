---
type: update
date: 2026-08-05
tools: []
importance: high
uses: [ax]
source: https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/
---

# Meta, 코딩 에이전트 "Muse Code" 베타 출시 — Claude Code·Codex와 정면 경쟁

## 무엇이 있었나

2026-08-05 Meta가 자체 코딩 에이전트 **Muse Code** 베타를 출시하며 Claude Code·Codex가
양분해온 터미널 코딩 에이전트 시장에 본격 진입했다.

- **기반 모델**: 신규 모델 **Muse Spark 1.2**가 구동. macOS·Linux를 지원하는 터미널
  기반 CLI 에이전트(에디터 플러그인이 아니라 독립 실행형).
- **핵심 기능**: 텍스트 프롬프트로 코드 작성·변경 계획·결과 검증까지 수행. 세션 내내
  살아있는 백그라운드 전담 에이전트가 컨텍스트를 누적하고, 작업이 크면 격리된 워크트리에서
  여러 서브에이전트로 팬아웃해 병렬 작업 — 사용자의 실제 작업 사본은 건드리지 않는 구조.
  테스트에서 여러 기능을 동시 개발해도 충돌 0건을 기록했다고 주장.
- **가격**: 종량제(pay-as-you-go), 기존 Muse Spark 1.1과 비슷한 수준(입력 $1.25/백만
  토큰, 출력 $4.25/백만 토큰) — Meta AI 총괄은 "비용 관점에서 특히 강력한 선택지"라고
  강조.
- **타깃**: 대형 리포지토리를 다루는 개발자. Anthropic·OpenAI를 정면으로 겨냥한다고
  다수 매체가 보도(CNBC "Meta debuts first AI coding agent to take on Anthropic and
  OpenAI").

## 왜 중요한가 (비개발자 관점)

- 지금까지 "AI로 코딩을 자동화한다"는 흐름은 사실상 Anthropic(Claude Code)과 OpenAI
  (Codex) 양강 구도였다. Meta가 세 번째 메이저 플레이어로 들어오면서, 가격 경쟁·기능
  경쟁이 본격화될 전망 — 기업 입장에서는 코딩 에이전트 도입 비용이 낮아질 가능성.
- Meta는 이번 진입으로 "채팅형 어시스턴트"를 넘어 "AI 인프라 전 계층"을 노리는 빅테크
  3사(Anthropic·OpenAI·Meta) 구도를 완성했다.

## 활용/시사점

- **AX**: 코딩 에이전트를 사내 도입 중이거나 검토 중이라면, 향후 몇 달 내 Muse Code까지
  포함한 3파전 벤치마크(비용·정확도·보안)를 재검토할 필요가 있다.
- **강의**: "터미널 코딩 에이전트"라는 카테고리 자체가 이제 하나의 표준 제품군으로
  자리잡았음을 보여주는 사례 — Claude Code·Codex·Muse Code 3사 비교 교재로 활용 가능.

## 출처

- [TechCrunch — Meta launches Muse Code, an AI agent for large code bases](https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/)
- [CNBC — Meta debuts first AI coding agent to take on Anthropic and OpenAI](https://www.cnbc.com/2026/08/05/meta-debuts-muse-code-to-take-on-anthropic-and-openai-.html)
- [The Register — Meta wants to get inside your terminal with its new coding agent](https://www.theregister.com/ai-and-ml/2026/08/06/meta-wants-to-get-inside-your-terminal-with-its-new-coding-agent/5283717)
