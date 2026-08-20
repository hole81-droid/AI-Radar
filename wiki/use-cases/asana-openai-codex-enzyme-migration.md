---
type: use-case
date: 2026-08-20
tools: [codex]
mechanism: [subagents, cli-pipeline]
domain: dev-automation
task: Enzyme→React Testing Library 프론트엔드 테스트 프레임워크 전면 마이그레이션(레거시 제거)
outcome: 5년 추정→2주 완료(엔지니어링 실투입 1.5주), 비용 $6M 추정→$12,000(약 500배 절감)
model: 미확인 (Codex, 구체 버전 비공개)
cost: 약 $12,000 (모델+인프라, OpenAI·Asana 공식 발표 수치)
permissions: 에이전트 최대 4개 병렬 실행, 엔지니어 1명이 매일 2회 진행상황 검토·모든 변경 승인
maturity: production
evidence: claimed
importance: high
uses: [course, ax]
source: https://openai.com/index/asana/
---
# Asana, Codex 병렬 에이전트로 "5년짜리" 테스트 마이그레이션을 2주 만에 끝내다

> **공식**: Codex(subagents 병렬 실행)를 활용해 Asana의 Enzyme→React Testing Library
> 프론트엔드 테스트 마이그레이션을 수행 → 5년 추정 작업을 2주(엔지니어링 실투입 1.5주)로,
> 비용 $6M 추정에서 $12,000로(약 500배) 단축

## 무엇을 자동화했나

Asana가 프론트엔드 테스트에 쓰던 낡은 프레임워크 Enzyme(유지보수 중단 상태)을 React
Testing Library(RTL)로 전면 교체하는 대규모 리팩터링 프로젝트. 사내 원래 추정은 "적어도
5년, 약 $600만"짜리 프로젝트였고, Enzyme이 낡아 프런트엔드 스택 업그레이드 전반을 막고
있었다.

## 어떻게 구성했나 (아키텍처)

다섯 문장짜리 프롬프트로 시작해, 최대 4개의 Codex 에이전트가 각자 별도의 코드베이스
사본에서 병렬로 마이그레이션을 진행했다. Asana 측은 정교한 에이전트 설정보다 단순한
지시가 더 잘 작동했다고 밝혔다. 사람 개입은 완전히 배제되지 않았다 — 엔지니어 1명이
하루 2회 진행상황을 확인하고 제안된 모든 변경을 승인하는 방식으로 지속적인 사람 감독을
유지했다.

## 벤치마크 데이터

| 항목 | 값 | 근거 |
|---|---|---|
| 모델 | 미확인 — "Codex"로만 명시, 구체 모델 버전 비공개 | OpenAI 공식 사례 |
| 비용 | 약 $12,000 (모델+인프라 비용, $6M 추정 대비 약 500배 절감) | OpenAI·Asana 공식 발표 |
| 권한 설계 | 에이전트 최대 4개 병렬 실행 + 엔지니어 1명 매일 2회 검토·전건 승인 | OpenAI 공식 사례 |
| 성숙도 | production — 실제 코드베이스에 반영, Enzyme 완전 제거 완료 | OpenAI 공식 사례 |
| 증거 수준 | claimed — 벤더(OpenAI) 공식 사례 소개, 독립적 제3자 검증은 없음 | 자체 판단 |

## 성과와 수치

- **1.5주 엔지니어링 실투입**(2 calendar weeks) 만에 Enzyme 완전 제거
- **비용 $6M 추정 → $12,000 실제**(약 500배 절감)
- Asana CTO Amritansh Raghav: "Not every years-long project will collapse into weeks.
  But agents can give engineers more room for craft—and make once-impossible work worth
  attempting."
- **HN 커뮤니티 회의론(중요 — 그대로 인용하지 말 것)**: 원래 "5년" 추정치 자체가 다른
  기능 개발과 병행하는 파트타임 작업 기준이었을 가능성 제기, 제3자가 마이그레이션 전후
  코드의 동등성을 검증할 방법이 없다는 지적, "문제를 해결한 게 아니라 삭제·방치했을
  수 있다"는 우려, "$600만·5년"이라는 원 추정치 자체가 조직 비효율의 증거일 뿐이라는
  비판도 다수. → evidence를 claimed로 표기한 이유.

## 재현 가이드

- **난이도**: 중 (기술 난도보다 "요구사항이 명확하고 테스트로 검증 가능한 마이그레이션"
  범위를 고르는 판단이 관건)
- **준비물**: 목표가 명확한 레거시 교체 작업(요구사항이 흐릿하지 않을 것), 코드베이스를
  여러 벌 복제해 병렬 작업이 가능한 인프라, 매일 diff를 검토할 시니어 엔지니어
- **핵심 단계**:
  1. 프롬프트는 길고 복잡하게 쓰지 않는다 — Asana 사례는 5문장 수준으로 단순화
  2. 코드베이스를 병렬 작업 가능한 형태로 복제해 여러 에이전트를 동시 투입한다(최대 4개)
  3. 사람은 매일 2회 정도 진행상황·diff를 검토하고 제안된 변경을 전건 승인한다
  4. "테스트로 성공 여부를 확인할 수 있는" 명확한 마이그레이션류 작업부터 적용한다

## 강의·AX 활용 포인트

- **AX**: 벤더(OpenAI) 자체 사례라 "500배" 수치를 그대로 인용하기보다, HN이 제기한
  "원래 추정치 자체가 부풀려진 것 아니냐"는 반박까지 함께 소개하면 균형 잡힌 근거가 된다.
  "레거시 기술부채 제거"처럼 요구사항이 명확한 프로젝트가 에이전트 병렬화의 첫 적용
  대상으로 적합하다는 근거로 쓰기 좋다.
- **강의**: "정교한 오케스트레이션보다 단순한 지시 + 사람의 정기 검토"라는 설계가
  [[cursor-agent-swarms-model-economics]](플래너-워커 계층형 스웜)와 대비되는 "단순함의
  가치" 사례로 짝지어 소개할 수 있다.
- 벤더 발표 수치를 인용할 때는 반드시 "claimed"이며 제3자 코드 품질 검증이 없다는 점,
  원 추정치 자체의 신뢰성 논쟁이 있다는 점을 함께 밝힐 것.

## 출처

- [OpenAI — Asana cleared 5 years of engineering work in 2 weeks with Codex](https://openai.com/index/asana/)
- [Hacker News 토론](https://news.ycombinator.com/item?id=49370862)
- [AnalyticsIndiaMag 요약 기사](https://analyticsindiamag.com/ai-news/openais-codex-helps-asana-cut-5-year-migration-to-2-weeks-slashes-costs-500x)
