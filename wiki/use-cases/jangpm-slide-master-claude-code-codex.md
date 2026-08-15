---
type: use-case
date: 2026-08-15
tools: [claude-code, codex]
mechanism: [skills]
domain: content-creation
task: 회사 양식에 맞는 PPT(슬라이드) 제작 자동화 — 문서/주제 입력 → 편집 가능한 네이티브 PPTX 생성
outcome: 오픈소스 무료 공개(MIT), 3개월 자체 사용 후 공개, GitHub 50 star·16 fork (수집 시점)
model: 미확인 (영상은 Claude Code·ChatGPT Work(Codex) 비교만 언급, 특정 모델 버전 불명)
cost: 미확인
permissions: 미확인
maturity: pilot
evidence: claimed
importance: medium
uses: [course, ax]
source: https://www.youtube.com/watch?v=P9EfmIrgjXw
---

> **공식**: Claude Code·Codex로 Skill 기반 PPT 제작 에이전트("slide-master")를 활용해
> 회사 양식에 맞는 슬라이드 제작을 자동화 → 이미지가 아닌 편집 가능한 네이티브 PPTX를
> 무료 오픈소스로 공개

## 무엇을 자동화했나

"일잘러 장피엠"(YouTube) 채널 운영자가 3개월간 직접 사용하며 다듬은 PPT 제작 에이전트
'slide-master'를 무료로 공개했다. 문제의식은 "ChatGPT·Claude에 그냥 'PPT 만들어줘'라고
하면 회사 양식에도 안 맞고 완성도도 아쉽다"는 것 — 이를 Skill 기반 워크플로로 해결했다.
PDF·DOCX·URL·마크다운·엑셀/CSV 문서를 입력하거나 주제만 던지면, 회사 디자인 시스템에
맞춘 편집 가능한 PPTX(실제 PowerPoint 요소로 구성, 이미지 캡처가 아님)를 생성한다.

## 어떻게 구성했나 (아키텍처)

- **Skill 구조**: `.claude/skills/ppt-master/` 아래 모듈형 워크플로 — `beautify-pptx`,
  `native-enhance-pptx`, `create-template`, `verify-pptx-export`, `visual-review`.
- **파이프라인**: 문서 인입 → 전략 확인(브라우저 UI) → SVG 페이지 생성(실시간 프리뷰) →
  품질 게이트(기하 구조 검증·텍스트 오버플로 탐지) → 커스텀 SVG→DrawingML 컨버터로 PPTX
  익스포트.
- **디자인 시스템**: 고정 타이포그래피(Pretendard), 재사용 템플릿(맥킨지·Apple·네이버
  스타일 프리셋), 아이콘 라이브러리(Tabler, Phosphor) 내장 — "회사 양식 학습 후 찍어내기"
  구조.
- **호환 도구**: Claude Code(주 테스트 환경), Codex(CLI·ChatGPT 데스크톱), Cursor,
  VS Code Copilot, JetBrains 확장 등 파일 입출력+명령 실행이 가능한 모든 에이전트에서
  동작 — 영상에서는 ChatGPT Work(Codex) vs Claude Code 결과물을 비교해서 보여준다.
- **비개발자 접근성**: 로컬 설치 없이 써온 직장인 대상으로 GitHub clone부터 비개발자
  눈높이로 설명하는 것이 영상의 핵심 포인트.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 미확인 (Claude Code·Codex 양쪽에서 동작하되 특정 모델 버전은 원문에 없음) |
| 비용 | 미확인 (Python 3.10+·git clone만으로 구동, AI 이미지 생성용 OpenAI/Gemini API 키는 옵션) |
| 권한 설계 | 미확인 — 로컬 실행형 도구로 별도 승인 게이트 언급 없음 |
| 성숙도 | pilot (제작자 3개월 자체 사용 후 공개, GitHub 50 star·16 fork로 초기 확산 단계) |

## 성과와 수치

- 제작자 자기 보고(claimed): "3개월간 직접 쓰며 다듬었다"는 서술 외 처리 시간 절감 등
  정량 비교 수치는 영상·README 어디에도 없다.
- GitHub 저장소(byungjunjang/slide-master, upstream: hugohe3/ppt-master, MIT 라이선스)
  기준 50 star·16 fork — 수집 시점 스냅샷이며 도입 성과 지표는 아니다.
- 영상에서 텔레그램·슬랙 연동으로 이동 중 모바일 PPT 생성을 시연한다고 소개하나, GitHub
  README에는 해당 통합이 문서화되어 있지 않아 "미확인"으로 남긴다.

## 재현 가이드 (난이도: 중)

1. Python 3.10+ 설치·PATH 설정 + Claude Code 또는 Codex 등 호환 에이전트 준비.
2. `git clone https://github.com/byungjunjang/slide-master` 후
   `pip install -r requirements.txt`.
3. `.claude/skills/ppt-master/` Skill을 프로젝트에 연결하고, 회사 로고·색상·폰트 등으로
   `create-template` 워크플로를 실행해 자체 디자인 시스템을 만든다.
4. 문서(PDF/DOCX/URL/마크다운)를 입력하거나 주제를 자연어로 지시해 SVG 프리뷰 → PPTX
   익스포트까지 실행한다.
5. (옵션) OfficeCLI로 최종 PPTX의 기하 구조·텍스트 오버플로를 검증하는 품질 게이트를 거친다.

## 강의·AX 활용 포인트

- "이미지가 아닌 편집 가능한 네이티브 PPTX 생성"은 기존 AI 슬라이드 도구들의 흔한 약점
  (수정 불가능한 캡처 이미지)을 정면으로 다룬 사례라 강의에서 비교 시연하기 좋다.
- 회사 양식(디자인 시스템)을 Skill/템플릿으로 고정하는 패턴은 [[claude-design-workflow-templates]]
  (Jeff Su, Claude Design DESIGN.md 3단계)와 같은 원리 — 두 사례를 나란히 비교하면
  "네이티브 파일 vs Claude Design 프리뷰" 접근의 차이를 가르치는 소재가 된다.
- AX 관점에서는 강의안·보고서 PPT를 반복 제작하는 직군(강사·기획·컨설팅)에 재현 난이도
  "중"으로 바로 시도해볼 만한 무료 오픈소스 사례 — 다만 성과 수치가 전무해 도입 전
  자체 파일럿 검증이 필요하다.

## 출처

- [YouTube — 일잘러 장피엠, "알아서 PPT 만들어주는 AI 에이전트 무료로 나눠드려요! | Claude Code / Codex 에이전트 활용"](https://www.youtube.com/watch?v=P9EfmIrgjXw) (2026-08-15 업로드)
- [GitHub — byungjunjang/slide-master](https://github.com/byungjunjang/slide-master)
