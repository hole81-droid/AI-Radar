---
type: use-case
date: 2026-09-28
tools: [claude, claude-code]
mechanism: [skills, mcp]
domain: dev-automation
task: Claude가 생성하는 프론트엔드 UI가 전부 비슷해 보이는 "AI 슬롭" 현상을 프롬프트·스킬로 벗어나기
outcome: 정성적 개선(타이포그래피·색상 전략 변경으로 즉시 체감), 정량 수치는 없음
model: Claude(구체 모델 버전 미확인, Claude Code 포함)
cost: 미확인
permissions: 미확인
maturity: production
evidence: anecdotal
importance: medium
uses: [course]
source: https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics
---

# Claude "AI 슬롭" 프론트엔드 탈출법 — 컴포넌트 라이브러리 MCP 연동 + /frontend-design 스킬

> **공식**: Claude(Claude Code)로 skills+mcp를 활용해 프론트엔드 UI 생성을 수행 →
> "AI 티가 나는" 획일적 디자인에서 벗어나 프로덕션급 UI 생성(정성적 개선, 정량 미확인)

## 무엇을 자동화했나

r/ClaudeAI 등 커뮤니티에서 반복적으로 나오는 질문 "다들 어떻게 Claude로 제네릭한
'AI 슬롭' 말고 예쁜 UI를 뽑아내나요?"에 대한 답으로, Anthropic이 직접 공개한
**Frontend Aesthetics 쿡북**(2025-10, Prithvi Rajasekaran 작성)의 처방과 이후 나온
Claude Code 전용 `/frontend-design` 스킬이 커뮤니티 표준 답변으로 자리잡았다.
2026-09-28 스캔 시점에도 관련 스레드가 활발히 재논의되고 있어, 아직 유효한
실전 기법으로 판단해 반영한다.

## 어떻게 구성했나 (아키텍처)

**문제의 원인 — 분포적 수렴(distributional convergence)**: LLM은 샘플링 시
학습 데이터의 통계적 중심에서 토큰을 뽑는다. 웹 UI 학습 데이터에는 "누구에게나
무난한" 안전한 디자인 선택(Inter 폰트, 균등 분산된 색상 등)이 압도적으로 많아,
별도 지시가 없으면 Claude는 이 무난한 중심값으로 수렴한다 — 이것이 "AI 슬롭"
아웃풋의 정체다.

**대응 3가지**:
1. **타이포그래피**: Arial·Inter·Roboto 같은 기본값 대신 개성 있는 폰트를 명시
   지정("avoid Inter and Roboto"). 시스템 프롬프트에 금지 목록을 넣는 것만으로
   즉시 결과가 달라진다고 쿡북은 설명.
2. **색상 전략**: 색을 고르게 분산시키기보다, 지배색 하나 + 날카로운 강조색 조합
   같은 "확실한 방향이 있는" 팔레트를 요구한다. IDE 테마·특정 문화적 미감에서
   영감을 가져오라는 지시도 효과적.
3. **컴포넌트 라이브러리 MCP 연동**: Claude가 컴포넌트를 매번 손으로 새로 만들면
   결과물이 "비슷비슷하지만 미묘하게 다른" 슬롭이 된다. 실제 컴포넌트 라이브러리를
   MCP로 연결해 Claude가 기존 컴포넌트를 그대로 갖다 쓰게 하면 이 문제가 줄어든다.
4. **`/frontend-design` 스킬**: 위 원칙들을 매번 프롬프트에 다시 적지 않고 Claude
   Code 스킬로 패키징해 호출만으로 재사용하는 커뮤니티 구현체가 나와 있다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인(원문에 특정 버전 명시 없음, Claude/Claude Code 전반) |
| 비용 | 미확인 |
| 권한 | 미확인 |
| 성숙도 | production(Anthropic 공식 쿡북 + 커뮤니티 스킬 다수 배포) |
| 근거 수준 | anecdotal(공식 원칙 제시, 개별 사용자 체감 효과는 정량화되지 않음) |

## 성과와 수치

Anthropic 쿡북·커뮤니티 스레드 모두 "즉시 개선된다"는 정성적 서술뿐, 이전/이후를
비교하는 정량 지표(전환율, 사용자 만족도 등)는 확인되지 않았다. "타이포그래피·색상
지시만으로 결과가 확 달라진다"는 것은 다수 사용자가 공통으로 보고하는 체감이지만,
측정된 수치는 아니다.

## 재현 가이드

- **난이도**: 하(프롬프트 수준) ~ 중(MCP 컴포넌트 라이브러리 연동까지 하면)
- **준비물**: Claude 또는 Claude Code, (선택) MCP로 연결할 컴포넌트 라이브러리,
  (선택) 커뮤니티 배포 `/frontend-design` 스킬
- **핵심 단계**:
  1. 시스템 프롬프트·CLAUDE.md에 "Inter·Roboto·Arial 금지" 같은 구체적 배제 지시를
     넣는다.
  2. "지배색 하나 + 강조색" 같은 명확한 색상 전략을 지시한다(균등 분산 팔레트 요구
     금지).
  3. 가능하면 실제 사용 중인 컴포넌트 라이브러리를 MCP로 연결해 Claude가 새로
     만들지 않고 재사용하게 한다.
  4. 반복 사용할 프로젝트라면 위 규칙들을 스킬로 패키징해 재사용한다.

## 강의·AX 활용 포인트

- **강의**: "AI가 만든 디자인은 다 비슷해 보인다"는 현상을 모델의 한계가 아니라
  샘플링 원리(분포적 수렴)로 설명할 수 있는 좋은 소재 — 프롬프트 엔지니어링 교육에서
  "왜 이렇게 지시해야 하는가"의 원리를 함께 가르칠 수 있다.
- **AX**: 사내에서 Claude로 프로토타입 UI를 뽑을 때 CLAUDE.md에 위 배제 지시·색상
  전략을 표준 규칙으로 박아두면, 여러 팀이 동시에 써도 "누가 만들어도 비슷한 결과"를
  줄일 수 있다. 단 Anthropic 쿡북 자체는 2025-10 발행으로 오래된 자료이므로, 최신
  모델(Sonnet/Opus 5.5)에서도 같은 원칙이 유효한지는 팀 내 재검증이 필요하다.

## 출처

- [Anthropic Claude Cookbook — Prompting for frontend aesthetics](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics)
- [Claude by Anthropic — Improving frontend design through Skills](https://claude.com/blog/improving-frontend-design-through-skills)
