---
type: use-case
date: 2026-09-18
tools: [github-copilot, chatgpt, claude]
mechanism: [cli-pipeline]
domain: dev-automation
task: GitHub Copilot 런타임 43만 줄 TypeScript를 Rust로 전면 재작성(포팅)
outcome: 속도 15.9배(7.55→120 lifecycles/sec), 메모리 1,383MB→126MB, 총비용 $120,000(14.5주)
model: GPT-5.6 Sol + Claude Opus 4.8 (모듈별로 강점에 따라 분담)
cost: AI 토큰 비용 $120,000 + 개발자 관리 시간 약 3주 (14.5주 동안 135회 릴리스, 일 평균 PR 1.3건)
permissions: 미확인
maturity: production
evidence: measured
importance: high
uses: [ax, course]
source: https://www.theregister.com/devops/2026/09/18/microsoft-agentically-ports-copilot-runtime-to-rust-for-120k/5297549
---

> **공식**: Copilot 에이전트(GPT-5.6 Sol + Claude Opus 4.8)로 GitHub Copilot 런타임을
> 모듈 단위 자동 포팅(mechanism: cli-pipeline)해 TypeScript→Rust 전환 → 속도 15.9배,
> 메모리 90% 절감, 비용 $120,000.

## 무엇을 자동화했나

VS Code·Visual Studio·Excel·Outlook·PowerPoint 등 여러 Microsoft 제품에서 GitHub
Copilot CLI·앱·SDK·클라우드 에이전트를 떠받치는 핵심 런타임(TypeScript, 43만 줄)을
Rust로 전면 재작성하는 작업을 에이전트에게 맡겼다. 사람이 한 줄씩 옮기는 대신,
Copilot 에이전트가 모듈 단위로 코드를 읽고 변환·검증·PR 생성까지 수행했다.

## 어떻게 구성했나 (아키텍처)

- **모듈별 분담**: 런타임을 모듈 단위로 쪼개 순차 변환. 런타임 자체의 구조 최적화는
  포팅 중에는 하지 않고(구조는 그대로, 언어만 교체) 변환에 집중.
- **두 모델 조합**: GPT-5.6 Sol과 Claude Opus 4.8을 함께 투입해 각 모델이 강점을
  보이는 영역을 나눠 맡김(구체적 분담 기준은 원문에 상세 서술 없음 — 미확인).
- **파이프라인 속도**: 14.5주 동안 135회 릴리스, 하루 평균 PR 1.3건 — 사실상
  지속적인 자동 변환·배포 파이프라인으로 운영.
- **품질 관리**: 컴파일러가 통과시킨(즉 "빌드는 되는") 회귀 버그가 다수 발생 —
  모호한 의미·누락된 기능이 원인. Rust 컴파일러의 안전성 보장(메모리 안전 등)이
  "정확성"까지 보장하지는 않는다는 것을 실제로 겪은 사례. 사람 엔지니어가 이 회귀를
  수동으로 걸러내는 역할을 맡음(약 3주 관리 시간).

## 벤치마크 데이터

| 항목 | 수치 |
|---|---|
| 사용 모델 | GPT-5.6 Sol + Claude Opus 4.8 |
| 비용 | $120,000 (AI 토큰) + 개발자 약 3주 관리 시간 |
| 권한 설계 | 미확인 |
| 성숙도 | production (VS Code·Visual Studio·Excel·Outlook·PowerPoint 등 실제 제품에 반영) |
| 기간 | 14.5주, 135회 릴리스, 일 평균 PR 1.3건 |

## 성과와 수치

- **실측(measured)**: 코드량 43만 줄(TypeScript) → 80만 줄(Rust, 프로덕션 코드).
- **속도**: 벤치마크 기준 7.55 → 120 lifecycles/sec, 약 15.9배 향상.
- **메모리**: 동일 워크로드 기준 1,383MB → 126MB로 약 91% 감소.
- **한계**: Microsoft Distinguished Engineer Stephen Toub는 "컴파일되면 정확하다는
  말은 농담으로만 쓸모 있다"며, Rust 컴파일러가 검증하는 것은 메모리 안전성이지
  로직의 정확성이 아니라고 못박았다 — 다수의 회귀가 "빌드 통과" 이후에 발견됐다.

## 재현 가이드

- **난이도**: 상 (대규모 프로덕션 코드베이스의 언어 전환은 조직 차원의 검증 체계
  없이는 위험도가 높다)
- **준비물**: 모듈 경계가 뚜렷한 레거시 코드베이스, 복수 모델을 오케스트레이션할
  에이전틱 파이프라인, 회귀를 잡아낼 자동 테스트 + 사람 검증 인력
- **핵심 단계**:
  1. 코드베이스를 모듈 단위로 분해해 독립적으로 변환 가능하게 만든다.
  2. 모델별 강점에 따라 작업을 분담(복수 모델 병행 투입).
  3. 구조 최적화는 미루고 "동작 동일성"부터 확보하는 1단계 포팅에 집중한다.
  4. 컴파일 통과를 정확성의 증거로 오인하지 않고, 별도 회귀 검증 단계를 반드시
     둔다.
  5. 지속적 릴리스 파이프라인으로 운영해 매일 작은 단위로 변환·검증을 반복한다.

## 강의·AX 활용 포인트

- **강의**: "에이전트에게 대규모 언어 전환을 맡길 때 컴파일 성공과 정확성은 다른
  문제"라는, 실패 사례가 아니라 성공 사례에서 나온 품질보증 교훈으로 가르치기 좋다.
- **AX**: 레거시 시스템 현대화(언어 전환·프레임워크 이전)에 에이전트를 투입할 때
  드는 실제 비용·기간·인력 규모의 벤치마크로 쓸 수 있다 — $120K·14.5주·개발자 3주가
  "43만 줄 규모 런타임 포팅"의 참고 단가가 된다. 단, 프로덕션 반영 전 회귀 검증에
  드는 사람 시간을 반드시 별도 항목으로 예산에 넣어야 한다는 시사점도 함께 전달할 것.

## 출처

- [The Register — Microsoft agentically ports Copilot runtime to Rust for $120K](https://www.theregister.com/devops/2026/09/18/microsoft-agentically-ports-copilot-runtime-to-rust-for-120k/5297549)
