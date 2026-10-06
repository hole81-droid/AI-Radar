# Skill authoring best practices (Anthropic Platform Docs)

- URL: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- 관련: https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf (33페이지 PDF판, 바이너리라 직접 텍스트 추출 실패 — platform.claude.com HTML판으로 대체 확인)
- 발견 경로: Ben AI(YouTube) 2026-10-06 영상 "Anthropic Just Revealed 8 New Rules for Building Great Claude Skills" (https://www.youtube.com/watch?v=npS5jzOoji8) — 영상 자체는 shortDescription에 실질 내용(8가지 규칙 목록) 없음, 타임스탬프만 존재. 원 공식 문서를 직접 대조해 내용 확보.

## 핵심 원칙

- Concise is key — 컨텍스트 윈도우는 공공재. "Claude가 이미 아는 것"은 설명하지 않는다.
- Set appropriate degrees of freedom — High/Medium/Low freedom 3단계로 작업의 "다리 폭"에 맞춰 지시 구체성을 조절 (좁은 다리=저자유도 정확 지시, 열린 들판=고자유도 방향성 지시).
- Test with all models you plan to use — Haiku(충분한 가이드?)·Sonnet(명확·효율?)·Opus(과설명 없음?) 기준으로 각각 테스트.

## 스킬 구조

- YAML frontmatter: name(최대 64자, 소문자/숫자/하이픈만, "anthropic"·"claude" 등 예약어 금지), description(최대 1024자, 비어있으면 안 됨).
- 네이밍: 동명사형(gerund) 권장 — processing-pdfs, analyzing-spreadsheets. "helper"·"utils" 같은 모호한 이름 지양.
- description은 반드시 3인칭으로 작성(시스템 프롬프트에 그대로 삽입되므로 1인칭/2인칭은 탐색 오류 유발). "무엇을 하는지" + "언제 쓰는지" 둘 다 포함.
- Progressive disclosure: SKILL.md는 500줄 이하로. 참조 파일은 SKILL.md에서 "한 단계만" 링크(중첩 참조 시 Claude가 head -100 등으로 부분만 읽는 문제 발생). 100줄 넘는 참조 파일은 목차 포함.

## 워크플로우·피드백 루프

- 복잡한 작업은 체크리스트로 쪼개 Claude가 진행 상황을 추적하게 한다.
- "검증기 실행 → 오류 수정 → 반복" 패턴(피드백 루프)이 품질을 크게 높인다.

## 콘텐츠 가이드라인

- 시간 민감 정보("2025년 8월 이전엔 구 API 써라") 금지 — "Old patterns" 섹션으로 격리.
- 용어 일관성 유지.

## 평가·반복 개발 — 핵심 패턴

- **"Build evaluations first"**: 방대한 문서화 전에 먼저 평가 시나리오(최소 3개)를 만들고 베이스라인을 측정한다.
- **"Claude A / Claude B" 반복 개발 패턴**: Claude A(스킬 설계를 돕는 인스턴스)와 Claude B(스킬을 실제로 쓰는 신선한 인스턴스)를 교대로 활용 — Claude A와 일반 프롬프팅으로 작업 → 반복 패턴 식별 → Claude A에게 스킬화 요청 → Claude B로 실사용 테스트 → 관찰 결과를 Claude A에게 가져가 개선, 반복.
- 체크리스트(발견성·코드/스크립트·테스트 3범주)로 공개 전 점검.

## 코드 포함 스킬 추가 규칙

- "Solve, don't defer" — 에러 처리를 Claude에게 미루지 말고 스크립트가 명시적으로 처리.
- 매직 넘버("TIMEOUT = 47") 금지, 값의 근거를 주석으로 남길 것.
- 유틸리티 스크립트 제공 권장(토큰 절약·일관성).
- "Plan-validate-execute" 패턴: 복잡·파괴적 작업은 계획 파일 생성→검증→실행→검증.
- MCP 툴은 `ServerName:tool_name` 형식의 완전한 이름 사용.
