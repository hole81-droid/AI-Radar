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

## 리서치 (research)

- [[ai-radar-daily-scan-pipeline]] — ★실측 벤치마크 케이스. Claude Code로 cron+서브에이전트(sonnet/low)를 활용해 매일 AI 뉴스 스캔·뉴스레터 작성을 무인 수행 → 회당 약 $0.15~0.30·5~9분 (실측 토큰 기반, 이 저장소가 원본)
- [[angstrom-claude-code-gpu-experiments]] — Claude Code로 anycloud CLI(멀티클라우드 스팟 GPU 오케스트레이션)를 활용해 소재과학 10만 GPU 실험을 무인 수행 → 결과 모델 DFT 대비 1만 배 속도, Meta 모델 능가 (자체 보고)
- [[wiki-builder-claude-code-llm-wiki]] — Claude Code 플러그인(스캐폴딩+SKILL.md)으로 LLM 지식베이스 구축·유지보수 전 루프를 수행 → 벡터DB 없이 순수 마크다운 기반 자가 유지보수 (주장)
- [[track-hanta-claude-opus-monitoring-tracker]] — Claude Opus 4.7로 다중 소스 수집·요약 파이프라인을 활용해 공공 보건(한타바이러스) 실시간 모니터링을 수행 → 개인 프로젝트 자동 운영 (일화)

## 개발 자동화 (dev-automation)

- [[agent-loops-daily-pr-review]] — Claude Code+Codex로 cron 루프+전담 서브에이전트를 활용해 일일 PR 전수 검토·주간 스킬 생성을 수행 → Firefox 한 달 423건 보안 수정 (주장)
- [[claude-code-goal-routines-nightly-quality]] — Claude Code로 /goal+cron을 활용해 야간 코드 품질 점검·보고서 작성을 수행 → 완전 무인 정기 실행 (수치 미확인)
- [[codex-automations-scheduled-maintenance]] — Codex Automations로 예약 실행+워크트리 격리를 활용해 정기 유지보수 업무를 수행 → 무인 반복 실행 (수치 미확인)
- [[ktcloud-fe-team-claude-code-adoption]] — Claude Code로 Agent–Skill–Context–Loop 아키텍처를 활용해 FE팀 개발 프로세스 표준화를 수행 → 팀 단위 재현 가능 프로세스 (수치 미공개)
- [[fleet-orchestrator-claude-codex-10-agents]] — Claude Code+Codex로 자체 오케스트레이터(중앙 DB+MCP)를 활용해 코딩 에이전트 10~15개 동시 운영을 수행 → 수 주간 지속, 계층형 지식베이스로 전환 (자기 보고)
- [[three-agents-nonstop-beads-worktree]] — Claude·Codex·Opencode+로컬 Qwen으로 Beads+Git worktree를 활용해 코딩 작업 3일 무인 병렬 개발을 수행 → 3일 논스톱 운영 지속 (자기 보고)
- [[openai-codex-maxxing-25-hour]] — Codex(GPT-5.1-Codex-Max)로 지속 스레드+목표 분할을 활용해 대형 개발 작업 장시간 자율 수행을 수행 → 25시간 연속, 3만 줄 코드 생성 (공식 발표)
- [[simon-willison-claude-release-qa]] — ★실측 벤치마크 케이스. Claude Code(서브에이전트)+GPT-5.5 교차검증으로 오픈소스 릴리스 전 QA를 수행 → 버그 7건 발견, 실측 비용 $149.25
- [[onepassword-claude-agents-monolith-refactor]] — 자체 에이전틱 툴체인(코드분석+추출순서+결정론적 실행)으로 수백만 라인 Go 모놀리스 서비스 분해를 수행 → 전체 20~30% 개선, 명세 밖 문제는 표면화만 (실측)
- [[claude-managed-agents-dreaming-outcomes-orchestration]] — Claude Managed Agents(드리밍+아웃컴즈+오케스트레이션)로 에이전트 팀 자가개선·품질평가·병렬분업 운영을 수행 → 아웃컴즈 문서품질 8~10% 향상 (자체 발표)

## 보안·운영 (ops)

- [[mozilla-claude-mythos-firefox-vulnerability-detection]] — ★실측 벤치마크 케이스. Claude Mythos로 조종·확장·적층 탐지 파이프라인을 활용해 Firefox 코드베이스 보안 취약점 자동 탐지를 수행 → 월간 보안 수정 20~30건→423건, 약 14배 (실측)

## 금융 (finance)

- [[openai-thrive-tax-ai-self-improving]] — ★실측 벤치마크 케이스. OpenAI Codex 기반 자가개선 루프로 미국 세무 신고서(1040·1041) 준비를 수행 → 정확도 97%, 처리량 50%↑, 회계사 1인당 180시간→15시간 (실측)

## 개인 생산성 (personal-productivity)

- [[cowork-7-business-use-cases]] — Claude Cowork로 MCP 커넥터+브라우저 녹화 스킬화를 활용해 사무 업무 7종을 수행 → 경비 처리 월 2시간→10분 (주장)
- [[gemini-spark-claude-cowork-routing]] — Gemini Spark+Claude Cowork로 작업 유형별 이원 라우팅을 활용해 상시 모니터링과 문서 산출물을 분담 수행 → 커버리지 확보 (수치 미확인)
- [[tom-riddle-diary-remarkable]] — 커스텀 앱(비전 LLM)으로 손글씨 캡처→필기체 렌더링 파이프라인을 활용해 전자잉크 태블릿을 AI 대화 상대로 전환 → 첫 응답 0.9~1.1초 (실측)
- [[codex-personal-assistant-multi-messenger]] — Codex로 gogcli+wacli+브라우저/OS 자동화를 활용해 이메일·멀티메신저·캘린더 개인비서 업무를 수행 → 확인 작업 20분→10초 (주장)

## HR (hr)

- [[jocoding-ax-series-pwc-samil]] — 자체 AI 심사 에이전트로 채용 서류 전형을 전면 대체해 AI 실무 인재 선발을 수행 → 지원 5,000명 전형 자동화, 본선 60명 (주장)

---
*벤치마크 요약: 24건 중 모델·비용·권한 3필드 전부 확인 2건
([[ai-radar-daily-scan-pipeline]] 실측·자기참조, [[gemini-spark-claude-cowork-routing]]).
모델·비용 2필드까지 확인된 케이스 1건: [[simon-willison-claude-release-qa]] (실측 $149.25,
권한만 미확인). 모델 필드만 확인된 실측 성과 케이스 2건 추가: [[mozilla-claude-mythos-firefox-vulnerability-detection]](14배),
[[openai-thrive-tax-ai-self-improving]](97%·50%↑·180h→15h) — 둘 다 비용·권한은 미확인이지만
성과 수치 자체는 다수 매체·공식 발표로 교차 확인된 실측(measured) 케이스다.
[[ai-radar-daily-scan-pipeline]]과 [[simon-willison-claude-release-qa]]는 독자가 직접 검증
가능한 유일한 완전 실측 케이스로, 에이전트 비용 산정의 기준점(anchor)이다. 나머지 외부 케이스의
수치 실측 검증이 다음 과제.*
