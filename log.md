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

## [2026-07-09] ingest | use-case 구조화 체계 도입, 케이스 12건 (구 4건 재작성 + 신규 8건)

사용자 요청: 학습과정 설계 질의 품질 개선. A(도구)-B(방식)-C(업무)-D(성과) 공식 + 벤치마크 필드(model/cost/permissions/maturity/evidence)를 CLAUDE.md 스키마에 추가. 뉴스레터 07-07·07-08 ★최우선 항목 8건 케이스화(2건은 케이스 아님 판정 — updates/concepts 성격), 기존 4건 재작성. case-catalog.md 신설, 웹에 /cases 탐색기 + Q&A 케이스 카탈로그 상시 주입. 정직성 규칙: 벤치마크 3필드 전부 확인된 케이스는 1건뿐 — 실측 검증이 다음 과제.

## [2026-07-09] ingest | 벤치마크 실측 검증 — 자기참조 케이스 ai-radar-daily-scan-pipeline 등재

실측 검증 진행. 중첩 claude CLI 재현은 이 환경에서 PATH 미노출(exit 127)로 불가 → AI Radar 데일리 스캔 파이프라인 자체를 실측 벤치마크 케이스로 등재. 모델·권한·성숙도는 저장소에서 정확 확인(claude-sonnet-5/low, settings.local.json 화이트리스트 23종, production), 토큰은 본 세션 동종 sonnet 리서치 서브에이전트 6회 관측(6.0만~8.3만/회), 비용은 그 토큰 × Sonnet 5 공표가($2/$10)로 산정(회당 $0.15~0.30, ±50% 명시). 모델·비용·권한 3필드 전부 확인 케이스가 2건으로 증가. 독자 검증 가능한 유일한 실측 케이스 = 비용 산정 앵커.

## [2026-07-09] scan | 히스토리 백필 스캔 06-01~07-05, 뉴스레터 27건

사용자 요청: 5/1~7/5 백필 → 7/9 재요청으로 6/1~7/5로 축소. 병렬 서브에이전트 4개(9일씩 분담, 각 model:sonnet)로 실행, 날짜별 실제 발행일 확인(WebSearch + HN Algolia 날짜검색 API)이 안 된 날은 파일을 만들지 않고 인접일에 병합(06-02·03, 06-06·07, 06-21, 06-28 등 6건 병합). 06-10~06-18 구간은 미 상무부의 Fable 5·Mythos 5 수출통제 지시 사태가 지배적 스토리라인(공식성명 HN 3,158점 → 재시CEO 개입설 → EU 파장검토 → 탈옥근거 폭로 → 직원반박 → 07-01 규제 철회까지 일자별 추적). ★최우선(에이전트·자동화) 확보 사례: 3-에이전트 논스톱 오케스트레이션(Beads+Git worktree+로컬 Qwen), McKinney 에이전틱 가이드, Intuned 브라우저 자동화, Ångstrom 10만 GPU 실험자동화, opsx 스펙기반개발 CLI, Simon Willison 릴리스 QA 사례 등 다수. YouTube 픽은 전 구간 RSS 캐시가 6월 항목을 유실해 대부분 공란. Reddit은 old.reddit RSS로 과거 글 조회 불가해 WebSearch/HN 경유 링크로 대체. 위키(updates/hub/timeline)에는 아직 반영 안 됨 — 뉴스레터가 승인 대기 중.
