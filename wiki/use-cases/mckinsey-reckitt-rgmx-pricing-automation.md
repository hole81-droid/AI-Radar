---
type: use-case
date: 2026-08-06
tools: [mckinsey-rgmx]
mechanism: [cron-routines]
domain: ops
task: 소비재 기업의 가격·프로모션·제품구성·거래투자 의사결정을 데이터 기반으로 자동화
outcome: 2021년 이후 누적 매출 개선 $100M+, 35개 시장 전개, 순매출 100% 커버
model: 미확인
cost: 미확인
permissions: 미확인
maturity: production
evidence: claimed
importance: medium
uses: [ax]
source: https://www.mckinsey.com/industries/consumer-packaged-goods/how-we-help-clients/how-ai-enabled-execution-became-reckitts-tenfold-game-changer
---

# McKinsey × Reckitt — AI 기반 매출성장관리(RGM) 플랫폼 RGMx로 가격·프로모션 자동화

> **공식**: McKinsey의 RGMx(AI 기반 매출성장관리 플랫폼)로 데이터 기반 시나리오 분석을
> 활용해 소비재 기업 Reckitt의 가격·프로모션·제품구성·거래투자 의사결정을 수행 →
> 2021년 이후 누적 매출 개선 $100M+, 35개 시장 전개

> **메커니즘 태그 불일치 안내**: CLAUDE.md의 mechanism 통제 어휘(skills·subagents·mcp·
> hooks·cron-routines·prd-driven·record-replay·browser-agent·cli-pipeline·second-brain·
> vibe-coding)는 Claude Code·Codex류 에이전틱 코딩 도구를 전제로 설계되어 있다. 이 사례는
> 코딩 에이전트가 아니라 **McKinsey의 자체 예측분석 플랫폼(RGMx)**이라 정확히 들어맞는
> 태그가 없다 — "지속적으로 돌아가며 의사결정을 갱신하는 운영형 시스템"이라는 점에서
> 가장 가까운 `cron-routines`를 근사치로 선택했다. AI 코딩 에이전트 사례가 아님을
> 감안해 참고할 것.

## 무엇을 자동화했나

글로벌 소비재 기업 Reckitt(임직원 4만 명+, 125개국)이 McKinsey와 함께 매출성장관리
(Revenue Growth Management, RGM) — 가격·프로모션·제품구성(assortment)·거래투자
의사결정 — 를 스프레드시트 기반의 반응적·파편화된 방식에서 AI 기반 예측·데이터 주도
방식으로 전환했다. McKinsey의 기사 제목은 이를 "10배(tenfold) 게임체인저"로 표현하지만,
원문에서 정확히 "무엇이 10배가 됐는지"의 구체적 지표는 확인하지 못했다(정직성 규칙에
따라 미확인으로 표기 — 확인 가능한 것은 아래 $100M+ 누적 매출 개선 수치뿐).

## 어떻게 구성했나 (아키텍처)

- **플랫폼**: McKinsey의 모듈형 AI 기반 RGM 플랫폼 **RGMx**. 사람이 수작업으로 처리하기
  불가능한 규모의 데이터셋을 분석해 가격·프로모션·제품구성·거래투자 시나리오 분석을
  수행한다.
- **도입 방식**: People·Process·Technology 프레임워크로 조직 변화를 병행 — 실제 데이터로
  현업 팀을 교육하고, 분석이 통합되도록 워크플로우를 재설계하고, 실제 현안을 푸는 도구로
  설계.
- **전개 범위**: 2021년 시작, 미국·캐나다·영국·독일·호주 등 주요 시장에 우선 적용 후
  총 35개 시장으로 확대. 신흥시장에는 경량화 버전 "RGM Core"를 별도 적용.
- **규모**: 수천 명의 직원 교육, 순매출(net revenue)의 100%가 이 플랫폼의 커버리지 안에
  들어옴.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델/엔진 | 미확인 (McKinsey 자체 RGMx 플랫폼, 기반 모델명 비공개) |
| 비용 | 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | production (2021년부터 35개 시장 실전 운영 중) |

## 성과와 수치

- **주장(McKinsey 자체 클라이언트 케이스 스터디 기준)**: 2021년 이후 누적 **매출 개선
  $100M+**, 35개 시장 전개, 순매출 100% 커버리지, 수천 명 교육.
- 원문 제목의 "10배(tenfold)" 표현은 확인 가능한 본문 어디에도 구체적 대상 지표가
  명시되어 있지 않아 **미확인**으로 남긴다 — 매출 개선폭인지, 의사결정 속도인지, 분석
  범위인지 특정할 수 없었다.
- 벤더(McKinsey)가 자사 컨설팅·플랫폼 성과를 홍보하는 케이스 스터디이므로 독립 감사
  수치가 아니라는 점을 감안해 `evidence: claimed`로 분류했다.

## 재현 가이드

- **난이도**: 상 (조직 전체 RGM 프로세스 재설계 + 대형 컨설팅 파트너십 규모)
- **준비물**: 가격·프로모션·거래 데이터의 통합·정제 체계, 조직 변화관리(People·Process·
  Technology) 역량, 시장별 단계적 롤아웃 계획
- **핵심 단계**:
  1. 기존 가격·프로모션 의사결정이 반응적·파편화되어 있는지 진단
  2. 소수 핵심 시장에서 파일럿(가격·프로모션·제품구성·거래투자 시나리오 분석)
  3. 실제 데이터로 현업 팀을 교육하며 워크플로우 자체를 재설계(도구만 얹지 않음)
  4. 신흥시장 등 자원이 적은 지역엔 경량화 버전으로 커버리지 확대
  5. 순매출 커버리지·교육 인원 등 운영 지표로 확산 진척을 추적

## 강의·AX 활용 포인트

- **AX**: "AI 코딩 에이전트"가 아닌 "엔터프라이즈 예측분석 AI 플랫폼" 도입의 참고 사례.
  코딩 에이전트 중심인 이 위키의 다른 케이스들과 대비해, AX 전략에서 두 축(생산성
  자동화용 코딩 에이전트 vs 의사결정 자동화용 예측분석 플랫폼)을 구분해 설명할 때 좋은
  대조군이 된다.
- **강의**: "10배" 같은 헤드라인 수치가 본문에서 구체적으로 뒷받침되지 않는 사례로,
  벤더 케이스 스터디를 읽을 때 헤드라인과 본문 수치를 구분해서 봐야 한다는 비판적
  읽기 실습 소재로 쓸 수 있다.

## 출처

- [McKinsey — How AI-enabled execution became Reckitt's 'tenfold game changer'](https://www.mckinsey.com/industries/consumer-packaged-goods/how-we-help-clients/how-ai-enabled-execution-became-reckitts-tenfold-game-changer)
