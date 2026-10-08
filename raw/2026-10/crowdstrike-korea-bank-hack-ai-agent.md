# CrowdStrike — 한국 은행권 해킹에 AI 에이전트(Claude Code + ARTEX) 사용 추정

- URL: https://www.insurancejournal.com/news/international/2026/10/08/888416.htm (및
  https://www.taipeitimes.com/News/front/archives/2026/10/09/2003865655 ·
  https://www.theregister.com/cyber-crime/2026/10/08/crowdstrike-finds-possible-bank-hackers-cv-among-exposed-ai-logs/5301908 ·
  https://www.bloomberg.com/news/articles/2026-10-02/ai-tools-suspected-in-korea-s-shinhan-bank-hack-yonhap-says 교차확인)
- 발행일: 2026-10-08 (CrowdStrike 보고서 공개), 최초 사건 보도 2026-10-02 (Yonhap/Bloomberg)
- 수집: WebSearch 교차확인 (1차 CrowdStrike 블로그는 직접 WebFetch 403, 2차 보도 다수로 교차검증)

## 핵심 내용

- 2026년 9월 말~10월 초 약 2주간 신한은행·KB국민은행·하나은행·BNK부산은행·예가람저축은행·
  현대캐피탈 등 한국 금융기관 9곳이 사이버공격을 받아 약 68,000건의 개인정보가 유출됐다
  (신한은행 약 25,000명, KB국민은행 119명 등 기관별 피해 규모는 상이).
- CrowdStrike는 공격자가 중국 광둥성 기반으로 추정되는 26세 중국어 사용자이며, 금전적
  동기로 움직였다고 밝혔다. 특정 국가 조직에 공식 귀속시키지는 않았다.
- 공격에 사용된 도구: 중국 보안 엔지니어("Autumn")가 GitHub에 공개한 오픈소스 침투테스트
  AI 에이전트 **ARTEX**, 그리고 **Anthropic Claude(Claude Code 포함)** 등 대형언어모델을
  병행 사용. AI 에이전트가 취약점 탐색·침투 경로 자동화를 수행한 것으로 추정.
- 공격 대상은 은행의 핵심 결제망이 아니라 대출 중개인이 쓰는 상대적으로 취약한 제3자
  서비스. 결제 자격증명이나 무단 거래를 가능케 하는 정보가 탈취됐다는 확증은 없으나,
  유출 데이터는 피싱·사회공학 공격 등 2차 사기에 활용될 위험이 있다.
- CrowdStrike는 AI 코딩 툴 세션·관련 인프라를 분석하는 과정에서 공격자로 추정되는 인물의
  개인정보(이력서 등)를 AI 로그 가운데서 발견했다고 밝혔다(The Register 보도).

## 수집 메모

- 공식 CrowdStrike 리포트 원문은 WebFetch 403으로 직접 확인 불가 — Insurance Journal·
  Taipei Times·The Register·Bloomberg 등 복수 2차 보도로 핵심 수치·귀속 판단을 교차검증.
- Anthropic 측 자체 성명(사용정책 위반 대응 등)은 이번 스캔에서 별도 확인하지 못함 —
  다음 스캔에서 anthropic.com/news 재확인 필요.
