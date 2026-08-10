---
type: use-case
date: 2026-08-05
tools: [claude]
mechanism: [mcp]
domain: content-creation
task: 숏폼 영상 자막(애니메이션 캡션) 생성·편집·스타일링을 자연어 명령으로 자동화
outcome: 커뮤니티 반응 압도적 호평("갓센드"), Canva 대비 "훨씬 빠르다"는 초기 사용자 평가 — 정량 수치는 미확인
model: 미확인
cost: 미확인 (오픈소스·무료, 로컬 Whisper 사용으로 API 비용 없음)
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course]
source: https://old.reddit.com/r/ClaudeAI/comments/1vg206l/i_built_a_captioning_app_for_shortform_video_then/
---

# CapForge — 로컬 자막 앱을 Claude에 MCP로 연결해 "말로 자막 편집"을 구현하다

> **공식**: Claude(MCP)로 로컬 자막 앱 CapForge의 자막 편집·스타일링을 자연어 명령으로
> 자동화 → 오픈소스 무료 공개, 커뮤니티 압도적 호평(주장·일화)

## 무엇을 자동화했나

한 개발자가 숏폼 영상을 로컬에서 전사(transcribe)하고 애니메이션 캡션을 입히는 앱
**CapForge**를 만들었다 — 기존 클라우드 자막 툴이 전부 구독제였고 미공개 영상을 남의
서버에 올리기 싫었던 것이 동기. 여기에 **Claude를 MCP로 연결**해, 사람이 직접 타이밍을
맞추거나 스타일을 클릭하지 않고 자연어로 "이렇게 편집해줘"라고 말하면 Claude가 자막
편집을 대신 수행하도록 만들었다(2026-08-05, r/ClaudeAI 공개, 40+ 댓글 화제).

## 어떻게 구성했나 (아키텍처)

- **전사 엔진**: 로컬 Whisper 모델로 단어 단위 타이밍까지 포함한 자막을 생성(클라우드
  업로드 없음).
- **MCP 노출**: CapForge 앱을 Claude에 MCP 서버로 노출 — Claude가 단어 단위 타임코드가
  달린 트랜스크립트를 읽고, 특정 순간을 찾아 키워드를 강조하거나 filler word(어, 음 등)를
  제거하고, 렌더링된 프레임 한 장을 직접 "보고" 잘못된 부분을 스스로 고치는 루프를 수행.
- **코-저작(co-author) 모드**: 프리셋을 고르는 대신 Claude가 HTML/CSS/JS로 새 캡션
  컴포넌트를 직접 작성 — "낡은 VHS 테이프처럼 보이게 해줘" 같은 요청이 실제 커스텀
  스타일로 구현됨.
- **다국어 처리**: Claude로 자막을 번역할 수 있으나 단어 단위 타이밍이 깨지는 한계가
  있어, 언어별로 각각 렌더링한 뒤 별도 영상 편집기에서 합치는 방식으로 우회.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Claude MCP 연동, 구체 모델명 원문 미기재) |
| 비용 | 미확인 (앱 자체는 오픈소스·무료, 로컬 Whisper 사용으로 API 종속 비용 없음) |
| 권한 | 미확인 |
| 성숙도 | prototype — "아직 작업 중(work in progress)"이라고 저자가 직접 명시, 수동 타이밍 워크플로·프리뷰-렌더링 불일치 등 미해결 과제 존재 |

## 성과와 수치

- **정량 수치**: 원문에 처리 속도·비용 등 구체 수치는 없음 — "미확인"이 정직한 평가.
- **정성 평가(주장/일화)**: 커뮤니티 반응이 "압도적 호평"으로 요약됨. 초기 사용자들이
  "stupid easy to use"이며 Canva 같은 기존 툴보다 "훨씬 시간을 아껴준다"고 평가.
  일부는 캡션 스타일(한 단어씩 표시)을 선호하지 않아 반사적으로 비추천했으나, 스레드
  다수는 오픈소스·로컬 구현 자체를 높이 평가.

## 재현 가이드

- **난이도**: 중 (로컬 Whisper 통합 + MCP 서버 구현 필요, 코드 작성 필요)
- **준비물**: 로컬 Whisper 모델 실행 환경, Claude(MCP 지원 클라이언트), 렌더링 파이프라인
- **핵심 단계**:
  1. 로컬 Whisper로 영상 음성을 단어 단위 타임코드까지 전사한다.
  2. 전사 결과·자막 렌더링 기능을 MCP 서버로 노출해 Claude가 읽고 쓸 수 있게 만든다.
  3. Claude가 프레임을 렌더링해 직접 확인하고 스스로 수정하는 자기검증 루프를 설계한다.
  4. 프리셋 대신 Claude가 직접 HTML/CSS/JS 캡션 컴포넌트를 생성하는 "co-author 모드"를
     추가해 커스텀 스타일 요청에 대응한다.

## 강의·AX 활용 포인트

- **강의**: "구독형 SaaS 대신 로컬 오픈소스 앱 + Claude MCP"로 개인 창작 워크플로를
  대체한 사례로, [[youtube-subtitle-automation-claude-codex-whisper]]와 짝지어
  "자막 자동화" 카테고리의 두 번째 재현 가능 레퍼런스로 쓸 수 있다 — 하나는 CLI 파이프라인,
  하나는 MCP 기반 대화형 편집이라는 점에서 접근 방식 비교 소재로 좋다.
- **AX**: 미공개 콘텐츠(영상)를 다루는 팀이 클라우드 업로드 없이 로컬에서 AI 편집
  워크플로를 구성하고 싶을 때 참고할 수 있는 "로컬 우선(local-first) + MCP" 아키텍처
  패턴.

## 출처

- [Reddit r/ClaudeAI — I built a captioning app for short-form video, then gave Claude an MCP so it can work with captions alone](https://old.reddit.com/r/ClaudeAI/comments/1vg206l/i_built_a_captioning_app_for_shortform_video_then/)
- [CapForge](https://capforge.cc)
