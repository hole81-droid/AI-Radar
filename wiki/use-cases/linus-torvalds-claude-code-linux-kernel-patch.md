---
type: use-case
date: 2026-10-14
tools: [claude-code]
mechanism: [vibe-coding]
domain: dev-automation
task: Linux 커널 페이지 캐시 읽기 경로의 folio 참조카운팅 병목 제거(동시 스레드 캐시 읽기 최적화) 패치 작성
outcome: 8스레드 동시 파일 읽기 처리량 초당 1,000만 회 → 3,000만~3,300만 회(약 3배), 단 리뷰 중 레이스 컨디션 발견되어 병합 전 추가 작업 필요
model: 미확인 (Claude Code 경유, 구체 기반 모델명 비공개)
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: measured
importance: high
uses: [course]
source: https://lwn.net/Articles/1100449/
---

# Linus Torvalds, Claude Code로 Linux 커널 패치 시리즈 작성 — 캐시 읽기 처리량 3배

> **공식**: Claude Code(vibe-coding)로 커밋 메시지 초안·코드·테스트 프로그램·알려진 문제점 리뷰를
> 작성하고 Torvalds 본인이 성능 측정을 전담 → 8스레드 동시 파일 읽기 처리량 약 3배 향상
> (초당 1,000만 → 3,000만~3,300만 회), 리뷰 중 레이스 컨디션 발견으로 병합 보류

## 무엇을 자동화했나

Linux 커널 메인테이너 Linus Torvalds가 `noref-filemap-read-with-llm`이라는 실험 브랜치에
8~10개 패치로 구성된 시리즈를 공개했다. 여러 스레드가 같은 캐시된 파일을 동시에 읽을 때
folio(메모리 페이지) 참조 카운터를 갱신하며 서로 경합해 속도가 떨어지는 병목을 없애는
작업이다. "hot"한 folio를 감지해 RCU(Read-Copy-Update) 유예 기간이 끝날 때까지 메모리
재사용을 미루는 방식으로, 참조 카운팅 단계 자체를 건너뛰고 캐시에서 데이터를 직접 복사할
수 있게 했다.

## 어떻게 구성했나 (아키텍처)

- **역할 분담**: Torvalds 본인이 커밋에서 직접 밝힌 바에 따르면 "코드, 테스트 프로그램,
  [알려진 문제점] 목록 뒤의 리뷰, 그리고 이 설명의 첫 초안은 LLM 코딩 어시스턴트(Claude
  Code)가 그의 지시 하에 작성"했고, **성능 측정(benchmark)은 본인이 직접 수행**했다.
- **메커니즘**: 특정 하네스나 스킬 구성 없이 Claude Code에 직접 작업을 지시해 코드·테스트·
  문서를 받아내는 "vibe-coding"에 가깝다 — Anthropic 공식 스킬 저작 가이드
  ([[anthropic-skill-authoring-best-practices]])나 서브에이전트 오케스트레이션과는 결이
  다른, 전문가가 결과물을 전량 직접 검증하는 모델이다.
- **공개·검증 절차**: Maintainers Summit에서 먼저 발표한 뒤 커뮤니티 리뷰를 위해 패치를
  게시 — 공개 즉시 "레이스 컨디션"이 리뷰어에게 발견되어 추가 작업이 필요한 상태로
  남아 있다(병합 완료 아님).

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 미확인 (Claude Code, 구체 기반 모델명 비공개) |
| 비용 | 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | prototype (Maintainers Summit 발표 후 커뮤니티 리뷰 중, 레이스 컨디션 미해결로 병합 보류) |

## 성과와 수치

- **실측(Torvalds 본인 랩톱 벤치마크)**: 8개 스레드가 동일 파일을 읽을 때 초당 약
  1,000만 회 → 3,000만~3,300만 회로 약 3배 향상(일부 매체는 "한 자릿수 단위(order of
  magnitude) 향상"으로 표현).
- **한계(실측 그대로 공개)**: 리뷰 과정에서 레이스 컨디션이 발견돼 추가 수정이 필요한
  상태 — "AI가 작성한 코드가 바로 프로덕션에 들어간 사례"가 아니라 "AI 초안 + 전문가
  전수 리뷰 + 실측 검증" 과정의 중간 단계임을 분명히 보여준다.

## 재현 가이드

- **난이도**: 상 (시스템 프로그래밍 전문성과 커널 내부 지식이 전제조건)
- **준비물**: Claude Code, 성능 측정 가능한 벤치마크 하네스, 커널 메인테이너급 리뷰 역량
- **핵심 단계**:
  1. 병목 지점을 사람이 먼저 정확히 지목(folio 참조카운팅 경합)
  2. Claude Code에 코드·테스트 프로그램·커밋 메시지 초안·알려진 문제점 리뷰까지 위임
  3. 성능 측정은 반드시 사람이 직접 실행해 수치를 확보
  4. 커뮤니티(메인테이너 서밋 → 메일링 리스트)에 투명하게 공개해 외부 리뷰로 숨은 결함 검증

## 강의·AX 활용 포인트

- **강의**: "세계에서 가장 보수적인 코드베이스(Linux 커널)의 최고 책임자도 AI 코딩
  어시스턴트를 쓴다"는 사실 자체가 상징성이 크다. 동시에 "AI가 쓴 코드 = 검증 끝난 코드"가
  아니라 레이스 컨디션처럼 실제 결함이 리뷰에서 나온다는 점을 함께 가르치면 "AI 보조 +
  전문가 전량 검증"이라는 현실적인 협업 모델을 보여줄 수 있다.
- **AX**: Torvalds의 코멘트 — "AI를 내가 잘 못하는 일에 쓴다", "도구로 대할 때 잘 작동한다",
  동시에 "메인테이너가 짊어지는 부담이 실제 문제가 됐다" — 는 에이전트 도입이 생산성과
  검증 비용을 동시에 늘린다는, 어제([[anthropic-scion-source-control-redesign]]) 이
  위키가 반복 확인한 주제와 같은 결론으로 수렴한다.

## 출처

- [LWN.net — Linus Torvalds's first LLM-assisted patch series](https://lwn.net/Articles/1100449/)
- [It's FOSS — Linus Torvalds Says He Likes Using AI, While His New Kernel Branch Credits Claude Code](https://itsfoss.com/news/linus-torvalds-claude-code-linux/)
- [Hacker News 토론 (109점, 2026-10-14)](https://news.ycombinator.com/item?id=50090842)
