---
type: use-case
date: 2026-11-17
tools: [claude-code]
mechanism: [subagents, skills, mcp]
domain: marketing
task: SEO/GEO/AEO 운영 전 과정(키워드 조사·경쟁 분석·기술 감사·콘텐츠 브리프·작성·보고) 자동화
outcome: 콘텐츠 브리프+기사 작성 8시간→1시간(87%↓), 신규 고객 셋업 4시간→30분(87%↓), 기술 SEO 감사 6시간→1시간
model: 미확인 (Claude Code, 구체 모델명 원문에 없음)
cost: "$0 유료 API 사용" (원문 주장, 무료 접근 경로로 구성했다는 뜻으로 추정)
permissions: 미확인
maturity: production
evidence: claimed
importance: medium
uses: [course, ax]
source: https://duotach.com/en/case-studies/seo-system-claude-code-agents
---

# Duotach, Claude Code 16개 에이전트로 SEO 운영 전체를 자동화

> **공식**: Claude Code로 subagents+skills+mcp를 활용해 다수 클라이언트의 SEO/GEO/AEO
> 운영 전 과정을 수행 → 콘텐츠 브리프 제작 87%↓, 신규 고객 셋업 87%↓ (자체 보고)

## 무엇을 자동화했나

소프트웨어 엔지니어링·자동화 컨설팅 회사 Duotach가 Claude Code로 16개 에이전트·12개
전문 스킬을 구성해 여러 클라이언트의 SEO 운영을 표준화했다. 대상 업무는 클라이언트
온보딩, 키워드 조사·SERP 분석, 경쟁사 분석, 기술 SEO 감사(50+ 항목 체크리스트),
JSON-LD 스키마 생성, 콘텐츠 브리프·기사 작성, 주간 Google Search Console 보고까지
SEO 에이전시 업무 전 과정이다.

## 어떻게 구성했나 (아키텍처)

메인 에이전트가 클라이언트별 전체 워크플로를 조율하고, 특화된 서브에이전트들이
병렬로 키워드 연구·기술 감시·경쟁 분석을 실행하는 다중 에이전트 구조다. Google
Search Console은 MCP 서버로 연결했고, 출력물은 Next.js 14 사이트와 JSON-LD
스키마 마크업으로 생성한다.

**12개 전문 스킬**: Onboarding · Keyword Research · SERP Analysis · Competitor
Intel · Site Audit · Schema Generator · Content Brief · Content Writer · GEO
Optimizer · GBP Strategy · GSC Report · Next.js Converter.

이 스킬 세트는 3일 만에 구축했고, 재사용 가능한 콘텐츠 템플릿 6개·JSON-LD 스키마
템플릿 6개·초기 시스템 파일 37개를 만들어냈다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Claude Code, 구체 모델명 원문에 없음) |
| 비용 | "$0 유료 API 사용"(원문 주장) — 무료 접근 경로로 구성했다는 의미로 보이나 세부 비용 구조는 불명 |
| 권한 | 미확인 |
| 성숙도 | production(다수 클라이언트에 실제 서비스 중인 에이전시 상품) |
| 근거 수준 | claimed(벤더 자체 발행 케이스 스터디, 제3자 검증 없음) |

## 성과와 수치

- 콘텐츠 브리프+기사 작성: 8시간 → 1시간 (87%↓, 자체 보고)
- 신규 클라이언트 셋업: 4시간 → 30분 (87%↓, 자체 보고)
- 기술 SEO 감사: 6시간 → 1시간
- 전체 "수동 프로세스 대비 5배 빠름"이라는 총괄 수치도 함께 제시 — 위 개별 수치와
  겹치는 주장으로 보이며, 독립된 추가 측정인지는 불명확
- 원문은 "전통적 SEO 에이전시는 월 $1,500+를 청구하며 보고가 지연된다"는 비교를
  근거로 "전문 SEO의 민주화"를 성과로 제시한다 — 비교 대상 에이전시의 구체 스펙은
  없다

**정직성 메모**: 이 수치들은 서비스를 판매하는 에이전시 본인이 발행한 케이스 스터디
수치이며, 범용 서브에이전트 벤치마크로 일반화할 수 없다(원문도 이 점을 명시).

## 재현 가이드

**난이도**: 중

**준비물**: Claude Code, MCP로 연결 가능한 분석 도구(Google Search Console 등),
SEO 업무 도메인 지식(어떤 체크리스트·스키마가 필요한지 정의할 사람)

**핵심 단계**:
1. SEO 운영을 하위 업무(키워드·경쟁·감사·작성·보고)로 분해하고 각각을 스킬로 정의
2. 메인 에이전트가 클라이언트별 워크플로를 조율하고, 하위 작업은 서브에이전트가
   병렬 처리하도록 구조화
3. 반복 산출물(콘텐츠 템플릿·스키마 템플릿)을 먼저 템플릿화해 스킬이 참조하게 함
4. Google Search Console 등 외부 데이터 소스는 MCP로 연결
5. 클라이언트 온보딩 자체도 스킬로 패키징해 신규 고객 셋업 시간을 줄임

## 강의·AX 활용 포인트

- **course**: "업무를 스킬 단위로 쪼개고 메인 에이전트가 오케스트레이션한다"는 구조는
  마케팅·SEO 외 다른 반복 업무(보고서·감사 체크리스트)에도 그대로 적용 가능한 템플릿
  수업 소재.
- **ax**: 에이전시가 자체 상품화에 쓴 사례라 "AI 에이전트 조직이 기존 서비스 가격
  구조를 흔든다"(월 $1,500+ 에이전시 대비)는 각도의 AX 근거로 쓸 수 있다. 단 수치가
  벤더 자체 주장임을 반드시 명시해야 한다.

## 출처

- [Duotach — SEO System with Claude Code](https://duotach.com/en/case-studies/seo-system-claude-code-agents) (발행일 미표기, 2026-11-17 스캔 확인)
