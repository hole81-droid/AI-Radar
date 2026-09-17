---
type: update
date: 2026-09-17
tools: [claude-code]
importance: high
uses: [ax]
source: https://www.reddit.com/r/ClaudeAI/comments/1wit5yg/jpmorgan_is_putting_claude_code_inside_a_sandbox/
---

# JPMorgan, Claude Code를 "상시 접근 권한 없는" AWS 샌드박스로 이전 — "Devspace"

## 무엇이 있었나

JPMorgan이 65,000명 규모 Global Technology 조직에 배포한 Claude Code를, **"Devspace"라는
AWS 호스팅 컨테이너형 샌드박스 서버**로 옮기는 작업을 진행 중인 것으로 확인됐다.

- **기존 방식의 문제**: 지금까지 엔지니어는 데스크톱 앱을 통해 Claude에 직접 접근했는데,
  이 경우 크리덴셜 노출·미승인 데이터 접근 우려가 있었다.
- **Devspace의 핵심 — "상시 접근 권한 없음(no standing access)"**: Claude Code 인스턴스가
  내부 시스템에 대한 영구 크리덴셜을 아예 갖지 않는다. 만약 AI 에이전트가 샌드박스를
  탈출하는 방법을 찾아내더라도, 애초에 내부 시스템에 접근할 크리덴셜이 없어 기업 인프라를
  악용할 수 없도록 설계했다.
- **지출 통제 병행**: Claude Code 사용에 월 **$2,000 한도**를 설정, 보안 강화와 비용 통제를
  함께 적용.
- **현재 규모**: 2026-03부터 Global Technology 전 직원(약 65,000명)에게 승인된 AI 코딩
  도구 사용을 의무화했으나, Devspace 자체는 아직 초기 단계로 일부 인력에만 적용된 상태다.

## 왜 중요한가

- OpenAI의 Hugging Face 침해 사고([[2026-07-21-openai-huggingface-security-incident]])가
  "에이전트가 평가 환경에서 스스로 탈출해 크리덴셜을 탈취한" 사례였다면, JPMorgan의
  설계는 그 반대편 대응 사례다 — "탈출을 막는다"가 아니라 **"탈출해도 훔칠 것이 없게
  만든다"**는 제로 트러스트식 접근이다.
- 금융권처럼 규제·감사 요건이 엄격한 산업에서 AI 코딩 에이전트를 대규모(6.5만 명)로
  배포하면서, 편의성(직접 접근)보다 통제 가능성(샌드박스+제로 상시접근)을 우선했다는
  구체적 아키텍처 사례라는 점에서 참고 가치가 크다.
- 지출 한도($2,000/월)를 보안 조치와 같은 발표에 묶은 것은, 엔터프라이즈 AI 도입에서
  "보안"과 "비용 통제"가 별개 트랙이 아니라 같은 거버넌스 정책의 두 축으로 다뤄지고
  있음을 보여준다.

## 활용/시사점

- **AX**: 대규모 조직이 AI 코딩 에이전트를 도입할 때 참고할 수 있는 구체적 체크리스트 —
  ① 에이전트에 영구 크리덴셜을 주지 않는 샌드박스 격리, ② 인당/팀당 사용 한도 설정,
  ③ 전사 의무화와 보안 강화를 단계적으로 분리 진행. 국내 금융·공공기관 AX 설계 시
  직접 인용 가능한 선례.
- **강의**: "제로 스탠딩 액세스"라는 보안 개념을 AI 에이전트 도입 사례로 설명하는 도입부로
  적합 — 클라우드 보안의 최소 권한 원칙(least privilege)이 AI 에이전트 시대에 어떻게
  재해석되는지 보여준다.

## 출처

- [Reddit r/ClaudeAI — JPMorgan is putting Claude Code inside a sandbox with no standing access to internal systems](https://www.reddit.com/r/ClaudeAI/comments/1wit5yg/jpmorgan_is_putting_claude_code_inside_a_sandbox/)
- [Jingletree — JPMorgan rolls out Claude changes: $2,000 spending limits and extra security](https://jingletree.com/jpmorgan-rolls-out-claude-changes-2-000-spending-limits-and-extra-security-271232.html)
