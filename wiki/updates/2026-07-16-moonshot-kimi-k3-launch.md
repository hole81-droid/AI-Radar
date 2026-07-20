---
type: update
date: 2026-07-16
tools: []
importance: high
uses: [ax]
source: https://venturebeat.com/technology/chinas-moonshot-ai-releases-kimi-k3-the-largest-open-source-model-ever-rivaling-top-u-s-systems
---

# 중국 Moonshot AI, 역대 최대 오픈웨이트 모델 "Kimi K3" 공개 — 프론트엔드 코딩에선 Claude Fable 5도 제쳤다

## 무엇이 있었나

중국 Moonshot AI가 2026-07-16 **Kimi K3**를 공개했다. 2.8조 파라미터 규모로 "역대 가장 큰 오픈웨이트(open-weight) 모델"이며, 완전한 가중치 공개는 2026-07-27로 예고됐다. 핵심 스펙:

- **아키텍처**: Kimi Delta Attention(KDA, 하이브리드 선형 어텐션) + Attention Residuals, 네이티브 비전 이해, 컨텍스트 1M 토큰
- **효율**: 896개 전문가(MoE) 중 토큰당 16개(약 1.8%)만 활성화
- **벤치마크**: GPQA Diamond 93.5%(공개 시점 오픈웨이트 최고), Terminal-Bench 2.1 88.3%, BrowseComp(에이전틱 작업) 91.2%(당시 공개 최고치). Arena의 Frontend Code 평가에서는 1,679점으로 **Claude Fable 5를 제치고 1위**(블라인드 개발자 테스트 기준). 자체 발표 벤치마크는 Claude Opus 4.8 max·GPT-5.5 high를 대체로 앞서지만 Claude Fable 5·GPT-5.6 Sol에는 못 미친다고 밝힘.
- **가격**: API 기준 캐시 히트 입력 $0.30/M, 캐시 미스 입력 $3/M, 출력 $15/M 토큰

## 왜 중요한가 (비개발자 관점)

- "가장 큰 오픈소스 모델"이 미국이 아니라 중국에서, 그것도 미국의 대중국 반도체 수출 규제 속에서 나왔다는 점 자체가 뉴스다. 최소 일부 벤치마크(프론트엔드 코딩)에서 Anthropic의 최신 모델을 앞서는 결과가 나오며, "미·중 AI 격차가 좁혀지고 있다"는 서사에 힘을 싣는다.
- 오픈웨이트로 풀리면 누구나 자체 서버에 내려받아 돌릴 수 있어, API 요금을 내지 않고 자체 인프라에서 프론트급 코딩 성능을 쓰려는 기업·개발자들의 선택지가 넓어진다.
- 같은 주 조코딩 등 국내 유튜브 채널도 "Kimi K3 열풍"을 헤드라인으로 다룰 만큼 커뮤니티 반응이 빨랐다.

## 활용/시사점

- **AX**: 오픈웨이트 프론티어급 모델의 등장은 "특정 벤더 API 종속" 리스크를 낮추는 협상 카드가 된다. 코딩 특화 업무에서 Claude·GPT 계열과 함께 K3를 벤치마크 후보에 넣어볼 가치가 있다. 단, 자체 호스팅에는 2.8T 파라미터급 인프라 비용이 따로 든다는 점을 감안해야 한다.
- 벤치마크 우위는 "프론트엔드 코딩" 등 특정 영역에 한정된 결과이며, 자체 발표 수치가 섞여 있어 실제 도입 전 별도 검증이 필요하다.

## 출처

- [VentureBeat — China's Moonshot AI releases Kimi K3, the largest open-source model ever, rivaling top U.S. systems](https://venturebeat.com/technology/chinas-moonshot-ai-releases-kimi-k3-the-largest-open-source-model-ever-rivaling-top-u-s-systems)
- [Tom's Hardware — China's 2.8-trillion-parameter Kimi K3 beats Claude Fable 5 in Frontend Code Arena benchmark](https://www.tomshardware.com/tech-industry/artificial-intelligence/moonshot-releases-2-8-trillion-parameter-kimi-k3)
- [Simon Willison — Kimi K3, and what we can still learn from the pelican benchmark](https://simonwillison.net/2026/Jul/16/kimi-k3/)
- [Bloomberg — Moonshot Unveils Kimi K3 AI Model, Narrowing Gap With US Rivals](https://www.bloomberg.com/news/articles/2026-07-17/china-s-powerful-new-moonshot-ai-model-closes-gap-with-us-rivals)
