---
type: update
date: 2026-11-09
tools: [claude-code, claude]
importance: high
uses: [ax, course]
source: https://www.anthropic.com/claude-fable-and-mythos-5-2
---

# Anthropic, "Claude Fable 5.2·Mythos 5.2" 출시 — 독립 벤치마크 1위 탈환, 가격은 20% 인하

## 무엇이 있었나

11-09 Anthropic이 Fable 5.2와 Mythos 5.2를 출시했다(IPO 로드쇼 시작과 같은 날, [[2026-11-10-anthropic-ipo-roadshow]]). 자사 표현은 "Opus 5.5보다 평가한 거의 모든 능력에서 한 단계 위". API ID는 `claude-fable-5-2`, AWS·Google Cloud·Azure에서도 당일 제공.

- **독립 벤치마크**: Artificial Analysis Intelligence Index v5에서 Fable 5.2(max) **65점으로 1위** — Gemini 4 Carbon 60점, Opus 5.5 59점, GPT-6 Astra 57점. [[2026-10-28-google-deepmind-gemini-4-carbon-launch]]에서 Google이 가져갔던 1위를 11일 만에 되찾았다. 그 밖에 HLE-Diamond 80%, FrontierCode 2.0 49%, CursorBench 60%(5.1은 49.2%) 등 (Latent Space 집계, 일부는 회사 발표).
- **가격**: 입력 $8·출력 $40/백만 토큰으로 5.1($10/$50)보다 20% 인하. 선택형 fast mode는 $16/$80(최대 2.5배 빠름). 컨텍스트 1M, effort 5단계(low~max).
- **Claude Code**: 기본 effort가 medium으로 바뀌고(5.1보다 토큰 적게 사용), fast mode 지원. 큰 모델이 작은 모델의 "어드바이저" 또는 하위 작업을 위임하는 "오케스트레이터"로 동작 가능.
- **Mythos 5.2**: 사이버·생명과학 검증 프로그램 한정. 기업 고객은 Claude Security(Mythos 5.2 기반)를 쓸 수 있다.
- **안전·데이터**: 위험 사이버·생물 질의는 분류기가 차단(5.1 대비 약 55% 감소). 안전 분류기용 데이터 보관이 기본이고, 제로 데이터 보관(ZDR)은 적격 기업 한정. Enterprise Frontier Safeguards(비공개 베타)는 고객 인프라 안에서 모니터링해 ZDR과 양립.
- **회사 주장(미검증)**: 에이전트 약 1,000개가 30시간 만에 페르마의 마지막 정리를 Lean으로 형식화(Opus 5.5는 같은 설정에서 18시간 동안 26%), Python→Rust 이전 서비스의 시작 속도 26배.

> ⚠️ 상충: Gemini 4 Carbon 점수는 [[2026-10-28-google-deepmind-gemini-4-carbon-launch]]에서 59점(Index v5.0), 이번 집계에서는 60점(high effort 설정)으로 적혀 있다. 측정 설정·지수 버전 차이로 보이며, 최신 값(60점)을 우선한다.

## 왜 중요한가

- **"싸졌지만 더 쓴다"**: 토큰 단가는 내렸지만 SemiAnalysis는 과제당 비용이 $67.16→$88.15(+31%)로 올랐다고 측정했다. 모델 교체 시 단가가 아니라 **과제당 총비용**을 봐야 한다.
- **effort 선택이 성능을 좌우**: Vals는 high가 최고 성능이고 max·xhigh는 일부 평가에서 오히려 낮다고 보고했다. 기본 medium 설정 변화와 함께 "무조건 최고 effort" 습관을 재검토할 근거.
- 1위가 한 달 안에 두 번 바뀐 것은 모델 선정을 분기가 아닌 월 단위로 재평가해야 한다는 신호([[2026-09-22-anthropic-claude-opus-5-5-launch]] 이후 흐름).
- 활용 면에서는 Ethan Mollick이 "Jagged AGI"라 평가했다(전문가 수준 과제 다수 수행, 단 자기 결과물의 질을 스스로 판단하지 못함) — [[beep-locator-claude-code-acoustic-triangulation]]도 같은 날 Fable 5.2 이전 모델로 시작된 사례.

## 활용 포인트

- **course**: effort·모델 선택표(작업 유형별 low/medium/high)를 가르치는 모듈 소재. Ben AI 영상 "Anthropic's Simple Cheat Sheet for Picking Claude Models + Effort"(11-14)가 같은 주제.
- **ax**: ZDR 요건이 있는 기업은 5.2의 기본 데이터 보관 정책 때문에 Enterprise 적격 여부를 먼저 확인해야 한다.

## 출처

- [Anthropic — Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) ([[raw/2026-11/anthropic-fable-5-2-launch]])
- [Latent Space AINews — Fable 5.2 retakes #1](https://latent.space/p/ainews-fable-5-2-retakes-world-1-llm-spot-as-ant-ipo-roadshow-begins/)
- [Simon Willison — Prompting Claude Fable 5.2](https://simonwillison.net/2026/Nov/10/prompting-claude-fable-52/)
- [One Useful Thing — Fable 5.2 and Jagged AGI](https://www.oneusefulthing.org/p/fable-52-and-jagged-agi)
- 관련: [[2026-09-01-claude-fable-5-1-mythos-5-1-launch]]
