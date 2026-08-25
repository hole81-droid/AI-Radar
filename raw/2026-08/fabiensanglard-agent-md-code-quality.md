# Fabien Sanglard — "agent.md" (LLM 코딩 품질을 위한 세션 주입 파일)

- 원문: https://fabiensanglard.net/agent.md/index.html
- 게시일: 2026-08-경(정확한 날짜 원문 미표기, HN 등록일 기준 2026-08-25 전후)
- HN: https://news.ycombinator.com/item?id=49410932 — "My agent.md to improve LLM-assisted code quality", 413점
- 수집일: 2026-08-26

## 요지

개인 개발자 Fabien Sanglard가 자신이 쓰는 `agent.md` 파일 패턴을 공개. 코딩 하네스가
세션 시작 시 `agent.md`를 읽어 프롬프트에 주입하도록 해, 매번 반복 설명해야 했던 코딩
스타일·아키텍처 원칙·커뮤니케이션 선호를 영속화하는 기법. CLAUDE.md/AGENTS.md와 본질적으로
같은 패턴을 개인 워크플로우 관점에서 문서화한 글.

## 핵심 내용

- **적용 도구**: 글에서 명시적으로 언급된 것은 VS Code의 Claude Code 플러그인과
  Antigravity. "gemini.md/claude.md를 agent.md로 심링크할 수 있다"고 언급 — 특정 벤더에
  종속되지 않는 범용 패턴으로 소개.
- **효과(저자 주관 서술, 수치 없음)**: "코드 품질이 극적으로 개선됐다. 직접 손으로 짠
  것과 매우 가까웠다." 다만 "LLM은 계속 환각하므로 신뢰할 수 없다 — 여전히 검증·반복이
  필요하다"고 스스로 단서를 붙임.
- **실행 단계**:
  1. 프로젝트 루트에 `agent.md` 생성, 네이밍·구조·주석·아키텍처 규칙 등 스타일 선호 기록
  2. 기능 단위로 새 세션을 시작해 컨텍스트 길이 관리
  3. 품질이 떨어지면 "Reload agent.md"로 명시적 재로드 요청
  4. 수동 편집 대신 에이전트에게 직접 `agent.md` 갱신을 요청
  - 저자가 시작 템플릿도 함께 제공.

## 사용 판단

정량적 실측 수치는 없는 주관적 서술(anecdotal)이지만, 이미 널리 쓰이는 CLAUDE.md/AGENTS.md
컨벤션을 재현 가능한 절차로 명확히 정리했고 HN에서 413점(프론트페이지 상위)으로 크게
화제가 됐다는 점에서 "재현 가능한 기법"으로 판단, use-case로 승격
(wiki/use-cases/fabiensanglard-agent-md-persistent-style-guide.md).
