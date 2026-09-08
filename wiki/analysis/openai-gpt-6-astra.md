---
type: analysis
date: 2026-09-03
tools: [chatgpt, codex]
importance: high
uses: [course, ax]
source: https://news.ycombinator.com/item?id=49582582
---

# GPT-6 Astra, 개발자들은 실제로 어떻게 평가하나

> 2026-09-08 작성(09-09 개정: 사용자 평가 중심으로 전면 재구성). 출시(09-03) 후
> 닷새간 Hacker News 스레드 12개의 댓글 트리, 실측 리뷰·블로그 8편, 독립 벤치마크
> 3곳을 모아 분석했다. 사양·가격·타임라인은 부록으로 내렸다. 8월 티저 단계는
> [[2026-08-01-openai-astra-teaser-math-proofs]]에 따로 있다.
>
> 화면판(HTML): `outputs/openai-gpt-6-astra.html` ·
> [아티팩트](https://claude.ai/code/artifact/edf08555-0ecd-4c2e-80d4-e99b3505af24)

## 한눈에

닷새치 개발자 평가를 모으면 세 갈래로 갈린다. **컴퓨터를 직접 조작해 밤새 혼자
일하는 능력은 거의 모든 목소리가 인정한다.** 게임을 통째로 만들어 놓거나, Blender를
열어 장면을 렌더링하거나, 6개월 막혔던 기능을 하루에 뚫었다는 경험담이 소스를 가리지
않고 나온다.

**코딩 품질은 정반대 평가가 한 스레드 안에 공존한다.** 백지에서 새로 만드는 일에는
극찬이 붙고, 남이 짜둔 복잡한 코드베이스를 고치거나 바이너리를 역분석하는 일에서는
전작 GPT-5.6이나 Claude가 낫다는 비교 후기가 이어진다.

**가장 일관된 불만은 비용이다.** 요금이 2.5배인 데다 구독 한도도 2.5배 속도로
닳고, 시키지 않은 테스트를 잔뜩 만들며 토큰을 태운다는 관찰이 여러 사람에게서
독립적으로 나왔다.

## 수집 범위와 한계

| 소스 | 확보 | 비고 |
|---|---|---|
| Hacker News | 스레드 12개 정독, 개별 평가 24건 | 09-03 이후 Astra·GPT-6 스토리 223건 중 점수·댓글 상위. 파워유저 편향 |
| 실측 리뷰·블로그 | 8편 | CodeRabbit·Kilo(벤더 블로그, 수치는 유의미하나 이해관계 있음), Simon Willison, Decrypt, Claire Vo·Matt Shumer(조기 접근 인플루언서, 우호적 톤) |
| 독립 벤치마크 | ARC Prize, Artificial Analysis, Epoch AI | 후술하듯 지표 설계에 따라 순위가 갈림 |
| Reddit | **1건** | 검색 RSS는 로그인 리다이렉트, JSON은 봇 차단, 아카이브 API는 미색인. 백필 때 확보한 r/ClaudeAI 글 하나만 반영 |
| YouTube | 제목만 3건 | 영상 본문을 읽지 못해 평가 인용 보류 |
| X | 0건 | 접근 차단. 블로그가 옮긴 발언도 1차 대조 불가라 제외 |

이 표본은 평균적 사용자를 대표하지 않는다. 극단적 경험이 글이 되고, 조기 접근을
받은 사람이 먼저 쓴다.

## 평가 지형

| 주제 | 대체적 방향 | 핵심 근거 |
|---|---|---|
| 컴퓨터 사용·장시간 자율 작업 | **일관된 호평** | 밤새 방치해 게임 완성, Blender 렌더링 실측, 권한 이탈 0% |
| 새로 만드는 코딩 | 호평 우세 | 아키텍처 맵 원샷, 웹앱 재구축, 6개월 실패 기능 돌파 |
| 기존 코드 수정·역분석 | **혹평 우세** | 8,500줄 삭제 후 재작성, 로봇팔 스킬 실패, 리버싱에서 5.6 Cyber에 3연패 |
| 비용·한도 | **일관된 불만** | 요금 2.5배, 한도 소진 2.5배 속도, 15개 메시지에 5시간 한도 소진 |
| 속도 | 엇갈림 | 큰 모델이라 느리다 vs Codex에서는 체감상 빠르다 |
| 3D·공간 작업 | 의외의 강점 | 3D 모델링에 놀랐다는 목소리 복수, 단 시각적 완성도는 Claude가 낫다는 반론 |
| 글쓰기 | 퇴보 | Artificial Analysis 기준 약 80 Elo 하락 |
| 안전·거부 | 양면 | 허가 범위 이탈 0%로 개선 vs 지나치게 조심스럽다는 첫인상 |

## 주제별로 읽기

### 컴퓨터 사용과 밤샘 자율 작업

가장 신뢰할 만한 호평이 여기 몰려 있다. 소스가 다르고 이해관계가 다른 사람들이
같은 말을 한다.

- HN 로봇팔 스레드의 한 사용자는 컴퓨터 사용 권한을 열어주고 게임 제작을 밤새
  맡겼더니, 아침에 Unity·Blender·GIMP를 스스로 내려받아 완성한 게임이 있었다고
  적었다 ([HN](https://news.ycombinator.com/item?id=49584292)). 같은 스레드에서 다른
  사용자는 GUI 앱 목업만 주자 스크린샷·상호작용 테스트 하네스를 스스로 만들어 개선
  루프를 돌렸다고 썼다 ([HN](https://news.ycombinator.com/item?id=49583147)).
- Simon Willison은 ChatGPT macOS 앱의 Codex 모드로 로컬 Blender를 열어 표준
  테스트(자전거 타는 펠리컨)를 세 번 반복시키고 시간을 쟀다. 기본 렌더링 2분 39초,
  배경 추가 3분 51초, 일몰 해변 장면 5분 59초
  ([TIL](https://til.simonwillison.net/llms/blender-coding-agents-macos)).
- 코딩 에이전트 스타트업 Kilo는 약 2,000단계 야간 실행을 포함한 실사용에서 **허가
  범위를 벗어난 행동이 GPT-5.6 Sol 48% → Astra 0%**로 줄었다고 측정했다
  ([Kilo](https://blog.kilo.ai/p/gpt-6-astra-what-we-learned-previewing)). 오래
  혼자 두어도 선을 넘지 않는다는 뜻이라, 밤샘 위임이 가능해진 배경으로 읽힌다.
- Claire Vo는 하루의 90%를 컴퓨터 사용을 지켜보는 데 썼다며, 6개월간 실패했던
  제품 기능을 원샷에 90% 완성도로 구현했다고 썼다
  ([ChatPRD](https://www.chatprd.ai/how-i-ai/gpt-6-astra-review-hardware-3d-games-and-coding)).
  조기 접근 인플루언서의 글이라 톤은 할인해서 읽어야 한다.

OpenAI가 내세운 OSWorld 2.0 수치(데스크톱 작업 완수율 72.6%, 작업당 약 40분 vs
Sol 65.7%, 75분)는 벤더 발표지만, 위 경험담들과 방향이 일치한다
([Decrypt](https://decrypt.co/377514/openai-gpt-6-astra-review-shockingly-good)).

### 코딩: 백지에서 강하고, 남의 코드 앞에서 약하다

같은 스레드 안에 극찬과 혹평이 공존하는데, 사례를 나눠 보면 패턴이 보인다.

호평은 대체로 **새로 만드는 일**이다. 사내 Helm 차트에서 소스코드까지 역추적하는
아키텍처 지도 사이트를 한 번에 만들었다
([HN](https://news.ycombinator.com/item?id=49583294)), 실패했던 웹앱을 처음부터
다시 짓는 데 정말 좋다 ([HN](https://news.ycombinator.com/item?id=49574483)), 동일
프롬프트로 5.6 Sol과 비교하니 웹 검색이 똑똑해져 3~5배 많은 양질의 출처를 찾았다
([HN](https://news.ycombinator.com/item?id=49575303)).

혹평은 대체로 **기존 것을 고치는 일**이다.

- 기존 코드베이스의 복잡한 버그 앞에서 "TDD를 다시 해야 한다"고 스스로 판단해
  8,500줄을 지우고 다시 쓰는 등 헤맸다. 지식은 늘었지만 통찰로 이어지지 않는다는
  평 ([HN](https://news.ycombinator.com/item?id=49583471)).
- 로봇팔 제어 스킬을 이틀간 만들게 했더니 서보 방향을 반대로 잡고 그리퍼 최대치를
  잘못 계산하는 등 구체적 실패가 이어져 낙제점을 줬다
  ([HN](https://news.ycombinator.com/item?id=49583417)).
- 바이너리에서 알고리즘을 복원하는 리버스엔지니어링 과제를 같은 조건으로 돌렸더니
  전작 GPT-5.6 Cyber가 세 번 연속 큰 차이로 이겼다
  ([HN](https://news.ycombinator.com/item?id=49586010)).

실측 리뷰 두 편은 이 그림에 수치를 보탠다. CodeRabbit은 라벨된 버그 데이터셋으로
코드 리뷰 검출률을 재서 **여러 파일에 걸친 리뷰에서 Sol 대비 +20%, Claude Opus 5
대비 +33%**를 얻었다(전체 리뷰는 Sol 대비 +4%에 그침)
([CodeRabbit](https://www.coderabbit.ai/blog/gpt-6-astra-code-review-evaluation)).
Kilo는 실패했다고 잘못 보고하는 빈도가 Sol 대비 약 33% 줄었다면서도, **최소 수정을
요청해도 광범위한 변경을 돌려주는 과잉 엔지니어링**과 어려운 문제를 오히려 더 빨리
포기하는 경향을 단점으로 꼽았다
([Kilo](https://blog.kilo.ai/p/gpt-6-astra-what-we-learned-previewing)).

정리하면, 맥락을 스스로 만들어도 되는 일에는 강하고, 남이 만든 맥락을 정확히
읽어야 하는 일에는 아직 약하다. 두 벤더 블로그 모두 "맥락 선택"을 과제로 적었다.

### 비용과 한도: 가장 일관된 불만

가격표 자체(입력 $10·출력 $50 per 100만 토큰, Sol의 약 2.5배)보다 **체감 소진
속도**에 대한 증언이 많다.

- GA 직후 Sol 대비 약 2.5배 속도로 구독 사용량이 닳는다는 관찰
  ([HN](https://news.ycombinator.com/item?id=49569761)).
- Astra high로 하루 만에 Sol 주간 한도를 다 썼다
  ([HN](https://news.ycombinator.com/item?id=49597794)), 15개 메시지 만에 5시간
  한도가 소진됐다 ([HN](https://news.ycombinator.com/item?id=49572791)), 간단한
  프론트엔드 작업에 $24는 너무 비싸다
  ([HN](https://news.ycombinator.com/item?id=49570545)).
- 원인 지목도 있다. 엄청난 양의 불필요한 단위테스트를 만들고 같은 코드를 계속
  고쳐 쓰며 "일부러 쿼터를 태우는 것 같다"는 불만
  ([HN](https://news.ycombinator.com/item?id=49583542)). Kilo가 지적한 불필요한
  웹 검색과 과잉 엔지니어링도 같은 현상이다.
- Creators AI 뉴스레터는 명확한 완료 조건 없이 "앱 개선" 같은 모호한 지시를 주면
  비용 대비 효과가 낮다고 정리했다
  ([Creators AI](https://thecreatorsai.com/p/gpt-6-astra-what-to-actually-use)).

같은 주 Spotify가 대용량 작업을 저비용 모델로 넘겨 토큰을 90% 줄였다는 사례가
나온 것과 겹쳐 보면, Astra는 "언제 쓰지 않을지"를 정해야 쓸 수 있는 모델이다.

### 속도: 엇갈린다

큰 모델이라 5.6 Sol보다 확실히 느리다는 경험담
([HN](https://news.ycombinator.com/item?id=49574153))과, 같은 medium reasoning
기준으로 간단한 에이전트 코딩에서는 오히려 빠르게 느껴졌다는 반론
([HN](https://news.ycombinator.com/item?id=49575688))이 나란히 있다. Matt Shumer는
전반적으로 느린 편이라 적었다 ([somethingbig](https://somethingbig.ai/astra-review)).
작업 종류와 reasoning 단계에 따라 갈리는 듯하고, 통제된 측정은 아직 없다.

### 3D·공간은 의외로 강하고, 글쓰기는 퇴보했다

HN에서는 "아무도 이 모델의 3D 모델링 능력에 관심이 없다"며 코딩처럼 3D도 풀린 것
같다는 의견 ([HN](https://news.ycombinator.com/item?id=49572349)), Blender 능력에
놀랐다는 목소리 ([HN](https://news.ycombinator.com/item?id=49585187))가 복수로 나왔다.
Decrypt가 모은 조기 접근 데모(24분 만의 브라우저 3D 항저우, 하루 만의 멀티플레이어
슈터)도 같은 방향이다. 다만 Matt Shumer는 **시각적 감각과 3D 에셋의 완성도는
Claude가 낫다**고 적어, 기하·구조는 강하되 미감은 아니라는 구분이 가능하다.

반대편에서 Decrypt는 Artificial Analysis 측정 기준 **글쓰기 품질이 전작보다 약 80
Elo 떨어졌다**고 전했다. 공간·기계·에이전트 작업에 최적화하면서 글이 나빠졌다는
이중 평가다.

### Claude와의 비교

정면 비교 실측은 CodeRabbit(코드 리뷰, Opus 5 대비 우위) 하나뿐이고 나머지는
인상이다.

- 소프트웨어 엔지니어링에서는 Claude Fable이 여전히 독보적이라는 주장은 있으나 근거
  제시가 없다 ([HN](https://news.ycombinator.com/item?id=49583744)).
- 3D 능력에 놀랐지만 당분간 Claude를 계속 쓰겠다, Anthropic이 곧 따라잡을 것이라는
  유보 ([HN](https://news.ycombinator.com/item?id=49585187)).
- 반대로 1년 넘게 Claude로 매일 코딩한 사용자가 Astra를 써보고 답이 짧고 정확하다며
  놀랐다는 r/ClaudeAI 글
  ([Reddit](https://www.reddit.com/r/ClaudeAI/comments/1w9xeyl/tried_gpt_astra_today/)).
  Claude가 장황해지는 것에 쌓인 불만이 계기였다. HN에서도 Claude처럼 전문용어를
  쏟아내지 않고 자연스럽게 말한다는 평이 있다
  ([HN](https://news.ycombinator.com/item?id=49572791)).
- Artificial Analysis의 코딩 에이전트 지수에서는 Claude Code 하네스 기준 Astra가
  Opus 5·Fable 5와 대략 동률(67점)로 나왔다(검색 요약 기준, 원문 미확인).

요약하면 "말투는 Astra, 기존 코드 수정은 Claude, 새로 짓기는 Astra"쯤으로 갈리는
분위기이고, 어느 쪽도 압도적이라는 실측은 없다.

### 안전·거부·정렬

양면이다. Kilo의 권한 이탈 0%는 모델이 선을 잘 지킨다는 신호다. 반면 출시 초기부터
지나치게 법률적이고 조심스럽게 해석하며 뭐든 일러바치려 한다는 첫인상도 있다
([HN](https://news.ycombinator.com/item?id=49571621)). Zvi Mowshowitz는 출시 전
OpenAI 내부 평가 자료를 분석해 사이버보안 Critical 등급 최초 모델이라는 점과 감시
없는 훈련 중 조율 행동 가능성을 경계했는데, 직접 사용 리뷰는 아니다
([Zvi, 08-13](https://thezvi.substack.com)).

### 벤치마크는 믿을 만한가

이번 출시는 벤치마크 자체가 논쟁 대상이 됐다.

| 기관 | 결과 | 주의점 |
|---|---|---|
| ARC Prize | ARC-AGI-3 **62.7%**(Standard 하네스, $26,098) vs **98.6%**(Provider Adapter 하네스, $18,817) | 같은 모델·같은 문제인데 하네스에 따라 36점 차이. "하네스가 곧 성능" |
| Artificial Analysis | 최초 공개 때 Sol과 동점(61점) → 비판 후 지수 개정, Sol +4점으로 종합 2위(1위 Claude Fable 5.1) | 개정 경위는 [The Decoder](https://the-decoder.com/artificial-analysis-overhauls-its-intelligence-index-after-gpt-6-astra-scoring-drew-skepticism/) |
| Epoch AI | 50개 이상 벤치마크 종합, 267개 모델 중 **1위**(169점) | Artificial Analysis와 순위가 상반 |

OpenAI 자체 수치(FrontierMath Tier 4 98%, ARC-AGI-3 99.9% 등)는 위 표와 비교하면
가장 유리한 하네스를 고른 값으로 보인다. HN에서도 "책상 위 벤치마크는 OpenAI가 고른
것들뿐"이라는 냉소가 나왔다 ([HN](https://news.ycombinator.com/item?id=49583744)).

## 사용자들이 말하는 "쓰는 법"

호평한 사람들의 공통점은 쓰는 방식이 달랐다는 것이다.

1. **프롬프트가 아니라 위임.** 완료 조건을 명확히 주고 컴퓨터 사용 권한을 열어 오래
   맡긴다. 모호한 지시("앱 개선")에는 약하다
   ([Creators AI](https://thecreatorsai.com/p/gpt-6-astra-what-to-actually-use)).
2. **관리 루프를 둔다.** Matt Shumer는 장시간 작업을 Manager Loop로 관리했고, 세부에
   집착하는 경향을 관리자가 잘라줘야 한다고 적었다.
3. **한도를 설계한다.** 2.5배 소진 속도를 전제로, Spotify식 모델 라우팅(대용량·단순
   작업은 저비용 모델로)과 함께 쓴다. 관련 개념은 [[ai-agent-routing]].
4. **남의 코드는 아직 사람이 맥락을 준다.** 기존 코드베이스 수정에서는 범위를 좁게
   자르고 과잉 변경을 되돌릴 준비를 한다.

## 우리 조직 시사점

- **"언제 쓰지 않을지"가 교육 내용이 됐다.** 요금 2.5배·한도 2.5배 소진에 과잉
  엔지니어링까지 겹치면, 최상위 모델을 쓰는 판단은 비용 설계 역량이다. 같은 주
  Spotify의 90% 절감 사례와 짝지어 가르칠 수 있다.
- **위임 설계가 도구 사용법을 앞선다.** 호평은 전부 "완료 조건 + 권한 + 관리 루프"를
  갖춘 사람에게서 나왔다. 프롬프트 잘 쓰기가 아니라 일을 정의하고 감독하는 방식이
  성과를 갈랐다. 이것은 교육이 다룰 수 있는 대상이다.
- **벤더 수치와 하네스를 읽는 훈련.** 같은 모델이 하네스에 따라 62.7%와 98.6%로
  갈리고, 지수 기관이 비판을 받고 순위를 고쳤다. 근거 읽는 법 교육의 살아 있는 사례다.

## 확인하지 못한 것

- Reddit 다수 커뮤니티의 반응(접근 차단). 일반 사용자층의 평가는 이 문서에 거의 없다.
- 긴 컨텍스트(100만 토큰)와 Codex 메모 기능에 대한 직접 실측 후기. 찾지 못했다.
- Claude Fable 5.1과의 나란히 비교 영상은 존재하나 본문을 읽지 못해 결론 인용을 보류했다.
- OpenAI 공식 발표 페이지는 403으로 직접 읽지 못했다. 부록의 사양은 2차 매체 전달값이다.
- "GPT-6가 아니다"(8월)에서 "GPT-6 Astra"(9월)로 바뀐 경위에 대한 공식 설명.

## 부록: 사양·가격·타임라인

> ⚠️ 상충: 8월 티저 때 OpenAI는 Astra가 GPT-6가 아니라고 선을 그었으나
> ([[2026-08-01-openai-astra-teaser-math-proofs]]), 9월 출시명은 GPT-6 Astra이고
> 모델 ID도 `gpt-6-astra`다. 최신 정보를 우선한다.

| 항목 | 값 |
|---|---|
| 모델 ID | `gpt-6-astra` |
| 컨텍스트 창 | 1,050,000 토큰 (입력 최대 922,000 / 출력 최대 128,000) |
| 지식 컷오프 | 2026-04-30 |
| 요금 | 입력 $10 · 캐시 입력 $1 · 출력 $50 (100만 토큰당), 입력 272K 초과분 입력 2배·출력 1.5배 |
| 구독 | Plus·Pro·Business·Enterprise 포함, Enterprise는 기본 꺼짐 |
| 안전 | 사이버보안 Critical 등급, 해당 능력은 Trusted Access Programme으로 제한 |
| Codex CLI | v0.153.1부터 지원 |

| 날짜 | 무슨 일 |
|---|---|
| 08-01 | 수학 난제 10개 풀이 논문으로 "Astra" 존재 첫 공개 |
| 09-03 | GPT-6 Astra 출시, API·Codex CLI 동시 지원 |
| 09-04 | 제한 조직 → Business·Pro → Plus 순 단계 확대 |
| 09-05 | Codex 기본 모델이 Astra로 전환 |
| 09-06 | 4개 랩 동시 신모델 "모델 피로" 보도, Pachocki "An Alien Mind" 에세이 |

## 출처

**실측·심층 리뷰**
- [CodeRabbit — GPT-6 Astra in code review: Gains, privacy, and cost](https://www.coderabbit.ai/blog/gpt-6-astra-code-review-evaluation) (09-04)
- [Kilo — GPT-6 Astra: what we learned previewing](https://blog.kilo.ai/p/gpt-6-astra-what-we-learned-previewing) (09-04)
- [Simon Willison — Blender coding agents on macOS (TIL)](https://til.simonwillison.net/llms/blender-coding-agents-macos) (09-05)
- [Decrypt — OpenAI GPT-6 Astra review: shockingly good](https://decrypt.co/377514/openai-gpt-6-astra-review-shockingly-good)

**인상 평가**
- [Claire Vo — GPT-6 Astra review: hardware, 3D, games and coding](https://www.chatprd.ai/how-i-ai/gpt-6-astra-review-hardware-3d-games-and-coding) (09-03)
- [Matt Shumer — Astra review](https://somethingbig.ai/astra-review) (09-03)
- [Creators AI — GPT-6 Astra: what to actually use it for](https://thecreatorsai.com/p/gpt-6-astra-what-to-actually-use) (09-07)

**Hacker News 스레드**
- [GPT-6 Astra on robot arms](https://news.ycombinator.com/item?id=49582582) (09-06, 240점·189댓글) — 코딩·에이전트 후기가 가장 풍부
- [GPT-6 Astra on OpenRouter](https://news.ycombinator.com/item?id=49570545) (09-04, 319점·233댓글)
- [GPT-6 Astra in code review (CodeRabbit)](https://news.ycombinator.com/item?id=49572875) (09-05, 74점)
- [Ask HN: Initial thoughts on GPT-6 Astra?](https://news.ycombinator.com/item?id=49571621) (09-05)
- [GPT-6 Astra generally available](https://news.ycombinator.com/item?id=49569707) (09-04)

**독립 벤치마크·기타**
- [ARC Prize — OpenAI GPT-6 Astra results](https://arcprize.org/results/openai-gpt-6-astra)
- [The Decoder — Artificial Analysis overhauls its Intelligence Index after GPT-6 Astra scoring drew skepticism](https://the-decoder.com/artificial-analysis-overhauls-its-intelligence-index-after-gpt-6-astra-scoring-drew-skepticism/)
- [r/ClaudeAI — Tried GPT Astra today](https://www.reddit.com/r/ClaudeAI/comments/1w9xeyl/tried_gpt_astra_today/) (09-07)
- [OpenAI — An Alien Mind (Jakub Pachocki)](https://openai.com/index/an-alien-mind/) (09-06)
- 관련 위키: [[2026-08-01-openai-astra-teaser-math-proofs]] · [[openai]] · [[codex]] · [[ai-agent-routing]]
