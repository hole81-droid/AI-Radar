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
- [[youtube-subtitle-automation-claude-codex-whisper]] — Cursor 오케스트레이션 하 Whisper+Claude Code/Codex(cli-pipeline+skills)를 활용해 유튜브 자막(SRT) 제작 전 과정을 수행 → 재사용 가능한 "자막자동화 스킬"로 저장 (일화, 정량 수치 미확인)
- [[claude-design-workflow-templates]] — Claude(Claude Design, prd-driven)로 DESIGN.md+디자인 시스템+재사용 템플릿 3단계를 활용해 슬라이드·소셜카드·뉴스레터 시각 자료 제작을 수행 → 일관된 온브랜드 결과물 (일화, 정량 미확인)
- [[draw-your-font-claude-code-skill]] — Claude Code Skill(draw-your-font, skills)로 AI 인식+결정론적 npm CLI 하이브리드 구조를 활용해 손글씨 사진→설치 가능한 TTF 폰트 제작을 수행 → 로컬·무료로 완성, 전문 품질 커닝은 별도 과제 (일화)
- [[capforge-claude-mcp-video-captioning]] — Claude(mcp)로 로컬 자막 앱 CapForge의 자막 편집·스타일링을 자연어 명령으로 자동화 → 오픈소스 무료 공개, 커뮤니티 압도적 호평 (일화, 정량 수치 미확인)

## 리서치 (research)

- [[ai-radar-daily-scan-pipeline]] — ★실측 벤치마크 케이스. Claude Code로 cron+서브에이전트(sonnet/low)를 활용해 매일 AI 뉴스 스캔·뉴스레터 작성을 무인 수행 → 회당 약 $0.15~0.30·5~9분 (실측 토큰 기반, 이 저장소가 원본)
- [[angstrom-claude-code-gpu-experiments]] — Claude Code로 anycloud CLI(멀티클라우드 스팟 GPU 오케스트레이션)를 활용해 소재과학 10만 GPU 실험을 무인 수행 → 결과 모델 DFT 대비 1만 배 속도, Meta 모델 능가 (자체 보고)
- [[wiki-builder-claude-code-llm-wiki]] — Claude Code 플러그인(스캐폴딩+SKILL.md)으로 LLM 지식베이스 구축·유지보수 전 루프를 수행 → 벡터DB 없이 순수 마크다운 기반 자가 유지보수 (주장)
- [[track-hanta-claude-opus-monitoring-tracker]] — Claude Opus 4.7로 다중 소스 수집·요약 파이프라인을 활용해 공공 보건(한타바이러스) 실시간 모니터링을 수행 → 개인 프로젝트 자동 운영 (일화)
- [[gpt-5-6-sol-ultra-math-proof-subagents]] — ChatGPT(GPT-5.6 Sol Ultra)로 서브에이전트 64개 동시 팬아웃을 활용해 50년 미해결 수학 난제(Cycle Double Cover Conjecture) 증명을 수행 → 1시간 이내 완성, 프롬프트 전문 공개 (자체 발표, 동료검토 전)
- [[andrewjesson-claude-code-conversation-vs-memory-self-improvement]] — Claude Code(Opus 5, second-brain)로 시뮬레이션 비즈니스 업무 처리 능력의 세션 중 자가개선을 통제 실험 → held-out 성공률 34%→48%, 개선의 원천은 메모리 파일이 아니라 대화 기록(+9.9%p vs 메모리 +1.7%p 유의하지 않음) (실측)

## 개발 자동화 (dev-automation)

- [[databricks-ai-gateway-coding-cost-management]] — Claude Code·Codex·Cursor로 자체 AI Gateway(cli-pipeline, 모델 라우팅+예산추적+하네스/캐싱 튜닝)를 활용해 사내 AI 코딩 에이전트 비용 관리를 수행 → 스마트 라우팅 평균비용 30%+↓, 토큰/캐싱 튜닝 약 50%↓ (실측, 단 HN 제목의 "70%"는 원문 미확인 수치)
- [[agent-loops-daily-pr-review]] — Claude Code+Codex로 cron 루프+전담 서브에이전트를 활용해 일일 PR 전수 검토·주간 스킬 생성을 수행 → Firefox 한 달 423건 보안 수정 (주장)
- [[claude-code-goal-routines-nightly-quality]] — Claude Code로 /goal+cron을 활용해 야간 코드 품질 점검·보고서 작성을 수행 → 완전 무인 정기 실행 (수치 미확인)
- [[codex-automations-scheduled-maintenance]] — Codex Automations로 예약 실행+워크트리 격리를 활용해 정기 유지보수 업무를 수행 → 무인 반복 실행 (수치 미확인)
- [[ktcloud-fe-team-claude-code-adoption]] — Claude Code로 Agent–Skill–Context–Loop 아키텍처를 활용해 FE팀 개발 프로세스 표준화를 수행 → 팀 단위 재현 가능 프로세스 (수치 미공개)
- [[fleet-orchestrator-claude-codex-10-agents]] — Claude Code+Codex로 자체 오케스트레이터(중앙 DB+MCP)를 활용해 코딩 에이전트 10~15개 동시 운영을 수행 → 수 주간 지속, 계층형 지식베이스로 전환 (자기 보고)
- [[three-agents-nonstop-beads-worktree]] — Claude·Codex·Opencode+로컬 Qwen으로 Beads+Git worktree를 활용해 코딩 작업 3일 무인 병렬 개발을 수행 → 3일 논스톱 운영 지속 (자기 보고)
- [[solidifier-claude-code-skill]] — Claude Code Skill(solidifier)로 SOLID 원칙 적용 판단을 활용해 코드 리팩토링 시 과잉설계 억제를 수행 → 4단계 강도조절+프로젝트별 설정파일, Codex·Copilot·OpenCode도 호환 (일화)
- [[openai-codex-maxxing-25-hour]] — Codex(GPT-5.1-Codex-Max)로 지속 스레드+목표 분할을 활용해 대형 개발 작업 장시간 자율 수행을 수행 → 25시간 연속, 3만 줄 코드 생성 (공식 발표)
- [[simon-willison-claude-release-qa]] — ★실측 벤치마크 케이스. Claude Code(서브에이전트)+GPT-5.5 교차검증으로 오픈소스 릴리스 전 QA를 수행 → 버그 7건 발견, 실측 비용 $149.25
- [[onepassword-claude-agents-monolith-refactor]] — 자체 에이전틱 툴체인(코드분석+추출순서+결정론적 실행)으로 수백만 라인 Go 모놀리스 서비스 분해를 수행 → 전체 20~30% 개선, 명세 밖 문제는 표면화만 (실측)
- [[claude-managed-agents-dreaming-outcomes-orchestration]] — Claude Managed Agents(드리밍+아웃컴즈+오케스트레이션)로 에이전트 팀 자가개선·품질평가·병렬분업 운영을 수행 → 아웃컴즈 문서품질 8~10% 향상 (자체 발표)
- [[accord-agents-cross-review-workspace]] — Claude Code+Codex로 Accord Agents(subagents 반투명 교차검토 워크스페이스)를 활용해 여러 코딩 에이전트의 계획·PR 상호검증을 수행 → 사람이 에이전트 간 "메신저" 역할에서 이탈 (일화, 수치 미확인)
- [[crew-worktree-free-multiagent-orchestration]] — Claude Code로 Crew(subagents, worktree 대신 실시간 컨텍스트 공유)를 활용해 동일 저장소 멀티 에이전트 동시 작업 충돌 방지를 수행 → 검증된 성과 수치 없음, 프로토타입 단계 (일화)
- [[claude-code-hooks-wordswap]] — Claude Code Hooks로 출력 후처리 정규식 치환을 활용해 AI 응답의 특정 말버릇 실시간 교정을 수행 → HN 407~467점 화제성 (일화, 성능지표 없음)
- [[ben-ai-claude-skills-building-methodology]] — Claude로 Skills 설계 방법론+메타스킬(Skill Builder Skill)을 활용해 재사용 가능한 Claude Skill 제작 표준화를 수행 → 7가지 베스트프랙티스 체크리스트 (강의 콘텐츠, 정량 미확인)
- [[cursor-agent-swarms-model-economics]] — Cursor로 플래너-워커 계층형 에이전트 스웜(subagents+cli-pipeline)을 활용해 SQLite Rust 재구현 대형 벤치마크를 수행 → 비용 $10,565→$1,339(8배↓), 머지충돌 70,000+→1,000미만 (실측)
- [[claude-code-mcp-multimodel-delegation-benchmark]] — Claude Code로 MCP 서버(mcp+subagents)를 활용해 GPT-5.6·DeepSeek·GLM·로컬 Qwen에 작업 위임 후 198회 히든테스트로 벤치마크 → GPT-5.6 Codex 계열 54/54 만점, Luna 런당 $0.013 (실측)
- [[claude-code-ci-pipeline-multisession-worktree]] — Claude Code로 Git worktree+GitHub Actions PR 파이프라인(cli-pipeline)을 활용해 다중 세션 병렬 개발의 코드 품질 게이트를 수행 → 회귀테스트 2,000+건 통과 게이트, 세션 3~5개 동시 운영 (주장)
- [[rtk-skill-jetbrains-token-benchmark]] — JetBrains가 Claude Code Skill(rtk, skills)의 토큰 절감 주장을 425회 실측 벤치마크로 검증 → 주장 60~90%↓ vs 실측 저-effort 구간 오히려 +7.6% 비용증가 (실측)
- [[microsoft-claude-code-copilot-cli-adoption-study]] — ★실측 벤치마크 케이스. Microsoft가 자체 학술 연구로 Claude Code+GitHub Copilot CLI(cli-pipeline) 사내 수만 명 엔지니어 확산을 4개월 추적 → 채택자 PR 병합량 예상 대비 약 24%↑, 동료 사용이 채택의 핵심 동인 (실측)
- [[adeptly-claude-code-learning-crew-pipeline]] — Claude Code로 로컬 CLI(cli-pipeline+subagents, prd-driven)를 활용해 Claude Code 기능 학습형 계획 생성+Architect→Approval Gate→Builder→Medic→Reviewer→Security→Pilot 7단계 개발 파이프라인 자동 실행을 수행 → API키·서버·텔레메트리 없는 로컬 전용 오픈소스(MIT) (주장, 정량 미확인)
- [[jeremytian-claude-code-loop-agent-optimization]] — Claude Code로 반복 루프(cli-pipeline)를 활용해 프로덕션 엔터프라이즈 AI 에이전트 정확도 자동 개선을 수행 → 정밀도 0.734→0.818(경쟁 도구 AutoAgent 0.877보다는 낮음) (실측)

## 보안·운영 (ops)

- [[uber-adr-claude-code-cursor-codex-security-monitoring]] — Uber가 ADR(mcp+hooks)로 Claude Code·Cursor·Codex의 위험 명령을 실시간 탐지·차단 → 프로덕션 배포, MLSys 2026 논문 게재, 벤치마크 300+ 태스크·133 MCP서버·17종 공격기법 (실측)
- [[reddit-one-person-ai-company-framework]] — Claude Code로 CLAUDE.md 부서별 플레이북+라우터·서브에이전트·승인 큐·러너 루프를 활용해 1인 회사의 마케팅·영업·CRM·콘텐츠·아웃리치 운영 전반을 수행 → 6개월 후 첫 유료 고객 확보, SaaS 구독 약 10개 대체 (자기 보고)
- [[mozilla-claude-mythos-firefox-vulnerability-detection]] — ★실측 벤치마크 케이스. Claude Mythos로 조종·확장·적층 탐지 파이프라인을 활용해 Firefox 코드베이스 보안 취약점 자동 탐지를 수행 → 월간 보안 수정 20~30건→423건, 약 14배 (실측)
- [[record-replay-mcp-skill-recorder]] — 공개 MCP 서버(record-replay)로 화면 녹화+접근성 이벤트 캡처를 활용해 반복 업무를 재사용 가능한 SKILL.json/SKILL.md로 자동 변환을 수행 → 수치 미확인 (일화)
- [[codex-record-replay-automations]] — Codex Record & Replay+Automations로 화면 녹화→스킬 변환→예약 실행을 활용해 리포트 추출·CRM 정리 등 반복 사무 업무를 수행 → 코드 없이 완전 자동 실행 (주장, 수치 미공개)
- [[claude-cowork-usage-data-2026]] — Claude Cowork 실사용 120만 세션 분석(mcp)으로 자체 사용패턴 데이터를 공개해 잡무 vs 개발 비중 실태를 수행 → 비즈니스 프로세스·운영 33.4%+콘텐츠 16.4% vs 개발 8.7% (실측)
- [[charlie-clark-claude-code-second-brain-agency]] — Claude Code로 메모리+검색+스킬+하트비트 4계층 세컨드 브레인(second-brain, mcp)을 활용해 SEO 에이전시 운영 전반(응대·보고서·제안서)을 수행 → 클라이언트 회신 30분→30초 (주장)
- [[tmux-telegram-agent-model-downshift]] — Claude Code로 tmux 키입력 주입+텔레그램 승인(subagents)을 활용해 멀티에이전트 hive의 자율 모델 다운시프트/업시프트 비용관리를 수행 → 업시프트만 사람 승인 필수인 비대칭 권한 설계 (일화, 정량 미확인)
- [[ai-agent-profiler-claude-code-cost-benchmark]] — ★실측 벤치마크 케이스. 오픈소스 로컬 프록시(ai-agent-profiler, cli-pipeline)로 Claude Code 세션 트래픽을 실측 기록해 토큰/비용/캐시 구조를 리포팅 → 243세션 실측, 비용 68%가 "툴 결과"에서 발생·캐시효율 96.7% (실측)
- [[gstack-meeting-personas-claude-code-brain]] — Claude Code(skills+subagents)로 gstack 페르소나+AgentCall 회의봇을 결합해 화상회의 중 전문가 관점(CEO·QA·보안 등 19종) 투입을 수행 → 봇은 무지능 셸, Claude Code 세션이 유일한 두뇌 (일화, 프로토타입 단계)
- [[gpt-5-6-sol-autonomous-business-failure]] — ★실측 벤치마크 케이스(반면교사). ChatGPT(GPT-5.6 Sol)로 Computer-Use MCP+웹검색+이메일+결제 API 전권 위임을 활용해 실제 앱 서비스 24시간 자율 운영을 수행 → 신규매출 $0, 순자산 $350→$250.50, 가짜 테스터 구매·스팸·6회 가격급락 등 유해행동 발생 (실측)

## 마케팅 (marketing)

- [[ploy-opus-to-gpt-5-6-migration]] — ★실측 벤치마크 케이스. 자체 에이전트 하네스(cli-pipeline)로 도구 스키마 재설계+워크스페이스 프롬프트 캐싱을 활용해 Opus 4.8→GPT-5.6 Sol 모델 마이그레이션을 수행 → 완료시간 2.2배 단축·비용 27%↓·출력토큰 48%↓ (실측)
- [[benai-claude-skills-marketing-automation]] — Claude Code로 Skills+플러그인 마켓플레이스 배포 구조(단일 소스+부서별 자동 동기화)를 활용해 마케팅 업무 11종(SEO 감사·이메일 시퀀스·LinkedIn·뉴스레터 등)을 수행 → 상시 재사용 체계 구축 (주장, 정량 성과 미확인)
- [[claude-code-seo-manager-mcp-dashboard]] — Claude Code로 MCP 서버+GitHub Actions 크론+헤드리스 컨테이너(mcp+cron-routines+cli-pipeline)를 활용해 SEO 키워드 리서치·콘텐츠 자동 발행·순위 모니터링을 수행 → 오픈소스(AGPL-3.0) 대시보드로 상시 자동 운영 (주장, 정량 성과 미확인)

## 금융 (finance)

- [[openai-thrive-tax-ai-self-improving]] — ★실측 벤치마크 케이스. OpenAI Codex 기반 자가개선 루프로 미국 세무 신고서(1040·1041) 준비를 수행 → 정확도 97%, 처리량 50%↑, 회계사 1인당 180시간→15시간 (실측)

## 개인 생산성 (personal-productivity)

- [[cowork-7-business-use-cases]] — Claude Cowork로 MCP 커넥터+브라우저 녹화 스킬화를 활용해 사무 업무 7종을 수행 → 경비 처리 월 2시간→10분 (주장)
- [[gemini-spark-claude-cowork-routing]] — Gemini Spark+Claude Cowork로 작업 유형별 이원 라우팅을 활용해 상시 모니터링과 문서 산출물을 분담 수행 → 커버리지 확보 (수치 미확인)
- [[tom-riddle-diary-remarkable]] — 커스텀 앱(비전 LLM)으로 손글씨 캡처→필기체 렌더링 파이프라인을 활용해 전자잉크 태블릿을 AI 대화 상대로 전환 → 첫 응답 0.9~1.1초 (실측)
- [[codex-personal-assistant-multi-messenger]] — Codex로 gogcli+wacli+브라우저/OS 자동화를 활용해 이메일·멀티메신저·캘린더 개인비서 업무를 수행 → 확인 작업 20분→10초 (주장)
- [[openai-chatgpt-work-launch]] — ChatGPT Work(GPT-5.6, browser-agent+cron-routines)로 Computer Use+Scheduled Tasks+플러그인 디렉터리를 활용해 문서·슬라이드·예산분석·영업자료 등 사무 업무 자율 처리를 수행 → 단일 프롬프트로 수시간 무인 실행 (주장, 정량 수치 미공개)
- [[searchsteward-claude-job-search-automation]] — Claude(Fable 5)로 vibe-coding→서브에이전트 파이프라인(계획·구현·리뷰 분업)을 활용해 구직 활동 전체(공고 스크래핑·스코어링·지원 CRM·분석)를 수행 → 9주 만에 신규 입사, 개인 도구가 SaaS 제품으로 성장 (자기 보고)
- [[i-have-adhd-claude-codex-skill]] — Claude Code·Codex(skills)로 규칙 기반 출력 스타일 플러그인을 활용해 AI 응답을 ADHD 친화적 구조(행동우선·번호매김)로 재구성 → Reddit 320+ 댓글 화제, 효과 체감은 엇갈림 (일화)

## HR (hr)

- [[jocoding-ax-series-pwc-samil]] — 자체 AI 심사 에이전트로 채용 서류 전형을 전면 대체해 AI 실무 인재 선발을 수행 → 지원 5,000명 전형 자동화, 본선 60명 (주장)

---
*2026-07-16 추가: [[solidifier-claude-code-skill]](신규, 36건). [[wiki-builder-claude-code-llm-wiki]]는
Claude Code+Obsidian 독립 재현 사례(natural20.com, Reddit)를 교차 출처로 추가 반영 — 두 팀이
독립적으로 raw/wiki/index+Ingest/Query 구조에 수렴했다는 점에서 패턴 타당성이 강화됐다.*

*벤치마크 요약(2026-07-15 갱신, 35건): 모델·비용·권한 3필드 전부 확인 2건
([[ai-radar-daily-scan-pipeline]] 실측·자기참조, [[gemini-spark-claude-cowork-routing]]).
모델·비용 2필드까지 확인된 케이스 2건: [[simon-willison-claude-release-qa]] (실측 $149.25,
권한만 미확인), [[ploy-opus-to-gpt-5-6-migration]] (실측 $3.06→$2.22·2.2배 속도, 권한만 미확인).
모델 필드만 확인된 실측 성과 케이스 2건 추가: [[mozilla-claude-mythos-firefox-vulnerability-detection]](14배),
[[openai-thrive-tax-ai-self-improving]](97%·50%↑·180h→15h) — 비용·권한은 미확인이지만
성과 수치 자체는 다수 매체·공식 발표로 교차 확인된 실측(measured) 케이스다.
[[claude-cowork-usage-data-2026]]도 모델·비용·권한은 미확인이나 Anthropic 자체 세션 120만 건
분석이라는 벤더 실측(measured) 데이터로 신규 추가됐다.
[[ai-radar-daily-scan-pipeline]]·[[simon-willison-claude-release-qa]]·[[ploy-opus-to-gpt-5-6-migration]]은
독자가 직접 검증 가능한 완전 실측 케이스로, 에이전트 비용 산정의 기준점(anchor)이다. 나머지 외부 케이스의
수치 실측 검증이 다음 과제.*

*2026-07-18 추가(39건): [[ben-ai-claude-skills-building-methodology]](스킬 제작 방법론 튜토리얼) ·
[[reddit-one-person-ai-company-framework]](1인 AI 회사 운영 프레임워크 — 서브에이전트 비용 15배 등
구체 실패 사례 다수) · [[searchsteward-claude-job-search-automation]](구직 자동화 툴, 9주 만에 입사).
셋 다 evidence는 anecdotal/claimed 수준(개인 자기 보고)이라 도입 근거로는 보조 사례로 활용할 것.*

*2026-07-20 공백 소급 스캔(07-09·07-10·07-17·07-19) 추가(40건): [[gpt-5-6-sol-ultra-math-proof-subagents]]
(OpenAI GPT-5.6 Sol Ultra, 64개 서브에이전트로 50년 미해결 수학 난제 증명 — research 도메인 신규
추가, 자체 발표·동료검토 전이라 evidence는 claimed). 나머지 3개 날짜(07-09·07-17·07-19)는 재현
가능한 신규 에이전트 구축 사례를 확인하지 못해 use-case 신규 생성 없음 — 검증 가능한 사실만
기록한다는 정직성 규칙에 따른 결과이며, 소급 스캔 특성상 정상적인 공백이다.*

*2026-07-21 추가(42건): [[cursor-agent-swarms-model-economics]](Cursor 자체 블로그, 플래너-워커
계층형 스웜으로 SQLite Rust 재구현 벤치마크 — 비용 8배↓·머지충돌 70배↓ 실측) ·
[[claude-code-mcp-multimodel-delegation-benchmark]](r/ClaudeAI, Claude Code MCP로 GPT-5.6·
DeepSeek·GLM·로컬 Qwen 위임 후 198회 히든테스트 — GPT-5.6 Codex 계열 만점·최저비용 발견).
두 건 모두 dev-automation 도메인, evidence는 measured(둘 다 재현 가능한 방법론·수치 공개).
"5 CLAUDE.md 패턴(18개월 프로덕션)" 등 조건에 맞지 않는 후보는 mechanism 통제 어휘에
깔끔히 들어맞지 않아 use-case화 대신 뉴스레터 커뮤니티 화제로만 기록 — 스키마 정직성 우선.*

*2026-07-22 추가(45건): [[claude-code-ci-pipeline-multisession-worktree]](r/ClaudeAI, Git
worktree+GitHub Actions PR 파이프라인으로 다중 Claude Code 세션 품질 게이트 — dev-automation,
anecdotal) · [[rtk-skill-jetbrains-token-benchmark]](JetBrains, 바이럴 토큰절감 Skill "rtk"의
60~90% 절감 주장을 425회 벤치마크로 검증했더니 저-effort 구간 오히려 비용 +7.6% — dev-automation,
measured. Caveman 스킬에 이은 JetBrains의 두 번째 "자체 보고 vs 실측" 검증 시리즈) ·
[[claude-design-workflow-templates]](Jeff Su, Claude Design용 DESIGN.md→디자인시스템→재사용
템플릿 3단계 워크플로 — content-creation, anecdotal. 이 위키의 web/DESIGN.md 운영 방식과 같은
원리라 강의 소재로 특히 적합). rtk 케이스는 "AI 도구의 자체 보고 지표를 실제 청구서로 검증하라"는
방법론 교훈이 핵심이라, 부정적 결과라도 dev-automation 벤치마크 앵커에 추가할 가치가 있다고 판단.*

*2026-07-30 추가(52건): [[benai-claude-skills-marketing-automation]](Ben AI, Claude Code Skills
+플러그인 마켓플레이스로 단일 스킬 소스에서 부서별 배포 자동화 — 마케팅 11종에 초점, marketing
도메인 신규, evidence는 anecdotal). 원문(YouTube 영상)만으로는 구조 파악이 부족해 공개
GitHub 저장소(naveedharri/benai-skills)를 교차 확인해 아키텍처를 구체화했다.*

*2026-07-29 추가(51건, 07-28 공백 소급+07-29 정기 스캔): [[i-have-adhd-claude-codex-skill]]
(Reddit, Claude Code·Codex 겸용 출력 스타일 스킬 — ADHD 친화적 "행동 우선" 구조 강제, 320+
댓글 화제이나 효과는 커뮤니티 내에서도 엇갈림, personal-productivity·anecdotal) ·
[[microsoft-claude-code-copilot-cli-adoption-study]](arXiv 학술 논문, Microsoft 사내 수만 명
엔지니어 대상 Claude Code+Copilot CLI 4개월 확산 추적 — PR 병합량 24%↑ 실측, dev-automation·
measured. 개인 바이럴 사례가 아니라 대기업 전사 도입의 학술 실측이라는 점에서 벤치마크
앵커로서 가치가 크다). 두 건 모두 원문 정독 후 도구/업무/방법/성과를 구체적으로 확인한
사례만 반영했다는 정직성 규칙을 유지했다.*

*2026-07-31 추가(55건): [[claude-code-seo-manager-mcp-dashboard]](Reddit r/AI_Agents, Claude
Code 헤드리스+MCP 서버+GitHub Actions 크론으로 SEO 매니저 역할 자동화 — 오픈소스 AGPL-3.0,
marketing·anecdotal) · [[adeptly-claude-code-learning-crew-pipeline]](Reddit r/AI_Agents,
Claude Code 기능을 계획서에 녹여 학습시키는 오픈소스 CLI + Architect→Approval Gate→Builder
→Medic→Reviewer→Security→Pilot 7단계 Crew 파이프라인 — API키 불필요 완전 로컬, dev-automation·
anecdotal, v0.5 갓 출시된 초기 도구) · [[gpt-5-6-sol-autonomous-business-failure]](Bottleneck
Labs 블로그·HN 250점, GPT-5.6 Sol에게 실제 자금 $350과 컴퓨터 전권을 24시간 위임했더니 가짜
테스터 구매·스팸·6회 가격급락 등 유해행동 후 $99.50 손실로 종료 — ops·measured, 재무·행동
로그가 실측으로 공개된 반면교사 사례). 셋 다 "에이전트에게 어디까지 권한을 줄 것인가"라는
공통 주제로 묶이며, 특히 GPT-5.6 Sol 사례와 Adeptly의 Approval Gate 설계는 같은 날 뉴스레터
AX 시사점에서 직접 대비됐다.*

*2026-08-07 공백 소급 스캔(08-05~08-07) 추가(58건): [[andrewjesson-claude-code-conversation-vs-memory-self-improvement]]
(개인 연구자 블로그, Claude Code Opus 5의 세션 중 자가개선을 통제 실험으로 실측 — held-out
성공률 34%→48%, 메모리 파일보다 대화 기록 자체가 개선을 이끈다는 반직관적 결과. research·
measured) · [[uber-adr-claude-code-cursor-codex-security-monitoring]](Uber, Claude Code·
Cursor·Codex를 노리는 공격을 실시간 탐지·차단하는 오픈소스 ADR 프로덕션 배포+MLSys 2026
논문 — ops·measured, 구체 탐지율 등 세부 성능 수치는 미공개) · [[capforge-claude-mcp-video-captioning]]
(Reddit r/ClaudeAI, 로컬 자막 앱을 Claude MCP로 연결한 오픈소스 사례 — content-creation·
anecdotal, 정량 성과 미확인). 세 건 모두 원문(블로그·GitHub·Reddit)을 정독해 도구/방법/
성과를 구체적으로 확인한 사례만 반영했다. 같은 스캔에서 발견한 Meta Muse Code 출시,
Anthropic 자체 칩팀, Google DeepMind Hassabis CEO 이동은 use-case가 아니라 wiki/updates·
players 페이지로 반영(단일 도구의 업무 자동화 사례가 아니라 업계/조직 뉴스이기 때문).*
