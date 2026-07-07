# AI Radar Web

팀 공유용 웹앱: 데일리 뉴스레터 열람 · 위키 기반 AI 트렌드 Q&A · 외부 Agent 연동(MCP+REST).
위키 저장소(상위 폴더)의 마크다운을 빌드 시점에 읽어 제공한다. 설계: `../docs/superpowers/specs/2026-07-07-ai-radar-web-design.md`

## 로컬 실행

```bash
cd web
cp .env.example .env.local   # 값 채우기
npm install
npm run dev                  # http://localhost:3300
```

`predev`/`prebuild`가 상위 폴더의 wiki/·newsletter/·index.md를 `lib/content.generated.json`으로 직렬화한다.
위키 내용을 갱신했으면 dev 서버 재시작(또는 `npm run content`).

## Vercel 배포 (1회 설정)

1. 이 저장소(AI Radar 전체)를 GitHub private repo로 push
2. [vercel.com](https://vercel.com) → Add New Project → repo import
   - **Root Directory를 `web`으로 지정** (중요)
3. Environment Variables에 `.env.example`의 5개 값 입력
4. Deploy — 이후 `git push`마다 자동 재배포 (매일 아침 스캔 push → 뉴스레터 자동 갱신)

## 팀원 안내

- 웹: `https://<도메인>` 접속 → 공유 암호 입장
- Agent 연동: 사이트의 "Agent 연동" 메뉴 참조 (MCP 한 줄 연결)

## 구조

```
scripts/build-content.mjs   위키 → JSON 번들 (prebuild)
lib/       content 로더 · 키워드 검색 · Q&A(Claude API) · 인증(Web Crypto)
middleware.ts               공유 암호 세션 (agent API·MCP는 Bearer 토큰)
app/       뉴스레터 뷰어 · 위키 뷰어 · Q&A 채팅 · Agent 안내
app/api/   login · qa · agent/{search,pages,newsletter} · [transport](MCP)
```
