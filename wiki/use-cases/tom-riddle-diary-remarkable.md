---
type: use-case
date: 2026-07-06
tools: []                      # 커스텀 Rust 앱 (기성 도구 아님 — LLM 백엔드는 model 필드 참고)
mechanism: [cli-pipeline]
domain: personal-productivity
task: 전자잉크 태블릿(reMarkable Paper Pro)의 손글씨를 비전 LLM과의 대화 인터페이스로 전환 — 쓰면 사라지고 AI가 필기체로 답장
outcome: 첫 잉크 응답까지 약 0.9~1.1초(실측), GitHub 스타 1.2k·포크 93 (v0.3.0)
model: 기본 gpt-4o-mini (OpenAI 호환 비전 모델 전환 가능 — OpenRouter·Groq·로컬 서버), pi 백엔드 기본 openai-codex/gpt-5.4-mini
cost: 미확인 (사용자 API 키 종량 과금 구조)
permissions: 커밋된 페이지의 저해상 그레이스케일 PNG만 외부 전송, 그 외 데이터 반출·텔레메트리 없음
maturity: prototype
evidence: measured
importance: medium
uses: [course]
source: https://github.com/MaximeRivest/Riddle
---
# 톰 리들의 일기 — 전자잉크 태블릿을 AI 대화 상대로 만든 오픈소스 프로젝트

> **공식**: 비전 LLM(기본 gpt-4o-mini)으로 '손글씨 캡처 → LLM → 필기체 스트리밍 렌더링' 파이프라인을 활용해 전자잉크 태블릿을 AI 대화 상대로 전환 → 첫 잉크 응답 약 0.9~1.1초 (실측)

## 무엇을 자동화했나

개발자 Maxime Rivest가 공개한 오픈소스 프로젝트 "Riddle". 전자잉크 태블릿
reMarkable Paper Pro에 펜으로 글을 쓰면 잠시 후 글씨가 종이에 스며들 듯 사라지고,
AI가 유려한 필기체로 답장을 획 단위로 써 내려간다 — 해리포터의 '톰 리들의 일기'를
실물로 재현했다. 키보드도 채팅 UI도 없이 **종이에 쓰는 행위 자체**를 AI 대화
인터페이스로 만든 실험. 7월 첫 주 내내 테크 미디어와 커뮤니티(reMarkable 사용자·
해리포터 팬덤)에서 바이럴을 탔고, Varun Mayya 등 대형 채널이 해설 영상을 만들었다.

## 어떻게 구성했나 (아키텍처)

파이프라인: (1) 손글씨 페이지를 저해상 그레이스케일 PNG로 래스터화 → (2) 비전 LLM에 전송
→ (3) 응답을 문장 단위로 스트리밍하며 손글씨체로 렌더링(Zhang-Suen 세선화 + 획 트레이싱).

- **언어·렌더링**: Rust 중심(63%), 디스플레이 백엔드는 C/C++. 렌더링 모드 2종 —
  전체 장악(takeover, 즉시 잉크) / 창 모드(AppLoad·QtFB)
- **LLM 백엔드 2종**: ① OpenAI 호환 `/chat/completions` — 기본 gpt-4o-mini, OpenRouter·
  Groq·로컬 서버 등 비전 모델이면 교체 가능, 추론 모델(Gemini 3.x, o-시리즈)도 지원.
  ② pi 백엔드 — 상주 `pi --mode rpc` 프로세스로 세션 간 대화 기록 유지, 기본
  openai-codex 프로바이더의 gpt-5.4-mini
- **전제**: 개발자 모드로 개조한 reMarkable + 런처(remagic 자동 설치), takeover 모드는
  reMarkable SDK 툴체인 필요. 공식 reMarkable 제품 기능이 아니다.
- 기술 스택이 전부 기성품(비전 LLM API + 기기 SDK + 폰트 렌더링) — 마법 같은 경험이
  특별한 신기술 없이 "조합"만으로 나왔다는 것이 핵심 교훈.

## 벤치마크 데이터

| 항목 | 값 | 근거 |
|---|---|---|
| 모델 | 기본 gpt-4o-mini (OpenAI 호환 비전 모델 교체 가능) / pi 백엔드 기본 gpt-5.4-mini(openai-codex) | GitHub README |
| 비용 | 미확인 — 사용자 본인 API 키 종량 과금, 건당 비용 미공개 | — |
| 권한 설계 | 커밋된 페이지 PNG만 설정된 백엔드로 전송, 그 외 반출 없음·텔레메트리 없음 | GitHub README |
| 성숙도 | prototype — 오픈소스 v0.3.0(활성 개발), MIT 라이선스, 비공식 개조 필요 | GitHub README |
| 증거 수준 | measured — 첫 잉크까지 ~0.9~1.1초는 개발자 실측치 | GitHub README |

## 성과와 수치

- 첫 잉크 응답까지 **약 0.9~1.1초** — 개발자 실측(measured), 온디바이스 기준
- GitHub 스타 1.2k·포크 93 (2026-07, v0.3.0) — 커뮤니티 화제성의 정량 지표
- 매출·비용 성과가 목적이 아닌 인터페이스 실험이므로 업무 성과 수치는 해당 없음

## 재현 가이드

- **난이도**: 중 (기기 개조 필요하나 코어는 공개 저장소 그대로 사용 가능)
- **준비물**: reMarkable Paper Pro(개발자 모드), remagic 런처, 비전 LLM API 키
  (또는 pi 백엔드), takeover 모드는 SDK 툴체인 + 기기의 `libqsgepaper.so`
- **핵심 단계**:
  1. reMarkable을 개발자 모드로 전환하고 런처를 설치한다 (remagic로 자동화)
  2. Riddle을 설치하고 OpenAI 호환 백엔드 + API 키를 설정한다 (기본 gpt-4o-mini)
  3. 창 모드로 먼저 검증한 뒤 필요 시 takeover 모드를 빌드한다
  4. 추론 모델을 쓰려면 `RIDDLE_OPENAI_REASONING=low` 설정으로 지연을 관리한다
- 워크숍 축소판: 기기 없이도 "손글씨 사진 → 비전 LLM → 응답" 파이프라인은 반나절
  실습 규모로 재현 가능

## 강의·AX 활용 포인트

- **강의**: 멀티모달 API 실습 예제로 최적 — 캡처→LLM→렌더링 3단 파이프라인이 교육용으로
  깔끔하다. "AI = 화면 속 채팅창"이라는 고정관념을 깨는 'AI 인터페이스 디자인' 토론 소재.
- 전시·팝업스토어·굿즈, 교육용 인터랙티브 콘텐츠 등 **비화면 AI 경험** 기획의 참조 사례.
- 프라이버시 설계(페이지 PNG 외 반출 없음·무텔레메트리)는 소형 AI 제품의 데이터 최소화
  원칙 예시로 쓸 수 있다.

## 출처

- [GitHub — MaximeRivest/Riddle](https://github.com/MaximeRivest/Riddle)
- [Notebookcheck (2026-07-06)](https://www.notebookcheck.net/Someone-turned-a-reMarkable-tablet-into-Tom-Riddle-s-diary.1335689.0.html)
- [Android Authority](https://www.androidauthority.com/remarkable-paper-pro-tom-riddles-diary-disappearing-ink-3684286/) · [Varun Mayya 해설 영상](https://www.youtube.com/watch?v=3toHU6cr384)
