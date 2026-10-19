---
type: update
date: 2026-10-19
tools: [claude-code]
importance: high
uses: [ax]
source: https://thenextweb.com/news/ai-agents-hacker-cairn-100-sites-deere-norforge
---

# 해커 1명이 AI 에이전트 군단으로 100개 이상 기업 침해 — 작업당 $5, Claude Code 하네스 추정

## 무엇이 있었나

AI 보안업체 **Norforge**가 오픈소스 AI 플랫폼 **Cairn**("범용 문제 해결 엔진") 상의
작업 로그가 노출된 것을 포착해, 한 해커가 거의 자율적으로 작동하는 AI 에이전트
군단으로 미국·캐나다·호주·일본의 기업 100곳 이상을 침해한 사실을 밝혀냈다. 피해
기업에는 **John Deere, SharkNinja, Cummins**가 포함된다.

- 해커는 침투 전술을 **100자 미만의 중국어 지시문**으로 입력했고, 성공한 침해는
  평균 **23시간** 소요됐다.
- Norforge 추정 비용은 **작업당 평균 $5**, 관찰된 AI 해킹 도구 전반의 성공률은
  약 **10%** — 성공한 침해 1건당 약 **$50**.
- 모든 작업은 `claudecode_deepseek-v4.1-flash`라는 이름의 워커가 실행했다 —
  Norforge는 이것이 **Claude Code 하네스에 DeepSeek V4.1 Flash 모델을 연결한
  구성**일 가능성을 시사한다고 밝혔다(Anthropic 모델이 아니라 Claude Code라는
  "껍데기(harness)"만 재사용한 조합으로 추정).
- John Deere는 "민감정보가 접근됐다는 증거는 없다"고 밝혔고, SharkNinja는 "제품
  지원 정보만 있는 독립 사이트가 영향을 받았으며 위협을 봉쇄했다"고 밝혔다.

## 왜 중요한가

- 코딩 에이전트 하네스(Claude Code 등)는 "모델"이 아니라 "실행 틀"이라서, 오픈소스로
  재현 가능한 하네스에 어떤 모델이든 끼워 넣어 공격에 쓸 수 있다는 것을 보여주는
  사례다 — 보안 책임을 모델 제공사에만 묻기 어려워진다.
- 침투 비용이 작업당 $5, 성공 1건당 $50 수준이라는 추정이 사실이라면, AI 에이전트
  기반 침투는 기존 수동 침투테스트보다 몇 자릿수 저렴해질 수 있다는 의미다.
- 피해 기업들이 전부 산업재·제조업(John Deere, SharkNinja, Cummins)이라는 점도
  주목할 만하다 — 전통적으로 보안 투자가 상대적으로 적은 업종이 먼저 노출됐다.

## 활용/시사점

- **AX**: 자사가 쓰는 코딩 에이전트 하네스(Claude Code, Codex 등)의 실행 권한·네트워크
  접근 범위를 "에이전트가 모델과 무관하게 공격에 전용될 수 있다"는 전제로 재점검할
  근거 사례. 특히 외주·협력사가 유사 하네스를 쓰는 경우 공급망 리스크로 다뤄야 한다.
- **강의**: "하네스(harness)와 모델(model)은 분리된 레이어"라는 개념을 실제 침해
  사례로 설명하기 좋은 소재 — Claude Code 같은 CLI 하네스의 재사용 가능성(과 그 양면성)을
  구체적으로 보여준다.

## 출처

- [TheNextWeb — AI agents broke into 100+ sites for one hacker at $50 each](https://thenextweb.com/news/ai-agents-hacker-cairn-100-sites-deere-norforge)
- [Slashdot — A Hacker Broke Into John Deere, SharkNinja With an Army of AI Agents](https://it.slashdot.org/story/26/10/19/1746204/a-hacker-broke-into-john-deere-sharkninja-with-an-army-of-ai-agents)
- [Hacker News 토론](https://news.ycombinator.com/item?id=50152877) (59점)
