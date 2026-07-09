---
type: use-case
date: 2026-06-17
tools: [claude-code]
mechanism: [cli-pipeline]
domain: research
task: Claude Code가 소재과학 연구자와 협업해 10만 개 GPU 계산 실험을 무인 배치 제출·모니터링·결과 요약
outcome: 결과 모델(CSP-MACE-Å)이 DFT 계산 대비 1만 배 빠르고 정확도는 동등, Meta UMA-OMC 모델 능가 (자체 보고)
model: 미확인 (Claude Code 기반, 세부 모델명 비공개)
cost: 미확인 (세션 기반 예산 상한·동시 실행 수 제한만 공개)
permissions: 미확인
maturity: production
evidence: claimed
importance: high
uses: [course, ax]
source: https://anycloud.sh/blog/angstrom-case-study/
---
# Ångstrom — Claude Code로 10만 GPU 실험 무인 운영, 소재 AI 모델 성능 경신

> **공식**: Claude Code로 자체 `anycloud` CLI(멀티클라우드 스팟 GPU 오케스트레이션)를 활용해 약 10만 개 GPU 계산 실험의 배치 제출·모니터링·결과 요약을 수행 → 결과 모델이 DFT 대비 1만 배 빠르고 Meta UMA-OMC 성능 능가 (자체 보고)

## 무엇을 자동화했나

소재과학 스타트업 Ångstrom이 연구자와 Claude Code를 결합한 실험 자동화 루프로 대규모 계산
실험을 수행한 사례 연구. 연구자가 논의한 계산 실험을 Claude Code가 GPU 작업으로 전환해
배치 제출하고, 상태를 모니터링하며, 완료된 결과를 다운로드해 플롯·요약까지 자동 생성했다.

## 어떻게 구성했나 (아키텍처)

- Claude Code가 연구진이 원래 수동으로 쓰던 것과 **동일한** `anycloud` CLI·클라우드 설정을
  그대로 활용해, 약 10만 개의 GPU 작업을 멀티클라우드 스팟 인스턴스에서 실행.
- **세션 기반 예산 제한**(동시 실행 작업 수 제한, 일일 지출 상한)을 걸어 에이전트가 야간에도
  자율적으로 실험을 관리하되 지출이 통제되도록 설계.
- 결과 다운로드 → 플롯 생성 → 요약까지 파이프라인 전체를 에이전트가 처리.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Claude Code, 세부 모델명 비공개) |
| 비용 | 미확인 — 예산 상한 존재만 공개, 실제 지출액 비공개 |
| 권한 | 미확인 |
| 성숙도 | production (실제 R&D 파이프라인에 적용, GPU 10만 건 규모) |

## 성과와 수치

- **자체 보고**: 결과 모델 CSP-MACE-Å가 DFT(밀도함수이론) 계산 대비 **1만 배** 빠르면서 정확도는
  DFT와 동등한 수준을 달성, Meta의 UMA-OMC 모델을 능가했다고 발표.
- GPU 작업 규모(~10만 건)는 원문에 명시된 수치이나, 외부 검증은 없어 **주장(claimed)** 수준으로
  분류. 다만 R&D 성과 지표(속도·정확도 비교) 자체는 회사가 실측치로 제시.

## 재현 가이드

- **난이도**: 상 (멀티클라우드 GPU 오케스트레이션 인프라·자체 CLI 필요)
- **준비물**: Claude Code, 멀티클라우드 스팟 GPU 접근권, 예산 상한 설정이 가능한 자체 CLI/오케스트레이터
- **핵심 단계**:
  1. 연구자가 수동으로 쓰는 CLI·워크플로를 에이전트가 그대로 재사용할 수 있게 정비
  2. 동시 실행 수·일일 지출 상한 등 세션 기반 예산 안전장치를 먼저 설계
  3. 배치 제출 → 모니터링 → 결과 다운로드 → 요약까지 파이프라인화
  4. 야간·무인 실행을 허용하되 예산 상한으로 폭주를 방지

## 강의·AX 활용 포인트

- R&D 영역에서 코딩 에이전트를 "실험 운영자"로 쓰는 구체적 사례 — 개발 업무를 넘어선 코딩
  에이전트 활용 범위 확장의 좋은 예시.
- 예산 상한(동시 실행 수, 일일 지출 한도) 설계는 무인 장시간 실행 시 재현 핵심 안전장치로
  다른 자동화 사례(예: [[claude-code-goal-routines-nightly-quality]])와 공통 패턴으로 강의 가능.
- AX 관점: R&D·실험 집약 업종(제약, 소재, 반도체)의 에이전트 도입 근거 자료로 인용 가치가 높다.

## 출처

- [Ångstrom 사례 연구 — anycloud.sh](https://anycloud.sh/blog/angstrom-case-study/)
