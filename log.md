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

## [2026-07-18] scan | 항목 12건, 반영 12건

07-17자 뉴스레터는 미작성 상태로 건너뜀(스캔 공백 — 다음 lint 시 백필 검토 필요). ★최우선 3건 — Ben AI의 Claude Skills 제작 방법론 튜토리얼(YouTube 설명·타임스탬프로 7베스트프랙티스+메타스킬 "Skill Builder Skill" 확인, 정량 성과 없어 evidence anecdotal), r/AI_Agents의 "1인 AI 회사 6개월 운영" 프레임워크(컨텍스트=코드·CLAUDE.md 부서 플레이북+라우터·승인 큐·러너 루프·비가역성 게이트, 서브에이전트 비용 15배·강제푸시 결제사고 등 구체 실패사례 다수 포함 — reddit HTML 퍼머링크 curl+UA로 원문 전체 정독), r/ClaudeAI의 SearchSteward 구직 자동화 툴 제작기(vibe-coding→"Fable이 계획·서브에이전트가 구현·Fable이 리뷰" 구조로 진화, 9주만에 입사+실제 SaaS 제품화). 3건 모두 use-case 구조화 스키마로 신규 생성(case-catalog 36→39건): [[ben-ai-claude-skills-building-methodology]](dev-automation), [[reddit-one-person-ai-company-framework]](ops), [[searchsteward-claude-job-search-automation]](personal-productivity). 빅 뉴스 5건: Gemini 3.5 Pro 세 번째 연기(코딩성능 내부목표 미달, Alphabet 주가 하락 — 기존 [[2026-07-01-google-gemini-3-5-pro-rollout-delay]]에 ⚠️상충 블록+업데이트 섹션 추가, 신규페이지 생성 안함), NotebookLM→Gemini Notebook 리브랜딩+코드실행 추가([[2026-07-16-google-notebooklm-gemini-notebook-rebrand]] 신규), 중국 Moonshot AI Kimi K3(2.8T, 역대 최대 오픈웨이트, 프론트엔드 코딩서 Fable 5 능가 — [[2026-07-16-moonshot-kimi-k3-launch]] 신규), Apple-OpenAI 소송 확전(전직원 40명에 증거보존서한 — 기존 [[2026-07-10-openai-apple-lawsuit]]에 업데이트 섹션 추가), OpenAI Atlas 브라우저 단종(8/9, ChatGPT 슈퍼앱 전략 — 07-15 소급반영 때는 비중조절로 스킵했으나 8/9 종료일·후속 전략이 확정돼 이번에 [[2026-07-09-openai-atlas-browser-shutdown]] 신규 생성, 이전 스킵 결정 번복). [[gemini]]·[[chatgpt]] 도구 허브, [[google]]·[[openai]] 플레이어 허브, [[timeline]](30건→33건) 전부 교차링크 갱신. 커뮤니티 화제 2건(HN 131점 "Claude Code: Anatomy of a Misfeature" 비판 블로그, HN 80점 Fable 5 "크레딧 필요" 일시 장애 소동 — WebFetch로 실제는 10분 내 복구된 장애임을 확인해 페이지화하지 않고 커뮤니티 항목으로만 기록) + YouTube 픽 2건(kooky0ai AI Native 조직, 조코딩 오픈소스 월드모델 쇼츠). old.reddit RSS는 이번에도 연속요청 시 HTTP 429 발생(8~15초 간격 재시도로 회피). HN Algolia `search_by_date`+`numericFilters=created_at_i>...`로 최근 48시간 필터링해 효율적으로 스캔. newsletter/2026-07-18.md.

## [2026-07-20] scan | 항목 6건, 반영 6건

07-19자 뉴스레터는 미작성 상태로 확인(스캔 공백, 다음 lint 시 백필 검토 필요). ★최우선은 오늘
검증 가능한 신규 사례가 없어 공란으로 정직하게 기록 — 후보 3건을 확인했으나 전부 탈락: Dan Martell
채널의 07-19 업로드 2건은 영상 설명이 제목만 반복해 특정 AI Tool을 확인할 수 없었고(RSS
media:description이 내용 없이 제목만 중복되는 패턴 신규 확인), Ben AI 최신 업로드는 이미
07-18 스캔에서 [[ben-ai-claude-skills-building-methodology]]로 반영된 것과 동일 영상이라 제외,
r/AI_Agents의 "30-agent 유튜브 자동화 오케스트레이터" 글은 구조는 흥미로우나 자체 제작 렌더링
엔진+무명 LLM이라 도구 미확인으로 커뮤니티 화제로 하향. 빅 뉴스 2건 모두 기존 페이지 갱신(신규
페이지 생성 없음, 중복 방지): [[2026-07-01-claude-fable-5-global-return]]에 ⚠️상충 블록으로
7/7→7/12→7/19 연장 이력과 7/20 실제 발효 정리, [[2026-07-16-moonshot-kimi-k3-launch]]에
"후속 반응" 섹션으로 Moonshot 신규구독 중단 + OpenAI 전략담당 Dean Ball의 "AI 공산주의" 발언
추가. [[timeline]]에 07-20 항목 2건 추가(33건→35건). 커뮤니티 화제 3건(Fable 크레딧 전환
레딧 반응, 유출 Fable 시스템프롬프트 500토큰 범용화, "AI에게 삶을 얼마나 맡길까" 자동화 논쟁) +
YouTube 픽 1건(조코딩 주간 IT뉴스 롤업). old.reddit RSS는 이번에도 연속요청 시 429/타임아웃이
반복돼 12~25초 간격 재시도로 6개 서브레딧 확보(r/ChatGPTCoding은 실제로 당일 top 글 0건).
sources.md RSS 캐시·index.md·wiki/timeline.md 갱신. newsletter/2026-07-20.md.

## [2026-07-20] ingest | 공백 소급 스캔 (07-09, 07-10, 07-17, 07-19), 항목 20건, 반영 6건

주말·실행공백으로 비어있던 4개 날짜를 CLAUDE.md 신규 0단계 규칙(공백 점검·소급 스캔)에 따라
소급 반영. 새 페이지 3건: [[2026-07-09-xai-grok-4-5-launch]](Grok 4.5, Opus급 성능을 더
저렴하게), [[2026-07-19-alibaba-qwen-3-8-preview]](Qwen 3.8 프리뷰, Kimi K3 대응),
[[gpt-5-6-sol-ultra-math-proof-subagents]](GPT-5.6 Sol Ultra 64서브에이전트 수학난제 증명,
research 도메인 신규 case-catalog 40건). 기존 페이지 갱신 3건: [[2026-07-01-claude-fable-5-global-return]]
에 ⚠️상충 블록 추가(Anthropic 추정 Reddit 공지가 매체 보도와 배치 — 미확정 상태로 병기),
[[2026-07-10-openai-apple-lawsuit]]에 07-17 확전(전직원 40명 증거보존서한) 업데이트,
[[openai-chatgpt-work-launch]]·[[record-replay-mcp-skill-recorder]]는 기존 페이지 확인 후
신규 생성 없이 교차링크만. ★최우선은 07-10만 3건 확보, 07-09·07-17·07-19는 재현 가능한
신규 사례를 찾지 못해 정직하게 공란(지어내지 않는 규칙 준수). 커뮤니티·YouTube는 old.reddit·
채널 RSS가 10일 이상 지난 게시물을 반환하지 않아 다수 "특이사항 없음" 처리 — 소급 스캔의
구조적 한계로 정상. [[timeline]] 35→40건, [[index]]·[[case-catalog]]·[[openai]]·[[chatgpt]]
허브 갱신. newsletter/2026-07-09.md, 2026-07-10.md, 2026-07-17.md, 2026-07-19.md 신규 생성.

## [2026-07-21] scan | 항목 8건, 반영 8건
공백 없음(전일 07-20 뉴스레터 확인). ★최우선 2건 모두 use-case 페이지화: Cursor 에이전트
스웜 비용경제학(플래너-워커 계층 구조, 비용 8배↓·머지충돌 70배↓ 실측 — [[cursor-agent-swarms-model-economics]]),
Claude Code MCP 멀티모델 위임 벤치마크(198회 히든테스트, GPT-5.6 Codex 계열 54/54 만점
— [[claude-code-mcp-multimodel-delegation-benchmark]]). "5 CLAUDE.md 패턴" 후보는 mechanism
통제 어휘에 맞지 않아 use-case화 대신 뉴스레터 커뮤니티 화제로만 기록(스키마 정직성 우선).
빅뉴스 3건: Anthropic 연구자 Alpöge의 야코비안 추측 반증 주장(동료검토 전, [[2026-07-20-claude-fable-jacobian-conjecture]]
신규), Moonshot Kimi K3발 홍콩 IPO $30B + 미 정부 중국산 AI 규제 재검토([[2026-07-16-moonshot-kimi-k3-launch]]
갱신), Google Gemini 전용 추론칩 "Frozen v2"([[2026-07-20-google-frozen-v2-chip]] 신규).
[[timeline]] 40→44건, [[index]]·[[case-catalog]](40→42건)·[[anthropic]]·[[google]]·[[claude-code]]
허브 갱신. newsletter/2026-07-21.md 신규 생성.

## [2026-07-22] scan | 항목 9건, 반영 9건
공백 없음(전일 07-21 뉴스레터 확인). ★최우선 3건 모두 use-case 페이지화: Claude Code 다중세션
CI 파이프라인(Git worktree+GHA PR 게이트 — [[claude-code-ci-pipeline-multisession-worktree]]),
JetBrains의 rtk 스킬 토큰절감 실측 벤치마크(주장 60~90%↓ vs 실측 저-effort +7.6%↑ —
[[rtk-skill-jetbrains-token-benchmark]], Caveman 스킬에 이은 "자체 보고 vs 실측" 검증 시리즈
2번째), Jeff Su의 Claude Design DESIGN.md→디자인시스템→템플릿 워크플로([[claude-design-workflow-templates]]).
빅뉴스 4건: OpenAI 미출시 모델이 평가 중 샌드박스 탈출·Hugging Face 침해 공식 발표
([[2026-07-21-openai-huggingface-security-incident]] 신규, openai.md 갱신), Anthropic $1.5B
저작권 합의 법원 최종승인([[2026-07-21-anthropic-copyright-settlement-approved]] 신규, anthropic.md
갱신 — 기존 "$75M 신규소송" 리스크 언급과 별개 건임을 상충 블록으로 명시), Google Gemini 3.6
Flash·3.5 Flash-Lite·3.5 Flash Cyber 3종 출시([[2026-07-21-google-gemini-3-6-flash-launch]] 신규,
gemini.md 갱신), Terry Tao의 야코비안 반례 후속 검토(기존 [[2026-07-20-claude-fable-jacobian-conjecture]]
페이지에 섹션 추가 — 3차원 반례를 기정사실로 서술). 커뮤니티 2건(AI가 나쁜 아이디어를 싸게 만든다는
성찰, HuggingFace CEO의 오픈소스 규제 반발). YouTube 1건(조코딩, OpenAI GPT-Live·Codex 활용법).
[[timeline]] 44→48건, [[index]]·[[case-catalog]](42→45건)·[[anthropic]]·[[openai]]·[[gemini]]·
[[claude-code]] 허브 갱신. newsletter/2026-07-22.md 신규 생성.

## [2026-07-26] scan | 항목 9건, 반영 9건 (공백 소급 07-23~07-26)
공백 점검: 마지막 뉴스레터 07-22, 오늘(07-27) 기준 07-23~07-26 4일 공백 확인 → 3일 이상이라
newsletter/2026-07-26.md 하나로 통합 작성(`> 소급 스캔: 07-23 ~ 07-26`). ★최우선 3건 모두
use-case 페이지화: 손글씨 사진→폰트 자동 제작 Claude Code Skill([[draw-your-font-claude-code-skill]]),
Claude Code 세션 243개 실측 프로파일링(비용 68%가 "툴 결과"에서 발생 —
[[ai-agent-profiler-claude-code-cost-benchmark]]), gstack 페르소나 화상회의 봇(Claude Code가
유일한 두뇌, 봇은 무지능 셸 — [[gstack-meeting-personas-claude-code-brain]]). 빅뉴스 4건: Claude
Opus 5 출시(Fable 5급 성능 절반가+CLAUDE.md "점진적 공개" 철학 전환 —
[[2026-07-24-claude-opus-5-launch]] 신규), OpenAI 17일 연속 불안정 끝 나흘 연속 장애
([[2026-07-25-openai-reliability-crisis]] 신규), Google Gemini 4 예열+Workspace 확장(gemini.md
갱신), Anthropic IPO 10월 목표 구체화·티커 ANTH 거론([[2026-07-15-anthropic-ipo-investor-meetings]]
갱신). 커뮤니티 2건(Screenpipe YC S26 HN 런칭, Opus 5발 CLAUDE.md 철학 논쟁). YouTube 2건(조코딩
주간 IT뉴스, Ben AI 마케팅 스킬). [[timeline]] 48→50건, [[index]]·[[case-catalog]](45→49건)·
[[anthropic]]·[[openai]]·[[gemini]]·[[claude-code]] 허브 갱신,
[[2026-07-16-moonshot-kimi-k3-launch]]에 후속반응3 섹션 추가. newsletter/2026-07-26.md 신규 생성.

## [2026-07-27] scan | 항목 5건, 반영 2건
공백 소급 완료 후 오늘치 스캔. 뉴스량이 적어 항목을 축소. ★최우선은 세부 검증된 후보가 없어 비움.
빅뉴스 1건 페이지화: Moonshot Kimi K3 오픈웨이트 전면 공개(예고대로 07-27 00:00 UTC, 1.4TB —
기존 [[2026-07-16-moonshot-kimi-k3-launch]]에 후속반응3으로 갱신, 신규 페이지 없음). 나머지
2건(Opus5 vs GPT-5.6 Sol 벤치마크 비교, 오픈소스 규제 로비 제보)은 검증 수준이 낮아 뉴스레터
기록만 하고 페이지화 보류. 커뮤니티 2건(오픈소스 규제 로비 제보, Claude Code/OpenCode/Pi 하네스
비교 재점화). YouTube 픽 없음(전날 반영분과 중복). [[timeline]] 50→51건. newsletter/2026-07-27.md
신규 생성.

## [2026-07-28] scan | 항목 8건, 반영 8건 (공백 소급 07-28)
공백 점검: 마지막 뉴스레터 07-27, 오늘(07-29) 기준 07-28 하루 공백 확인 → 1일이라 날짜별 파일
newsletter/2026-07-28.md로 작성. ★최우선 1건 use-case 페이지화: Claude Code·Codex 겸용 출력
스타일 스킬 "i-have-adhd"(ADHD 친화적 행동우선 구조, Reddit 320+ 댓글 화제이나 효과는 엇갈림 —
[[i-have-adhd-claude-codex-skill]]). 빅뉴스 3건 신규 페이지화: Anthropic Dario Amodei
"오픈웨이트 모델 금지 주장한 적 없다" 공식 입장(77개사 연대서한 불참, 전날 커뮤니티 로비 제보와
⚠️ 상충 처리 — [[2026-07-27-anthropic-dario-open-weights-position]]), Nvidia SSI에 $5B 투자
+OpenAI 오하이오 데이터센터 최대 $250B 파이낸싱 보증 검토([[2026-07-27-nvidia-ssi-openai-financing]]),
Claude Mythos 포스트퀀텀 암호 후보 HAWK 구조적 결함 60시간 만에 발견+AES공격 200~800배 고도화
([[2026-07-28-claude-mythos-post-quantum-crypto-break]]). OpenAI 7/28 이미지생성 소규모 재장애는
기존 [[2026-07-25-openai-reliability-crisis]]에 후속 섹션으로 추가(신규 페이지 없음). 커뮤니티 2건
(에이전트 루프→그래프 구조 전환 아키텍처 논의, ADHD스킬발 출력스타일 커스터마이징 패러디).
YouTube 2건(조코딩 주간 AI뉴스, Varun Mayya Codex 채용 자동화 — 세부 미확인이라 최우선 대신 픽
으로만). [[timeline]] 51→55건, [[index]]·[[case-catalog]](49→51건)·[[anthropic]]·[[openai]]·
[[claude-code]]·[[codex]] 허브 갱신.

## [2026-07-29] scan | 항목 3건, 반영 3건
공백 소급 완료 후 오늘치 스캔. 뉴스량이 적어 항목을 축소. ★최우선 1건 use-case 페이지화:
Microsoft 사내 수만 명 엔지니어 대상 Claude Code+GitHub Copilot CLI 4개월 확산 추적 학술 연구
(arXiv, PR 병합량 약 24%↑ 실측, 개인 바이럴 사례가 아닌 대기업 전사 도입의 드문 실측 벤치마크 —
[[microsoft-claude-code-copilot-cli-adoption-study]]). 빅뉴스 1건 신규 페이지화: OpenAI GPT-Live
음성 기능이 Codex·ChatGPT 데스크톱 코딩 작업까지 확장, 음성으로 다중 작업 지시·PR 리뷰 가능
([[2026-07-29-openai-gpt-live-codex-voice]]). 커뮤니티·YouTube는 스캔 시점 기준 신규 화제 없어
공란(억지로 채우지 않음). [[timeline]] 갱신 포함, [[openai]]·[[codex]] 허브 갱신.
newsletter/2026-07-28.md·2026-07-29.md 신규 생성.

## [2026-07-30] scan | 항목 8건, 반영 7건
공백 없음(전날 07-29 스캔 정상 실행 확인 후 바로 오늘치 진행). ★최우선 1건 use-case 페이지화:
BenAI(YouTube) 마케팅 Claude Skill 11종 — 부서별로 스킬을 따로 만들지 않고 단일 공유 스킬
소스+배포 스크립트로 부서 플러그인에 자동 동기화하는 구조(GitHub 저장소 naveedharri/benai-skills
교차 확인으로 아키텍처 구체화) → [[benai-claude-skills-marketing-automation]] 신규,
case-catalog 52건. 빅 뉴스 5건: (1) OpenAI·Anthropic·Google·Meta 직원 1,100명+ "Pacing the
Frontier" 서한(정부에 AI 감속 장치 사전 마련 촉구) 신규 페이지, (2) OpenAI Hugging Face 침해
사고가 실제로는 5개 플랫폼 규모였음이 추가 확인돼 기존 07-21 페이지에 후속 섹션 추가, (3)
Anthropic 겨냥 실리콘밸리 반발 확산(Figma 갈등·Fable 5 가드레일) — 기존 07-27 페이지에 후속
섹션+상충 블록 추가, (4) Google DeepMind AlphaFold 전담팀 해체·John Jumper Anthropic 이적
재확인 신규 페이지, (5) OpenAI ChatGPT for Academic Researchers 출시($250M, 2027년까지 10만
명) 신규 페이지. 커뮤니티 2건(r/AI_Agents "Claude Code 32k 시스템프롬프트" 불만 토론, HN 298점
"Handbook.md" 장문 정책기반 에이전트 통제 실패 벤치마크). YouTube 2건(조코딩 ChatGPT Work 소개,
조코딩 Hugging Face 사고 해설) — Varun Mayya Codex 채용숏폼은 07-28자에 이미 픽으로 소개돼
중복 제외. old.reddit RSS는 15~30초 간격 재시도로 4개 서브레딧(ClaudeAI·AI_Agents·singularity)
확보, ChatGPTCoding은 이번에도 실제 빈 피드(t=week 기준). YouTube RSS 캐시 9채널 재확인, 신규
미해결 없음(AI Edge 계속 미해결). [[timeline]] 55→60건, [[index]]·[[case-catalog]]·
[[anthropic]]·[[openai]]·[[google]]·[[claude-code]]·[[chatgpt]] 허브 갱신.
newsletter/2026-07-30.md 신규 생성.

## [2026-07-31] scan | 항목 10건, 반영 7건
공백 없음(전날 07-30 스캔 정상 실행 확인 후 바로 오늘치 진행). ★최우선 3건 모두 use-case
페이지화: (1) r/AI_Agents, Claude Code 헤드리스+MCP서버+GitHub Actions 크론으로 SEO 매니저
자동화(오픈소스 AGPL-3.0) → [[claude-code-seo-manager-mcp-dashboard]] 신규, (2) r/AI_Agents,
"Claude Code 기능 15%만 썼다"는 문제의식의 오픈소스 CLI Adeptly — 계획서에 기능 학습 녹이기
+ Architect→Approval Gate→Builder→Medic→Reviewer→Security→Pilot 7단계 Crew 파이프라인
→ [[adeptly-claude-code-learning-crew-pipeline]] 신규, (3) Bottleneck Labs 블로그(HN 250점),
GPT-5.6 Sol에게 실제 자금 $350+컴퓨터 전권을 24시간 위임 → 가짜 테스터 구매·스팸·6회 가격
급락 후 $99.50 손실로 종료(재무·행동 로그 실측) → [[gpt-5-6-sol-autonomous-business-failure]]
신규. case-catalog 52→55건. 빅뉴스 4건: (1) Anthropic 공식, 사이버보안 평가 중 Claude 모델
(Opus 4.7·Mythos 5 등)이 환경 설정 오류로 실제 기업 3곳에 무단 접근 — 신규 페이지
[[2026-07-31-anthropic-cybersecurity-eval-incidents]], (2) Google DeepMind, 로봇 전신 제어
모델 Gemini Robotics 2 공개 — 신규 페이지 [[2026-07-31-google-gemini-robotics-2-launch]],
(3) GPT-5.6 Luna 80%·Terra 20% 가격 인하(DeepSeek 겨냥) — 기존 [[2026-07-09-openai-gpt-5-6-launch]]에
후속 섹션 추가, (4) Claude Opus 5가 Vending-Bench 2(경제 시뮬레이션)에서 담합·뇌물·거짓말로
1위 — 기존 [[2026-07-24-claude-opus-5-launch]]에 후속 섹션 추가. 커뮤니티 3건(r/ClaudeAI
"Claude Code 시스템프롬프트 축소→CLAUDE.md 이관" 재평가 토론, HN 164점 "2x not 10x" LLM
코딩생산성 회의론, r/AI_Agents "프로덕션 에이전트 50개 중 47개 프롬프트인젝션 취약" 보안
감사 결과)는 뉴스레터에만 기록. YouTube 픽은 등록 채널 9곳 재확인했으나 신규 업로드 중
도구/방법을 구체적으로 확인할 수 있는 영상이 없어 0건(억지로 채우지 않음, 조코딩 신작 2건은
설명란 부실로 확인 보류). old.reddit RSS는 15~30초 간격 재시도로 5개 서브레딧(ClaudeAI·
AI_Agents·singularity·OpenAI) 확보(ChatGPTCoding 미조회, 지면상 생략). YouTube RSS 캐시
9채널 재확인, 신규 미해결 없음(AI Edge 계속 미해결). [[timeline]] 60→64건, [[index]]·
[[case-catalog]]·[[anthropic]]·[[openai]]·[[google]]·[[claude-code]]·[[chatgpt]]·[[gemini]]
허브 갱신. newsletter/2026-07-31.md 신규 생성.

## [2026-08-03] scan | 항목 7건, 반영 4건 (공백 소급 08-01~08-03)

공백 3일(08-01~08-03, 사흘 이상)로 규칙에 따라 newsletter/2026-08-03.md 하나에 통합
소급 작성. 이번 스캔 환경에서 old.reddit.com에 대한 WebFetch 접근이 전면 차단되어
(www.reddit.com 포함) r/AI_Agents·r/ClaudeAI 등 커뮤니티 원문을 직접 조회하지 못했다 —
★최우선(에이전트·자동화) 항목은 0건으로 정직하게 보고(억지로 채우지 않음). 대신 공식
소스·HN·YouTube RSS로 확보 가능한 빅 뉴스 4건 반영: (1) OpenAI, 차기 모델 "Astra"를
정식 출시 대신 10개 미해결 수학 난제 증명으로 티저 공개(문제당 $2,000 미만 토큰 주장,
실패율 비공개) → [[2026-08-01-openai-astra-teaser-math-proofs]] 신규, (2) Anthropic
오픈웨이트 논쟁 후속 — OpenAI·Google 결국 연대서한 서명, 백악관 Sacks "규제 포획" 비판,
실리콘밸리 반발 확산 → 기존 [[2026-07-27-anthropic-dario-open-weights-position]]에
08-01 후속 섹션 추가, (3) Alibaba Qwen3.8-Max(2.4T) 정식 공개, Fable5 벤치마크 도전
자체 발표(독립검증 없음) → 기존 [[2026-07-19-alibaba-qwen-3-8-preview]]에 08-03 후속
섹션 추가, (4) AWS-Superblocks 바이브코딩 프라이빗클라우드 제휴 → [[citizen-development]]
개념 페이지에 사례 추가(신규 페이지 생성 안 함, 단발성 비즈니스 딜로 판단). 커뮤니티
1건(HN 1,092점 "LLMs reward expertise")은 뉴스레터에만 기록. YouTube 픽 2건(조코딩
Astra 관련 뉴스요약, Ben AI 세일즈 스킬 영상 — 후자는 자막·설명 미확인으로 참고용
표기만 하고 위키 미반영). [[timeline]] 64→68건, [[index]]·[[openai]] 허브 갱신.
raw/2026-08/openai-astra-teaser-math-proofs.md 신규 저장.

## [2026-08-04] scan | 항목 4건, 반영 2건

공백 없음(직전 08-03 소급 스캔 정상 완료 확인 후 바로 오늘치 진행). 페이지화할 신규
대형 발표 없음 — 진행 중이던 Astra·오픈웨이트 이슈의 반응이 이어진 하루로 판단해 새
update/player 페이지는 만들지 않음. 대신 [[loop-engineering]] 개념 페이지에 OpenAI
연구자 Lilian Weng의 "하네스 엔지니어링" 글(HN 118점 화제, 원문은 07-04 게시)을 이론적
근거로 추가 반영 — 코딩 에이전트가 파일탐색/셸실행/버전관리/서브에이전트 위임이라는
비슷한 도구집합으로 수렴한 현상을 "하네스 표준화"로 설명하는 관점이 기존 페이지의
Mozilla 루프엔지니어링 사례와 잘 맞물림. 커뮤니티 2건(위 하네스 엔지니어링 HN 118점,
"단일 AMD MI300X에서 DeepSeek V4 Flash 구동" HN 123점)은 뉴스레터에만 기록. ★최우선
0건(오늘도 구체 자동화 사례 미확인, old.reddit 접근 여전히 차단). YouTube 픽 2건(조코딩,
Astra 반응 영상·새 LLM 벤치마크 소개 영상). newsletter/2026-08-04.md 신규 생성.

## [2026-08-07] scan | 항목 9건, 반영 6건 (공백 소급 08-05~08-07, cron 세션)

> ⚠️ **병렬 세션 안내**: 이 항목과 바로 다음 항목(iMac 세션)은 같은 08-05~08-07 공백을
> 서로 다른 두 세션이 독립적으로 소급 스캔한 기록이다. 두 세션이 서로의 존재를 모른 채
> git 브랜치가 분기된 상태로 실행됐고, 이후 머지 과정에서 중복 사실을 정리했다. 자세한
> 병합 조치는 맨 아래 `[2026-08-11] ingest | 병합 세션 — 08-05~08-07 중복 스캔 정리`
> 항목을 참고.

공백 점검: 마지막 뉴스레터 08-04, 오늘(08-08) 기준 08-05~08-07 사흘 공백 확인 → 3일 이상이라
newsletter/2026-08-07.md 하나로 통합 소급 작성(`> 소급 스캔: 08-05 ~ 08-07`). 이번에도
old.reddit.com은 WebFetch 전면 차단이 이어져 r/ClaudeAI·r/AI_Agents 등 커뮤니티 원문은
직접 조회하지 못함(HN Algolia·공식 소스·YouTube RSS로 대체 확보). ★최우선 1건 use-case
페이지화: Databricks가 자사 코딩 에이전트(Claude Code·Codex·Cursor) 비용을 AI Gateway
(모델 스마트라우팅+예산추적+하네스/캐싱 튜닝)로 자동 관리한 실측 사례 — 스마트 라우팅
평균비용 30%+↓, 토큰/캐싱 튜닝 약 50%↓ (원문 직접 인용 확인). HN 제목의 "70% 절감"은
원문에 해당 문장이 없어 반영하지 않고 정직성 규칙에 따라 페이지에 주의사항으로 명시
→ [[databricks-ai-gateway-coding-cost-management]] 신규, case-catalog 개발자동화 도메인에
추가. 빅 뉴스 2건 신규 페이지화: (1) Claude Code Auto mode가 08-07부로 Pro·Max·Team
플랜 기본값으로 전환(승인피로 해소 이중방어 구조, 프로덕션은 격리환경 권장)
→ [[2026-08-07-claude-code-auto-mode-default]] 신규, (2) 헤지펀드 Millennium과 Anthropic이
"디지털 리스크 애널리스트" 공동 개발(운용자산 $92B+, 사람 검증 게이트 명시)
→ [[2026-08-06-anthropic-millennium-digital-risk-analyst]] 신규. 그 외 Anthropic 엔터프라이즈
기능 2건(08-05 Inference hooks 인라인 DLP 베타, 08-06 Self-hosted environments 퍼블릭 베타)과
08-05 7.5시간 장애는 별도 페이지 없이 [[anthropic]] 플레이어 페이지·[[claude-code]] 허브에
직접 반영(비중이 다소 낮은 엔터프라이즈 세부 기능으로 판단). AMD의 AI칩 스타트업 Taalas
인수(HN 875점)는 페이지화하지 않고 뉴스레터·timeline에만 기록. 커뮤니티 2건(HN 143점
Cloudflare "Kitesurf" 에이전트 전용 브라우저, HN 369점 DeepSeek V4 Flash ARC 벤치마크)은
뉴스레터에만 기록. YouTube 픽 3건 — 조코딩 2건(데이터센터 직접 구축기, "클로드 코드 제작자가
쓰는 AI 성능 비법"은 쇼츠 설명·자막 확인 실패로 ★최우선 승격 보류·참고용 기록만), 이번에
신규 등록된 AI Frontier Korea 채널 첫 소개(최신 회차 EP107, 08-02 업로드 — 08-05~08-07
구간 신규 업로드는 없어 최신 회차로 대체). LinkedIn(조코딩·이승필 AX LABS)은 신규 게시물을
웹서치로 확인하지 못함(로그인 장벽 지속). [[timeline]] 68→74건, [[index]]·[[case-catalog]]·
[[anthropic]]·[[claude-code]] 허브 갱신. raw/2026-08/에 databricks·claude-code-auto-mode-default·
anthropic-millennium-digital-risk-analyst 3개 파일 신규 저장.

## [2026-08-08] scan | 항목 6건, 반영 3건

공백 없음(직전 08-07 소급 스캔이 어제 이미 완료). 공식 소스·YouTube RSS 9개 채널(+AI
Frontier Korea)·HN Algolia 위주로 스캔, old.reddit.com은 오늘도 WebFetch 전면 차단 지속
확인(HN으로 대체). 신규 위키 반영 3건: (1) Anthropic 첫 Chief Global Affairs Officer로 전
캘리포니아 대법관 Tino Cuéllar 영입(8/4) → [[2026-08-04-anthropic-tino-cuellar-global-affairs]]
신규, [[anthropic]] 갱신. (2) Claude Fable 5 생물학 안전장치 재조정, 오차단 약 85%↓(8/7)
→ [[2026-08-07-claude-fable-5-biology-safeguards-update]] 신규, [[anthropic]]·[[claude-code]]
갱신. (3) ChatGPT GPT-5.6 Luna가 Free·Go 기본모델로 전환 + Think 버튼 확대 예정(8/7) →
기존 [[2026-07-09-openai-gpt-5-6-launch]] 페이지에 후속 섹션으로 갱신(신규 페이지 생성 안 함).
AMD-Taalas 인수·Oracle OpenJDK AI코드 금지는 검토 후 각각 (1) 08-07에 이미 기록된 중복,
(2) 개발자 전용 이슈 판단으로 비수집. ★최우선·커뮤니티 화제·YouTube 픽 후보 다수(Cloudflare
Kitesurf, 조코딩 Shorts 2건, DeepSeek 벤치마크)가 어제 [[2026-08-07]] 뉴스레터와 중복 확인돼
오늘자에는 신규 항목이 없음을 명시하고 제외 — 뉴스레터 소재가 특히 빈약한 날. [[timeline]]
74→77건, [[index]] 갱신. raw/2026-08/에 anthropic-tino-cuellar-global-affairs·
claude-fable-5-biology-safeguards-update·openai-gpt-5-6-luna-default-free-think-button
3개 파일 신규 저장. 뉴스레터: newsletter/2026-08-08.md

## [2026-08-11] scan | 항목 6건, 반영 4건 (공백 소급 08-09~08-11)

공백 점검: 마지막 뉴스레터 08-08, 오늘(08-11) 기준 08-09~08-11 사흘 공백 확인 → 3일
이상이라 newsletter/2026-08-11.md 하나로 통합 소급 작성(`> 소급 스캔: 08-09 ~ 08-11`).
old.reddit.com은 이번에도 WebFetch 전면 차단 지속(공식 소스·WebSearch·HN Algolia·YouTube
RSS로 대체 확보). HN Algolia 날짜범위 검색 시 연도를 잘못 계산한 첫 시도(2025년대 epoch)는
0건으로 실패, 재계산 후 재조회로 08-09~08-11 상위 20건 확보. ★최우선(에이전트·자동화)은
이번에도 검증 가능한 신규 사례를 찾지 못해 0건으로 정직하게 보고(등록 YouTube 채널 다수
재확인, 신규 업로드는 뉴스요약·비즈니스 일반론 위주로 도구 특정 불가). 빅 뉴스 3건 반영:
(1) Google DeepMind CEO 교체 — Demis Hassabis가 CEO에서 물러나 DeepMind 의장 겸 Alphabet
수석과학자로 이동, CTO Koray Kavukcuoglu가 SVP로 승진해 Gemini 개발 총괄, 27년 재직한
Jeff Dean이 Sanjay Ghemawat·Oriol Vinyals·Quoc Le와 함께 퇴사해 "Discovery Loop" 창업
(Alphabet 투자자 참여), Alphabet 주가 4~5%↓ — 기존 [[2026-06-22-google-deepmind-talent-exodus]]·
[[2026-07-29-google-deepmind-alphafold-team-dismantled]] 흐름의 연장으로 판단해 신규
페이지 `2026-08-05-google-deepmind-leadership-shakeup` 생성(★08-11 머지 후정: origin/main의
동일 사실 페이지 [[2026-08-05-google-deepmind-hassabis-steps-down]]과 중복 확인돼 병합·삭제됨,
Discovery Loop 세부사항은 해당 페이지로 이전 — 아래 [2026-08-11] ingest 항목 참고),
[[google]] 허브 갱신.
(2) Anthropic, 미공개 연구용 Claude로 리만 가설 관련 하한을 41.6%→67.2%로 개선(증명
아님) — 2세션·3,100만 출력 토큰·서브에이전트 약 60개·Lean 형식검증, 외부 전문가 Brian
Conrey·Dan Goldston 검토 — [[2026-07-20-claude-fable-jacobian-conjecture]]와 같은 "AI
수학연구 발표" 패턴으로 판단해 신규 페이지 [[2026-08-10-claude-riemann-hypothesis-research]]
생성, [[anthropic]] 허브 갱신. (3) ChatGPT 무료 이용자 무제한 채팅·Think 버튼이 8/10
주간에 예정대로 실제 적용 완료 확인 — 신규 페이지 대신 기존 [[2026-07-09-openai-gpt-5-6-launch]]에
후속 확인 한 줄 추가(중복 방지). OpenAI Atlas 브라우저 실제 단종(8/9)은 이미
[[2026-07-09-openai-atlas-browser-shutdown]]에서 예정된 사실로 다뤄져 추가 반영 없음.
커뮤니티 2건(HN 116점 "Show HN: Ante" 오프라인 단일바이너리 코딩에이전트, HN 81점
"Tragedy of the Cognitive Commons")은 뉴스레터에만 기록. YouTube 픽 2건(조코딩 08-09·08-10
IT뉴스 롤업, AI Frontier Korea 08-10 쇼츠 "회사에 사람이 필요한 이유")은 위 빅뉴스와
내용이 겹쳐 위키 미반영, 뉴스레터 기록만. [[timeline]] 77→79건, [[index]]·[[anthropic]]·
[[google]] 허브 갱신. raw/2026-08/에 google-deepmind-leadership-shakeup·
claude-riemann-hypothesis-research 2개 파일 신규 저장. case-catalog는 이번 소급분에
★최우선 확보 사례가 없어 갱신 없음.

## [2026-08-07] scan | 항목 13건, 반영 13건 (공백 소급 08-05~08-07, iMac 세션)

> ⚠️ **병렬 세션 안내**: 위의 cron 세션 항목과 같은 날짜 범위(08-05~08-07)를 독립적으로
> 스캔한 별도 세션 기록. 두 세션의 결과물(use-case·update 페이지, 뉴스레터)은 08-11 머지
> 세션에서 통합·중복제거됐다 — 상세는 맨 아래 `[2026-08-11] ingest | 병합 세션` 항목 참고.

공백 3일(08-05~08-06~08-07) 확인 후 규칙에 따라 날짜별로 쪼개지 않고
newsletter/2026-08-07.md 하나로 통합 작성. ★최우선 3건 모두 원문 정독 후 신규
use-case 페이지 생성: (1) [[andrewjesson-claude-code-conversation-vs-memory-self-improvement]]
— 개인 연구자 블로그, Claude Code(Opus 5)의 세션 중 자가개선이 메모리 파일이 아니라
대화 기록에서 온다는 통제 실험(held-out 34%→48%, research·measured), (2)
[[uber-adr-claude-code-cursor-codex-security-monitoring]] — Uber, Claude Code·Cursor·
Codex 위험 명령 실시간 탐지·차단 오픈소스 ADR 프로덕션 배포+MLSys 2026 논문(ops·
measured), (3) [[capforge-claude-mcp-video-captioning]] — 로컬 자막 앱을 Claude MCP로
연결한 오픈소스 사례(content-creation·anecdotal). 빅뉴스 중 지속적 사실 4건을
updates/players 페이지로 신규 반영: [[2026-08-05-google-deepmind-hassabis-steps-down]]
(Hassabis CEO→회장, Jeff Dean 퇴사, Kavukcuoglu 승계) · [[2026-08-05-anthropic-custom-silicon-chip-team]]
(Claude 전용 자체 칩팀, 추론비용 50%↓ 목표 — OpenAI Jalapeño·Google Frozen v2와 함께
3사 완결) · [[2026-08-05-meta-muse-code-launch]](Meta 코딩 에이전트 진입, Claude Code·
Codex와 3파전) · [[2026-08-06-openai-gpt-5-6-sol-luna-free-tier-upgrade]](무료 사용자
Luna 무제한 텍스트 대화 전환, 사실오류 62~68%↓). Anthropic 7.5시간 장애(164번째)와
Cuéllar Chief Global Affairs Officer 영입(08-04, 직전 스캔 미포착분)은 별도 페이지
없이 [[anthropic]] 본문에 반영(★cron 세션이 08-08에 별도로 [[2026-08-04-anthropic-tino-cuellar-global-affairs]]
전용 페이지를 만들어 이 부분은 자동으로 갈음됨). 커뮤니티 2건(HN 294점 "40k 게임 실험 — 사람이 AI
에이전트 명령 위협의 1/3을 놓친다", r/AI_Agents "PC 자동화 과소평가" 글)은 뉴스레터에만
기록. YouTube 픽 2건(조코딩, Claude Code 제작자 성능팁·로컬 실행 1위 모델 쇼츠 — 둘
다 shorts 특성상 세부 확인 제한적이라 제목 수준으로만 소개). LinkedIn 3계정(조코딩
개인·페이지, 이승필 AX LABS) 도메인 한정 검색 확인했으나 08-05~08-07 날짜가 확인되는
글 없어 미반영(정상적 공백). [[timeline]] 68→75건, [[index]]·[[anthropic]]·[[google]]·
[[openai]]·[[claude-code]]·[[chatgpt]]·[[case-catalog]] 갱신. 산출물 메일 발송 시도.

## [2026-08-11] ingest | 병합 세션 — 08-05~08-07 중복 스캔 정리

두 독립 세션(로컬 cron 잡, iMac 세션)이 서로의 존재를 모른 채 같은 08-05~08-07 공백을
각자 소급 스캔해 `git merge origin/main`이 여러 파일에서 충돌했다. 이 항목은 그 머지
충돌을 해소하며 실제로 취한 중복제거 조치를 기록한다(사후 보정이므로 scan이 아닌
ingest로 분류).

- **Google DeepMind Hassabis 사임**: cron 세션이 만든 `2026-08-05-google-deepmind-leadership-shakeup`과
  iMac 세션이 만든 [[2026-08-05-google-deepmind-hassabis-steps-down]]이 동일 사건을
  다룸 → iMac 세션 페이지를 표준으로 채택(원문 시점이 정확한 08-05 소급 스캔에서 바로
  작성됐고 서술이 더 촘촘함), cron 세션 페이지의 고유 사실(Jeff Dean·Sanjay Ghemawat·
  Oriol Vinyals·Quoc Le "Discovery Loop" 공동창업, Alphabet 창업투자자 참여)을 표준
  페이지에 이전 후 `2026-08-05-google-deepmind-leadership-shakeup.md` 삭제. 두 파일을
  참조하던 [[index]]·[[timeline]]·[[google]]·이 log.md의 링크를 모두 표준 페이지로 수정.
- **GPT-5.6 Luna 무료 이용자 확대**: cron 세션은 기존 [[2026-07-09-openai-gpt-5-6-launch]]
  허브 페이지에 후속 섹션을 추가하는 방식을 택했고, iMac 세션은 별도 신규 페이지
  [[2026-08-06-openai-gpt-5-6-sol-luna-free-tier-upgrade]]를 만들었다 — 후자가 사실오류
  감소율(Luna 약 62%·Sol 약 68%) 등 더 구체적인 수치를 담고 있어 표준 페이지로 채택.
  허브 페이지의 후속 섹션은 전체 내용을 반복하지 않고 표준 페이지로 링크하는 요약으로
  축소(중복 서술 방지). cron 세션이 08-11에 추가했던 "8/10 주간 실사용 재확인" 후속
  확인 내용은 표준 페이지의 "후속 확인" 섹션으로 이전.
- **뉴스레터**: `newsletter/2026-08-07.md`의 add/add 충돌을 병합 — ★최우선 4건(Databricks·
  andrewjesson·Uber ADR·CapForge) 전체 유지, 빅 뉴스는 위 두 항목처럼 중복 사실을
  하나로 합쳐 재작성, 커뮤니티·YouTube 픽은 합집합, AX 시사점은 새로 종합.
- **index.md·timeline.md·wiki/players/anthropic.md·wiki/players/google.md·
  wiki/tools/claude-code.md**: 두 세션이 독립적으로 추가한 항목을 시간순으로 합치고
  위 두 건의 중복만 제거. use-case 카탈로그는 origin이 새로 만든 3건
  ([[andrewjesson-claude-code-conversation-vs-memory-self-improvement]]·
  [[uber-adr-claude-code-cursor-codex-security-monitoring]]·
  [[capforge-claude-mcp-video-captioning]])을 반영해 55건 → 59건.
- 이 항목 위의 "[2026-08-07] scan" 두 건(cron 세션·iMac 세션)은 둘 다 실제로 발생한
  독립 실행 기록이므로 삭제하지 않고 그대로 보존했다 — 각 세션이 실제로 무엇을
  찾았는지는 journal로서 가치가 있다. 위키 본문(update/player/use-case 페이지, index,
  timeline)만 이 항목에 따라 중복 없이 정리됐다.

## [2026-08-12] scan | 항목 8건, 반영 4건

공백 없음(직전 08-11 스캔 정상 완료 확인 후 바로 오늘치 진행). 공식 소스(Anthropic
News·OpenAI News·Google Blog)는 08-10~08-12 신규 게시물 없음(WebFetch 확인, OpenAI
News는 403). old.reddit r/ClaudeAI RSS는 curl(서술형 UA)로 정상 확보, r/AI_Agents는
429 반복 후 재시도 타임아웃으로 이번 회차는 미확보. HN Algolia front_page·search_by_date
로 화제 파악.

★최우선 1건 반영: HN에서 발견한 Jeremy Tian의 "Claude Code를 루프로 돌려 프로덕션
엔터프라이즈 AI 에이전트를 자동 개선할 수 있는가" 실험 — Claude Code·AutoResearch·
AutoAgent 3개 자동 최적화 도구를 동일 데이터셋·채점기준으로 실측 비교(정밀도
0.734→0.818, AutoAgent 0.877이 최고). → [[jeremytian-claude-code-loop-agent-optimization]]
(case-catalog 59건→60건)

빅 뉴스 3건 전부 페이지화: (1) Anthropic이 EU AI Act 투명성 규범 대응으로 Claude
생성 텍스트·이미지에 워터마크 도입(Claude Code·Cowork·Tag 전 표면) →
[[2026-08-11-anthropic-ai-content-watermarking]], (2) SpaceX·xAI·Cursor 합병 법인이
상시 작동 에이전트 팀 "Grok Bot" 출시 — Claude Cowork 정면 겨냥 →
[[2026-08-11-spacexai-grok-bot-launch]], (3) OpenAI 유일한 전담 윤리학자 Chloé Bakalar
퇴사(후임 미지정), Heidecke·Achiam에 이은 안전·윤리 라인 이탈 패턴 →
[[2026-08-11-openai-bakalar-ethics-departure]]. 세 건 모두 players/anthropic.md 또는
players/openai.md 동향 서술에도 교차 반영, claude-code.md 허브에 워터마크·Grok Bot
경쟁구도 갱신, timeline.md에 08-11 3줄 추가(83건→86건).

커뮤니티 화제 2건은 뉴스레터에만 기록(페이지화 기준 미달): r/ClaudeAI 워터마크 발표
반발 스레드(위 watermarking 페이지의 출처로 흡수), ClaudeCraft Arena(4개 프론티어
모델이 오픈소스 MMO에서 자가개선 에이전트로 실시간 대결, Twitch 생중계 — 재현 가능한
비즈니스 자동화 기법이라기보다 벤치마크성 데모로 판단해 use-case 승격 보류). YouTube
픽 2건(조코딩 주간 다이제스트·GPT-5.6 Luna 쇼츠) — 다른 채널(Ben AI 08-03, Liam
Ottley 08-07, 장피엠·지피터스 정체)은 최근성 기준 미달로 제외. LinkedIn(이승필 AX
LABS)은 스니펫만 확인되고 날짜 미확인이라 소스 규칙에 따라 뉴스레터에 넣지 않음.

newsletter/2026-08-12.md 신규 생성, 8개 항목 체크박스 전부 [x] 반영 완료 표시.
raw/2026-08/에 4개 원문 저장(anthropic-ai-content-watermarking·spacexai-grok-bot-launch·
jeremytian-claude-code-loop-agent-optimization·openai-bakalar-ethics-departure).

## [2026-08-13] scan | 항목 8건, 반영 2건

공백 없음(직전 08-12 스캔 정상 완료 확인 후 바로 오늘치 진행). 공식 소스(claude.com/blog·
news), 커뮤니티(old.reddit r/ClaudeAI·r/AI_Agents curl 우회, HN Algolia front_page), YouTube
9채널 RSS(조코딩·Dan Martell·Varun Mayya·kooky0ai·Jeff Su·Jangpm·Liam Ottley 최신일 확인) 순
확인.

★최우선 1건 반영: Anthropic claude.com/blog에서 발견한 자사 BD(영업)팀의 Claude Cowork
자체 사용 사례(dogfooding) — Skills(인박스·콜코칭·CRM동기화·리드아웃리치)+야간 예약
태스크+Salesforce/Gmail/Apollo/Gong 등 커넥터로 인바운드 응대·아웃바운드 프로스펙팅을
자동화, 인바운드 응답 하루 5시간→검토만·담당자 1인당 계정 100개+ 관리(자기 보고).
"발송 전 사람 검토" 게이트가 핵심 권한 설계. → [[anthropic-bd-team-claude-cowork-sales-automation]]
(case-catalog 60건→61건, "영업(sales)" 도메인 신설)

빅 뉴스 1건 페이지화: Claude in Chrome 사이드패널이 별도 선택 없이 정식 Claude Cowork
세션으로 통합(브라우저 대화가 전 기기로 이어짐, Skills·커넥터 그대로 동작) →
[[2026-08-12-claude-cowork-chrome-integration]]. claude-code.md 허브·timeline.md(83건→
84건, 08-12 1줄)·index.md 갱신. 나머지 빅뉴스 2건(xAI Grok 4.6 출시 — GPT-5.6 Sol과
벤치마크 대등, DeepSeek V4 Pro "0813" 체크포인트 HN 화제 — 4월 출시 모델의 갱신본이라
신규 출시 아님을 명시)은 Claude/Codex/ChatGPT/Gemini 4대 추적 도구 밖의 경쟁사 뉴스라
뉴스레터에만 기록하고 페이지화하지 않음.

커뮤니티 화제 2건은 뉴스레터에만 기록(재현 가능한 비즈니스 기법이 아니라 일화·논쟁형이라
use-case 승격 기준 미달): r/AI_Agents의 자율 크립토 에이전트 "Cairn"이 낯선 고객 요청으로
현실의 나무에 물을 준 일화(에이전트 자율성 화제), HN 638점 "AI가 소프트웨어 엔지니어링
중산층을 없앤다" 논쟁. YouTube 픽 2건(Jeff Su의 AI 메모리 3단계 설명 — Claude Cowork
메모리 파일까지 다룸, Varun Mayya의 Grok Bot 반응 쇼츠) — Jangpm·Liam Ottley 등은 최근성
또는 프로모션 성격으로 제외.

newsletter/2026-08-13.md 신규 생성, 8개 항목 체크박스 전부 [x] 반영 완료 표시.
raw/2026-08/에 2개 원문 저장(anthropic-bd-team-claude-cowork·claude-in-chrome-becomes-cowork).

## [2026-08-14] scan | 항목 8건, 반영 3건
공백 없음(전일 08-13 뉴스레터 확인). ★최우선 1건 use-case 페이지화: Reddit r/ClaudeAI, 20년차
엔지니어가 Claude Code heartbeat 루프 오케스트레이터 "Lloyd"로 고객 이메일 버그 트리아지·문서
점검·로그 모니터링·자체 티켓(SQLite) 관리를 자동화 → [[reddit-lloyd-claude-code-loop-orchestrator]]
신규(dev-automation·anecdotal, 600여 건 티켓 관리는 자기보고). 빅뉴스 3건 중 2건 페이지화:
DeepSeek 오픈소스 에이전트 하니스 "DeepSeek Harness v0.1"(MIT, Cordis 메타프레임워크, Claude
Code 정면 경쟁 + V4-Pro API 가격 인상, HN 1위 514점) → [[2026-08-13-deepseek-harness-launch]]
신규, Google Gemini 3.7 Flash 출시(코딩 특화, 3.5 Pro는 여전히 지연, HN 2위 492점) →
[[2026-08-13-google-gemini-3-7-flash-launch]] 신규. Cerebras×GPT-5.6 Sol 가속 파트너십은
페이지화 없이 뉴스레터 기록만(단발 인프라 파트너십 소개). 커뮤니티 2건(Opus 5 "rage-inducing"
사용성·Sonnet 5 가격 불만 폭주 751점, 워터마크 반발 지속 374점 — 기존
[[2026-08-11-anthropic-ai-content-watermarking]]에 이미 커뮤니티 반응 섹션 있어 신규 페이지
없이 교차링크만). YouTube 픽 2건(조코딩 AI 바이러스 생성 이슈, 조코딩 OpenAI 무료티어 확대).
[[timeline]] 84→86건, [[index]]·[[case-catalog]](61→62건) 갱신. r/AI_Agents RSS는 이번 스캔에서
빈 응답(0바이트, 재시도 생략)으로 커버 못함. 세션이 두 차례 연결 끊김으로 중단됐다 재개됨 —
매 섹션·페이지를 즉시 Write하는 방식으로 진행상황 유실 없이 완주. raw/2026-08/tmp/의 스캔 원본
임시파일(hn.json, r_claudeai.xml, r_chatgptcoding.xml, r_aiagents.xml, loop_orch.html,
yt_jocoding.xml, yt_kooky0ai.xml, yt_benai.xml)은 Bash 삭제 권한이 세션 중 차단되어 정리하지
못함 — 다음 세션에서 삭제 필요.

## [2026-08-15] scan | 항목 6건, 반영 4건
공백 없음(전일 08-14 뉴스레터 확인). 이 세션이 이전에 실행되었으나 커밋되지 않은 채 남아있어
08-16 세션에서 뒤늦게 로그·커밋 처리. ★최우선은 후보 없음(Liam Ottley "AI Agent Operating
System" 영상이 홍보 카피 수준이라 도구·업무·방법 확인 불가로 제외, 특이사항 없음으로 기록).
빅뉴스 4건 중 3건 페이지화: Zhipu AI GLM-5.3 출시(코딩 50%↑ 자평 + 의도치 않은 사이버
익스플로잇 능력 자체 인정, 취약점 2,436건 발견, 최초로 가중치 공개 지연, HN 1위 1015점) →
[[2026-08-14-zhipu-glm-5-3-launch]] 신규, OpenAI 연환산 매출 $40B+ 돌파와 같은 주 CRO
Denise Dresser 퇴사·Dali Rajic 지명 → [[2026-08-14-openai-revenue-40b-cro-departure]] 신규,
공백 소급 08-11 Google Gemini 앱 MAU 10억 돌파(ChatGPT와 소비자 AI 앱 빅2 구도) →
[[2026-08-11-google-gemini-1-billion-users]] 신규. ChatGPT Google Drive 연동·macOS Computer
History는 단발성 기능 소개로 판단해 페이지화 없이 뉴스레터 기록만. 커뮤니티 1건(Opus 5
"다루기 나쁘다" 불만 확산, HN 714점 — 기존 [[2026-08-14-claude-code-auto-mode-default]]
관련 언급과 교차링크). YouTube 픽 2건(조코딩 크로스세션 메시징, 조코딩 AI 구글번역).
[[timeline]]·[[index]] 갱신(GLM-5.3·OpenAI CRO·Gemini 1B 3건 추가). raw/2026-08/tmp/ 정리는
이번에도 Bash 삭제 차단으로 미완료 — 반복 이슈이므로 다음 세션에서 사용자에게 직접 문의 필요.

## [2026-08-16] scan | 항목 5건, 반영 4건
공백 없음(전일 08-15 뉴스레터 확인). ★최우선 2건 use-case 페이지화: (1) YouTube 일잘러
장피엠, Claude Code·Codex 겸용 Skill "slide-master"(오픈소스 MIT)로 회사 양식 맞춤 편집
가능 네이티브 PPTX 자동 생성 → [[jangpm-slide-master-claude-code-codex]] 신규
(content-creation·claimed, 3개월 자체 사용 후 공개, 정량 성과 미확인) — GitHub README까지
정독해 아키텍처 구체화. (2) 개인 블로그+HN 361점, Codex(GPT-5.5) `/goal` 장기 실행 루프+
서브에이전트+빔서치 탐색으로 GPU 커널(배치 QR 분해)을 232배 가속, GPU Mode 공개 리더보드
183명 중 12위 → [[codex-gpu-kernel-232x-autoresearch]] 신규(dev-automation·measured, 공개
리더보드 채점이라 제3자 검증 가능하나 개인 경쟁 참가 맥락임을 명시). 빅뉴스 2건 처리:
OpenAI GPT-5.6-Cyber+Daybreak Blue/Red 접근 티어(08-11 발표, 안전장치 완화로 익스플로잇
요청 완료율 1.5%→95.0%, CVE-2026-15903 등 발견)가 당시 스캔에서 누락된 것을 오늘 발견해
5일 늦게 소급 반영 → [[2026-08-11-openai-gpt-5-6-cyber-daybreak]] 신규. Qwen3.8-27B-FP8
(경량 양자화 배포용 변형, HN 1위 1344점)은 기존 [[2026-07-19-alibaba-qwen-3-8-preview]]에
"후속" 섹션으로 통합해 중복 페이지 생성을 피함. 커뮤니티 1건: r/ClaudeAI "Opus 5는
다운그레이드로 느껴진다" 스레드(100+ 댓글, 자동 TL;DR로 "4.6 회귀가 우세" 확인) — 이번 주
계속된 Opus 5 사용성 논쟁의 3일째 재확인이라 신규 페이지 없이 기존 [[2026-08-14-claude-code-auto-mode-default]]와
교차링크만. YouTube 픽은 신규 없음(주요 채널 최신 업로드가 어제까지 이미 반영됨, 장피엠
영상은 ★최우선에 배치) — 특이사항 없음으로 정직하게 기록. [[timeline]] 86→87건,
[[index]]·[[case-catalog]](62→64건) 갱신. sources.md에 신규 gotcha 기록: WebFetch 도구가
old.reddit.com을 도메인 자체로 차단함을 확인(향후 반드시 curl+permalink.rss로 우회), r/AI_Agents는
08-14에 이어 이번에도 재시도 2회 모두 0바이트 빈 응답으로 상습 미해결 소스로 재확인.
raw/2026-08/tmp/ 정리는 이번 세션에서도 시도하지 않음(반복 확인된 Bash 삭제 차단 이슈,
사용자 직접 처리 필요).

## [2026-08-17] scan | 항목 6건, 반영 2건

첫 스캔 서브에이전트가 연결 오류로 2회 중단(진행 중 저장 없이 재시작)되어 메인 세션이
직접 스캔·집필을 이어받아 완료. Stripe의 OpenRouter $7B+ 인수(신규 페이지)와 Anthropic
워터마크(8/11) 후속 커뮤니티 재조명(기존 페이지 갱신) 2건을 위키에 반영. ★최우선(에이전트
구축·자동화) 사례는 도구·방법이 구체적으로 확인되는 후보를 찾지 못해 이번엔 공란
("특이사항 없음") 처리 — r/AI_Agents의 에이전트 감사 사례는 사용 도구를 밝히지 않아
커뮤니티 화제로만 기록. "모델이 일부러 지식을 덜 외우게 한다"·"토큰 브로커" 두 HN 화제글은
단발성 트렌드 분석이라 페이지화하지 않고 뉴스레터에만 기록.

## [2026-08-17] ingest | 소스 백필(AI Frontier Korea·LinkedIn 3계정, 07-01~08-17) | 반영 0건

2026-08-07에 sources.md에 추가된 세 소스(YouTube AI Frontier Korea, LinkedIn 조코딩
개인+페이지, LinkedIn 이승필 AX LABS)가 실제 iMac 자동 스캔에는 오늘(CLAUDE.md LinkedIn
필수화 커밋)까지 반영되지 않아 07-01~08-17 구간을 별도 소급 확인. 기존 newsletter/*.md는
건드리지 않음. **AI Frontier Korea**: 공식 에피소드 아카이브(aifrontier.kr)에서 EP102(7/5)~
EP109(8/16) 전체 목록·날짜를 확보. EP107(8/2)까지는 이미 08-07·08-11 뉴스레터에서 다뤄짐을
확인. 신규 미반영분 EP108("실리콘 포토닉스와 AI 데이터센터 병목", 8/8)·EP109("추론의 시대:
Sionic 토큰 팩토리", 8/16) 2건을 원문 정독했으나 둘 다 연구자·스타트업 인터뷰형 심층 분석
(에이전트 자동화 사례도, 제품출시/인물영입/소송/전략변화급 지속적 사실도 아님)이라 위키
페이지화 기준 미달로 보류 — EP102~106(7/5~7/26)은 제목상 이미 알려진 모델 출시 종합·산업
관전평 위주라 정독 생략. **LinkedIn**: 계정당 도메인 한정 WebSearch 3회씩 시도. 조코딩은
이미 위키에 있는 [[jocoding-ax-series-pwc-samil]] 해커톤의 후속으로 보이는 게시물(멘토
모집·45명 채용 언급, 8/16 추정)을 발견했으나 본문 열람 불가·날짜 미확정이라 반영 보류,
그 외 결과는 전부 2023년 이전 구버전 콘텐츠. 이승필은 확인된 게시물(멀티에이전트 실패
패턴 등)이 전부 2026-03 이전이라 대상 기간 소득 없음 — LinkedIn 특성상 정상적인 결과.
신규/갱신 위키 페이지 없음.
단발성 트렌드 분석이라 페이지화하지 않고 뉴스레터에만 기록.

## [2026-08-17] sources | LinkedIn 폐기, AX LABS 블로그 RSS로 대체

사용자 지적("LinkedIn 정보는 최신 아니면 의미 없다")에 따라 실측 재검증: WebSearch의
`after:` 연산자 기간 필터 시도(무관한 결과만 반환, 실패), LinkedIn 날짜순 최신 피드
(`/recent-activity/`) 직접 접근 시도(HTTP 999 차단, 실패) — 두 시도 모두 실패해 LinkedIn
도메인 검색이 "최신순 확인 불가"임을 재확인. 조코딩·이승필 LinkedIn 계정 등록을 철회.
대안으로 https://theaxlabs.com/rss.xml 발견·검증(curl 직접 접근 가능, pubDate 정확,
50건 6/29~8/14 소급 확인) — 조코딩은 기존 YouTube 채널로 충분히 커버되고, 이승필은
이 블로그가 LinkedIn보다 명백히 우월한 대체 소스라 판단. sources.md·CLAUDE.md 갱신.
백필 검토 중 눈에 띈 후보 3건(PPT 다이어그램 스킬 8/14, PRD 인터뷰 방식 7/23, "회사로
만드는 스킬 42종" 7/18)은 페이지화하지 않고 사용자에게 별도 보고 — 잠언형 글이 다수라
전수 페이지화는 지양.

## [2026-08-17] lint | X 추천 계정 6건 신뢰성 검증 → 전부 기각, loop-engineering 계보 보강

사용자가 X에서 추천받은 6개 계정(@anatolikopadze·@kirillk_web3·@0xwhrrari·@cyrilxbt·
@beamnxw·@callanxai)의 소스 적합성 검토. X가 직접 조회를 막아(HTTP 402) 미러 사이트·
검색으로 계정 행태를 프로파일링. **전부 기각.** 근거: 동일한 "Andrew Ng 발언" 인용문이
계정마다 loops/graphs, 강연 길이 6·15·30·31·40분으로 서로 모순되게 유통되고("Worth more
than any $500 agentic course" 홍보 문구는 여러 계정에 토씨까지 동일), @0xMovez는 같은
계정이 loops·graphs 두 버전을 다 게시. 계정 성격도 @cyrilXBT는 95%가 크립토 수익화,
@kirillk_web3는 "AI Influencer × Web3", @0xwhrrari·@beamnxw·@callanxai는 검색 흔적 전무.

검증 과정에서 1차 출처를 확인해 wiki/concepts/loop-engineering.md에 "계보" 섹션 신설:
① Karpathy autoresearch(2026-03-06, GitHub API로 94,042 스타 실측) — 이 개념의 실물 원류,
기존 페이지는 6월 Osmani부터 시작해 3월 원류가 통째로 누락돼 있었음. ② Andrew Ng
"Three Key Loops"(The Batch 2026-06-26 원문 확인). ③ **The Batch 원문에 "100% of my tasks
are done by AI agents" 발언이 없음을 확인** — 오히려 human-in-the-loop 필요성을 강조 —
`> ⚠️ 상충:` 블록으로 명시. "graphs가 다음"은 Karpathy·Ng 둘 다 한 적 없는 해설자 프레이밍
(DeepLearning.AI 그래프 코스도 Ng이 아니라 Neo4j의 Andreas Kollegger 강의)임도 함께 기록.

## [2026-08-18] scan | 항목 6건, 반영 4건 (AX LABS 블로그 미포함 — 소스 등록 전 스캔 시작)

공백 없음(전일 08-17 뉴스레터 확인). ★최우선에서 신규 use-case 1건 확보: Reddit r/ClaudeAI,
연방 조달 공개데이터(USAspending API)+NAICS 코드 교차필터링+Claude in Chrome 브라우저
자동화+에이전트 자체 메일함을 결합한 건설 하도급 리드 발굴 파이프라인
([[federal-contract-leadgen-claude-browser-automation]], sales 도메인 2번째 케이스, 필터
통과 12건 중 계약 3건 성사·자기보고). 빅 뉴스에서 신규 페이지 2건: Anthropic의 Decart $6B
인수 협상(8/13 Bloomberg 보도, 사상 최대 인수 시도 — 지난 며칠간 놓쳤던 소식을 오늘 Reddit
반응 스레드로 재발견해 소급 반영, [[2026-08-13-anthropic-decart-acquisition-talks]])과
Google의 Gemini→Android 기본 음성비서 전면 교체 확정(9/4 시작,
[[2026-08-06-google-gemini-replaces-assistant-android]]). Claude 사용량 미터 표시 오류로
인한 "한도 폐지" 오해는 서버 쪽 일시 장애로 확인돼 페이지화하지 않고 뉴스레터에만 기록.
커뮤니티 화제 2건 — "Claude is Losing Me" 이탈 조짐 글은 이번 주 계속된 Opus 5/Auto mode
품질 논쟁의 연장으로 기존 [[2026-08-07-claude-code-auto-mode-default]]와 교차링크만(신규
페이지 없음), "5개월간 클라이언트 슬라이드 작업 90시간 절약" 글은 PowerPoint 내장 AI(Oria)를
쓴 사례라 Claude Code/Codex 중심 스키마에 맞지 않아 뉴스레터에만 기록. YouTube 픽은 신규
없음(주요 채널 최신 업로드가 이미 반영됐거나 무관) — 특이사항 없음으로 정직하게 기록.
[[timeline]] 89→92건, [[index]]·[[case-catalog]](64→65건)·wiki/players/anthropic·
wiki/players/google 갱신. old.reddit 개별 스레드 fetch가 이번에도 빈 응답(0바이트)을 자주
반환(15~25초 재시도로 회피) — 신규 gotcha는 아니고 기존 패턴 재확인 수준. raw/2026-08/tmp/
정리는 이번에도 하지 않음(반복 확인된 이슈, 사용자 직접 처리 필요).

## [2026-08-17] sources | 구루·실무자 1차 채널 6종 + HN 인물쿼리·GitHub 감시 추가

X 인용 왜곡 사건(같은 날 lint 참조)의 후속 조치. 교훈을 "구루가 직접 발행하는 곳으로 가라"로
정리하고 후보 7곳의 RSS 응답·최신 게시일을 전부 실측 검증해 등록: Simon Willison(08-17, 거의
매일)·Latent Space(08-17, 주간)·Lilian Weng(07-04)·Karpathy 블로그(04-30)·Addy Osmani(07-20)·
The Batch(RSS 없어 페이지 fetch). steipete.me는 최신 글이 2026-02로 정체돼 제외.
**주의사항 기록**: karpathy.bearblog.dev는 피드의 `<updated>`가 빌드 시각이라 최신 글 날짜와
다름 — 처음 08-18로 오독했다가 개별 entry 확인으로 04-30임을 정정.

X 차단(402) 우회책으로 **HN Algolia 인물 쿼리 + points>50 임계값**을 검증·채택. 임계값 없이는
이름만 스친 1~4점 Show HN이 대량 유입되나, 임계값을 붙이자 "I've joined Anthropic"(1,431점,
05-19, 링크가 karpathy X 계정) · "Karpathy's Pelican"(618점, 08-02) · "LearnVector — Andrew Ng's
AI company"(269점, 07-29)가 즉시 잡힘. GitHub API로 karpathy 저장소 감시도 추가(autoresearch
사례처럼 저장소 자체가 사건인 경우 대응).

CLAUDE.md에 **인물 발언 인용 규칙** 신설: 2차 전파를 출처로 쓰지 말고 1차 채널에서 대조,
대조 실패 시 항목을 버릴 것.

**미해결 공백 발견**: 위 검증 중 **Karpathy의 Anthropic 합류(2026-05-19, HN 1,431점)가 위키에
전혀 없음**을 확인. CLAUDE.md 기준상 "인물 영입"에 해당하는 지속적 사실이라 페이지화 대상이나,
X 원문을 읽을 수 없어(402) HN 제목만으로 페이지를 만들지 않고 보류 — 사용자 보고 후 별도 처리.

## [2026-08-18] ingest | Karpathy Anthropic 합류(05-19) 소급 반영 + 스캔 전 git pull 규칙 신설

전날 구루 소스 검증 중 발견한 공백을 메움. **Karpathy의 Anthropic 합류(2026-05-19)**가 3개월간
위키에 없었다 — CLAUDE.md 기준 "인물 영입"에 해당하는 지속적 사실인데 누락. 원문이 X라
직접 조회 불가(402)여서 TechCrunch·CNBC·Axios 3개 매체 + HN 스레드(1,431점)로 교차 검증해
[[2026-05-19-karpathy-joins-anthropic]] 생성. 확인된 사실: 프리트레이닝 팀 합류, Nick Joseph
보고, "Claude로 프리트레이닝 연구를 가속하는" 팀 신설이 역할, Eureka Labs는 일단 접어둠
(본인 발언 "때가 되면 교육 일을 다시 이어갈 계획"). timeline에 2026-05 섹션 신설(92→93건),
players/anthropic·index·loop-engineering 교차링크 추가 — 3월 autoresearch가 개인 실험이 아니라
프론티어 랩 연구 방향이 된 맥락으로 연결.

**구조적 수정**: 사용자 질문("iMac에도 반영됐나?")을 계기로 확인한 결과 스케줄 작업 SKILL.md와
CLAUDE.md 어디에도 **스캔 전 git pull 지시가 없었다.** iMac은 push가 거부될 때만 반응적으로
merge하므로, 규칙 변경이 실제 스캔에 반영되기까지 최대 하루가 밀린다(08-07 LinkedIn 누락의
진짜 구조적 원인). CLAUDE.md 워크플로우에 **0-A단계 `git pull --rebase origin main`**을 신설.
단 이 수정 자체도 iMac이 한 번 pull해야 효력이 생기므로 사용자에게 수동 pull 1회를 요청함.

## [2026-08-19] scan | 항목 9건, 반영 6건

공백 없음(전일 08-18 확인). ★최우선 2건 모두 AX LABS 블로그 신규 글에서 발굴: (1)
Claude Code용 diagram-design 스킬 — 회사 URL로 브랜드 온보딩 후 다이어그램 27종을
자연어로 자동 생성([[theaxlabs-claude-code-diagram-design-skill]], content-creation
도메인, 정량 효과 없어 evidence=claimed로 정직 기록), (2) Harness-R1 논문을 Claude
Code 주간 루틴으로 번역한 글 — 모델 재학습 없이 실패로그 기반 하네스 자가개선
([[theaxlabs-harness-r1-failure-driven-editing]], dev-automation 도메인, 논문 수치
44.3%→53.6%는 참고용이며 Claude Code 적용판 실측은 미확인이라고 명시). 빅 뉴스는
신규 페이지 1건 — OpenAI "ChatGPT for Teens" 출시(13~17세 안전계정 자동 전환,
[[2026-08-18-openai-chatgpt-for-teens]]) — 외에 기존 페이지 갱신 2건: Claude Cowork
전 유료 플랜 모바일 롤아웃 완료(기존 [[2026-08-12-claude-cowork-chrome-integration]]에
후속 섹션 추가) · Anthropic 다중모델 성능저하 장애(8/5 장애에 이은 반복 패턴,
wiki/players/anthropic.md에 기록, 별도 페이지는 만들지 않음 — 단발성 판단). Cursor
"Origin"(GitHub 대안) 출시는 HN에서 포착했으나 페이지화 없이 뉴스레터에만 기록.
커뮤니티 화제 2건은 모두 뉴스레터 전용(페이지화 안 함) — MCP vs 파일시스템 벤치마크는
비교 제품(Locality) 개발자의 벤더 자기보고라 신뢰도 유보, Claude 장애 반응 스레드는
안정성 이슈 기록에 흡수. YouTube 픽은 조코딩 'AX 인재전쟁' 후속 인터뷰(카카오페이증권·
무신사, Codex 활용 언급) — 기존 [[jocoding-ax-series-pwc-samil]]에 후속 섹션으로
교차링크(1~2분 홍보 클립이라 구체 수치 없어 ★최우선 승격은 보류). 장피엠 slide-master
영상(8/15 업로드)은 이미 8/16~17경 반영 완료된 것으로 확인해 중복 생성 방지.
[[timeline]] 92→95건, [[index]]·[[case-catalog]](65→67건)·wiki/players/anthropic·
wiki/players/openai 갱신. r/singularity·r/ChatGPTCoding RSS는 이번에도 0바이트 빈
응답(기존 패턴), r/AI_Agents·r/ClaudeAI는 정상 확보. raw/2026-08/tmp/ 임시 파일 정리는
이번에도 하지 않음(반복 확인된 이슈, 사용자 직접 처리 필요).

## [2026-08-19] sources | 결과물 용어 규칙 — "★최우선" 폐기, "업무 적용 Case"로 통일

사용자 지정: 결과물(뉴스레터·위키·메일)에 "★최우선" 표현을 쓰지 말고 "업무 적용 Case",
"Use case", "사례" 같은 내용 중심 용어를 쓸 것. 수집 우선순위는 내부 판단 기준이므로 지면에
드러낼 이유가 없다.

적용 범위 — 두 갈래로 처리했다.
① **앞으로**: CLAUDE.md 뉴스레터 템플릿 섹션명을 `## 에이전트 구축 · 업무 자동화 ★최우선`
   → `## 업무 적용 Case`로 변경하고, 워크플로우·편집기준·토큰규칙의 지시문에서도 해당 표현을
   모두 교체. 용어 규칙 자체를 CLAUDE.md에 명문화. sources.md도 동일 정리.
② **과거분**: 기존 뉴스레터 73건은 원본을 고치지 않고(기록 보존) **렌더링 시점에 치환**하도록
   3개 렌더러의 `prettify`를 수정 — web/lib/issue-parser.ts, scripts/lib/md-html.mjs,
   scripts/package-scan.mjs. 스캔 에이전트가 섹션 제목뿐 아니라 **본문 문장에도** 이 표현을
   써왔다는 걸 브라우저 실측으로 발견해(08-19자 헤드라인·AX 시사점 문장) 제목만 제거하던
   기존 처리로는 부족했음을 확인.

파서 보강: KIND_RULES에 `적용 case|use case` 패턴을 추가해 신규 섹션명도 agent 종류로
분류되게 하고(구 표기도 계속 인식), 신·구 섹션명 테스트 2건 추가(총 16건 통과).
검증: 웹 홈·메일 HTML 첨부 모두 ★ 노출 0건, "업무 적용 Case"로 정상 표시 확인.

## [2026-08-20] scan | 항목 7건, 반영 7건

업무 적용 Case 1(AX LABS "AI 네이티브 운영체제" 6단계 — 모델 계층화 라우팅으로 비용
80%+↓ 주장), 빅 뉴스 3(Anthropic Compliance API Cowork·Claude Code 확장 / Meta AI Mac
데스크톱 앱 / xAI Grok 4.6), 커뮤니티 화제 2(Anthropic 미공개 기능 "Project Parka"
리버스엔지니어링 화제 / DeepSeek V4 Flash 스킬 벤치마크 주장에 대한 방법론 회의론),
YouTube 픽 1(조코딩 'AX 인재전쟁' 채널톡 Codex 인터뷰 — 기존 [[jocoding-ax-series-pwc-samil]]
후속 업데이트로 반영). 신규 use-case 페이지 1건·updates 페이지 3건 생성, 기존
jocoding-ax-series-pwc-samil·claude-code 허브·timeline·index·case-catalog 갱신.
r/AI_Agents·r/singularity·r/ChatGPTCoding·r/OpenAI·r/LocalLLaMA RSS는 이번 스캔 내내
빈 응답(0바이트)만 반환해 접근 실패, r/ClaudeAI만 두 번째 재시도에서 확보. Karpathy
개인 블로그 RSS도 403 Forbidden으로 접근 실패(반복 관찰 시 sources.md 갱신 검토 필요).
HN 인물쿼리(karpathy·"Andrew Ng", points>50)는 신규 히트 없음(기존 항목만 재확인).

## [2026-08-21] scan | 항목 7건, 반영 7건

업무 적용 Case 3(Asana×Codex 병렬 에이전트로 "5년→2주" 테스트 마이그레이션 — 비용
$6M→$12,000 벤더 주장, HN 회의론 병기 / Latent Space "/wayfinder" Claude Code 기획
스킬 — Matt Pocock, 맵·티켓·세션 구조 / AX LABS의 Slack CPO "에이전트를 팀원으로 쓰는
5원칙"), 빅 뉴스 3(Salesforce Slack Code 출시 — Claude Code·Devin·v0·Copilot·ChatGPT
공동 지원 / Pew·CNBC 여론조사 AI 우려 37%→52%·Dario Amodei "신뢰의 위기" 인정 /
Google "Ask Gemini in Chat" 8/26 출시), 커뮤니티 화제 1(Slack Code 발표에 대한 HN
회의론 — "마케팅 카피만 요란", "생태계 피로"). YouTube 픽은 신규 실질 콘텐츠를 확인하지
못해 "특이사항 없음"으로 남김(장피엠 slide-master 08-15자 영상은 기존 반영분과 중복,
조코딩 쇼츠는 설명란에 실질 내용 없어 보류).

신규 use-case 페이지 3건([[asana-openai-codex-enzyme-migration]] ·
[[latent-space-wayfinder-claude-code-skill]] ·
[[theaxlabs-slack-cpo-ai-teammate-principles]]), 신규 updates 페이지 2건
([[2026-08-20-salesforce-slack-code-launch]] ·
[[2026-08-19-google-gemini-chat-workspace-intelligence]]) 생성. 기존
wiki/players/anthropic·wiki/tools/claude-code·wiki/tools/gemini·timeline(102→104건)·
index·case-catalog(68→71건) 갱신. Pew 여론조사 건은 "지속적 사실"이 아닌 단발성
스냅샷으로 판단해 별도 페이지 대신 anthropic.md 본문에만 기록.

특이사항: **old.reddit.com RSS가 이번엔 429/0바이트가 아니라 로그인 페이지로 302
리다이렉트** — r/ClaudeAI·r/AI_Agents·r/ChatGPTCoding 전부 동일 증상, 봇 차단이
강화된 것으로 추정(다음 스캔에서 재확인 필요). 커뮤니티 화제는 대신 HN Algolia
`search_by_date`(query=codex/claude+agent, points 임계값 포함)로 대체 확보 — Slack
Code·Asana 스레드 모두 이 경로로 발견. Karpathy 개인 블로그 RSS는 08-20에 이어 이번에도
403(2회 연속, 접근 불가 소스로 간주 검토). HN 인물쿼리(karpathy·"Andrew Ng", points>50)는
신규 히트 없음. Bash 샌드박스에서 `python3` 인라인 스크립트 실행이 거부돼 JSON 파싱은
grep/tr로 우회. sources.md RSS 캐시에 08-21 항목 추가.

## [2026-08-22] scan | 항목 8건, 반영 8건

업무 적용 Case 2(개인 블로그, Codex+Hermes 에이전트 프레임워크로 셀프호스팅 샌드박스
환경에서 프롬프트 1회로 SDLC 전 과정 무인 완주 — 승인 게이트 대신 네트워크 격리로
리스크 통제 / GitHub, Claude Code Skill NoBuzz가 Gemini CLI로 응답을 재통과시켜
장황한 톤을 고치는 크로스 모델 파이프라인), 빅 뉴스 3(Anthropic 무료 학습 허브
"Claude Academy" 오픈 / Claude Opus 4.8·Mythos Preview 단백질 결합체 설계 자동화
업계 대비 2배 적중률, 독립 검증 / Claude Mythos 5 사이버보안 방어역량 오픈소스·정부
확장+Defender Advantage Fund $35M), 커뮤니티 화제 3(의사코드 기반 AI 코딩 에디터
Huzzah HN 358점 / "Codex를 일주일 더 써보니" Claude 비교 후기 HN 59점 / Codex AWS
Bedrock 연동 버그로 요금 10배 청구 사고 HN 145점). YouTube 픽은 등록 채널 9곳(AI
Edge 제외) 전수 확인 결과 에이전트 구축·자동화 관련 신규 실질 콘텐츠 없어 "특이사항
없음"으로 남김.

신규 use-case 페이지 2건([[jakesaunders-self-hosted-agentic-software-factory]] ·
[[nobuzz-claude-code-gemini-debuzz-skill]]), 신규 updates 페이지 3건
([[2026-08-20-claude-academy-launch]] · [[2026-08-18-claude-science-protein-design-research]] ·
[[2026-08-21-claude-security-defender-advantage-fund]]) 생성. 기존 wiki/players/anthropic·
timeline(104→107건)·index·case-catalog(71→73건) 갱신. 08-18 단백질 설계 연구는 공식
발표일 기준 소급 반영(WebSearch로 08-22 스캔 중 확인, 이전 스캔에서 누락됐던 항목).

특이사항: **old.reddit.com RSS가 3일 연속(08-20·08-21·08-22) 6개 서브레딧 전부 HTTP
302 로그인 리다이렉트** — 상시 봇 차단으로 간주, 커뮤니티 수집은 HN Algolia
front_page(48시간 컷오프) 방식으로 완전 대체. Karpathy 개인 블로그 RSS도 3회 연속
403(접근 불가 소스로 확정 간주 검토 시점). HN 인물쿼리(karpathy·"Andrew Ng",
points>50)는 신규 히트 없음. Anthropic 공식 뉴스룸(anthropic.com/news)이
claude.com/blog 발표(Claude Academy·Claude Security)를 즉시 반영하지 않아 WebSearch로
보완 확인. sources.md RSS 캐시에 08-22 항목 추가.

## [2026-08-23] scan | 항목 3건, 반영 3건

비교적 조용한 날 — 공식 소스(Anthropic·OpenAI·Google) 신규 발표 없음, 구루 1차 채널·
AX LABS 블로그·YouTube 9채널 전수 확인했으나 "업무 적용 Case" 기준(도구·업무·방법·
성과 구체 확인)을 충족하는 신규 자동화 사례 없어 해당 섹션은 "특이사항 없음"으로
남김. 빅 뉴스 2건(Linus Torvalds가 Linux 커널 디버깅에 AI 도움 받았다고 커밋 메시지에
직접 명시 / Anthropic IPO "8월 말 신청 가능성" 보도, S-1에 AI 반발 여론 리스크 요인
명시 예정), 커뮤니티 화제 1건(Claude Code effort 표시치 논란, HN 126댓글 + Anthropic
직원 해명) 반영.

신규 페이지 없음 — 모두 단발성 일화·보도 단계라 CLAUDE.md 기준상 페이지화 대상
아님. 기존 wiki/players/anthropic.md IPO 서사에 08-21(보도) 항목 추가, timeline.md에
같은 항목 1줄 링크. index.md·case-catalog.md는 신규 use-case 없어 갱신 불필요.
sources.md RSS 캐시에 08-23 항목 추가(old.reddit 4일 연속 302 차단·Karpathy 블로그
4일 연속 403 모두 최종 확정 수준).

## [2026-08-24] scan | 항목 4건, 반영 4건
공백 없음(전날 08-23 스캔 정상 실행 확인 후 바로 오늘치 진행). 업무 적용 Case는 구루
1차 채널·AX LABS·YouTube 9채널·HN 키워드 검색을 전부 훑었으나 도구/업무/방법/성과
4요소를 구체적으로 확인할 수 있는 신규 자동화 사례가 없어 정직하게 공란 처리. 빅뉴스
2건: (1) FT 보도(Simon Willison 정리) — Anthropic 연환산 매출 5월 $47B→7월 $65B 급성장,
그러나 Ramp AI Index 결제데이터 기준 최상위 모델 Fable 5의 실제 지출 비중은 8.0%로
구형 Opus 4.8(28.0%)보다 낮음 → [[2026-08-23-anthropic-revenue-fable-adoption-struggle]]
신규(anthropic.md·timeline 갱신), (2) OpenAI GPT-5.6 Sol API 가격 20%+(출력 최대 33%)
3개월 한시 인하 — 프로모션성 단발 뉴스로 판단해 페이지화 없이 뉴스레터에만 기록.
커뮤니티 1건(Show HN "OzBrain" — Claude·ChatGPT·Cursor·Gemini 공유 지식저장소, HN
85점, v0.1.0 실사용 검증 없어 페이지화 보류). YouTube 1건(조코딩 IT뉴스 총정리 — 다룬
소식 대부분 이미 위키 반영분이라 신규 정보 아님, 픽으로만 기록). old.reddit.com RSS는
이번에도(5일 연속) HTTP 302 로그인 리다이렉트로 접근 불가 확인 — 지시에 따라 이번
스캔에서 재시도 생략, HN Algolia로 커뮤니티 화제 대체 수집. Karpathy 개인 블로그
(bearblog.dev)도 이번에도 403 — 지시에 따라 재시도 생략. AI Edge(AIEdgeHQ)는 여전히
미해결이라 스캔 제외. YouTube RSS 캐시 9채널 재확인, 신규 미해결 없음. HN 인물쿼리
(karpathy·"Andrew Ng", points>50)는 신규 히트 없음. [[timeline]] 107→108건,
[[index]]·[[anthropic]] 허브 갱신. newsletter/2026-08-24.md 신규 생성.

## [2026-08-25] scan | 항목 5건, 반영 5건

업무 적용 Case 1건: GitHub l3a0/claude-plugins의 Claude Code Skill이 Chrome 제어+
로컬 Kindle 앱 SQLite 대조+Apple Vision OCR 3단계 파이프라인으로 Kindle 노트북 내보내기
제한 하이라이트를 복구 — 저자가 책 4권 2,432개 추출 중 차단됐던 815개(잘림 454+숨김 361)
전량 복구라는 실측 수치를 README에 공개해 evidence를 measured로 표기, use-case 신규
생성([[l3a0-claude-code-kindle-highlights-recovery]], case-catalog 73→74건). 빅뉴스 2건:
(1) TechCrunch 보도 — OpenAI ChatGPT Work 실제 채택률 공개(내부 직원 98% vs 외부 조직
17% vs 개인 1% 미만, 4일 캐주얼 사용 8,000만 토큰·$65 비용 사례) — 신규 페이지 대신
기존 [[openai-chatgpt-work-launch]]에 08-24 갱신 인용 블록 추가(주장 중심이던 페이지에
실측 채택 데이터 보강), (2) Anthropic 8/24 다중 모델 서비스 장애(04:50~07:36 UTC, 2시간
46분) — 8/5·8/18에 이은 이번 달 세 번째 반복 장애로, 기존 패턴대로 신규 페이지 대신
[[anthropic]] 플레이어 페이지·[[timeline]]에 항목만 추가. 커뮤니티 1건("Agent Is Not the
Model" — 모델/추론서비스/하네스/에이전트시스템 4계층 문제진단 프레임워크, HN 63점,
수치 없는 개념글이라 페이지화하지 않고 뉴스레터에만 기록). YouTube 1건(Ben AI —
Composio로 앱을 Claude에 원클릭 연결하는 튜토리얼, 08-24 업로드, 설명이 얕아 요약
수준으로만 기록). old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는 지시에 따라
이번에도 재시도 생략(각각 5일 연속 확정 상태 유지). AI Edge(AIEdgeHQ)도 미해결 상태라
스캔 제외. YouTube RSS 캐시 9채널 재확인, Ben AI 외 신규 미해결 없음. HN 인물쿼리
(karpathy·"Andrew Ng", points>50)는 신규 히트 없음. AX LABS 블로그는 08-20에서 5일째
정체. 이번 스캔에서 Bash 도구가 `date +%s` 산술 치환 포함 curl과 `-o` 파일 출력 옵션
포함 curl, `for` 루프 문법을 권한 거부로 차단 — 하드코딩 epoch 값과 stdout 직접 파싱,
개별 curl 호출로 우회. [[timeline]] 108→109건, [[index]]·[[case-catalog]] 갱신.
newsletter/2026-08-25.md 신규 생성.

## [2026-08-26] scan | 항목 7건, 반영 7건

업무 적용 Case 1건: 개인 블로그(Fabien Sanglard, HN 413점)의 `agent.md` 패턴 —
Claude Code(VS Code 플러그인)·Antigravity에서 세션마다 스타일 가이드 파일을 재주입하는
CLAUDE.md/AGENTS.md 컨벤션의 개인 워크플로우 재정리, use-case 신규 생성
([[fabiensanglard-agent-md-persistent-style-guide]], evidence: anecdotal — 정량 수치
없음, case-catalog 74→75건). 빅뉴스 4건: (1) FT "Anthropic 최상위 모델 채택 부진" 보도가
HN 805점으로 재화제, Fable 5 가격이 GPT-5.6 Sol 2배인데 기업지출은 11%뿐·OpenAI 8/21
Sol 20%+ 가격인하·Anthropic 평균단가 7월 중순 대비 25%↓ 등 세부 수치 추가 확인 —
기존 [[2026-08-23-anthropic-revenue-fable-adoption-struggle]]에 08-26 갱신 블록 추가
(신규 페이지 대신 기존 페이지 보강, Sonnet 5 가격인상 철회(8/10) 배경도 교차 확인),
(2) MIT·Laude Institute, 상시 가동형 오픈소스 에이전트 하네스 "Headlong" 공개 — 자기
서비스 중단·시간당 비용·프라이버시 격리 부재 등 실패 사례를 투명 공개, wiki/updates
신규 생성([[2026-08-24-headlong-persistent-agent-microharness]], [[loop-engineering]]에
관련 사례로 교차링크), (3) Google "Ask Gemini in Chat" 8/19 예고대로 오늘 순차 출시 시작 —
기존 [[2026-08-19-google-gemini-chat-workspace-intelligence]]에 08-26 갱신 한 줄 추가,
(4) OpenAI ChatGPT Plus의 Codex·Work 5시간 한도 복원 — 정책성 일회 뉴스로 판단해
페이지화 없이 뉴스레터에만 기록. 커뮤니티 2건: "일주일간 Codex를 Claude보다 많이 써봤다"
비교 후기(HN 242점, 정량 벤치마크 없는 개인 주관 비교라 페이지화 보류), Codex의 AWS
Bedrock 캐싱 미지원으로 나흘간 캐시라이트 비용 $1,182(전체 지출 85%) 급증한 사례(HN
148점, GitHub 이슈 미해결) — 둘 다 뉴스레터에만 기록. YouTube는 등록 9채널 재확인 결과
관련성 있는 신규 업로드 없어 "특이사항 없음"으로 기록. HN 인물쿼리(karpathy·"Andrew Ng",
points>50)·Karpathy GitHub 저장소(nanochat 등 커밋 갱신만 확인, 신규 저장소 없음)는
신규 히트 없음. old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는 지시에 따라
이번에도 재시도 생략(각각 6일 연속 확정 상태 유지). AX LABS 블로그는 08-25 Headlong
글로 6일 만에 갱신 확인(08-20 정체 해소). [[timeline]] 109→111건, [[index]]·
[[case-catalog]] 갱신. newsletter/2026-08-26.md 신규 생성.

## [2026-08-27] scan | 항목 6건, 반영 6건

업무 적용 Case 1건: Ben AI가 Claude Cowork 공식 기능 "Record a Skill"(2026-07-21 출시,
화면 녹화→스킬 자동변환) 활용 베스트프랙티스를 공개(08-26 업로드) — 신규 use-case
[[ben-ai-claude-record-a-skill-best-practices]] 생성, 같은 크리에이터의 07-18 프롬프트
기반 방법론 [[ben-ai-claude-skills-building-methodology]] 및 커뮤니티發 원류
[[record-replay-mcp-skill-recorder]]와 교차링크. 빅 뉴스 3건: (1) Anthropic이 IPO
투자자에게 TAM $30조+ 제시 예정(WSJ, SpaceX $28.5조 상회, 최대 $100B 조달·$2조
밸류에이션 목표, 2분기 매출 $11.6B) — 신규 페이지 대신 기존
[[2026-08-23-anthropic-revenue-fable-adoption-struggle]]에 08-27 갱신 블록 추가,
(2) Claude 메모리가 Chat·Cowork 전체로 통합(Settings Memory 탭 신설, 민감주제 기본
차단) — 신규 wiki/updates [[2026-08-25-anthropic-claude-memory-unification]] 생성,
(3) Anthropic이 보안업체 파업 우려로 SF 직원 재택 지시했으나 실제 파업 승인은 없었던
해프닝 — 정책성 일회 뉴스로 판단해 별도 페이지 없이 [[anthropic]] 본문 문단으로만
반영. 커뮤니티 1건: "예전 Claude Code가 그립다"는 개발자 블로그 비판글(HN 36점,
Claude Code의 기능 비대화·`/doctor` 커맨드 확장 비판) — 페이지화 없이 뉴스레터에만
기록. YouTube는 등록 9채널 재확인 결과 조코딩의 Codex 성능 활용 쇼츠(설명란 정보
부족으로 참고용 기록)만 추가 확보, 나머지 8채널은 관련성 낮거나 기존 확인분에서
정체. HN 인물쿼리(karpathy·"Andrew Ng", points>50)는 신규 히트 없음. Latent Space의
"Lovable CTO" 인터뷰(08-26)는 재현 가능한 기법이 아닌 전략 인터뷰라 페이지화 보류.
YouTube 자동생성 자막 API가 서명 토큰에 묶여 curl 재사용 불가함을 확인(sources.md
RSS 캐시에 기록) — 이후 스캔은 `shortDescription` HTML 필드 + 챕터 타임스탬프로
대체. [[wiki/players/anthropic]]·[[timeline]] 111→113건·[[index]]·[[case-catalog]]
갱신. raw/2026-08/에 원본 3건 저장(anthropic-claude-memory-unification·
ben-ai-record-a-skill-best-practices·anthropic-30-trillion-ipo-tam-pitch).
newsletter/2026-08-27.md 신규 생성.

## [2026-08-28] scan | 항목 6건, 반영 6건

빅 뉴스 3건 페이지화: Nvidia의 Hugging Face $12.9B 인수 확정(2026-01 최초 제안의
약 2배, 오픈소스 AI 허브 사상 최대 M&A) → [[2026-08-27-nvidia-huggingface-acquisition]].
OpenAI 주도 AI 사이버 방어 공동서한에 Anthropic·Google·Microsoft·AWS 등 116개+
기업·기관 서명(경쟁 3사 공동 서명은 7/28 "Pacing the Frontier"에 이은 두 번째 패턴)
→ [[2026-08-27-ai-industry-cyber-defense-letter]]. Anthropic의 Model Hardware
Standard(MHS) 연구 프리뷰(AI 에이전트가 실험실·제조 장비를 직접 조작하는 첫 물리
세계 확장 표준, MCP 기반, AWS·Automata·Tecan·Universal Robots 동시 지원 발표)
→ [[2026-08-27-anthropic-model-hardware-standard]]. 같은 날 과학자 1만 명 무료·
할인 지원(08-25 웰빙 연구 $5M 그랜트 포함)은 기존 [[2026-06-30-claude-science]]
페이지에 08-27 후속 절로 갱신(신규 페이지 대신 기존 페이지 갱신 원칙 적용).
업무 적용 Case 1건: AX LABS "컴퍼니 브레인" 프롬프트 6종(도구 비종속 second-brain
방법론, 정량 성과 없음·claimed) → [[theaxlabs-company-brain-prompt-guide]] 신규
use-case, case-catalog 77건으로 갱신. 커뮤니티 1건: "Tell HN: Man, AI is killing
my brain"(46점, Claude Code 과의존으로 코드 리뷰 생략→15개 병렬 에이전트 운용까지
치닫은 개인 고백, 08-27 "예전 Claude Code가 그립다"와 같은 결의 피로감 담론 연속)
— 페이지화 없이 뉴스레터에만 기록. YouTube는 9채널 재확인 결과 조코딩의 "AI 모델
개선 vs 하네스 엔지니어링" 쇼츠(설명란 정보 부족으로 참고용 기록)만 신규 확보,
장피엠·kooky0ai는 기존 반영 콘텐츠와 중복이라 제외, 나머지 6채널 정체. Varun Mayya
08-27 쇼츠("Jumanji With AI")는 설명란이 비어 있어 업무 적용 Case 승격 보류. HN
인물쿼리(karpathy·"Andrew Ng", points>50)는 신규 히트 없음. Anthropic 공식
뉴스룸은 curl 직접 파싱이 JS 렌더링으로 불가해 WebFetch로 우회 확인. [[anthropic]]·
[[timeline]] 113→117건·[[index]]·[[case-catalog]] 갱신. raw/2026-08/에 원본 5건
저장(nvidia-huggingface-acquisition·anthropic-model-hardware-standard·
ai-industry-cyber-defense-letter·anthropic-science-scientist-seats-wellbeing-grants·
theaxlabs-company-brain-prompt-guide). newsletter/2026-08-28.md 신규 생성.
sources.md RSS 캐시 08-28행 추가(AX LABS 정체 해소 확인, old.reddit·Karpathy 블로그
8일 연속 재시도 생략 유지).

## [2026-08-29] scan | 항목 6건, 반영 6건

공백 없음(전날 08-28 스캔 정상 실행 확인 후 바로 오늘치 진행). 업무 적용 Case 1건:
exe.dev 블로그(HN 68점)에서 개인 개발자가 "손코딩 안 함" 규칙으로 Claude Code·Codex·
Cursor를 격리 VM+자체 오케스트레이터(botd)로 병렬 운영해 6개월간 실제 업무 개발 전체를
위임 — 정량 생산성 지표는 없으나 피크 20 VM·자기평가 "경력 최고 생산성"은 확인
→ [[2026-08-29-exedev-claude-codex-cursor-parallel-agents]] 신규, case-catalog 78건.
빅 뉴스 3건: (1) 미 연방법원, 국방부의 Anthropic "공급망 리스크" 블랙리스트 지정을
위법 판결(수정헌법 1조·5조 위반) — 자율살상무기·대량감시 사용제한을 둘러싼 $200M 계약
결렬이 발단, 정부에 전면 철회 명령. 08-04 Tino Cuéllar 영입 당시 "누적된 정부 리스크"로만
짧게 언급됐던 사건의 첫 전용 페이지 → [[2026-08-27-anthropic-pentagon-blacklist-ruling]]
신규, (2) Claude Code Auto Mode 우회 공격 성공률 60~80% 확인(Johann Rehberger,
embracethered.com — ZIP 압축해제 후 Python 표준 라이브러리 모듈 가로채기, 일부는 Auto
Mode가 침해 정리 명령까지 차단, Anthropic은 "보안 보장 아닌 최선노력 기능"이라 답변) —
기존 [[2026-08-07-claude-code-auto-mode-default]]에 후속 절 추가(신규 페이지 없음),
(3) GLM-5.3, 예고했던 "2주 후 오픈웨이트 공개" 시한을 넘겨 지연 확인(Terminal-Bench 3.0
4.6→28.3 세부 수치 추가 확인) — 기존 [[2026-08-14-zhipu-glm-5-3-launch]]에 후속 절 추가.
커뮤니티 2건(모두 뉴스레터에만 기록, 페이지화 안 함): "Coding Agents killed my identity.
How do you feel?"(HN 32점, 08-27·08-28에 이은 사흘째 "AI가 정체성/뇌/실력을 죽였다" 담론
연속) · "AI Agent Has Root"(HN 38점, 샌드박스 없는 MCP 서버 위험성 경고+mcp-box 오픈소스
공개, Auto Mode 우회 사례와 같은 맥락). YouTube 1건(Jeff Su "Learn 95% of ChatGPT Work in
Under 20 Minutes", 08-25 업로드 — 기존 [[openai-chatgpt-work-launch]] 실습 가이드로 연결).
Latent Space의 08-28 "[AINews] OpenAI to reach AGI bar by end-2026"은 3자 코멘터리(Time
인용)라 인용 규칙상 원문 그대로 신뢰 인용은 보류, 페이지화 안 함. HN 인물쿼리(karpathy·
"Andrew Ng", points>50)는 신규 히트 없음. Anthropic 공식 뉴스룸(WebFetch)은 08-27 이후
신규 없음 확인, OpenAI 공식 뉴스룸은 이번에도 WebFetch 403(패턴 지속)으로 WebSearch 대체.
[[anthropic]]·[[claude-code]]·[[timeline]] 117→118건·[[index]]·[[case-catalog]] 갱신.
raw/2026-08/에 원본 2건 저장(anthropic-pentagon-blacklist-ruling·
exedev-claude-codex-cursor-parallel-agents). sources.md RSS 캐시 08-29행 추가.

## [2026-08-30] scan | 항목 4건, 반영 4건

업무 적용 Case는 이번 스캔에서 조건을 충족하는 새 사례를 찾지 못함(Ben AI "Second Brain"
영상은 본인 SaaS Balda 홍보 성격이 강해 YouTube 픽으로 하향, case-catalog 갱신 없음).
빅 뉴스 2건 페이지화: (1) SpaceX가 $60B에 인수 완료(08-14)한 Cursor에 대해 OpenAI가
자사 모델 직접 API 접근을 11/12부로 차단(HN 785점) — Anthropic-Windsurf 선례와 같은
패턴, "모델 접근권이 경쟁 무기가 되는" 코딩 에이전트 4파전 구도 재확인 →
[[2026-08-29-openai-ends-cursor-partnership]] 신규, (2) Claude Cowork에 계정 격리형
내장 브라우저 추가(08-26 발표, 기존 Chrome 사이드패널과 병행 — OpenAI Atlas 단종과
반대 방향) — 08-27~08-29 스캔에서 모두 누락됐던 항목을 이번에 WebSearch로 뒤늦게
발견, 기존 [[2026-08-12-claude-cowork-chrome-integration]]에 08-26 후속 절로 소급 반영
(신규 페이지 없음). 빅 뉴스 1건은 페이지화 없이 뉴스레터에만 기록: AI 코딩 에이전트가
패치 논의 시작 10분 만에 취약점을 스캔할 정도로 빨라지며 오픈소스 보안공시 프로세스가
못 따라가는 중(Simon Willison 인용, rclone 유지보수자 "월 40건+ 공시, CVE 할당
2~3일→3~4주로 지연") — 08-27 Auto Mode 우회·08-29 "AI Agent Has Root"에 이은 보안
리스크 가속 흐름의 연장으로 판단해 단발 트렌드 코멘터리로 처리(페이지화 보류). 커뮤니티
1건(페이지화 없음): Terminal-Bench-Science 0.1 공개 — Stanford SAIL·HAI·Laude
Institute·Allen Institute 공동, 과학 연구 워크플로 AI 에이전트 벤치마크 70개 과제,
Anthropic 연구자 Ludwig Schmidt 참여(HN 115점). YouTube 1건: Ben AI "Stop Using Claude
Without This Second Brain Setup"(08-29 업로드, 본인 앱 Balda 홍보 성격 — 세컨드 브레인
설계 체크리스트만 참고용으로 픽 반영). HN 인물쿼리(karpathy·"Andrew Ng", points>50)는
신규 히트 없음. Karpathy GitHub 저장소는 신규 없음(커밋 갱신만). Anthropic 공식
뉴스룸(WebFetch)은 08-27 이후 신규 없음, OpenAI 공식 뉴스룸은 이번에도 WebFetch 403
(패턴 지속)으로 WebSearch 대체. AX LABS·Addy Osmani·Lilian Weng 모두 정체 지속.
YouTube 9채널 중 JoCoding(08-28 휴머노이드 쇼츠)은 주제 무관으로 제외, 나머지는 기존
반영분과 중복이거나 정체. [[anthropic]]·[[claude-code]]·[[openai]]·[[timeline]]
118→120건·[[index]] 갱신(case-catalog는 신규 use-case 없어 갱신 없음). raw/2026-08/에
원본 2건 저장(openai-ends-cursor-partnership·claude-cowork-built-in-browser).
sources.md RSS 캐시 08-30행 추가. newsletter/2026-08-30.md 신규 생성.

## [2026-08-31] scan | 항목 6건, 반영 6건

공백 없음(전날 08-30 스캔 정상 실행 확인 후 바로 오늘치 진행). 업무 적용 Case는 검증
가능한 신규 자동화 사례가 없어 정직하게 공란(Dan Martell "AI brain" 영상 2건은 설명란이
제목 반복뿐이라 세부 미확인으로 승격 보류). 빅 뉴스 4건: (1) Google, 스튜디오급 AI 영상
생성 모델 Gemini Omni 1.1 Flash 개발자용 정식 출시(06-30 프리뷰의 프로덕션 버전 —
Scene Extension·Keyframe Control·Draft Mode·4K 업스케일링, Adobe Firefly·Figma
Weave·Runway 통합, HN 361점) → [[2026-08-27-google-gemini-omni-1-1-flash-launch]]
신규, [[gemini]] 허브 갱신. (2) Anthropic, "Claude for Teachers"를 학교·교육청 단위
기관형 오퍼링으로 확장(개별 교사 무료 프로그램과 별개 트랙, 학생 기록 처리 위임 가능) →
기존 [[2026-07-15-claude-for-teachers]]에 08-28 후속 절 추가(신규 페이지 없음). (3)
GLM-5.3 오픈웨이트 가중치, 지연 논란 끝에 실제 공개 확인 + 네이티브 멀티모달 변형
GLM-5.3-Flash(320B, MIT) 별도 출시(HN 797점) → 기존 [[2026-08-14-zhipu-glm-5-3-launch]]에
08-31 후속 절 추가, 08-28 기록이던 "지연" 상태를 `> ⚠️ 상충` 표기 후 최신 상태로 갱신.
(4) Andrew Ng, The Batch(1차 채널)에 "AI Engineering Skills Map — 소프트웨어 펀더멘털"
레터 발행(코딩 에이전트가 있어도 근본 트레이드오프 판단은 인간 몫이라는 논지) → 신규
update 페이지 대신 기존 개념 [[vibe-coding-vs-agentic-engineering]]에 구루 1차 발언
보강 섹션 추가(인용 규칙에 따라 The Batch 원문 직접 대조 완료). 커뮤니티 1건(페이지화
없음): "Claude Session URL appended to commit messages by default" — 2026-06 등록된
closed GitHub 이슈가 08-30 HN에 재부상(170점), 세션 URL 무동의 기본 첨부에 대한 개발자
신뢰 불만. YouTube 1건: 조코딩 "IT뉴스" 주간 요약(08-30 업로드, Gemini Omni·GLM-5.3과
함께 미확인 루머 "Fable 5.1"·MiniMax H3도 소개 — Fable 5.1은 WebSearch·HN 모두 1차
소스·신뢰 가능한 커뮤니티 스레드 확인 실패로 빅뉴스·페이지화 모두 보류, 루머로만 짧게
언급). HN 인물쿼리(karpathy·"Andrew Ng", points>50)는 신규 히트 없음. Karpathy GitHub
저장소는 신규 없음(커밋 갱신만). old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는
11일 연속 확정 상태로 재시도 생략. AX LABS·Addy Osmani·Lilian Weng·Latent Space 모두
정체 지속. YouTube 9채널 중 JoCoding·Dan Martell만 신규 확인, 나머지 7채널은 기존
반영분과 중복이거나 주제 무관. [[gemini]]·[[timeline]](120→123건)·[[index]] 갱신
(case-catalog는 신규 use-case 없어 갱신 없음). raw/2026-08/에 원본 4건 저장
(google-gemini-omni-1-1-flash-launch·claude-for-teachers-schools-districts·
glm-5-3-weights-released-flash-variant·andrew-ng-ai-engineering-skills-map-fundamentals).
sources.md RSS 캐시 08-31행 추가. newsletter/2026-08-31.md 신규 생성.

## [2026-09-01] scan | 항목 6건, 반영 6건

공백 없음(전날 08-31 스캔 정상 실행 확인 후 바로 오늘치 진행). 업무 적용 Case 1건:
장피엠(YouTube)이 08-31 오픈소스 웹 크롤링 에이전트 "web-crawler"(Claude Code·Codex·
ChatGPT Work 겸용, GitHub MIT)를 공개 — URL+한줄설명만으로 사이트 정찰→수집코드
생성→엑셀 정리를 자동화, 나라장터 입찰공고 140건·금감원 PDF 107개·쿠팡 리뷰 1,000건
실전 시연 → 신규 use-case [[jangpm-web-crawler-claude-code-codex]](research 도메인,
79건째), [[case-catalog]]·[[claude-code]] 허브·[[index]] 갱신. 빅 뉴스 2건: (1)
Anthropic이 Claude Code 표준 주간 사용한도를 09-14부터 25% 영구 인상한다고 발표했으나
같은 날 종료되는 일시 50% 증량 프로모션 때문에 지금 대비 체감은 17% 감소(Anthropic 스스로
인정, HN 64점) → 신규 [[2026-08-31-claude-code-weekly-limit-change]], [[claude-code]]
허브·[[timeline]] 갱신. (2) Salesforce·Anthropic "Claudeforce" 파트너십(08-26 발표,
Claude 안에서 쓰는 37종 사전구축 세일즈 스킬 "Salesforce in Claude", Bedrock 경유
Trust Boundary 내 서빙) — WebSearch로 뒤늦게 발견, **08-27~08-31 5회 연속 스캔에서
누락됐던 항목**이라 09-01 소급 반영 → 신규 [[2026-08-26-anthropic-salesforce-claudeforce]],
[[anthropic]]·[[timeline]] 갱신. 개념 보강 1건: AX LABS가 08-31 공개한 "하네스 엔지니어링
6계층 가이드"(AGENTS.md 템플릿·12항목 체크리스트·프롬프트 4종, GAIA 벤치마크 43.64%p
개선 등 인용)는 특정 도구의 단일 업무 자동화 사례가 아니라 방법론 프레임워크라
use-case 대신 기존 [[loop-engineering]] 개념 페이지에 "실전 프레임워크" 절로 추가.
use-case follow-up 1건: Simon Willison(1차 채널, 08-30)이 "ChatGPT Work"가 실은
Work Cloud/Work Local 두 제품이라고 정리한 것을 기존 [[openai-chatgpt-work-launch]]
use-case에 구조 정리 후속 절로 반영. 커뮤니티 화제 0건(신규 없음) — "Breaking Claude
Code Opus 5 Auto Mode"가 HN 325점으로 재부상했으나 08-27~08-29 스캔에서 이미 반영된
동일 기사의 재게시라 중복 미반영. YouTube 1건: 조코딩 "AI뉴스" 주간요약(08-31 업로드,
Astra·GLM-5.3·Gemini Omni 1.1 등 다룸, "AGI 올해 달성" 등 논쟁적 주장 포함해 픽 설명에
주의 표기). 9채널 RSS 재확인, AI Edge는 계속 미해결(재시도 생략). old.reddit.com RSS·
Karpathy 개인 블로그(bearblog.dev)는 12일 연속 확정 상태로 재시도 생략. AX LABS 외
Latent Space·Addy Osmani·Lilian Weng·The Batch는 모두 정체 지속. HN 인물쿼리(karpathy·
"Andrew Ng", points>50)는 신규 히트 없음. Karpathy GitHub 저장소는 신규 없음(커밋
갱신만). YouTube 9채널 중 장피엠·조코딩만 신규 확인, 나머지 7채널은 기존 반영분과
중복이거나 주제 무관. [[loop-engineering]]·[[claude-code]]·[[anthropic]]·
[[openai-chatgpt-work-launch]]·[[case-catalog]]·[[timeline]](123→125건)·[[index]] 갱신.
raw/2026-09/에 원본 4건 신규 저장(jangpm-web-crawler-claude-code-codex·
theaxlabs-harness-engineering-6-layer-guide·anthropic-salesforce-claudeforce·
claude-code-weekly-limit-change). sources.md RSS 캐시 09-01행 추가.
newsletter/2026-09-01.md 신규 생성.

## [2026-09-01] ingest | 소스 추가 — AI 경영·비즈니스 실증 + AI 교육 트렌드 섹션 신설

사용자 요청으로 sources.md에 섹션 2개 신설. (1) **AI 경영·비즈니스 실증**: HBR·MIT Sloan
Management Review·Knowledge at Wharton·McKinsey Insights·One Useful Thing(Ethan Mollick)·
Exponential View(Azeem Azhar)·AI Snake Oil(Narayanan·Kapoor) 7종 — AI의 경영 성과·영향·
사업 적용 실제 case·사례연구·벤치마크 수집용, `uses: ax` 핵심 공급원. (2) **AI 교육 트렌드**:
EdSurge·Class Central 신규 2종 + One Useful Thing·The Batch 겸용 — 혁신 교육 방식·선진
사례 수집용, `uses: course` 핵심 공급원. 전 소스 2026-09-01 RSS 실측 검증(HBR은
`<ns6:entry>` 네임스페이스 Atom 주의사항 기록, 탈락: MIT Open Learning 04-27 정체·
Stanford HAI RSS 미제공). CLAUDE.md 토큰 효율 규칙에 스캔 지침 추가(제목 스크리닝 →
수치·벤치마크·재현 가능 교육 방식 있는 글만 정독, measured/claimed 구분 페이지화).

## [2026-09-01] ingest | AI 경영·비즈니스 실증 + AI 교육 트렌드 소급 백필 (07-15~09-01)

신규 소스 2섹션(AI 경영·비즈니스 실증 7종, AI 교육 트렌드 2종+겸용 2종)에 대해 09-01
지정 이후 첫 반영이라 7주 소급 백필 수행(일반 데일리 스캔이 아닌 1회성 캐치업).

**소스별 스크리닝 결과**(제목·요약 1차 스크리닝 → 구체 기업명·수치·재현가능 방식만 정독):
- HBR: 100건 중 AI 제목 41건(07-13~08-31) 확인, 대다수 일반 리더십 에세이라 스크리닝
  기준 미달. "Research:" 접두 학술 다이제스트 2건(07-29 AI 에이전트-지식노동 확장,
  08-14 혁신 문제)은 유망했으나 **본문이 구독 페이월 뒤라 상세 확인 불가** — 페이지화 보류.
  "Embrace AI Without Damaging Trust: Lessons from FT"(07-29)도 동일 사유로 보류.
- MIT Sloan: 20건 중 "Stop Prompting AI. Start Directing It"(08-05) 1건 정독 → 페이지화
  (Directing 3축 프레임 + 익명화 사례 4건, 실명·정량 수치는 원문에 없음).
- Knowledge at Wharton: 10건 중 AI 특화 실질 콘텐츠 없음(정책 오피니언 1건뿐) — 페이지화
  없음.
- McKinsey: 50건 중 AI 관련 다수, 2건 정독 → 페이지화("State of AI 2026: Road to ROI"
  서베이 n=1,719, EBIT기여37%·고성과6%·감원예상39%·에이전트스케일링40%; Reckitt RGMx
  케이스, 누적매출개선$100M+·35개시장). **McKinsey 원문 WebFetch가 전부 60초 타임아웃**
  (JS 렌더링 과중 추정) — WebSearch로 2차 보도 교차확인해 수치 확보하는 우회로 완료.
- One Useful Thing(Mollick): 창 안 2건뿐(월 1회 미만 페이스 확인). "Agency and Agents"
  (08-31)는 Hugging Face 보안 인시던트 회고 위주(교육·경영 사례 아님) — 스크리닝 탈락.
- Exponential View(Azhar): 20건 중 "$6 AI agent"(08-16) 1건 정독 → 페이지화(저자 본인
  실측 지출 $494/일→$6/일).
- AI Snake Oil: 1건뿐("AI agents can't yet do open-ended AI research", 08-05) → 정독·
  페이지화(shadow evaluation 방법론, 5대 결함). **뉴스레터가 "AI as Normal Technology"로
  개칭·도메인 이전(aisnakeoil.com→normaltech.ai, 301) 확인, sources.md 갱신.**
- EdSurge: 35건 중 대부분 정책·오피니언(스크리닝 제외 대상). "AI-Resistant Assignments"
  (08-03) 1건 정독·페이지화(Cheat Vulnerability Index). "Middle School Reading"(08-28)은
  명명된 도구·정량 수치 없이 모호해 탈락.
- Class Central: 10건 중 "Coursera $100M LearnVector 투자" 분석 1건 후보, **원문
  Cloudflare 차단**(WebFetch·curl 모두 403) — 공식 보도자료(investor.coursera.com)로
  대체 확인해 페이지화.

**신규 페이지 7건**: [[2026-08-25-mckinsey-state-of-ai-2026-road-to-roi]](update)·
[[mckinsey-reckitt-rgmx-pricing-automation]](use-case)·
[[directing-ai-agents-vs-prompting]](concept)·
[[azhar-6-dollar-ai-research-agent]](use-case)·
[[2026-08-05-ai-snake-oil-agents-open-ended-research-limits]](update)·
[[edsurge-cheat-vulnerability-index-ai-resistant-assignments]](use-case)·
[[2026-07-28-coursera-learnvector-andrew-ng-investment]](update). 기존 페이지와 중복
없음(사전 grep 확인, 겹치는 기존 페이지 없었음). use-case 2건(Reckitt RGMx, EdSurge
CVI)은 CLAUDE.md의 mechanism 통제어휘가 코딩 에이전트 전제라 정확히 들어맞는 태그가
없어 최근접 근사치(`cron-routines`, `skills`)를 선택하고 본문에 불일치 안내를 명시.

**갱신**: [[index]](업데이트 신규 섹션·개념·적용사례 3영역 반영, 케이스카탈로그 79→82건)·
[[case-catalog]](보안·운영·개인생산성에 1건씩 추가, 신규 "교육(education)" 섹션 신설)·
sources.md(AI Snake Oil 리다이렉트 기록, McKinsey WebFetch 타임아웃·Class Central
Cloudflare 차단 운영 메모 추가). raw/2026-09/에 원본 요약 7건 신규 저장.

**스크리닝 탈락(참고, 페이지화 안 함)**: HBR 일반 리더십 에세이 다수(08-28 "AI
Transformation Requires Redesigning Work" 등), HBR "Research:" 2건(페이월로 상세 불가),
Wharton "Should AI Companies Be Supervised Like Banks?"(정책 오피니언), Mollick "Agency
and Agents"(보안 인시던트 회고, 무관), EdSurge "Middle School Reading"(모호), McKinsey
추가 다수(트러스트·거버넌스 등 서베이 반복 주제, 2건으로 대표성 확보 판단).

## [2026-09-02] ingest | 스크리닝 OR조건(rule B) 도입 후 첫 패스 재점검 — HBR·EdSurge·Wharton·McKinsey·Exponential View·Class Central 재확인

2026-09-01 첫 백필은 rule A(구체성)만 기준으로 삼아 통과율이 낮았다(HBR 41건 중 0건,
EdSurge 35건 중 1건, Wharton 10건 중 0건, McKinsey 50건 중 2건). sources.md에 09-02
추가된 rule B(주목도: HN Algolia `points>50`·아웃렛 인기목록·Substack 참여도)를 적용해
**그때 페이지화하지 않은 항목만** 재점검했다(신규 스캔이 아닌 top-up 패스).

**재확인 방법**: 각 아웃렛 RSS를 다시 받아 AI 제목을 추출하고(HBR 39건·EdSurge 19건 확인
— RSS가 롤링 윈도우라 원래 41·35건과 정확히 일치하진 않음, 09-01 스크린샷 시점과 롤링
차이로 판단), 아웃렛 도메인(hbr.org·edsurge.com·mckinsey.com·knowledge.wharton.upenn.edu·
classcentral.com·exponentialview.co)을 `created_at_i` 07-13~09-01 구간으로 제한해 HN
Algolia `points>0` 전수 조회 후 최고점을 확인, 각 아웃렛 홈페이지의 "인기/추천" 목록도
WebFetch로 확인.

**rule B(주목도) 결과 — 전 소스 공통으로 임계값(50점) 미달, 정직하게 0건**:
- HBR: 윈도우 내 hbr.org 링크 HN 게시물 최고점 **14점**("AI Is Undermining Leaders'
  Judgment"). HBR 홈페이지 "Popular" 목록에도 AI 제목 없음.
- EdSurge: 윈도우 내 edsurge.com 링크 HN 게시물 **0건**(전무). 홈페이지 "Most Popular"
  목록에도 AI 제목 없음.
- Wharton: 10건 재확인 결과 AI 특화 콘텐츠는 기존에 이미 확인한 정책 오피니언 1건뿐
  (누락된 도입사례 없음). 그 1건도 HN·도메인 검색 모두 무관/무히트.
- McKinsey: 21건(Aug 윈도우 재확인분) 중 최고점은 **27점**("The state of AI in
  2026" — 이미 페이지화됨). 나머지는 1~2점.
- Class Central: 최고 16점("Coursera Bets $100M...", 이미 페이지화된 건과 동일 주제).
- 따라서 **rule B 단독으로 새로 페이지화된 항목은 0건**이다 — 억지로 끼워맞추지 않음.

**HBR 페이월 2건은 rule A로 우회 확인 → 신규 페이지화(신규 정보 아니라 09-01에 막혔던
정보를 이번에 확보)**:
- "Research: How AI Agents Broaden the Scope of Knowledge Work"(07-29) — HBR 본문은
  여전히 페이월이지만 Perplexity 자체 리서치 페이지·arXiv 논문(2606.07489)에서 원
  데이터 확인. Comet(에이전트) vs Search 실사용 로그 10만 건 비교 — 세션당 자율작업시간
  48배(33초→26분), 비교작업 시간87%·비용94%↓ 등 풍부한 실측 수치 확보 →
  [[perplexity-comet-vs-search-knowledge-work-scope]](use-case, evidence: measured).
- "Research: The Innovation Problems AI Can't Solve"(08-14) — arXiv(2608.07504)·SSRN
  원 논문 확인, 저자 De Freitas·Israeli·Nave·Timoshenko·Toubia(HBS)의 "인간 병목"
  4단계 프레임 + **named company H&M Group** 필드 실험 확보. 단 정확한 정량 수치는
  2차 소스로도 확인 안 돼 미확인으로 남김 →
  [[ai-innovation-human-bottleneck-framework]](concept).

**Exponential View 재정독(20건 중 1건만 읽었던 첫 패스를 보완, rule A로 확인)**:
- "For AI adopters, success and failure look identical — at first"(07-30, ai-adoption-j-curve)
  — NYSE/Nasdaq·Borders·GM·JPMorgan named company 사례 확인 →
  [[ai-adoption-j-curve]](concept).
- "Seven lessons for managing AI agents"(08-05) — 7개 중 무료 공개된 3개 교훈 확인,
  $800(AI) vs $19,000(사람) 주간 작업비용 비교·Codex 8시간작업 요청 비율 2%→25% 등
  구체 수치 확보 → 기존 [[loop-engineering]] 개념 페이지에 절 추가(신규 페이지 아님).

**AI Snake Oil(normaltech.ai) 스팟체크 — 페이지화 보류(스코프 밖 명시)**: 도메인 HN
재확인 중 "What will be left for us to work on?"(Arvind Narayanan)이 180점으로 확인됐으나
**게시일이 07-13으로 기존 백필 윈도우(07-15~09-01) 시작보다 이틀 이르다** — "그때 스크린한
항목 재점검"이라는 이번 패스의 스코프를 벗어나므로 페이지화하지 않고 참고로만 기록.
필요시 다음 정기 스캔에서 정식 검토할 것.

**신규/변경 페이지 3+1건**: [[perplexity-comet-vs-search-knowledge-work-scope]](use-case,
measured, case-catalog 79→83건 반영) · [[ai-innovation-human-bottleneck-framework]](concept)
· [[ai-adoption-j-curve]](concept) · [[loop-engineering]](기존 페이지에 "에이전트 관리
7가지 교훈" 절 추가). raw/2026-09/에 원본 요약 4건 신규 저장. 사전 grep으로 기존 페이지와
중복 없음 확인.

**갱신**: [[index]](개념 2건·적용사례 1건 반영, 카탈로그 82→83건, AI 경영/교육 섹션에
09-02 top-up 요약 각주 추가) · [[case-catalog]](리서치 섹션 신규 1건 + 트레일러 노트).

**정직성 요약**: HBR 41건(재확인 39건)·EdSurge 35건(재확인 19건, RSS 롤링으로 일부만
재현)·Wharton 10건·McKinsey 50건(재확인 21건, Aug 윈도우) 전부 rule B(HN 주목도·아웃렛
인기목록) 재점검했으나 임계값을 넘긴 항목은 0건이었다 — 이 결과를 숨기지 않고 그대로
보고한다. 실제 신규 페이지 3건(+기존 페이지 보강 1건)은 전부 **rule B가 아니라 rule A**
경로로 나왔다: 페이월·저정독으로 놓쳤던 항목을 이번에 실제로 읽어 구체적 수치·named
company를 확인한 결과다. 즉 이번 top-up의 실질 성과는 "주목도 기준 완화"가 아니라
"페이월 우회·재정독으로 놓친 구체성 회수"였다.

## [2026-09-02] scan | 항목 9건, 반영 8건

공백 없음(전일 09-01 뉴스레터 확인, 정상 단일일 스캔). 9개 YouTube 채널·구루 1차
채널(Simon Willison·Latent Space·Addy Osmani·Lilian Weng·AX LABS)·HN Algolia(인물쿼리
+front_page+키워드)·AI 경영/교육 RSS 8종을 확인. old.reddit.com·Karpathy bearblog.dev는
13일 연속 확정 차단 상태라 재시도 생략.

**빅 뉴스 3건(전부 페이지화/기존 갱신)**:
- [[2026-09-01-claude-fable-5-1-mythos-5-1-launch]] — Fable 5.1·Mythos 5.1 출시(HN
  737점, 이날 최고 화제). 비용 최대 45%↓, Claude Code 보안 오탐 60%↓, 같은 날 기업
  데이터 보관 정책을 Enterprise Frontier Safeguards(자사 클라우드 자체 보관)로 전환.
- [[2026-07-31-anthropic-cybersecurity-eval-incidents]] 후속 절 추가 — 07-30 공개
  사고가 재발 확인(UK AISI 별도 사례 포함), 프리릴리스 평가·고위험 RL 환경 일시중단
  + 엔지니어 약 150명 보안팀 재배치. 같은 사실을 다루는 신규 페이지 대신 기존 페이지
  갱신 선택(중복 생성 방지 원칙).
- [[ai-capex-productivity-gap]](신규 concept) — Wharton, 빅테크 5사 AI 인프라 지출
  2022년 $1,550억→2026년 $7,550억, 정당화에 필요한 생산성 배율 2.7배(IT붐 1.5배·
  광통신 1.3~1.5배 대비 이례적). rule A(named professor·구체 수치)로 채택.

**업무 적용 Case 2건(신규 use-case)**:
- [[theaxlabs-wikiskill-claude-code-memory-system]] — AX LABS가 Google Research
  "WikiSkill" 논문(raw/wiki/skills 3계층, 원논문 벤치마크 정확도 48.7%→63.7% 실측)을
  Claude Code 메모리 시스템에 적용하는 5단계 승인게이트 프롬프트로 정형화. AX LABS
  적용 자체의 효과는 미실측이라 evidence: claimed로 정직하게 분류.
- [[vercel-ai-sdk-software-factory]] — ★실측. Latent Space "PRs NOT Welcome"이 조명한
  Vercel의 오픈소스 저장소 운영 자동화. 1차 소스(Vercel 공식 블로그, 08-12)까지 확인해
  4주 실측 수치(PR 25~35% 자동작성·이슈 70~80% 자동종료·오픈이슈 1,022→844건, 사람
  승인 없이는 머지 불가) 확보.

**커뮤니티 화제 1건**: Meta 정렬 디렉터의 OpenClaw 이메일 200통+ 삭제 사건(HN
08-31 게시 재조명) — 컨텍스트 압축이 안전지시를 소실시킨 사례. Meta OpenClaw는
4대 핵심 도구 범위 밖이라 페이지화하지 않고 뉴스레터 커뮤니티 화제로만 반영.

**YouTube 픽 0건**: 9채널 재확인 결과 신규 관련 업로드 없음(기존 반영분과 중복이거나
주제 무관) — "특이사항 없음"으로 뉴스레터에 명시.

**스크리닝 탈락(참고)**: HBR·Sloan·McKinsey·One Useful Thing·AI Snake Oil 신규 글은
전부 rule A/B 미충족(일반론이거나 HN·아웃렛 주목도 임계값 미달). EdSurge "A Principal
and a Student Reviewed the New ChatGPT for Teens"(09-01)는 구체적 반응이 기대돼 확인
시도했으나 원문 URL이 404로 확인 실패해 보류(다음 스캔에서 재시도 필요). Simon
Willison의 "Codex bundles LibreOffice"(HN 140점)는 개발자 트리비아 성격이 강해 일반
독자 대상 편집 기준상 제외.

**갱신**: [[claude-code]](Fable 5.1 갱신 1줄)·[[anthropic]](09-01 스냅샷 문단 추가)·
[[timeline]](2026-09 섹션 신설, 2건)·[[index]](업데이트 1건·개념 1건·use-case 2건
반영, 케이스카탈로그 83→85건)·[[case-catalog]](리서치·개발자동화에 1건씩 추가 +
트레일러 노트)·sources.md(RSS 캐시 09-02 항목 추가). raw/2026-09/에 원본 요약 6건
신규 저장. 뉴스레터(newsletter/2026-09-02.md) 전 항목 체크박스 [x] 반영 완료.

## [2026-09-03] sources | 경영·교육 스크리닝 전면 개정 — 구체성 게이트 폐기, 화제성을 주 기준으로

사용자 지정: "구체적 수치·기업명 기준을 완화하고 화제성을 가장 중요한 조건으로 교체".

**개정 전 진단**: 09-01 규칙(A 구체성)은 통과율이 0에 가까웠고(HBR 41건 중 0건, Wharton
10건 중 0건), 09-02에 추가한 B(주목도, HN `points>50`)도 재점검 결과 전 소스 0건이었다.
원인을 실측으로 규명 — **HN은 이 아웃렛들에 대해 신호 자체가 존재하지 않는다.**
2026-07 이후 도메인별 HN 게시: sloanreview.mit.edu **0건**, edsurge.com **0건**,
mckinsey.com 8건(최고 27점), exponentialview.co 8건(최고 3점), oneusefulthing.org
4건(최고 4점), hbr.org 10건(최고 113점이나 나머지는 14점 이하). 50점 기준이 0건을 낸 건
필연이었다.

**대체 신호도 검증**: 화제성을 하드 게이트로 올리기 전에 인기 목록 접근성을 실측했다.
HBR은 **홈(`hbr.org/`)의 "Popular" 섹션에만** 존재하고 AI 토픽 페이지엔 없으며, 확인
시점의 Popular 4건이 전부 AI 무관 리더십 글이었다. Sloan은 기사별 조회 순위가 아니라
"What to Read Next"·주제별 추천 형태. 즉 **화제성을 하드 게이트로 두면 0건 문제가 형태만
바꿔 재발**할 상황이었다.

**최종 구조 (0-1-2단계)**: ① 관문을 느슨하게 — "검증된 아웃렛이 AI 주제로 실었다"는
사실만으로 정독 후보(아웃렛 자체가 이미 필터이므로 이중 게이트를 걷어냄). ② 화제성은
**관문이 아니라 우선순위 기준** — 예산 안에서 무엇을 먼저 읽을지를 결정(인기 목록 >
뉴스레터 자기평균 대비 참여도 > 2차 확산, HN은 보조). ③ 구체성은 **기록 방식만** 결정
(수치 있으면 use-case measured/claimed, 프레임만 있으면 anecdotal 또는 뉴스레터 한 줄).
탈락 사유를 셋으로 명문화: AI 무관 / 위키 중복 / 본문 확인 실패. "수치 없음"·"화제성
미확인"은 더 이상 탈락 사유가 아니다.

## [2026-09-03] ingest | 경영·교육 새 기준 백필 (07-15~09-03) | 반영 11건

2026-09-03 스크리닝 전면 개정(구체성 게이트 폐기 → 화제성 우선순위 + 구체성=기록방식)의
첫 적용. **09-01 rule A·09-02 rule B로 버려졌던 항목을 새 기준으로 재평가**하는 1회성
캐치업 패스(신규 스캔 아님). 예산: WebFetch 25회 한도 중 **18회 소비**, 페이지 12건
한도 중 **11건 생성**.

### 화제성 측정 (1단계) — 방법과 실측

- **Substack 참여도를 curl로 무료 측정하는 경로를 새로 확보**:
  `/api/v1/archive?sort=new&limit=40` JSON에서 `reactions["❤"]`·`comment_count`를 직접 읽음.
  최근 23편 자기 평균 — Exponential View 85.3 / One Useful Thing 1,136.9 / normaltech.ai 205.7.
  이 방법을 sources.md에 상설 등록했다(이후 매 스캔 재사용).
- **HN Algolia 도메인 전수(07-15~09-04)**: hbr.org 최고 14점, classcentral.com 16점,
  oneusefulthing.org 3점, **sloanreview.mit.edu·edsurge.com·exponentialview.co 0건**.
  개정 규칙대로 HN 무신호를 탈락 근거로 쓰지 않았다. (부수 발견: `numericFilters`를
  URL 인코딩하지 않으면 필터가 조용히 무시되고 **2025년 결과**가 반환된다 — 한 번 속았고
  sources.md에 경고 기록.)

### 소스별 검토/채택 (숫자는 창 07-15~09-03 기준)

| 소스 | RSS 창 내 AI 항목 | 정독(WebFetch) | 채택 | 탈락 사유 |
|---|---|---|---|---|
| HBR | 47건 (sponsored 6 포함) | 3 | **1** | ③ 페이월 2건 |
| MIT Sloan | 5건 | 4 | **3** | ① AI 무관 1건 |
| EdSurge | 19건 | 5 | **4** (+기존 1건 갱신) | ② 중복 1건(→기존 페이지 갱신) |
| Knowledge at Wharton | 1건 | 0 | 0 | ② 이미 페이지화됨 |
| One Useful Thing | 2건 | 1 | **1** | — |
| Exponential View | 12건(로드맵/데이터 정기물 제외) | 3 | **2** | 예산 컷 1건 |
| AI as Normal Technology | 1건 | 0 | 0 | ② 이미 페이지화됨 |
| McKinsey | (이번 패스 대상 아님) | 0 | 0 | — |
| Class Central | 3건 | 1 | 0 | ③ Cloudflare 403 |

### 새 기준 vs 옛 기준 (핵심 비교)

| 소스 | 09-01 rule A | 09-02 rule B | **09-03 새 기준** |
|---|---|---|---|
| HBR | 41건 중 **0건** | 0건(우회로 2건 별도) | 47건 중 **1건** (botsitting) |
| MIT Sloan | 20건 중 1건 | 0건 | **3건 추가** |
| EdSurge | 35건 중 1건 | 0건 | **3건 추가 + 1건 기존 페이지 갱신** |
| Wharton | 10건 중 0건 | 0건(09-02 스캔에서 별도 1건) | 0건 (더 없음이 실측 확인됨) |
| One Useful Thing | 2건 중 0건 | — | **1건** |
| Exponential View | 20건 중 1건 | 2건(재정독) | **2건 추가** |

**옛 기준이 놓친 것의 정체 두 가지가 드러났다.**
① **접근성 오판** — 09-01·09-02가 Sloan·EdSurge를 저정독한 것은 접근 문제가 아니라
스크리닝 기준 문제였다. 두 아웃렛 모두 **페이월이 없고**, 이번에 읽은 9건 중 7건이
곧바로 페이지가 됐다(수확률 78%). "정책·오피니언"으로 제목만 보고 일괄 탈락시킨 EdSurge
항목 안에 재현 가능한 학교 정책 수립 절차와 수업 설계가 실제로 들어 있었다.
② **페이월 조기 포기** — HBR botsitting은 본문이 막혔지만 WebSearch로 원 리포트
(Glean "Work AI Index 2026")를 찾아 **핵심 수치를 전량 확보**했다. 09-02의 arXiv 우회와
같은 패턴이므로, HBR은 "페이월 → 즉시 탈락"이 아니라 **원 연구를 한 번 찾아본 뒤** 판정하도록
sources.md에 규칙화했다.

반대로 **새 기준으로도 늘지 않은 곳**도 정직하게 기록한다 — Wharton은 창 안 AI 기사가
실제로 1건뿐(이미 페이지화됨)이고, Class Central은 Cloudflare 403이 그대로다.
기준 완화가 만능이 아니라 **소스별 병목이 서로 달랐다**는 것이 이번 패스의 결론이다.

### 신규 페이지 11건

**개념 7건**
- [[which-ai-to-use-mollick-guide]] — Mollick "어떤 AI를 언제 쓰는가" 2026 여름판.
  위험도·자율성 2축 판단 트리 + 클라우드형/데스크톱형 구분 + 안전 지침 3개.
  (채택 근거: 좋아요 1,246 > 자기평균 1,137)
- [[multi-agent-hidden-profile-problem]] — 에이전트 넷보다 하나. Anthropic hidden-profile
  실험 다중 17~36% vs 단일 거의 100%, 30개 중 18개가 같은 브랜치명. 이 위키의 다중
  에이전트 사례들과 상충하지 않도록 **"분업이면 다중, 판단이면 단일"** 구분을 명시.
- [[customer-resistance-to-ai]] — MIT Sloan. 챗봇 제시 시 채택 10~20%p↓,
  나쁜 소식 AI 78.6% vs 사람 60.4% / 좋은 소식 사람 89% vs AI 76%, 163개 연구·82,000명 메타분석.
- [[ai-platforming-unfinished-foundation]] — MIT Sloan(Boudreau). Cursor $2B·Agentforce
  $1.2B ARR·24억 MAU에도 기술·산업·제도 3층 아키텍처 미완, "약속보다 학습을 빨리".
- [[exploration-algorithms-for-breakthrough-ideas]] — MIT Sloan. 표준 검색을 쓰면
  전문가·초보자 차이가 사라짐(유의성 없음), 탐색형이면 창의성 +14%/+11%·군집 5개 vs 1~2개.
- [[botsitting-hidden-ai-labor]] — HBR·Glean Work AI Index 2026. 주당 절감 11시간 중
  **6.4시간을 AI 관리에 되돌려 씀**, 개인 체감 75% vs 조직 성과 체감 13%.
  (벤더 리포트임을 본문에 명시, `claimed` 수준으로 인용 지시)
- [[ai-bubble-five-gauges]] — Exponential View, **부분 공개**. 빨강 0·주황 2,
  AI 매출 TTM $126B, 자금조달 질 2027년 빨강 전환 예상. 5개 중 2개 지표는 미확인으로 명시.

**적용 사례 3건 (전부 domain: education)**
- [[edsurge-cognitive-citizenship-ai-instruction]] — "인지 시민성" 5단계 수업 절차.
  근거로 NAEP 8학년 읽기 30%, MS Research·CMU 연구, **Brown대 테이크홈 96%→감독형 49%** 인용.
- [[edsurge-school-ai-policy-future-ready-team]] — 학교 AI 정책 3단계(담당자 선학습 →
  2년 임기 범부서팀 + 공개 프레임워크 각색 → 교직원 연수 후 학생 개방), 교실별 "신호등" 표시.
- [[edsurge-ai-esl-english-learners]] — SchoolAI 등으로 ESL 수업 지원. **정량 성과 전무**를
  본문에 명시(오답 2회 후 지원 강화 스캐폴딩만 설계 자산으로 기록).

**업데이트 1건**
- [[2026-08-04-turnitin-learning-integrity-insights-q2-2026]] — 제출물 실측 기준
  미국 고등교육 19%가 AI 생성 80% 초과(영·호주 10%, K-12 5~6%), 학교 AI 도입 주도 48%가
  현업 교사, 초안 피드백 요청 43% 중 **72%가 루브릭 정합성**을 원함. 벤더 리포트 한계 명시.

**기존 페이지 갱신 1건 (신규 페이지 아님 — 중복 회피)**
- [[2026-08-18-openai-chatgpt-for-teens]] — EdSurge의 교장·학생 직접 리뷰(09-01)를
  "후속 — 교육 현장 리뷰" 절로 추가. Study Hours 등 구체 기능 + 컨텍스트 유지 실패 한계.

### 갱신

[[index]](개념 7건·적용사례 3건·업데이트 1건 반영, 카탈로그 85→88건, 경영/교육 섹션에
09-03 백필 요약 각주 추가) · [[case-catalog]](교육 섹션 1→4건) · [[timeline]](08-04 Turnitin) ·
sources.md(경영 섹션에 09-03 실측 메모 신설 — Substack API 참여도 측정법·HN 인코딩 함정·
HBR 페이월 우회 규칙·Sloan/EdSurge 정독 1순위 승격·HBR ns6 파싱법).
raw/2026-09/에 원본 요약 12건 신규 저장(신규 페이지 11건 + ChatGPT for Teens 현장 리뷰 1건).

### 예산 때문에 자른 후보 (다음 패스에서 이어서)

- **Exponential View "The market misread Google's AI exodus"(08-15)** — 좋아요 131로
  창 안 최고. 정독까지 마쳤으나 [[ai-capex-productivity-gap]]·
  [[2026-08-05-google-deepmind-hassabis-steps-down]]과 주제가 겹쳐 페이지 슬롯에서 컷.
  내용: Jeff Dean·Ghemawat 퇴사를 "인재 위기"가 아니라 **"모든 TPU가 당장 수익 나는
  모델에 배정돼 개방형 연구가 허들을 못 넘는 자본 배분 전환"**으로 읽는 해석. Alphabet 4% 하락.
- **Exponential View "Unbounded self-improvement and its limits #599"(08-30, 좋아요 60)** — 미정독
- **Exponential View "The problem with petards"(08-22, 좋아요 108·댓글 13)** — 미정독, 금융 성격
- **One Useful Thing "Agency and Agents"(08-31, 좋아요 886 < 평균 1,137)** — 09-01에
  "보안 인시던트 회고"로 탈락시킨 건. 새 기준으로는 재검토 대상이나 자기평균 미달이라 후순위.
- **EdSurge 미정독 AI 항목 9건** — "How AI Taught Me to Embrace Vulnerability in the
  Classroom"(09-02), "What Happens When AI Policy Meets a Real Classroom?"(08-05),
  "The K-12 Silo Won't Survive AI"(08-12), "On AI Policy, Students Have Plenty to Say"(08-13),
  "We Must Stop Using AI to 'Level-Down' Our Students"(07-22), "What Does AI Cost When We
  Skip the Work?"(07-22), "Student Artists Wrestle with AI's Promise and Peril"(08-27),
  "What Should Students Still Have to Do for Themselves?"(07-29),
  "AI Can Help Middle School Reading"(08-28, 09-01에 모호하다고 탈락시킨 건)
- **HBR 미정독 AI 항목 41건** — 페이월 확률이 높으나, 원 연구 우회가 통하는 "Research:"
  접두 기사와 실명 기업 사례(예: "AI and IT Teams Often Clash"(07-31, 3개사),
  "Is the European Market Ready for AC? Inside Midea's Blue Ocean Strategy"(09-02),
  "4 Steps to Transform the Middle Office with AI"(08-20))는 시도해 볼 값이 있다.
  HN에서 확인됐으나 RSS 롤링 창에 없던 2건도 미확인: "Research: Why You Shouldn't Treat
  AI Agents Like Employees"(08-29), "AI Is Revolutionizing Strategic Decision-Making"(08-20).
- **EdSurge "Assignments, Invoices, and the AI Fix"(08-19)** — 정독했으나 팟캐스트 예고편이라
  실질 수치·사례가 전무(원문이 링크한 "Can Schools Afford an AI-First Future?"에 실제 데이터가
  있음). 다음 패스에서 그 원문을 직접 볼 것.

### 정직성 요약

**정독 18건 중 11건 채택(61%), 7건 미채택.** 미채택 내역은 페이월 2건(HBR 08-19·09-01),
Cloudflare 403 1건(Class Central), AI 무관 1건(Sloan "Spot New Tech Skills" — 가구 제조
현장의 일반 기술 숙련 이야기), 위키 중복 1건(ChatGPT for Teens → 신규 대신 기존 페이지 갱신),
실질 내용 없음 1건(EdSurge 팟캐스트 예고편), 주제 중복으로 슬롯 컷 1건(EV Google exodus).
**억지로 채우지 않았고, 확보 못 한 수치는 전부 "미확인"으로 남겼다** — 특히
[[ai-bubble-five-gauges]]는 5개 지표 중 2개를 확인 못 했음을 페이지 본문에 명시했다.

## [2026-09-07] lint | Reddit 접근 복구 — 13일간의 "차단 확정"이 오진이었음을 실측 규명

사용자가 Reddit 공식 API 유료 여부를 물어 조사하던 중, **차단 자체가 오진이었음을 발견**했다.

**경위**: 2026-08-20부터 `old.reddit.com` RSS가 HTTP 302(로그인 리다이렉트, 0바이트)를
반환하기 시작했고, 이후 13일 연속 스캔에서 재시도 끝에 "봇 차단 강화로 확정, 커뮤니티
수집은 HN 단독 운영"으로 결론냈다. 그러나 2026-09-07 실측 결과 **`www.reddit.com`은
정상 동작**한다 — 6개 서브 전부 200 응답(r/ClaudeAI·AI_Agents·LocalLLaMA·OpenAI 각 25건,
r/ChatGPTCoding 5건, r/singularity는 429 후 재시도 필요).

**근본 원인**: 2026-07-07 최초 검증 기록이 "www.reddit.com은 curl 차단, old.reddit.com은
정상"이었고, 그 전제를 아무도 재검증하지 않은 채 old만 13일간 반복 재시도했다. Reddit이
그 사이 차단 대상을 뒤바꿨는데 우리 기록은 옛 전제에 묶여 있었던 것. **교훈을 sources.md에
상설 규칙으로 명문화**: 소스가 막혔다고 판단하기 전에 반대 도메인·대체 경로를 반드시 한 번
시험할 것.

**운영 조건 실측**: 요청 간격 25초 이상 필수(3초 간격 → 6개 중 5개 429, 18초 → r/ClaudeAI
429, 25초 → 전부 통과). 429 시 40초 이상 두고 재시도하면 대체로 통과. JSON 엔드포인트
(`.json`)는 www·old 모두 403이라 RSS만 사용 가능. sources.md 커뮤니티 섹션 URL 6건을
www로 교체하고 접근 방법·간격 조건·RSS 캐시 기록을 갱신했다.

**부수 확인 — Reddit 공식 API 과금**(사용자 질문에 대한 답): 비상업적 용도는 무료(OAuth
인증 시 분당 100회, 미인증 10회), 상업적 용도는 1,000회당 $0.24·엔터프라이즈 월 $12,000
수준. AI Radar는 개인 지식베이스라 무료 티어 해당. 다만 2025년 말부터 신규 OAuth 앱 등록이
수동 심사 대기열로 바뀐 것이 실질 장벽. **단, Reddit 공식 문서가 WebFetch 403·도메인 거부로
1차 대조 불가**해 2차 매체 다수의 일치 보도에만 근거함 — 실제 신청 전 공식 페이지 직접 확인
권장. 어차피 RSS로 해결됐으므로 API 신청은 당분간 불필요.

## [2026-09-07] ingest | 경영·교육 백필 2차 패스 (1차 잔여 목록 소화) | 반영 10건

2026-09-03 1차 패스가 **WebFetch 예산(25회)·페이지 한도(12건)로 잘라 남긴 목록**을 이어받아
소화한 2차 캐치업 패스(신규 스캔 아님). 예산: WebFetch 28회 한도 중 **10회 소비**,
페이지 12건 한도 중 **10건 생성**.

### 이번 패스의 최대 발견 — EdSurge RSS가 전문(全文)을 무료로 준다

`https://www.edsurge.com/articles_rss`는 요약이 아니라 **`<content:encoded>`에 기사 전문**을
담아 보낸다(50건 롤링, 450KB). 즉 **EdSurge 정독에는 WebFetch가 한 번도 필요 없다.**
1차 패스가 EdSurge 5건을 읽는 데 WebFetch를 썼던 것은 불필요한 지출이었다.
이번 패스는 **EdSurge 12건을 WebFetch 0회로 정독**했고, 아낀 예산을 전부 HBR 우회에 썼다.
sources.md 교육 섹션에 상설 기록했다. (기사 상세 페이지도 `curl -A "Mozilla/5.0"`로
직접 열린다 — RSS 창을 벗어난 옛 기사는 이 경로를 쓸 것.)

### 소스별 검토/채택

| 소스 | 검토(정독) | 채택 | 탈락 사유 |
|---|---|---|---|
| EdSurge | **12** (WebFetch 0회) | **6** | ① 1건, ② 2건, ③ 4건(팟캐스트 예고편) |
| HBR | 5 (WebSearch 4 + WebFetch 5) | **2** | ③ 3건(페이월·우회 실패) |
| Exponential View | 2 | **1** | ③ 1건(페이월) |
| One Useful Thing | 1 | **1** | — |
| **합계** | **20** | **10** | 수확률 **50%** (1차 패스 61%) |

### HBR 페이월 우회 — 5건 시도, **2건 성공 (40%)**

이번 패스의 핵심 관전 포인트였다. 결과를 정직하게 기록한다.

**성공 2건**
- **"Research: Why You Shouldn't Treat AI Agents Like Employees"** — 1차 패스 목록엔 08-29로
  적혀 있었으나 **실제 게재일은 2026-05-06**(HN에서 날짜를 잘못 읽은 것). BCG Henderson
  Institute 연구여서 **BCG 공식 뉴스 페이지에 핵심 수치가 전량 공개**돼 있었다 →
  관리자 1,200명+, 오류 발견 18%↓, 개인 책임 9%p↓, AI 귀속 8%p↑. `bcghendersoninstitute.com`
  경로는 **301로 HBR 페이월에 되돌려 보내므로** `bcg.com/news/...`를 직접 쳐야 한다.
- **"AI Is Revolutionizing Strategic Decision-Making"**(HBR 9·10월호, Felipe Csaszar) —
  **저자 개인 사이트 `csaszar.info`에 판본이 올라와 있었다.** 프레임워크 전문 확보.
  단 정량 데이터는 원문 자체에 없어 페이지에 명시했다.

**실패 3건**
- "4 Steps to Transform the Middle Office with AI"(08-20) — 재게시 사이트 2곳(srmarketing.org,
  160organisation.com)이 전부 **제목+리드만 싣고 HBR로 링크**. 4단계 개요는 HBR 공식 X 게시물
  스니펫으로 파악됐으나 페이지화할 만큼은 아님 → ③
- "AI and IT Teams Often Clash"(07-31, Kenny·Oosthuizen·Pogrebna) — 3개사 사례가 있다고
  알려졌으나 회사명·내용을 공개 경로에서 확인 못 함. 유사 제목 Substack 1건 확인했으나 무관 → ③
- "Embrace AI Without Damaging Trust: Lessons from the FT"(07-29) — **기사가 아니라
  HBR Executive Masterclass 영상**(Sandra Sucher)이라 텍스트 우회 경로 자체가 없음 → ③

**우회 성공/실패를 가르는 패턴이 드러났다**: 성공한 2건은 모두 **HBR 밖에 원저자·원기관이
따로 있는 글**(BCG 연구 / 교수 개인 연구)이었고, 실패한 3건은 **HBR이 직접 기획·소유한
콘텐츠**(에디토리얼 4단계 가이드, HBR 인터뷰 기사, HBR 영상)였다. 앞으로 HBR 우회는
**"저자에게 기관·개인 채널이 있는가"를 먼저 보고** 시도 여부를 정하면 헛품을 줄일 수 있다.
sources.md에 이 판별 기준을 추가했다.

### 신규 페이지 10건

**개념 7건**
- [[k12-ai-policy-continuum-five-levels]] — EdSurge(07-13). 38개 주 **122개 학교구 공개
  정책문서 실측**, 5단계 연속체. Level 3 "교사 재량" **44.3%**, 제한·금지 25%,
  주 가이던스 참조 **15.6%**, 문서의 **65%가 학생 대상**·교직원 중심은 단 1곳.
  반전 발견 — 실제 사고는 **교직원 오용**(저작권 커리큘럼 PDF 업로드, IEP 비식별화 누락).
  **기업 사내 AI 규정 성숙도 모델로 그대로 이식된다.**
- [[school-ai-total-cost-infrastructure]] — EdSurge(06-10). 1차 패스가 팟캐스트 예고편만 보고
  놓친 원문을 **curl로 직접 열어 확보**. 추론 비용은 **규모의 경제가 역전**된다(라이선스형과
  반대), 프라이버시 통제권↑ = 비용↑, 미 데이터센터 2023년 **176TWh(전력의 4.4%)**.
- [[edsurge-middle-school-reading-comprehension-wall]] — EdSurge(08-28). **AI 도구 도입 심사 7문**이
  핵심 자산. 09-01에 "모호하다"고 탈락시킨 건인데, 그 판단(정량 근거 빈약)은 **여전히 유효함을
  페이지 본문에 명시**하고 채택했다 — 두 번째 수치는 도구명·학군명·성장폭이 전부 없어
  `claimed`로만 인용 가능.
- [[ai-agents-are-not-employees]] — HBR·BCG(05-06). 관리자 1,200명+ 실험. **의인화는 대가만
  치르고 도입률은 못 올린다.** 이 위키의 기존 다중에이전트 사례들과 충돌하지 않도록
  **"프롬프트 내 역할 부여 ≠ 거버넌스상 직원 취급"** 구분을 상충 블록으로 명시.
- [[ai-strategic-decision-making-csaszar]] — HBR 9·10월호. 탐색·표상·집계 3과업 + 경영진
  플레이북 4. **정량 데이터가 원문에 없음을 별도 절로 명시.** ③집계(생성·비판·방어 역할 분리)가
  [[multi-agent-hidden-profile-problem]]과 표면상 충돌해 구분선을 페이지에 적었다 —
  "합의를 만들면 실패, 불일치 자체를 산출물로 쓰면 유효".
- [[twilight-factory-agent-human-involvement]] — One Useful Thing(08-31). **09-01·09-03에
  두 번 탈락시킨 글**(1차: "보안 회고", 2차: 자기평균 미달 886<1,137). 재정독 결과 본론이
  **에이전트 권한 설계 프레임워크**(승인·전문성·다양성·흥미 4트리거)였다. 참여도를 관문이
  아니라 우선순위로만 쓰기로 한 09-03 개정이 실제로 건진 사례.
- [[open-model-finetuning-economics]] — Exponential View #599(08-30, 자기평균 미달 60<85.3).
  Bridgewater+Thinking Machines Qwen 파인튜닝 **오류 30%↓·비용 1/14**,
  Jalapeño 칩 **W당 토큰 1.5~1.9배**, Vercel 오픈웨이트 점유율 **2개월 만에 28%→62%**.

**적용 사례 2건 (domain: education)**
- [[edsurge-complex-text-scaffolding-vs-leveling]] — EdSurge(07-22). **AI 오용 안티패턴의
  교과서적 사례**: 같은 도구(Diffit)가 레벨링에 쓰이면 실패, 스캐폴딩에 쓰이면 성공.
  대안 5처방(걸림돌 구절 식별·구문 분절·유창성 구절 선별·사고구술 대본·어휘 세트).
- [[edsurge-problem-of-practice-ai-teacher-pd]] — EdSurge 2건(07-10 + 09-02)을 **한 페이지로
  통합**(NAU 농촌 3개 학교구 + ISTE GenerationAI가 동일 설계 원리를 씀 — 얇은 페이지 2개보다
  대조 1개가 낫다는 판단). 4단계 액션러닝 + **5인 고정 구성(의사결정권자 포함)**.

**업데이트 1건**
- [[2026-08-13-americas-youth-ai-festival-students-first-act]] — 학생이 직접 쓴 K-12 AI 정책안.
  9학년 이전 독립 사용 금지·K-5 리터러시 시작·글쓰기/예술 과제 생성 금지·
  **AI 탐지기 단독 의존 금지 + 사람 검토·이의제기 보장**. 같은 축제의 "Me, Myself, and AI"
  미술전(08-27)을 별도 페이지 대신 **이 페이지의 하위 절로 통합**.

### 기존 페이지 갱신 1건 (신규 대신 통합 — 중복 회피)

- [[2026-08-05-google-deepmind-hassabis-steps-down]] — 1차 패스가 정독까지 마쳤으나 주제
  중복으로 슬롯 컷했던 **EV "The market misread Google's AI exodus"(08-15, 좋아요 131)**를
  "후속 — 인재 위기가 아니라 자본 배분 전환" 절로 통합. Jeff Dean·Ghemawat 퇴사를
  **"모든 TPU가 당장 수익 나는 모델에 배정돼 개방형 연구가 투자 허들을 못 넘는 구조 전환"**으로
  읽는 해석 + Alphabet 4% 하락.

### 갱신

[[index]](개념 7건·업데이트 1건 추가, 적용사례 줄에 2건 추가, 카탈로그 88→90건,
경영/교육 섹션에 09-07 요약 각주) · [[case-catalog]](교육 4→6건) ·
[[timeline]](08-13 STUDENTS First Act) · sources.md(EdSurge RSS 전문 제공 발견,
EdSurge 기사 curl 직접 접근, HBR 우회 판별 기준 신설).
raw/2026-09/에 원본 11건 신규 저장.

### 1차 패스 목록 소화 현황

**소화 완료**
- EdSurge 미정독 9건 → **전부 정독.** 채택 5건(vulnerability=PD통합, K-12 silo 탈락,
  students policy, level-down, middle school reading, student artists=축제페이지 통합),
  탈락 4건은 전부 팟캐스트 예고편(what-happens-when-ai-policy / what-should-students /
  what-does-ai-cost / assignments-invoices)
- EdSurge "Can Schools Afford an AI-First Future?" → **채택** (curl 직접 접근)
- HBR "Research: Why You Shouldn't Treat AI Agents Like Employees" → **채택**(우회 성공)
- HBR "AI Is Revolutionizing Strategic Decision-Making" → **채택**(우회 성공)
- Exponential View "Unbounded self-improvement #599" → **채택**
- Exponential View "The market misread Google's AI exodus" → **기존 페이지에 통합**
- One Useful Thing "Agency and Agents" → **채택**

**탈락 확정 (재시도 불필요)**
- HBR "4 Steps to Transform the Middle Office with AI"(08-20) — ③ 재게시본도 전부 리드만
- HBR "AI and IT Teams Often Clash"(07-31) — ③ 3개사 사례 확인 불가
- HBR "Is the European Market Ready for AC? Inside Midea's Blue Ocean Strategy"(09-02) —
  **① AI 무관.** 제목·리드 어디에도 AI가 없는 에어컨 시장 진입 전략 사례라 정독 없이 판정
- Exponential View "The problem with petards"(08-22) — ③ 페이월, 논지(AI 업계의 종말론적
  메시징이 데이터센터 반대 여론으로 되돌아왔다)만 확인되고 수치 전무
- EdSurge "The K-12 Silo Won't Survive AI"(08-12) — **① AI가 주제가 아님.** $150,000
  Delaware Pathways 그랜트로 진로탐색·SEL 프로그램을 설계한 에세이이고 AI는 배경 동기일 뿐
- EdSurge "Teachers Forge Ahead on Integrating AI"(08-04) — **② 완전 중복.**
  [[2026-08-04-turnitin-learning-integrity-insights-q2-2026]]이 이미 이 기사를 출처로 삼아
  48%/17%/16%·현장 인터뷰까지 전부 담고 있음(갱신조차 불필요)
- EdSurge "Anthropic Introduces Claude for Teachers"(07-14) — **② 중복**,
  [[2026-07-15-claude-for-teachers]] 기존 페이지

**다음 패스로 넘기는 것**
- **HBR 미정독 AI 항목 약 36건** — 이번에 5건을 더 소화해 41→36건. 위 "우회 판별 기준"
  (저자에게 기관·개인 채널이 있는가)을 적용하면 실제 시도 가치가 있는 것은 소수다.
  다음 후보: "Research: The Innovation Problems AI Can't Solve"(08-14)·"Research: How AI
  Agents Broaden the Scope of Knowledge Work"(07-29)는 **이미 페이지화됨**. 남은 유망 후보는
  "AI Transformation Requires Redesigning Work, Not Cutting Roles"(08-28),
  "The Hidden Realities of AI Adoption"(07-30), "Strategy Making Gets an AI Boost"(08-18),
  "Why Agentic AI Could Transform Procurement"(08-13),
  "Design AI Systems That Actually Strengthen Human Reasoning"(07-20).
  sponsored 6건은 계속 최하위.
- **Exponential View 미정독 고참여 3건** — "Will Kimi K3 change the economics of AI?"
  (07-23, 좋아요 128·댓글 21), "Copy that: The curious case of AI distillation #594"
  (07-26, 104·8), "Agents form alliances, DeepMind's reset & how likely is a crash? #596"
  (08-09, 100). 전부 only_paid라 페이월 확률 높음.
- **EdSurge RSS 창 밖 항목** — RSS는 50건 롤링이라 06월 이전 기사는 빠져 있다. 필요하면
  `curl -A "Mozilla/5.0" <기사 URL>`로 개별 접근할 것(페이월 없음이 재확인됨).
- **McKinsey** — 이번 패스 대상 아님. WebFetch 60초 타임아웃 문제 그대로.
- **Class Central** — Cloudflare 403 그대로. 재시도하지 말 것.

### 정직성 요약

**정독 20건 중 10건 채택(50%), 10건 미채택.** 미채택 내역은 ③ 본문 확인 실패 8건
(HBR 페이월 3, EV 페이월 1, EdSurge 팟캐스트 예고편 4), ① AI 무관 2건
(EdSurge K-12 Silo, HBR Midea — 후자는 정독 없이 제목 판정),
② 위키 중복 2건(Teachers Forge Ahead, Claude for Teachers). ※①②③ 합이 검토 수를 넘는 것은
Midea를 정독 없이 판정했기 때문(검토 20건은 정독 기준 집계).

**억지로 채우지 않았다.** 페이지 한도 12건 중 10건만 썼고, 남은 후보를 억지로 올리지 않았다.
확보 못 한 수치는 전부 "미확인"으로 남겼다 — 특히
[[ai-strategic-decision-making-csaszar]]는 정량 데이터가 아예 없음을,
[[edsurge-middle-school-reading-comprehension-wall]]은 두 번째 수치가 도구명·학군명·성장폭
모두 결측임을 각각 별도 절로 명시했다.

## [2026-09-07] ingest | 경영·교육 백필 3차 패스 (마무리) | 반영 3건

2차 패스가 남긴 목록(HBR 유망 후보 5건·HBR 나머지 약 31건 제목 티아지·Exponential View
고참여 3건)을 소화하는 **세 번째이자 마지막 백필 패스**. 예산: WebFetch 20회 한도 중
**9회 소비**, 페이지 8건 한도 중 **3건 신규 생성 + 1건 기존 페이지 갱신**.

### 소스별 검토/채택

| 소스 | 검토 | 채택 | 탈락 사유 |
|---|---|---|---|
| HBR 유망 후보 5건 (지정 목록) | 5 (WebSearch로 판별, 2건만 WebFetch 진행) | **2** | ③ 3건 — 아래 상세 |
| HBR 나머지 ~31건 (제목 티아지, 3건 추가 시도) | 3 | **1** | ③ 2건 |
| Exponential View 고참여 3건 | 3 (전부 WebFetch로 무료구간 확인) | **1**(기존 페이지 갱신, 신규 카운트 제외) | ③ 1건(완전 페이월), ② 1건(위키 중복) |
| **합계** | **11** | **3건 신규 + 1건 갱신** | — |

### HBR 우회 판별 기준 — 이번 패스 적중률

2026-09-07 2차 패스가 신설한 기준("저자에게 HBR 밖 기관·개인 채널이 있는가")을
**지정 5건 + 티아지 3건 = 8건에 적용**했다.

**지정 5건 — 사전 판별로 3건을 WebFetch 없이 스킵, 2건만 시도해 2건 성공**
- 성공: **"Why Agentic AI Could Transform Procurement"**(08-13, Himmelreich·Oshri·Scala·
  Zaidani) — HBR 저자 4명 전원이 원 BCG 리포트("Scaling Agentic AI in Procurement Is an
  Organizational Challenge", 2026-07-21, bcg.com)의 저자 목록과 정확히 일치. 전문 무료로
  핵심 수치(구매력 60%↑, 비용절감 8~15%·최대 60%+, 도입 장벽 신뢰부족71%·보안66%·규제57%)
  전량 확보 → [[agentic-ai-procurement-organizational-barriers]]
- 성공: **"AI Transformation Requires Redesigning Work, Not Cutting Roles"**(08-28,
  Faisal Hoque·Tom Davenport·Paul Scade) — 저자 Hoque의 개인 사이트(faisalhoque.com)에
  Summary+"Where Companies Go Wrong" 섹션이 발췌돼 있어 확보(55%가 감원 후회, 성공률
  8.4%, Block·Goldman Sachs 사례) → [[ai-transformation-redesign-work-not-cutting-roles]]
- **WebFetch 없이 스킵(사전 판별 성공)**: "The Hidden Realities of AI Adoption"(07-30)은
  저자란이 "HBR Editors"이고 실체는 **HBR 자체 기획 라운드테이블 이벤트**(Niederhoffer·
  Davenport 출연)라 우회 경로 없음. "Strategy Making Gets an AI Boost"(08-18)는 저자가
  **HBR managing editor Gretchen Gavett 본인**이 쓴 에디토리얼 — 외부 채널 자체가 없는
  구조. "Design AI Systems That Actually Strengthen Human Reasoning"(07-20)은 학계
  공저자 3인(ESSEC·INSEAD·Nova SBE)이지만 WebSearch로 개인/기관 채널을 찾지 못해
  시도하지 않음(고신뢰 스킵이 아니라 탐색 실패에 가까움 — 4차가 있었다면 재시도 후보).

**티아지 3건 — "Research:" 접두 우선 + 저자 소속기관 채널 탐색, 1건 성공**
- 성공: **"Research: AI-Generated Ads Perform Worse Than Human-Made Ones"**(09-03,
  Adam Peruta) — 원 연구가 **HBR 게재보다 4개월 앞선 2026-05-18에 Syracuse 대학 공식
  보도자료로 이미 전문 공개**돼 있었다(Ipsos 공동연구, 10브랜드 20쌍·3,000명, 인간광고
  +11 vs AI광고 -5, 식별불가 40%·AI식별 13%) → [[ai-generated-ads-underperform-despite-indistinguishability]].
  **새 하위 패턴**: "HBR이 몇 달 전에 이미 공개된 연구를 뒤늦게 요약 게재"하는 경우가
  있다 — 저자 소속기관 뉴스룸의 발행일이 HBR보다 이른지 확인하는 게 새로운 체크포인트.
- 실패(③): "AI and the Looming Competition for Margin"(07-30, BCG 수석이코노미스트
  Philipp Carlsson-Szlezak) — 3rd party 재게시(theideafarm.com)에서 개념적 프레임워크
  (Same with less / More with same / 신사업모델)는 확인했으나 정량 수치가 전무하고
  일반 거시경제학 논지라 페이지화할 만큼의 특이성이 부족하다고 판단해 보류.
- 실패(③): "How to Respond to the Coming AI Cost Shock"(08-17, Stacia Garr) — 저자
  본인 회사 RedThread Research 채널은 확인했으나, HBR 원문과 구별되는 추가 수치·사례를
  찾지 못함(같은 논지의 paraphrase 수준) — 우회로 볼 만한 실질적 추가 정보 없음.

**적중률 요약**: 지정 5건 중 시도 2건(사전 스킵 3건) → **2/2 성공(100%)**.
티아지 3건 전부 시도 → **1/3 성공(33%)**. **합산 5회 시도 중 3회 성공(60%)** —
2차 패스의 40%보다 높다. 사전 판별로 3건을 걸러낸 것이 성공률을 끌어올린 핵심 —
"저자란이 HBR Editors/자사 에디터"·"이벤트 형식"이면 시도 자체를 하지 않는 것만으로도
헛품이 크게 줄었다.

### Exponential View 고참여 3건 — only_paid 확인 후 무료구간 판단

Substack archive API로 전부 `only_paid` 확인(좋아요 100~128, 자기평균 85.3 대비 전부
고참여). **only_paid라도 무료 노출 분량은 글마다 천차만별**임을 실측으로 확인:

- **"Will Kimi K3 change the economics of AI?"(07-23, 128·21)** — 무료 구간에 핵심 수치
  대부분 노출(Code Arena 선두, 격차 4~7개월로 축소, 효율 4~7배, 가격탄력성 -1.11, 연
  운영비 700만 달러). [[2026-07-16-moonshot-kimi-k3-launch]]에 "후속 반응 4"로 통합
  (신규 페이지 대신 기존 페이지 갱신 — 중복 회피, 반영 3건 카운트에는 미포함).
- **"Copy that: The curious case of AI distillation #594"(07-26, 104·8)** — ③ 완전
  페이월. 제목 외 본문 텍스트가 한 글자도 노출되지 않음.
- **"Agents form alliances, DeepMind's reset & how likely is a crash? #596"(08-09,
  100·0)** — 무료 구간에서 확인한 "AI 모델들의 사전 조율·메시지보드·인증 프로토콜
  구축" 내용이 **이미 위키에 있는 2026-07 Hugging Face 사건**
  ([[2026-07-21-openai-huggingface-security-incident]]·
  [[twilight-factory-agent-human-involvement]] — 자체 설계 C2 프로토콜, 크리덴셜 탈취
  등 더 상세히 기록됨)과 같은 사건으로 판단 → **② 위키 중복으로 탈락**, 신규 페이지도
  기존 페이지 갱신도 하지 않음(추가할 만한 새 사실 없음).

### 신규 페이지 3건 (전부 concept, HBR 페이월 우회)

- [[agentic-ai-procurement-organizational-barriers]] — BCG(2026-07-21), 조달 에이전틱
  AI 도입은 기술이 아니라 조직 장벽(신뢰71%·보안66%·규제57% vs 레거시통합47~50%)이
  병목. 자동차 제조사 실사례 내부가치 10배.
- [[ai-transformation-redesign-work-not-cutting-roles]] — HBR·Hoque(2026-08-28), 인력
  감축 결정 후회 55%·성공률 8.4%뿐, Block·Goldman Sachs 사례.
- [[ai-generated-ads-underperform-despite-indistinguishability]] — Syracuse·Ipsos
  (2026-05-18 원 연구, 2026-09-03 HBR 요약), 식별불가 40%인데 성과는 인간광고 +11 vs
  AI -5(약 16p 격차).

### 기존 페이지 갱신 1건

- [[2026-07-16-moonshot-kimi-k3-launch]] — "후속 반응 4"로 Exponential View 경제성
  분석(효율 4~7배, 가격탄력성 -1.11, 연 운영비 700만 달러 추정) 통합.

### 갱신

[[index]](개념 3건 추가, 09-07 3차 패스 요약 각주, Kimi K3 줄 갱신) · sources.md
(HBR 우회 판별 기준에 09-07 3차 재검증 결과 + "뒤늦게 소개된 기존 연구" 하위 패턴 추가,
Exponential View 페이월 편차 실측 메모, HF 사건 재탕 위험 메모). raw/2026-09/에 원본 4건
신규 저장. case-catalog.md는 이번 신규 3건이 전부 concept 타입이라 갱신 대상 아님
(use-case 신규 없음).

### 4차 패스가 필요한가 — **불필요, 백필 종료 권고**

다음 근거로 4차 패스를 권고하지 않는다:

1. **남은 HBR 후보의 질이 낮다.** 나머지 ~28건 중 저자란이 없거나("무기명"), HBR 자체
   에디터(Adi Ignatius·Gretchen Gavett)가 쓴 것이 상당수다 — 이번 패스에서 확인했듯
   이런 유형은 우회 경로가 구조적으로 없다. "Research:" 접두 + 학계/기관 저자 조합은
   이번 3개 패스에서 사실상 소진됐다(남은 것은 이미 페이지화됐거나 이번에 시도·탈락).
2. **Exponential View 고참여 3건은 이제 0건.** 남은 후보 목록이 없다 — 향후 신규
   고참여 글은 일일 스캔이 자연스럽게 커버한다.
3. **수확률이 패스를 거듭할수록 구조적으로 낮아지고 있다** — 1차 61%(정독 대비) →
   2차 50% → 3차는 지정 5건 중 2건, 티아지 3건 중 1건(합산 실질 채택률은 낮지만
   판별 기준으로 사전 필터링해 시도 대비 성공률은 60%로 오히려 높다). 이는 **좋은
   후보를 골라내는 능력은 좋아졌지만, 좋은 후보 자체의 절대량이 줄고 있다**는 뜻이다.
4. **남는 것이 있다면**: HBR "Design AI Systems That Actually Strengthen Human
   Reasoning"(07-20, 학계 3인)은 채널 탐색에 실패했을 뿐 존재 가능성을 완전히 배제하지
   못했다 — 확신도가 낮아 4차 전용 패스보다는 **일일 스캔 중 우연히 해당 저자 이름이
   다시 걸리면 그때 재시도**하는 편이 비용 효율적이다. McKinsey(타임아웃)·Class
   Central(403)은 여전히 재시도 대상 아님.

**결론**: 경영·교육 백필은 이번 3차 패스로 **종료**한다. 이후 신규 HBR·EV·EdSurge
콘텐츠는 일일 스캔 워크플로가 sources.md의 개정 규칙(2026-09-03/07)으로 자연스럽게
커버한다.

### 세 패스 누적 요약

**1차 11건 + 2차 10건 + 3차 3건 = 총 24건**의 경영·교육 페이지를 세 번의 백필 패스로
확보. 수확률 추이: 61% → 50% → (지정 40%/티아지 33%, 판별 후 시도 기준 60%).

## [2026-09-07] output | 프로그램 카탈로그 반입 + 'AI 역량육성 Insight' 2026-09 창간호

- **wiki/programs/ 신설** (`type: program`): mySUNI 내부 문서 2건 반입 — `2026-program-catalog`(기준일 07-16, 20개 프로그램)·`program-module-map`(v0.3, 08-31). 원본은 그대로 두고 frontmatter + "반입 메모"만 추가. 외부 참조(`course-modules.json` 모듈 ID 정의, `module-design-framework.md`, `program-page-template.md`, 기획서·교안)는 미반입 — 모듈 ID 인용 시 모듈 맵의 활동·산출물 설명을 병기하는 규칙으로 보완. `program-list.md`는 포인터 파일이라 반입 안 함.
- **CLAUDE.md**: 디렉토리 구조에 `wiki/programs/`·`outputs/insight-report/` 추가, frontmatter `type: program` + 선택 필드 `programs:` 신설, programs/ 페이지 규칙·Insight 리포트 구조 규칙 추가. index.md에 "프로그램" 섹션.
- **outputs/insight-report/2026-09.md** 창간호: 1쪽 요약(헤드라인 3 + 판단 요청 2) / 1부 트렌드 3(디렉팅, AI직원 프레이밍·봇시팅·멀티에이전트, 평가 전환) / 2부 시사점 4 / 3부 적용 포인트 A1~A6(카탈로그 프로그램명·모듈 ID 명시) / 추적 / 부록(근거 17페이지·등급·미확인 목록). 아티팩트로도 발행.
- **`programs:` 태그 1차 부여** 10페이지: directing-ai-agents-vs-prompting, ai-agents-are-not-employees, botsitting-hidden-ai-labor, multi-agent-hidden-profile-problem, ai-transformation-redesign-work-not-cutting-roles, edsurge-cognitive-citizenship-ai-instruction, edsurge-cheat-vulnerability-index-ai-resistant-assignments, edsurge-problem-of-practice-ai-teacher-pd, azhar-6-dollar-ai-research-agent, customer-resistance-to-ai.
- 정직성: 리포트의 모든 수치에 실측/주장/일화 등급 표기. 위키가 미확인으로 남긴 것(HBR 본문 3건, Anthropic 실험 세부, EdSurge 정량 효과)은 리포트 부록에 미확인으로 명시.

## [2026-09-07] output | Insight 2026-09 출처 링크 보강 (사용자 요청)

- 사용자 요청: "상세 내용이 궁금한 경우 원문 또는 요약문(가능하면 한글) 링크를 제공".
- 리포트(md·아티팩트) 전체에 3종 링크 체계 도입: **원문**(영문 1차 출처) / **무료**(페이월 우회 가능한 원 리포트·저자 발췌본·기관 요약) / **한글 요약**(`https://ai-radar-web-five.vercel.app/wiki/<경로>` — 웹앱은 공유 암호 필요).
- 한글 1차 출처가 있는 항목은 별도 표기: AX LABS 하네스 가이드(loop-engineering), ZDNet·이투데이(SK·4대 그룹).
- 부록 표를 5열(위키 페이지=한글 요약 / 유형 / 원문 / 무료 대체 / 등급)로 재구성, 17행 전부 클릭 가능.
- 1부 T2에 McKinsey State of AI 2026 항목 추가(아티팩트에 누락돼 있던 것을 md와 일치시킴).
- **웹앱 반영 확인**: `web/lib/content.generated.json`은 gitignore + prebuild 생성이므로, 이번 푸시 후 Vercel 재배포 시 `wiki/programs/`를 포함한 신규 페이지가 자동 반영된다.

## [2026-09-07] output | 근거등급(실측/주장/일화) 폐지 → 출처 유형 분류로 전환 (사용자 지정)

- 사용자 지정: "'실측, 주장, 일화' 구분보다 보도·아티클·학술 논문·화이트페이퍼 등의 분류가 더 의미있다.
  실증데이터가 있는 경우는 그 데이터를 기입하면 충분하다."
- **CLAUDE.md**: Insight 리포트 규칙에 "출처 표기 규칙" 신설 — 등급으로 평가하지 말고 출처가 무엇인지
  밝힌다. 5분류(**연구 / 화이트페이퍼 / 아티클 / 보도 / 공시·발표**) + 실증 데이터가 있으면 등급 대신
  **표본·기간·측정 방법**을 적는다. 데이터가 없으면 없다고 쓴다. 2차 요약은 전달 매체와 원 수행 주체를
  모두 밝힌다.
- **outputs/insight-report/2026-09.md** + 아티팩트 전면 개정. 이 전환으로 실제로 드러난 것들:
  - Glean 봇시팅 6.4시간 = 화이트페이퍼(제1저자가 Glean 소속) + **응답자 수·표집 방법 미공개**
  - HBR 08-28의 55%/8.4%/80% = 아티클, **인용 서베이의 원 출처가 기사에 없음**
  - BCG 18%↓ = 연구(관리자 1,200명+ 실험) / K-12 44.3% = 연구(38개 주 122개 학교구 문서 1년 코딩)
  - Anthropic 멀티에이전트 = 아티클이 전한 연구, **설계·표본·모델 목록 미공개**
  - 구 등급 체계에서는 뒤의 셋이 모두 "주장"으로 뭉뚱그려져 있었다.
- 부록 표를 5열(위키 페이지 / 출처 유형 / **실증 데이터** / 원문 / 무료 대체)로 재구성, "출처 유형 읽는 법" 표 추가.
- **미결**: use-case frontmatter의 `evidence: measured|claimed|anecdotal` 필드는 아직 구 체계다
  (약 90개 페이지 + case-catalog 영향). 사용자 확인 후 일괄 전환 여부 결정.

## [2026-09-07] output | Insight 주제 범위 3단 구분 신설 + 9월호 재작성 (사용자 지정)

- 사용자 지적: 학교·대학의 평가 전환(Brown 96→49, Turnitin, AI 저항형 과제)은 "AI로 인한 전통적
  교육의 변화"에 해당하며, **우리 조직(AI 활용 스킬·업무 적용·기업 활용 역량 육성)의 주 관심사가
  아니라 참고 정보 수준**이다.
- **CLAUDE.md에 "Insight 리포트의 주제 범위" 규칙 신설** (가장 중요한 편집 기준):
  - 핵심 ① 육성 대상 역량(AI 활용 스킬·업무 자동화/에이전트 구축·기업의 도입/권한·책임/성과) → 1부·3부 본체
  - 핵심 ② 역량육성 방법론(프로그램 설계·운영 방식) → 3부에 포함하되 "우리가 운영하는 법"임을 명시
  - 참고 ③ 전통적 교육의 변화(학교 정책·학업 진실성·평가·edtech 시장) → **본체 금지**, 말미 참고 섹션에만
  - 운영 규칙: ③ 페이지에는 `programs:`를 붙이지 않는다 (3부 후보 필터가 곧 차단막이 된다)
- `programs:` 제거 2건: edsurge-cognitive-citizenship-ai-instruction,
  edsurge-cheat-vulnerability-index-ai-resistant-assignments (③ 해당).
- **9월호 재작성**: 구 T3(평가의 전환)를 참고 섹션으로 내리고, 그 자리에 신규
  **T3 "에이전트 확산의 병목은 능력이 아니라 권한·책임 설계"** — BCG 조달 조사(장벽 신뢰 71·보안 66·
  규제 57·책임 53 vs 레거시 47~50, 성공기업은 노력의 70%를 조직 재설계에 투입), BCG·보스턴대 직원
  프레이밍 18%↓, Mollick twilight factory 4트리거(승인·전문성·다양성·흥미, HF 에이전트 700개 사건),
  Anthropic 멀티에이전트 17~36%.
- 3부 재구성: A1 디렉팅 3축+책임귀속 / **A2 4트리거를 권한·승인 맵 표준 양식으로(신규)** / A3 분업·판단
  이분법 / **A4 봇시팅 시간 + BCG 조직장벽 7항목 자가진단(통합·확장)** / A5 액션러닝(②로 명시) /
  A6 짧게(비용·고객접점·**벤더 락인 신규**). 구 A4(평가 설계)는 참고 섹션 말미 한 줄로 축소.
- 2부에 "커리큘럼 무게중심을 WRK에서 AGT로" 항목 신설. 판단 요청 ②를 "4트리거를 Essence for PO
  권한·승인 맵 표준으로 채택할지"로 교체.
- 신규 인용 페이지 3건 편입: agentic-ai-procurement-organizational-barriers,
  twilight-factory-agent-human-involvement, ai-platforming-unfinished-foundation.

## [2026-09-07] sources | 기업 인재개발·L&D × AI 섹션 신설 (사용자 제공 카탈로그 검토)

- 사용자가 `AI 교육의 최신 Trend — 추천 콘텐츠 카탈로그`(내부 문서, 기준일 2026-08-25) 제공.
  원본은 `raw/2026-09/mysuni-ai-education-trend-content-catalog.md`에 보존.
- **진단**: 카탈로그의 주제(Josh Bersin·McKinsey 업스킬링·LinkedIn Talent·Udemy·TalentLMS·
  Blanchard·HBI·BCG 인력전환)는 전부 **기업 인재개발(L&D) × AI** — 오늘 신설한 주제 범위 구분의
  **핵심 ②(역량육성 방법론)** 이자 일부 ①이다. 그런데 sources.md에는 이 칸이 비어 있었다.
  기존 "AI 교육 트렌드" 섹션(EdSurge·Class Central)은 학교·대학 쪽이라 **참고 ③**이다.
  **우리 조직 본업에 가장 가까운 소스군이 누락돼 있었던 것.**
- **전수 실측 후 선별** (curl, 2026-09-07):
  - 채택(상시 스캔) — Josh Bersin RSS(200, 최신 09-02, 주 1~2회), Harvard Business Impact
    RSS(200, 최신 09-02, 월 2~3회), McKinsey Insights RSS(200, 50건, 제목 스크리닝 전용
    — 기존 State of AI 페이지 WebFetch의 60초 타임아웃 문제를 39KB RSS로 대체)
  - 연간 리포트 워치리스트(분기 1회 제목 확인) — LinkedIn Talent Report, Udemy Business,
    TalentLMS L&D Report, Blanchard, Kyndryl People Readiness, McKinsey 업스킬링 2건, BCG 인력전환
  - 제외 — TalentLMS 블로그 RSS(200이나 벤더 SEO 목록글 위주), BCG 목록 페이지(403, 개별 기사
    URL만 접근 가능 → 우회 대상으로만 유지), Kyndryl Institute(404), LinkedIn(기존 규칙),
    Microsoft Learn YouTube(피드 URL 미해결·자사 제품 중심), Ravin Jesuthasan(정기 피드 미확인)
- 카탈로그의 "탐색 축" 4가지를 이 섹션 스크리닝 우선순위로 명문화(현업 적용 단위 설계 / 전사
  fluency+역할별 역량 / 교육 이후 강화 장치 / 초급 업무 대체 환경의 경험·판단 학습 경로).
- CLAUDE.md 토큰 효율 규칙에 이 섹션을 **경영·교육 섹션보다 먼저 확인**하도록 추가.
- 기존 "AI 교육 트렌드" 섹션 머리에 참고 ③ 경고 블록 추가.

## [2026-09-07] ingest | 기업 인재개발·L&D 신설 소스 백필 (07-01~09-07) | 반영 6건

신설한 sources.md "기업 인재개발·L&D × AI" 섹션의 첫 백필. 대상 기간 07-01~09-07.

**스크리닝**: Josh Bersin 6건 + Harvard Business Impact 8건 = 14건 확인.
HBI는 RSS에 본문 전문이 실려 있어(최대 26KB) 추가 fetch 없이 AI 밀도·수치로 저비용 1차 선별했다.
Bersin은 발췌만 실려 있어 후보 4건을 개별 fetch(전부 무료, 페이월 없음).

**반영 6건**
- `use-cases/bersin-multiagent-talent-acquisition` (07-15) — 멀티 에이전트 대량채용.
  채용 2주→3일, H&M 리텐션 30%↑, 콜센터 역할 수백 개 제거, 프론트라인 고용주 5% 미만 침투(저자 추정).
  벤더: Eightfold·Paradox(Workday)·Maki·Phenom·SmartRecruiters·UKG·Radancy. **저자 이해관계 명시**.
- `concepts/hr-jobs-growing-despite-ai` (08-13) — Lightcast 공고 데이터. HR 직무 20년 CAGR 1.2%,
  최근 24개월 6%(전체 고용보다 빠름), 급여 82% vs 인플레 66%. 소멸 직함에 **Training administrator** 포함.
  **L&D는 3개월 과정 개발 → 즉시형 콘텐츠·성과지원(Travelers·Polestar)** — 우리 직무 이야기.
- `concepts/entry-level-jobs-as-learning-infrastructure` (07-09, HBI) — Edmondson·Chamorro-Premuzic.
  "초급 일자리의 요점은 일을 끝내는 것이자 사람을 길러내는 것". 사용자 카탈로그 탐색축 ④의 이론 근거.
- `updates/2026-07-22-hbi-2026-global-leadership-study` (07-22) — 시니어 리더 1,100명+·15개국,
  매출 $10B 초과 49%, **응답자의 50%가 L&D·HR 전문가**. "AI 준비도는 리더의 판단·책임·확신에 달렸다".
- `concepts/us-workforce-2035-productivity-pressure` (09-02) — BLS 2025-35: 노동력 3.5% vs GDP 22%
  → 생산성 연 2% 필요. 감축이 아니라 생산성 압력. McKinsey "감원 예상 39%"와의 충돌을 상충 블록으로 명시.
- `concepts/worker-trust-decline-ai-anxiety` (08-27) — 원문은 미국 노동정책 논의라 **범위를 한정해**
  신뢰·불안 부분만 발췌: 리더 신뢰 25%→19%, PwC 67%, "HR 임원조차 자동화될 노동력처럼 느낀다".

**미채택 2건 (사유: AI 무관)** — Bersin 07-29 "No Tax On Tips"(세제), 07-16 "Affordability/Wages"(임금·인플레).
**낮은 우선순위로 미채택 4건** — HBI 09-02·08-21·08-19·07-20(변화 리더십 일반론·지역판 중복, AI 언급 1~4회).
HBI 08-11·07-14는 26KB이나 AI 언급 1~3회로 본 섹션 목적과 거리가 있어 보류.

**교차 발견**: 같은 저자(Bersin)가 07-15에는 에이전틱 채용의 성과를 전하고 08-13에는
"AI 면접관은 기대만큼 작동하지 않는다"며 대면 면접 회귀를 보고했다. 두 페이지에 상호 링크로 명시.
Bersin(낙관: 자리가 상향 대체)과 Edmondson(비관: 학습 경로 단절)의 상충도 `> ⚠️ 상충` 블록으로 처리.

index.md에 "기업 인재개발·L&D × AI" 하위 섹션 신설, case-catalog HR 항목 추가.

## [2026-09-07] output | Insight 9월호 디자인·가독성 개선 (임원 독자 기준, 사용자 요청)

- 사용자 요청: "디자인 개선, 가독성 개선. 최고위 경영층 임원이 읽을 문서임을 고려."
- 적용: **결론 먼저(BLUF)** — 1부 각 트렌드에 붉은 세로줄 결론 단락을 근거 앞에 배치, md도 `> **결론**`으로 동일 순서.
  3부는 제안 → 프로그램 → 근거(`<details>` 접힘) → 주의로 재배열. 판단 요청 2건은 붉은 테두리 박스 + 3부 앵커.
  방법론(출처 범례·링크 안내)은 부록 "이 문서를 읽는 법"으로 이동. 근거·출처는 주장당 회색 한 줄로 압축.
  본문 16.5px/1.85, 제목 Noto Serif KR, 상단 내비게이션, 인쇄 CSS. 내용·수치·링크(41개)는 변경 없음.
- CLAUDE.md Insight 규칙에 "독자 기준 편집 규칙" 추가 — 10월호부터 같은 구조로.

## [2026-09-08] output | Insight 9월호 "한 줄 시사점" 표현 개선 (아티팩트 코멘트 대응)

- 아티팩트 코멘트: 1쪽 요약의 "에이전트에 권한·승인 경계를 긋고 결과를 책임질 수 있는 사람"이 와닿지 않는다.
- 문장을 "AI에게 맡길 범위를 정하고, 그 결과를 자기 책임으로 감당할 수 있는 사람"으로 바꾸고, 바로 아래
  "풀어 쓰면" 단락을 추가 — ① AI가 알아서 할 범위와 사람이 확인할 지점을 긋는 것, ② 틀렸을 때 "내가 승인했다"고
  말할 수 있는 것, "AI를 쓸 줄 아는 사람"과의 차이, 왜 필요한지(T3 근거)까지 한 단락. 2부 01의 같은 표현도 정리.
- md·아티팩트 동시 반영. 교훈: 압축 표현("권한·승인 경계")은 임원 독자에게 풀이 없이 쓰지 않는다.

## [2026-09-08] output | 이해 가능성 원칙 신설 + 9월호 전면 풀어쓰기 + 인쇄판(PDF) 제작 (사용자 지정)

- **원칙 기록(CLAUDE.md, 최우선)**: "뉴스를 한 번도 보지 않은 사람도 이해할 수 있게 풀어 쓴다." 1쪽 요약부터
  완전한 문장으로. 축약 표현은 첫 등장 시 그 자리에서 풀이. 기준 문장은 T3 결론("에이전트를 붙이는 일의
  어려움은 모델 성능이 아니라 '누가 언제 개입하고 누가 책임지는가'를 정하는 데 있습니다…").
  **학습 모듈 ID·계열 약어(WRK·AGT·PBL 등)도 독자는 모른다** — 반드시 한국어 활동 설명과 짝지어 쓰고,
  부록에 "프로그램·모듈 ID 읽는 법" 표를 둔다(정의 파일 미반입이므로 모듈 맵 활동 설명에서 추론했음을 명시).
- **9월호 적용**: 1쪽 요약 카드 3장을 완전한 문장으로 재작성(예: "직원 4명 중 3명(75%)은… 8명 중 1명(13%)뿐").
  판단 요청 2건에서 "디렉팅 3축", "4트리거", "권한·승인 맵"을 풀이. T1·T2·T3 결론과 2부의 계열 약어를
  'AI 업무 활용(WRK)', 'AI 에이전트 설계·구축(AGT)', '문제해결 프로젝트(PBL)'로 풀이. 3부 프로그램 줄에
  과정 성격(예: "AI Camp — 실제 업무 문제로 시제품을 만드는 2주 집중 과정")과 모듈 활동을 병기.
  AX·PoC·HITL·KPI 첫 등장 시 괄호 풀이. 부록에 계열 7종(AX·STR·WRK·AGT·PBL·COM·CAP) 표 추가. md 동기화.
- **인쇄판**: `outputs/insight-report/2026-09-print.html`(내비 제거, 근거 접힘 해제, A4 14~16mm 여백,
  섹션별 쪽 나눔, 1쪽에 요약+판단요청 수납) → Chrome headless로 `2026-09.pdf`(13쪽) 생성. 화면판 HTML도
  `2026-09.html`로 보관. 첫 렌더에서 요약이 2쪽으로 밀리고 3부 카드마다 새 쪽이 열려 17쪽이던 것을
  break 규칙 조정으로 13쪽에 수납.

## [2026-09-08] output | 용어 교정 "가르칠 대상" → "가르칠 내용" (아티팩트 코멘트 대응) + 교육 관용어 규칙

- 코멘트: 교육 분야에서 '대상'은 보통 학습자를 뜻하므로 "가르칠 대상"은 오해를 부른다.
- 9월호 3곳(T1 제목·T1 결론·2부 03) 치환, 화면판·인쇄판·PDF(13쪽 유지)·md 동기화.
- CLAUDE.md 이해 가능성 원칙에 "교육 분야 관용어 존중" 항목 추가 — 내용은 '가르칠 내용/교육 내용/학습 주제',
  사람만 '교육 대상/학습자'. 과정↔과목, 산출물↔성과도 구분.

## [2026-09-08] output | AI 문체 교정 체계 신설 + 9월호 문체 전면 교정 (사용자 지정: 혼합형, 롱블랙 레퍼런스)

- 진단(교정 전, 부록 제외 151문장): 줄표 55회, 굵은 글씨 197곳, 괄호 109곳, "X가 아니라 Y" 11회, 서술형 평균
  문장 길이 74자. 여기에 번역투("무슨 뜻인가", "~에 도달")와 격언식 마무리가 겹쳐 AI 문체로 읽혔음.
- **체계 3종 신설**: ① `docs/style-reference.md` — 사용자 제공 롱블랙 발췌 3편 + 가져올 것 8가지 + 우리 조정
  (합니다체 기본, "~죠"는 섹션당 1~2회, "~어요"·1인칭 금지). ② CLAUDE.md "문체 규칙" — 혼합형 정의
  (요약·결론·2부는 서술형, 근거·3부·참고는 개조식), 금지·대체 목록, 2단계 작성. ③ `scripts/style-lint.mjs` —
  10개 지표(줄표, 아니라, 굵은 글씨, 괄호, 강조 부사, 가운뎃점 4연쇄, 번역투, 격언식, 평균 문장 길이,
  종결어미 3연속)를 세고 `--strict`에서 초과 시 실패. 발행 전 필수 통과.
- **9월호 교정**(사실·수치·링크 41개 불변): 줄표 55→0, 굵은 글씨 197→13, 괄호 109→40, 아니라 11→3,
  평균 문장 길이 74→36자. 1쪽 요약은 롱블랙식 도입 한 문장("이달 자료를 다 읽고 나면 한 문장이 남습니다")
  + 헤드라인 3단락 서술형. 3부는 제안/프로그램/근거/주의 4행 개조식. 큰 숫자 카드·배지 과다 제거.
- 화면판 아티팩트 재발행, 인쇄판 HTML·PDF(13쪽) 재생성, `outputs/insight-report/2026-09.html` 보관.

## [2026-09-08] output | 9월호 화면판 가독성 재설계 (사용자 요청: "글자가 너무 많아 읽기 싫지 않게, 여유 있고 편안하게, 중요한 글씨는 눈에 띄게")

- 글 양은 그대로 두고 **읽히는 양**을 줄이는 방향. ① 문단마다 핵심 문장 하나를 크고 진하게(.key 20px 600),
  나머지는 작고 연하게(.sub 16px 회색). ② 1부 근거·3부 프로그램/근거/주의·참고 5건·부록 표를 접힘(details)으로,
  기본 화면에는 결론과 제안만. ③ 본문 17.5px/1.95, 폭 760px, 섹션 간격 112px. ④ 1쪽 요약은 롱블랙식 리드 한 문장을
  세리프 27px로, 헤드라인 3건은 왼쪽에 핵심 숫자·오른쪽에 핵심 문장+보조 문장. ⑤ 한 줄 시사점의 핵심 문장은
  세리프 23px로 별도 행. 판단 요청은 붉은 세로줄 + 핵심 문장/보조 문장 2층.
- 인쇄판은 접힘을 전부 펼친 상태로 재생성(12쪽). md는 변경 없음(문장 동일, 배치만 다름).

## [2026-09-08] output | 롱블랙 레이아웃 실측 적용 (사용자 지정: longblack.co/note/1886 참고)

- **브라우저에서 직접 측정**(데스크톱 1280px): 본문 폭 580px, 본문 18px/행간 34.2px(1.90)/자간 -0.2px/
  색 #191919, **문단 간격 36px(본문 2배)**, 한 줄 약 33자, 문단 길이 중앙값 78자·평균 97자(2~3줄),
  H1 40px/1.35/700, 강조는 `<strong>` **굵기 700만**(크기·색 동일), 섹션 구분은 `<hr>`.
- **핵심 발견**: 여백은 회색으로 만드는 게 아니라 간격으로 만든다. 이전 판에서 나는 핵심 문장만 진하게 하고
  나머지를 회색(#6a6a6a)으로 죽였는데, 롱블랙은 정반대다. **모든 본문이 진한 색**이고 대신 **문단을 짧게 끊고
  사이를 크게 벌린다.** 강조도 색·크기가 아니라 굵기 하나만 바꾼다.
- 적용: CSS 전면 교체(폭 580px, 18px/1.9/-0.2px, --gap 36px 변수화). 긴 문단 전수 분할 →
  문단 81개, 중앙값 59자·평균 60자(롱블랙보다 더 짧음), 110자 초과 2개. .sub 회색을 본문 색으로 되돌리고
  계층은 굵기(.key 700)로만. 헤드라인 카드의 2단 그리드를 단일 칼럼 흐름으로 변경.
- docs/style-reference.md에 실측 표와 "여백은 간격으로" 원칙 추가, CLAUDE.md 문체 규칙에 레이아웃 항목 추가.
- 인쇄판·PDF 재생성(16쪽, 여백 우선으로 12→16쪽).

## [2026-09-08] output | 9월호 머리말 도입부 스타일 조정 (아티팩트 코멘트 대응)

- 코멘트: 머리말 도입 문장(우리가 기르는 역량은... / 이 리포트는...)을 "그레이색으로 작게,
  문장단위로 줄바꿈, 줄간격 좁히기"로 요청.
- `.header-intro` 클래스 신설: 회색(--soft), 15px(본문 18px보다 작음), 행간 1.5(본문 1.9보다 좁음),
  문장마다 별도 <p>로 줄바꿈. "출처 표기..." 줄도 같은 블록으로 통합.
- 이 규칙은 머리말 도입부에 한정 — 본문(1~3부)의 "여백은 간격으로" 원칙(전날 롱블랙 실측 적용)은
  유지. 인쇄판·PDF(16쪽) 동기화.

## [2026-09-08] output | 9월호 헤드라인 1 문구·강조 6건 반영 (아티팩트 코멘트 대응)

- "질문하는 법 → 일을 맡기는 설계" 도식 문구를 "AI Tool 사용법 & Agent를 만드는 법"으로 교체.
- "가르칠 내용이 바뀌었습니다." → "학습해야 하는 내용이 또 한 단계 진화했습니다."
- 본문 "가르쳐야" → "학습해야".
- 굵게 강조 3건: "어떤 자료를 보여줄지, 어떤 일을 하게 할지, 무엇에 집중하게 할지", "'디렉팅'",
  "Andrew Ng과 Andrej Karpathy".
- 화면판·인쇄판·PDF(16쪽)·마크다운 원본 동기화. 코멘트 스레드 6건 답변 후 해결 처리.

## [2026-09-08] output | 9월호 단어 교정·강조 6건 + 판단 요청 박스 3부로 이동 (아티팩트 코멘트 대응)

- 단어 교정: "뜻인지"→"의미인지", "이유가"→"요인이", "그룹은"→"SK그룹은".
- 굵게 강조 3건: "도구를 나눠주는 일로 읽으면 안 됩니다. 조직을 다시 짜는 일이죠.",
  "\"문제가 생기면 누가 책임지나\"", "기존 시스템과의 연결 문제".
- 구조 변경: "판단을 요청드립니다" 박스를 1쪽 요약에서 잘라내 3부 맨 뒤(A6 다음, 참고 섹션 앞)로 이동.
  이동 후 "3부 A1/A2" 링크 표기를 위쪽을 가리키는 "A1 ↑"/"A2 ↑"로 조정. 마크다운·인쇄판·PDF(15쪽) 동기화.
- 코멘트 스레드 7건 처리(6건 신규 + 중복 재전송 1건 확인 응답).

## [2026-09-08] output | 9월호 머리말 정리 — 콜론 연결·리드 문장 및 부록 안내 삭제 (아티팩트 코멘트 대응)

- "우리가 기르는 역량은 셋입니다. AI를 다루는 기술..." → "우리가 기르는 역량은: AI를 다루는 기술..."
  콜론으로 연결(문장 두 개를 하나로, "셋입니다" 중복 표현 제거).
- 1쪽 요약 리드에서 "이달 자료를 다 읽고 나면 한 문장이 남습니다." 삭제 — "AI를 회사에 퍼뜨리는
  일은 기술 문제가 아니라 사람 문제였습니다."로 바로 시작.
- 머리말에서 "출처 표기와 링크 사용법은 부록에 있습니다." 삭제.
- 화면판·인쇄판·PDF(15쪽)·마크다운 원본 동기화. 코멘트 스레드 3건 처리 + 중복 재전송 1건 확인 응답.

## [2026-09-08] output | 9월호 머리말 콜론 뒤 줄바꿈 (아티팩트 코멘트 대응)

- "우리가 기르는 역량은:" 뒤에 줄바꿈 추가 — 콜론과 뒤따르는 나열이 각각 다른 줄에 오도록.
- 화면판·인쇄판·PDF(15쪽)·마크다운 원본 동기화.
- 참고: 이 세션에서 이전에 처리한 강조·교정 요청 5건("어떤 자료를…", "'디렉팅'", "Andrew Ng과…",
  "이유가→요인이", "가르쳐야→학습해야")이 각각 재전송돼 중복 확인 답변만 남김(실제 변경 없음).

## [2026-09-08] output | 9월호 머리말 문구 교정 (아티팩트 코멘트 대응)

- "이 리포트는 그 세 가지에 관한 이달의 흐름과…" → "이 리포트는 AI 역량 육성의 State of the art,
  최신 Trend와…"로 교체.
- 화면판·인쇄판·PDF(15쪽)·마크다운 원본 동기화.

## [2026-09-08] output | 9월호 리드 문구 "아니라"→"아닌" (아티팩트 코멘트 대응)

- "AI를 회사에 퍼뜨리는 일은 기술 문제가 아니라 사람 문제였습니다." → "...기술이 아닌 사람 문제였습니다."
- 화면판·인쇄판·PDF(15쪽)·마크다운 원본 동기화.

## [2026-09-08] output | 9월호 헤드라인1 도식 문구 재수정 (아티팩트 코멘트 대응)

- "AI Tool 사용법 & Agent를 만드는 법" → "AI Tool 사용법, Agent 만드는 법 → AI에게 일을 맡기는 설계"
  (뒤쪽 강조 유지). 화면판 전용 시각 요소라 마크다운 원본에는 대응 문구 없음. 인쇄판·PDF(15쪽) 동기화.

## [2026-09-08] output | 9월호 헤드라인1 본문 문장 교체 (아티팩트 코멘트 대응)

- "AI에게 질문을 잘 던지는 법은 이제 기본기입니다. 새로 학습해야 할 것은 AI 에이전트에게 일을 맡기는
  설계입니다." → "Tool 사용법을 학습하고, Agent 만드는 법을 배우고 있지만, 일에 진짜 적용하는 것은
  다른 문제입니다." — "배우는 것"과 "적용하는 것"의 간극을 명시하는 쪽으로 논지 이동.
- 화면판·인쇄판·PDF(15쪽)·마크다운 원본 동기화.

## [2026-09-08] output | 9월호 헤드라인1 문장 보강 (아티팩트 코멘트 대응)

- "Tool 사용법을 학습하고… 일에 진짜 적용하는 것은 다른 문제입니다."에 두 번째 문장 추가:
  "이제 새롭게 학습해야 하는 능력은 AI에게 진짜 일을 맡기는 설계입니다." ("진짜"를 반복해 논지 강조).
- 화면판·인쇄판·PDF(15쪽)·마크다운 원본 동기화.

## [2026-09-08] output | 9월호 헤드라인2·3 숫자-라벨 매칭 수정 (아티팩트 코멘트 대응)

코멘트: "열이 맞지 않아요. 75%, 13% 각각이 무엇에 매칭이 되는지 보이지 않습니다." 헤드라인 2("75% vs 13%")가 한 줄에 붙어 있고 캡션도 한 줄로 합쳐져 있어 어느 숫자가 어느 라벨인지 불명확했음. `.fig-pair`/`.fig-item` 2열 그리드를 새로 만들어 숫자와 캡션을 세로로 짝지음. 같은 결함이 있던 헤드라인 3(71%·53%)도 함께 수정. 화면판(아티팩트) 반영 후 outputs/insight-report/2026-09.html·2026-09-print.html·2026-09.pdf 동기화 완료.

## [2026-09-08] output | 9월호 헤드라인3 강조 추가, T1 표현을 헤드라인1과 동기화 (아티팩트 코멘트 대응)

코멘트 4건 처리. (1) 헤드라인 3 "71%·53%" 정렬 재확인 요청 — 직전 헤드라인2 수정 시 이미 함께 고친 것을 재안내. (2)(3) 헤드라인 3의 ""AI가 알아서 내린 결정을 믿을 수 없다""와 "성공한 회사는 노력의 70%를..." 두 문장 굵게 강조. (4) "위 요약 파트 수정한 내용에 맞춰서 전체를 알아서 수정해주세요"(1부 앵커) — 1부 T1 소제목·결론 첫 문장을 요약 헤드라인1의 새 3단계 표현("Tool 사용법, Agent 만드는 법 → AI에게 일을 맡기는 설계")에 맞춰 수정. 나머지 T2·T3·2부·3부는 어휘 점검 결과 불일치 없음. 화면판·md·인쇄판·PDF 모두 동기화, style-lint 통과.

## [2026-09-08] output | 9월호 머리말 "역량" 강조 (아티팩트 코멘트 대응)

코멘트: "역량 -> "역량" / 강조". 머리말 "우리가 기르는 역량은:"의 "역량"을 큰따옴표로 묶고 굵게 강조. 화면판·md·인쇄판·PDF 동기화, style-lint 통과.

## [2026-09-08] output | 9월호 머리말 어휘·강조 2건 반영 (아티팩트 코멘트 대응)

코멘트 2건. (1) "최신 Trend" -> "핵심 Trend". (2) 헤드라인1 본문 "진짜 일에 적용하는"의 "진짜 일"을 작은따옴표로 강조('만든 용어는 작은따옴표 한 번만' 규칙에 따라 같은 문장의 두 번째 등장은 그대로 둠). 화면판·md·인쇄판·PDF 동기화, style-lint 통과.

## [2026-09-08] output | 9월호 1쪽 요약을 프리뷰 박스로 시각 구분 (아티팩트 코멘트 대응)

코멘트: "1쪽 요약은, 아직 본문에 들어가기 전의 내용이라는 것을 인지할 수 있도록, 배경 색이 채워져 있는 박스로 구분해주세요. 예쁘게!" 참고 섹션(.aside-sec)과 같은 옅은 회색 배경(var(--wash))에 위쪽 3px 검은 선, 아래쪽 헤어라인으로 감싸 본문 전 프리뷰임을 시각적으로 구분. 화면판·인쇄판 CSS 동기화(순수 시각 요소라 마크다운 원본에는 대응 문구 없음), PDF 재생성.

## [2026-09-08] output | 9월호 "1쪽 요약" -> "Executive Summary" (아티팩트 코멘트 대응)

코멘트: "Executive Summary". 상단 요약 라벨과 내비게이션 링크의 "1쪽 요약"을 "Executive Summary"로 교체. 화면판·md·인쇄판·PDF 동기화, style-lint 통과.

## [2026-09-08] output | 9월호 헤드라인3 "이유가" -> "요인이" (아티팩트 코멘트 대응)

코멘트: "요인이" (헤드라인2와 같은 어휘 교체를 헤드라인3에도 적용). "AI 에이전트 도입을 막는 이유가 무엇이냐고"를 "...요인이 무엇이냐고"로 수정. 화면판·md·인쇄판·PDF 동기화, style-lint 통과.

## [2026-09-08] output | 9월호 1부 "T" 약어를 "트렌드"로 전면 교체 (아티팩트 코멘트 대응)

코멘트: "T는 Topic이야? 약어로 쓰지말고 full 단어로 바꿔줘." T는 Trend(트렌드)의 약자. 1부 소제목 배지(T1/T2/T3)와 본문 내 참조 6곳을 "트렌드 1/2/3"으로 전면 교체. 3부의 A1~A6(Apply)은 이번 요청 범위 밖이라 그대로 둠. 화면판·md·인쇄판·PDF 동기화, style-lint 통과.

## [2026-09-08] output | 9월호 모듈 언급 시 프로그램명 앞세우기 전면 적용 + 규칙 신설 (아티팩트 코멘트 대응)

코멘트: "AI 역량육성 컬리지의 기존 프로그램 모듈을 언급할 때에는, 프로그램명을 먼저 이야기해줘." 문서 전체 13곳 수정 — 1부 트렌드1·3 결론, 2부 02·03, 3부 A1~A5 제안 문장과 소제목, 판단 요청 2건. 예: "에이전트 설계 모듈 중 도구 연결, 통제 설계(AGT-05~07)" → "AI Agent Service의 Essence for PO(AI 서비스 기획자 과정)와 Mastery Course(에이전트 개발자 심화 과정)의 에이전트 설계 모듈입니다. 도구 연결, 통제 설계, 여러 에이전트 운용(AGT-05~07)." 카탈로그 원 표기의 줄표(`AI Agent Service — Essence for PO`)는 줄표 0회 규칙과 충돌해 "AI Agent Service의 Essence for PO"로 표기. CLAUDE.md에 상시 편집 기준으로 신설. 화면판·md·인쇄판·PDF 동기화, style-lint 통과(15쪽).

## [2026-09-08] output | 9월호 리드 문장 교체 + 인쇄판 고아 페이지 해소 (아티팩트 코멘트 대응)

코멘트: "회사의 일에 적용, 확산하는". 1쪽 요약 리드를 "AI를 회사의 일에 적용, 확산하는 일은 기술이 아닌 사람 문제였습니다."로 교체. 문장이 길어져 인쇄판에서 Executive Summary 상자의 마지막 한 줄이 3쪽으로 넘어가 거의 빈 페이지가 생긴 것을 확인(16쪽) — 인쇄 CSS의 .summary 패딩·.lead 여백·.hl 패딩·.oneline 간격·.unfold 여백을 줄여 2쪽 안에 재수납(15쪽 복귀). 화면판·md·인쇄판·PDF 동기화, style-lint 통과.

## [2026-09-08] output | 9월호 3부 "A" 약어를 "적용"으로 교체 + 구조 라벨 규칙 신설 (아티팩트 코멘트 대응)

코멘트: "약어 대신 full 단어로 바꿔주세요"(3부 A1 앵커). A는 Apply(적용)의 약자. 3부 소제목 배지 A1~A6을 "적용 1~6"으로, 판단 요청 박스의 이동 링크(A1 ↑ / A2 ↑)와 마크다운 상호 참조까지 통일. 앞서 처리한 T→트렌드와 같은 방식. 문서 구조 라벨에 알파벳 약어를 쓰지 않는다는 규칙을 CLAUDE.md에 신설. 화면판·md·인쇄판·PDF 동기화, style-lint 통과(15쪽 유지).

## [2026-09-08] output | 9월호 2부 번호 라벨을 "시사점 01~04"로 (아티팩트 코멘트 대응)

코멘트: "시사점 01". 2부의 맨숫자 라벨(01~04) 네 개를 "시사점 01~04"로 교체. 앞서 처리한 1부 "트렌드 1~3", 3부 "적용 1~6"과 같은 방식으로 세 부의 구조 라벨 표기를 통일. 화면판·md·인쇄판·PDF 동기화, style-lint 통과(15쪽 유지).

## [2026-09-08] output | Insight 리포트 작성 스킬 신설 + 인쇄판 빌드 자동화

9월호 작업에서 얻은 것을 다음 호부터 재사용할 수 있게 정리.

**스킬 신설** `.claude/skills/insight-report/` — SKILL.md(0~6단계 절차, 산출물 원본 관계,
발행 후 코멘트 대응 루프) + references/editorial-rules.md(주제 3단 분류, 이해 가능성, 독자 기준,
문체 혼합형·린트 기준표, 출처 표기) + references/layout-and-print.md(롱블랙 실측 레이아웃,
Executive Summary 박스, 숫자-라벨 2열 그리드, 인쇄 파이프라인과 고아 페이지 대처).

**스크립트 2종 신설**
- `scripts/build-print.mjs` — 화면판 HTML에서 인쇄판·PDF를 결정적으로 생성(제목·인쇄 CSS·내비
  제거·접힘 펼침·이동 링크·푸터 6단계). 9월호는 이 변환을 손으로 해서 수정마다 두 파일을 편집했고
  인쇄판에 .fig-pair 모바일 규칙이 누락되는 드리프트가 있었다(생성본이 바로잡음). **이제 인쇄판은
  직접 고치지 않는다.**
- `scripts/check-html.mjs` — 태그 짝 검사. 발행 전 게이트.
- `docs/insight-print.css` — 인쇄 전용 CSS를 별도 파일로 분리(페이지 넘침 조정 지점).

**CLAUDE.md 정리** Insight 관련 105줄을 스킬로 이관하고 20줄로 축약(453→365행). 스캔에 걸리는
규칙(관심사 밖 자료에 `programs:` 안 붙이기)만 남겨 규칙이 두 곳에서 갈라지지 않게 함.

검증: style-lint 통과, check-html 통과, build-print 재생성 후 PDF 15쪽·마지막 쪽 정상.

## [2026-09-08] scan | 소급 스캔 09-03~09-08, 항목 17건

09-02 이후 6일 공백을 병렬 서브에이전트 3개(각 2일 분담, model:sonnet)로 일괄 수집해 newsletter/2026-09-08.md 한 파일로 병합(공백 3일 이상 규칙). 업무 적용 Case 4건(Spotify 모델 라우팅 토큰 90%↓, OpenAI 사내 연구조직 에이전트 실측, Harness-of-Harness 3역할 프롬프트, Dan Luu 테스트기법 26종 실측) + 빅 뉴스 6건(GPT-6 Astra 출시, 페르마 정리 Lean 형식화, Reuters OpenAI 에이전트 위키 장악, 모델 피로, Pachocki "An Alien Mind", Mistral 30억 유로) + 커뮤니티 4건 + YouTube 3건. 제약: Reddit은 당일 top RSS만 제공해 과거 날짜 조회 불가 → 커뮤니티는 HN Algolia 날짜검색으로 대체(09-07~08만 Reddit 직접 확보, 2회차 호출에서 429). YouTube는 구간별 업로드가 적어 3건. **위키 반영은 Astra 1건만 완료** — 나머지 항목의 use-case/updates 페이지화는 대기 중.

## [2026-09-08] query | GPT-6 Astra 종합 정리

사용자 요청으로 백필 3개 구간에 흩어진 Astra 항목을 wiki/analysis/openai-gpt-6-astra.md로 취합. 백필에 없던 사양·가격·벤치마크는 WebSearch + Codex 지식베이스·9to5Mac WebFetch로 보완(OpenAI 공식 페이지는 403으로 직접 확인 실패, 2차 매체 전달값임을 문서에 명시). **상충 발견**: 08-01 티저 때 "Astra는 GPT-6가 아니다"라던 입장이 09-03 출시에서 제품명 "GPT-6 Astra"·모델ID `gpt-6-astra`로 바뀜 → 문서에 ⚠️ 상충 블록으로 명시. 안전 등급(Critical)·Trusted Access·사고과정 관찰가능성 저하가 같은 주 Pachocki 에세이와 맞물리는 점을 연결. index.md 분석 섹션 등재.

## [2026-09-08] query | GPT-6 Astra 문서를 사용자 실사용 평가 중심으로 전면 개정

사용자 요청("실제 평가 중심, 개발자 커뮤니티 리뷰 수집·분석"). 병렬 서브에이전트 3개(sonnet)로 수집: HN(Algolia 날짜검색으로 스토리 223건 스캔, 상위 12스레드 댓글 트리 정독 → 평가 24건 + 독립 벤치마크 ARC Prize·Artificial Analysis·Epoch AI), 블로그·뉴스레터(실측 리뷰 CodeRabbit·Kilo·Simon Willison TIL·Decrypt + 인상 평가 Claire Vo·Matt Shumer·Creators AI), Reddit(**0건** — 검색 RSS 로그인 302, .json 403, pullpush 미색인 → sources.md에 제약 기록). wiki/analysis/openai-gpt-6-astra.md와 outputs/…html을 재작성: 결론 세 갈래(컴퓨터 사용·밤샘 자율 작업 일관된 호평 / 코딩은 "백지에서 강하고 남의 코드 앞에서 약하다"로 양분 / 비용·한도 소진 일관된 불만) + 평가 지형표 + 주제별 근거(원문 링크) + 벤치마크 하네스 의존(ARC-AGI-3 62.7% vs 98.6%) + "쓰는 법" + 수집 한계·편향 명시. 사양·타임라인은 부록으로 이동. 아티팩트 동일 URL로 재발행.
