---
type: update
date: 2026-06-30
importance: medium
uses: [ax]
source: https://venturebeat.com/technology/meituan-open-sources-longcat-2-0-the-1-6t-near-frontier-agentic-coding-model-thats-been-leading-openrouter-trained-entirely-on-chinese-chips
---
# Meituan, 1.6T 오픈소스 모델 LongCat-2.0 공개 — "중국 칩만으로 만든 첫 조 단위 모델"

## 무엇인가

중국 배달 플랫폼 Meituan이 6/30 공개한 오픈소스(MIT 라이선스) 대형 모델. 1.6조 파라미터
MoE 구조(토큰당 약 48B 활성), 네이티브 1M 토큰 컨텍스트를 갖췄고, 학습과 서빙 전 과정을
NVIDIA 없이 **중국산 칩만으로** 수행한 첫 조 단위 모델이다. 공개 전부터 OpenRouter에
"Owl Alpha"라는 익명 모델로 올라 개발자 사용량 차트 상위를 차지해 정체 논쟁이 있었는데,
그 정체가 LongCat-2.0으로 확인됐다. 에이전틱 코딩 성능이 프런티어급에 근접한다는 평가.
단, 공개 시점 기준 전체 가중치는 "coming soon" 상태로 아직 미게시.

## 왜 주목할 만한가

- 미국 수출통제(6월 Fable 5 중단 사태로 실감된)의 반대편 그림 — 중국이 자국 칩 스택만으로
  준프런티어 모델을 만들 수 있음을 보여준 상징적 사건.
- 모델 개발 주체가 AI 랩이 아니라 **배달 회사**라는 점. 중국에서는 Alibaba(Qwen),
  Moonshot(Kimi), Zhipu(GLM)에 이어 플랫폼 기업까지 오픈소스 경쟁에 뛰어든 상태다.
- MIT 라이선스 + 1M 컨텍스트 + 에이전틱 코딩 특화 조합은 GLM 5.2와 함께 "무료로 쓸 수 있는
  상위권 에이전트 모델" 선택지를 빠르게 늘리고 있다.

## 어디에 써먹을 수 있는가

- **AX 관점**: 데이터 주권·비용 문제로 자체 호스팅을 검토하는 기업에게 오픈 모델 선택지가
  분기마다 갱신되고 있다는 근거. 벤더 계약 시 "오픈소스 대안 대비 프리미엄"을 따지는 재료.
- 미·중 AI 공급망 분리가 기업 리스크 관리(특정 국가 규제로 인한 서비스 중단)에 주는 시사점.

## 출처

- [VentureBeat](https://venturebeat.com/technology/meituan-open-sources-longcat-2-0-the-1-6t-near-frontier-agentic-coding-model-thats-been-leading-openrouter-trained-entirely-on-chinese-chips)
