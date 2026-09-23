# OpenAI — "Introducing GPT-6 Sol and Luna"

- 원문: https://openai.com/index/introducing-gpt-6-sol-and-luna/ (WebFetch 403으로 직접 확인 불가)
- 2차 확인: https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/
- 3차 확인(구루 1차 채널): https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/
- 게시일: 2026-09-22
- 수집일: 2026-09-24

## 요지

Anthropic이 Claude Opus 5.5를 출시한 약 한 시간 뒤, OpenAI가 GPT-6 패밀리의 중급·경량
모델 GPT-6 Sol과 GPT-6 Luna를 출시했다. 같은 날 두 회사가 동시에 가격을 낮추면서
"가격전쟁"이라는 평가가 나왔다.

## 핵심 사실

- **모델 역할**: Sol은 코딩 등 복잡한 작업용, Luna는 문서 요약·정보 추출·빠른 질의응답
  같은 "고용량(high-volume)" 작업용.
- **GPT-6 Astra와의 관계**: 09-04 출시된 GPT-6 Astra(플래그십) 세대의 이점을 계승하면서
  캐싱·추론 효율화로 비용을 낮춘 모델.
- **가격**: GPT-6 Luna 입력 $0.10/M·출력 $0.50/M — GPT-5.6 Luna($0.20/$1.20) 대비
  절반 이하, Haiku 4.5($1/$5)의 약 10분의 1. GPT-6 Sol도 GPT-5.6 Sol 대비 유사한 폭으로
  인하(TechCrunch, 구체 달러 수치는 명시 안 됨). API 접근성 기준 5.6 시리즈 대비 전반
  50% 인하.
- **성능 주장(자사 발표, 제3자 검증 전)**: Sol이 "이전 버전 대비 약 절반의 오류"를
  보이며 "Astra 수준의 신뢰도" 달성, 코딩 오류율 감소, Anthropic Fable·Opus 모델보다
  우수하다고 주장.
- **제공 경로**: ChatGPT Work·Codex·API, 순차 전개 중.
- **GPT-5.5 단종**: 별도 공지로 ChatGPT·ChatGPT Work·Codex 전 플랜에서 2026-10-14부로
  GPT-5.5 퇴역 예고.

## Anthropic 측 동시 대응 (같은 날)

Opus 5.5도 같은 날 가격 인하: 입력 $4/M(Opus 5 $5 대비 20%↓), 출력 $20/M(20%↓), 캐시
입력 읽기 $0.50→$0.20(60%↓).

## Simon Willison 논평 (1차 구루 채널, 09-22)

"새로운 가격전쟁의 시작" — 지난 18개월간 중국계 오픈웨이트 모델(Kimi K3·GLM-5.3·
Qwen 3.8 등)이 토큰 가격을 계속 끌어내린 압력이 두 최상위 벤더의 동시 가격 인하로
이어졌다고 평가. GPT-6 Luna는 Haiku 4.5의 1/10 가격이라는 점을 강조.
