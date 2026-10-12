---
type: update
date: 2026-10-12
tools: [other]
importance: high
uses: [ax]
source: https://www.orcarouter.ai/blog/muse-wonder-full-sustained-agent-work
---

# Meta, 프론티어 모델 "Muse Wonder"·"Muse Wonder Full" 출시 — 자체 발표와 자체 평가표가 어긋났다

## 무엇이 있었나

Meta Superintelligence Labs가 2026-10-12 코딩·장시간 에이전트 작업·고급 컴퓨터 사용에
초점을 맞춘 신규 프론티어 모델 패밀리 **Muse Wonder**와 **Muse Wonder Full**을 출시했다
(100만 토큰 컨텍스트 윈도우). Claude Opus 5.5·GPT-6 Astra와 정면으로 경쟁하는 모델급이다.

- **Meta의 주장**: 보도자료·마케팅 자료에서는 Wonder Full이 SWE-Marathon(장시간 코딩
  작업 벤치마크)에서 57.5%를 기록해 Claude 대비 46.3% 우위, Opus 5.5·GPT-6 Astra를
  "지속형 에이전트 작업"에서 이겼다고 밝혔다.
- **Meta가 공개한 평가표 자체는 다른 숫자**: 같은 자료에 실린 상세 테이블에는 SWE-Marathon
  79.0(보도자료의 57.5%와 불일치), Opus 5.5 대비 격차 4.8점(보도자료의 11.2%와 불일치)이
  적혀 있다. 또 DeepSWE 벤치마크에서는 Wonder Full이 3위(57.1)로 Opus 5.5(59.6)·GPT-6
  Astra(59.1)보다 낮다 — "전승"이 아니라 Meta 자체 테이블 14개 지표 중 7개 승리(절반을 살짝
  넘는 수준)다.
- **독립 검증과도 어긋남**: Artificial Analysis Intelligence Index 기준 Muse Wonder는
  52점(9위), Wonder Full은 56점(4위)로 둘의 격차가 단 4점이다. Meta가 자체 "JobBench"
  에서 주장한 44점 격차와 모순된다.
- **가격**: Muse Wonder는 API로 제공(입력 $4.00/출력 $20.00, 100만 토큰당). Wonder Full은
  API 가격이 없고 구독제($50~200/월)로만 쓸 수 있다.

> ⚠️ **참고**: 기존 "Muse"(2026-09-08 출시, 쇼핑·예약 대행 개인비서 앱,
> [[2026-09-21-amazon-blocks-meta-muse-agent-commerce]])와는 다른 제품이다. Wonder/Wonder
> Full은 그 아래 깔리는 프론티어 LLM 모델 패밀리이고, 기존 Muse는 소비자용 에이전트 앱이다.

## 왜 중요한가

벤더가 자사 모델을 "이전 세대를 이겼다"고 발표할 때, **보도자료 숫자와 그 벤더가 직접 공개한
상세 평가표 숫자가 서로 다를 수 있다**는 것을 같은 발표 안에서 보여준 사례다. 독립 벤치마크
(Artificial Analysis)까지 교차확인해야 실제 격차를 알 수 있었다 — 그렇지 않으면 보도자료의
"압도적 우위" 프레이밍만 남는다.

## 활용/시사점

- **AX 관점**: 모델 선택·구매 의사결정에서 벤더 자체 발표 수치를 그대로 받아들이지 말고,
  ① 같은 자료 내 상세 테이블과 요약 문구가 일치하는지, ② 제3자 독립 벤치마크(Artificial
  Analysis 등)와 교차확인하는 2단계 검증이 필요하다는 실례.
  이는 일반적 "벤더 벤치마크 과장" 통념을 넘어, **같은 발표 안에서도 숫자가 어긋날 수 있음**을
  보여준 더 구체적인 경고다.
- **강의 소재**: "모델 출시 발표를 읽는 법" 모듈에서 보도자료 vs 상세 평가표 vs 독립 검증
  3단 비교 사례로 바로 쓸 수 있다.

## 출처

- [orcarouter.ai — Meta Says Muse Wonder Full Beats Opus 5.5: Does It?](https://www.orcarouter.ai/blog/muse-wonder-full-sustained-agent-work)
- [FourWeekMBA — Meta Launches Muse Wonder, Its Most Capable AI Models Yet](https://fourweekmba.com/ai-meta-launches-muse-wonder-its-most-capable-ai-models-yet/)
- 관련: [[2026-09-21-amazon-blocks-meta-muse-agent-commerce]] · [[2026-09-04-openai-gpt-6-astra-launch]] · [[2026-09-22-anthropic-claude-opus-5-5-launch]]
