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
