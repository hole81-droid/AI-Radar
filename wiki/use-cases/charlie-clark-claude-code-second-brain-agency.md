---
type: use-case
date: 2026-06-12
tools: [claude-code]
mechanism: [second-brain, mcp, skills, cron-routines]
domain: ops
task: SEO 에이전시 운영 전반(클라이언트 응대·보고서·제안서)을 Claude Code 세컨드 브레인으로 자동화
outcome: 월요일 아침 컨텍스트 정리 45분→1분, 클라이언트 상태 회신 30분→30초, 신규계약 스코핑 며칠→몇 분 (주장)
model: 미확인
cost: 미확인
permissions: Gmail·Slack·Drive·HubSpot·Scoro 등 MCP 연동은 기본 읽기전용, 신뢰가 쌓인 후에만 점진적으로 쓰기 권한 부여. 이메일 초안·제안서는 발송 전 사람이 반드시 검토
maturity: production
evidence: claimed
importance: high
uses: [course, ax]
source: https://searchengineland.com/claude-code-powered-second-brain-agency-work-479879
---

> **공식**: [Claude Code]로 [메모리+검색+스킬+하트비트 4계층 세컨드 브레인(MCP 연동)]을 활용해 [1인 SEO 에이전시의 클라이언트 응대·보고서·제안서 작성]을 수행 → [월요일 아침 정리 45분→1분, 클라이언트 회신 30분→30초 (주장)]

## 무엇을 자동화했나

SEO 에이전시 Minty Digital 창립자이자 15년 경력의 SEO/콘텐츠 마케터 Charlie Clark가 Claude Code를 자신의 업무 운영 전체의 "세컨드 브레인"으로 재구성한 실전 구축기. 약 6개월간 운영하며 다음을 자동화했다: 클라이언트 상태 업데이트에 대한 회신, 데이터 분석·보고서 작성, 신규 계약 발견(discovery) 단계의 제안서 초안 작성. 목표는 이메일·슬랙·회의록·CRM에 흩어진 클라이언트 맥락을 사람이 매번 다시 찾아 헤매는 대신, Claude Code가 상시 파악하고 있다가 필요한 순간 바로 꺼내 쓰게 만드는 것이다.

## 어떻게 구성했나 (아키텍처)

4개 계층으로 구성된 세컨드 브레인:

1. **메모리(Memory)**: 클라이언트 정보·가격 결정·성격/업무 방식 등 개인 맥락을 마크다운 파일로 저장, 세션 간 지속
2. **검색(Search)**: 일일 로그를 인덱싱하는 로컬 데이터베이스 — 과거 클라이언트 합의 내용 등을 구체적으로 검색·회수
3. **스킬(Skills)**: 브리프·제안서·이메일 초안 작성 등 재사용 가능한 기능 — 메모리의 맥락을 자동으로 상속
4. **하트비트(Heartbeat)**: 매시간 도구를 모니터링해 조치가 필요하면 Slack 알림과 초안 결과물을 생성

**MCP 연동**: Gmail, Slack, Google Drive, HubSpot, Scoro(프로젝트 관리), Fireflies(회의 녹취록), Calendar, Search Console을 Model Context Protocol로 연결. 로컬 파일시스템 접근도 포함. 연동은 기본 읽기전용으로 시작해, 결과물에 대한 신뢰가 쌓인 뒤에만 점진적으로 쓰기 권한을 확대하는 방식.

## 벤치마크 데이터

| 항목 | 값 |
|------|-----|
| 모델 | 미확인 (기사에 구체 Claude 모델 버전 언급 없음) |
| 비용 | 미확인 (구독 요금·토큰 비용 언급 없음) |
| 권한 | 기본 읽기전용 MCP 연동, 신뢰 쌓인 뒤 쓰기 권한 점진 확대. 이메일 발송·제안서 전달은 사람이 검토 후 실행 |
| 성숙도 | production — 약 6개월간 1인 에이전시 실사용 중 |

## 성과와 수치

**주장(claimed)** — 저자 본인 진술, 외부 검증 없음:

- 월요일 아침 컨텍스트 정리: 45분 → 약 1분
- 클라이언트 상태 업데이트 회신: (회신 전 검색에 걸리던) 30분 → 30초
- 신규 계약 스코핑(discovery→scope): 며칠 걸리던 주고받기 → 몇 분

측정 방법론(정식 A/B 비교, 로그 기반 실측 등)은 기사에 명시되지 않아 evidence는 claimed로 분류한다.

## 재현 가이드

- **난이도**: 중 (MCP 연동 설정과 마크다운 기반 메모리 체계 설계 필요, 코딩 지식 다소 요구)
- **준비물**: Claude Code, 연동 대상 서비스 계정(Gmail·Slack·Drive·HubSpot·Scoro·Fireflies 등), 로컬 파일시스템에 메모리·로그 저장 공간
- **핵심 단계**:
  1. 클라이언트 정보·가격·업무방식을 마크다운 메모리 파일로 구조화해 세션 간 지속되게 설정
  2. 일일 활동 로그를 인덱싱하는 검색 계층 구축 — 특정 클라이언트 합의 내용을 즉시 회수 가능하게
  3. 반복 산출물(이메일 초안·제안서·브리프)을 스킬로 만들어 메모리 맥락을 자동 상속하도록 구성
  4. MCP 연동은 읽기전용으로 먼저 시작, 결과 품질을 검증한 뒤에만 쓰기 권한을 단계적으로 확대
  5. 매시간 도구 상태를 점검하는 하트비트 루틴을 붙여 조치 필요 시 Slack으로 알림

## 강의·AX 활용 포인트

- **강의**: "메모리-검색-스킬-하트비트" 4계층 프레임은 Claude Code를 개인/팀 업무 비서로 확장하는 general한 설계 패턴으로 가르치기 좋음. 1인 에이전시라는 작은 스케일이라 실습 난이도도 적당.
- **AX**: 읽기전용 우선·점진적 쓰기 권한 확대라는 권한 설계는 기업이 AI 에이전트를 실무에 도입할 때 리스크를 관리하는 현실적 모델로 인용 가치가 높음. 다만 성과 수치가 모두 주장(claimed) 수준이므로, 사내 도입 시 별도 실측 검증이 필요하다는 점을 함께 전달할 것.

## 출처

- 원문: [Search Engine Land — "How to build a Claude Code-powered second brain for agency work"](https://searchengineland.com/claude-code-powered-second-brain-agency-work-479879) (Charlie Clark, 2026-06-12)
