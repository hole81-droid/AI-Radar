# AX LABS — "클로드 코드로 PPT 다이어그램 만드는 법"

- 원문: https://theaxlabs.com/blog/claude-code-ppt-diagram-design-skill
- 게시일: 2026-08-14 (AX LABS 블로그, "에이전트 제품 설계" 카테고리)
- 수집일: 2026-08-19

## 요지

Claude Code에 diagram-design 플러그인(제작: cathrynlavery)을 설치하면 아키텍처·
플로우차트·간트 등 27종 다이어그램을 편집 디자인 품질로 뽑을 수 있다. 설치 명령,
회사 브랜드 색 자동 적용, 슬라이드 16:9 PNG 내보내기, 기존 draw.io·Mermaid 재작성,
상황별 프롬프트 13개까지 diagram-design 스킬 사용법을 정리한 글.

## 핵심 내용

- **설치**: Claude Code `/plugin marketplace add cathrynlavery/diagram-design` →
  `/plugin install diagram-design@diagram-design`. Codex·Pi도 별도 명령 지원.
- **27종 다이어그램**: 구조(7)·프로세스/타임라인(8)·비교(6)·데이터(6) 4개 카테고리.
- **출력**: 단일 HTML(인라인 SVG), 3종 스타일(미니멀 라이트/다크/에디토리얼), PNG
  2~3배 해상도, SVG 추출. WCAG AA 대비·스크린리더·모션감소 지원.
- **브랜드 온보딩**: "diagram-design을 [URL] 기준으로 온보딩해줘" → 색상·타이포그래피
  추출 → 시맨틱 토큰(paper/ink/accent/title) 매핑 → 대비 검증 → `style-guide.md` 기록.
- **요청 구조**: 콘텐츠·목적지·대상·강조점 4요소. 렌더링 전 유형·크기·삭제가능요소를
  먼저 제시해 중간 수정 가능.
- **변환**: `.drawio` → `/diagram-design:import`, Mermaid → `/diagram-design:import-mermaid`.
- **디자인 규칙**: 단일 강조색, 좌표 4px 배수, 노드 밀도(10칸 중 4개), 세리프/산세리프/
  모노스페이스 역할 분리, 그림자 없음·1px 헤어라인 테두리. "가장 품질을 높이는 수정은
  대개 삭제다."
- **측정 수치**: 없음 — 워크플로 효율화·범용 AI 출력 대비 완성도를 정성적으로만 서술.

## 13개 프롬프트 템플릿 (주제)

브랜드 온보딩, 제안서 다이어그램, AS-IS 분석, 로드맵, 스윔레인, 레이어 스택, 포맷
변환, 결과 개선 등 시나리오별 4요소 구조 프롬프트.
