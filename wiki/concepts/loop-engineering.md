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

## 계보 — 1차 출처 확인 (2026-08-17 검증)

용어가 유행하기 전에 **실물 증명**이 먼저 있었다. 아래 두 건은 모두 1차 출처로 직접 확인했다.

**① 원류 — Andrej Karpathy `autoresearch` (2026-03)**

전 OpenAI 연구자 Karpathy가 2026-03-06 공개한 저장소
([github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch), 2026-08-17 기준
**94,042 스타**). "AI 에이전트가 단일 GPU nanochat 학습을 자동으로 연구한다"는 설명 그대로,
**코드 수정 → 5분 학습 → 개선 여부 확인 → 채택/폐기 → 반복**하는 630줄짜리 루프다. 이틀간
약 700회 실험을 돌려 20여 개의 실제 최적화를 남겼다.

핵심은 **사람이 Python 파일을 건드리지 않는다**는 설계다. 대신 에이전트에게 맥락을 주는
`program.md` 마크다운을 프로그래밍한다 — Karpathy 본인 표현으로 "인간은 연구 디렉터, AI
에이전트가 연구실 인력 전체"다. 그는 "합리적으로 평가 가능한 지표라면 무엇이든 에이전트
군집으로 autoresearch할 수 있다", "모든 프론티어 랩이 이걸 할 것 — 최종 보스전"이라고 덧붙였다.
Fortune 등 주요 매체가 이를 **"The Karpathy Loop"**로 명명해 보도했다(2026-03-17).

> 참고: Karpathy는 이로부터 두 달 뒤인 2026-05-19에 **Anthropic 프리트레이닝 팀에 합류**해
> "Claude로 프리트레이닝 연구를 가속하는" 팀을 맡았다 — autoresearch가 개인 실험이 아니라
> 프론티어 랩의 실제 연구 방향이 된 셈이다. → [[2026-05-19-karpathy-joins-anthropic]]

**② 형식화 — Andrew Ng "Three Key Loops" (The Batch, 2026-06-26)**

Ng은 0→1 제품 개발을 세 겹의 루프로 정리했다: **에이전틱 코딩 루프**(분 단위 — 명세와 eval을
주면 에이전트가 코드 작성·테스트·반복) → **개발자 피드백 루프**(시간 단위 — 개발자가 결과물을
보고 방향을 잡아줌) → **외부 피드백 루프**(일 단위 — 알파 테스터·A/B 테스트).

주목할 점은 Ng이 이 용어를 자기가 만들었다고 하지 않고 **Cherny·Steinberger를 명시적으로
인용**한다는 것, 그리고 **"인간이 맥락 우위를 가지므로 human-in-the-loop이 필수"**라고
강조한다는 것이다.

> ⚠️ 상충 (2026-08-17 확인): X(트위터)에서 *"Andrew Ng: 100% of my tasks are done by AI agents,
> 3~6개월 뒤엔 프롬프팅은 끝난다"* 는 인용문이 여러 계정을 통해 널리 퍼져 있으나, **The Batch
> 원문에 그런 발언은 없다.** 오히려 Ng은 위와 같이 human-in-the-loop의 필요성을 강조한다.
> 같은 인용문이 계정마다 "loops"/"graphs", 강연 길이 "6분/15분/30분/31분/40분"으로 서로 다르게
> 유통되는 것으로 보아 바이럴 과정에서 변형된 것으로 판단된다 — **인용 시 The Batch 원문을 쓸 것.**

**③ "그래프 엔지니어링"은 두 사람의 말이 아니다**

"loops 다음은 graphs"라는 프레이밍은 Karpathy도 Ng도 한 적이 없다. 해설자·블로거들이 "루프
하나로 부족할 때 도달하는 상위 레이어"로 정리한 것이고, DeepLearning.AI의 관련 코스도 Ng이
아니라 **Neo4j의 Andreas Kollegger**가 가르친다. 두 사람에게 귀속시키지 말 것.

## 왜 중요한가

- 이 위키의 기존 사례들이 이미 이 패턴의 실전 증거다. [[mozilla-claude-mythos-firefox-vulnerability-detection]]에서 다룬 Mozilla의 Firefox 보안 파이프라인이 교과서적 사례에 해당한다 — LLM 심사자가 파일에 점수를 매겨 우선순위 지정 → 통과/불통과 신호가 명확한 좁은 문제를 인간보다 오래 재시도하게 두는 "목표 루프" → 거짓양성 필터링용 검증 서브에이전트 → 최종 패치는 인간 리뷰 후 배포. 이 구조 덕분에 월간 보안 버그 수정이 20~30건에서 423건(약 14배)으로 늘었다.
- (병렬로 다른 문서에서 다뤄지는) ploy.ai의 프로덕션 에이전트 마이그레이션 사례 역시 유사한 반복 검증 패턴을 보여주는 것으로 알려져 있다.
- "모델 성능과 하네스(파이프라인 설계) 기여도를 50:50으로 본다"는 Mozilla 사례의 시사점처럼, 루프 엔지니어링은 "어떤 모델을 쓰는가"만큼 "루프를 어떻게 짜는가"가 성과를 좌우한다는 것을 보여준다.

## 관련 사례

- [[mozilla-claude-mythos-firefox-vulnerability-detection]] — 목표 루프 + 검증 서브에이전트 + 인간 리뷰로 구성된 보안 탐지 파이프라인. 루프 엔지니어링의 대표 실전 사례.

## 이론적 뒷받침 (2026-08-04 추가) — "하네스 엔지니어링"

OpenAI 연구자 **Lilian Weng**이 2026-07-04 발표한 글("Harness Engineering for
Self-Improvement")이 2026-08-04 HN 화제(118점)에 오르며 이 개념에 이론적 틀을
보탰다. 핵심 주장은 "모델이 스스로 가중치를 재작성하는 방식의 자기개선이 아니라,
**모델을 둘러싼 하네스(오케스트레이션·컨텍스트 관리·도구 연동·평가 방식)를
계속 진화시키는 것이 단기적으로 실현 가능한 자기개선 경로**"라는 것 — 루프
엔지니어링이 왜 지금 병목인지를 설명하는 근거로 쓸 수 있다.

세 가지 설계 패턴을 제시: ① 계획-실행-관찰-개선의 목표지향 워크플로 자동화,
② 컨텍스트 창 대신 파일시스템을 영구 메모리로 쓰는 구조, ③ 명시적 작업 관리를
갖춘 서브에이전트·백엔드 잡 병렬 실행. Claude Code·Codex·Cursor 등 주류 코딩
에이전트가 파일 탐색/수정·셸 실행·버전관리·외부 컨텍스트·에이전트 위임이라는
비슷한 도구 집합으로 수렴한 것도 "하네스가 표준화되고 있다"는 같은 흐름으로
설명된다.

## 출처

- [Andrej Karpathy — autoresearch (GitHub, 2026-03)](https://github.com/karpathy/autoresearch) — 원류 저장소, README가 1차 출처
- [Andrew Ng — Three Key Loops for Building Great Software (The Batch, 2026-06-26)](https://www.deeplearning.ai/the-batch/three-key-loops-for-building-great-software) — 세 겹 루프 원문
- [Fortune — 'The Karpathy Loop' (2026-03-17)](https://fortune.com/2026/03/17/andrej-karpathy-loop-autonomous-ai-agents-future/) — 명명·대중화 보도
- [ADTmag — Loop Engineering Emerges as Developers Put AI Coding Agents on Repeat](https://adtmag.com/articles/2026/07/01/loop-engineering-emerges-as-developers-put-ai-coding-agents-on-repeat.aspx)
- [Lilian Weng — Harness Engineering for Self-Improvement (2026-07-04)](https://lilianweng.github.io/posts/2026-07-04-harness/)
- [Hacker News — Harness Engineering for Self-Improvement (2026-08-04 화제, 118점)](https://news.ycombinator.com/item?id=49164896)
