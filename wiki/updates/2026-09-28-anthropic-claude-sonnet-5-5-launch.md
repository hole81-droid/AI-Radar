---
type: update
date: 2026-09-28
tools: [claude, claude-code]
importance: high
uses: [ax]
source: https://www.anthropic.com/claude-sonnet-5-5
---

# Claude Sonnet 5.5 출시 — Opus 5.5의 "일상 작업용" 짝, 가격은 그대로

## 무엇이 있었나

Anthropic이 2026-09-22 Opus 5.5에 이어 2026-09-28 **Claude Sonnet 5.5**를 출시했다.
Claude 5.5 패밀리의 두 번째 모델이다.

- **가격은 동결**: Sonnet 5와 동일하게 입력 $2/백만 토큰·출력 $10/백만 토큰
  (캐시 읽기 $0.20/백만 토큰). Opus 5.5가 "같은 값에 더 좋게"였다면, Sonnet 5.5는
  "같은 값에 더 빠르고 싸게" 쪽이다.
- **성능**: 대부분 작업에서 30% 이상 빠르고, 작업당 비용은 최대 30% 절감(속도 향상과
  툴 호출 횟수 감소가 원인). Sonnet 5 대비 Terminal-Bench 4.0 점수가 10.3%→70.6%로
  대폭 뛰었다. 그 외 FrontierCode 1.1 46.2%(Max)·CursorBench 4.0 55.5%·GDPval-AA v2.1
  1844점.
- **포지셔닝**: Anthropic은 "복잡한 작업·신중한 판단이 필요한 일에는 Opus 5.5, 범위가
  분명한 일상 작업·버그 수정·문서/슬라이드/스프레드시트 작성에는 Sonnet 5.5"로
  두 모델의 역할을 나눴다 — 상위 모델 하나로 밀어붙이기보다 **작업 난이도별 모델
  라우팅**을 벤더가 직접 권장하는 모양새다.
- **플랫폼**: AWS·Google Cloud·Microsoft Azure 등 전 플랫폼 동시 제공, 모델 ID
  `claude-sonnet-5-5`, 제로 데이터 리텐션 옵션 제공.
- **보안**: Opus 5.5 수준의 사이버보안 보안장치·분산(distillation) 방지 기술을 동일
  적용, "보존된 사고(preserved thinking)" 적용 범위 확대.

## 왜 중요한가

- Opus 5.5(09-22)에 이어 6일 만의 후속 출시로, 09-12 Amodei의 감속(pacing) 선언
  ([[2026-09-12-anthropic-dario-amodei-ai-slowdown-plan]]) 이후에도 신모델 출시
  주기 자체는 느려지지 않았음을 다시 보여준다.
- **가격을 유지한 채 성능만 올리는 방식**은 Opus 5.5가 보여준 "같은 값에 더 좋게"
  전략의 하위 모델판이다 — 08-23 확인된 "고객이 최상위 모델보다 가성비 모델을
  선호한다"는 데이터([[2026-08-23-anthropic-revenue-fable-adoption-struggle]])와
  겹쳐 보면, Anthropic이 매출 방어를 위해 중급 모델의 체감 가치를 계속 끌어올리는
  쪽에 무게를 두고 있다는 신호로 읽힌다.
- 커뮤니티(r/ClaudeAI)에서는 출시 당일 Sonnet 5.5로 만든 "자전거 탄 펠리컨" 그림
  (Willison이 만든 벤치마크 밈 챌린지)과 Vals AI 벤치마크 결과가 동시에 화제가 됐다
  — "$20 구독으로 이 정도 성능이면 가성비가 비정상적으로 좋다"는 반응이 상위권.

## 활용/시사점

- **AX**: Opus·Sonnet 두 모델을 "작업 난이도별로 나눠 쓰라"는 벤더의 공식 가이드가
  나온 셈이다. 사내 AI 도입 시 "어떤 업무에 어떤 모델을 붙일지"를 결정하는 기준으로
  이 포지셔닝(복잡·신중=Opus, 일상·명확=Sonnet)을 그대로 참고할 수 있다.
- **강의**: 같은 날 Anthropic이 공식 [Opus 5.5 프롬프팅 가이드](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5-5)를
  갱신하며 "effort 설정을 습관적으로 최대치로 두지 말 것", "'신중하게 생각해' 같은
  지시문은 이제 무의미하니 시스템 프롬프트에서 제거할 것"을 권고했다 — 프롬프트
  엔지니어링 교육 자료의 최신 근거로 쓸 만하다.

## 출처

- [Anthropic — Introducing Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)
- [VentureBeat](https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-5-with-30-cost-reduction-per-task-due-to-faster-speeds-and-fewer-tool-calls)
- [SiliconANGLE](https://siliconangle.com/2026/09/28/anthropic-debuts-claude-sonnet-5-5-running-30-faster-than-the-previous-generation-ai-model/)
