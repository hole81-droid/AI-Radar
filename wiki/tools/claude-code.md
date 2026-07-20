---
type: tool
date: 2026-07-06
tools: [claude-code]
importance: high
uses: [course, ax]
source: https://docs.claude.com
---

# Claude Code

Anthropic의 에이전틱 코딩 도구. 코드베이스를 읽고, 파일을 수정하고, 명령을 실행하며, 터미널·IDE·데스크톱 앱·웹(브라우저/iOS)에서 동일한 엔진으로 동작한다. ([overview](https://code.claude.com/docs/en/overview))

## 현재 상태 (2026-07 기준)

- **제공 표면**: Terminal CLI(네이티브 설치/Homebrew/WinGet), VS Code·Cursor 확장, JetBrains 플러그인, Desktop 앱(macOS/Windows), Web(claude.ai/code, iOS 앱 포함). 모든 표면이 CLAUDE.md·설정·MCP 서버를 공유한다. ([overview](https://code.claude.com/docs/en/overview))
- **최신 버전**: v2.1.201 (2026-07-03 기준, 주 단위로 다수 릴리스). ([changelog](https://code.claude.com/docs/en/changelog))
- **모델 지원**: Claude Opus 4.8이 Max·Team Premium·Enterprise·API 계정의 기본 모델(v2.1.154, 2026-05-28). Pro 플랜은 Sonnet 계열(Auto mode에서 Sonnet 4.6 지원). 2026-06-09 v2.1.170부터 최상위 모델 **Claude Fable 5** 사용 가능. Claude Sonnet 5도 지원. `xhigh` effort 레벨과 `/effort` 슬라이더, Opus 4.8 Fast mode(표준 2배 요금·2.5배 속도) 제공. ([changelog](https://code.claude.com/docs/en/changelog), [Fable 5 발표](https://www.anthropic.com/news/claude-fable-5-mythos-5))
- **요금제/제공 방식**: Claude 유료 구독(Pro/Max/Team/Enterprise) 또는 Anthropic Console(API 종량제)로 사용. Terminal CLI와 VS Code는 Amazon Bedrock, Google Cloud Agent Platform, Microsoft Foundry 등 서드파티 프로바이더도 지원. ([overview](https://code.claude.com/docs/en/overview), [pricing](https://claude.com/pricing))
- 세션 이동성: 로컬 세션을 폰에서 이어가는 Remote Control, 웹/iOS에서 시작한 작업을 터미널로 가져오는 `claude --teleport`, `/desktop` 핸드오프, Slack에서 `@Claude` 멘션으로 PR 생성. ([overview](https://code.claude.com/docs/en/overview))

## 주요 기능

- **Subagents / Agent teams**: 병렬 서브에이전트 실행, 리드 에이전트가 작업 분배·병합. 서브에이전트가 자체 서브에이전트를 생성 가능(백그라운드 체인 최대 5단계, v2.1.166+). `claude agents`(Agent view)로 전체 세션 모니터링. ([sub-agents](https://code.claude.com/docs/en/sub-agents), [whats-new](https://code.claude.com/docs/en/whats-new))
- **Skills**: `/review-pr` 같은 반복 워크플로를 패키징해 팀과 공유. ([skills](https://code.claude.com/docs/en/skills))
- **MCP (Model Context Protocol)**: 외부 도구·데이터 연결(Google Drive, Jira, Slack 등). `claude mcp login/logout`으로 셸에서 직접 인증(2026-06 W26). ([mcp](https://code.claude.com/docs/en/mcp))
- **Hooks**: 도구 실행 전후 셸 명령 자동 실행(편집 후 포맷팅, 커밋 전 린트 등). 조건부 `if` 훅 지원. ([hooks](https://code.claude.com/docs/en/hooks))
- **메모리**: CLAUDE.md 프로젝트 지침 + 세션 간 학습을 자동 저장하는 auto memory. ([memory](https://code.claude.com/docs/en/memory))
- **스케줄 작업**: Anthropic 인프라에서 도는 **Routines**(스케줄·GitHub 이벤트·API 트리거, `/schedule`), 로컬 실행 Desktop scheduled tasks, 세션 내 반복 `/loop`. ([routines](https://code.claude.com/docs/en/routines))
- **Auto mode**: 권한 프롬프트를 분류기 기반 백그라운드 안전 검사로 대체(2026-03 리서치 프리뷰 → Pro 플랜·서드파티 프로바이더로 확대). ([whats-new](https://code.claude.com/docs/en/whats-new))
- **자동화/CI**: Unix 파이프 및 `-p` 헤드리스 모드, GitHub Actions·GitLab CI/CD, PR 자동 코드 리뷰, `/ultrareview` 클라우드 버그 헌팅. ([overview](https://code.claude.com/docs/en/overview))
- **Plugins**: 커스텀 명령·테마·도구 패키징, `.zip`/URL 로드, 마켓플레이스. ([whats-new](https://code.claude.com/docs/en/whats-new))

## 최근 주요 업데이트 (2026년 4~7월, 날짜순)

- **2026-04 W16 (v2.1.105–113)**: Opus 4.7이 Max·Team Premium 기본 모델로. `xhigh` effort 도입. 웹에서 **Routines**(스케줄/GitHub 이벤트/API 트리거 클라우드 에이전트) 출시. 모바일 푸시 알림. CLI 네이티브 바이너리 전환. ([whats-new](https://code.claude.com/docs/en/whats-new))
- **2026-04 W17 (v2.1.114–119)**: `/ultrareview` 공개 리서치 프리뷰(클라우드 버그 헌팅 에이전트 플릿). 커스텀 테마. 웹 UI 리디자인. ([whats-new](https://code.claude.com/docs/en/whats-new))
- **2026-05 W20 (v2.1.139–142)**: **Agent view**(`claude agents`) — 모든 세션을 한 화면에서 모니터링. `/goal`로 완료 조건까지 지속 작업. ([whats-new](https://code.claude.com/docs/en/whats-new))
- **2026-05 W21 (v2.1.143–149)**: Auto mode가 Pro 플랜에 확대(Sonnet 4.6 지원). `/usage` 사용량 분석, `/code-review` 명령. ([whats-new](https://code.claude.com/docs/en/whats-new))
- **2026-05-28 (v2.1.154)**: **Claude Opus 4.8 기본 모델화**(high effort 기본). Fast mode가 Opus 4.8에서 표준 2배 요금·2.5배 속도로 인하. **Dynamic workflows** — 스크립트로 수십~수백 개 서브에이전트 오케스트레이션. security-guidance 플러그인. ([changelog](https://code.claude.com/docs/en/changelog), [whats-new](https://code.claude.com/docs/en/whats-new))
- **2026-06 W23 (v2.1.158–165)**: Auto mode가 Bedrock·Google Cloud Agent Platform·Microsoft Foundry에서도 지원(Opus 4.7/4.8). 관리형 배포의 버전 요구사항. ([whats-new](https://code.claude.com/docs/en/whats-new))
- **2026-06-09 (v2.1.170)**: **Claude Fable 5** 도입 — "일반 사용에 안전하게 만든 Mythos급 모델". ([changelog](https://code.claude.com/docs/en/changelog), [발표](https://www.anthropic.com/news/claude-fable-5-mythos-5))
- **2026-06 W24 (v2.1.166–176)**: `/cd`(캐시 유지 작업 디렉터리 이동), 서브에이전트의 서브에이전트 생성, `--safe-mode`, `fallbackModel` 체인(최대 3개). ([whats-new](https://code.claude.com/docs/en/whats-new))
- **2026-06 W25 (v2.1.178–183)**: **Artifacts** 베타(Team/Enterprise) — 세션 출력을 claude.ai의 라이브 공유 페이지로. 도구 파라미터 단위 권한 규칙 `Tool(param:value)`. ([whats-new](https://code.claude.com/docs/en/whats-new))
- **2026-06 W26 (v2.1.185–193)**: `claude mcp login/logout`, 셸 모드가 명령 출력에 응답, `/rewind`가 `/clear` 이전 대화 복원. ([whats-new](https://code.claude.com/docs/en/whats-new))
- **2026-06-30**: **Claude Sonnet 5** 출시 — Opus 4.8급 에이전트 성능의 중형 모델, Free·Pro 기본 모델로 Claude Code에서도 사용 가능. → [[2026-06-30-claude-sonnet-5]]
- **2026-07-01 (v2.1.198)**: **Claude in Chrome GA** + 서브에이전트 백그라운드 실행 기본화(작업 완료 시 자동 커밋·푸시·draft PR). → [[2026-07-01-claude-in-chrome-ga]]
- **2026-07-01**: 수출통제로 중단됐던 **Claude Fable 5**가 Claude Code 포함 전 표면에 복귀. 7/7 이후 무료 포함분 종료, 사용 크레딧 과금으로 전환. → [[2026-07-01-claude-fable-5-global-return]]
- **2026-07-03 (v2.1.200–201)**: 기본 권한 모드 명칭이 'Manual'로 변경, `AskUserQuestion` 자동 진행 비활성화 등. ([changelog](https://code.claude.com/docs/en/changelog))

## 활용 포인트

- 학습과정: CLI 하나로 subagents·skills·hooks·MCP까지 에이전트 설계 개념을 실습할 수 있어 커리큘럼 중심 도구로 적합. Pro 플랜부터 Auto mode 사용 가능해 입문 비용이 낮다.
- 기업 도입: Team/Enterprise에서 Artifacts·관리형 버전 요구사항·security-guidance 플러그인·Bedrock/Foundry 등 서드파티 프로바이더 지원으로 거버넌스 요건 대응 가능. Routines와 GitHub Actions로 PR 리뷰·정기 점검 자동화가 즉시 적용 가능한 AX 포인트.
- 커뮤니티 패턴: MCP 서버로 Claude Code가 GPT-5.6·DeepSeek·GLM·로컬 모델 등 타사 모델에 작업을 위임·벤치마크하는 "멀티모델 오케스트레이터" 구성이 등장 — 벤더 종속 완화·비용 최적화 실험 사례. → [[claude-code-mcp-multimodel-delegation-benchmark]]

## 출처

- https://code.claude.com/docs/en/overview (Claude Code 공식 문서 개요, docs.claude.com에서 리다이렉트)
- https://code.claude.com/docs/en/whats-new (주간 업데이트 다이제스트)
- https://code.claude.com/docs/en/changelog (버전별 체인지로그, GitHub anthropics/claude-code CHANGELOG.md와 동일 내용)
- https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
- https://www.anthropic.com/news/claude-fable-5-mythos-5 (Claude Fable 5 발표)
- https://claude.com/pricing (요금제)
