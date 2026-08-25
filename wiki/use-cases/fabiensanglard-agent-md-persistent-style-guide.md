---
type: use-case
date: 2026-08-26
tools: [claude-code]
mechanism: [prd-driven]
domain: dev-automation
task: 코딩 에이전트 세션마다 스타일·아키텍처 가이드를 반복 설명하지 않도록 agent.md 파일로 영속화
outcome: 저자 주관 평가로 "코드 품질이 극적으로 개선, 직접 짠 것과 유사한 수준"(정량 수치 없음)
model: 미확인 (VS Code Claude Code 플러그인·Antigravity 전제, 특정 모델 버전 원문 미기재)
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course]
source: https://fabiensanglard.net/agent.md/index.html
---

# agent.md — 세션마다 재주입되는 코딩 스타일 가이드 파일 (Fabien Sanglard)

> **공식**: Claude Code(prd-driven 방식의 세션 주입 가이드 파일)를 활용해 코딩 에이전트의
> 스타일·아키텍처 일관성 유지 업무를 수행 → 저자 체감상 코드 품질이 직접 작성 수준까지 개선

## 무엇을 자동화했나

코딩 하네스가 세션 시작 시 `agent.md`라는 파일을 읽어 프롬프트에 주입하도록 설정해,
매 세션 반복 설명해야 했던 네이밍·구조·주석·아키텍처 원칙·커뮤니케이션 선호를 영속화하는
작업을 자동화했다. Claude Code·Gemini 등에서 이미 쓰이는 CLAUDE.md/AGENTS.md/GEMINI.md
컨벤션을 벤더 중립적인 `agent.md` 하나로 통일하고, 심링크로 여러 도구에 동시 대응하는
방법을 제안한 개인 워크플로우 정리 글이다.

## 어떻게 구성했나 (아키텍처)

1. 프로젝트 루트에 `agent.md` 생성 — 네이밍 규칙·파일 구조·주석 스타일·아키텍처 원칙 등
   구체적 규칙을 서술형으로 기록.
2. `gemini.md`/`claude.md` 같은 도구별 설정 파일을 `agent.md`로 심링크해 여러 코딩
   하네스(Claude Code VS Code 플러그인, Antigravity 등)에서 동일 가이드를 재사용.
3. 기능 단위로 새 세션을 시작해 컨텍스트 길이를 관리하고, 품질이 떨어지면 "Reload
   agent.md"라고 명시적으로 재로드를 요청.
4. 가이드를 사람이 수동 편집하는 대신, 에이전트에게 직접 `agent.md`를 갱신하도록 요청해
   가이드 자체를 에이전트와 함께 진화시킴.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (VS Code Claude Code 플러그인·Antigravity 언급, 구체 모델 버전 없음) |
| 비용 | 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | prototype — 개인 워크플로우, 상용·팀 단위 검증 없음 |
| 증거 수준 | anecdotal — 저자 주관 서술만 있고 정량 측정치 없음 |

## 성과와 수치

- **주장(claimed/anecdotal)**: "코드 품질이 극적으로 개선됐다. 직접 손으로 짠 것과 매우
  가까웠다"— 저자 본인 평가이며 정량 지표(성공률·리뷰 수정량 등)는 제시되지 않았다.
  저자 스스로도 "LLM은 계속 환각하므로 신뢰할 수 없고, 여전히 검증·반복이 필요하다"고
  단서를 붙였다.
- HN에서 413점으로 프론트페이지 상위에 오르며 크게 화제가 됐으나, 이는 커뮤니티 공감대이지
  성과 실측치는 아니다.

## 재현 가이드

- **난이도**: 하 (별도 도구 설치 없이 텍스트 파일 하나로 시작 가능)
- **준비물**: CLAUDE.md/AGENTS.md류 세션 주입을 지원하는 코딩 하네스(Claude Code, Gemini
  CLI, Antigravity 등)
- **핵심 단계**:
  1. 프로젝트 루트에 `agent.md`(또는 `CLAUDE.md`) 작성 — 스타일·구조·소통 선호 명시
  2. 다른 도구용 설정 파일은 `agent.md`로 심링크해 중복 관리 방지
  3. 기능 단위로 세션을 새로 시작, 필요 시 "Reload agent.md" 요청
  4. 가이드 갱신은 에이전트에게 직접 맡겨 지속적으로 다듬기

## 강의·AX 활용 포인트

- **강의**: 이 위키의 자체 운영 원칙이기도 한 CLAUDE.md 컨벤션을 개인 개발자가 어떻게
  일반화해 재발명했는지 보여주는 좋은 도입 사례 — "세션 간 컨텍스트 영속화"라는 프롬프트
  엔지니어링의 기초 개념을 가르칠 때 쓸 수 있다.
- **AX**: 사내 여러 팀이 서로 다른 AI 코딩 도구(Claude Code·Codex·Gemini)를 쓸 때, 심링크로
  가이드 파일 하나를 공유하는 구조는 "도구는 달라도 사내 코딩 표준은 하나로 유지"하는
  거버넌스 아이디어로 응용할 수 있다. 다만 정량 성과 데이터가 없다는 점은 도입 근거로
  제시할 때 유의해야 한다.

## 출처

- [Fabien Sanglard — agent.md](https://fabiensanglard.net/agent.md/index.html)
- [Hacker News 토론(413점) — "My agent.md to improve LLM-assisted code quality"](https://news.ycombinator.com/item?id=49410932)
