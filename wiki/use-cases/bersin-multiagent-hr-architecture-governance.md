---
type: use-case
date: 2026-10-08
tools: []
mechanism: [subagents]
domain: hr
task: 멀티 에이전트 HR 시스템(수십~수백 개 에이전트 공존)의 오케스트레이션·거버넌스 설계
outcome: ISS North America·Great Wolf Resorts·Costa Coffee·DBS Bank·ASICS·Mastercard 등이 "거버넌스를 먼저 설계"하는 방식으로 멀티 에이전트 혼란을 피했다고 분석가가 소개 (벤더·고객사 보고치 전달, 측정치 비공개)
model: 미확인
cost: 미확인
permissions: 미확인
maturity: production
evidence: claimed
importance: medium
uses: [ax, course]
programs: [AI Leader Program (팀장), AI Agent Service — Essence for PO]
source: https://joshbersin.com/2026/10/introducing-the-leaders-guide-to-multi-agent-ai-architecture/
---

# 멀티 에이전트 HR 아키텍처 — "오케스트라에는 지휘자가 필요하다"

> **공식**: 여러 벤더의 멀티 에이전트(HR 2030 Multiagent HR Technology Stack 기준 8개
> 수퍼에이전트·150개 이상 세부 에이전트)를 조율하는 **거버넌스 프레임워크**로 대량의 HR
> 에이전트 운영을 통제 → ISS North America·Great Wolf Resorts·Costa Coffee·DBS Bank·
> ASICS·Mastercard가 거버넌스 설계를 앞세워 성공적으로 도입 (애널리스트가 전한 사례, 독립 검증 없음)

> **출처 유형**: **아티클** — Josh Bersin(HR 애널리스트) 블로그, 2026-10-08.
> **이해관계 명시 필요**: 저자는 HR 리서치·자문 사업(Josh Bersin Company, HR 2030 연구)을
> 운영하며, 소개된 벤더·고객사가 자문 대상일 수 있다. 수치·사례는 전부 저자가 전달한
> 2차 정보로, 측정 방법·표본은 공개되지 않았다. [[bersin-multiagent-talent-acquisition]]과
> 같은 패턴의 출처 — 같은 주의사항이 적용된다.

## 무엇을 자동화했나

개별 업무 자동화가 아니라 **"여러 에이전트가 동시에 돌아가는 조직을 어떻게 설계·통제할
것인가"**를 다룬다. 저자는 오케스트라 비유를 쓴다 — 악기(에이전트)가 강력해도 악보와
지휘자(거버넌스) 없이는 음악이 아니라 소음이 된다.

핵심 주장은 멀티 에이전트 도입이 **IT 프로젝트가 아니라 HR 리더십이 직접 내려야 하는
비즈니스 의사결정**이라는 것 — "에이전트가 실패했을 때 누가 책임지는가"를 미리 정해야
한다는 전제다.

## 어떻게 구성했나 (아키텍처)

저자가 제시하는 **6가지 리더십 의사결정**:

| 결정 영역 | 내용 |
|---|---|
| 오케스트레이션·거버넌스 | 에이전트들이 서로 어떻게 조율되는가 |
| 모니터링·보안 | 감시·오버사이트 메커니즘 |
| 규칙·데이터 | 에이전트가 무엇을 근거로 판단하는가 |
| 사람 통제점(Human Control Points) | 어디서 사람이 의사결정권을 유지하는가 |
| 공유 역량(Shared Capabilities) | 공통 라이브러리로 묶을 기능 범위 |
| Build/Buy/Extend | 기술 소싱 전략 |

구조적 뼈대는 **"HR 2030 Multiagent HR Technology Stack"** — HR 기능 전체를 **8개
수퍼에이전트와 150개 이상의 세부 에이전트**로 매핑한 저자의 유료 리서치 프레임워크다.

**사례로 언급된 기업**: ISS North America, Great Wolf Resorts, Costa Coffee, DBS Bank,
ASICS, Mastercard — 모두 "거버넌스 설계를 먼저 했다"는 접근으로 소개됐으나, 각 기업이
구체적으로 무엇을 했는지 세부 내용은 유료 리포트(HR 2030) 안에 있어 본문에서는 확인되지
않는다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (벤더별 상이) |
| 비용 | 미확인 |
| 권한 설계 | 6개 결정 영역 중 "Human Control Points"로 프레임만 제시, 구체 구현은 미확인 |
| 성숙도 | production (6개 기업이 실사용 중이라고 소개됨) |
| 출처 유형 | 아티클(애널리스트), 사례는 벤더·고객사 보고치 전달 |

## 성과와 수치

**정량 수치가 거의 없다.** 저자는 6개 기업이 "거버넌스를 먼저 설계해 성공했다"고만 소개하고,
시간 단축·비용 절감 같은 구체적 측정치는 본문에 공개하지 않았다(유료 HR 2030 리포트에 있을
가능성). [[bersin-multiagent-talent-acquisition]]이 "2주→3일, H&M 리텐션 30%"처럼 구체
수치를 전달한 것과 대비된다 — **이번 글은 프레임워크 자체가 산출물이고, 수치는 향후 확인
대상**으로 기록한다.

## 재현 가이드

**난이도: 상** — 기술 도입보다 조직 거버넌스 설계가 본체라 선례를 그대로 복제하기 어렵다.

**준비물**: HR·IT 공동 거버넌스 팀, 에이전트 인벤토리(무엇이 몇 개 돌고 있는지 파악),
데이터·권한 정책.

**핵심 단계**
1. 지금 조직에 몇 개의 에이전트가 이미 돌고 있는지부터 인벤토리를 만든다 — 저자의 전제는
   "이미 통제 범위를 넘어선 조직이 많다"는 것이다.
2. 6개 결정 영역(오케스트레이션·모니터링·데이터·사람통제점·공유역량·소싱전략)을 HR
   리더십이 직접 의사결정 테이블에 올린다 — IT에만 맡기지 않는다.
3. "에이전트가 실패하면 누가 책임지는가"를 사람 통제점 설계 단계에서 명시적으로 정한다.

## 강의·AX 활용 포인트

- **AI Leader Program (팀장)**: 멀티 에이전트가 늘어나는 조직에서 "거버넌스를 기술팀에만
  맡기지 않는다"는 원칙을 팀장급 의사결정 프레임으로 가르칠 수 있다.
- **AI Agent Service — Essence for PO**: 6개 결정 영역을 권한·승인 설계(`AGT-05`~`06`)
  실습의 상위 체크리스트로 활용 가능.
- **한계**: 정량 성과가 없고, 소개된 기업 사례의 세부 내용이 유료 리포트 뒤에 있어 이 글
  자체로는 "무엇을 어떻게 했는지" 재현할 수 없다. 프레임워크의 존재와 방향성 참고 자료로만
  쓸 것.

## 출처

- 원문: https://joshbersin.com/2026/10/introducing-the-leaders-guide-to-multi-agent-ai-architecture/
- 관련: [[bersin-multiagent-talent-acquisition]]
