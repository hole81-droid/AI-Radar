# AI Radar — LLM Wiki 스키마

이 저장소는 최신 AI 트렌드(특히 Claude Code, Codex, ChatGPT, Gemini의 업데이트)를 추적하는
**LLM이 유지·관리하는 위키**다. Claude가 이 위키의 관리자이고, 사용자는 소스 큐레이션과 질문을 담당한다.
이 문서는 위키의 구조·규칙·워크플로우를 정의한다. 모든 세션에서 이 규칙을 따른다.

## 원칙

- **언어**: 모든 위키 페이지·뉴스레터는 한국어로 작성한다. 제품명·기능명·인명 등 고유명사는 영문을 유지한다.
- **raw/는 불변**: 원본 소스는 읽기만 하고 절대 수정하지 않는다.
- **wiki/는 Claude 소유**: 페이지 생성·갱신·교차참조 유지 모두 Claude의 책임이다.
- **링크**: Obsidian 위키링크 `[[파일명]]` 형식을 사용한다. 파일명은 영문 kebab-case.
- **모순 처리**: 새 정보가 기존 페이지 내용과 충돌하면 조용히 덮어쓰지 말고
  `> ⚠️ 상충:` 인용 블록으로 명시한 뒤 최신 정보를 우선한다.
- **출처**: 모든 사실에는 원문 URL 또는 `raw/` 파일 링크를 남긴다.
- **활용처는 뷰(view)다**: 자료를 활용처별로 분류·저장하지 않는다. 하나의 페이지가
  강의 소재이면서 동시에 AX 근거일 수 있다. frontmatter의 `uses` 필드(복수 가능)로만 표시하고,
  활용처별 산출물은 요청 시 위키를 재료로 `outputs/`에 생성한다.

## 디렉토리 구조

```
CLAUDE.md          이 문서 (스키마)
index.md           전체 페이지 카탈로그 — 질의 시 여기부터 읽는다
log.md             시간순 작업 기록 (append-only)
sources.md         모니터링 소스 레지스트리
raw/YYYY-MM/       원본 소스 (불변), raw/assets/ 이미지
wiki/tools/        도구별 허브 페이지 (claude-code, codex, chatgpt, gemini …)
wiki/updates/      개별 업데이트 페이지: YYYY-MM-DD-<tool>-<slug>.md
wiki/concepts/     개념 페이지 (mcp, agentic-coding …)
wiki/players/      회사·인물 페이지
wiki/use-cases/    AI 적용 사례
wiki/analysis/     질의 결과 축적 (비교·분석)
wiki/timeline.md   업계 주요 이벤트 연대기
newsletter/        데일리 뉴스레터: YYYY-MM-DD.md
outputs/course/    학습과정 기획 산출물
outputs/ax-strategy/ AX 전략 산출물
docs/              설계 문서
```

## 페이지 규칙 (frontmatter)

모든 `wiki/` 페이지는 YAML frontmatter를 갖는다:

```yaml
---
type: update | tool | concept | player | use-case | analysis
date: YYYY-MM-DD          # 생성일 아닌 사건·발표일
tools: [claude-code]       # 관련 도구 (해당 시)
importance: high | medium | low
uses: [course, ax]         # 활용처 태그, 복수 가능, 해당 없으면 생략
source: <원문 URL>
---
```

- `uses: course` — AI 학습과정 기획 소재로 가치 있음 (가르칠 만한 기능·활용법·개념)
- `uses: ax` — 기업 AX 전략 근거로 가치 있음 (도입 사례, 시장 동향, 벤더 전략)

### updates/ 페이지 (이 위키의 심장)

파일명: `YYYY-MM-DD-<tool>-<slug>.md`. 내용: 무엇이 바뀌었나 → 왜 중요한가 →
활용 포인트 → 출처. 생성 시 반드시 해당 `[[tools/허브]]` 페이지와 `[[timeline]]`에 링크를 추가한다.

### tools/ 허브 페이지

각 도구의 "현재 무엇을 할 수 있는지" 최신 종합 + 주요 업데이트 연대기(updates/ 링크 목록).
새 update 수집 시마다 갱신한다.

## 워크플로우

### 1. Scan (스캔) — "오늘 스캔해줘" 또는 스케줄 실행

1. `sources.md`의 소스들을 WebSearch/WebFetch로 훑는다 (최근 1~3일).
2. `newsletter/YYYY-MM-DD.md`를 뉴스레터 템플릿(아래)으로 생성한다.
3. `log.md`에 `## [YYYY-MM-DD] scan | 항목 N건` 기록.
4. **위키에는 아직 반영하지 않는다** — 뉴스레터가 승인(triage) 인터페이스다.

### 2. Ingest (수집) — 사용자가 뉴스레터 항목을 승인하면

1. 원문을 가져와 `raw/YYYY-MM/`에 저장 (마크다운 변환).
2. `wiki/updates/` 페이지 생성 (또는 성격에 따라 use-cases/concepts).
3. 관련 허브·개념·타임라인 페이지 갱신, 모순 표시.
4. `index.md` 갱신, `log.md`에 `## [YYYY-MM-DD] ingest | 제목` 기록.
5. 뉴스레터의 해당 체크박스를 `- [x]`로 갱신.

### 3. Query (질의) — 사용자 질문에 답할 때

1. `index.md`를 먼저 읽고 관련 페이지를 찾아 읽는다.
2. 출처를 인용해 답한다.
3. 재사용 가치가 있는 답(비교표, 분석)은 `wiki/analysis/`에 파일링하고 index에 등록한다.

### 4. Lint (점검) — "위키 점검해줘", 주 1회 권장

고아 페이지, 낡은 주장, 페이지 없는 중요 개념, 누락된 교차참조, 웹서치로 메울 수 있는
공백을 찾아 보고하고, 사용자 승인 후 수정한다. `log.md`에 `lint` 기록.

### 5. Output (산출물) — "강의 소재 뽑아줘", "AX 보고서 만들어줘"

`uses` 태그로 관련 페이지를 필터링해 `outputs/course/` 또는 `outputs/ax-strategy/`에
산출물을 생성한다. 산출물에는 근거 페이지 링크를 남긴다.

## 뉴스레터 편집 기준 (중요 — 2026-07-07 사용자 피드백 반영)

**독자는 개발자가 아니다.** 테크 뉴스 미디어(예: 조코딩의 AI News)가 다룰 수준의 트렌드를 담는다.

**포함할 것:**
- 새 모델·서비스·기능 출시 중 일반 사용자·비즈니스에 의미 있는 것
- 화제가 된 AI 활용 사례·활용법 (바이럴 데모, 실전 워크플로우)
- 업계 빅뉴스: 경쟁 구도, 투자, 요금·정책 변화, 화제의 인물 발언
- **등록 YouTube 채널의 최신 영상** 중 볼만한 것 — AI 업데이트 소개, 사용법 강의, 활용 사례 (sources.md의 채널이 1차 소스다)

**제외할 것:**
- 버전 패치노트·API changelog 세부사항, 개발자 전용 기능
- 예외: 개발자용 업데이트라도 "일반 사용자에게 무엇이 가능해지는가"로 번역할 수
  있을 만큼 크면 그 관점으로 다시 써서 포함 (버전 번호·기술 용어 나열 금지)

**어조:** 각 항목은 "무슨 일이 있었나"보다 "왜 관심 가질 만한가"를 비개발자 언어로 설명한다.

## 뉴스레터 템플릿

```markdown
---
type: newsletter
date: YYYY-MM-DD
---
# AI Radar 데일리 — YYYY-MM-DD

## 오늘의 헤드라인
(3줄 요약)

## 빅 뉴스
- [ ] **제목** — 무슨 일 + 왜 중요한가 2~3문장. [출처](url)

## 화제의 활용법 · 사례
- [ ] **제목** — 요약 + 어디에 써먹을 수 있는가. [출처](url)

## YouTube 픽
- [ ] **[채널명] 영상 제목** — 내용 요약 + 볼 이유. [링크](url)

## AX 시사점
(한 단락 — 기업 도입 관점에서 오늘 뉴스가 갖는 의미)

---
*위키에 반영할 항목에 체크하거나, "N번 반영해줘"라고 말하세요.*
```

- 각 항목의 체크박스는 위키 반영 여부 표시다. 사용자가 체크하거나 구두로 지시하면 Ingest 실행.
- 스캔 결과가 빈약한 날도 파일은 생성한다 ("특이사항 없음").
- 하루 분량 가이드: 빅 뉴스 3~6건, 활용법·사례 2~4건, YouTube 픽 2~5건.

## 토큰 효율 규칙 (모든 워크플로우 공통)

- **Scan은 가볍게**: 단일 서브에이전트(model: sonnet, effort: low)로 실행. RSS·목록 페이지 우선,
  WebSearch 5~8회·WebFetch 15회 이내, 기사 원문 정독 금지(제목·리드로 판단).
  원문 정독·저장은 사용자가 Ingest를 승인한 뒤에만 한다.
- **RSS 캐시**: 스캔 중 해결한 RSS URL은 sources.md의 "RSS 캐시" 섹션에 기록해 재사용한다.
- **Query는 선택적으로 읽기**: index.md → 관련 페이지만. 위키 전체 훑기 금지.
- **병렬 에이전트는 대규모 작업에만**: 백필·린트처럼 명시적 요청이 있을 때만 다중 에이전트 사용.
  데일리 운영은 에이전트 1개로 충분하다.
- **갱신은 변경분만**: 허브·인덱스 페이지는 관련 줄만 Edit로 수정, 전체 재작성 금지.

## log.md 형식

append-only. 각 항목은 `## [YYYY-MM-DD] <operation> | <제목>` 으로 시작한다.
operation: scan | ingest | query | lint | output. 최근 기록 확인: `grep "^## \[" log.md | tail -5`
