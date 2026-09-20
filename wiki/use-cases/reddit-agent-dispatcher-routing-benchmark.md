---
type: use-case
date: 2026-09-19
tools: [claude-code, codex]
mechanism: [skills, subagents, mcp]
domain: dev-automation
task: 에이전트/스킬/MCP가 많아질수록 나빠지는 라우팅 문제를 해결하는 오픈소스 "Agent Dispatcher" 구축
outcome: 162개 라우팅 케이스 벤치마크에서 Claude/Codex식 라우팅이 top-1 정확도 158/162로 키워드 매칭(23/162)·자체 Jev 라우팅(143/162)을 능가
model: Claude·Codex(라우팅 엔진), 자체 "Jev" 라우터(옵션, 기본 비활성)
cost: 미확인
permissions: "역할 전환·도구 감지가 곧 사용 권한 부여를 의미하지 않는다"— 권한은 별도로 사용자·호스트가 통제한다고 명시
maturity: prototype
evidence: measured
importance: low
uses: [course]
source: https://github.com/nahid-sparktales/agent-dispatcher
---

> **공식**: 27개 역할·79개 로컬 스킬·31개 외부 스킬·19개 MCP 서버를 보유한 오픈소스
> "Agent Dispatcher"(skills+subagents+mcp)로 매 요청마다 "가장 작지만 신뢰할 수 있는
> 능력 스택"만 골라 로딩 → 자체 162케이스 라우팅 벤치마크에서 Claude/Codex식 라우팅이
> top-1 정확도 97.5%(158/162)로 키워드 매칭(23/162) 대비 압도적 우위를 실측.

## 무엇을 자동화했나

Claude Code 등에서 AGENTS.md·SKILLS 파일을 잘 구성하면 성능이 크게 오르지만,
**역할·스킬·도구·지시문이 늘어날수록 오히려 컨텍스트 과부하·중복 지시·잘못된
라우팅**이 발생하는 역효과가 있다는 문제의식에서 출발한 오픈소스 프로젝트다.
"요청 → 전문 역할 배정 → 컨텍스트 계획 → 실행 → 검증 → 결과" 파이프라인을 통해
매 요청마다 필요한 최소한의 스킬·파일·도구만 로딩하도록 설계했다.

## 어떻게 구성했나 (아키텍처)

- **역할(role)**: 결과를 책임지는 단위. **스킬(skill)**: 재사용 가능한 방법론
  (예: `systematic-debugging`, `browser-verification`, `database-migrations`).
  **MCP/도구**: 능력 제공. **레시피(recipe)**: 여러 역할을 가로지르는 워크플로 제안.
- 초기 구성: 27개 역할, 로컬 스킬 79개·외부 스킬 31개, 레시피 8개, MCP 서버 19개,
  탐지 시그널 50개 — 전부 확장 가능.
- 설계 원칙: "스킬은 에이전트보다 좁아야 한다" — 스킬이 통째로 엔지니어 역할을
  재현하려 하면 안 됨.
- 자체 라우터 "Jev" 옵션도 구현했으나, 벤치마크에서 Claude/Codex식 라우팅에
  못 미쳐 **기본값이 아닌 옵션으로만 유지**.

## 벤치마크 데이터

| 지표 | 키워드 매칭 | Jev(자체 라우터) | Claude/Codex식 라우팅 |
|---|---|---|---|
| Agent top-1 | 23/162 | 143/162 | **158/162** |
| Acceptable route | 29/162 | 154/162 | **162/162** |
| Obvious top-1 | 9/54 | 52/54 | **54/54** |
| Near-neighbour top-1 | 6/54 | 49/54 | **53/54** |
| Ambiguous top-1 | 3/27 | 17/27 | **25/27** |
| Negative top-1 | 5/27 | 25/27 | **26/27** |
| Skill precision/recall | .31/.56 | .68/.71 | **.74/.90** |
| Tool precision/recall | .15/.23 | .65/**.97** | **.69**/.95 |
| 권한 설계 | "역할·도구 감지가 사용 권한을 의미하지 않음" — 인가는 사용자·호스트 권한 시스템이 별도 통제 |
| 성숙도 | prototype (오픈소스 초기 공개, 저자 자체 벤치마크) |

## 성과와 수치

- **실측(measured)**: 저자 자신이 구성한 162케이스 라우팅 벤치마크 기준 수치.
  제3자 독립 검증은 아직 없음(공개 직후 커뮤니티 피드백 수집 단계).
- 핵심 발견: 라우팅 규모(스킬·역할 수)가 커질수록 **단순 키워드 매칭은 급격히
  무너지고**, LLM 기반 라우팅(Claude/Codex식)이 자체 경량 라우터보다도 우위를
  보였다 — "라우팅 자체도 프론트 모델에 맡기는 편이 낫다"는 시사점.

## 재현 가이드

- **난이도**: 중 (역할·스킬·MCP 정의 체계를 자기 조직 구조에 맞게 재구성 필요)
- **준비물**: Claude Code 또는 Codex 접근권, 기존에 흩어진 AGENTS.md/SKILLS
  정의, MCP 서버 목록
- **핵심 단계**:
  1. 보유한 역할·스킬·도구·MCP 서버를 목록화(레포의 27역할·79+31스킬·19 MCP
     구조를 참고 템플릿으로 활용 가능)
  2. 요청 유형별 라우팅 벤치마크 케이스(예: 명확한 요청/모호한 요청/부정 케이스)를
     직접 만들어 자체 조직 기준으로 라우팅 정확도 측정
  3. "스킬은 에이전트보다 좁게" 원칙으로 스킬 범위를 재정의해 중복 제거
  4. 권한(누가 이 도구를 실제로 쓸 수 있는가)은 라우팅 로직과 분리해 별도 통제

## 강의·AX 활용 포인트

- **강의**: 스킬/서브에이전트/MCP 규모가 커질 때 발생하는 "컨텍스트 과부하"
  문제와, 그 해법으로 "라우팅 자체를 LLM에 맡기되 범위는 최소화"하는 설계
  패턴을 가르치는 소재 — 실측 벤치마크 표를 그대로 수업 자료로 활용 가능.
- **AX**: 사내에 스킬·에이전트가 늘어나며 관리가 어려워지는 조직이라면, 이
  프로젝트의 "역할/스킬/도구/레시피" 4계층 분리 모델을 자체 거버넌스 설계의
  참고 프레임으로 검토할 만하다.

## 출처

- [GitHub — nahid-sparktales/agent-dispatcher](https://github.com/nahid-sparktales/agent-dispatcher)
- [Reddit r/ClaudeAI — 공개 게시글](https://www.reddit.com/r/ClaudeAI/comments/1wku51x/agent_dispatcher_automatically_routes_tasks_to/)
