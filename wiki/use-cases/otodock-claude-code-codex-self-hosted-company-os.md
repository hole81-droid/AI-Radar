---
type: use-case
date: 2026-09-09
tools: [claude-code, codex]
mechanism: [skills, cli-pipeline, mcp]
domain: ops
task: 부서별로 조직된 다중 AI 에이전트를 자체 호스팅 플랫폼 하나로 구축·운영
outcome: 오픈소스 공개 후 GitHub 스타 100+ 확보(정량 성과 수치는 미확인, 주장)
model: Claude Code(사용자의 Anthropic 구독) + Codex(사용자의 ChatGPT 구독) + 로컬 모델 선택 가능
cost: 사용자 본인 구독 요금 그대로(BYO subscription) — 별도 API 종량 비용 미확인
permissions: 커널 샌드박스(세션별 독립 마운트·프로세스 네임스페이스) + 기본 네트워크 격리(사설 대역·클라우드 메타데이터 엔드포인트 차단) + 서비스 단위 admin 승인 접근 + 사용자별 비용 예산(per-user cost budget) 표준 탑재
maturity: production
evidence: claimed
importance: medium
uses: [course, ax]
source: https://github.com/OtoDock/oto-dock
---

# OtoDock — Claude Code·Codex를 엔진으로 쓰는 자체 호스팅 "회사 OS"

> **공식**: Claude Code·Codex로 skills·cli-pipeline·mcp를 활용해 부서별 다중 에이전트
> 조직(자체 호스팅 "회사 OS")을 구축·운영 → 오픈소스 공개, HN Show HN 게시 하루 만에
> GitHub 스타 100+ (성과 수치는 자체 주장, 외부 검증 없음)

## 무엇을 자동화했나

OtoDock은 "회사의 두뇌" 역할을 하는 자체 호스팅 플랫폼이다. 사용자가 이름과 역할을
가진 에이전트("퍼스널 어시스턴트", "시스템 관리자", "마케팅 매니저" 등)를 만들면,
이 에이전트들이 부서 단위로 조직되어 서로에게 위임하고, 사람이 지켜보지 않을 때도
계속 일한다. Claude Code와 Codex를 엔진으로 쓰되 실행은 전부 자체 서버(또는 사용자가
페어링한 개인 기기)에서 이뤄지는 구조다. 2026-09-09 Hacker News Show HN에
"Self-hosted company OS, Claude Code and Codex agents in departments"로 게시됐다
(41점).

## 어떻게 구성했나 (아키텍처)

- **에이전트 구성 6요소**: Persona(역할 지시), Memory(대화 간 유지되는 메모), Workspace
  (개인/팀 공유 작업 폴더), Knowledge(참고 문서), Skills(적용 가능한 기법), Tools
  (허용된 도구) — 이 6개를 각각 편집 가능한 단위로 노출한다.
- **엔진 선택**: Claude Code는 사용자의 Anthropic 구독으로, Codex는 사용자의 ChatGPT
  구독으로 각각 동작한다. 로컬 모델도 지원하며, 에이전트별·대화별로 엔진을 전환할 수
  있다(BYO subscription 모델 — 플랫폼 자체가 API 비용을 대신 부담하지 않는다).
- **공유 모드 4종**: Personal only / Personal + shared / Shared + personal / Shared
  only — 한 에이전트를 여러 사람이 어떻게 나눠 쓸지를 조직 구조에 맞게 선택한다.
  플랫폼 역할(Admin/Creator/Member)과 에이전트별 역할(Manager/Editor/Viewer)을
  분리해 접근권을 세분화한다.
- **자동 실행 트리거**: 스케줄, 웹훅 이벤트, 1회성 지정 시각 3가지로 에이전트가 사람
  없이도 작업을 시작한다. 결과는 4단계 알림 심각도(조용한 알림~지속 경보)로 통지되고,
  모든 실행은 나중에 열어볼 수 있는 완전한 대화 기록으로 남는다.
- **보안 모델(권한 설계가 구체적으로 공개된 드문 사례)**: 서버 측 모든 에이전트가
  커널 샌드박스(세션마다 독립된 마운트·프로세스 네임스페이스) 안에서 실행되고,
  기본값으로 사설 IP 대역·사내망·클라우드 메타데이터 엔드포인트에 접근할 수 없다.
  로컬 서비스가 필요한 MCP 툴은 관리자가 에이전트 단위로 범위를 지정해 승인해야
  접근 가능하다. 자격증명은 저장 시 암호화되고 세션에만 주입되며 에이전트 자신은
  값을 볼 수 없다. SSO·2단계 인증·사용자별 비용 예산이 최초 설치부터 기본 제공된다.
- **문서·전화 연동**: Word·Excel·PowerPoint·PDF를 채팅 안에서 직접 편집하고, Twilio나
  자체 운영 중인 Asterisk/FreePBX와 연결해 에이전트에게 전화번호를 부여해 착发신
  통화까지 처리하게 할 수 있다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | Claude Code(Anthropic 구독) / Codex(ChatGPT 구독) / 로컬 모델 — 사용자 선택 |
| 비용 | 사용자 본인 구독 요금 그대로(BYO). 플랫폼 자체 이용료·인프라 호스팅 비용은 미확인 |
| 권한 | 커널 샌드박스+네트워크 격리(기본 차단, 서비스별 승인)+자격증명 비노출+사용자별 비용 예산 — 6개 문서 중 가장 구체적으로 공개된 축에 속함 |
| 성숙도 | production(v1.6.0, CI 파이프라인·공식 문서 사이트 운영 중) |
| 근거 수준 | claimed(프로젝트 자체 README·랜딩페이지 설명. 제3자 실사용 후기·정량 성과는 미확인) |

## 성과와 수치

- GitHub 스타 100+(2026-09-09 확인 시점) — 공개 후 단기간 확보한 수치이나, 실사용
  기업·정량적 생산성 효과는 원문에 없다.
- "이 영상 전체가 OtoDock 에이전트에 의해 연출·촬영·편집됐다"는 데모 영상 소개 문구가
  있으나 검증 가능한 제3자 확인은 없다(주장).

## 재현 가이드

- **난이도**: 상 (자체 서버 호스팅 필요, 도커/서버 운영 지식 전제)
- **준비물**: Anthropic Claude 구독 + OpenAI ChatGPT 구독(둘 중 하나만 써도 무방),
  에이전트를 돌릴 자체 서버(또는 macOS/Linux/Windows 개인 기기), 필요 시 Twilio 또는
  자체 운영 PBX
- **핵심 단계**:
  1. 서버에 OtoDock을 설치하고 관리자 계정을 만든다.
  2. 부서(Engineering·Marketing 등) 구조를 설계하고, 에이전트별 Persona·Workspace·
     Tools를 정의한다.
  3. 각 에이전트에 Claude Code 또는 Codex 엔진을 배정하고, 구독 계정을 연결한다.
  4. MCP 툴·로컬 서비스 접근 범위를 관리자가 에이전트별로 승인한다.
  5. 스케줄·웹훅 트리거를 설정해 무인 실행을 시작하고, 알림 심각도를 조정한다.

## 강의·AX 활용 포인트

- **강의**: "에이전트를 개인 도구가 아니라 조직 구조로 설계한다"는 개념을 설명할 때
  좋은 참조 모델이다 — 부서·위임·공유 모드라는 조직론적 어휘를 에이전트 설계에
  그대로 대응시킨 사례.
- **AX**: 자체 호스팅 + BYO 구독 모델이라는 점에서, 사내 데이터 보안 요구사항이 높은
  조직이 벤더 종속 없이 Claude Code·Codex를 조직 전체 에이전트 플랫폼으로 통합하는
  대안 아키텍처를 검토할 때 참고할 수 있다. 특히 권한 설계(커널 샌드박스+서비스별
  승인+사용자별 비용 예산)는 사내 에이전트 도입 시 보안팀에 제시할 체크리스트 항목으로
  거의 그대로 옮겨 쓸 수 있는 수준으로 구체적이다.

## 출처

- [Hacker News — Show HN: Self-hosted company OS, Claude Code and Codex agents in departments](https://news.ycombinator.com/item?id=49630606)
- [GitHub — OtoDock/oto-dock](https://github.com/OtoDock/oto-dock)
