---
type: use-case
date: 2026-10-30
tools: []
mechanism: [vibe-coding]
domain: dev-automation
task: 레거시 코드의 98%를 24개월 내 AI로 리팩터링(소규모 팀에 무제한 토큰 제공)
outcome: 성과 미공개 — 목표만 공개(24개월 내 98%, 4주 검증)
model: 미확인
cost: 토큰 예산 미공개(무제한 제공이라고만 보도)
permissions: 미확인
maturity: pilot
evidence: claimed
importance: medium
uses: [ax]
source: https://fortune.com/2026/10/30/cisco-president-jeetu-patel-gen-z-27-ye
---

> **공식**: [미확인 AI 코딩 도구]로 [소규모 팀에 무제한 토큰을 주는 방식]을 활용해 [레거시 코드 리팩터링]을 수행 → [24개월 내 98% 교체를 목표, 실측 성과는 미공개]

## 무엇을 자동화했나
Cisco 사장 겸 CPO Jeetu Patel이 27세 엔지니어 Paddy Krishnamurthy(전 창업자)에게 **토큰 한도 없이** AI 도구를 쓰게 하고 레거시 코드 리팩터링을 맡겼다. 목표는 24개월 내 레거시 코드의 98%. Fortune 10-30 소규모 라운드테이블 발언 기반(2차 요약 경유, Fortune 원문 미열람). HN 318점.

## 어떻게 구성했나 (아키텍처)
공개된 구조는 인력 설계뿐이다 — 2~3명 팀(보도마다 다름), 경력 운영자·외부 시각 시스템 사고자·AI 네이티브 창업가의 3분할, 4주 안에 방법을 증명하게 한 뒤 본 작업 착수. 도구·에이전트 구성은 보도에 없다.

## 벤치마크 데이터
| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인(무제한 토큰, 예산 비공개) |
| 권한 설계 | 미확인 |
| 성숙도 | pilot(4주 검증 단계) |

## 성과와 수치
**주장**: 98%·24개월은 목표치이지 달성치가 아니다. 코드베이스 규모, 측정 방식, 성과는 모두 미공개. 증거 수준 `claimed`.

## 재현 가이드
난이도: 중. 준비물: 리팩터링 대상 범위 정의, 회귀 테스트, 토큰 예산 상한 정책. 핵심 단계: ① 소규모 팀 지정 ② 토큰 무제한 대신 4주 검증 기준 사전 합의 ③ 테스트 통과를 완료 조건으로 ④ 주 단위 성과 지표(변경 줄 수·테스트 통과율) 공개.

## 강의·AX 활용 포인트
"토큰 예산을 한도 없이 푸는 대신 사람을 소수·고숙련으로 좁힌다"는 운영 모델. 실측 전이므로 AX 근거로는 낙관 신호로만 쓰고 단정하지 않는다.

## 출처
- Fortune 2026-10-30(원문 미열람), 2차 요약 [aiweekly](https://aiweekly.co/alerts/cisco-gives-27-year-old-engineer-unlimited-ai-tokens-to-rewrite-98-of-legacy)
