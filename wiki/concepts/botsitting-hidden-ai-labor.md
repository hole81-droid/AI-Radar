---
type: concept
date: 2026-08-05
tools: []
importance: high
uses: [ax, course]
source: https://hbr.org/2026/08/how-much-time-do-your-employees-spend-botsitting
---

# 봇시팅(botsitting) — AI가 아껴준 시간을 되가져가는 숨은 노동

> **채택 근거·확인 경로**: HBR 2026-08-05(Rebecca Hinds·Paul Leonardi).
> HBR 본문은 **페이월**이라 도입부만 열람 가능했으나, 2026-09-03 개정 규칙의
> "본문 확인 실패" 판정 전에 우회를 시도해 원 리포트(Glean Work AI Institute,
> **Work AI Index 2026**)와 2차 보도로 핵심 수치를 확보했다.
> 09-01·09-02 백필에서 HBR은 **41건 중 신규 0건**이었는데, 이 항목은 그 벽을
> 넘어선 첫 사례다.

## 정의

HBR 원문의 정의: *"botsitting, the work employees do to make AI useful"* —
**AI를 쓸 만하게 만들기 위해 직원이 수행하는 노동.**

구체적으로는 다섯 가지다.

1. 빠진 맥락 공급 (feeding it missing context)
2. 출력 검토 (checking its outputs)
3. 오류 교정·디버깅 (debugging its mistakes)
4. 프롬프트 재실행 (rerunning prompts)
5. **"자신 있게 틀린" 답이 남긴 뒷정리** (cleaning up confident-but-wrong answers)

원문이 든 사례: 정부 기술 컨설턴트 Benjamin은 AI 일정관리 에이전트가 시간을
아껴줄 것으로 기대했으나, 확보된 시간을 쓰는 대신 **도구 자체를 관리하는 데**
시간을 쓰게 됐다.

## 수치 (Work AI Index 2026)

| 지표 | 값 |
|---|---|
| **주당 봇시팅 시간(평균)** | **6.4시간** |
| 업무에 AI를 쓰는 디지털 워커 비율 | 87% |
| "AI가 생산성을 높인다"고 답한 비율 | 75% |
| 자기 보고 주당 절감 시간 | 약 11시간 |
| **"조직 성과가 유의하게 좋아졌다"고 답한 비율** | **13%** |

리포트 저자: Rebecca Hinds·Paul Leonardi 및 UC Santa Barbara, Emory, Notre Dame,
UC Berkeley, UNC Charlotte, University College London 연구진.

## 산술이 말하는 것

**주당 11시간을 아꼈다고 답한 사람들이, 그중 6.4시간을 봇시팅으로 되돌려 쓴다.**
순 절감은 5시간 남짓으로 줄고, 조직 차원의 성과 개선을 체감한 비율은 13%에 그친다.
개인이 느끼는 생산성(75%)과 조직이 확인하는 성과(13%) 사이의 62%p 간극이
이 개념의 핵심이다.

이 위키가 반복해 만난 패턴의 정량판이다 —
[[gpt-5-6-sol-autonomous-business-failure]](전권 위임 24시간 자율 운영이
순자산을 깎아먹은 사례)가 극단이라면, 봇시팅은 **정상 작동하는 AI에서도 상시
발생하는 세금**이다. [[ai-adoption-j-curve]]가 말한 초기 골짜기의 실체 중 하나로
읽을 수 있다.

## AX 활용 포인트

- **ROI 산정의 필수 차감 항목**: AI 도입 효과를 "절감 시간"으로만 보고하는 사내
  대시보드는 6.4시간을 빼지 않으면 과대 계상된다. **봇시팅 시간을 별도로 측정·
  예산화**하라는 것이 이 연구의 실무 권고다.
- **개인 체감 ≠ 조직 성과**: 75% vs 13%는 파일럿 성공 보고와 전사 확산 실패의
  간극을 설명하는 가장 좋은 단일 지표다.
- **줄이는 방향**: 봇시팅 5개 항목 중 ①(맥락 공급)과 ⑤(뒷정리)는 하네스·메모리
  설계로 구조적으로 줄일 수 있다 — 이 위키의 [[loop-engineering]]·
  [[theaxlabs-wikiskill-claude-code-memory-system]]·
  [[fabiensanglard-agent-md-persistent-style-guide]]가 그 방향의 사례다.
  즉 봇시팅은 "AI가 나쁘다"는 결론이 아니라 **하네스 투자의 정당화 근거**다.

## 정직성 메모

- HBR 본문(권고 사항 포함)은 **끝까지 확인하지 못했다**. 위 수치는 전부 원 리포트
  Work AI Index 2026과 그 2차 보도에서 확보한 것으로, HBR 기사가 같은 수치를
  인용했는지는 **미확인**이다.
- Work AI Index는 **Glean(Rebecca Hinds 소속 기업)이 발간한 벤더 리포트**다.
  학술 공동 저자가 참여했으나 이해상충 가능성을 감안해 `claimed` 수준으로 인용할 것.

## 출처

- HBR 원문(페이월): https://hbr.org/2026/08/how-much-time-do-your-employees-spend-botsitting
- 원 리포트: https://glean.com/work-ai-institute/reports/work-ai-index-report
- 2차 보도: https://peoplemanagingpeople.com/career/rebecca-hinds/
- 수집 원문 요약: `raw/2026-09/hbr-botsitting-glean-work-ai-index-2026.md`
