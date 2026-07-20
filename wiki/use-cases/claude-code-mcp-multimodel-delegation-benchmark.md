---
type: use-case
date: 2026-07-20
tools: [claude-code]
mechanism: [mcp, subagents]
domain: dev-automation
task: Claude Code에서 MCP 서버로 GPT-5.6/DeepSeek/GLM/로컬 Qwen에 코딩 작업을 위임하고 히든테스트 198회로 모델별 위임 안전성 벤치마크
outcome: GPT-5.6 Codex 계열(Sol/Terra/Luna) 54/54 만점(Luna는 런당 약 $0.013), Claude Sonnet 5·Haiku 4.5는 특정 패턴(잔돈 분배)에서 반복 실패(1/3)
model: 오케스트레이터 Claude Code(Fable 5) + 위임 대상 GPT-5.6 Sol/Terra/Luna(Codex CLI), DeepSeek v4 Flash/Pro, GLM 5.2, 로컬 Qwen3.6 35B, 베이스라인 Claude Fable 5/Opus 4.8/Sonnet 5/Haiku 4.5
cost: 런당 $0.000(로컬 Qwen)~약 $0.27(Claude Fable 5), 모델별 실측/추정 비용표 있음
permissions: 미확인 (개인 vibe-coding 프로젝트, 승인 절차 언급 없음)
maturity: prototype
evidence: measured
importance: high
uses: [course, ax]
source: https://old.reddit.com/r/ClaudeAI/comments/1v1tnmn/i_built_an_mcp_server_so_claude_code_can_delegate/
---
# Claude Code + MCP "multimodels" — 타사 모델에 작업 위임 후 198회 히든테스트로 교차 벤치마크

> **공식**: Claude Code(Fable 5)로 MCP 서버(mcp+subagents)를 활용해 GPT-5.6·DeepSeek·GLM·로컬
> Qwen에 코딩 작업을 위임하는 오케스트레이션을 수행 → GPT-5.6 Codex 계열(Sol/Terra/Luna)이
> 54/54 만점(비개발자 개인 프로젝트, 실측 히든테스트 198회)

## 무엇을 자동화했나

r/ClaudeAI 사용자(비개발자, vibecoding으로 개발)가 Claude Code를 메인 앱으로 쓰면서
작업 일부를 다른 회사 모델(Codex CLI 경유 GPT-5.6, DeepSeek v4, z.ai GLM 5.2, LAN의 로컬
Qwen3.6)에 위임할 수 있는 MCP 서버 "multimodels"를 직접 만들었다. `list_models`·
`delegate_task` 두 개의 MCP 툴을 노출해, 앱을 벗어나지 않고 어떤 모델에 무엇을 맡길지
Claude가 판단하게 하는 구조다. 이후 이 위임 라우팅 자체를 6개 과업 × 11개 모델 × 3라운드
= 198회 실행으로 벤치마크했다.

## 어떻게 구성했나 (아키텍처)

- **MCP 서버 "multimodels"**: `list_models`(가용 모델 목록)·`delegate_task`(작업 위임) 두
  도구를 노출. Claude Code(Fable 5)가 오케스트레이터로서 어떤 작업을 어느 모델에 맡길지 판단.
- **위임 대상**: GPT-5.6 Sol/Terra/Luna(ChatGPT 구독, Codex CLI 경유, xhigh reasoning),
  DeepSeek v4 Flash/Pro, GLM 5.2(z.ai 코딩플랜 구독 — 서브키는 `/coding/` 엔드포인트 전용이라는
  운영 팁 포함), 로컬 Qwen3.6 35B A3B(LM Studio, LAN의 별도 머신).
- **베이스라인**: Claude Fable 5·Opus 4.8·Sonnet 5·Haiku 4.5를 Claude Code의 일반 서브에이전트로 비교군에 포함.
- **평가 방법**: 6개 과업(스펙 기반 구현·버그 탐지/수정·코드 리뷰·엄격한 JSON 추출·복합
  장문 산출물·부재 컨텍스트 하 정직성 테스트) × 11개 모델 × 각 3라운드(동일 프롬프트,
  포르투갈어). 채점 기준(히든 테스트)은 위임 전에 미리 작성해 모델이 보지 못하게 했다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 오케스트레이터 Claude Code(Fable 5) + 11개 위임/비교 모델(GPT-5.6 3종, DeepSeek 2종, GLM 5.2, Qwen3.6, Claude 4종) |
| 비용 | 런당 $0.000(로컬)~$0.27(Fable 5), 모델별 실측/추정 표 상세 기재 |
| 권한 | 미확인 |
| 성숙도 | prototype (개인 vibecoding 프로젝트, 실무 파이프라인 적용 사례 아님) |

## 성과와 수치

- **실측(measured, 히든테스트 채점)**: GPT-5.6 Codex 계열(Sol·Terra·Luna) 전 기술 과업·전
  라운드 만점 — 54/54. 부재 파일 정직성 과업에서도 9/9 모두 "해당 파일이 없다"고 정확히 확인.
  **Luna는 런당 약 $0.013로 최저비용권에서 최고 성능**을 낸 것이 이 벤치마크의 핵심 발견.
- Claude Sonnet 5·Haiku 4.5는 특정 패턴(잔돈을 여러 명에게 1센트 이내로 분배하는 규칙)에서
  3라운드 중 1라운드만 성공하는 **구조적 약점**(운이 아님)을 반복적으로 드러냄.
- 단일 라운드 결과가 다회 결과와 다른 경우가 다수 — 예: DS4 Flash의 "완벽한 파서"는 1라운드
  한정 요행이었고, 2·3라운드에서는 Sonnet 5와 동일한 엣지케이스("1234,56" 천단위 구분자 없음)에서 실패.
- 로컬 Qwen3.6 35B는 대부분 프론티어급 성능을 냈지만 존재하지 않는 모듈을 임포트하거나
  "R로 시작해야 한다"는 근거 없는 정규식을 요구하는 등 예측 불가능한 방식으로 실패 —
  "무료지만 검증 필수"라는 결론.
- 부재 컨텍스트 하 환각(hallucination)은 모델별로 일관된 "성격"처럼 나타남: DS4 Flash는
  3라운드 중 2회 가상의 MongoDB 코드를 지어냈고, Haiku는 3/3 정직하게 거절, Codex 계열은
  매번 실제로 파일 존재 여부를 확인했다.

## 재현 가이드

- **난이도**: 중 (MCP 서버 자체 구현 필요하지만 `list_models`/`delegate_task` 2개 툴만
  노출하면 되는 단순 구조; 여러 모델 API/구독 접근권 필요)
- **준비물**: Claude Code(또는 임의의 MCP 지원 에이전트), 위임 대상 모델별 API 키/구독,
  과업별 히든 테스트(위임 전 작성), 로컬 모델을 쓰려면 LM Studio 등 로컬 서빙 환경
- **핵심 단계**:
  1. `list_models`·`delegate_task` 두 툴만 노출하는 최소 MCP 서버 작성
  2. 실제 업무를 대표하는 과업 세트 설계(스펙 구현·버그수정·리뷰·추출·정직성 등)
  3. 위임 전 히든 테스트(채점 기준)를 모델이 보지 못하게 미리 작성
  4. 동일 프롬프트로 **최소 3라운드 이상** 반복 실행 — 1회 결과만으로 판단 금지
  5. 비용·정확도·정직성(부재 컨텍스트 대응)을 기준으로 과업별 위임 모델 라우팅 규칙 확정

## 강의·AX 활용 포인트

- **강의**: "MCP로 오케스트레이터-워커를 이종 벤더에 걸쳐 구성"하는 실물 사례이자, "n=1
  벤치마크는 신뢰하지 말라"는 방법론 교훈을 함께 가르치기 좋다. 히든테스트 설계·다회 반복
  검증 방법론 자체가 좋은 실습 소재.
  단, 채점 기준을 작성하고 전체 실행을 오케스트레이션한 것이 Claude 자신이라는 한계(자기
  모델군 채점의 이해상충 가능성)를 함께 짚을 것 — 작성자 본인도 이를 캐비앗으로 명시했다.
- **AX**: 프론티어 모델 구독료를 이미 지불 중이라면(예: ChatGPT+z.ai+Claude 복수 구독)
  일부 과업을 한계비용 0에 가깝게 다른 벤더로 위임할 수 있다는 구체적 비용 근거. 단, "정직하게
  모른다고 말하는 능력"이 모델별로 크게 갈린다는 점은 벤더 종속 완화 전략에 리스크 요인으로
  반영해야 한다.

## 출처

- [r/ClaudeAI — I built an MCP server so Claude Code can delegate work to GPT-5.6, DeepSeek, GLM and a local Qwen — then benchmarked all of them against Claude itself (198 runs, hidden tests)](https://old.reddit.com/r/ClaudeAI/comments/1v1tnmn/i_built_an_mcp_server_so_claude_code_can_delegate/)
