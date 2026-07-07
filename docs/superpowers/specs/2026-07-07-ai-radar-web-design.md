# AI Radar Web — 팀 공유 웹앱 설계

날짜: 2026-07-07 · 상태: 승인됨 (사용자 위임: "알아서 잘 만들어주세요")

## 목적

큐레이터 1인(위키 소유자) + 열람 다수(팀원) 구조에서, 팀원에게 세 가지를 제공:
1. 데일리 뉴스레터 열람
2. 최신 AI 트렌드 Q&A (위키 지식 기반, 출처 인용)
3. 외부 Agent 연동 (MCP + REST)

## 확정 결정

| 항목 | 선택 |
|---|---|
| 배포 | Vercel (GitHub push → 자동 재배포) |
| 위치 | 위키 repo 내 `web/` 폴더 (모노레포) |
| 데이터 | 별도 DB 없음 — 빌드 시 위키 마크다운을 JSON 번들로 생성 |
| Q&A LLM | Anthropic API `claude-sonnet-5` (키는 배포 시 사용자 발급) |
| Agent 연동 | MCP(Streamable HTTP) + REST, 공통 Bearer 토큰 |
| 인증 | 웹 UI: 공유 암호 1개 → 서명 쿠키(30일) / Agent API: Bearer 토큰 |

## 아키텍처

```
web/
├── scripts/build-content.mjs   # prebuild: ../wiki, ../newsletter, ../index.md → lib/content.generated.json
├── middleware.ts               # 쿠키 인증 (예외: /login, /api/mcp, /api/agent/*)
├── app/
│   ├── login/                  # 공유 암호 입력
│   ├── page.tsx                # 홈 = 최신 뉴스레터
│   ├── newsletter/[date]/      # 뉴스레터 뷰어 (목록 사이드바)
│   ├── wiki/[...slug]/         # 위키 페이지 뷰어 ([[위키링크]] → 내부 링크)
│   ├── qa/                     # Q&A 채팅 (대화 저장 없음)
│   └── api/
│       ├── qa/route.ts         # POST {question} → 검색→Claude→{answer, sources}
│       ├── agent/search|pages|newsletter  # REST (Bearer)
│       └── mcp/[transport]/    # MCP 서버: search_wiki, get_page, get_latest_newsletter
└── lib/                        # content 로더, 검색(키워드 스코어링), 마크다운 렌더, auth
```

- **콘텐츠 파이프라인**: `prebuild`에서 위키 전체를 JSON으로 직렬화(frontmatter 파싱 포함). 런타임 fs 접근 불필요 → Vercel 서버리스에서 안전. 갱신 = git push = 재배포.
- **검색**: 소문자화 + 한국어 조사 대충 제거한 토큰의 TF 스코어 + 제목/태그 부스트. ~수백 페이지까지 충분. (임베딩 RAG는 범위 외 — 위키 철학과 동일하게 index 기반)
- **Q&A**: 검색 상위 4페이지(각 최대 ~6KB)를 컨텍스트로 system 프롬프트("AI Radar 위키 사서, 출처 인용 필수, 위키에 없으면 없다고 답변")와 함께 호출. 응답에 sources 배열. `QA_DAILY_LIMIT`(기본 200) 초과 시 거절 — 서버리스 인스턴스별 best-effort 카운터임을 명시.
- **MCP**: `mcp-handler` 패키지. 도구 3개. Authorization 헤더 검증.

## 환경변수

`SITE_PASSWORD`(팀 공유 암호), `AUTH_SECRET`(쿠키 서명), `AGENT_API_TOKEN`, `ANTHROPIC_API_KEY`, `QA_DAILY_LIMIT`(선택).

## 오류 처리

- API 키 미설정 → Q&A에 "관리자가 아직 API 키를 설정하지 않았습니다" 안내 (앱 자체는 동작)
- 검색 결과 0건 → Q&A는 "위키에 관련 지식 없음" 답변 (환각 방지)
- 잘못된 암호/토큰 → 401

## 배포 절차 (구축 후 사용자 액션)

1. GitHub private repo 생성 → push
2. Vercel에서 repo import, Root Directory=`web` 지정, 환경변수 4개 입력
3. 데일리 스캔 스케줄 작업에 `git push` 단계 추가 (repo 생성 후)

## 범위 외 (YAGNI)

대화 이력 저장, 계정별 로그인, 임베딩 검색, 위키 웹 편집, 뉴스레터 이메일 발송.
