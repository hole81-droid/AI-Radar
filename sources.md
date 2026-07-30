# 모니터링 소스 레지스트리

Scan 워크플로우가 훑는 소스 목록. 사용자와 대화로 계속 추가·제거한다.

> **수집 최우선**: 모든 소스에서 "AI Tool(Claude Code, Codex 등)로 업무를 자동화하는
> AI Agent 구축 사례·활용법 강의" 유형을 가장 높은 비중으로 수집한다 (CLAUDE.md 편집 기준 참조).

## 공식 (최우선 — 릴리스·발표의 원천)

| 소스 | URL | 대상 |
|---|---|---|
| Anthropic News | https://www.anthropic.com/news | Claude, Claude Code |
| Anthropic Engineering | https://www.anthropic.com/engineering | Claude Code 활용법 |
| Claude Code Release Notes | https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md | Claude Code |
| Claude Docs What's New | https://docs.claude.com | Claude 전반 |
| OpenAI News | https://openai.com/news/ | ChatGPT, Codex |
| OpenAI Codex Changelog | https://developers.openai.com/codex/changelog | Codex |
| ChatGPT Release Notes | https://help.openai.com/en/articles/6825453-chatgpt-release-notes | ChatGPT |
| Google Blog (Gemini) | https://blog.google/products/gemini/ | Gemini |
| Google DeepMind Blog | https://deepmind.google/discover/blog/ | Gemini 모델 |
| Gemini API Changelog | https://ai.google.dev/gemini-api/docs/changelog | Gemini API |

## 커뮤니티

**접근 방법 (2026-07-07 검증됨)**: www.reddit.com은 curl 차단. **old.reddit.com RSS + 서술형 User-Agent**
(`-A "ai-radar-wiki:v1.0 (personal knowledge base)"`)는 정상 동작. HN은 Algolia API 사용.
뉴스레터의 "커뮤니티 화제" 섹션에 커뮤니티 원글 링크로 항목화한다 (미디어 기사로 대체 금지).

| 소스 | 접근 URL | 비고 |
|---|---|---|
| r/ClaudeAI | https://old.reddit.com/r/ClaudeAI/top/.rss?t=day | Claude·Claude Code 활용, 에이전트 사례 多 |
| r/ChatGPTCoding | https://old.reddit.com/r/ChatGPTCoding/top/.rss?t=day | Codex·코딩 에이전트 활용 |
| r/AI_Agents | https://old.reddit.com/r/AI_Agents/top/.rss?t=day | 에이전트 구축 사례 (최우선 주제 직결) |
| r/OpenAI | https://old.reddit.com/r/OpenAI/top/.rss?t=day | |
| r/singularity | https://old.reddit.com/r/singularity/top/.rss?t=day | 업계 뉴스 속보 |
| r/LocalLLaMA | https://old.reddit.com/r/LocalLLaMA/top/.rss?t=day | 오픈소스 동향 |
| Hacker News | https://hn.algolia.com/api/v1/search?tags=front_page (또는 query=claude+agent 등 키워드 검색) | JSON API, 안정적 |

## YouTube 채널

스캔 시 최근 영상 제목·설명으로 후보를 잡고, 승인된 영상만 자막(yt-dlp)으로 본문 수집한다.
(구축 시 핸들 미확정 채널은 첫 스캔에서 확인·갱신할 것)

### 한국어
| 채널 | 핸들/URL | 주제 |
|---|---|---|
| 조코딩 JoCoding | https://www.youtube.com/@jocoding | AI·코딩 대중화 |
| 장피엠 Jangpm | https://www.youtube.com/@jangpm | AI 활용·프로덕트 |
| 지피터스 GPTers | https://www.youtube.com/@gpters | AI 활용 커뮤니티 |
| kooky0ai | https://www.youtube.com/@kooky0ai | AI 콘텐츠 |

### 영어
| 채널 | 핸들/URL | 주제 |
|---|---|---|
| AI Edge (AIEdgeHQ) | https://www.youtube.com/@AIEdgeHQ | AI 뉴스·도구 |
| The MIT Monk (현 Sandeep Swadia) | https://www.youtube.com/@SandeepSwadia | AI 트렌드 (구 @theMITmonk — 2026-07 개명 확인) |
| Ben AI | https://www.youtube.com/@BenAI92 | AI 자동화·에이전트 |
| Liam Ottley | https://www.youtube.com/@LiamOttley | AI 에이전시·비즈니스 |
| Dan Martell | https://www.youtube.com/@danmartell | SaaS·AI 경영 활용 |
| Varun Mayya | https://www.youtube.com/@VarunMayya | AI 스타트업·트렌드 |
| Jeff Su | https://www.youtube.com/@JeffSu | 생산성·AI 툴 활용 |

## RSS 캐시

스캔 에이전트가 해결한 RSS URL을 여기 기록해 재사용한다 (토큰 절약).
YouTube 형식: `https://www.youtube.com/feeds/videos.xml?channel_id=<ID>`

| 소스 | RSS URL |
|---|---|
| 조코딩 JoCoding | https://www.youtube.com/feeds/videos.xml?channel_id=UCQNE2JmbasNYbjGAcuBiRRg — 2026-07-12 재해결·검증 완료(콘텐츠 일치 확인) |
| Jeff Su | https://www.youtube.com/feeds/videos.xml?channel_id=UCwAnu01qlnVg1Ai2AbtTMaA — 2026-07-12 재해결·검증 완료(Claude Cowork·Gemini Spark 영상 확인), 최신 업로드 06-30 기준이라 매 스캔 최신일 재확인 필요 |
| 장피엠 Jangpm | https://www.youtube.com/feeds/videos.xml?channel_id=UCSkpTOEl_zW6b4Y7M_Prefg — 2026-07-13 해결(externalId로 검증, "일잘러 장피엠" 채널명 일치) |
| 지피터스 GPTers | https://www.youtube.com/feeds/videos.xml?channel_id=UCLL4StPwMllEZJ6bYI4Ds3w — 2026-07-13 해결(externalId 단일 매칭) |
| kooky0ai | https://www.youtube.com/feeds/videos.xml?channel_id=UChLHvrqxYRGFdHCVEReD0GQ — 2026-07-13 해결(externalId 단일 매칭, "기묘한 자동화" 채널명 일치) |
| Ben AI | https://www.youtube.com/feeds/videos.xml?channel_id=UC3KK7ENB_ierAXvrxVNnbZQ — 2026-07-13 해결(externalId 단일 매칭) |
| Liam Ottley | https://www.youtube.com/feeds/videos.xml?channel_id=UCui4jxDaMb53Gdh-AZUTPAg — 2026-07-13 해결(externalId로 검증, 추천채널 노이즈 제외) |
| Dan Martell | https://www.youtube.com/feeds/videos.xml?channel_id=UCA-mWX9CvCTVFWRMb9bKc9w — 2026-07-13 해결(externalId로 검증) |
| Varun Mayya | https://www.youtube.com/feeds/videos.xml?channel_id=UCsQoiOrh7jzKmE8NBofhTnQ — 2026-07-13 해결(externalId 단일 매칭) |
| AI Edge (AIEdgeHQ) | 2026-07-13 재시도: @AIEdgeHQ 핸들 페이지가 "Miles Deutscher Vlogs"(UCIU0ZYZk5zngMreRYIbJ0dQ)로 오매핑됨 확인 — 핸들이 변경/재사용된 것으로 추정, 여전히 미해결. 다음 스캔에서 채널명 재검색 필요 |
| (2026-07-15) | 8채널(조코딩·Jeff Su·장피엠·지피터스·kooky0ai·Ben AI·Liam Ottley·Dan Martell·Varun Mayya) RSS 정상 조회 확인. Jeff Su·Ben AI·Liam Ottley·장피엠·지피터스는 최신 업로드가 06-30~07-02로 정체 — 매 스캔 최신일 재확인 필요. AI Edge는 계속 미해결. |
| (2026-07-16) | 9채널 RSS 재확인. Dan Martell·Varun Mayya·조코딩·kooky0ai는 07-12~07-15 업로드로 활발. Jeff Su·Ben AI·Liam Ottley·장피엠·지피터스는 여전히 06-30~07-08 최신 업로드로 정체 지속. **old.reddit.com `.json` 엔드포인트는 이 User-Agent로 HTTP 403 차단 확인**(RSS/HTML 페이지는 정상) — 게시글 본문이 필요하면 `.rss` 또는 HTML 퍼머링크(`curl -A ... <permalink>/`)로 우회하고 `class="md"` 블록을 파싱할 것. 또한 old.reddit RSS는 연속 요청 시 HTTP 429가 잦다 — 요청 간 5~10초 이상 간격 권장. |
| (2026-07-18) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). Ben AI가 07-18 당일 업로드로 갱신, Dan Martell·Varun Mayya는 07-17~07-19대 업로드로 활발. HN은 `search_by_date` + `numericFilters=created_at_i>유닉스타임` 조합이 최근 N시간 필터링에 효과적(단순 `search_by_date`만 쓰면 관련성 낮은 결과가 섞임). old.reddit RSS 429는 8~15초 간격 재시도로 우회 가능했음(사이트 전반 부하에 따라 변동). |
| (2026-07-20) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). 조코딩·Dan Martell이 07-19 당일 업로드로 활발, Varun Mayya 07-18. YouTube 영상 설명(`media:description`)이 제목만 반복하고 실질 내용이 없는 경우가 늘어(특히 쇼츠성 업로드) — 이런 경우 특정 AI Tool 확인이 안 되면 ★최우선 승격을 보류할 것. 커뮤니티는 이번에도 연속요청 시 HTTP 429/000(타임아웃)이 반복 — r/ClaudeAI·r/AI_Agents는 12~25초 간격 재시도로 확보, r/OpenAI는 재시도 끝에 확보했으나 r/singularity 첫 시도만 성공(재시도 불필요). r/ChatGPTCoding은 당일 top 글이 실제로 0건(빈 피드, 정상 응답 확인). |
| (2026-07-29) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). old.reddit RSS 429가 이번엔 특히 심해 15~30초 간격을 둬야 통과됨(짧은 간격 재시도는 계속 실패) — `t=week`로 받아 `updated` 필드로 최근 날짜만 필터링하는 방식이 `t=day`보다 안정적이었다(day는 활동이 적은 서브에서 공백일 수 있음). 개별 게시물 본문은 HTML 퍼머링크에서 `class="md"` 블록을 정규식으로 추출하는 방식이 여전히 유효(댓글 자동요약 블록도 같은 클래스로 잡힘, 두 번째 매치가 보통 TL;DR). |
| (2026-07-30) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). r/ChatGPTCoding은 `t=day`·`t=week` 모두 빈 피드로 확인(서브레딧 자체 활동 저조, 정상 응답). r/AI_Agents·r/singularity는 429 후 15~20초 재시도로 확보. HN Algolia `search?tags=front_page`가 그날 화제 파악에 `search_by_date`보다 빠르고 안정적이었음(포인트 상위 항목이 바로 보임). |

## X / Instagram

로그인 장벽으로 자동 스캔이 불안정하다. 웹서치로 간접 포착하는 것을 기본으로 하고,
중요한 스레드는 사용자가 URL을 직접 전달한다. 추적할 계정이 정해지면 여기에 등록.

| 계정 | 플랫폼 | 비고 |
|---|---|---|
| (미등록) | | |
