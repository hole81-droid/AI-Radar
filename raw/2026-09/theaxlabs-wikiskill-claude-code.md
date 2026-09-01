# AX LABS — WikiSkill 논문 리뷰 + Claude Code 메모리 시스템 적용 프롬프트 (원본 요약)

- 원문1: https://theaxlabs.com/blog/wikiskill-paper-review-agent-skill-evolution (2026-09-01 12:09 GMT)
- 원문2: https://theaxlabs.com/blog/wikiskill-memory-system-update-prompt-claude-code (2026-09-01 21:49 GMT)

## WikiSkill 논문 (Google Research, 2026-08-27 공개)

3계층 지식구조: raw(원본 로그)/wiki(구조화 지식)/skills(실행 가능 스킬)

4요소 순환:
1. Inference Agent — 현재 스킬로 작업 수행, raw/에 기록
2. Wiki Maintainer — 성공/실패 분석, 재사용 패턴 문서화
3. Skill Proposer — 위키 지식 기반 원자적 스킬 개선 제안
4. Gating — 성능 개선 시만 롤포워드, 기각 제안도 위키에 기록

벤치마크: 5개 태스크(수학추론·웹검색·스프레드시트·문서QA·임바디드)에서 평균 정확도
48.7%→63.7%. 테스트 모델: Qwen 4B/9B/27B, Gemma 31B, Gemini 3.5 Flash. 스킬은 모델
간 전이 가능하나 모델특화 우회책 포함 시 전이 성능 저하.

## Claude Code 적용 프롬프트

5단계 파이프라인:
1. 현재 시스템 상태 분석
2. 우선순위화된 구현 포인트 생성 → 사람 승인 대기
3. 승인된 항목만 구현
4. 수정 단위별 커밋
5. 릴리스 노트 생성

핵심 원칙: "지식 계층은 런타임 참조가 아니라 개발 도구" — 실행 에이전트가 위키를
직접 참조하지 않고 스킬 제안 시스템만 접근.
