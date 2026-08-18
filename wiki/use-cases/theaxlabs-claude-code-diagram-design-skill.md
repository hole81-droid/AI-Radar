---
type: use-case
date: 2026-08-14
tools: [claude-code, codex]
mechanism: [skills]
domain: content-creation
task: 프레젠테이션·보고서용 다이어그램(아키텍처·플로우차트·간트·ER 등 27종) 자연어 요청으로 자동 생성
outcome: 미확인 (효과 수치 없음 — PPT 정렬 시간 단축·범용 AI 출력 대비 완성도 개선을 정성적으로만 주장)
model: 미확인
cost: 미확인
permissions: 미확인
maturity: production
evidence: claimed
importance: medium
uses: [course, ax]
source: https://theaxlabs.com/blog/claude-code-ppt-diagram-design-skill
---

> **공식**: Claude Code(및 Codex·Pi)에 diagram-design 플러그인(skills)을 설치해
> 자연어 요청만으로 프레젠테이션용 다이어그램 27종을 자동 생성 → 회사 브랜드 색상·폰트가
> 자동 적용된 편집 가능한 SVG/PNG 산출물 획득

## 무엇을 자동화했나

AX LABS 블로그가 소개한 Claude Code 플러그인 **diagram-design**(제작: cathrynlavery)은
"아키텍처 다이어그램 그려줘" 같은 자연어 요청을 받아 구조(7종)·프로세스/타임라인(8종)·
비교(6종)·데이터(6종) 4개 카테고리, 총 27종 다이어그램 중 적합한 것을 스스로 선택해
생성한다. 회사 웹사이트 URL 하나만 주면 색상·타이포그래피를 추출해 이후 모든 다이어그램에
자동 적용하는 브랜드 온보딩 기능이 핵심 차별점이다.

## 어떻게 구성했나 (아키텍처)

- **설치**: Claude Code는 `/plugin marketplace add cathrynlavery/diagram-design` →
  `/plugin install diagram-design@diagram-design`. Codex·Pi도 별도 명령으로 설치 가능
  (멀티 에이전트 호환).
- **브랜드 온보딩**: "diagram-design을 [회사 URL] 기준으로 온보딩해줘" → 사이트에서 색상·
  폰트 추출 → paper/ink/accent/title 등 시맨틱 토큰으로 매핑 → 대비(contrast) 검증 →
  추출 출처·대체 내역을 `style-guide.md`에 기록. 이후 모든 다이어그램에 자동 적용.
- **요청 구조화**: 사용자는 콘텐츠(구성요소·관계)·목적지(16:9 슬라이드 등 포맷, PNG
  해상도)·대상(엔지니어/경영진/혼합)·강조점(1~2개) 4요소로 요청을 구성. 렌더링 전에
  선택된 다이어그램 유형·크기·삭제 가능 요소를 먼저 제시해 중간 수정이 가능하다.
- **출력**: 단일 HTML(인라인 SVG, 외부 의존성 없음), 3종 스타일(미니멀 라이트/다크/에디토리얼),
  2~3배 해상도 PNG, SVG 추출 지원. WCAG AA 대비·스크린리더·모션 감소 옵션 등 접근성 내장.
- **기존 자산 변환**: `.drawio` 파일·Mermaid 블록을 `/diagram-design:import`,
  `/diagram-design:import-mermaid` 명령으로 가져와 스타일을 재적용 가능.
- **디자인 규칙**: 다이어그램당 단일 강조색, 좌표 4px 배수 고정, 노드 밀도(10칸 중 4개)
  가이드, 세리프/산세리프/모노스페이스 3종 서체 역할 분리 — "가장 품질을 높이는 수정은
  대개 삭제"라는 원칙을 명시.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 (오픈소스 플러그인, API 비용은 사용 중인 Claude Code/Codex 요금제에 따름) |
| 권한 설계 | 미확인 |
| 성숙도 | production — 마켓플레이스에 게시된 설치 가능한 플러그인, 실사용 조직 도입 지표는 없음 |

## 성과와 수치

- 정량적 효과 지표(작업시간 절감 등)는 원문에 없다. "PowerPoint 정렬 시간 제거", "범용
  AI 다이어그램의 뻔한 결과물 회피"라는 정성적 효용만 서술한다 — **claimed**로 분류.

## 재현 가이드 (난이도: 하)

1. Claude Code(또는 Codex·Pi)에서 `/plugin marketplace add cathrynlavery/diagram-design`
   → `/plugin install diagram-design@diagram-design` 실행, 자동 업데이트 활성화.
2. 회사 URL로 브랜드 온보딩 1회 실행해 `style-guide.md`를 생성한다.
3. 콘텐츠·목적지·대상·강조점 4요소를 갖춰 다이어그램을 요청한다 (예: "이 아키텍처를
   16:9 슬라이드용, 엔지니어 대상으로, DB 계층을 강조해서 그려줘").
4. 기존 `.drawio`·Mermaid 자산이 있다면 import 명령으로 일괄 스타일 재적용한다.
5. 결과 HTML/SVG를 PNG로 내보내 슬라이드에 삽입한다.

## 강의·AX 활용 포인트

- [[jangpm-slide-master-claude-code-codex]](장피엠 slide-master, 전체 PPT 슬라이드 생성)와
  짝을 이루는 사례 — slide-master가 "슬라이드 전체"를 만든다면 diagram-design은 "슬라이드
  안의 다이어그램 하나"에 특화되어 있어, 둘을 병행하는 워크플로를 강의에서 비교 시연할 만하다.
- "회사 URL 하나로 브랜드 온보딩" 패턴은 AX 도입 초기 문턱(디자인 시스템 수작업 설정)을
  낮추는 반복 가능한 설계 원칙으로, 다른 Skill 제작 시에도 참고할 만하다.
- 정량 효과가 없으므로 AX 제안 자료에 인용할 때는 "생산성 향상"이 아니라 "산출물 품질
  표준화" 관점으로 프레이밍하는 것이 정직하다.

## 출처

- [AX LABS — 클로드 코드로 PPT 다이어그램 만드는 법](https://theaxlabs.com/blog/claude-code-ppt-diagram-design-skill)
