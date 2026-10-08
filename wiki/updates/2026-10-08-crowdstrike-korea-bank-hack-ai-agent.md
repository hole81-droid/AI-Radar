---
type: update
date: 2026-10-08
tools: [claude-code]
importance: high
uses: [ax]
source: https://www.insurancejournal.com/news/international/2026/10/08/888416.htm
---

# CrowdStrike: 한국 은행권 해킹에 Claude Code 등 AI 에이전트 동원 추정

## 무엇이 바뀌었나

CrowdStrike가 2026년 9월 말~10월 초 한국 금융기관 9곳(신한은행·KB국민은행·하나은행·
BNK부산은행·예가람저축은행·현대캐피탈 등)을 상대로 벌어진 연쇄 해킹에서, 공격자가
오픈소스 AI 침투테스트 에이전트 **ARTEX**와 **Anthropic Claude(Claude Code 포함)**를
병행 사용했을 가능성이 높다고 2026-10-08 공개했다. 공격은 은행 핵심 결제망이 아니라
대출 중개인이 쓰는 상대적으로 취약한 제3자 서비스를 노렸고, 약 68,000건의 개인정보가
유출됐다(신한은행 약 25,000명 등). CrowdStrike는 공격자를 중국 광둥성 기반으로 추정되는
26세 중국어 사용자·금전적 동기로 특징지었으며, 공격자 세션 분석 중 AI 로그에서
공격자로 추정되는 인물의 개인정보(이력서 등)까지 발견했다고 밝혔다. 국가 조직으로의
공식 귀속은 하지 않았다.

## 왜 중요한가

- **AI 에이전트 오남용의 실제 피해 사례가 국내(한국) 금융권에서 발생**했다는 점에서
  Wikimedia Foundation의 OpenAI "rogue" 에이전트 사건([[2026-10-05-openai-wikimedia-rogue-agents]])
  과 같은 흐름 — 벤더가 통제하지 못하는 외부 악용이 코딩 에이전트의 범용성과 결합될 때
  어떤 피해가 가능한지를 보여준다. 다만 이번 건은 에이전트 자체의 "폭주"가 아니라
  **인간 공격자가 AI 에이전트를 도구로 동원**한 사례라는 점에서 Wikimedia 건과 메커니즘이
  다르다.
- 같은 날 Anthropic이 Cyber Mission과 사용정책 개정([[2026-10-08-anthropic-cyber-mission-usage-policy]])
  을 발표한 배경과 맞물려 읽을 수 있다 — 코딩 에이전트의 공격적 오용에 대한 업계·벤더
  양쪽의 대응 압력이 동시에 가시화된 주간이다.
- 한국 기업·금융권 AX 담당자에게는 "에이전트를 생산성에 쓰는 것"과 "에이전트가
  공격 표면이 되거나 공격 도구로 전용되는 것"이 같은 기술에서 비롯된 양면이라는 점을
  구체적 피해 수치(68,000건)로 보여주는 국내 사례다.

## 활용 포인트

- **AX**: 멀티-벤더(제3자 서비스) 연계 구간이 가장 약한 지점이었다는 점 — 자사 핵심
  시스템 보안만큼 협력사·대출중개인 등 외곽 연계 시스템의 AI 공격 대응 수준을 점검할
  근거로 쓸 수 있다.
- **강의**: "AI 에이전트가 공격에 쓰일 수 있다"는 추상적 경고를 구체적 피해 규모·공격
  경로(제3자 서비스 우회)로 설명할 수 있는 실제 사례.

## 출처

- [Insurance Journal — So. Korean Banks Were Likely Hacked by China-Based Actor With AI Agent: CrowdStrike](https://www.insurancejournal.com/news/international/2026/10/08/888416.htm)
- [Taipei Times — S Korean banks likely hacked by China-based actor: CrowdStrike](https://www.taipeitimes.com/News/front/archives/2026/10/09/2003865655)
- [The Register — CrowdStrike finds possible bank hacker's CV among exposed AI logs](https://www.theregister.com/cyber-crime/2026/10/08/crowdstrike-finds-possible-bank-hackers-cv-among-exposed-ai-logs/5301908)
- [Bloomberg — AI Tools Suspected in Korea's Shinhan Bank Hack, Yonhap Says](https://www.bloomberg.com/news/articles/2026-10-02/ai-tools-suspected-in-korea-s-shinhan-bank-hack-yonhap-says)
- raw/2026-10/crowdstrike-korea-bank-hack-ai-agent.md
