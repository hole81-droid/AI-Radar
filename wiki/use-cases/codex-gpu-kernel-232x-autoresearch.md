---
type: use-case
date: 2026-08-15
tools: [codex]
mechanism: [cli-pipeline, subagents]
domain: dev-automation
task: NVIDIA B200 GPU용 배치 QR 분해 커널 최적화 (GPU Mode 리더보드 경쟁 제출)
outcome: 기준 대비 232배 속도 향상(419ms→1.8ms 기하평균), 183명 중 12위
model: GPT-5.5 (ChatGPT Pro "Codex", 자문역 Claude Pro 병행)
cost: Codex Pro 연 $200 + Claude Pro 연 $20 + Modal GPU 프로파일링(월 $30 무료 크레딧)
permissions: 미확인
maturity: prototype
evidence: measured
importance: medium
uses: [course, ax]
source: https://sankalp.bearblog.dev/autoresearch/
---

> **공식**: Codex(GPT-5.5)로 `/goal` 장기 실행 루프+서브에이전트+빔서치 전략을 활용해
> GPU 커널 최적화를 24시간+ 무인 수행 → 232배 속도 향상, 공개 리더보드 12위 달성

## 무엇을 자동화했나

개인 개발자가 GPU Mode 리더보드(공개 GPU 커널 최적화 경쟁)에 참가해, NVIDIA B200 GPU용
배치 QR 분해(batched QR decomposition) 커널을 `torch.geqrf` 출력 포맷과 일치시키면서
32×32~4096×4096 전 구간에서 속도를 극대화하는 작업을 Codex 에이전트 루프로 14일간
자동 수행했다.

## 어떻게 구성했나 (아키텍처)

- **주 에이전트**: ChatGPT Pro "Codex"(GPT-5.5)의 `/goal` 지시어로 24시간 이상 이어지는
  무인 최적화 세션을 유지.
- **비차단 개입 채널**: `/btw`, `/side` 명령으로 루프를 멈추지 않고 사람이 방향을 조정.
- **서브에이전트 분업**: 프로파일링 분석·아이디어 생성·버그 헌팅을 각각 별도 서브에이전트가
  담당.
- **탐색 전략**: 단일 최적해에 집착하는 힐클라이밍 대신 3~5개 후보 계열을 동시에 유지하는
  빔서치 방식으로 국소 최적점 함정을 회피.
- **교차 모델 자문**: 막힐 때 Claude Pro를 별도 자문역으로 불러 아이디어 다양성을 확보
  (강한 조언자 모델을 보조로 쓰는 패턴).
- **핵심 기술 스택**: Blocked Householder 알고리즘 + WY-update 압축, Triton·CUDA 커널
  (패널 특화), CUDA 그래프 리플레이(launch 오버헤드 절감), 점진적 알고리즘 라우팅
  (torch.geqrf → blocked WY → 커스텀 패널 → fused assembly).
- **인프라**: Modal에서 GPU 프로파일링 실행, popcorn CLI로 리더보드 자동 제출.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | GPT-5.5 (ChatGPT Pro "Codex"), 보조 자문 Claude Pro |
| 비용 | Codex Pro 연 $200 + Claude Pro 연 $20 + Modal 월 $30 무료 크레딧(구독료 기준, 태스크당 비용 미산출) |
| 권한 설계 | 미확인 — 개인 경쟁 참가 환경이라 승인 게이트 개념 자체가 원문에 없음 |
| 성숙도 | prototype (개인 리더보드 참가 프로젝트, 팀·회사 도입 사례 아님) |

## 성과와 수치 (실측)

- **232배 속도 향상**: 기준 419ms → 1.8ms(기하평균).
- **최종 기록**: 1,805마이크로초 (시작점 108,803마이크로초 대비 −98.34%).
- **순위**: GPU Mode 공개 리더보드 183명 중 12위.
- **작업 규모**: 14일간 1,500개+ 제출, 이름 붙인 변형 560개 아카이브, Modal 프로파일링
  스크립트 119개.
- **검증 방식**: GPU Mode 자동 채점기가 직교성·삼각행렬 제약을 검증하고 형태별 타이밍
  피드백을 제공 — 공개 리더보드 순위로 제3자 검증 가능한 실측(measured) 사례.

## 재현 가이드 (난이도: 상)

1. ChatGPT Pro(Codex)·Claude Pro 구독과 NVIDIA B200급 GPU 접근(예: Modal) 확보.
2. GPU Mode 같은 공개 채점 리더보드에 참가해 명확한 목표 함수(속도·정확도 제약)를 확보한다.
3. Codex `/goal`로 장시간 자율 루프를 걸고, `/btw`·`/side`로 비차단 개입 채널을 열어둔다.
4. 프로파일링·아이디어 생성·버그 헌팅을 서브에이전트로 분리하고, 단일 최적해가 아닌 다중
   후보(빔서치)를 유지하도록 지시한다.
5. 막힐 때 다른 모델(Claude 등)을 자문역으로 교차 투입해 아이디어 다양성을 확보한다.

## 강의·AX 활용 포인트

- "장시간 무인 에이전트 루프 + 비차단 개입"이라는 구조는 [[openai-codex-maxxing-25-hour]](Codex
  25시간 연속 개발 사례)와 함께 "에이전트에게 얼마나 긴 자율 실행 구간을 맡길 것인가"를
  가르치는 짝 사례로 쓸 수 있다.
- 단일 최적해 대신 다중 후보를 유지하는 "빔서치식 탐색"은 코드 리팩토링·아이디어 브레인
  스토밍 등 다른 개발 자동화 워크플로에도 이식 가능한 일반 원칙으로 강의에서 추상화해
  가르칠 만하다.
- 공개 리더보드 기반이라 성과 수치가 제3자 검증 가능한 실측(measured)이라는 점이 강점 —
  다만 "회사 도입"이 아닌 "개인 경쟁 참가" 맥락이라는 점, 그리고 비용은 구독료 기준이지
  태스크당 비용이 아니라는 점을 AX 보고서에 인용할 때 명시해야 한다.

## 출처

- [Sankalp's blog — Auto-Research with Codex: How I Achieved a 232x Faster Kernel](https://sankalp.bearblog.dev/autoresearch/)
- [Hacker News 토론](https://news.ycombinator.com/item?id=49309549) (361점)
