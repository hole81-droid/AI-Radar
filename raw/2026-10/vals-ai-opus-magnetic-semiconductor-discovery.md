---
source: https://www.vals.ai/blogs/room-temperature-magnetic-semiconductors
date: 2026-10-05
captured: 2026-10-06
related: https://news.ycombinator.com/item?id=49970667, https://alphasignal.ai/news/vals-ai-deploys-90-claude-agents-to-hunt-room-temperature-magnetic
---

# Vals AI — Claude Opus 5.5 에이전트가 상온 자성 반도체 후보 2종 발견 (WebSearch 교차확인 캡처)

- Vals AI가 Claude Opus 5.5 기반 다중 에이전트("a team of AI agents")를 동원해 3일간
  문헌 리뷰 → 신규 화합물 설계 → 양자계산(DFT, PBE+U·HSE06 두 근사 수준) → 스핀트로닉스
  요건(밴드갭·스핀윈도우·자기정렬온도) 스크리닝을 거쳐 상온 스핀분리(spin-sorted) 반도체
  후보 2종을 제시했다.
- **후보 1 — YBaMnFeO₅**: 신규 설계 화합물(5원소: Y·Ba·Mn·Fe·O). 밴드갭 2.35eV, 스핀윈도우
  정공 1.0eV·전자 1.4eV, 자기정렬 온도 최대 ~490K로 예측됐으나, 합성 시 표준 조건에서
  원자배열이 ~950K 부근에서 무질서하게 붕괴할 가능성이 있어 합성 난도가 높을 것으로 평가.
- **후보 2 — KV[Cr(CN)₆]**: 1999년에 이미 합성된 적 있으나 스핀분리 반도체로서의 전자구조적
  의미는 당시 주목받지 못한 화합물. 밴드갭 2.1eV, 스핀윈도우 정공 2.6eV·전자 1.6eV, 자기정렬
  온도는 1999년 실측 기준 376K까지 확인된 바 있어(과거 실험 데이터와의 교차 검증) 구조적으로도
  금속 사이트가 고정돼 무질서가 덜할 것으로 평가.
- 두 후보 모두 **계산적 가설(computational hypothesis) 단계**이며, 스핀분리 특성의 실험적
  검증은 아직 이뤄지지 않았다. input 파일·raw output·분석 코드를 GitHub에 공개해 재현 가능성을
  제공.
- Vals AI는 AI 모델 평가(benchmark) 전문 스타트업으로, 이번 작업은 Claude Opus 5.5의 과학
  연구 자율 수행 능력을 보여주는 자체 데모 성격이 강하다. 비용·소요 컴퓨트·에이전트 정확한
  대수(기사에는 "90+"로 추정 보도)는 원문에 명시되지 않음.

> 참고: 2026-07~09월 사이 이미 Anthropic 자체 발표(단백질 설계, RSA-260 인수분해, 9-루프
> 진폭 계산 등)로 "Claude 에이전트의 자율 과학연구 수행" 사례가 누적돼 왔다. 이번 건은
> **제3자(Vals AI)가 독립적으로 수행·공개**한 사례라는 점에서 구분된다.
