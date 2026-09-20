---
type: update
date: 2026-09-19
tools: [claude-code]
importance: medium
uses: [course, ax]
source: https://code.claude.com/docs/en/claude-projects
---

# Claude Code "Projects" 재설계 — 한 대화로 여러 클라우드 세션을 조율

## 무엇이 있었나

Claude Code의 **Projects**가 전면 재설계됐다. 기존에는 "프로젝트"가 대화·파일·지침을
모아두는 폴더에 불과했지만, 새 버전은 **실제로 일을 실행하는 단위**로 바뀌었다.

- 사용자가 한 대화(conversation)에 버그 리포트·작업 목록을 던지면, Claude가 이를
  여러 **스레드**로 쪼개 각각 [클라우드 세션](https://code.claude.com/docs/en/claude-code-on-the-web)
  (로컬이 아니라 클라우드에서 도는 Claude Code)으로 실행한다.
- 각 스레드는 **자체 브랜치**에서 병렬로 실행되며, 노트북을 닫아도 계속 진행되고
  폰에서 진행 상황을 확인·개입할 수 있다.
- 기존에는 여러 세션을 돌리려면 사람이 직접 각 세션에 배경 설명을 반복 입력하고
  어떤 세션이 끝났는지 일일이 확인해야 했는데, Projects는 이 조율 작업 자체를
  Claude에 위임한다.
- **제공 범위**: Pro·Max 플랜 공개 베타, 순차 롤아웃 중(클라우드 세션을 이미 써본
  계정 우선). Team·Enterprise는 아직 미지원. claude.ai/code 사이드바 또는 데스크톱
  앱 Code 탭에서 확인 가능, 안 보이면 대기열(waitlist) 신청 가능.

## 왜 중요한가 (비개발자 관점)

지금까지 "여러 AI 에이전트를 동시에 돌린다"는 것은 사람이 매니저 역할까지 겸해야
한다는 뜻이었다 — 각 세션에 무엇을 시킬지 정하고, 배경을 반복 설명하고, 끝난 걸
확인하는 몫이 전부 사람 것이었다. Projects는 이 "에이전트 관리자" 역할 자체를
Claude에 넘긴다는 점에서, 코딩 에이전트가 도구에서 팀원에 가까운 존재로 한 단계
더 이동했다고 볼 수 있다.

## 활용/시사점

- **강의**: "서브에이전트 오케스트레이션을 사람이 직접 설계하던 시대"에서
  "오케스트레이션 자체를 AI에 위임하는 시대"로의 전환 사례로 다루기 좋다 — Claude
  Code의 기존 Subagents·Agent view 기능과 비교해 "누가 작업을 쪼개는가"라는
  축으로 설명 가능.
- **AX**: 개발팀이 이슈 트래커(Jira 등)에 쌓인 백로그를 한 대화창에 던져두고
  Claude가 우선순위·병렬성을 알아서 관리하게 하는 워크플로 설계의 참고 사례.
  다만 Team·Enterprise 미지원이라 기업 배포 판단은 확대 시점까지 보류.

## 출처

- [Claude Docs — Let Claude coordinate ongoing work with Projects](https://code.claude.com/docs/en/claude-projects)
- [Reddit r/ClaudeAI — New Beta CC Feature 공유글](https://www.reddit.com/r/ClaudeAI/comments/1wk6vp4/new_beta_cc_feature_projects_coordinate_work/)
