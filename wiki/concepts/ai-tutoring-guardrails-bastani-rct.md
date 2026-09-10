---
type: concept
date: 2026-05-21
tools: [chatgpt, claude-code]
importance: high
uses: [course]
programs: [AI Leader Program (팀장)]
source: https://drphilippahardman.substack.com/p/from-ai-tutors-to-ai-study-mates
---

# "AI 튜터는 배움을 못 준다, 성적만 준다" — 가드레일 없는 AI 학습의 대가와 "AI 스터디메이트" 대안

> **채택 근거**: 이 페이지는 같은 창(2026-05-01~07-14) 안에서 **같은 연구를
> 다룬 두 글**을 합쳐 하나로 기록한다 — One Useful Thing(Mollick)
> "Choosing to Stay Human"(2026-05-26, 좋아요 1,307건, 자기 평균 712.1건
> 대비 약 1.8배)과 Dr. Philippa Hardman "From AI Tutors to AI Study
> Mates"(2026-05-21, 좋아요 85건, 자기 평균 87.0 근접). 두 저자가 같은
> Bastani et al. 터키 RCT를 각자 다른 각도(Mollick은 "인간으로 남기 위한
> 선택", Hardman은 "AI 학습도구 설계 기준")로 인용해 별도 페이지로 쪼개지
> 않고 한 곳에 모았다.

## 연구 1 — 가드레일 없는 AI는 "연습 성적"만 올리고 "실제 실력"은 깎는다

**Bastani, Bastani, Sungu, Ge, Kabakcı, Mariman (2025)**, PNAS. 튀르키예
고등학교 약 1,000명(9~11학년, 약 50개 학급) 대상 대규모 RCT. 4회 90분 세션,
수학 교과과정의 약 15%를 차지하는 연습 문제로 세 그룹을 비교했다 —
① 표준 ChatGPT-4("GPT Base"), ② 정답 대신 힌트만 주는 교사 설계 가드레일
버전("GPT Tutor"), ③ 교과서·필기만 쓰는 통제군.

| 그룹 | 연습 중 성과 | AI를 뗀 뒤 시험 성과 |
|---|---|---|
| GPT Base(가드레일 없음) | 통제군 대비 **+48%** | 통제군 대비 **-17%** |
| GPT Tutor(힌트만 제공) | 통제군 대비 **+127%** | 부정적 효과 대부분 상쇄됨 |
| 통제군 | 기준 | 기준 |

연구진의 설명은 직설적이다 — 가드레일이 없으면 학생들은 연습 중 AI를
**"목발(crutch)"**로 썼고, 그 결과 나중엔 원래 안 배운 것보다 더 나쁜
성적을 받았다. Mollick의 표현으로는 "**AI는 도와주도록 설계됐기 때문에
그냥 답을 준다. 사람은 노력 없이 학습할 수 없는데, 도움을 주는 게
목적인 AI는 바로 그 노력을 대신 없애버린다**."

## 연구 2 — 개인화된 문제 순서 배정은 실제로 도움이 됐다 (대만 타이베이)

Mollick이 "같은 연구팀 다수가 참여한 두 번째 논문"으로 소개한 별도 연구
(2026-09 WebSearch로 대조: Bastani·Angel Chung, 대만 타이베이시 정부·주대만
미국협회 협업, 고등학교 10곳·770명, 5개월 Python 과정). 표준 순서(쉬운
문제→어려운 문제)와 **AI가 학생 반응에 맞춰 난이도를 조정하는 개인화
순서**를 비교했다.

- 개인화 그룹은 AI 없이 치른 기말고사에서 **0.15 표준편차 향상**
  (일부 추정으로 학교 교육 **6~9개월 분량**에 해당).
  기여 요인은 "몰입도 증가"로 분석됨 — 개인화 그룹 학생은 문제당 평균
  3분 더 연습했다(모듈당 약 1시간 추가).
- Python 신규 학습자가 기존 경험자보다 더 큰 효과를 봤고, 비명문고
  학생들도 상대적으로 더 큰 효과를 봤다.

**연구 1과 2를 합쳐 읽으면**: AI가 도움이 되느냐 아니냐가 아니라, **AI가
정답을 대신 주느냐(해롭다) vs 학생이 스스로 풀도록 난이도·힌트를
조정하느냐(돕는다)**의 설계 차이가 결과를 가른다는 것이 일관된 결론이다.

## 연구 3 — "학습-성과 역설"과 "AI 스터디메이트"라는 대안 설계

Hardman이 소개하는 **Khosravi 외 AI교육 연구자 다수(2026-05)**의 신규
논문은 이 문제에 이름을 붙인다 — **학습-성과 역설(learning-performance
paradox)**: AI 튜터는 대개 "과제 완료"에 최적화돼 있어, 오래가는 학습이
일어나는 바로 그 과정을 훼손한다.

이 논문이 인용하는 근거 3가지:

1. **Bastani et al.(2025)** — 위 연구 1 (연습 중 성과↑, 사후 학습↓)
2. **Corbett & Tangen(2026)** — AI 대화는 개입 직후엔 텍스트 반박보다
   학생의 오개념을 더 잘 고쳤지만, **2개월 뒤 추적조사에서 그 우위가
   완전히 사라졌다**
3. **Fan et al.(2024)** — **"메타인지적 게으름"**: AI가 있으면 학습자가
   계획·점검·자기평가를 포기한다 — 일은 끝나지만 역량은 자라지 않음

Yan, Greiff, Lodge, Gašević(2025, Nature Reviews Psychology)의 표현을
빌리면 — **"우리는 성과 향상과 학습을 혼동하고 있다."** 올해 나온 "AI가
완료율을 40% 올렸다"는 식의 모든 홍보 문구는 어쩌면 **중요하지 않은
지표**를 측정하고 있는 것이다. 정작 중요한 지표(도구를 뗀 뒤에도
남는 역량)는 아무도 보고하지 않는다.

### 대안 — "AI for Work"가 아니라 "AI for Learning"을 따로 설계해야 한다

논문의 핵심 주장: 지금의 LLM은 애초에 **업무용으로 설계**됐다 — 산출물
최적화, 인지적 노력 최소화, 상호작용을 일회성으로 취급. 그런데 이 설계
철학 자체가 학습 도구로서는 부적합하다. 그래서 제안하는 것이 **"AI
스터디메이트(AI learning companion)"** — 매 세션을 새로 시작하는
"AI 튜터"와 달리, **학습자가 지난번 어디서 막혔는지 기억하고, 회피하는
사고를 계속 찔러주는** 누적적·발전적 관계로 설계된 AI.

논문이 소개한 실제 구현 사례 3곳:

- **RiPPLE(University of Queensland)** — 학생이 직접 연습문제를 만들고
  동료 평가한 뒤 검증된 문제로 연습. AI가 학습자별로 무엇을 아는지·뭘
  틀렸는지·또래 대비 위치·몰입도를 실제로 누적 모델링하는 **유일한** 사례
  (논문이 검토한 5개 사례 중).
- **Recast(University of Technology Sydney)** — 교수자가 직접 AI
  컴패니언을 만드는 툴킷. "반성 도우미", "소크라테스식 질문으로 연구
  질문의 숨은 전제를 드러내는 비판적 사고 도우미", "어려운 환자·고객을
  연기해 실전 대화를 미리 연습시키는 롤플레이 도우미" 등.
- **Khanmigo(Khan Academy)** — 처음엔 "절대 답을 주지 않고 늘 질문으로
  되받는" 소크라테스식 AI 튜터로 설계했으나, 학생들이 좌절하고 이탈하는
  걸 확인한 뒤 **"스터디메이트" 원칙으로 재설계** — 시도를 유도하고,
  막히면 힌트를 주고, 진짜 시도한 뒤에만 예시를 보여주는 방식으로 전환.

## 부기 — 같은 Mollick 글이 인용한 "인지적 항복" 사례 (BCG 컨설턴트 실험)

"Choosing to Stay Human"은 위 두 RCT 외에 Mollick 자신이 공저한 **BCG
컨설턴트 758명 대상 실험**(Dell'Acqua 외, Harvard·MIT·Warwick·BCG 공동)도
인용한다. GPT-4 접근권을 받은 컨설턴트들은 대부분의 과제에서 압도적으로
좋은 성과를 냈지만, **연구진이 일부러 AI가 틀리도록 설계한 문제**에서는
AI 없는 그룹보다 정답률이 유의하게 낮았다 — "AI가 그럴듯하지만 틀린 답을
권위 있게 제시했고, 최고 수준의 엘리트 컨설턴트들 대다수가 이를 잡아내지
못했다." Mollick의 Wharton 동료들은 이 현상을 **"인지적 항복(cognitive
surrender)"**이라 부른다 — 사람들이 문제를 계속 생각하길 멈추고, AI가
틀렸을 때조차 그냥 AI에게 맡겨버리는 것. [[ld-ai-steering-tax]]의
"확신도 인플레이션" 결함과 같은 문제를 사용자 쪽에서 본 것이라 함께
읽으면 좋다. 이 연구 자체는 이번 수집에서 원문 대조를 하지 않았다(미확인,
연도·표본 세부는 Mollick의 요약에 의존).

## 강의·AX 활용 포인트

- **강의**: [[ld-ai-steering-tax]]·[[ld-delegate-collaborate-own-framework]]가
  "실무자가 AI를 어떻게 쓸까"를 다룬다면, 이 페이지는 **"우리 컬리지가 만드는
  학습 도구 자체를 어떻게 설계할까"**를 다룬다. AI 실습 과제를 만들 때
  "정답을 바로 주는 도구"(연구 1의 GPT Base형)를 피하고 "힌트·난이도
  조정형"(GPT Tutor·개인화 순서형)을 설계 기준으로 삼을 근거.
  [[wiki/analysis/ai-upskilling-pedagogy-trends]]의 Cognitive Offloading
  Paradox(Wang & Zhang, 다른 Hardman 글 "the-cognitive-offloading-paradox"
  기반)와 함께 보면 "부분적 오프로딩이 전면 위임보다 나쁘다"(그 문서)와
  "가드레일 없는 AI가 목발이 된다"(이 문서)가 같은 결론을 다른 실험으로
  뒷받침한다.
- **강의(자기 참조)**: 우리 조직의 AI 실습 모듈에 "완료율"만 KPI로 잡고
  있다면, Yan et al.의 "성과와 학습을 혼동하지 말라"는 경고를 평가 설계
  재검토의 근거로 쓸 수 있다.
- **AX**: L&D뿐 아니라 신입 온보딩·사내 인증 도구를 "AI for Work" 로직
  그대로 가져다 쓰고 있다면, 이 프레임으로 재검토할 것.
- **한계**: Khosravi et al.(2026-05) 논문·Corbett & Tangen(2026)·Fan et
  al.(2024)·Yan et al.(2025)은 전부 Hardman의 2차 해설을 통해 인용했으며
  원문 대조는 하지 않았다(미확인). Bastani et al.(2025) 터키 RCT와 대만
  타이베이 RCT는 2026-09 WebSearch로 원 논문(PNAS·Wharton Knowledge·arXiv)을
  대조해 확인했다.

## 출처

- Mollick: https://www.oneusefulthing.org/p/choosing-to-stay-human
- Hardman: https://drphilippahardman.substack.com/p/from-ai-tutors-to-ai-study-mates
- Bastani et al.(2025), PNAS: https://www.pnas.org/doi/10.1073/pnas.2422633122
- 대만 타이베이 개인화 튜터 RCT 해설(Wharton Knowledge): https://knowledge.wharton.upenn.edu/article/how-personalized-ai-tutors-can-help-students-learn/

> 같은 주제의 다른 출처(2026-09-10 소급 백필에서 교차 연결): [[ai-tutoring-cognitive-surrender-vs-scaffolding]] · [[gemini-guided-learning-sierra-leone-rct]]
