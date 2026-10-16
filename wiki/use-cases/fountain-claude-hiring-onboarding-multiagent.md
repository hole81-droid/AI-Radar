---
type: use-case
date: 2026-10-17
tools: [claude]
mechanism: [subagents]
domain: hr
task: 프런트라인 인력 채용·온보딩 심사 및 서류작업 자동화
outcome: 심사 50%↓, 온보딩 30~40%↓, 전환율 2배, HR 티켓 30%↓, 물류센터 충원 1주+→72시간
model: Sonnet·Opus
cost: 미확인
permissions: 미확인
maturity: production
evidence: claimed
importance: medium
uses: [course, ax]
source: https://claude.com/customers/fountain
---

> **공식**: Claude(Sonnet·Opus)로 subagents 기반 멀티 에이전트 오케스트레이션을 활용해 프런트라인 채용·온보딩을 수행 → 물류센터 충원 1주+→72시간 미만

## 무엇을 자동화했나

소매·물류·접객·헬스케어 등 프런트라인(현장직) 인력을 대규모로 채용·운영하는 플랫폼
Fountain이 Claude를 기반으로 지원자 심사부터 온보딩, 직원 피드백 처리까지 채용
파이프라인 전체에 에이전트를 투입했다.

## 어떻게 구성했나 (아키텍처)

- **오케스트레이터**: Fountain Copilot이 자연어 지시로 전체 설정·최적화를 조율
- **전문 서브에이전트**: 지원서 심사(적합도 매칭·라우팅) 에이전트, 문서 자동 생성
  에이전트, 고객이 Agent Studio에서 직접 만드는 커스텀 에이전트(Sonnet·Opus 기반)
- 자동화 대상 업무: 지원자 심사·서류 검토, 적합도 기반 라우팅, 자동 문서 생성,
  직원 피드백 감성 분석, 지원 티켓 처리, 실시간 후보 평가

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | Sonnet·Opus |
| 비용 | 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | production (실 고객 배포 중) |
| 근거 유형 | claimed (벤더 자체 발표 수치, 독립 검증 아님) |

## 성과와 수치 (claimed — Anthropic·Fountain 공동 발표)

- 지원자 심사 작업 50% 감소
- 온보딩 워크플로 시간 30~40% 절감
- 후보 전환율 2배
- HR 지원 티켓 30% 감소
- 물류 고객 1곳이 물류센터 전체 충원을 1주 이상에서 72시간 미만으로 단축
- 기능 개발 속도가 수주에서 수일 단위로 가속

독립 제3자 검증은 없으며, 벤더(Anthropic) 공식 고객 사례 페이지에 실린 수치임을
감안해야 한다.

## 재현 가이드 (난이도: 중)

준비물: 채용 파이프라인 단계별 데이터(지원서·적합도 기준), 오케스트레이터 역할을
맡을 상위 에이전트, 심사·문서생성·감성분석을 맡을 전문 서브에이전트.

1. 채용 프로세스를 심사·라우팅·문서화·피드백 처리 등 독립 가능한 하위 작업으로
   분해한다.
2. 각 하위 작업에 전문 서브에이전트를 배정하고, 오케스트레이터가 전체 흐름을
   자연어로 조율하게 한다.
3. 고빈도 반복 업무(서류 검토·문서 생성)부터 자동화해 효과를 빠르게 검증한다.
4. 현장 인력처럼 "충원 속도"가 핵심 KPI인 도메인에서는 처리량 지표(충원 소요시간)를
   먼저 측정한다.

## 강의·AX 활용 포인트

- HR·채용처럼 "사람을 다루는" 업무에도 멀티 에이전트 오케스트레이션이 적용되고
  있다는 사례로, [[bersin-multiagent-talent-acquisition]](멀티 에이전트 대량채용,
  2주→3일)와 같은 흐름 — 같은 패턴(오케스트레이터+전문 서브에이전트)이 여러
  벤더·고객에서 반복 관찰된다는 근거로 묶어 쓸 수 있다.
- AX 관점에서는 벤더 발표 수치(claimed)를 그대로 인용하지 말고, "심사 50%↓"
  같은 숫자가 무엇을 분모로 하는지 고객사에 재확인하라는 교훈을 덧붙일 것.

## 출처

- [Claude Customer Stories — Fountain](https://claude.com/customers/fountain)
- [2026 Agentic Coding Trends Report (Anthropic)](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf)
