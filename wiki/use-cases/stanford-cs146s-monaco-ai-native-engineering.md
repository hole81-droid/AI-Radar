---
type: use-case
date: 2026-11-08
tools: [claude-code]
mechanism: [subagents, skills]
domain: education
task: 코딩 에이전트 시대의 소프트웨어 엔지니어 교육과정 설계(스탠퍼드 CS146S)와 스타트업 현업 적용(Monaco)
outcome: 과제를 에이전트가 한 번에 푸는 문제 → 오픈소스 메인테이너 리뷰 과제로 전환(수치 없음)
model: 미확인
cost: 미확인
permissions: 온콜 에이전트에 Datadog·GitHub 접근 부여(범위 미확인)
maturity: production
evidence: anecdotal
importance: medium
uses: [course]
source: https://latent.space/p/cs146s/
---

> **공식**: [코딩 에이전트]로 [하네스·스킬·배경 에이전트]를 활용해 [소프트웨어 교육과 장애 대응]을 수행 → [과제 설계를 "메인테이너 리뷰"로 바꾸고 온콜 루프를 에이전트로 닫음(정량 성과 미공개)]

## 무엇을 자동화했나
Mihail Eric(스탠퍼드 CS146S "The Modern Software Developer" 강사, Monaco AI 총괄)이 Latent Space(11-08)에서 공개한 두 가지. ① 교육: 작년 과제(AI 코드리뷰어 평가 등)를 학생이 프롬프트 하나로 풀게 되자, 올해는 오픈소스 프로젝트에 패치를 내고 메인테이너가 리뷰하게 함. 조사한 학생 전원이 이미 에이전트를 쓴다. ② 현업: Monaco는 코드리뷰 도구는 구매(Devin 유지), 에이전트 워크스페이스는 자체 제작. 사내 에이전트 "Hal"은 장애 조사 후 PR을 열고, 영업 직원의 제품 질문에도 답한다.

## 어떻게 구성했나 (아키텍처)
10주 커리큘럼: 에이전트의 루프·도구·하네스, 대형 코드베이스 컨텍스트 엔지니어링, Geoffrey Litt의 explain-diff 스킬(변경을 시각 설명 후 퀴즈), 보안·의존성·권한, 배경 에이전트(Stripe Minions 사례), MCP 포털. 원칙: "배우려고 사고, 오래 쓰려고 만든다". 코드 생성이 리뷰를 앞지르는 병목은 [[ai-coding-bottleneck-shifts-review-not-writing]]과 맞닿는다.

## 벤치마크 데이터
| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 온콜 에이전트가 Datadog·GitHub 접근(범위 미확인) |
| 성숙도 | production(Monaco 내부 사용) |

## 성과와 수치
정량 성과 없음. 증거 수준 `anecdotal`(강사 본인 진술).

## 재현 가이드
난이도: 중. 준비물: 교육과정 또는 사내 온보딩 과제 세트, 협조적 메인테이너. 단계: ① 과제를 에이전트로 시험 풀이해 "한 방에 풀리는지" 점검 ② 리뷰어(사람)가 있는 실제 PR 과제로 교체 ③ explain-diff 같은 스킬로 이해도 퀴즈 ④ 사고 조사용 에이전트에 읽기 중심 권한 부여.

## 강의·AX 활용 포인트
사내 AI 개발 교육의 과제 설계 기준("에이전트가 한 방에 풀면 과제가 아니다") 직접 활용. 핵심 교훈: 평가를 산출물이 아닌 이해·대화로 옮긴다.

## 출처
- [Latent Space — Stanford CS146S](https://latent.space/p/cs146s/) / raw: raw/2026-11/2026-11-08-latent-space-stanford-cs146s-monaco.md
