---
type: update
date: 2026-07-10
tools: [claude-code]
importance: high
uses: [ax]
source: https://www.tomshardware.com/tech-industry/artificial-intelligence/alibaba-bans-anthropics-claude-code-after-an-alleged-hidden-china-detection-backdoor-is-uncovered-employees-told-to-switch-to-qoder-as-the-rift-between-the-firms-widens
---

# Alibaba, 숨은 "중국 사용자 탐지" 코드 발견 뒤 Claude Code 전면 금지 — Qoder로 전환 지시

## 무엇이 있었나

Anthropic과 Alibaba의 갈등이 격화됐다. 2026-06-30 r/ClaudeAI에 올라온 리버스엔지니어링 게시물이 발단이었다 — 비활성화된 원격제어 기능을 복구하려던 사용자가 Claude Code 안에서 난독화된 탐지 로직을 발견했다고 주장했다. 이 코드는 2026-04-02 배포된 버전 2.1.91부터 릴리스 노트에 언급 없이 조용히 포함돼 있었다.

- 해당 코드는 시스템 **타임존과 프록시 설정을 읽고**, Alibaba·ByteDance·Baidu 등 중국 주요 테크기업과 연관된 키워드를 스캔하며, 스테가노그래피 기법으로 사용자 환경 데이터를 Anthropic 측으로 전송한 것으로 알려졌다.
- Anthropic Claude Code팀 엔지니어 Thariq Shihipar는 X에서 이를 "3월에 시작한 실험으로, 무단 리셀러의 계정 남용을 막고 증류(distillation)를 방지하기 위한 것"이라고 해명했다. "예전부터 내리려고 했다"며 해당 코드를 제거하는 PR이 2026-07-01 머지됐다고 밝혔다.
- 배경에는 더 큰 분쟁이 있다. Anthropic은 2026-06-10 미 상원 은행위원회에 보낸 서한에서, Alibaba의 Qwen AI 랩과 연관된 조직이 약 2만5천 개의 부정 계정으로 4~6월 사이 2,880만 건의 대화를 생성한 "역대 최대 규모의 Claude 증류 공격"을 벌였다고 고발한 바 있다.
- 2026-07-10, Alibaba는 전 직원에게 Anthropic 제품 삭제와 자사 코딩 플랫폼 **Qoder**로의 전환을 지시했다.

## 왜 중요한가 (비개발자 관점)

세계 최대 AI 모델 기업 중 하나(Anthropic)와 세계 최대 전자상거래·클라우드 기업 중 하나(Alibaba)가 "누가 누구의 기술을 몰래 빼갔는가"를 놓고 정면으로 충돌한 사건이다. AI 도구 안에 사용자 몰래 식별 코드가 심어질 수 있다는 사실 자체가, "AI 코딩 도구를 설치하면 내 사용 정보가 어디로 얼마나 흘러가는가"라는 신뢰 문제를 전 세계 기업 사용자에게 던진다.

## 활용/시사점

- **AX 관점**: 해외 AI 도구 도입 시 데이터 수집 범위에 대한 실사(코드 감사·릴리스 노트 검증)가 필요하다는 경고 사례. 특히 지정학적으로 민감한 관계에 있는 벤더-고객 조합에서는 "공식 해명"과 "실제 코드 동작"의 간극이 신뢰 리스크로 직결된다.
- 미중 AI 경쟁이 모델 성능 경쟁을 넘어 계정 남용·증류 방지·데이터 주권 문제로 확전되는 흐름을 보여주는 사례 — Claude Code 등 해외 에이전트 도구를 쓰는 국내 기업도 유사한 벤더 신뢰성 점검 체크리스트를 마련할 필요가 있다.

## 출처

- [Tom's Hardware — Alibaba bans Anthropic's Claude Code after an alleged hidden China-detection backdoor is uncovered](https://www.tomshardware.com/tech-industry/artificial-intelligence/alibaba-bans-anthropics-claude-code-after-an-alleged-hidden-china-detection-backdoor-is-uncovered-employees-told-to-switch-to-qoder-as-the-rift-between-the-firms-widens)
- [TheNextWeb — Alibaba bans Claude Code over hidden Chinese user tracking](https://thenextweb.com/news/alibaba-bans-claude-code-anthropic-tracking-chinese-users)
- [Winbuzzer — Alibaba Reportedly Bars Claude Code, Moves Staff to Qoder](https://winbuzzer.com/2026/07/06/alibaba-reportedly-bars-claude-code-moves-staff-to-qoder-xcxwbn/)
- [MLQ News — Alibaba Bans Claude Code, Classifies Anthropic Tool as High-Risk Spyware](https://mlq.ai/news/alibaba-bans-claude-code-classifies-anthropic-tool-as-high-risk-spyware/)
