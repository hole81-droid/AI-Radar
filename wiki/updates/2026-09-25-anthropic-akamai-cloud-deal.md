---
type: update
date: 2026-09-25
tools: []
importance: high
uses: [ax]
source: https://techcrunch.com/2026/09/25/anthropic-to-pay-akamai-11-6-billion-over-seven-years-in-cloud-deal/
---

# Anthropic, Akamai와 $11.6B CPU 클라우드 계약 — 컴퓨트 지출 1년 만에 $500B 돌파

## 무엇이 있었나

Anthropic이 Akamai와 7년간 총 $11.6B 규모의 클라우드 인프라 계약을 체결했다. TechCrunch·
Neowin·the-decoder·24/7 Wall St. 등이 일제히 보도했고, Akamai는 이 소식에 주가가 15%
급등했다.

- **CPU 워크로드에 특화**: GPU 중심의 통상적인 AI 인프라 계약과 달리, 이 계약은 코드
  실행·웹 브라우징 등 에이전트가 늘어나며 수요가 급증한 **범용 CPU 워크로드**를 겨냥했다.
  "AI 에이전트가 더 많은 작업을 맡을수록 CPU 수요가 늘어난다"는 것이 계약의 배경이다.
- **규모**: 2026년 5월 Bloomberg가 보도했던 $1.8B 규모 계약의 6배 이상이며, Akamai
  역사상 최대 계약이다. Akamai는 이 계약과 연동해 2026년 설비투자(capex)를 $1.7B
  상향 조정했다.
- **지분 옵션 포함**: Anthropic은 Akamai 지분 최대 5%를 취득할 수 있는 워런트를
  받았다 — 첫 지급 시 약 2%가 베스팅되고, 나머지는 Anthropic이 Akamai에 추가로
  쓰는 금액(약 $3B당 약 1%p)에 연동된다. 계약 규모는 최대 약 $20B까지 확대될 수 있다.
- **누적 지출 규모**: 이번 계약으로 Anthropic의 컴퓨트 지출 약정 총액이 1년이 채 안 되는
  기간에 $500B를 넘어섰다고 the-decoder가 집계했다.

## 왜 중요한가 (비개발자 관점)

- AI 인프라 경쟁의 중심이 "더 많은 GPU"에서 "에이전트를 돌리는 데 필요한 CPU·네트워크"로
  일부 옮겨가고 있음을 보여주는 신호다 — Claude 같은 모델 자체의 추론 연산(GPU)뿐 아니라,
  에이전트가 실제로 코드를 실행하고 웹을 돌아다니는 데 필요한 범용 컴퓨트도 대규모
  인프라 계약의 대상이 되고 있다.
  Anthropic이 컴퓨트 확보를 위해 CDN·엣지 컴퓨팅 전문 기업(Akamai)까지 파트너로
  끌어들였다는 점에서, 전통적인 클라우드 3사(AWS·Google·Microsoft) 밖으로 조달처를
  넓히는 다변화 전략도 읽을 수 있다.
- IPO(10월 목표, $2조 밸류에이션 거론)를 앞둔 시점에 컴퓨트 조달을 지분 워런트까지 걸며
  선제적으로 확보했다는 점은 투자자에게 "성장에 필요한 인프라를 이미 락인했다"는
  메시지로 읽힐 수 있다.

## 활용/시사점

- **AX**: 기업이 자체 AI 에이전트를 대규모로 운영할 계획이라면, 모델 추론 비용(GPU)뿐
  아니라 에이전트가 수행하는 코드 실행·브라우징 등 **CPU 기반 워크로드 비용**도 별도로
  예측·관리해야 한다는 실무적 시사점이 있다.
- **강의**: "AI 인프라 = GPU"라는 단순화된 통념을 깨는 사례로 쓸 수 있다 — 에이전트
  경제가 커질수록 컴퓨트 수요의 성격 자체가 바뀐다는 점을 이 계약의 CPU 특화 구조로
  설명할 수 있다.

## 출처

- [TechCrunch — Anthropic to pay Akamai $11.6 billion over seven years in cloud deal](https://techcrunch.com/2026/09/25/anthropic-to-pay-akamai-11-6-billion-over-seven-years-in-cloud-deal/)
- [the-decoder — Anthropic signs $11.6 billion cloud deal with Akamai, pushing its compute spending past $500 billion in under a year](https://the-decoder.com/anthropic-signs-11-6-billion-cloud-deal-with-akamai-pushing-its-compute-spending-past-500-billion-in-under-a-year/)
- [Neowin — Anthropic signs $11.6B cloud deal with Akamai](https://www.neowin.net/news/anthropic-signs-116b-cloud-deal-with-akamai/)
- [24/7 Wall St. — Akamai Surges 15% on $11.6B Anthropic Cloud Deal](https://247wallst.com/investing/2026/09/25/akamai-surges-15-on-11-6b-anthropic-cloud-deal-coreweave-and-cloudflare-tick-up/)
