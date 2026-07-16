# AI Radar 로그

append-only 작업 기록. 형식: `## [YYYY-MM-DD] <operation> | <제목>`

## [2026-07-06] setup | 위키 골격 및 스키마 생성

디렉토리 구조, CLAUDE.md 스키마, index.md, sources.md 생성. YouTube 채널 11개 등록.

## [2026-07-06] scan | 첫 스캔, 항목 10건

최근 3일(07-03~07-06) + 직전 주요 릴리스 포함. Claude Code 2.1.198~201 연속 릴리스, Claude Enterprise 지출 통제, Fable 5 세이프가드/CJS, GPT-5.6 프리뷰 현황, Gemini 3.5 Pro 연기, LongCat-2.0, Claude Science 등. 뉴스레터: newsletter/2026-07-06.md

## [2026-07-07] scan | 새 편집 기준 첫 적용, 항목 13건

빅 뉴스 5건(Fable 5 복귀·과금 전환, Sonnet 5 출시, OpenAI 정부 지분 5% 제안, Gemini 3.5 Pro 롤아웃, Codex Micro 하드웨어 예고) + 활용법·사례 3건(톰 리들 다이어리, Spark vs Cowork 라우팅, Varun Mayya 사내 앱 5개) + YouTube 픽 5건. YouTube 채널 11개 중 10개 RSS로 확인 성공, The MIT Monk는 @SandeepSwadia로 개명 확인 → sources.md 수정. 뉴스레터: newsletter/2026-07-07.md

## [2026-07-07] ingest | 최근 2주 백필 (06-23~07-07), 페이지 24건

영역별 병렬 수집: Anthropic 7건(Sonnet 5, Fable 5 복귀, Claude Tag/Science 등), OpenAI 6건(정부 지분 제안, Jalapeño 칩, GPT-5.6 등), Google 5건(3.5 Pro 연기, Spark 확장, DeepMind 인재 이탈 등), 업계 4건(Meta Compute, LongCat-2.0 등) + 활용사례 4건 + 개념 2건(citizen-development, ai-agent-routing) + 플레이어 3건. 타임라인 19건 등재. 알려진 상충: Gemini 3.5 Pro "배포 시작"(07-07 뉴스레터) vs 실제 제한 프리뷰 지속 — updates 페이지에 상충 표시됨.

## [2026-07-07] query | LLM Wiki 학습 자료 추천

첫 Query 워크플로우 실행. 위키에 없는 주제라 웹 검색으로 보완, 결과를 analysis/llm-wiki-learning-resources.md에 파일링 (한국어 영상 5, 영어 영상 1, 텍스트 가이드 4, 교육과정 벤치마크 1).

## [2026-07-07] scan | 새 기준 재스캔, 항목 17건

에이전트 구축·자동화 최우선 기준 첫 적용. 최우선 6건(Cowork 사례 7가지, 클로드코드 업무 자동화 가이드, 유튜브 영상 자동화 바이럴, Codex Skills, 서브에이전트 오케스트레이션, KT Cloud 적용기) + 빅 뉴스 5건 + 커뮤니티 2건 + YouTube 픽 4건. Gemini 3.5 Pro "배포 시작" 오보를 위키 검증 내용으로 교정. 제약: 권한 분류기 일시 장애로 Bash/Agent/WebFetch 불가 → WebSearch 기반 간접 수집(Reddit 원글 직링크 미확보), 메인 세션 인라인 실행. newsletter/2026-07-07.md 덮어씀(구버전은 git 히스토리).

## [2026-07-08] scan | 항목 13건

최우선 4건(Claude Code+Codex 에이전트 루프 레시피, `/goal`+routines 야간 품질점검, Codex Automations 패널, 클로드코드 유튜브 리서치 에이전트) — 항목당 원문 정독으로 도구/업무/방법/포인트 4필드 채움. 빅 뉴스 5건(Anthropic 매출 OpenAI 추월 $47B, Cowork 모바일·웹 확장, Fable 5 무료 프로모션 종료, Learning Mode 전체 개방, Codex vs Claude 품질·채택률 리포트) + 커뮤니티 2건(r/ClaudeAI Fable 5 종료 반응, Karpathy LLM Wiki 스레드) + YouTube 픽 2건(Jeff Su, 왕초보 에이전트 비서 튜토리얼). r/AI_Agents·r/singularity RSS는 이번 스캔에서 응답 없음(재시도 2회 실패) — 다음 스캔에서 재확인 필요. YouTube 채널ID 3개(조코딩·AI Edge·Jeff Su) 신규 해석해 RSS 캐시에 등록, 나머지 7개는 핸들 페이지에서 channelId 미검출로 보류. newsletter/2026-07-08.md.

## [2026-07-12] scan | 항목 9건

★최우선 2건(Ploy의 Claude Opus 4.8→GPT-5.6 Sol 프로덕션 마이그레이션 실측 벤치마크, r/AI_Agents발 Accord Agents=Claude Code·Codex 상호검토 오픈소스 워크스페이스) — 항목당 원문 정독으로 도구/업무/방법/포인트 채움. 빅 뉴스 4건(Codex 5시간 사용량 제한 임시 해제, Claude Reflect 사용패턴 요약 기능 출시, Terence Tao의 AI 에이전트 수학앱 현대화, Gemini 3.5 Pro 유출 세부사항) + 커뮤니티 2건(r/AI_Agents agent.db 패턴 논의, r/ClaudeAI 고등학교 교사 후기) + YouTube 픽 1건(조코딩 IT뉴스 브리핑). YouTube RSS 캐시 오매핑 2건(조코딩·Jeff Su) 재해결·검증 완료 — 조코딩은 웹서치로 정확한 채널ID(UCQNE2JmbasNYbjGAcuBiRRg) 확보 후 콘텐츠 일치 확인, Jeff Su도 동일 방식(UCwAnu01qlnVg1Ai2AbtTMaA)으로 확인했으나 최신 업로드가 06-30이라 이번 창(07-11~12)엔 픽 없음. AI Edge(AIEdgeHQ)는 후보 2개 모두 오매핑으로 재확인, 여전히 미해결. 커뮤니티 RSS는 old.reddit이 연속 요청 시 빈 응답(0바이트)을 주는 패턴이 이번에도 재현(간격을 두고 재시도하면 성공, r/ChatGPTCoding은 진짜로 오늘 top 글 없음을 빈 피드로 확인) — r/singularity·r/LocalLLaMA는 재시도 실패로 이번 스캔에서 커버 못함. newsletter/2026-07-12.md.

## [2026-07-09] ingest | use-case 구조화 체계 도입, 케이스 12건 (구 4건 재작성 + 신규 8건)

사용자 요청: 학습과정 설계 질의 품질 개선. A(도구)-B(방식)-C(업무)-D(성과) 공식 + 벤치마크 필드(model/cost/permissions/maturity/evidence)를 CLAUDE.md 스키마에 추가. 뉴스레터 07-07·07-08 ★최우선 항목 8건 케이스화(2건은 케이스 아님 판정 — updates/concepts 성격), 기존 4건 재작성. case-catalog.md 신설, 웹에 /cases 탐색기 + Q&A 케이스 카탈로그 상시 주입. 정직성 규칙: 벤치마크 3필드 전부 확인된 케이스는 1건뿐 — 실측 검증이 다음 과제.

## [2026-07-09] ingest | 벤치마크 실측 검증 — 자기참조 케이스 ai-radar-daily-scan-pipeline 등재

실측 검증 진행. 중첩 claude CLI 재현은 이 환경에서 PATH 미노출(exit 127)로 불가 → AI Radar 데일리 스캔 파이프라인 자체를 실측 벤치마크 케이스로 등재. 모델·권한·성숙도는 저장소에서 정확 확인(claude-sonnet-5/low, settings.local.json 화이트리스트 23종, production), 토큰은 본 세션 동종 sonnet 리서치 서브에이전트 6회 관측(6.0만~8.3만/회), 비용은 그 토큰 × Sonnet 5 공표가($2/$10)로 산정(회당 $0.15~0.30, ±50% 명시). 모델·비용·권한 3필드 전부 확인 케이스가 2건으로 증가. 독자 검증 가능한 유일한 실측 케이스 = 비용 산정 앵커.

## [2026-07-09] scan | 히스토리 백필 스캔 06-01~07-05, 뉴스레터 27건

사용자 요청: 5/1~7/5 백필 → 7/9 재요청으로 6/1~7/5로 축소. 병렬 서브에이전트 4개(9일씩 분담, 각 model:sonnet)로 실행, 날짜별 실제 발행일 확인(WebSearch + HN Algolia 날짜검색 API)이 안 된 날은 파일을 만들지 않고 인접일에 병합(06-02·03, 06-06·07, 06-21, 06-28 등 6건 병합). 06-10~06-18 구간은 미 상무부의 Fable 5·Mythos 5 수출통제 지시 사태가 지배적 스토리라인(공식성명 HN 3,158점 → 재시CEO 개입설 → EU 파장검토 → 탈옥근거 폭로 → 직원반박 → 07-01 규제 철회까지 일자별 추적). ★최우선(에이전트·자동화) 확보 사례: 3-에이전트 논스톱 오케스트레이션(Beads+Git worktree+로컬 Qwen), McKinney 에이전틱 가이드, Intuned 브라우저 자동화, Ångstrom 10만 GPU 실험자동화, opsx 스펙기반개발 CLI, Simon Willison 릴리스 QA 사례 등 다수. YouTube 픽은 전 구간 RSS 캐시가 6월 항목을 유실해 대부분 공란. Reddit은 old.reddit RSS로 과거 글 조회 불가해 WebSearch/HN 경유 링크로 대체. 위키(updates/hub/timeline)에는 아직 반영 안 됨 — 뉴스레터가 승인 대기 중.

## [2026-07-09] ingest | 백필 뉴스레터 ★최우선 항목 반영, 페이지 14건

사용자 요청: 06-01~07-05 백필 뉴스레터의 ★최우선(에이전트·자동화) 항목 16건을 위키에 반영. 06-30 Claude Science·Gemini Spark macOS는 07-07 이전 백필에서 이미 updates로 등재돼 중복 제외. 나머지 14건 중 A-B-C-D+성과 공식에 맞는 6건을 use-case로 케이스화: [[fleet-orchestrator-claude-codex-10-agents]], [[three-agents-nonstop-beads-worktree]], [[angstrom-claude-code-gpu-experiments]](research), [[codex-personal-assistant-multi-messenger]](personal-productivity), [[openai-codex-maxxing-25-hour]], [[simon-willison-claude-release-qa]](★실측 $149.25, 이 위키 두 번째 모델+비용 확인 케이스). 나머지 8건은 케이스 아님 판정 — 오픈소스 도구/제품 릴리스 6건은 updates/(Intuned, architect-loop, The Engineer, opsx, Swarm, AgentKits), 터미널 에이전트 4종 비교는 analysis/coding-agent-terminal-harness-comparison, 바이브코딩 vs 에이전틱엔지니어링은 concepts/vibe-coding-vs-agentic-engineering로 분류. case-catalog.md·index.md 갱신, 해당 뉴스레터 12개 파일의 체크박스를 [x]로 갱신. raw/ 원본 아카이브는 생략(뉴스레터가 이미 원문 정독 기반으로 4필드 추출 완료, 출처 URL로 대체).

## [2026-07-09] scan | 히스토리 백필 스캔 05-01~05-31, 뉴스레터 23건

사용자 요청: 5월 전체 백필. 병렬 서브에이전트 4개(각 7~8일 분담, model:sonnet)로 실행, 발행일이 전혀 확인 안 되는 날 없이 31일 전부를 23개 파일로 커버(뉴스 밀도가 낮은 구간만 인접일 병합: 05-09~11, 05-21~23, 05-25~26, 05-29~31). ★최우선 확보 사례: Claude Managed Agents 드리밍/아웃컴즈/멀티에이전트 오케스트레이션(05-06, SF 컨퍼런스), Mozilla×Claude Mythos Firefox 취약점 탐지 14배(05-07), Claude for Legal/Small Business·Agent View·`/goal` 자율루프(05-12~13), 1Password 모놀리스 리팩터링 에이전트 사례(05-15), OpenAI×Thrive 세무AI(05-27), h5i Claude Code↔Codex 실시간 협업(05-31) 등 다수. 병합 검수 중 실제 중복 1건 발견·수정: 05-06(SF)과 05-19(런던) 두 파일이 "Managed Agents 드리밍 기능"을 각각 별도로 "공개"라 서술 — 4개 독립매체(Reuters·ArsTechnica·ZDNet)가 05-06을 최초 공개일로 보도한 근거로 05-19 항목을 "자체 호스팅 확장 발표"로 재작성하고 ⚠️ 상충 블록과 05-06 상호링크 추가. Karpathy·SpaceX 관련 다중 언급(05-01/06/19, 05-06/13/20)은 검토 결과 각각 별개의 후속 사건으로 확인돼 중복 아님. sources.md의 YouTube RSS 캐시(조코딩·AI Edge·Jeff Su channel_id)가 무관한 채널로 잘못 매핑된 것을 두 서브에이전트가 독립적으로 발견 — 별도 세션으로 스핀오프(task_8cd711ca). 위키(updates/hub/timeline)에는 아직 반영 안 됨 — 뉴스레터가 승인 대기 중.

## [2026-07-09] ingest | 5월 백필 뉴스레터 ★최우선 항목 반영, 페이지 14건

사용자 요청("승인, 반영"): 05-01~05-31 백필 뉴스레터의 ★최우선 항목을 검토, A-B-C-D+성과 공식에 맞는 6건을 use-case로 케이스화: [[wiki-builder-claude-code-llm-wiki]](research), [[mozilla-claude-mythos-firefox-vulnerability-detection]](★실측 14배, ops), [[onepassword-claude-agents-monolith-refactor]](★실측 20~30%, dev-automation), [[track-hanta-claude-opus-monitoring-tracker]](research), [[openai-thrive-tax-ai-self-improving]](★실측 97%·50%↑·180h→15h, finance — case-catalog 신규 도메인), [[claude-managed-agents-dreaming-outcomes-orchestration]](05-06 SF+05-19 런던 통합, dev-automation). case-catalog에 ops·finance 2개 도메인 신설(케이스 24건으로 증가). 나머지는 케이스 아님 판정: updates 6건(Running Codex Safely, Claude for Legal, Claude for Small Business, Computer/Browser Use 모범사례, Robinhood AI 매매, h5i Agent Radio), analysis 1건(AlphaEvolve 산업임팩트 총정리 — 단일 사례가 아닌 다수 사례 종합이라 use-case 대신 analysis로 분류), concept 1건(대규모 코드베이스 컨텍스트 설계 — Henrik Warne 개발자 후기 인용 포함). Agent View·`/goal` 명령 자체는 이미 claude-code.md 허브 체인지로그에 기록돼 있어 별도 페이지 생성 없이 체크박스만 반영 처리. case-catalog·index 갱신, 해당 뉴스레터 11개 파일 체크박스 [x] 갱신.

## [2026-07-11] scan | 항목 9건

★최우선 3건(OpenAI ChatGPT Work 출시=GPT-5.6 기반 자율 업무 에이전트, r/AI_Agents 발 record-replay MCP 스킬 변환 도구, Codex 공식 Record & Replay+Automations 활용법) — 항목당 원문 정독으로 도구/업무/방법/포인트 채움. 빅 뉴스 4건(Apple의 OpenAI 영업비밀 소송, Alibaba의 Claude Code 전면 금지=백도어 의혹, GPT-5.6 Sol/Terra/Luna 정식 출시+Codex 앱 ChatGPT 데스크톱 통합, Gemini 3.5 Pro 7/17로 재연기) + 커뮤니티 화제 2건(r/ClaudeAI "40시간 업무 15센트 자동화" 화제글, "CLAUDE.md가 에이전트를 방해한 사례" 실전 팁). YouTube 픽은 공란: 등록 채널 3곳(조코딩·AI Edge·Jeff Su)의 RSS 캐시가 여전히 무관한 채널로 오매핑돼 있음을 재확인(조코딩→멋쟁이사자처럼, AI Edge→Miles Deutscher Vlogs, Jeff Su→Harvard Business Review) — sources.md에 취소선으로 표시, WebSearch 대체 확인도 최근 1~2일 업로드를 특정하지 못해 억지로 채우지 않음. r/ClaudeAI·r/AI_Agents는 old.reddit RSS가 연속 요청 시 일시 차단되는 패턴을 재확인(간격을 두고 재시도하면 성공). newsletter/2026-07-11.md.

## [2026-07-13] scan | 항목 13건

★최우선 3건(Anthropic 자체 공개 Claude Cowork 사용패턴 데이터=잡무 33.4%·콘텐츠 16.4% vs 개발 8.7%, Charlie Clark의 Claude Code 에이전시 "세컨드 브레인" 4계층 구조=응대 60배 단축 실측, Mozilla Firefox 보안수정 월 423건 에이전트 파이프라인=하네스·모델 기여 50:50) — 항목당 원문 정독으로 도구/업무/방법/포인트 채움. 초안에 있던 "OpenAI ChatGPT Work 출시"·"Codex 5시간 제한 해제"·"Apple 영업비밀 소송"은 각각 07-11·07-12 뉴스레터와 사실상 동일 사건임을 검토 중 발견해 제외·교체(대신 Anthropic Cowork 데이터, OpenAI 안전팀장 Heidecke 퇴사로 대체) — 검수 시 직전 2~3일치 뉴스레터와 제목 대조 필요성 확인. 빅 뉴스 3건(Fable 5 무료기한 7/19로 2차 연장, OpenAI 안전팀장 Johannes Heidecke 퇴사=IPO 준비 시점과 겹침, Anthropic 2주간 DeepMind·Berkeley 연구자 4명 영입) + 커뮤니티 3건(HN 1위 "Claude Code 사전토큰 3.3만 vs OpenCode 7천" 494점, r/singularity·r/OpenAI 동시다발 "5시간 제한 삭제" 반응, r/ClaudeAI "GTA6 Claude로 만들기 43일차" 바이브코딩 연재) + YouTube 픽 4건. 커뮤니티 RSS는 이번에도 연속요청 시 빈 응답 패턴 재현(15초 간격 재시도로 6개 서브레딧 전부 확보). YouTube 채널ID 7개 신규 해석 완료(장피엠·지피터스·kooky0ai·Ben AI·Liam Ottley·Dan Martell·Varun Mayya — 핸들 페이지 HTML의 externalId 필드로 검증) → sources.md RSS 캐시 갱신. AI Edge(AIEdgeHQ)는 핸들이 무관 채널("Miles Deutscher Vlogs")로 계속 오매핑돼 여전히 미해결. newsletter/2026-07-13.md.

## [2026-07-15] scan | 항목 11건

★최우선 3건(tmux+텔레그램으로 멀티에이전트가 스스로 모델을 다운시프트/업시프트하는 패턴, Crew=Claude Code 멀티에이전트를 worktree 없이 실시간 컨텍스트 공유로 조율하는 신생 툴, Claude Code Hooks로 AI 말버릇을 실시간 치환하는 HN 407점 사례) — 항목당 원문 정독(reddit permalink는 curl+UA로 HTML 파싱, HN 링크는 WebFetch)으로 도구/업무/방법/포인트 채움. GPT-5.6 Sol Ultra "129 서브에이전트 10시간 팬아웃"·WASM "hermits" 에이전트 배포 등은 세부 확인 실패(reddit .json 403, 과도하게 기술적)로 ★최우선에서 제외. 빅 뉴스 4건(Claude for Teachers 미국 K-12 교사 무료 출시, OpenAI 첫 하드웨어=화면없는 이동형 스피커 유출, Demis Hassabis의 AGI 몇년내 전망+미국주도 프론티어AI 심사기구 제안, Thomson Reuters 엔지니어 500명 감원+AI-네이티브 250명 채용) + 커뮤니티 3건(Sam Altman의 Anthropic "Hard Questions" 광고 저격, 토큰절약 풍자 플러그인 "done", Opus 5 "이번주 출시설" 루머) + YouTube 픽 2건(kooky0ai AI Native 조직, Varun Mayya AI생성 영화 숏폼). 커뮤니티 RSS는 이번엔 요청당 55초 간격을 미리 확보하는 방식으로 6개 서브레딧 전부 확보(r/ChatGPTCoding은 실제로 오늘 top 글 없어 빈 피드 확인). YouTube RSS 캐시 9채널 전부 정상 조회(신규 미해결 채널 없음, AI Edge만 계속 미해결) — Jeff Su·Ben AI·Liam Ottley·장피엠·지피터스는 최신 업로드가 06-30~07-02로 정체돼 이번 창에는 픽 없음. newsletter/2026-07-15.md.

## [2026-07-14] scan | 항목 12건

★최우선 2건(kooky0ai의 Cursor+Claude Code/Codex+Whisper 자막자동화 전과정 튜토리얼, ploy.ai 프로덕션 마케팅사이트 에이전트를 Opus 4.8→GPT-5.6 마이그레이션=속도 2.2배·비용 27%↓ 실측+하네스 재튜닝 노하우) — 항목당 원문/영상설명 정독. 빅 뉴스 4건(Anthropic Ben Bernanke 장기이익신탁 영입, OpenAI Atlas 브라우저 8/9 단종=ChatGPT·Codex로 흡수, Erdős 미해결문제 또 GPT-5.6에 풀림, "루프 엔지니어링" 신조어 부상=어제자 Mozilla 사례와 연결) + 커뮤니티 3건(물리학자 Yuji Tachikawa의 "Claude Fable이 6개월 막힌 연구 풀어줌" 트윗 화제 후 삭제, r/AI_Agents "코딩 에이전트 세션 로그에 API키 평문 저장" 보안 경고, HN 1위 "AI 생성글에 표시달자" 1000점) + YouTube 픽 3건(조코딩 주간 AI뉴스, Ben AI의 Re-fresh Skill 소개, Varun Mayya GPT-5.6 vs Fable 숏폼). old.reddit RSS 레이트리밋이 이번엔 훨씬 빡빡함(요청당 리밋 소진, 리셋 51~55초) — 백그라운드 태스크로 순차 재시도(요청 1건→55초 대기→재시도) 방식으로 6개 서브레딧 중 5개 확보(r/ClaudeAI는 마지막에 재차 차단돼 초기 프리뷰 2건만 확보, r/ChatGPTCoding·r/LocalLLaMA는 스캔 생략/공백 확인). YouTube RSS 캐시 8채널 전부 정상 조회, 신규 미해결 채널 없음(AI Edge는 계속 미해결 상태 유지). GPT-5.6 vs Fable 5 벤치마크 비교, OpenAI Codex팀 AMA(7/10) 등은 이미 지난 3일치 뉴스레터에서 다뤄 제외. newsletter/2026-07-14.md.

## [2026-07-15] ingest | 밀린 스캔 소급 반영 (07-11~07-15), use-case 11건 + updates 8건

사용자 요청("승인 게이트 폐지, 소급 반영"): 07-07 사용자 지정으로 뉴스레터 체크박스 승인 없이 자동 반영하는 방식으로 워크플로우 전환(CLAUDE.md 수정) 이후, 07-08 백필 이후 밀려 있던 07-11~07-15 5개 뉴스레터를 일괄 소급 반영. 병렬 서브에이전트 4개(model:sonnet, use-case 페이지 그룹 3개+updates/players/concept 그룹 1개)로 실행, 항목별 원문 1회 WebFetch로 벤치마크 필드(모델·비용·권한) 확인 후 미확인은 정직하게 "미확인" 표기. ★최우선(에이전트·자동화) 11건 전부 use-case 구조화 스키마로 신규 생성: [[openai-chatgpt-work-launch]](personal-productivity), [[record-replay-mcp-skill-recorder]]·[[codex-record-replay-automations]]·[[claude-cowork-usage-data-2026]]·[[charlie-clark-claude-code-second-brain-agency]]·[[tmux-telegram-agent-model-downshift]](ops), [[ploy-opus-to-gpt-5-6-migration]](★실측 2.2배·27%↓, marketing — case-catalog 신규 도메인), [[accord-agents-cross-review-workspace]]·[[crew-worktree-free-multiagent-orchestration]]·[[claude-code-hooks-wordswap]](dev-automation), [[youtube-subtitle-automation-claude-codex-whisper]](content-creation). Mozilla Firefox 사례(07-13 재게재분)는 기존 [[mozilla-claude-mythos-firefox-vulnerability-detection]]에 07-13 뉴스레터·Lenny's Newsletter 출처와 "목표 루프" 세부만 보강, 신규 페이지 생성 안 함(중복 방지). 빅 뉴스 14건 후보 중 8건을 "지속적 사실"(제품 출시·인물 이동·소송·거버넌스)로 판단해 updates/players 페이지 생성: [[2026-07-09-openai-gpt-5-6-launch]], [[2026-07-10-openai-apple-lawsuit]], [[2026-07-10-alibaba-bans-claude-code]], [[2026-07-11-openai-heidecke-departure]], [[2026-07-13-anthropic-hires-top-researchers]], [[2026-07-09-anthropic-bernanke-oversight-trust]], [[2026-07-15-claude-for-teachers]], [[2026-07-14-thomson-reuters-ai-layoffs]] — 각 원문 WebFetch/WebSearch로 사실관계 검증 후 [[openai]]·[[anthropic]]·[[google]] 플레이어 허브와 [[chatgpt]] 도구 허브·[[timeline]](19건→27건)에 교차링크 추가. 개념 페이지 [[loop-engineering]] 신규 생성("프롬프트 다음은 루프", Mozilla·Ploy 사례를 실전 증거로 연결). 스킵 6건(사유): Gemini 3.5 Pro 지연(미출시 지속, 상황 변경 가능성 — 사용자 원지침 스킵), Claude Reflect(부가기능, 전략적 지속성 낮음), OpenAI Atlas 단종(제품 통합이나 비중 조절 위해 스킵, ChatGPT 데스크톱 통합은 GPT-5.6 GA 페이지에서 언급 처리), OpenAI 하드웨어 스피커(Bloomberg 단독 미확정 루머, 2027년 출시 목표라 실체 없음), Demis Hassabis AGI/규제기구 제안(전망·제안 단계, 아직 제도화된 조치 없음), Codex 5시간 제한 해제·Terence Tao 수학앱·Gemini 스펙유출·Erdős 문제해결(애초 빅뉴스 후보 목록에 없던 항목). case-catalog.md에 신규 도메인 "마케팅" 신설, 35건으로 갱신(벤치마크 요약도 갱신 — 모델+비용 확인 케이스 2건→3건, [[ploy-opus-to-gpt-5-6-migration]] 추가). index.md 변경분만 갱신(updates 8건·use-case 11건·concept 1건·플레이어 갱신 메모·timeline 27건·newsletter 최신 링크). 뉴스레터 5개 파일 체크박스 갱신: ★최우선 11건 전부 [x], 빅뉴스 8건 [x]·6건 [ ] 유지, 커뮤니티·YouTube 픽은 이번 소급 반영 범위 밖이라 전부 [ ] 유지. 진행 중 1차 세션이 API 연결 오류로 중단돼 서브에이전트 결과 일부(use-case 6건·updates 8건·concept 1건)가 파일시스템에 반영되지 않은 것처럼 보였으나, 재확인 결과 백그라운드 서브에이전트들이 지연 후 정상 완료해 전량 생성됨을 확인 — 남은 페이지(ploy 마이그레이션 1건)만 직접 작성해 완주.

## [2026-07-16] scan | 항목 11건, 반영 11건

★최우선 2건 — Claude Code+Obsidian "AI가 유지보수하는 세컨드 브레인"(natural20.com 가이드+Reddit 반응, 기존 [[wiki-builder-claude-code-llm-wiki]]에 독립 재현 사례로 교차 반영, 상충 아닌 보강 블록 추가)과 solidifier(Claude Code Skill로 SOLID 원칙 과잉설계 억제, GitHub 저장소 확인 후 [[solidifier-claude-code-skill]] 신규 생성 — case-catalog 36건). 항목당 원문(natural20.com WebFetch, Reddit HTML 퍼머링크 파싱)으로 도구/업무/방법/포인트 확인. Dan Martell의 "AI 에이전트 구축 가이드"(SOUL/IDENTITY/USER+Manager/Specialist 패턴)는 영상 설명까지 확보했으나 특정 AI Tool(Claude Code/Codex)이 명시되지 않아 정직성 규칙에 따라 ★최우선 대신 YouTube 픽으로 하향. 빅 뉴스 4건 전부 페이지화: [[2026-07-15-openai-codex-micro-launch]](Codex Micro $230 실제 출시, 6/29 예고 페이지와 교차링크), [[2026-07-15-anthropic-ipo-investor-meetings]](10월 목표 IPO 투자자 미팅), [[2026-07-15-anthropic-eu-parliament-backlash]](EU 의회 청문회 파견자 논란), 캐나다 $10M Claude 크레딧 지원(단발성으로 판단해 [[anthropic]] 플레이어 페이지에만 갱신, 별도 페이지 생성 안 함). [[anthropic]]·[[openai]]·[[codex]] 허브와 [[timeline]](27건→30건) 교차링크 갱신. 커뮤니티 화제 2건(r/AI_Agents Codex "model routing" skill star-velocity 화제, r/ClaudeAI 지침이탈 감지용 "카나리아" 트릭 21댓글) + YouTube 픽 4건(조코딩 주간AI뉴스, Dan Martell 에이전트 구축가이드, kooky0ai AI Native조직, Ben AI 세일즈 세컨드브레인). old.reddit `.json` 엔드포인트가 이 User-Agent에 HTTP 403을 반환함을 신규 확인(RSS·HTML 퍼머링크는 정상) — sources.md에 우회법 기록. YouTube RSS 9채널 재확인, 신규 미해결 채널 없음(AI Edge 계속 미해결). newsletter/2026-07-16.md.
