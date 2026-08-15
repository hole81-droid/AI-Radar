# 일잘러 장피엠 — "슬라이드마스터"(slide-master) Claude Code/Codex PPT 제작 에이전트 무료 공개

- 원문(YouTube): https://www.youtube.com/watch?v=P9EfmIrgjXw ("알아서 PPT 만들어주는 AI 에이전트
  무료로 나눠드려요! | Claude Code / Codex 에이전트 활용")
- GitHub: https://github.com/byungjunjang/slide-master (원 upstream: hugohe3/ppt-master, MIT)
- 업로드일: 2026-08-15 (채널: 일잘러 장피엠, UCSkpTOEl_zW6b4Y7M_Prefg)
- 수집일: 2026-08-16

## 영상 설명 원문 요지

ChatGPT나 Claude에 "PPT 만들어줘"라고 하면 회사 양식에도 안 맞고 완성도도 아쉬운 문제를
3개월간 직접 써보며 다듬은 PPT 제작 에이전트 'slide-master'로 해결했다며 무료 공개.
비개발자 기준으로 GitHub 세팅법부터 설명하고, ChatGPT Work(Codex) vs Claude Code 결과물
비교, 회사 슬라이드 디자인 시스템 구축·양식화, 텔레그램·슬랙 연동 모바일 PPT 생성까지 다룸.

## GitHub 저장소 요약 (README 기준)

- **기능**: PDF·DOCX·URL·마크다운·엑셀/CSV 등 문서를 입력하거나 주제만 던지면, 실제
  DrawingML 객체로 구성된(이미지가 아닌) 편집 가능한 네이티브 PPTX를 생성.
- **지원 도구**: Claude Code(주 테스트 환경), Codex(CLI·ChatGPT 데스크톱 앱), Cursor,
  VS Code Copilot, JetBrains 확장 등 파일 입출력+명령 실행이 가능한 모든 에이전트.
- **구조**: `.claude/skills/ppt-master/` 아래 모듈형 워크플로(`beautify-pptx`,
  `native-enhance-pptx`, `create-template`, `verify-pptx-export`, `visual-review`).
  고정 타이포그래피(Pretendard), 재사용 템플릿(McKin사, Apple, Naver 스타일), 아이콘
  라이브러리(Tabler, Phosphor) 내장.
- **파이프라인**: 문서 인입 → 전략 확인(브라우저 UI) → SVG 페이지 생성(실시간 프리뷰) →
  품질 게이트(기하 구조 검증, 텍스트 오버플로 탐지) → PPTX 익스포트.
- **기술 스택**: Python 3.10+, 커스텀 SVG→DrawingML 컨버터, Playwright(옵션, 렌더링용),
  OfficeCLI 1.0.135(옵션, 검증용).
- **설치**: Python 3.10+ PATH 설정 → Claude Code 등 호환 에이전트 준비 → git clone +
  `pip install -r requirements.txt` → (옵션) OpenAI/Gemini API 키(AI 이미지 생성용) →
  (옵션) OfficeCLI(PPTX 검증용).
- **라이선스**: MIT(번들 폰트·아이콘은 각자 라이선스, SIL OFL 포함).
- **현황(수집 시점)**: GitHub star 50개, fork 16개. 별도 도입 성과 수치는 README에 없음.

## 참고

- 텔레그램·슬랙 연동은 영상 설명에서 언급되나 GitHub README에는 명시적 MCP/봇 통합 문서가
  없음 — 영상 자체 커스터마이징 팁일 가능성. "미확인"으로 표기.
