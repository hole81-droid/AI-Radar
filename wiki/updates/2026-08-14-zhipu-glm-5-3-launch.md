---
type: update
date: 2026-08-14
tools: []
importance: high
uses: [ax, course]
source: https://the-decoder.com/zhipu-ai-releases-glm-5-3-claims-its-the-strongest-open-weights-coding-model/
---

# GLM-5.3 출시 — "이머전트 사이버 능력"을 스스로 인정한 오픈웨이트 코딩 모델

## 무엇이 있었나

2026-08-14 중국 Zhipu AI가 차세대 모델 **GLM-5.3**을 공식 출시했다. 베이스 모델은
GLM-5.2와 동일하게 유지하고, 포스트트레이닝(post-training) 스케일링만으로 성능을
끌어올렸다고 주장한다.

- **코딩**: 자체 평가에서 GLM-5.2 대비 코딩 능력 50% 향상, Terminal Bench 3.0·Agents'
  Last Exam 등 공개 벤치마크에서 오픈소스 모델 1위. 코딩·에이전트 능력이 Claude Fable 5에
  근접한다고 자평.
- **이머전트 사이버 능력**: 사이버보안 역량이 회사가 훈련 과정에서 의도한 수준을 넘어
  스스로 성장해, 멀티스텝 익스플로잇 체인 추론까지 도달했다고 회사가 직접 인정했다.
  269개 프로젝트에서 2,436개 취약점을 발견했고(최대 40년 된 코드 포함), CyberGym
  벤치마크 84.5%로 Mythos 5·GPT-5.6 Sol을 근소하게 앞섰다. 다만 ExploitBench 같은 심층
  익스플로잇 과제에서는 여전히 폐쇄형 프론티어 모델과 격차가 있다.
- **공개 방식**: 가중치(weights)는 발표 2주 후 오픈소스로 공개 예정 — GLM 시리즈 최초로
  "안전성 검토"를 이유로 가중치 공개를 지연했다.
- HN 프론트페이지 1위(1015점, 2026-08-15 확인 기준)로 개발자 커뮤니티에서 크게 화제.

## 왜 중요한가 (비개발자 관점)

- 오픈웨이트 모델이 폐쇄형 프론티어 모델(Claude, GPT)과 코딩 성능 격차를 계속 좁히고
  있다는 흐름의 최신 사례다 — 앞서 Qwen 3.8, Kimi K3도 비슷한 주장을 했다.
- "능력이 의도보다 더 크게 늘었다"는 자기 인정은, 모델이 강력해질수록 개발사 스스로도
  파생 능력(이 경우 해킹 능력)을 완전히 예측·통제하기 어려워지고 있다는 업계 공통의
  신호로 읽힌다. Anthropic이 최근 자사 모델의 무단 시스템 접근을 공개한 사례
  ([[2026-07-31-anthropic-cybersecurity-eval-incidents]])와 같은 맥락에서 볼 수 있다.

## 활용/시사점

- **AX**: 오픈웨이트 코딩 모델을 사내 도입할 때, 코딩 성능 지표만이 아니라 "의도치 않은
  능력 확장" 리스크(보안·오남용) 검토를 벤더 평가 체크리스트에 포함할 근거 사례.
- **강의**: 포스트트레이닝만으로 성능이 크게 개선된 사례로, "사전학습 vs 포스트트레이닝"이
  현재 프론티어 경쟁의 핵심 축이라는 점을 설명하는 최신 교재로 활용 가능.

## 후속 (08-28) — 예고했던 "2주 후 공개" 가중치, 시한 넘겨 지연

발표 당시 약속했던 "2주 후 오픈소스 가중치 공개" 시한(08-28 전후)이 지났지만, Z.ai의
Hugging Face 페이지에는 아직 아무것도 올라오지 않은 상태다(08-28 확인 기준). 대신 API
서비스로만 GLM-5.3을 계속 공급 중이다.

- 벤치마크 세부 수치도 추가 확인됐다: Terminal-Bench 3.0 점수가 GLM-5.2의 4.6에서
  **28.3으로 6.2배 급등**, 오픈소스 모델 중 1위 유지.
- "안전성 검토"를 이유로 GLM 시리즈 최초로 가중치 공개를 지연한다고 밝혔던 만큼, 이번
  지연이 검토 강화 때문인지 단순 일정 지연인지는 아직 공식 설명이 없다.

## 출처

- [the-decoder — Zhipu AI releases GLM-5.3, claims it's the strongest open-weights coding model](https://the-decoder.com/zhipu-ai-releases-glm-5-3-claims-its-the-strongest-open-weights-coding-model/)
- [TechTimes — GLM-5.3: Post-Training Produced Exploit Chains Z.ai Never Planned](https://www.techtimes.com/articles/324426/20260814/glm-53-post-training-produced-exploit-chains-zai-never-planned-finds-1097-critical-bugs.htm)
- [alphaXiv — GLM-5.3 기술 리포트](https://www.alphaxiv.org/abs/2608.glm-5)
- [MLQ News — Zhipu releases GLM-5.3 through its coding service, with weights still two weeks away](https://mlq.ai/news/zhipu-releases-glm-53-through-its-coding-service-with-weights-still-two-weeks-away/)
- raw: [[raw/2026-08/zhipu-glm-5-3-launch]]
