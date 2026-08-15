# OpenAI, GPT-5.6-Cyber 출시 + Daybreak Blue/Red 접근 티어 신설

- 원문: https://thehackernews.com/2026/08/openai-launches-gpt-56-cyber-with.html
- 보조 출처: https://venturebeat.com/technology/openai-launches-gpt-5-6-cyber-with-reduced-refusals-95-completion-on-advanced-cybersecurity-tasks (429 차단, 제목·스니펫만 확인)
- 보조 출처: https://cryptorank.io/news/feed/32779-openai-daybreak-blue-red-gpt-5-6-cyber
- 발표일: 2026-08-11
- 수집일: 2026-08-16 (정기 스캔 중 공백 발견 — 08-11 발표 당시 스캔에서 누락되어 5일 늦게 소급 반영)

## 요약

- OpenAI가 **GPT-5.6-Cyber**(GPT-5.6 Sol 기반)를 공개. 제로데이 취약점 발굴·익스플로잇
  체인 개발 등 사이버보안 특화 작업 능력을 강화 훈련한 모델.
- 동시에 **Daybreak** 프로그램을 두 티어로 확장:
  - **Daybreak Blue**: 방어 목적 보안 작업(사고 탐지·조사·취약점 관리)에 한해 안전장치를
    완화한 범용 모델(GPT-5.6 Sol 등) 접근.
  - **Daybreak Red**: GPT-5.6-Cyber 전용 접근 — 승인된 취약점 연구·익스플로잇 검증·보안
    테스트 목적. 신뢰 고객사(Accenture, Akamai, Cisco, Cloudflare, CrowdStrike, Fortinet,
    IBM, Palo Alto Networks, PwC, Sophos 등)로 자격 제한.
- **핵심 수치**: 자체 "Advanced Cybersecurity Completion Rate" 평가에서 GPT-5.6-Cyber는
  익스플로잇 체인 개발·인증 우회·권한 상승 요청의 **95.0%**를 완료. 기본 안전장치가 적용된
  GPT-5.6 Sol은 동일 요청의 **1.5%**만 완료(Daybreak Blue는 2%).
- **실제 발견 성과**: Chrome V8 엔진 샌드박스 탈출 취약점 **CVE-2026-15903**(CVSS 8.8, 2026년
  7월 패치 완료) 발견. 그 외 모바일 OS 권한상승 체인 5건, DB 원격코드실행 결함 3건, 커널
  권한상승 취약점 400건+ 발견(사이버보안 연구 목적 활용 사례로 제시).
- OpenAI 자체 인정: "안전장치를 완화한 모델은 오용이든 정렬 실패든 표준 모델 사용을 넘어서는
  리스크를 수반한다."
- 균형추 데이터: 1Password 리서치 인용, AI가 생성한 패치가 부작용 없이 취약점을 완전히
  해결한 비율은 **26.0%**에 그침 — 공격 능력 발전 속도가 방어(패치 신뢰성) 능력을 앞선다는
  우려 제기.

## 왜 중요한가

프론티어 AI 랩이 "이중용도(dual-use)" 사이버보안 능력을 공식적으로 티어화된 접근 제어로
관리하기 시작한 첫 사례 중 하나. 안전장치를 낮춘 모델을 공식 제품으로 출시하는 선례가 되며,
방어자 역량 강화와 공격 표면 확대라는 트레이드오프를 회사가 스스로 인정한 점이 눈에 띈다.
