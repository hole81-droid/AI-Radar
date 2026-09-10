---
type: use-case
date: 2026-09-09
tools: []
mechanism: [cli-pipeline]
domain: research
task: 35년간 미해결이던 RSA-260(862비트) 암호 인수분해 챌린지를 GPU 가속 알고리즘 재작성으로 돌파
outcome: 비용 약 $400K(4,900 GPU-day)로 기존 최고기록 대비 약 10배 저렴하게 완료 (실측)
model: Devin(Cognition)
cost: 약 $400,000 (GPU 4,900일 분, Modal API 단일 테스트 GPU로 시작)
permissions: Modal API 키를 에이전트에 부여, 사람은 프롬프트 작성 후 대기(오버나이트 무인 실행)
maturity: pilot
evidence: measured
importance: medium
uses: [course, ax]
source: https://cognition.com/blog/factoring-rsa-260
---

# Cognition, Devin 에이전트로 35년 묵은 RSA-260 인수분해 챌린지를 3주 만에 돌파

> **공식**: Cognition의 코딩 에이전트 Devin으로 cli-pipeline(다중 세션 오케스트레이션)을
> 활용해 GPU 가속 정수 인수분해 소프트웨어 재작성을 수행 → 862비트 RSA-260을 기존
> 최고기록 대비 약 10배 저렴한 비용(약 $400K)으로 인수분해, 1991년 챌린지 이후 35년
> 만의 기록 경신

## 무엇을 자동화했나

Cognition 엔지니어 Eric Lu가 1991년 RSA Factoring Challenge의 260자리(862비트)
난제를 풀기 위해, 기존 CPU 기반 인수분해 소프트웨어 CADO-NFS의 핵심 부분(sieving)을
GPU용으로 통째로 재작성하는 작업을 Devin에 맡겼다. 사람의 개입은 프롬프트 작성과
API 키 제공, 그리고 자는 동안 기다리는 것뿐이었다.

## 어떻게 구성했나 (아키텍처)

- Eric Lu는 "CADO-NFS의 CPU 시버(las)를 그대로 대체할 수 있는 GPU 버전을 만들어달라"는
  짧은 프롬프트와 테스트용 GPU 1개에 대한 Modal API 키만 Devin에 제공하고 잠들었다.
  다음 날 아침, CPU 버전을 능가하는 작동하는 프로토타입이 나와 있었다.
- 이후 한 연구자가 부업(side project) 형태로 3주간 최대 **18개의 Devin 세션을
  동시에** 운영하며 CADO-NFS 대부분을 GPU용으로 재작성했다. 새로 만든 GPU 시버의
  이름은 "glas".
- 완성된 파이프라인으로 실제 RSA-260을 인수분해해 130자리 소인수 하나를 09-03에
  공개했고, 이후 Cognition 블로그에 방법론 전체를 공개했다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델/에이전트 | Devin(Cognition) |
| 비용 | 약 $400,000 (GPU 4,900일 분) — 기존 최고기록(RSA-250, 2020) 대비 약 10배 저렴 |
| 권한 | Modal API 키(단일 테스트 GPU에서 시작해 확장)를 에이전트에 위임, 사람은 오버나이트·부업 형태로 최소 개입 |
| 성숙도 | pilot(연구자 개인의 3주 부업 프로젝트, 상용 제품 아님) |
| 근거 수준 | measured(자사 블로그 공개, 실제 인수분해 결과·비용 수치 실측 공개) |

## 성과와 수치

- RSA-260(862비트)을 인수분해해 2020년 RSA-250(829비트) 이후 6년 만에 일반 목적
  알고리즘으로 기록을 경신했다.
- 비용 약 $400K(4,900 GPU-day)로, 기존 최고 수준(state of the art) 대비 약 10배
  저렴했다고 Cognition이 공개했다.
- 첫 프로토타입은 프롬프트 하나 + 하룻밤 무인 실행만으로 CPU 버전을 능가하는 수준에
  도달했다(실측 재현 사례).

## 재현 가이드

- **난이도**: 상 (GPU 클러스터·정수론/암호학 도메인 지식, CADO-NFS 등 기존 인수분해
  소프트웨어에 대한 이해 필요)
- **준비물**: Devin 또는 유사한 코딩 에이전트, Modal 등 GPU 클라우드 API 키, 기존
  CPU 기반 GNFS(일반 수체 체) 구현체(CADO-NFS)
- **핵심 단계**:
  1. 기존 CPU 알고리즘의 핵심 병목 구간(sieving)을 특정한다.
  2. "이 부분을 GPU용으로 드롭인 대체하라"는 명확한 프롬프트와 테스트 GPU 접근권만
     주고 에이전트를 무인 실행한다.
  3. 프로토타입이 나오면 여러 에이전트 세션을 동시에 돌려(최대 18개) 나머지
     코드베이스를 확장 재작성한다.
  4. 실제 대상(RSA-260)에 파이프라인을 돌려 결과를 검증·공개한다.

## 강의·AX 활용 포인트

- **강의**: "프롬프트 하나 + 무인 실행"으로 시작해 점진적으로 다중 세션 오케스트레이션
  (최대 18개 동시 세션)으로 확장한 전형적인 에이전트 활용 성숙도 곡선을 보여주는
  사례 — 에이전트 도입 초기 단계 설계 강의에 적합하다.
- **AX**: 비용·성과가 모두 실측 공개된 드문 사례(measured)라는 점에서 "에이전트를
  대규모 계산 작업에 투입했을 때의 실제 비용 절감 폭"을 논할 때 신뢰도 높은 참고
  수치로 쓸 수 있다. 다만 대상 자체가 상용 서비스가 아닌 연구/기록 경신 프로젝트임은
  감안해야 한다.

## 출처

- [Cognition — Factoring RSA-260](https://cognition.com/blog/factoring-rsa-260)
- [AlphaSignal — Cognition's Devin Breaks RSA-260 Record in Three Weeks With AI Agents](https://alphasignal.ai/news/cognition-s-devin-breaks-rsa-260-record-in-three-weeks-with-ai-agents)
- [Scientific American — What's the tech behind the record-breaking RSA-260 crack?](https://www.scientificamerican.com/article/whats-the-tech-behind-the-record-breaking-rsa-260-crack/)
