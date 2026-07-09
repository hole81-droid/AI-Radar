---
type: analysis
date: 2026-07-09
importance: high
uses: [course, ax]
---
# 에이전트·자동화 케이스 카탈로그

전체 use-case의 공식 한 줄 목록. 형식: **[도구]로 [방식]을 활용해 [업무]를 수행 → [성과]**.
상세(아키텍처·벤치마크·재현 가이드)는 각 페이지 참조. use-case 생성·갱신 시 이 카탈로그도 갱신한다.

## 콘텐츠 제작 (content-creation)

- [[claude-code-youtube-shorts-automation]] — Claude Code로 서브에이전트 6개 분업 파이프라인을 활용해 유튜브 영상 제작 전 과정을 수행 → 편당 사람 작업 5분·약 5,000원 (주장)
- [[claude-code-youtube-research-agent]] — Claude Code로 서브에이전트+MCP 3계층을 활용해 유튜브 채널 리서치를 수행 → 월 $15~35 유료 툴 대체, 1회 60초 (일화)
- [[suki-nondev-claude-code-automation]] — Claude Code(+크롬 확장)로 스킬 3파일 구성을 활용해 비개발자 콘텐츠·문서 업무를 수행 → "밤샘급" 업무 자동 완료, 강의 상품화 (주장)
- [[varun-mayya-5-ai-apps-500-person-company]] — AI 사내 앱 5종(vibe-coding)으로 500명 미디어 기업 영상 제작 전 과정을 수행 → 더빙 3배, 월 1,000+ 아바타 영상 (주장)

## 개발 자동화 (dev-automation)

- [[agent-loops-daily-pr-review]] — Claude Code+Codex로 cron 루프+전담 서브에이전트를 활용해 일일 PR 전수 검토·주간 스킬 생성을 수행 → Firefox 한 달 423건 보안 수정 (주장)
- [[claude-code-goal-routines-nightly-quality]] — Claude Code로 /goal+cron을 활용해 야간 코드 품질 점검·보고서 작성을 수행 → 완전 무인 정기 실행 (수치 미확인)
- [[codex-automations-scheduled-maintenance]] — Codex Automations로 예약 실행+워크트리 격리를 활용해 정기 유지보수 업무를 수행 → 무인 반복 실행 (수치 미확인)
- [[ktcloud-fe-team-claude-code-adoption]] — Claude Code로 Agent–Skill–Context–Loop 아키텍처를 활용해 FE팀 개발 프로세스 표준화를 수행 → 팀 단위 재현 가능 프로세스 (수치 미공개)

## 개인 생산성 (personal-productivity)

- [[cowork-7-business-use-cases]] — Claude Cowork로 MCP 커넥터+브라우저 녹화 스킬화를 활용해 사무 업무 7종을 수행 → 경비 처리 월 2시간→10분 (주장)
- [[gemini-spark-claude-cowork-routing]] — Gemini Spark+Claude Cowork로 작업 유형별 이원 라우팅을 활용해 상시 모니터링과 문서 산출물을 분담 수행 → 커버리지 확보 (수치 미확인)
- [[tom-riddle-diary-remarkable]] — 커스텀 앱(비전 LLM)으로 손글씨 캡처→필기체 렌더링 파이프라인을 활용해 전자잉크 태블릿을 AI 대화 상대로 전환 → 첫 응답 0.9~1.1초 (실측)

## HR (hr)

- [[jocoding-ax-series-pwc-samil]] — 자체 AI 심사 에이전트로 채용 서류 전형을 전면 대체해 AI 실무 인재 선발을 수행 → 지원 5,000명 전형 자동화, 본선 60명 (주장)

---
*벤치마크 요약: 12건 중 실측(measured) 1건 · 주장(claimed) 다수 — evidence 필드로 구분됨.
모델·비용·권한 3필드 모두 확인된 케이스는 [[gemini-spark-claude-cowork-routing]] 1건.
수치의 실측 검증이 이 카탈로그의 다음 개선 과제다.*
