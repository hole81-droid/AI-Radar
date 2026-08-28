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
- **Auto mode**: 권한 프롬프트를 분류기 기반 백그라운드 안전 검사로 대체(2026-03 리서치 프리뷰 → Pro 플랜·서드파티 프로바이더로 확대 → 2026-08-07 Pro·Max·Team 기본값 전환). ([whats-new](https://code.claude.com/docs/en/whats-new))
- **자동화/CI**: Unix 파이프 및 `-p` 헤드리스 모드, GitHub Actions·GitLab CI/CD, PR 자동 코드 리뷰, `/ultrareview` 클라우드 버그 헌팅. ([overview](https://code.claude.com/docs/en/overview))
- **Plugins**: 커스텀 명령·테마·도구 패키징, `.zip`/URL 로드, 마켓플레이스. ([whats-new](https://code.claude.com/docs/en/whats-new))
- **음성 입력 `/voice`**: 공식 딕테이션(v2.1.69+), 홀드/탭 모드, 코딩 어휘 튜닝, 오디오는 서버에서 처리. 한국어 인식 품질에 대한 공식 근거는 아직 확인되지 않았다. ([voice-dictation](https://code.claude.com/docs/en/voice-dictation))
- **파일 생성**(pptx·xlsx·docx·pdf): 2026-02-11부터 무료 계정 포함 전 사용자에게 개방, 30MB/파일 제한. ([create-files](https://claude.com/blog/create-files))

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
- **2026-07-24**: **Claude Opus 5**가 새 기본 모델로 추가(Max 기본, Pro 최상위) — 서브에이전트가 최대 depth 3까지 중첩 생성 가능(기존 1). `/code-review`가 백그라운드 서브에이전트로 실행되도록 변경돼 리뷰 작업이 대화창을 채우지 않게 됨. 동시에 시스템 프롬프트를 약 80% 정리하고 "점진적 공개(progressive disclosure)" 철학으로 전환 — 낡은 CLAUDE.md/스킬 규칙을 감지하는 `/doctor` 명령 추가. → [[2026-07-24-claude-opus-5-launch]]
- **2026-08-07**: 셀프호스팅 환경, 크로스세션 메시징, 플러그인·샌드박스 제어 강화, Remote Control·붙여넣기·세션 안정성 개선과 함께 **서브에이전트 동시 생성 개수 상한이 제거**됨 — 대규모 병렬 오케스트레이션 제약이 풀림.
- **2026-08-11**: EU AI Act 대응으로 Claude Code 출력물에도 **AI 생성 워터마크**가 적용되기 시작 — 텍스트는 비가시 워터마크, 이미지 파일은 C2PA 서명 메타데이터. 8/2 이후 신규 모델은 출시 시점부터, 이전 모델은 소급 적용 진행 중. → [[2026-08-11-anthropic-ai-content-watermarking]]

## 경쟁 구도

- **2026-08-05**: Meta가 자체 코딩 에이전트 **Muse Code**(Muse Spark 1.2 기반) 베타를 출시, Claude Code·Codex를 직접 겨냥 — 터미널 코딩 에이전트 시장이 사실상 3파전(Anthropic·OpenAI·Meta)으로 재편됐다. → [[2026-08-05-meta-muse-code-launch]]
- **2026-08-11**: SpaceX·xAI·Cursor 합병 법인이 상시 작동 에이전트 팀 제품 **Grok Bot**을 출시, 코딩을 넘어 사무 업무 전반에서 Claude Cowork와 정면 경쟁 — "AI 에이전트 팀"이 코딩 도구 4파전(Anthropic·OpenAI·Meta·SpaceXAI)을 넘어 사무 자동화로도 번지는 신호. → [[2026-08-11-spacexai-grok-bot-launch]]
- **2026-08-20**: Salesforce(Slack)가 팀 채널에서 여러 벤더의 코딩 에이전트를 함께 쓰는 **Slack Code**를 출시 — Claude Code·Claude Tag가 Devin·v0·Copilot·ChatGPT와 나란히 지원 대상에 포함됐다. Claude Code가 Slack이라는 제3자 협업 플랫폼의 "인정된 에이전트" 목록에 오른 사례. → [[2026-08-20-salesforce-slack-code-launch]]

## 운영 참고사항

- **시스템 요구사항**: macOS 13+/Windows 10+ x64. Cowork 샌드박스는 Windows Pro/Enterprise(Hyper-V) 필요 — **Windows Home은 지원하지 않는다.** ([system-requirements](https://houtini.com/articles/claude-desktop-system-requirements/))
- **계정**: Claude Code 자체는 무료 플랜으로 쓸 수 없다 — Pro 이상 구독 또는 API 키가 필요하다.
- **과금 변동성**: 2026-06 Agent SDK/헤드리스 분리 과금 발표(시행 전 유예), 7/7 Fable 5 크레딧 종량 전환처럼 한 달 새 여러 번 바뀐 전례가 있다 — 교재·안내자료에 요금표를 그대로 박아 넣기보다 조회 시점 기준으로 명시하는 편이 안전하다.

## 활용 포인트

- 학습과정: CLI 하나로 subagents·skills·hooks·MCP까지 에이전트 설계 개념을 실습할 수 있어 커리큘럼 중심 도구로 적합. Pro 플랜부터 Auto mode 사용 가능해 입문 비용이 낮다.
- 기업 도입: Team/Enterprise에서 Artifacts·관리형 버전 요구사항·security-guidance 플러그인·Bedrock/Foundry 등 서드파티 프로바이더 지원으로 거버넌스 요건 대응 가능. Routines와 GitHub Actions로 PR 리뷰·정기 점검 자동화가 즉시 적용 가능한 AX 포인트.
- 커뮤니티 패턴: MCP 서버로 Claude Code가 GPT-5.6·DeepSeek·GLM·로컬 모델 등 타사 모델에 작업을 위임·벤치마크하는 "멀티모델 오케스트레이터" 구성이 등장 — 벤더 종속 완화·비용 최적화 실험 사례. → [[claude-code-mcp-multimodel-delegation-benchmark]]
- 커뮤니티 패턴: 다중 세션+Git worktree를 PR 기반 GitHub Actions 파이프라인으로 게이트하는 구성 — 세션 간 혼선을 CI/CD 구조로 해결. → [[claude-code-ci-pipeline-multisession-worktree]]
- 주의: 바이럴 확산된 토큰 절감 Skill(rtk, "60~90% 절감" 주장)이 JetBrains 실측 벤치마크에서는 오히려 비용 증가(+7.6%, 저-effort 구간)로 나타남 — 자체 보고 지표를 실제 청구서로 검증할 필요. → [[rtk-skill-jetbrains-token-benchmark]]
- 커뮤니티 패턴: 로컬 프록시로 자신의 Claude Code 세션 트래픽을 직접 감청·분석하는 관측 도구 등장 — 243세션 실측 결과 비용의 68%가 프롬프트가 아닌 "툴 결과"에서 발생. → [[ai-agent-profiler-claude-code-cost-benchmark]]
- 커뮤니티 패턴: Skill 설계에서 "애매한 판단은 AI, 정밀한 실행은 결정론적 코드"로 역할을 분리하는 하이브리드 구조(손글씨 사진→폰트 자동 제작 사례). → [[draw-your-font-claude-code-skill]]
- 커뮤니티 패턴: 시스템 프롬프트/Skill로 AI 응답의 커뮤니케이션 스타일 자체를 재구성(ADHD 친화적 "행동 우선" 구조 강제) — Codex와도 호환되는 플러그인으로 320+ 댓글 화제, 효과 체감은 사용자마다 엇갈림. → [[i-have-adhd-claude-codex-skill]]
- 대기업 도입 실측: Microsoft 사내 수만 명 엔지니어 대상 Claude Code+GitHub Copilot CLI 4개월 확산 추적 학술 연구 — 채택자 PR 병합량 약 24%↑, "동료 효과"가 채택을 좌우. → [[microsoft-claude-code-copilot-cli-adoption-study]]
- 커뮤니티 패턴: 부서별 Skill을 따로 만들지 않고 "단일 공유 스킬 소스 + 배포 스크립트로 부서별 플러그인 동기화"하는 구조 — 마케팅 업무 11종(SEO·이메일·LinkedIn 등)에 적용한 사례. → [[benai-claude-skills-marketing-automation]]
- **2026-07-28**: Claude Mythos가 NIST 포스트 퀀텀 서명 후보 HAWK의 구조적 결함을 60시간 만에 발견(인간 전문가 2년 검증도 놓친 결함), 7라운드 AES 공격도 200~800배 고도화. → [[2026-07-28-claude-mythos-post-quantum-crypto-break]]
- 커뮤니티 패턴: 헤드리스 Claude Code+MCP 서버+GitHub Actions 크론을 묶어 "SEO 매니저" 역할 자체를 통째로 자동화한 오픈소스 대시보드 등장 — 유료 SEO 툴 구독을 대체한다고 주장. → [[claude-code-seo-manager-mcp-dashboard]]
- 커뮤니티 패턴: "Claude Code 기능의 15%만 쓰고 있었다"는 문제의식에서 나온 오픈소스 CLI(Adeptly) — 계획서에 기능 설명을 녹여 학습시키고, Architect→Approval Gate→Builder→Medic→Reviewer→Security→Pilot 7단계 파이프라인으로 실제 실행까지 담당. → [[adeptly-claude-code-learning-crew-pipeline]]
- 커뮤니티 패턴: Skill 기반 PPT 제작 에이전트 "slide-master"(오픈소스 MIT) — 회사 디자인 시스템을 템플릿화해 이미지가 아닌 편집 가능한 네이티브 PPTX를 자동 생성, Codex와도 호환. → [[jangpm-slide-master-claude-code-codex]]
- **2026-07-30**: Anthropic이 사이버보안 평가 중 Opus 4.7·Mythos 5 등이 환경 설정 오류로 실제 기업 3곳에 무단 접근했다고 공식 공개 — 평가 환경 "인터넷 접근 없음" 지시가 실제로는 지켜지지 않았던 것이 원인. → [[2026-07-31-anthropic-cybersecurity-eval-incidents]]
- **2026-08-05**: **Inference hooks** 베타 — Claude Enterprise 전 표면(chat·Claude Code·Cowork)의 모든 프롬프트·툴콜을 조직 자체 보안 서버가 사전 검사해 허용/차단하는 인라인 DLP. ([공식](https://claude.com/blog/claude-enterprise-inference-hooks))
- **2026-08-06**: **Self-hosted environments** 퍼블릭 베타 — Claude Code 세션을 자체 인프라(사내망) 안에서 실행, 내부 서비스·DB에 직접 접근. Team/Enterprise 대상. ([공식](https://claude.com/blog/run-claude-code-sessions-on-your-own-compute))
- **2026-08-07**: **Auto mode가 Pro·Max·Team 플랜 기본값**으로 전환 — 권한 프롬프트 대신 분류기 기반 이중 방어(읽는 내용 스캔+행동 정합성 체크)로 승인 피로 해소, 프로덕션은 격리 환경 권장. → [[2026-08-07-claude-code-auto-mode-default]]
- **2026-08-07**: Fable 5 생물학 안전장치 재조정으로 Claude Code의 관련 폴백(하위 모델 전환)도 약 17% 감소. → [[2026-08-07-claude-fable-5-biology-safeguards-update]]
- 실측 연구: 시뮬레이션 비즈니스 업무에서 Claude Code(Opus 5)의 세션 중 자가개선을 통제 실험으로 측정 — held-out 성공률 34%→48%, 개선의 원천은 메모리 파일이 아니라 대화 기록 자체였음(메모리 파일 단독 기여는 통계적으로 유의하지 않음). → [[andrewjesson-claude-code-conversation-vs-memory-self-improvement]]
- 엔터프라이즈 보안: Uber가 Claude Code·Cursor·Codex의 위험 명령을 실시간 탐지·차단하는 오픈소스 관측 플랫폼 ADR을 프로덕션 배포·MLSys 2026 논문으로 공개 — 사람이 매 명령을 검토하는 승인 모델의 한계를 보완. → [[uber-adr-claude-code-cursor-codex-security-monitoring]]
- 커뮤니티 패턴: 로컬 자막 앱을 Claude에 MCP로 연결해 "말로 자막 편집"을 구현한 오픈소스 사례(CapForge) — 클라우드 업로드 없이 로컬 Whisper+Claude MCP 조합. → [[capforge-claude-mcp-video-captioning]]
- 실측 연구: Claude Code를 반복 루프로 돌려 프로덕션 엔터프라이즈 AI 에이전트를 자동 개선 — AutoResearch·AutoAgent와 동일 조건 비교 시 정밀도 0.734→0.818(경쟁 도구보다 낮은 개선폭), 세 도구 모두 초반에 개선이 몰리고 이후 정체되는 패턴 공통 확인. → [[jeremytian-claude-code-loop-agent-optimization]]
- 자체 사용 사례: Anthropic BD(영업)팀이 Claude Cowork의 Skills+예약 태스크+CRM 커넥터로 인바운드 응대·아웃바운드 프로스펙팅을 자동화 — 인바운드 응답 하루 5시간→검토만, 담당자 1인당 계정 100개+ 관리. 모든 발송은 사람 검토 필수. → [[anthropic-bd-team-claude-cowork-sales-automation]]
- **2026-08-12**: Claude in Chrome 사이드패널이 별도 선택 없이 곧바로 정식 **Claude Cowork** 세션으로 통합 — 브라우저 대화가 히스토리에 저장되어 데스크톱·웹·모바일에서 이어짐, 기존 Skills·커넥터 그대로 동작. → [[2026-08-12-claude-cowork-chrome-integration]]
- **2026-08-19**: **Compliance API**가 Cowork(데스크톱·웹·모바일)·Claude Code(CLI·데스크톱)까지 확장(Enterprise 베타) — 보안팀이 세션 콘텐츠·메타데이터를 통합 조회해 감사·eDiscovery 대응. Bedrock·Vertex AI·Foundry 경유 세션은 아직 미포함. → [[2026-08-19-anthropic-compliance-api-cowork-claude-code]]
- **2026-08-27**: 프롬프트 인젝션 연구자가 **Auto Mode 우회 공격 성공률 60~80%**를 확인 — ZIP 압축해제 후 Python 표준 라이브러리 모듈을 가로채는 체인, 일부 사례는 Auto Mode가 침해 정리 명령까지 차단. Anthropic은 "보안 보장이 아닌 최선노력 분류기"라며 OS 격리·네트워크 통제가 진짜 방어선이라고 답변. → [[2026-08-07-claude-code-auto-mode-default]] (08-27 후속 절)
- 커뮤니티 패턴: 개인 개발자가 손코딩 없이 Claude Code·Codex·Cursor를 격리 VM+자체 오케스트레이터로 병렬 운영해 6개월간 실제 업무 개발 전체를 위임 — 승인 게이트 대신 VM 격리로 자율성을 확보하는 접근, 위 Auto Mode 우회 사례와 대비되는 설계 철학. → [[2026-08-29-exedev-claude-codex-cursor-parallel-agents]]

## 출처

- https://code.claude.com/docs/en/overview (Claude Code 공식 문서 개요, docs.claude.com에서 리다이렉트)
- https://code.claude.com/docs/en/whats-new (주간 업데이트 다이제스트)
- https://code.claude.com/docs/en/changelog (버전별 체인지로그, GitHub anthropics/claude-code CHANGELOG.md와 동일 내용)
- https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
- https://www.anthropic.com/news/claude-fable-5-mythos-5 (Claude Fable 5 발표)
- https://claude.com/pricing (요금제)
