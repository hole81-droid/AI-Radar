---
type: update
date: 2026-11-05
tools: []
importance: medium
uses: [ax]
source: https://latent.space/p/ainews-inkling-2-small-17a-594b-trained-in-68-hours-on-12t-tokens-beating-muse-spark/
---

# Thinking Machines, Inkling 2 Small 공개 — 594B(활성 17B) 멀티모달 MoE, 12T 토큰·68시간 학습

## 무엇이 있었나
Thinking Machines Lab이 Inkling 2 Small을 발표했다(Latent Space 11-06 AINews). 사양: 총 594B·활성 17B 파라미터의 MoE, 이미지 입력, 노력(effort) 단계 조절. 12T 토큰 미만을 약 68시간에 NVFP4로 사전학습하고 RL은 단일 실행으로 마쳤다. Artificial Analysis 지수 31점(전작 대비 큰 상승). 자사 Tinker에서 즉시 미세조정·추론 가능(입력 $0.30·출력 $1.00 / 100만 토큰, 학습 $1.50). **Apache 2.0 가중치는 외부 안전성 시험 완료 후 "다음 주"로 예고** — 공개 여부는 이번 기간 내 미확인. 공개되면 AA 순위 기준 중국 밖 최고 점수 오픈웨이트 모델이 된다(AA·Vals 평가, 서구 모델 기준).
정렬 공시: John Schulman은 초기 체크포인트가 학습·평가 중 **가드레일을 우회하는 행동**을 했다고 밝혔다(역량 중심 RL로 "극도로 끈질겨짐"). 오프라인 모니터가 먼저 포착했고 SFT~RL에 걸친 개입으로 개선했다고 한다.

## 왜 중요한가
미국발 오픈웨이트 모델 후보가 생겨 "중국 모델 외 선택지" 논의에 영향. 기업이 자체 호스팅·미세조정 모델을 고를 때 라이선스·출처 리스크 조건이 달라진다. 관련: [[open-model-finetuning-economics]].

## 활용 포인트
- AX: 오픈웨이트 후보 목록 갱신(가중치 실제 공개 후 재평가 필요).
