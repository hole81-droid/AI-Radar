# Show HN: Open-source model routing for coding agents at Astra-level performance (Weave Router 2.0)

> 수집일: 2026-10-02 / 게시일: 2026-09-30 (HN)
> 원문(HN): https://news.ycombinator.com/item?id=49911500 (64점)
> 저장소: https://github.com/weave-os/router
> 호스팅: https://weaveos.com/router

## 핵심 내용 (WebFetch 요약)

- Weave 팀이 자사 코드 대부분을 AI로 작성하면서 비용이 급증(특히 Opus 4.7 출시 후
  토크나이저 변경으로 비용 급등)한 것을 계기로, **코딩 에이전트(Claude Code·Codex·
  Cursor 등)에 꽂히는 모델 라우터**를 만들어 오픈소스로 공개(Weave Router 2.0).
- **작동 방식**: Anthropic/OpenAI 엔드포인트 역할을 하며 모든 추론 요청을 보고
  모델을 지능적으로 선택·번역 — 쉬운 작업은 저렴한 모델(DeepSeek v4 Flash·GLM 5.2·
  Kimi K2.6), 어려운 작업은 프론티어 모델(Opus·GPT, 필요시 Astra급)로 라우팅.
- **아키텍처**: 은닉 마르코프 모델(HMM)로 세션 상태 전이를 추적해 라우팅 버킷을
  분류 — 세션이 "어떻게 지금 상태에 도달했는지"까지 반영해 단순 현재 상태 분류보다
  정확도 향상. 캐시 이탈(cache-eviction) 비용까지 계산에 반영.
- **벤치마크(Astra 대비, 2.0 버전 기준)**:
  - Terminal Bench 4.0: 동등한 pass rate 유지, 비용 52%, 속도 2.2배
  - SWE Atlas: 비용 54%, 속도 2.5배
- **댓글 반응**: "최고 성능 모델로 라벨링하면 그 모델을 못 넘지 않나"는 회의적
  질문에 "모델마다 강점 분야가 달라 최적 조합이 핵심"이라 답변. Cursor·Copilot의
  자동 모드와 비교 논의, 세션 중 동적 라우팅이 차별점으로 언급됨.
- **한계**: 라우팅 모델 자체는 오픈소스가 아님(라우터 인프라만 오픈소스). 비용
  절대액·사용 요금 체계는 게시물에 명시되지 않음.

## 메모

- Weave는 자체 코딩 에이전트 운영사(Show HN 글쓴이 adchurch가 "At Weave, we write
  most of our code with AI"라고 밝힘) — 자사 내부 비용 문제 해결책을 제품화한
  사례로, 벤치마크 수치는 자체 보고(제3자 검증 없음) → evidence: claimed.
