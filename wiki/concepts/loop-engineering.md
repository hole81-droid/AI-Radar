---
type: concept
date: 2026-07-01
tools: []
importance: medium
uses: [course, ax]
source: https://adtmag.com/articles/2026/07/01/loop-engineering-emerges-as-developers-put-ai-coding-agents-on-repeat.aspx
---
# 루프 엔지니어링 (Loop Engineering) — "프롬프트 다음은 루프다"

## 무엇인가

"프롬프트 엔지니어링 다음은 루프 엔지니어링"이라는 표현으로 2026년 중반 개발자 커뮤니티에서 화두가 된 개념. 한 번 잘 짜인 프롬프트로 결과를 얻는 방식이 아니라, AI 코딩 에이전트가 **계획(plan) → 코드베이스 탐색(explore) → 수정(modify) → 검증(verify) → 재시도(retry)**를 스스로 반복하도록 만드는 "피드백 루프 자체"를 설계·운영·개선하는 역량을 가리킨다.

- AI 에이전트를 한 번 쓰고 끝나는 코드 생성기로 취급하는 대신, 소프트웨어 작업을 반복 시스템으로 다룬다 — 목표 정의 → 코드베이스 점검 → 변경 → 검증 실행 → 결과 확인 → 다음 행동 결정의 순환.
- 2026년 중반 들어 AI 코딩 에이전트가 수 시간 단위로 자율 작업을 수행할 만큼 성능이 올라오면서, 병목이 "모델 성능"에서 "이 반복을 어떻게 설계하는가(오케스트레이션)"로 옮겨갔다는 것이 이 개념이 부상한 배경이다.
- 용어 자체는 2026년 6월 Google Chrome 엔지니어링 리드 **Addy Osmani**가 Anthropic Claude Code 제작자 **Boris Cherny**와 OpenClaw 제작자 **Peter Steinberger**의 아이디어를 종합해 대중화시켰고, 이후 Cherny·Steinberger의 관련 언급이 소셜미디어에서 화제가 되며 널리 퍼졌다.

## 왜 중요한가

- 이 위키의 기존 사례들이 이미 이 패턴의 실전 증거다. [[mozilla-claude-mythos-firefox-vulnerability-detection]]에서 다룬 Mozilla의 Firefox 보안 파이프라인이 교과서적 사례에 해당한다 — LLM 심사자가 파일에 점수를 매겨 우선순위 지정 → 통과/불통과 신호가 명확한 좁은 문제를 인간보다 오래 재시도하게 두는 "목표 루프" → 거짓양성 필터링용 검증 서브에이전트 → 최종 패치는 인간 리뷰 후 배포. 이 구조 덕분에 월간 보안 버그 수정이 20~30건에서 423건(약 14배)으로 늘었다.
- (병렬로 다른 문서에서 다뤄지는) ploy.ai의 프로덕션 에이전트 마이그레이션 사례 역시 유사한 반복 검증 패턴을 보여주는 것으로 알려져 있다.
- "모델 성능과 하네스(파이프라인 설계) 기여도를 50:50으로 본다"는 Mozilla 사례의 시사점처럼, 루프 엔지니어링은 "어떤 모델을 쓰는가"만큼 "루프를 어떻게 짜는가"가 성과를 좌우한다는 것을 보여준다.

## 관련 사례

- [[mozilla-claude-mythos-firefox-vulnerability-detection]] — 목표 루프 + 검증 서브에이전트 + 인간 리뷰로 구성된 보안 탐지 파이프라인. 루프 엔지니어링의 대표 실전 사례.

## 출처

- [ADTmag — Loop Engineering Emerges as Developers Put AI Coding Agents on Repeat](https://adtmag.com/articles/2026/07/01/loop-engineering-emerges-as-developers-put-ai-coding-agents-on-repeat.aspx)
