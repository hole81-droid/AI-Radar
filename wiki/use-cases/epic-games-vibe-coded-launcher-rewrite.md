---
type: use-case
date: 2026-10-14
tools: []
mechanism: [vibe-coding]
domain: dev-automation
task: 게임 스토어 런처(클라이언트) 전체를 처음부터 새 기술 스택으로 재작성
outcome: 콜드스타트 5.47초로 Steam 대비 46% 빠르다고 발표했으나, Valve의 즉시 대응 업데이트로 우위가 뒤집혔다는 평가 (claimed, 발표 직후 반박됨)
model: 미확인 (어떤 AI 모델/도구를 썼는지 공개 안 함)
cost: 미확인
permissions: 미확인
maturity: pilot
evidence: claimed
importance: medium
uses: [course, ax]
source: https://www.pcgamer.com/software/platforms/epic-says-its-new-vibe-coded-epic-games-store-launcher-is-faster-than-steam/
---

> **공식**: Epic Games가 vibe-coding(AI에게 평문 지시로 코드 생성)을 활용해 Epic
> Games Store 런처 전체를 처음부터 재작성 → 콜드스타트 5.47초(Steam 대비 46% 빠름)
> 주장, 그러나 Valve의 대응 업데이트로 공개 직후 우위가 역전됐다는 평가

## 무엇을 자동화했나

Epic Games가 자사 게임 스토어 런처(클라이언트 앱) 전체를 **"vibe coded"**라고 공식
블로그에서 직접 표현하며 새로 작성했다고 발표했다. 기존 기능은 참고했지만 **코드
자체는 재사용하지 않고 완전히 다른 기술 스택으로 처음부터(from scratch) 다시 만들었다**
— 소규모 기능 추가가 아니라 프로덕션 핵심 클라이언트 전체의 재작성이라는 점에서
스코프가 크다.

## 어떻게 구성했나 (아키텍처)

- Epic은 AI를 "새 기능을 밑바닥부터 작성하고 리뷰하는 도구"로 썼다고 설명했을 뿐,
  구체적인 모델·도구명(Claude·Codex·Gemini 등)은 공개하지 않았다(**미확인**).
  "Programming is hard"라는 반농담조 표현을 공식 블로그에 그대로 썼다는 점이
  이례적으로 받아들여졌다 — AI 비판 여론을 의식하지 않는다는 신호로 다수 매체가 해석.
- 현재 **프리뷰(베타)** 단계로 공개 중이며, 경쟁적인 게임 플레이 등 민감한 용도에는
  아직 권장하지 않는다는 단서가 붙어 있다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | pilot (프리뷰/베타 공개) |
| 증거 유형 | claimed (회사 자체 발표 수치, 독립 검증 없음) |

## 성과와 수치

- Epic 자체 발표: 콜드스타트(앱 실행~스토어 페이지 표시) 평균 **5.47초**, 기존 런처
  대비 시작 시간 절반, Steam 대비 **46% 빠르다**고 주장.
- **반박/역전**: 발표 직후 Valve가 Steam 클라이언트 업데이트를 배포하자, 커뮤니티는
  오히려 "Steam이 Epic의 새 런처보다 빠르다"고 평가했다(Hacker News
  "Steam Client is now faster than Epic's new vibe coded launcher", 240점,
  2026-10-15). 즉 공개 당일 기준으로 성능 우위 주장의 수명이 매우 짧았다.
- Kotaku 등은 커뮤니티 반응을 "vibeslopped"(비하적 조어, AI 생성물 특유의 품질
  저하를 가리키는 "슬롭"에서 파생)라는 조롱성 표현으로 요약 보도.

## 재현 가이드

- **난이도**: 상 (프로덕션 핵심 클라이언트 전체 재작성 — 조직 규모의 의사결정·QA
  체계가 필요, 개인/소규모 팀이 그대로 따라 하기 어려운 스코프).
- **준비물**: 미확인(구체 도구·프로세스 비공개).
- **핵심 단계**: Epic이 공개한 정보만으로는 재현 가능한 수준의 구체 단계가 없다 —
  "AI로 새로 작성했다"는 결과만 공개됐고 과정은 비공개.

## 강의·AX 활용 포인트

- **강의**: "vibe coding으로 프로덕션 핵심 소프트웨어를 재작성할 수 있는가"를 토론할
  좋은 소재. 발표 당일 바로 반박(Valve 업데이트)당한 사례라, "성과 발표는 경쟁사의
  즉각 대응 가능성까지 고려해야 한다"는 PR·제품전략 관점 교훈도 포함.
- **AX**: 자사 핵심 제품에 AI 생성 코드를 전면 적용한다고 **공개적으로 브랜딩**한
  보기 드문 대기업 사례 — 긍정 반응과 조롱("vibeslopped")이 동시에 나온 점은, AI
  활용 사실을 외부에 공개할 때의 커뮤니케이션 리스크를 보여주는 참고 사례다. 성능
  비교 수치를 외부에 공표하기 전 경쟁사 대응 시나리오까지 검토할 필요가 있다는 시사점.

## 출처

- [PC Gamer — Epic says its new 'vibe coded' Epic Games Store launcher is faster than Steam](https://www.pcgamer.com/software/platforms/epic-says-its-new-vibe-coded-epic-games-store-launcher-is-faster-than-steam/)
- [Tom's Hardware — Epic Games vibe codes new launcher because 'programming is hard,' claims it starts 46% faster than Steam](https://www.tomshardware.com/video-games/pc-gaming/epic-games-vibe-codes-new-launcher-because-programming-is-hard-starts-46-percent-faster-than-steam-preview-is-available-now-but-not-recommended-for-competitive-players)
- [Kotaku — Epic Dunks On Steam With Vibe-Coded Storefront And Gets Roasted](https://kotaku.com/epic-dunks-on-steam-with-vibe-coded-storefront-and-gets-roasted-this-launcher-is-so-fucking-vibeslopped-its-funny-2000746031)
- [Windows Central — As Epic Games reveals its new 'vibe-coded' launcher, Valve drops a huge Steam update](https://www.windowscentral.com/gaming/pc-gaming/epic-games-vibe-coded-launcher)
- 커뮤니티: Hacker News "Steam Client is now faster than Epic's new vibe coded launcher" (240점)
- raw: [[raw/2026-10/epic-games-vibe-coded-launcher-rewrite]]
