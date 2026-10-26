---
type: use-case
date: 2026-10-25
tools: [claude]
mechanism: [subagents, cli-pipeline]
domain: dev-automation
task: 같은 게임(5레벨 픽셀 플랫포머)을 Opus 단독 vs Opus+로컬 Qwen 분업으로 각각 빌드해 비용·속도 비교
outcome: 클라우드 비용 75%↓($2.52→$0.62), 빌드 시간은 2.6배↑(16분→42분)
model: Claude Opus 5.5(플래닝·리뷰) + Qwen 3.8 27B(로컬, 코드 작성 3워커)
cost: Opus 단독 $2.52 / Fusion(Opus+로컬 Qwen) $0.62 (1회 실행 기준)
permissions: 미확인
maturity: demo
evidence: measured
importance: medium
uses: [course, ax]
source: https://www.reddit.com/r/ClaudeAI/comments/1xfgyl1/same_game_built_twice_opus_alone_vs_opus_planning/
---

> **공식**: Atomic Agent의 "Fusion" 모드로 Claude Opus 5.5(플래닝·리뷰 전담)와 로컬 Qwen 3.8 27B(코드 작성 전담, 3워커)를 분업시켜 같은 게임을 두 번 빌드 → 클라우드 비용 75%↓($2.52→$0.62), 단 빌드 시간은 2.6배(16분→42분)

## 무엇을 자동화했나

Opus 비용의 대부분이 "코드를 한 줄씩 타이핑하는" 출력 토큰에서 나온다는 점에 착안해,
**생각(플래닝·리뷰)은 Opus에 남기고 타이핑(코드 작성)만 로컬 모델로 옮기는** 분업 구조를
테스트했다. 같은 스펙(5레벨 픽셀 플랫포머, 보스전·승리화면 포함)을 두 가지 방식으로
각각 한 번씩 빌드해 비용·시간·품질을 직접 비교했다.

## 어떻게 구성했나 (아키텍처)

- **도구**: [Atomic Agent](https://atomicagent.io)의 "Fusion" 모드(MacBook Pro M5 Max 로컬 실행)
- **모드 A (Opus 단독)**: Claude Opus 5.5가 기획부터 전체 코드 작성까지 통상적인 루프로 수행
- **모드 B (Fusion)**: Opus 5.5가 플래닝·리뷰만 전담하고, 실제 코드 타이핑은 로컬에서
  구동한 Qwen 3.8 27B 3개 워커가 나눠 수행 — Opus는 작성된 코드를 검토만 함
- 두 모드 모두 **1회 실행**, 클라우드 비용만 집계(로컬 컴퓨트 전기료 등은 미포함)

## 벤치마크 데이터

| 항목 | Opus 단독 | Fusion (Opus+로컬 Qwen) |
|---|---|---|
| 모델 | Claude Opus 5.5 | 미확인 |
| 클라우드 비용 | $2.52 | $0.62 |
| 빌드 시간 | 16분 | 42분 |
| Opus 출력 토큰 | 90.7k | 11.3k |
| 체크리스트 통과 | 25/25 | 24/25 |
| 권한 설계 | 미확인 | 미확인 |
| 성숙도 | demo | demo |

두 게임 모두 "5레벨·보스·승리화면" 요구사항은 작동했다. Fusion이 느린 이유는 로컬
Qwen 3개 워커가 GPU 하나를 나눠 쓰기 때문이라고 작성자는 설명한다.

## 성과와 수치 (실측/주장 구분, 출처)

- **실측(작성자 자체 측정, 1회 실행)**: 클라우드 비용 75%↓, Opus 출력 토큰 8배↓(90.7k→11.3k),
  빌드 시간 2.6배↑(16분→42분), 체크리스트 24/25 vs 25/25(거의 동급 품질).
- 반복 실행으로 분산을 확인한 것은 아니므로 **1회성 비교임을 감안**할 것 — 과제 성격·GPU
  환경이 다르면 결과가 달라질 수 있다.

## 재현 가이드 (난이도: 중)

1. 로컬에서 구동 가능한 중간 크기 오픈웨이트 모델(Qwen 3.8 27B 등)과 GPU 환경을 준비한다.
2. 오케스트레이션 도구(여기서는 Atomic Agent Fusion 모드)로 "플래닝·리뷰는 상위 모델,
   코드 타이핑은 로컬 모델"로 역할을 분리한다.
3. 동일 스펙으로 두 모드를 각각 돌려 비용·시간·품질(체크리스트 등)을 직접 비교한다.
4. 마감이 급하면 상위 모델 단독, 시간 여유가 있고 분할 가능한 큰 작업이면 분업 모드로
   전환하는 식의 **상황별 전환 기준**을 세운다.

## 강의·AX 활용 포인트

- **강의**: "토큰 비용이 어디서 발생하는가"(출력 토큰 = 코드 타이핑)를 체감시키는 좋은
  사례. 비용 최적화 수업에서 "모델을 바꾸는 것"과 "역할을 쪼개는 것"이 다른 전략임을
  보여줄 수 있다.
- **AX**: 사내 에이전트 비용 설계 시 "고가 모델은 판단에만 쓰고 반복 작업은 저가/로컬
  모델에 위임"하는 하이브리드 구조의 구체적 트레이드오프(비용 75%↓ vs 시간 2.6배↑)를
  의사결정 자료로 쓸 수 있다. 다만 1회 실행 비교라는 한계를 반드시 함께 전달할 것.

## 출처

- [Reddit r/ClaudeAI — Same game built twice: Opus alone vs Opus planning + local Qwen coding](https://www.reddit.com/r/ClaudeAI/comments/1xfgyl1/same_game_built_twice_opus_alone_vs_opus_planning/)
