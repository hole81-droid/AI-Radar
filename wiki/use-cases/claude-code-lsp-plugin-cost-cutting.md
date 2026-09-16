---
type: use-case
date: 2026-09-16
tools: [claude-code]
mechanism: [subagents]
domain: dev-automation
task: 멀티에이전트(오케스트레이터+개발+리뷰어) CRM 빌더의 토큰·비용 최적화 플러그인 비교
outcome: LSP 도입으로 비용 13%↓·토큰 12%↓·API 호출 24%↓ (grep 호출 340→189회로 감소)
model: 미확인
cost: 미확인 (상대적 절감률만 공개, 절대 비용 미공개)
permissions: 미확인
maturity: prototype
evidence: measured
importance: medium
uses: [course, ax]
source: https://www.reddit.com/r/ClaudeAI/comments/1whsbju/i_tested_3_more_claude_code_plugins_to_cut_costs/
---

> **공식**: Claude Code의 멀티에이전트(오케스트레이터+개발+리뷰어) 하네스에 네이티브
> LSP(코드 정밀 탐색) 지원을 붙여 → grep 기반 탐색을 대체 → 비용 13%·토큰 12%·API
> 호출 24% 감소

## 무엇을 자동화했나

내부 CRM 빌더를 오케스트레이터+개발 에이전트+리뷰어로 구성된 멀티에이전트 Claude
Code 하네스로 만들던 개발자가, 토큰 소모의 진짜 병목이 "생성된 코드"가 아니라
"캐시 읽기(cache reads)"라는 진단 위에서 비용 절감 플러그인 3종(LSP·Graphify·RTK)을
같은 프로젝트에 순서대로 적용해 실측 비교했다.

## 어떻게 구성했나 (아키텍처)

- **LSP**: Claude Code 네이티브 LSP(Language Server Protocol) 지원을 켜서, grep으로
  수백 건을 훑는 대신 정밀 코드 탐색(정의로 이동, 참조 찾기 등)을 쓰게 함. 단
  서브에이전트는 LSP 사용법을 모르기 때문에 **최상위(오케스트레이터) 레벨에서만**
  활성화하고 하네스 프롬프트에서는 제외.
- **Graphify**(비교 대상, 채택 안 함): 정적 분석 + LLM 패스로 프로젝트 의존성 그래프
  (임포트·함수 호출·심볼 사용)를 구축, 동의어까지 이해. LLM 패스의 오버헤드가 이득을
  상쇄해 채택 안 함.
- **RTK**(비교 대상, 채택 안 함): Claude CLI를 래핑해 셸 출력을 컨텍스트 진입 전
  압축. 이 프로젝트는 Bash 출력이 토큰 주요 원천이 아니어서 효과 미미.
- 이전 포스트에서 이미 채택한 **Ponytail**(에이전트가 코드를 덜 쓰고 리뷰어와의
  핑퐁을 줄이도록 유도)과 LSP를 최종 조합으로 채택.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 (절대 금액 비공개, 상대 절감률만) |
| 권한 | 미확인 |
| 성숙도 | prototype (개인 사이드 프로젝트) |

## 성과와 수치 (evidence: measured)

- LSP 적용 후 **비용 13%↓, 토큰 12%↓, API 호출 24%↓**.
- grep/rg 호출 **340회 → 189회**(44%↓), 대신 정밀 LSP 조회 55회로 대체.
- 조회가 적고 정밀해지며 재작업(rework)도 함께 감소했다고 보고.
- Graphify는 오히려 기준선보다 비용이 소폭 증가, RTK는 이 워크플로에서 효과 거의 없음.

## 재현 가이드

- **난이도**: 하 (Claude Code 설정 변경 수준, 별도 인프라 불필요).
- **준비물**: 멀티에이전트 Claude Code 하네스(오케스트레이터+서브에이전트 구조),
  전/후 비교를 위한 토큰·API 호출 로그.
- **핵심 단계**:
  1. 먼저 토큰 소모가 "생성"인지 "캐시 읽기/탐색"인지 진단(이 사례는 후자였음).
  2. 탐색 병목이면 grep 대신 LSP 같은 정밀 탐색 도구를 최상위 레벨에만 붙인다
     (서브에이전트는 LSP를 모를 수 있으므로 위임 대상에서 제외).
  3. 플러그인 후보를 한 번에 하나씩 같은 프로젝트에 적용해 A/B 비교(동시 적용 시
     효과 분리 불가).
  4. 비용·토큰·API 호출·grep 횟수 등 여러 지표를 함께 봐야 "정밀 조회가 재작업까지
     줄였는지" 같은 2차 효과를 놓치지 않는다.

## 강의·AX 활용 포인트

- **강의**: "에이전트 비용 최적화는 프롬프트 튜닝이 아니라 툴 체계(정밀 탐색 도구
  추가) 문제일 수 있다"는 것을 보여주는 구체 사례 — 루프 엔지니어링/하네스 엔지니어링
  강의의 "Sensor·Loop 계층 최적화" 파트에 바로 쓸 수 있다([[loop-engineering]] 참조).
- **AX**: 멀티에이전트 파이프라인을 대규모로 운영하는 조직이라면, 플러그인 도입
  전에 "무엇이 병목인지"부터 진단(코드 생성 vs 탐색 vs 셸 출력)한 뒤 그에 맞는
  도구를 고르는 순서가 비용 대비 효과를 가른다는 근거로 쓸 수 있다. 모든 절감
  플러그인이 항상 이득은 아니라는 점(Graphify 역효과)도 함께 인용할 것.

## 출처

- [Reddit r/ClaudeAI — I tested 3 more Claude Code plugins to cut costs](https://www.reddit.com/r/ClaudeAI/comments/1whsbju/i_tested_3_more_claude_code_plugins_to_cut_costs/)
