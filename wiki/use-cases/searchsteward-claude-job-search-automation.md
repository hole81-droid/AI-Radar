---
type: use-case
date: 2026-07-17
tools: [claude-code]
mechanism: [subagents, vibe-coding, prd-driven]
domain: personal-productivity
task: 구직 활동 전체(이력서 정리, 채용공고 스크래핑·스코어링, 지원 CRM, 인터뷰 준비, 성과 분석) 자동화
outcome: 9주 만에 신규 입사, 개인 도구가 실제 SaaS 제품(searchsteward.com, 무료+유료 티어)으로 성장 (자기 보고)
model: Claude(Fable 5) — 리팩터링 이후 Fable이 계획·서브에이전트가 구현·Fable이 리뷰하는 구조로 전환
cost: 미확인
permissions: 미확인
maturity: production
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://old.reddit.com/r/ClaudeAI/comments/1uyky9u/laid_off_in_march_i_built_a_jobsearch_tool_almost/
---

> **공식**: [Claude(Claude Code, Fable 5)]로 [vibe-coding→서브에이전트 파이프라인(Fable이 계획, 서브에이전트가 구현·리뷰)]을 활용해 [구직 활동 전체(공고 스크래핑·스코어링·지원 CRM·분석)]를 수행 → [9주 만에 신규 입사, 개인 도구가 SaaS 제품으로 성장 (자기 보고)]

## 무엇을 자동화했나

2026년 3월 정리해고를 당한 한 금융권 종사자가 Claude로 구직 도구를 만들다가 실제 제품(SearchSteward, searchsteward.com)까지 완성한 과정. Hiring.Cafe·Huntr 같은 기존 툴을 써봤지만 원하는 방식이 아니어서 직접 만들었다고 밝힌다. 단계적으로 기능을 늘려가며 "AI에게 스크립트 하나 짜달라고 하기"에서 "Fable이 계획하고 서브에이전트가 구현·리뷰하는" 구조로 진화한 것이 핵심 서사다.

## 어떻게 구성했나 (아키텍처)

단계별 확장 과정:

1. **이력서 정리**: 경력 전체를 텍스트 덤프로 Claude에 입력 → 마스터 이력서로 정리 + 커리어 어드바이저 역할 부여(놓친 직무·타이틀 제안)
2. **채용공고 수집**: 여러 핀테크 기업 ATS 게시판을 스크래핑하는 스크립트를 Claude로 제작, 결과를 CSV로 저장
3. **스코어링 시스템**: 직무 적합도를 프로필 대비 점수화, 타이틀/설명 점수를 분리하고 네거티브 키워드로 관심 없는 공고를 감점하는 시스템으로 발전, GUI에서 키워드·가중치를 실시간 조정 가능하게 마감
4. **지원 CRM**: 스프레드시트로 관리하던 지원 현황을 칸반형 CRM으로 전환 — 매치에서 "지원함" 표시 시 카드가 자동 생성되고 사용한 이력서·메모를 기록. 이후 인터뷰 준비·트래킹, Gmail 동기화(자동 업데이트) 추가
5. **풀 리팩터링**: 초기 Streamlit+SQLite로 빠르게 만들었으나 다중 사용자 대응을 위해 백엔드는 Python/FastAPI 유지, 프런트는 React/TypeScript로 재작성, DB는 Postgres로 이전. Cloudflare·Railway·Hostinger에 배포
6. **워크플로 전환점(Fable 등장)**: Fable 도입 후 UI 전면 개편을 맡기고, 이후로는 본인이 리서치·기능 기획만 하고 "Fable이 계획 → 서브에이전트가 구현 → Fable이 리뷰"하는 구조로 전환 — 저자는 이를 "가장 큰 생산성 도약"으로 꼽음
7. **분석 계층**: 점수 구간별 회신율, 어떤 이력서 버전이 잘 통했는지, 리퍼럴 효과, 공고 게시 48시간 내 지원 여부의 영향, 스크리닝/인터뷰 도달과 상관된 키워드 등을 트래킹하는 애널리틱스 추가

## 벤치마크 데이터

| 항목 | 값 |
|------|-----|
| 모델 | Claude(Fable 5) — 리팩터링 이후 Fable이 계획·리뷰, 서브에이전트가 구현 담당. 초기 단계 모델은 미확인 |
| 비용 | 미확인 |
| 권한 | 미확인 |
| 성숙도 | production — searchsteward.com으로 실제 배포, 무료 사용 + 유료 티어 운영 중 |

## 성과와 수치

**일화(anecdotal) — 개인 경험담, 정량 검증 없음:**

- 도구를 만들고 사용하며 9주 만에 신규 입사
- 개인 프로젝트가 무료+유료 티어를 갖춘 실제 제품(SearchSteward)으로 성장
- 스택 전환: Streamlit/SQLite(1차) → React/TypeScript + FastAPI + Postgres(리팩터링 후), Cloudflare·Railway·Hostinger에 분산 배포

투입 시간, 구체적 반응률·전환율 수치, 비용 등은 원문에 없어 미확인으로 남긴다.

## 재현 가이드

- **난이도**: 중~상 (스크래핑·스코어링·CRM·리팩터링까지 이어지는 다단계 vibe-coding 프로젝트, 최종적으로 프로덕션급 풀스택 전환 필요)
- **준비물**: Claude(Claude Code 등), 대상 산업의 ATS 게시판 목록, Gmail 등 연동 계정, 최종 배포용 호스팅(Cloudflare/Railway/Hostinger 사례)
- **핵심 단계**:
  1. 경력 텍스트 덤프를 Claude로 구조화해 마스터 이력서·타깃 직무 정리
  2. ATS 게시판 스크래핑 스크립트로 공고를 수집해 원자료(CSV 등)로 저장
  3. 타이틀/설명 점수 분리 + 네거티브 키워드로 스코어링 시스템 고도화, 조정 가능한 GUI 부착
  4. 지원 현황을 칸반 CRM으로 관리하고 이메일 동기화로 상태 자동 갱신
  5. 사용자가 늘어나는 시점에 맞춰 프로덕션 스택(React/FastAPI/Postgres)으로 리팩터링
  6. 회신율·이력서 버전별 성과 등을 트래킹하는 분석 계층을 마지막에 추가해 개선 루프를 닫는다

## 강의·AX 활용 포인트

- **강의**: "vibe-coding으로 시작해 서브에이전트 파이프라인으로 진화"하는 전형적인 1인 프로젝트 성장 서사로, 초급자에게 Claude Code 학습 로드맵을 보여주는 사례로 적합. "Fable이 계획, 서브에이전트가 구현·리뷰" 구조는 에이전트 역할 분리 개념 설명에 유용.
- **AX**: 개인 생산성 도구가 실제 SaaS 제품으로 전환된 사례는 "사내 자동화 도구를 외부 제품화"하는 시나리오의 참고가 될 수 있음. 단, 전 구간이 자기 보고(anecdotal)라 도입 근거로 쓸 때는 보조 사례로만 활용할 것.

## 출처

- 원문: [Reddit r/ClaudeAI — "Laid off in March, I built a job-search tool almost entirely with Claude. Here's the whole process."](https://old.reddit.com/r/ClaudeAI/comments/1uyky9u/laid_off_in_march_i_built_a_jobsearch_tool_almost/) (2026-07-17)
- 제품: https://searchsteward.com
