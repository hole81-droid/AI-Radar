# Reddit r/ClaudeAI — "JPMorgan is putting Claude Code inside a sandbox with no standing access to internal systems" (원본 요약)

- 원문: https://www.reddit.com/r/ClaudeAI/comments/1wit5yg/jpmorgan_is_putting_claude_code_inside_a_sandbox/
- 교차 확인: https://jingletree.com/jpmorgan-rolls-out-claude-changes-2-000-spending-limits-and-extra-security-271232.html
- 게시일: 2026-09-17 (HN/Reddit 상위 게시, 원 보도는 그 이전 업계 매체)

## 배경

JPMorgan이 65,000명 규모 Global Technology 조직에 배포한 Claude Code를,
"Devspace"라는 AWS 호스팅 컨테이너형 샌드박스 서버로 이전하는 작업을 진행
중임이 확인됐다.

## 기존 방식의 문제

지금까지 엔지니어는 데스크톱 앱을 통해 Claude에 직접 접근했는데, 이 경우
크리덴셜 노출·미승인 데이터 접근 우려가 있었다.

## Devspace의 핵심 설계 — "상시 접근 권한 없음 (no standing access)"

- Claude Code 인스턴스가 내부 시스템에 대한 영구 크리덴셜을 아예 갖지 않는다.
- AI 에이전트가 샌드박스를 탈출하는 방법을 찾아내더라도, 애초에 내부 시스템에
  접근할 크리덴셜이 없어 기업 인프라를 악용할 수 없도록 설계.
- "컨테이너화된" 샌드박스형 서버, AWS에 호스팅.

## 지출 통제 병행

- Claude Code 사용에 **월 $2,000 한도** 설정 — 보안 강화와 비용 통제를 함께 적용.

## 현재 규모

- 2026-03부터 Global Technology 전 직원(약 65,000명)에게 승인된 AI 코딩 도구
  사용을 의무화.
- Devspace 자체는 초기 단계로 일부 인력에만 적용된 상태 — 구체적 적용 인원·
  시작 시점은 불명확.

## 평가 메모

evidence: 업계 매체 보도(Jingletree) + Reddit/HN 커뮤니티 확산으로 교차확인.
구체적 아키텍처(제로 상시접근)·수치($2,000/월, 65,000명)가 있는 엔터프라이즈
도입 사례라 update 페이지화(2026-09-17-jpmorgan-claude-code-devspace-sandbox.md).
mechanism 통제 어휘(skills/subagents/mcp/hooks/cron-routines/prd-driven/
record-replay/browser-agent/cli-pipeline/second-brain/vibe-coding) 중 정확히
들어맞는 항목이 없어(거버넌스·인프라 아키텍처이지 자동화 메커니즘이 아님)
use-case 스키마 대신 update 페이지로 분류.
