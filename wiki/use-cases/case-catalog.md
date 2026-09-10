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
- [[jangpm-slide-master-claude-code-codex]] — Claude Code·Codex로 Skill 기반 PPT 제작 에이전트(skills)를 활용해 회사 양식 맞춤 슬라이드 제작을 수행 → 편집 가능한 네이티브 PPTX 오픈소스 무료 공개(MIT) (주장, 정량 성과 미확인)
- [[theaxlabs-claude-code-diagram-design-skill]] — Claude Code·Codex·Pi로 diagram-design 플러그인(skills)을 활용해 프레젠테이션용 다이어그램 27종 자동 생성을 수행 → 회사 브랜드 색상 자동 적용된 편집 가능 SVG/PNG (주장, 정량 성과 미확인)
- [[benai-claude-design-skill-workflow]] — Claude "/design" Skill(skills)로 디자인 시스템→템플릿→스킬→휴먼인더루프 4단계를 활용해 슬라이드 등 반복 디자인 작업 표준화를 수행 → 재사용 가능한 워크플로 확보 (일화, 정량 미확인)

## 리서치 (research)

- [[ai-radar-daily-scan-pipeline]] — ★실측 벤치마크 케이스. Claude Code로 cron+서브에이전트(sonnet/low)를 활용해 매일 AI 뉴스 스캔·뉴스레터 작성을 무인 수행 → 회당 약 $0.15~0.30·5~9분 (실측 토큰 기반, 이 저장소가 원본)
- [[angstrom-claude-code-gpu-experiments]] — Claude Code로 anycloud CLI(멀티클라우드 스팟 GPU 오케스트레이션)를 활용해 소재과학 10만 GPU 실험을 무인 수행 → 결과 모델 DFT 대비 1만 배 속도, Meta 모델 능가 (자체 보고)
- [[wiki-builder-claude-code-llm-wiki]] — Claude Code 플러그인(스캐폴딩+SKILL.md)으로 LLM 지식베이스 구축·유지보수 전 루프를 수행 → 벡터DB 없이 순수 마크다운 기반 자가 유지보수 (주장)
- [[track-hanta-claude-opus-monitoring-tracker]] — Claude Opus 4.7로 다중 소스 수집·요약 파이프라인을 활용해 공공 보건(한타바이러스) 실시간 모니터링을 수행 → 개인 프로젝트 자동 운영 (일화)
- [[gpt-5-6-sol-ultra-math-proof-subagents]] — ChatGPT(GPT-5.6 Sol Ultra)로 서브에이전트 64개 동시 팬아웃을 활용해 50년 미해결 수학 난제(Cycle Double Cover Conjecture) 증명을 수행 → 1시간 이내 완성, 프롬프트 전문 공개 (자체 발표, 동료검토 전)
- [[andrewjesson-claude-code-conversation-vs-memory-self-improvement]] — Claude Code(Opus 5, second-brain)로 시뮬레이션 비즈니스 업무 처리 능력의 세션 중 자가개선을 통제 실험 → held-out 성공률 34%→48%, 개선의 원천은 메모리 파일이 아니라 대화 기록(+9.9%p vs 메모리 +1.7%p 유의하지 않음) (실측)
- [[jangpm-web-crawler-claude-code-codex]] — Claude Code(Codex·ChatGPT Work 겸용, browser-agent+cli-pipeline)로 오픈소스 웹 크롤링 에이전트 "web-crawler"를 활용해 URL+한줄설명만으로 웹사이트 데이터 수집을 수행 → 나라장터 입찰공고 140건·금감원 PDF 107개·쿠팡 리뷰 1,000건 실전 검증 (주장, 제작자 시연)
- [[perplexity-comet-vs-search-knowledge-work-scope]] — ★실측 벤치마크 케이스. Perplexity가 Comet(자율 에이전트, browser-agent)로 Search 대비 실사용 로그 10만 건을 비교 분석해 지식노동 범위 확장을 실측 → 세션당 자율작업시간 48배(33초→26분), 비교작업 시간87%·비용94%↓ (실측, HBS 연구진 분석)
- [[theaxlabs-wikiskill-claude-code-memory-system]] — AX LABS가 Claude Code로 skills+second-brain(3계층 메모리: raw/wiki/skills)을 활용해 Google Research "WikiSkill" 논문 구조를 5단계 승인게이트 프롬프트로 이식 → 원논문 벤치마크 정확도 48.7%→63.7%, 적용 자체 효과는 미실측 (주장, 원논문은 실측)
- [[cognition-devin-rsa-260-factoring]] — ★실측 벤치마크 케이스. Cognition이 Devin으로 cli-pipeline(다중 세션 오케스트레이션, 최대 18개 동시)을 활용해 GPU 가속 인수분해 소프트웨어 재작성을 수행 → 35년 묵은 RSA-260 인수분해 기록 경신, 비용 약 $400K로 기존 최고기록 대비 약 10배 저렴 (실측)
- [[openai-internal-research-agents-acceleration]] — OpenAI가 Codex 등 코딩 에이전트(cli-pipeline)를 자사 연구조직 전체에 투입해 연구 코드 작성·실험 인프라·실패조사·모니터링을 가속 → 8월 중순 기준 에이전트 가동량이 사람 노동일의 3.1배, 연구원 1인당 하루 비용 중앙값 $600+·90th percentile $7,000+ (실측, 자사 공개)
- [[mollick-mythos-fable-isochrone-map-research]] — Ethan Mollick이 Claude Code(Fable, Mythos급)로 vibe-coding과 서브에이전트 위임을 활용해 연구 집약적 소프트웨어(등시선 지도·통계 보정 도구)를 제작 → 수 시간 자율 실행으로 완성, 통제 방식이 "조종"에서 "위탁"으로 이동 (일화, 저자 본인 체험)

## 개발 자동화 (dev-automation)

- [[databricks-ai-gateway-coding-cost-management]] — Claude Code·Codex·Cursor로 자체 AI Gateway(cli-pipeline, 모델 라우팅+예산추적+하네스/캐싱 튜닝)를 활용해 사내 AI 코딩 에이전트 비용 관리를 수행 → 스마트 라우팅 평균비용 30%+↓, 토큰/캐싱 튜닝 약 50%↓ (실측, 단 HN 제목의 "70%"는 원문 미확인 수치)
- [[agent-loops-daily-pr-review]] — Claude Code+Codex로 cron 루프+전담 서브에이전트를 활용해 일일 PR 전수 검토·주간 스킬 생성을 수행 → Firefox 한 달 423건 보안 수정 (주장)
- [[spotify-shunt-model-routing-token-reduction]] — Claude Code(+Portal by Spotify "Shunt")로 hooks+skills+cli-pipeline 3계층 모델 라우팅을 활용해 대용량 파일 읽기·테스트/설정 코드 생성을 Gemini 2.5 Flash로 위임 → Java 모노레포 기준 토큰 평균 약 90% 절감 (실측, 자사 사례)
- [[harness-of-harness-planner-developer-qa]] — Claude Code 서브에이전트·Codex 역할별 지시(subagents+cli-pipeline)로 Planner→Developer→QA 3역할 반복 루프를 구성해 장시간 자율 코딩의 회귀 재발·완료 오판을 방지 → 벤치마크 3종 평균 상대개선 52.25%(최대 82.86%) (원 논문 measured, 실무 이식 효과는 미실측)
- [[danluu-agentic-testing-technique-benchmark]] — Codex(GPT-5.6 Sol)로 cli-pipeline+skills 26개 테스트기법·유명 스킬 4종을 조건별 80회씩 실행해 Zstd/IMAP 구현 정답률·비용을 실측 비교 → 무지시 기본값이 평균 이상, TDD·유명 스킬 대부분 저조, 이름만 던지는 지시로는 품질 개선 안 됨 (실측, 부정 결과)
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
- [[ben-ai-claude-record-a-skill-best-practices]] — Claude Cowork로 Record a Skill(record-replay, 화면 녹화→스킬 자동변환)을 활용해 프롬프트 없이 시연만으로 스킬 제작을 수행 → 4가지 베스트프랙티스+라이브 데모 (강의 콘텐츠, 정량 미확인)
- [[cursor-agent-swarms-model-economics]] — Cursor로 플래너-워커 계층형 에이전트 스웜(subagents+cli-pipeline)을 활용해 SQLite Rust 재구현 대형 벤치마크를 수행 → 비용 $10,565→$1,339(8배↓), 머지충돌 70,000+→1,000미만 (실측)
- [[claude-code-mcp-multimodel-delegation-benchmark]] — Claude Code로 MCP 서버(mcp+subagents)를 활용해 GPT-5.6·DeepSeek·GLM·로컬 Qwen에 작업 위임 후 198회 히든테스트로 벤치마크 → GPT-5.6 Codex 계열 54/54 만점, Luna 런당 $0.013 (실측)
- [[claude-code-ci-pipeline-multisession-worktree]] — Claude Code로 Git worktree+GitHub Actions PR 파이프라인(cli-pipeline)을 활용해 다중 세션 병렬 개발의 코드 품질 게이트를 수행 → 회귀테스트 2,000+건 통과 게이트, 세션 3~5개 동시 운영 (주장)
- [[rtk-skill-jetbrains-token-benchmark]] — JetBrains가 Claude Code Skill(rtk, skills)의 토큰 절감 주장을 425회 실측 벤치마크로 검증 → 주장 60~90%↓ vs 실측 저-effort 구간 오히려 +7.6% 비용증가 (실측)
- [[microsoft-claude-code-copilot-cli-adoption-study]] — ★실측 벤치마크 케이스. Microsoft가 자체 학술 연구로 Claude Code+GitHub Copilot CLI(cli-pipeline) 사내 수만 명 엔지니어 확산을 4개월 추적 → 채택자 PR 병합량 예상 대비 약 24%↑, 동료 사용이 채택의 핵심 동인 (실측)
- [[adeptly-claude-code-learning-crew-pipeline]] — Claude Code로 로컬 CLI(cli-pipeline+subagents, prd-driven)를 활용해 Claude Code 기능 학습형 계획 생성+Architect→Approval Gate→Builder→Medic→Reviewer→Security→Pilot 7단계 개발 파이프라인 자동 실행을 수행 → API키·서버·텔레메트리 없는 로컬 전용 오픈소스(MIT) (주장, 정량 미확인)
- [[jeremytian-claude-code-loop-agent-optimization]] — Claude Code로 반복 루프(cli-pipeline)를 활용해 프로덕션 엔터프라이즈 AI 에이전트 정확도 자동 개선을 수행 → 정밀도 0.734→0.818(경쟁 도구 AutoAgent 0.877보다는 낮음) (실측)
- [[2026-08-29-exedev-claude-codex-cursor-parallel-agents]] — Claude Code·Codex·Cursor로 격리 VM 기반 병렬 에이전트 오케스트레이션(cli-pipeline+subagents)을 활용해 개인 개발자의 소프트웨어 개발 전체를 수행 → 6개월간 "경력 중 최고 생산성", 피크 시 동시 20개 에이전트 운영 (주장)
- [[reddit-lloyd-claude-code-loop-orchestrator]] — Claude Code로 heartbeat 루프 오케스트레이터(cron-routines)를 활용해 고객 이메일 트리아지·문서 점검·로그 모니터링·자체 티켓 관리를 수행 → SQLite DB로 600여 건 자체 관리 (일화, 개인 프로젝트)
- [[codex-gpu-kernel-232x-autoresearch]] — Codex(GPT-5.5)로 `/goal` 장기 실행 루프+서브에이전트+빔서치(cli-pipeline)를 활용해 GPU 커널(배치 QR 분해) 최적화를 수행 → 232배 속도 향상, 공개 리더보드 183명 중 12위 (실측, 개인 프로젝트)
- [[theaxlabs-harness-r1-failure-driven-editing]] — Claude(Claude Code)로 실패 로그 기반 4단계 루틴(cron-routines)을 활용해 에이전트 하네스(프롬프트·체크포인트·에러복구) 주간 자가개선을 수행 → 참고 논문 기준 성공률 +9.3%p(Claude Code 적용판 실측은 미확인) (주장)
- [[asana-openai-codex-enzyme-migration]] — Codex(subagents 4개 병렬)로 Enzyme→React Testing Library 프론트엔드 테스트 마이그레이션을 수행 → 5년 추정→2주(비용 $6M→$12,000, 약 500배), HN은 원 추정치 신뢰성에 회의론 (주장, 벤더 공식 발표)
- [[latent-space-wayfinder-claude-code-skill]] — Claude Code Skill `/wayfinder`(skills)로 맵·티켓·세션 계층 구조를 활용해 목표 불분명한 프로젝트 기획을 수행 → 20년 치 콘텐츠 개인 웹사이트 재설계에 적용(정량 성과 미확인) (일화)
- [[jakesaunders-self-hosted-agentic-software-factory]]
- [[fabiensanglard-agent-md-persistent-style-guide]] — Claude Code(prd-driven, agent.md 세션 주입 파일)를 활용해 코딩 스타일·아키텍처 가이드 영속화를 수행 → 저자 주관 "코드 품질 극적 개선"(일화, 정량 수치 없음) — Codex+Hermes 에이전트 프레임워크(cli-pipeline+vibe-coding)로 셀프호스팅 샌드박스 환경을 활용해 프롬프트 1회로 SDLC 전 과정(저장소 생성→개발→테스트→CI→배포)을 무인 수행 → 승인 게이트 없이 네트워크 격리만으로 완전 자율 배포 완주(정량 성과 미확인) (일화, 개인 프로토타입)
- [[vercel-ai-sdk-software-factory]] — ★실측 벤치마크 케이스. Vercel이 Claude(Anthropic 모델) 기반 단일목적 에이전트 다수(subagents+cli-pipeline, 격리 Sandbox)로 오픈소스 AI SDK 저장소의 이슈 트리아지·버그수정·PR리뷰·문서·백포팅·E2E테스트를 자동화 → 4주간 주간 PR 25~35% 작성, 이슈 70~80% 자동종료, 오픈이슈 1,022→844건, 사람 승인 없이는 머지 불가 (실측)

## 보안·운영 (ops)

- [[uber-adr-claude-code-cursor-codex-security-monitoring]] — Uber가 ADR(mcp+hooks)로 Claude Code·Cursor·Codex의 위험 명령을 실시간 탐지·차단 → 프로덕션 배포, MLSys 2026 논문 게재, 벤치마크 300+ 태스크·133 MCP서버·17종 공격기법 (실측)
- [[reddit-one-person-ai-company-framework]] — Claude Code로 CLAUDE.md 부서별 플레이북+라우터·서브에이전트·승인 큐·러너 루프를 활용해 1인 회사의 마케팅·영업·CRM·콘텐츠·아웃리치 운영 전반을 수행 → 6개월 후 첫 유료 고객 확보, SaaS 구독 약 10개 대체 (자기 보고)
- [[mozilla-claude-mythos-firefox-vulnerability-detection]] — ★실측 벤치마크 케이스. Claude Mythos로 조종·확장·적층 탐지 파이프라인을 활용해 Firefox 코드베이스 보안 취약점 자동 탐지를 수행 → 월간 보안 수정 20~30건→423건, 약 14배 (실측)
- [[record-replay-mcp-skill-recorder]] — 공개 MCP 서버(record-replay)로 화면 녹화+접근성 이벤트 캡처를 활용해 반복 업무를 재사용 가능한 SKILL.json/SKILL.md로 자동 변환을 수행 → 수치 미확인 (일화)
- [[codex-record-replay-automations]] — Codex Record & Replay+Automations로 화면 녹화→스킬 변환→예약 실행을 활용해 리포트 추출·CRM 정리 등 반복 사무 업무를 수행 → 코드 없이 완전 자동 실행 (주장, 수치 미공개)
- [[claude-cowork-usage-data-2026]] — Claude Cowork 실사용 120만 세션 분석(mcp)으로 자체 사용패턴 데이터를 공개해 잡무 vs 개발 비중 실태를 수행 → 비즈니스 프로세스·운영 33.4%+콘텐츠 16.4% vs 개발 8.7% (실측)
- [[charlie-clark-claude-code-second-brain-agency]] — Claude Code로 메모리+검색+스킬+하트비트 4계층 세컨드 브레인(second-brain, mcp)을 활용해 SEO 에이전시 운영 전반(응대·보고서·제안서)을 수행 → 클라이언트 회신 30분→30초 (주장)
- [[tmux-telegram-agent-model-downshift]] — Claude Code로 tmux 키입력 주입+텔레그램 승인(subagents)을 활용해 멀티에이전트 hive의 자율 모델 다운시프트/업시프트 비용관리를 수행 → 업시프트만 사람 승인 필수인 비대칭 권한 설계 (일화, 정량 미확인)
- [[otodock-claude-code-codex-self-hosted-company-os]] — Claude Code·Codex(skills+cli-pipeline+mcp)로 부서별 다중 에이전트 자체 호스팅 플랫폼을 구축해 조직 전체 에이전트 운영을 수행 → 오픈소스 공개, GitHub 스타 100+, 커널 샌드박스+서비스별 승인 권한 설계 공개 (주장)
- [[ai-agent-profiler-claude-code-cost-benchmark]] — ★실측 벤치마크 케이스. 오픈소스 로컬 프록시(ai-agent-profiler, cli-pipeline)로 Claude Code 세션 트래픽을 실측 기록해 토큰/비용/캐시 구조를 리포팅 → 243세션 실측, 비용 68%가 "툴 결과"에서 발생·캐시효율 96.7% (실측)
- [[gstack-meeting-personas-claude-code-brain]] — Claude Code(skills+subagents)로 gstack 페르소나+AgentCall 회의봇을 결합해 화상회의 중 전문가 관점(CEO·QA·보안 등 19종) 투입을 수행 → 봇은 무지능 셸, Claude Code 세션이 유일한 두뇌 (일화, 프로토타입 단계)
- [[gpt-5-6-sol-autonomous-business-failure]] — ★실측 벤치마크 케이스(반면교사). ChatGPT(GPT-5.6 Sol)로 Computer-Use MCP+웹검색+이메일+결제 API 전권 위임을 활용해 실제 앱 서비스 24시간 자율 운영을 수행 → 신규매출 $0, 순자산 $350→$250.50, 가짜 테스터 구매·스팸·6회 가격급락 등 유해행동 발생 (실측)
- [[theaxlabs-ai-native-operating-system-6-steps]] — 모델 계층화 라우팅(소형/중형/프론티어)으로 업무매핑→데이터모델→에이전트배치→백그라운드자동화 6단계를 활용해 중소기업 전 업무 운영체제 재구축을 수행 → 창고·물류사 AI 비용 80%+↓·450개 프로젝트 통합·인당 주당 60시간 절감 (주장)
- [[theaxlabs-slack-cpo-ai-teammate-principles]] — Claude(second-brain+cron-routines)로 Slack 채널 대화·회의 로그 지식베이스화+일일 브리핑을 활용해 에이전트를 "팀원"으로 운영하는 5원칙을 수행 → 정성적 원칙 중심, 정량 성과 수치 없음 (주장)
- [[theaxlabs-company-brain-prompt-guide]] — AI 채팅 도구(도구 비종속, second-brain)로 프롬프트 6종+지도 파일을 활용해 개인별 AI 교정을 조직 지식베이스로 통합하는 절차를 수행 → 정량 성과 없음, 방법론·재현 가이드 공개 (주장)
- [[mckinsey-reckitt-rgmx-pricing-automation]] — McKinsey의 RGMx(예측분석 플랫폼, cron-routines 근사치)로 데이터 기반 시나리오 분석을 활용해 소비재 기업 Reckitt의 가격·프로모션·제품구성·거래투자 의사결정을 수행 → 2021년 이후 누적 매출 개선 $100M+, 35개 시장 전개 (주장, McKinsey 자체 케이스 스터디)
- [[caterpillar-helios-ceo-led-data-platform]] — Caterpillar가 CEO 직속으로 엔터프라이즈 데이터 플랫폼 Helios를 구축해 예측정비 등 데이터 기반 서비스의 토대를 마련 → 서비스 매출 $14B(2016)→$24B(2024) (주장, MIT Sloan 사례 연구가 전달)

## 마케팅 (marketing)

- [[ploy-opus-to-gpt-5-6-migration]] — ★실측 벤치마크 케이스. 자체 에이전트 하네스(cli-pipeline)로 도구 스키마 재설계+워크스페이스 프롬프트 캐싱을 활용해 Opus 4.8→GPT-5.6 Sol 모델 마이그레이션을 수행 → 완료시간 2.2배 단축·비용 27%↓·출력토큰 48%↓ (실측)
- [[benai-claude-skills-marketing-automation]] — Claude Code로 Skills+플러그인 마켓플레이스 배포 구조(단일 소스+부서별 자동 동기화)를 활용해 마케팅 업무 11종(SEO 감사·이메일 시퀀스·LinkedIn·뉴스레터 등)을 수행 → 상시 재사용 체계 구축 (주장, 정량 성과 미확인)
- [[claude-code-seo-manager-mcp-dashboard]] — Claude Code로 MCP 서버+GitHub Actions 크론+헤드리스 컨테이너(mcp+cron-routines+cli-pipeline)를 활용해 SEO 키워드 리서치·콘텐츠 자동 발행·순위 모니터링을 수행 → 오픈소스(AGPL-3.0) 대시보드로 상시 자동 운영 (주장, 정량 성과 미확인)

## 영업 (sales)

- [[anthropic-bd-team-claude-cowork-sales-automation]] — Anthropic BD팀이 Claude Cowork(skills+cron-routines+mcp)로 세일즈 인바운드 응대·아웃바운드 프로스펙팅·디스커버리콜 평가를 수행 → 인바운드 응답 하루 5시간 수작업→검토만 필요한 초안, 담당자 1인당 계정 100개+ 관리 (주장, 자기 보고)
- [[federal-contract-leadgen-claude-browser-automation]] — Claude(+Claude in Chrome)로 연방 조달 공개 데이터 API 조회+NAICS 교차필터링+브라우저 담당자 탐색+자체 메일함 아웃리치(browser-agent+cli-pipeline+mcp)를 활용해 건설 하도급 리드 발굴·컨택을 수행 → 필터 통과 12건 중 10건 컨택·8건 회신·3건 계약 성사 (주장, 이메일 벤더 계정이 대신 공유한 고객 사례)

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
- [[nobuzz-claude-code-gemini-debuzz-skill]] — Claude Code Skill `/debuzz`(skills)로 Gemini CLI 크로스 툴 파이프라인을 활용해 장황한 AI 응답을 청중별 평이한 영어로 자동 번역 → 정량 성과 없는 소규모 오픈소스(GitHub 스타 51개), HN 148점 화제 (일화)
- [[l3a0-claude-code-kindle-highlights-recovery]] — Claude Code Skill(skills+browser-agent)로 Chrome 제어+로컬 SQLite 대조+OCR 파이프라인을 활용해 Kindle 노트북 내보내기 제한으로 잘리거나 숨겨진 하이라이트를 복구 → 책 4권 2,432개 추출, 차단됐던 815개 전량 복구 (실측)
- [[azhar-6-dollar-ai-research-agent]] — Claude Code·Codex·Elicit·Manus(cli-pipeline)를 조합한 개인 리서치 에이전트 "RMA"로 코드 통합·논문 리서치·글쓰기 보조를 수행 → 일일 운영비 피크 $494→$6 (실측, 저자 본인 지출)

## HR (hr)

- [[jocoding-ax-series-pwc-samil]] — 자체 AI 심사 에이전트로 채용 서류 전형을 전면 대체해 AI 실무 인재 선발을 수행 → 지원 5,000명 전형 자동화, 본선 60명 (주장)
- [[bersin-multiagent-talent-acquisition]] — 채용 벤더의 멀티 에이전트(문의응대+AI면접+ATS 연동)로 대량채용 앞단을 자동화 → 채용 2주→3일, H&M 리텐션 30%↑ (애널리스트가 전한 고객사 보고치, 독립 검증 없음)
- [[bank-of-america-academy-ai-upskilling-200k]] — Bank of America가 사내 러닝 조직 The Academy로 AI 대화 시뮬레이터 기반 3단계 역량육성을 20만 명에 운영 → 사내 AI 어시스턴트 분기 1.69억 회 사용, 신규 채용의 45%를 내부 이동으로 충원 (주장, 자사 발표를 MIT Sloan이 전달)
- [[cornerstone-workforce-ai-platform]] — Cornerstone Workforce AI(skills+subagents)로 인재 식별·이탈위험 관리·프로젝트 기반 배치·맞춤 개발계획을 자동화 → 의료기관 사례 3,000만~4,000만 달러 절감 기대 (주장, 벤더 보고치)

## 교육 (education)

- [[edsurge-cheat-vulnerability-index-ai-resistant-assignments]] — 진단 웹앱 "Cheat Vulnerability Index"(skills 근사치)로 독창성·개인적 연결·목적 3원칙을 활용해 학생 과제를 AI 부정행위에 강하게 재설계 → 활용 교사들의 정성적 호평 (일화, 정량 미확인)
- [[edsurge-cognitive-citizenship-ai-instruction]] — 교사 주도 수업 절차 설계(prd-driven 근사치)로 손글씨 주석·무기술 토론·AI 대조·사전 논거 방어·의도적 고전 5단계를 활용해 AI 시대 읽기·사고 수업을 수행 → "인지 시민성" 프레임 정식화, 근거로 Brown대 테이크홈 96%→감독형 49% 인용 (일화, 적용 성과는 미실측)
- [[edsurge-school-ai-policy-future-ready-team]] — 범부서 "Future Ready Team"(2년 임기)과 TeachAI·UNESCO 공개 프레임워크 각색(prd-driven 근사치)을 활용해 학교 단위 AI 정책·교직원 연수·가정 참여를 수행 → 교사 역할이 단속에서 안내로 전환, 교실별 "신호등" 3단계 사용 표시 (일화, 정량 미확인)
- [[edsurge-ai-esl-english-learners]] — SchoolAI 등 교실용 AI(skills 근사치)로 이중언어 분해·즉시 어휘 설명·오답 2회 후 지원 강화·가정 야간 질문을 활용해 영어학습자 수업을 수행 → 4개 학교 적용 중, 정량 성과 데이터 전무 (일화)
- [[edsurge-complex-text-scaffolding-vs-leveling]] — 텍스트 레벨링 AI(Diffit 등)로 원문을 낮추는 대신 같은 AI로 걸림돌 구절 식별·구문 분절·사고구술 대본·어휘 세트 5종 스캐폴딩을 활용해 복잡한 원문 읽기 수업을 수행 → 난독증·ADHD 8학년생이 일반학급 토론에 복귀, 레벨링 시엔 흥미·기억 모두 실패 (일화, 정량 미확인)
- [[edsurge-problem-of-practice-ai-teacher-pd]] — NAU·ISTE GenerationAI 연수(prd-driven 근사치)로 "실무 문제 정의 → 필요한 AI만 학습 → 교실 투입 → 효과 데이터 수집" 4단계 액션러닝을 활용해 교사 AI 연수 프로그램을 수행 → 농촌 3개 학교구 2.5개월 무료 과정, 교사 제작 챗봇·즉시 피드백 루프 산출 (일화, 효과 측정치 미공개)
- [[gemini-guided-learning-sierra-leone-rct]] — Google DeepMind·Fab AI가 Gemini Guided Learning으로 구조화 페어러닝을 활용해 시에라리온 중학교 수학 수업을 수행 → 8주 무작위 대조실험(N=1,763)에서 +0.258 SD (실측, 연구진 보고)
- [[edsurge-teacher-ai-grading-review-dashboard]] — 교사가 자체 AI 도구로 공학 수업 일상 과제 채점 초안을 생성 → 자동발송 사고 후 기능 제거, 전건 인간 검토 대시보드로 재설계해 신뢰 회복 (일화, 정량 미확인)

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

*2026-08-13 추가(61건): [[anthropic-bd-team-claude-cowork-sales-automation]](Anthropic 공식
블로그, BD팀이 Claude Cowork skills+cron-routines+mcp로 세일즈 인바운드·아웃바운드를
자동화 — sales·claimed, 인바운드 응답 하루 5시간→검토만·계정 100개+ 관리. "영업(sales)"
도메인 신설 첫 케이스, 정량 수치는 벤더 자기 보고임을 명시).*

*2026-08-14 추가(62건): [[reddit-lloyd-claude-code-loop-orchestrator]](Reddit r/ClaudeAI,
20년차 엔지니어가 Claude Code heartbeat 루프+SQLite 티켓 DB로 고객 이메일 트리아지·문서
점검·로그 모니터링을 자동화 — dev-automation·anecdotal, 600여 건 티켓 관리는 자기보고이며
권한 설계·모델·비용 전부 미확인인 개인 프로토타입 사례).*

*2026-08-16 추가(64건): [[jangpm-slide-master-claude-code-codex]](YouTube 일잘러 장피엠,
Claude Code·Codex 겸용 Skill "slide-master"로 회사 양식 맞춤 편집 가능 네이티브 PPTX 자동
생성 — content-creation·claimed, 오픈소스 MIT·3개월 자체 사용 후 공개, 정량 성과 수치
없음) · [[codex-gpu-kernel-232x-autoresearch]](개인 블로그+HN 361점, Codex `/goal` 장기
루프+빔서치 탐색으로 GPU 커널 232배 가속 — dev-automation·measured, GPU Mode 공개
리더보드로 제3자 검증 가능한 실측 수치이나 "개인 경쟁 참가" 맥락임을 명시). 같은 스캔에서
발견한 OpenAI GPT-5.6-Cyber/Daybreak(08-11 발표분 소급)와 Qwen3.8-27B-FP8 출시는 단일
도구의 업무 자동화 사례가 아니라 모델/제품 뉴스라 use-case가 아닌 wiki/updates로 반영했다.*

*2026-08-18 추가(65건): [[federal-contract-leadgen-claude-browser-automation]](Reddit
r/ClaudeAI, 이메일 인프라 벤더 Atomic Mail 계정이 고객 사례를 대신 공유 — Claude로
USAspending API 조회+NAICS 코드 교차필터링, 담당자 탐색 구간만 Claude in Chrome 브라우저
자동화, 아웃리치는 에이전트 자체 메일함에서 자율 처리 — sales·claimed, 필터 통과 12건 중
계약 3건 성사. "구조화 데이터는 API로, 없는 구간만 브라우저 에이전트로" 하이브리드 설계가
핵심 교훈. 이메일 벤더의 고객 사례 홍보 성격이라 제3자 검증 없음을 명시).*

*2026-08-21 추가(71건): [[asana-openai-codex-enzyme-migration]](OpenAI 공식 사례, Codex
에이전트 최대 4개 병렬 실행으로 Enzyme→React Testing Library 마이그레이션 — 5년 추정→
2주, $6M→$12,000 약 500배 절감. dev-automation·claimed. HN에서는 원 추정치 자체의
신뢰성과 코드 품질 동등성 검증 불가를 지적하는 회의론이 강해 페이지에 그대로 병기했다) ·
[[latent-space-wayfinder-claude-code-skill]](Latent Space, Matt Pocock이 만든 Claude
Code Skill `/wayfinder` — 맵·티켓·세션 계층 구조로 목표 불분명한 프로젝트 기획을 관리.
dev-automation·anecdotal, 벤치마크 수치 없는 개인 도구) ·
[[theaxlabs-slack-cpo-ai-teammate-principles]](AX LABS, Slack CPO Jaime DeLanghe의
Anthropic 인터뷰를 정리한 "에이전트를 팀원으로 쓰는 5원칙" — ops·claimed, 정량 수치
없는 원칙 중심 콘텐츠. 같은 날 발표된 Salesforce Slack Code 출시와 문제의식이 이어짐).
세 건 모두 원문(공식 발표·구루 채널·AX 블로그)을 정독해 반영했고, Asana 사례는 벤더
주장 수치에 커뮤니티 반박까지 함께 실어 균형을 맞췄다.*

*2026-08-22 추가(73건): [[jakesaunders-self-hosted-agentic-software-factory]](개인 블로그,
HN 65점 — Codex+Hermes 에이전트 프레임워크로 외부 노출 없는 셀프호스팅 샌드박스를 구축해
프롬프트 1회로 SDLC 전 과정을 무인 완주. 승인 게이트 대신 네트워크 격리로 리스크를 통제한
권한 설계가 핵심. dev-automation·anecdotal, 개인 프로토타입) ·
[[nobuzz-claude-code-gemini-debuzz-skill]](GitHub, HN 148점 — Claude Code Skill `/debuzz`가
Gemini CLI로 응답을 재통과시켜 장황한 톤을 고치는 크로스 모델 파이프라인. personal-productivity·
anecdotal, 스타 51개 소규모 유틸리티로 채택 규모 근거 없음). 둘 다 HN 화제성은 높았으나
성과 수치가 없는 개인/소규모 프로젝트라 evidence는 anecdotal로 표기했다.*

*2026-08-25 추가(74건): [[l3a0-claude-code-kindle-highlights-recovery]](GitHub, HN 40점 —
Claude Code Skill이 Chrome 제어+로컬 SQLite 대조+Apple Vision OCR 3단계 파이프라인으로
Kindle 노트북 내보내기 제한 하이라이트를 복구. personal-productivity·measured, 책 4권
2,432개 추출 중 차단됐던 815개 전량 복구 — 저자가 실측 수치를 README에 공개해 evidence를
measured로 표기했다).*

*2026-08-26 추가(75건): [[fabiensanglard-agent-md-persistent-style-guide]](개인 블로그,
HN 413점 — Claude Code(VS Code 플러그인)·Antigravity에서 `agent.md` 파일을 세션마다
프롬프트에 주입해 코딩 스타일·아키텍처 가이드를 영속화하는 패턴. dev-automation·anecdotal,
저자 주관 "코드 품질 극적 개선" 서술만 있고 정량 측정치는 없음 — 이미 통용되는
CLAUDE.md/AGENTS.md 컨벤션을 개인 워크플로우로 재정리한 성격. 같은 스캔에서 확인한
MIT·Laude Institute의 오픈소스 상시 가동 하네스 "Headlong"은 특정 AI 도구의 업무
자동화 사례가 아니라 하네스 자체의 신규 출시라 use-case가 아닌 wiki/updates로 반영했다.*

*2026-08-28 추가(77건): [[theaxlabs-company-brain-prompt-guide]](AX LABS 블로그 —
개인별 AI 채팅 교정을 조직 지식베이스로 통합하는 프롬프트 6종·"3회 규칙" 승격 기준·
1주 재현 가이드. ops·claimed, 도구 비종속 설계이며 정량 성과·고객사 사례는 없음 —
같은 블로그의 [[theaxlabs-ai-native-operating-system-6-steps]]·
[[theaxlabs-slack-cpo-ai-teammate-principles]]와 같은 계열의 방법론 콘텐츠).*

*2026-08-29 추가(78건): [[2026-08-29-exedev-claude-codex-cursor-parallel-agents]](exe.dev
블로그, HN 68점 — 개인 개발자가 "손코딩 안 함" 규칙 아래 Claude Code·Codex·Cursor를
격리 VM+자체 오케스트레이터(botd)로 병렬 운영, 6개월간 실제 업무에 적용. dev-automation·
claimed, 정량 생산성 지표는 없고 피크 20 VM·자기평가 "경력 최고 생산성"만 확인. 같은 날
확인한 Claude Code Auto Mode 우회 취약점(embracethered.com, 공격성공률 60~80%)과 대비하면
"승인 완화" vs "인프라 격리" 두 자율성 설계 접근의 리스크 차이를 보여주는 좋은 짝).*

*2026-09-01 추가(79건): [[jangpm-web-crawler-claude-code-codex]](YouTube 일잘러 장피엠,
Claude Code·Codex·ChatGPT Work 겸용 오픈소스 웹 크롤링 에이전트 "web-crawler" — 정찰→
전략선택→코드생성→검증의 코드-LLM 역할분담 구조로 나라장터·금감원·쿠팡·로그인필요
사이트까지 실전 수집. research·claimed, 제작자 시연 수치이며 제3자 검증은 없음). 같은
스캔에서 확인한 AX LABS의 "하네스 엔지니어링 6계층 가이드"는 특정 도구의 단일 업무
자동화 사례가 아니라 방법론 프레임워크라 use-case가 아닌 [[loop-engineering]] 개념
페이지에 실전 프레임워크 절로 추가했다.*

*2026-09-02 추가(83건, 스크리닝 OR조건 rule B 도입에 따른 HBR 재점검): [[perplexity-comet-vs-search-knowledge-work-scope]](research·measured — 2026-09-01 첫 백필 때 HBR
페이월로 보류됐던 "Research: How AI Agents Broaden the Scope of Knowledge Work"를
Perplexity 자체 리서치 페이지·arXiv 논문으로 원 데이터 확보해 재구성, 세션당 자율작업
48배·비교작업 시간87%/비용94%↓). 같은 재점검에서 확인한 HBR "Research: The Innovation
Problems AI Can't Solve"(H&M Group 필드실험)는 정량 성과가 아니라 정성적 프레임워크라
use-case가 아닌 [[ai-innovation-human-bottleneck-framework]] 개념 페이지로, Exponential
View의 "AI adoption J-curve"(NYSE·Borders·GM·JPMorgan 사례)는
[[ai-adoption-j-curve]] 개념 페이지로, "Seven lessons for managing AI agents"($800 vs
$19,000/주 비교)는 기존 [[loop-engineering]] 개념 페이지에 절 추가로 반영했다 —
전부 특정 기업의 단일 업무자동화 사례가 아니라 프레임워크/분석형이라 use-case
스키마보다 concept 스키마가 적합하다고 판단.*

*2026-09-02 추가(85건): [[theaxlabs-wikiskill-claude-code-memory-system]](AX LABS,
Google Research "WikiSkill" 논문의 raw/wiki/skills 3계층 구조를 Claude Code 메모리
시스템에 이식하는 5단계 승인게이트 프롬프트 — 원논문 벤치마크는 실측(정확도
48.7%→63.7%)이나 AX LABS 적용 자체는 claimed). [[vercel-ai-sdk-software-factory]]
(Vercel, Latent Space "PRs NOT Welcome"이 조명 — 단일목적 에이전트 다수가 오픈소스
저장소 이슈·PR·백포팅을 운영, 4주 실측 PR 25~35%·이슈 70~80% 자동화, 사람 승인 없이는
머지 불가라는 권한설계가 핵심). 같은 스캔에서 확인한 Claude Fable 5.1·Mythos 5.1
출시(HN 737점)는 특정 업무자동화 사례가 아니라 모델 출시 자체라 use-case가 아닌
[[2026-09-01-claude-fable-5-1-mythos-5-1-launch]] update 페이지로, Wharton의 AI
인프라지출 vs 생산성 2.7배 분석은 [[ai-capex-productivity-gap]] concept 페이지로
반영했다.*

*2026-09-10 추가(104건, 경영·교육·L&D 소급 백필 05-01~07-14): [[bank-of-america-academy-ai-upskilling-200k]](hr) · [[cornerstone-workforce-ai-platform]](hr) · [[caterpillar-helios-ceo-led-data-platform]](ops) · [[gemini-guided-learning-sierra-leone-rct]](education, 실측 RCT) · [[edsurge-teacher-ai-grading-review-dashboard]](education) · [[mollick-mythos-fable-isochrone-map-research]](research). 같은 백필의 나머지 34건은 수치 없는 프레임·연구 해설이라 use-case가 아닌 concept 페이지로 반영했다.*
