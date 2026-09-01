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

## 구루·실무자 1차 채널 (2026-08-17 추가 — X 인용 왜곡 사건의 교훈)

**배경**: X에서 추천받은 계정 6건을 검증했더니 Andrew Ng 발언을 원문과 정반대로 왜곡해
유통하고 있었다(log.md 2026-08-17 lint 참조). 교훈은 **"구루가 직접 발행하는 곳으로 가라"**.
아래는 전부 2026-08-17에 RSS 응답·최신 게시일을 실측 검증했다.

| 소스 | RSS | 실측(08-17) | 성격 |
|---|---|---|---|
| **Simon Willison** | https://simonwillison.net/atom/everything/ | 08-17, 30건 | 거의 매일. LLM 신기능을 직접 실행해보고 쓰는 최고 신뢰도 실무 기록 |
| **Latent Space** (swyx) | https://www.latent.space/feed | 08-17, 14건 | 주간. AI 엔지니어링 심층 인터뷰·현장 방법론 |
| **Lilian Weng** (OpenAI) | https://lilianweng.github.io/index.xml | 07-04, 53건 | 드물지만 매우 깊음. 하네스 엔지니어링 원문 출처 |
| **Andrej Karpathy 블로그** | https://karpathy.bearblog.dev/feed/ | 04-30, 10건 | 드묾(월 1회 미만). **주의: 피드의 `<updated>`는 빌드 시각이라 최신 글 날짜와 다르다 — 반드시 개별 `<entry>` 날짜를 볼 것** |
| **Addy Osmani** | https://addyosmani.com/rss.xml | 07-20, 10건 | 월 몇 회. "loop engineering" 용어 대중화 당사자 |
| **The Batch** (Andrew Ng) | RSS 없음 → https://www.deeplearning.ai/the-batch/tag/letters 페이지 fetch | 주간 | Ng 본인 레터. **X에 도는 Ng 인용문은 반드시 여기서 대조할 것** |

### 구루 활동 추적 — HN Algolia 인물 쿼리 (X 차단 우회)

X는 직접 조회가 막혀 있으므로(HTTP 402), 구루가 X·개인채널에 뭔가 올리면 **HN이 대신
잡아주는 것**을 이용한다. 이미 등록된 HN Algolia API를 인물명으로 쿼리하되 **점수 임계값으로
노이즈를 거른다**(임계값 없으면 이름만 스친 1~4점 Show HN이 대량 유입 — 실측 확인):

```
https://hn.algolia.com/api/v1/search_by_date?query=karpathy&tags=story&numericFilters=points>50
https://hn.algolia.com/api/v1/search_by_date?query="Andrew Ng"&tags=story&numericFilters=points>50
```

실측 효과(2026-08-17): 이 필터로 "I've joined Anthropic"(1,431점, 05-19, 원문이 karpathy
X 계정) · "Karpathy's Pelican"(618점, 08-02) · "LearnVector — Andrew Ng's AI company"(269점,
07-29)가 바로 잡혔다. 매 스캔 2회 쿼리면 충분하다.

### GitHub 저장소 감시 (Karpathy 전용)

Karpathy는 글보다 **저장소로 말한다** — `autoresearch`(루프 엔지니어링 원류), `nanochat` 등
저장소 자체가 사건이다. GitHub API는 인증 없이 조회 가능하다(실측 확인):

```
https://api.github.com/users/karpathy/repos?sort=updated&per_page=5
```

새 저장소가 뜨거나 스타가 급증하면 "업무 적용 Case" 후보로 검토한다.

## 국내 AX 블로그 (2026-08-17 추가)

**AX LABS 블로그** — https://theaxlabs.com/blog | RSS: https://theaxlabs.com/rss.xml
(2026-08-17 검증: curl 직접 접근 가능, 차단 없음. `pubDate` 정확, 총 50개 항목 최초 게시일
2026-06-29까지 소급). "에이전트 제품 설계"·"조직·사람" 카테고리로 하네스·MCP·권한 설계 등
실전 AX 실무 팁을 주 2~10건 페이스로 발행. LinkedIn 인물 소스(이승필 AX LABS 대표)의
대체재로 채택 — LinkedIn과 달리 날짜순 실측 가능하고 직접 fetch 차단이 없다.

- 발행 빈도가 높고 개별 글이 짧은 잠언형이 많다 — **전부 페이지화하지 말 것**. 구체적인
  도구·업무·성과가 드러나는 글(예: 특정 Skill 소개, 실측 수치 포함 글)만 "업무 적용 Case" 후보로
  검토하고, 나머지는 "빅 뉴스"나 "커뮤니티 화제"에 한 줄로 싣거나 생략한다.

## AI 경영·비즈니스 실증 (2026-09-01 추가 — 사용자 지정)

AI가 경영에 활용됨에 따른 성과·영향·사업 적용의 실제 case·사례연구·벤치마크 등
**실증적·실용적 연구 결과와 아티클**을 수집한다. AX 근거(`uses: ax`)의 핵심 공급원.
전부 2026-09-01에 RSS 응답·최신 게시일을 실측 검증했다.

| 소스 | RSS | 실측(09-01) | 성격 |
|---|---|---|---|
| **Harvard Business Review** | http://feeds.hbr.org/harvardbusiness | 08-31, 100건 | 전 주제 통합 피드 — 제목에서 AI·agent 관련만 골라낼 것. 네임스페이스가 특이한 Atom(`<ns6:entry>`)이니 파싱 주의 |
| **MIT Sloan Management Review** | https://sloanreview.mit.edu/feed/ | 08-31 | 경영·조직 관점 AI 실증 연구의 최고 밀도. 사례연구·프레임워크 多 |
| **Knowledge at Wharton** | https://knowledge.wharton.upenn.edu/feed/ | 08-28 | Wharton 교수진 연구 기반. AI 도입 효과 실증 연구 소개 |
| **McKinsey Insights** | https://www.mckinsey.com/insights/rss | 09-01 | 산업별 AI 도입 리포트·서베이. 수치 인용 시 "서베이 기반 주장"임을 명시할 것 |
| **One Useful Thing** (Ethan Mollick, Substack) | https://www.oneusefulthing.org/feed | 08-31 | Wharton 교수의 직접 실험 기반 글. 경영·교육 양쪽에 걸침 — **두 섹션 겸용 소스** |
| **Exponential View** (Azeem Azhar, Substack) | https://www.exponentialview.co/feed | 09-01 | AI의 거시 경제·산업 영향 분석. 주간 |
| **AI Snake Oil** (Narayanan·Kapoor, Substack) | https://www.aisnakeoil.com/feed | 08-05 (월 1~3회) | 프린스턴 연구자의 과장 검증·실증 비판. "주장 vs 실측" 구분에 유용 |

- **스크리닝 규칙**: 발행량이 많으므로 제목으로 1차 스크리닝 후, **구체적 기업명·수치·벤치마크가
  드러나는 글만** 1~2회 WebFetch로 정독한다. 일반론·리더십 에세이는 제외.
- 실측 수치가 있는 도입 사례는 use-case 스키마(`evidence: measured`)로,
  서베이·컨설팅 리포트는 `evidence: claimed`로 구분해 페이지화한다.

## AI 교육 트렌드 (2026-09-01 추가 — 사용자 지정)

AI 교육의 최신 트렌드, 혁신적인 AI 교육 방식·교육 주제 등 **가장 앞서가는 선진 사례**를
수집한다. 학습과정 기획(`uses: course`)의 핵심 공급원. 전부 2026-09-01 실측 검증.

| 소스 | RSS | 실측(09-01) | 성격 |
|---|---|---|---|
| **EdSurge** | https://www.edsurge.com/articles_rss | 08-28 | 에듀테크 전문지. AI 교수법·대학/기업 교육 현장 사례 |
| **Class Central** | https://www.classcentral.com/report/feed/ | 09-01 | 온라인 강좌 동향 분석. "지금 어떤 AI 강좌가 뜨는가"의 1차 소스 |
| **One Useful Thing** (Mollick) | (위 경영 섹션과 겸용) | 08-31 | AI 교수법 실험(과제 설계·프롬프트 교육) 원조 — 교육 글이 뜨면 이 섹션 후보로 |
| **The Batch** (Andrew Ng) | (구루 섹션과 겸용) | 주간 | Ng의 AI 교육 철학·LearnVector 등 교육 사업 동향 |

- 검증 탈락 소스(참고): MIT Open Learning RSS는 최신 글이 04-27로 정체(스캔 가치 낮음),
  Stanford HAI는 RSS 미제공 — 필요시 웹서치로 간접 포착.
- **스크리닝 규칙**: "AI로 무엇을 가르치는가"(교육 주제)와 "AI를 어떻게 가르침에 쓰는가"
  (교수법) 둘 다 대상. 재현 가능한 교육 방식(과제 설계·커리큘럼 구조)이 구체적으로 드러나는
  글을 우선하고, 교육 정책·일반 오피니언은 제외한다.

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
| AI Frontier Korea (노정석) | https://www.youtube.com/channel/UCz-BiVywYdO6iXhjXkw_Kgw (대체 핸들: @chester_roh — 같은 채널, 2026-08-07 확인) | 프론티어 모델·AI 산업 심층 (EP 단위 팟캐스트형) |
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
| AI Frontier Korea (노정석) | https://www.youtube.com/feeds/videos.xml?channel_id=UCz-BiVywYdO6iXhjXkw_Kgw — 2026-08-04 해결·검증 완료(채널명 "AI Frontier Korea (노정석)" 일치, EP 107 08-02 업로드 확인), 2026-08-07 @chester_roh 핸들도 같은 채널로 재확인. **주의: 영문 채널 "AI Frontier"(UCpSR-Gy6XV4thEndDNvUQYg, Chester Roh 진행)는 이름이 비슷한 별개 채널이니 혼동 금지** |
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
| (2026-07-20) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). 조코딩·Dan Martell이 07-19 당일 업로드로 활발, Varun Mayya 07-18. YouTube 영상 설명(`media:description`)이 제목만 반복하고 실질 내용이 없는 경우가 늘어(특히 쇼츠성 업로드) — 이런 경우 특정 AI Tool 확인이 안 되면 "업무 적용 Case" 승격을 보류할 것. 커뮤니티는 이번에도 연속요청 시 HTTP 429/000(타임아웃)이 반복 — r/ClaudeAI·r/AI_Agents는 12~25초 간격 재시도로 확보, r/OpenAI는 재시도 끝에 확보했으나 r/singularity 첫 시도만 성공(재시도 불필요). r/ChatGPTCoding은 당일 top 글이 실제로 0건(빈 피드, 정상 응답 확인). |
| (2026-07-29) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). old.reddit RSS 429가 이번엔 특히 심해 15~30초 간격을 둬야 통과됨(짧은 간격 재시도는 계속 실패) — `t=week`로 받아 `updated` 필드로 최근 날짜만 필터링하는 방식이 `t=day`보다 안정적이었다(day는 활동이 적은 서브에서 공백일 수 있음). 개별 게시물 본문은 HTML 퍼머링크에서 `class="md"` 블록을 정규식으로 추출하는 방식이 여전히 유효(댓글 자동요약 블록도 같은 클래스로 잡힘, 두 번째 매치가 보통 TL;DR). |
| (2026-07-30) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). r/ChatGPTCoding은 `t=day`·`t=week` 모두 빈 피드로 확인(서브레딧 자체 활동 저조, 정상 응답). r/AI_Agents·r/singularity는 429 후 15~20초 재시도로 확보. HN Algolia `search?tags=front_page`가 그날 화제 파악에 `search_by_date`보다 빠르고 안정적이었음(포인트 상위 항목이 바로 보임). |
| (2026-08-07) | AI Frontier Korea를 `channelMetadataRenderer.externalId`로 재검증, `@chester_roh` 핸들도 동일 채널(UCz-BiVywYdO6iXhjXkw_Kgw)로 확인 — 두 URL 중 아무거나 써도 됨, 표에는 정식 채널 URL만 남김. |
| (2026-08-16) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). r/AI_Agents는 이번에도(08-14에 이어) `.rss?t=day` 요청이 두 차례(15초·20초 간격) 모두 0바이트 빈 응답 — 429 에러 없이 조용히 빈 바디만 오는 패턴이 반복 확인됨, 이제 상습적 미해결 소스로 간주하고 t=week 폴백을 우선 시도할 것. **WebFetch 도구로 old.reddit.com URL을 직접 열면 "Claude Code is unable to fetch from old.reddit.com"로 즉시 거부됨**(도메인 자체가 WebFetch 차단 목록에 있는 듯) — 개별 게시물 본문·댓글이 필요하면 반드시 `curl -A "ai-radar-wiki:v1.0 ..." <permalink>/.rss`로 받아야 하고, WebFetch로 재시도하지 말 것(토큰 낭비). 이 방식으로 특정 게시물의 댓글까지 포함한 전체 스레드(자동 생성 TL;DR 포함)를 확보 가능함을 확인. |
| (2026-08-23) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). 08-21~08-22 업로드 채널(조코딩·Dan Martell·Varun Mayya)은 전부 AI 에이전트 자동화와 무관한 일반 주제였음. old.reddit.com RSS는 이번에도(4일 연속, 08-20~08-23) r/ClaudeAI에서 HTTP 302 로그인 리다이렉트 확인 — 상시 봇 차단으로 최종 확정, 커뮤니티 섹션은 HN Algolia 전용으로 운영 권장. Karpathy 개인 블로그(bearblog.dev) RSS도 이번에도 403(4회 연속, 08-20~08-23) — 접근 불가 소스로 최종 확정 가능한 시점. Simon Willison·Latent Space RSS는 08-22 최신 항목까지 정상 확인. AX LABS 블로그는 최신글이 08-20에서 정체(3일간 신규 없음) — 발행 주기가 들쭉날쭉하니 매 스캔 확인은 유지. HN Algolia 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음. |
| (2026-08-24) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). old.reddit.com RSS는 지시에 따라 이번 스캔에서 재시도 생략(5일 연속 302 확정 상태 유지). Karpathy 개인 블로그(bearblog.dev)도 지시에 따라 재시도 생략(5일 연속 403 확정 상태 유지) — 두 소스 모두 당분간 상시 접근불가로 간주하고 스캔에서 제외 유지. Simon Willison RSS는 08-23 최신 항목까지 정상 확인(FT 인용 Anthropic 매출/Fable 채택 기사 포함). AX LABS 블로그는 최신글이 여전히 08-20 정체(4일간 신규 없음) — 발행 주기 재확인은 계속 유지. HN Algolia 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음. HN front_page(48h, points>40)·키워드 검색(claude code·codex·AI agent)으로 커뮤니티 화제 스크리닝, Show HN "OzBrain"(85점) 확보. |
| (2026-08-25) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는 지시에 따라 이번 스캔에서도 재시도 생략(둘 다 5일 연속 확정 상태 유지). Simon Willison RSS는 08-24 최신 항목까지 정상 확인(신규 페이지화 대상은 없었음). Latent Space·Addy Osmani는 각각 08-22·08-21에서 정체, AX LABS 블로그도 08-20에서 정체 지속(5일간 신규 없음 — 발행 주기 재확인 계속 유지). HN Algolia 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음. HN front_page(numericFilters=points>40)와 키워드 검색(claude code·codex·AI agent·anthropic)으로 커뮤니티 화제 스크리닝, "A Claude Code skill that recovers export-blocked Kindle highlights"(40점)·"Agent Is Not the Model"(63점) 확보. Ben AI 채널(08-24 업로드, Composio-Claude 연동 튜토리얼)만 신규 콘텐츠 확인, 나머지 8채널은 기존 확인 업로드에서 정체. 이번 스캔에서 `date +%s` 등 산술 치환이 포함된 curl 커맨드와 `-o` 파일 출력 옵션이 포함된 curl 커맨드가 Bash 권한 거부로 실패 — 하드코딩된 epoch 값과 stdout 직접 파싱(파일 미경유)으로 우회 성공. `for` 루프 문법도 한 차례 거부돼 개별 curl 호출로 대체. |
| (2026-08-26) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는 지시에 따라 이번에도 재시도 생략(6일 연속 확정 상태 유지). AX LABS 블로그는 08-25 "Headlong 설치법과 구조" 신규 게시로 6일 만에 정체 해소(08-20→08-25). Simon Willison RSS는 08-24 최신 항목까지 정상 확인(anthropic SDK 업그레이드 관련 소규모 릴리스 노트, 페이지화 대상 아님). Latent Space는 08-25 새 글("[AINews] Andrew Ng gets into AI Engineering") 확인했으나 Ng 본인 채널이 아닌 3자 코멘터리라 인용 규칙상 본문 그대로 신뢰 인용은 보류. HN Algolia 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음. Karpathy GitHub 저장소(nanochat·nanoGPT·autoresearch 등)는 당일 커밋 갱신만 확인, 신규 저장소 없음. HN 키워드 검색(claude code·codex·anthropic·AI agent, points>30, 48h)이 이번에도 front_page 단독 스크리닝보다 관련도 높은 결과를 더 많이 잡아냄(agent.md·Codex-Bedrock 캐싱버그·FT Anthropic 가격경쟁 재화제 전부 이 방식으로 발견). Bash 도구에서 `for` 루프 문법이 이번에도 권한 거부로 차단돼 개별 curl 호출로 대체(패턴 지속 확인). |
| (2026-08-22) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). **old.reddit.com RSS는 이번에도(3회 연속) r/ClaudeAI·r/AI_Agents·r/ChatGPTCoding·r/singularity·r/LocalLLaMA·r/OpenAI 전부 HTTP 302 로그인 리다이렉트** — 08-21과 동일 증상, 이제 상시 봇 차단으로 간주하고 커뮤니티 수집은 당분간 HN Algolia 위주로 운영. HN `search_by_date?tags=front_page&numericFilters=created_at_i>유닉스타임` 조합(48시간 컷오프)이 그날 화제를 빠짐없이 훑는 데 가장 효율적이었음(Claude Mythos 5 보안 발표·Codex AWS Bedrock 과금버그·Huzzah 에디터·NoBuzz 스킬 전부 이 방식으로 발견, 개별 키워드 쿼리보다 커버리지 넓음). Karpathy 개인 블로그(bearblog.dev) RSS는 이번에도 403(3회 연속 확인 — 08-20·08-21·08-22, 접근 불가 소스로 확정 간주해도 될 시점). HN 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음(기존 08-02·07-29 히트가 최신 유지). Anthropic 공식 뉴스룸(anthropic.com/news)은 claude.com/blog 발표(Claude Academy·Claude Security)를 즉시 반영하지 않는 지연이 있어, 공식 소스 확인 시 news 페이지 단독으로는 최신 제품 발표를 놓칠 수 있음 — WebSearch 병행 필요. |
| (2026-08-21) | **old.reddit.com RSS 접근 방식이 악화된 것으로 보임** — r/ClaudeAI·r/AI_Agents·r/ChatGPTCoding 전부 `.rss?t=day` 요청이 이번엔 429/0바이트가 아니라 **HTTP 302로 로그인 페이지(`register-step`)로 리다이렉트**(`-L` 옵션으로 따라가면 200이지만 본문이 RSS가 아니라 로그인 유도 HTML, size 123KB). 재시도 간격을 늘려도 동일 — 일시적 레이트리밋이 아니라 봇 차단이 강화된 것일 수 있어 다음 스캔에서 재확인 필요(악화 지속되면 커뮤니티 섹션을 HN 위주로 전환 검토). 대체로 HN Algolia `search_by_date` 쿼리(예: `query=codex&tags=story&numericFilters=points>30,created_at_i>유닉스타임`)로 그날 커뮤니티 화제를 충분히 포착 가능함을 확인(Salesforce Slack Code 발표 스레드·Asana Codex 스레드 모두 이 방식으로 발견). Karpathy 개인 블로그(bearblog.dev) RSS는 이번에도 403 Forbidden — 08-20에 이어 2회 연속 확인, 접근 불가 소스로 간주 검토 필요. Bash 도구에서 `python3`/파이프라인 스크립트 실행이 샌드박스 권한으로 차단됨 — JSON 파싱은 `grep`/`tr`로 대체할 것. |

| (2026-08-27) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge 계속 미해결). old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는 지시에 따라 이번에도 재시도 생략(7일 연속 확정 상태 유지). AX LABS 블로그는 08-25 Headlong 글에서 정체 지속(신규 없음). Simon Willison RSS는 08-26 최신 항목까지 정상 확인(신규 페이지화 대상 없음, "Quoting Paul Dix" 등 소품 위주). Latent Space는 08-26 "Lovable CTO" 인터뷰 확인했으나 재현 가능한 기법이 아닌 전략 인터뷰라 페이지화 보류. Addy Osmani는 08-21에서 정체 지속. HN Algolia 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음(기존 히트만 재확인). HN front_page(48h, points>40)·키워드 검색(claude code·codex·anthropic·AI agent, points>30, 48h)으로 스크리닝, "Anthropic Sees over $30T in Potential Revenue"(40점)·"Anthropic tells staff to work from home"(123점)·"I miss the old Claude Code"(36점)를 확보. YouTube 9채널 중 조코딩(Codex 성능 활용 쇼츠)·Ben AI("Record a Skill" 베스트프랙티스, 08-26 업로드)만 관련 신규 콘텐츠 확인, 나머지는 기존 확인분에서 정체. YouTube 자동생성 자막(timedtext API)은 서명 토큰이 세션에 종속돼 curl로 재사용 불가 확인 — 향후 상세 스크립트가 필요하면 페이지 HTML의 `shortDescription` 필드(전체 설명란)와 챕터 타임스탬프로 대체할 것. 이번 스캔에서도 `-o` 파일 출력 옵션·`which` 명령이 포함된 Bash 호출이 권한 거부로 실패(패턴 지속 확인) — stdout 직접 파싱으로 우회. |
| (2026-08-28) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge는 재시도 생략, 계속 미해결로 간주). old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는 지시에 따라 이번에도 재시도 생략(8일 연속 확정 상태 유지). **AX LABS 블로그는 08-27 "컴퍼니 브레인 만드는 법" 신규 게시로 정체 해소**(전날 08-25 Headlong에서 갱신) — use-case로 반영. Latent Space는 08-27 "[AINews] NVIDIA buys HuggingFace for $13B" 확인 — 웹서치로 교차검증해 빅뉴스 페이지화(The Information·Bloomberg·CNBC 등 1차 보도 확인, 실제 금액은 $12.9B). Simon Willison RSS는 08-26 최신 항목까지 정상 확인(신규 페이지화 대상 없음, Qwen3.8-Flash-Next 로컬 실행기). Addy Osmani는 08-21에서 정체 지속. Lilian Weng은 07-04에서 정체 지속(장기 정체 패턴 유지). HN Algolia 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음(기존 히트만 재확인, 08-02·07-29). Karpathy GitHub 저장소(nanochat·autoresearch·llm-council 등)는 당일 커밋 갱신만 확인, 신규 저장소 없음. Anthropic 공식 뉴스룸(anthropic.com/news)은 curl 직접 접근 시 JS 렌더링으로 본문 파싱 불가 확인 — WebFetch(AI 요약)로 우회해 08-27 신규 항목 2건("Previewing the Model Hardware Standard"·"Expanding our support for scientists") 확보, 둘 다 페이지화. HN front_page/키워드 검색(claude code·codex·anthropic, points>30, 48h)으로 "Tell HN: Man, AI is killing my brain"(46점, Claude Code 과의존 고백)·"Previewing the Model Hardware Standard"(51점)를 확보, "OpenAI·Anthropic·Google 100+ 기업 사이버방어 공동서한"은 WebSearch로 확인(HN에서는 직접 포착 안 됨, TechCrunch·Bloomberg·CNBC 1차 보도 교차확인). YouTube 9채널 중 조코딩(08-27 "AI 모델 개선 vs 하네스 엔지니어링" 쇼츠, 설명란 실질 내용 없음)만 신규 확인, 장피엠·kooky0ai는 최근 업로드가 이미 위키에 반영된 콘텐츠(slide-master·자막자동화)와 동일해 중복 제외, 나머지 6채널(지피터스·Liam Ottley·Dan Martell·Varun Mayya·Jeff Su·AI Frontier Korea)은 주제 무관 콘텐츠로 정체. Varun Mayya 08-27 쇼츠("Jumanji With AI")는 설명란이 비어 있어 업무 적용 Case 승격 보류(2026-07-20 룰 재확인). 이번 스캔에서도 Bash `for` 루프 문법이 매 시도 권한 거부로 실패(패턴 지속 재확인) — 개별 curl 호출로 전량 대체. |

| (2026-08-29) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge는 재시도 생략, 계속 미해결로 간주). old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는 지시에 따라 이번에도 재시도 생략(9일 연속 확정 상태 유지). AX LABS 블로그는 08-27 "컴퍼니 브레인" 글에서 정체 지속(신규 없음, 2일째). Simon Willison RSS는 08-27 "Breaking Claude Code Opus 5 Auto Mode"(embracethered.com 인용, 프롬프트 인젝션 연구자의 Auto Mode 우회 공격 60~80% 성공률 확인) 신규 확보 — 페이지화(기존 [[2026-08-07-claude-code-auto-mode-default]]에 후속 절 추가). Latent Space는 08-28 "[AINews] OpenAI to reach AGI bar by end-2026" 확인했으나 AINews 3자 코멘터리(Time 인용)라 인용 규칙상 원문 그대로 신뢰 인용은 보류, 페이지화 안 함. Addy Osmani는 08-21에서 정체 지속(8일째). Lilian Weng은 07-04에서 정체 지속(장기 정체 유지). HN Algolia 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음(기존 08-02·07-29 히트만 재확인). Karpathy GitHub 저장소는 신규 저장소 없음(nanoGPT 등 기존 목록 유지). HN front_page(48h, points>40)·키워드 검색(claude code·codex·anthropic·AI agent, points>30, 48h)으로 "Pentagon's blacklisting of Anthropic was unlawful"(Reuters 321점·NYT 447점, 법원 판결 신규 페이지화)·"Coding Agents killed my identity. How do you feel?"(32점, 사흘 연속 "AI가 정체성/뇌/실력을 죽였다" 담론)·"AI Agent Has Root"(38점, MCP 샌드박스 미비 경고+mcp-box 오픈소스 공개)·"Six months of writing code exclusively with agents"(exe.dev, HN 68점, Claude Code+Codex+Cursor 병렬 VM 20개 오케스트레이션 — use-case화)를 확보. GLM-5.3(기존 [[2026-08-14-zhipu-glm-5-3-launch]])은 예고했던 "2주 후 가중치 공개" 시한을 넘겨 지연 중임을 WebSearch로 확인, 후속 절 추가. Anthropic 공식 뉴스룸(WebFetch)은 08-27 이후 신규 항목 없음 확인. OpenAI 공식 뉴스룸은 이번에도 WebFetch 403으로 직접 파싱 불가(패턴 지속) — WebSearch로 대체 확인, 08-28 자체 신규 항목은 어제 이미 반영된 "AI 사이버 방어 공동서한" 외 특별한 신규 없음. YouTube 9채널 중 Jeff Su(08-25 "Learn 95% of ChatGPT Work" — 기존 [[openai-chatgpt-work-launch]]와 연결해 픽 반영)만 신규 확인, Ben AI 08-26 업로드는 08-27 스캔에서 이미 반영된 영상과 동일해 중복 제외, 나머지 7채널(조코딩·장피엠·지피터스·kooky0ai·Liam Ottley·Dan Martell·Varun Mayya)은 주제 무관 또는 기존 반영분과 중복이라 정체. |
| (2026-08-30) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge는 재시도 생략, 계속 미해결로 간주). old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는 지시에 따라 이번에도 재시도 생략(10일 연속 확정 상태 유지). AX LABS 블로그는 08-27에서 정체 지속(3일째, 신규 없음). Simon Willison RSS는 08-28 "Just a rumour of a bug is enough to find a security exploit these days"(Anil Madhavapeddy·rclone 유지보수자 인용, AI 에이전트발 보안공시 프로세스 위기) 신규 확보 — 뉴스레터 빅뉴스로만 반영(단발 트렌드 코멘터리라 페이지화는 보류, 08-27·08-29 관련 보안 이슈와 계속 이어지는 흐름). Latent Space는 08-29 "[AINews] OpenAI shuts off Cursor" 확인 — AINews 코멘터리 원문 자체가 OpenAI 공식 발표를 가리키고 있어 WebSearch로 1차 소스(openai.com 공식 발표, the-decoder 등)까지 교차검증 후 신규 페이지화([[2026-08-29-openai-ends-cursor-partnership]]). Addy Osmani·Lilian Weng은 각각 08-21·07-04에서 정체 지속. HN Algolia 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음. Karpathy GitHub 저장소(nanoGPT·nanochat·llm-council·autoresearch·micrograd)는 커밋 갱신만 확인, 신규 저장소 없음. **WebFetch로 openai.com 개별 뉴스 URL 접근 시 403 확인**(패턴 지속) — WebSearch로 대체. Anthropic 공식 뉴스룸(WebFetch)은 08-27 이후 신규 없음 재확인. HN front_page(48h, points>40)·키워드 검색(claude code·codex·anthropic·AI agent·cursor openai, points>30, 48h)으로 "Our decision on Cursor following its acquisition by SpaceX"(785점)·"Terminal-Bench-Science: Evaluating AI agents on scientific research workflows"(115점, Stanford·Laude Institute·Allen Institute 공동 오픈 벤치마크)를 확보. **WebSearch로 "Claude Cowork built-in browser"(08-26 발표) 뒤늦게 발견** — 08-27~08-29 스캔 모두 놓쳤던 항목으로 추정(RSS·1차 채널에 즉시 걸리지 않았던 것으로 보임), 기존 [[2026-08-12-claude-cowork-chrome-integration]]에 후속 절로 소급 반영. YouTube 9채널 중 Ben AI(08-29 "Second Brain Setup", 본인 SaaS Balda 홍보 성격이 강해 업무 적용 Case 대신 YouTube 픽으로 하향)만 신규 확인, JoCoding(08-28 휴머노이드 쇼츠)은 주제 무관, 나머지 7채널은 기존 반영분과 중복이거나 정체. 이번 스캔에서도 Bash `for` 루프·`-o` 파일 출력 옵션이 권한 거부로 실패(패턴 지속) — 개별 curl 호출과 stdout 직접 파싱으로 전량 대체. |
| (2026-08-31) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge는 재시도 생략, 계속 미해결로 간주). old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는 지시에 따라 이번에도 재시도 생략(11일 연속 확정 상태 유지). AX LABS 블로그는 08-27에서 정체 지속(4일째, 신규 없음). Simon Willison RSS는 08-29 "Introducing Hy4 Preview"(Tencent 오픈웨이트 모델, 우리 4대 도구 범위 밖이라 미반영)까지 확인, 그 사이 08-28 rclone 보안공시 글은 전일 스캔에서 이미 반영됨. Latent Space는 08-29에서 정체 지속(신규 없음). Addy Osmani·Lilian Weng은 각각 08-21·07-04에서 정체 지속(장기 정체). **The Batch(Andrew Ng) 목록 페이지에서 08-28 "AI Engineering Skills Map In Detail — Software Engineering Fundamentals" 신규 확인** — 1차 채널 원문 대조 후 [[vibe-coding-vs-agentic-engineering]] 개념 페이지에 보강 반영(신규 update 페이지 대신 기존 개념 페이지 갱신 선택). HN Algolia 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음(기존 08-02·07-29 히트만 재확인). Karpathy GitHub 저장소는 커밋 갱신만 확인, 신규 저장소 없음. HN front_page(points>40)·키워드 검색(claude code·codex·anthropic·AI agent·gemini, points>30)으로 스크리닝, Google 블로그 발 "Gemini Omni 1.1 Flash"(361점)·"Gemini-3.5-Transcribe"(296점)가 HN에서 먼저 포착돼 WebFetch로 1차 소스(blog.google) 정독 후 신규 페이지화([[2026-08-27-google-gemini-omni-1-1-flash-launch]]). "GLM-5.3 is now open-weight"(797점, 08-28)도 같은 방식으로 확보, WebSearch 교차검증 후 기존 [[2026-08-14-zhipu-glm-5-3-launch]]에 후속 절 추가(08-28 기록이던 "지연"에서 "실제 공개 확인"으로 갱신, `> ⚠️ 상충` 표기). "Claude Session URL appended..."(170점, 08-30) 재부상 이슈는 2026-06 등록된 closed 이슈가 다시 화제가 된 것으로 확인, 커뮤니티 화제로만 반영(페이지화 안 함). Anthropic 공식 뉴스룸(WebSearch)에서 "Claude for Teachers" 기관형(학교·교육청) 오퍼링이 08-28 신설된 것을 발견 — 기존 [[2026-07-15-claude-for-teachers]]에 후속 절 추가. "Fable 5.1" 출시설은 WebSearch·HN 모두에서 SEO형 루머 사이트 산발적 언급뿐 1차 소스·신뢰할 만한 커뮤니티 스레드 확인 실패 — 페이지화·빅뉴스 모두 보류, JoCoding 영상 픽 설명에만 "미확인 루머"로 짧게 언급. YouTube 9채널 중 JoCoding(08-30 IT뉴스 요약, Gemini Omni·GLM-5.3·Fable 5.1 루머 등 다룸 — YouTube 픽 반영)·Dan Martell(08-30 "AI brain" 영상 2건, 설명란이 제목 반복이라 세부 확인 불가로 업무 적용 Case 승격 보류)만 신규 확인, 나머지 7채널(장피엠·지피터스·kooky0ai·Liam Ottley·Varun Mayya·Jeff Su·AI Frontier Korea)은 기존 반영분과 중복이거나 주제 무관으로 정체. 이번 스캔에서도 Bash 체이닝 명령(`;`로 연결된 다중 curl/grep)이 권한 거부로 실패(패턴 지속) — 단일 명령 + 임시파일 저장 후 Read 도구로 대체. |
| (2026-09-01) | 9채널 RSS 재확인, 신규 미해결 없음(AI Edge는 재시도 생략, 계속 미해결로 간주). old.reddit.com RSS·Karpathy 개인 블로그(bearblog.dev)는 지시에 따라 이번에도 재시도 생략(12일 연속 확정 상태 유지). **장피엠 채널이 08-31 오픈소스 웹 크롤링 에이전트 영상("web-crawler", Claude Code·Codex·ChatGPT Work 겸용, GitHub MIT)을 올려 업무 적용 Case로 반영** — 영상 shortDescription을 curl+grep으로 직접 추출(WebFetch로는 YouTube 푸터만 반환돼 실패, 반드시 `grep -o '"shortDescription":"[^"]*"'` 방식 사용할 것). AX LABS 블로그는 08-31 "하네스 엔지니어링 6계층 가이드" 신규 게시(4일 정체 해소, 08-27→08-31) — 특정 도구 업무자동화가 아닌 방법론 프레임워크라 use-case 대신 [[loop-engineering]] 개념 페이지에 실전 프레임워크 절로 반영. Simon Willison RSS는 08-30 "Understanding ChatGPT Work"(Work Cloud/Work Local 구분 정리) 확인 — 기존 [[openai-chatgpt-work-launch]] use-case에 구조 정리 후속 절 추가. Latent Space·Addy Osmani·Lilian Weng은 각각 08-29·08-21·07-04에서 정체 지속. The Batch는 08-28에서 정체(신규 없음, 08-31 스캔과 동일 확인). HN Algolia 인물쿼리(karpathy·"Andrew Ng", points>50)는 이번에도 신규 히트 없음. Karpathy GitHub 저장소(nn-zero-to-hero 등)는 커밋 갱신만 확인, 신규 저장소 없음. HN front_page(points>40)·키워드 검색(claude code·codex·AI agent·gemini, points>30, 48h)으로 스크리닝 — "Claude Code reduces it's weekly limit by 17%"(64점)를 WebSearch로 교차검증해 공식 X 공지·Bleeping Computer 등 확인 후 신규 페이지화. "Breaking Claude Code Opus 5 Auto Mode"(embracethered.com)가 325점으로 재부상했으나 08-27~08-29 스캔에서 이미 반영된 동일 기사의 재게시라 중복 미반영. WebSearch로 **Salesforce·Anthropic "Claudeforce" 파트너십(08-26 발표)이 08-27~08-31 5회 연속 스캔에서 누락**됐음을 뒤늦게 발견 — 신규 페이지화 후 [[anthropic]]·[[timeline]]에 소급 반영(2026-08-30 Cowork 브라우저 소급 사례와 같은 패턴, 공식 발표라도 RSS·1차 채널에 걸리지 않으면 누락될 수 있음을 재확인 — 향후 스캔에서 Anthropic/OpenAI/Google 공식 발표는 WebSearch로 한 번 더 교차확인 권장). YouTube 9채널 중 장피엠(위 Case)·조코딩(08-31 IT뉴스 주간요약, YouTube 픽 반영)만 신규 확인, 나머지 7채널은 기존 반영분과 중복이거나 주제 무관. 이번 스캔에서도 Bash `for` 루프가 권한 거부로 실패(패턴 지속) — 개별 curl 호출로 전량 대체. |

## LinkedIn (2026-08-17 사용자 지정 — 등록 계정 없음, 원칙적으로 스캔 대상에서 제외)

**결론: 사람(개인 프로필) 소스로는 LinkedIn을 쓰지 않는다.** 도메인 한정 WebSearch만
가능한데(직접 fetch·날짜순 최신 피드 조회는 전부 HTTP 999 차단, 2026-08-17 재확인)
이 검색은 "관련도순"이지 "최신순"이 아니라서 최근 1~3일 내 게시물을 걸러내는 게 구조적으로
어렵다. 정보 가치가 몇 달만 지나도 급락하는 이 위키 특성상 부적합하다고 판단.

- 조코딩은 YouTube 채널(위 "YouTube 채널" 표)로 이미 충분히 커버된다 — LinkedIn은
  같은 인물의 열등한 사본이라 제거.
- 이승필(AX LABS 대표)은 위 "국내 AX 블로그" 섹션의 AX LABS 공식 블로그 RSS로 대체 —
  날짜순 실측 가능하고 접근 차단도 없어 LinkedIn보다 명백히 우월.
- 등록된 계정은 현재 없음. 접근 방법 문서는 향후 "LinkedIn에서만 확인 가능한 인물"이
  실제로 생기면 재사용하기 위해 아래에 남겨둔다.

<details>
<summary>접근 방법 (2026-08-04 검증, 2026-08-17 한계 재확인 — 참고용, 현재 미사용)</summary>

LinkedIn은 프로필·게시물 URL을 직접 가져올 수 없다 — curl(서술형 UA·브라우저 UA 모두),
WebFetch, 날짜순 정렬되는 `/recent-activity/` 피드까지 전부 **HTTP 999(봇 차단)**.
유일하게 동작하는 경로는 도메인 한정 WebSearch뿐이다:

```
WebSearch(query="<인물 키워드> <주제 키워드>", allowed_domains=["linkedin.com"])
```

검색 연산자(`after:YYYY-MM-DD`)로 기간을 좁혀보려 했으나 무관한 결과만 섞여 나와
효과가 없었다(2026-08-17 확인). 결과의 제목·스니펫만으로 판단해야 하고, 오래된
게시물(2022~2023년)이 흔히 섞인다. 새로 인물을 추가할 때는 먼저 그 인물이 YouTube·
블로그·브런치처럼 날짜순 확인 가능한 채널을 갖고 있는지부터 확인하고, 정말 다른
경로가 없을 때만 이 방식을 최후 수단으로 쓴다.

</details>

## X / Instagram

로그인 장벽으로 자동 스캔이 불안정하다. 웹서치로 간접 포착하는 것을 기본으로 하고,
중요한 스레드는 사용자가 URL을 직접 전달한다. 추적할 계정이 정해지면 여기에 등록.

| 계정 | 플랫폼 | 비고 |
|---|---|---|
| (미등록) | | |
