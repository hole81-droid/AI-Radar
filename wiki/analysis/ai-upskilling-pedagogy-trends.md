---
type: analysis
date: 2026-09-09
tools: []
importance: high
uses: [course, ax]
programs: [AI Leader Program (팀장), AI Camp]
source: https://joshbersin.com/2026/03/the-world-of-corporate-training-lurches-toward-enablement/
---

# AI 활용 교육, "가르치는 법" 자체는 무엇이 바뀌고 있나

> 2026-09-09 질의. "AI 활용법·업무 적용법을 가르치는 교육 자체의 혁신 기법·트렌드 문헌이
> 있는가"에 답한다. 위키 보유분(스캔 결과) 9건과 외부 조사 약 35건(병렬 리서치 2갈래)을 대조했다.
> 대상은 성인·직장인·기업 AI 역량 교육이고, 학교 정책·부정행위·시험 방식 변화는 제외했다
> (CLAUDE.md 관심사 규칙).
>
> 화면판(HTML): `outputs/ai-upskilling-pedagogy-trends.html` ·
> [아티팩트](https://claude.ai/code/artifact/3723758e-3aca-4b08-9521-6ef572fa22a2) ·
> PDF(화면 그대로): `outputs/ai-upskilling-pedagogy-trends.pdf`

## 한눈에

있다. 그리고 다섯 갈래로 정리된다.

1. **가르칠 내용이 옮겨갔다** — 프롬프트 잘 쓰기에서 "무엇을 어디까지 위임하고 어떻게
   검증할지" 설계로. Anthropic 4D, OpenAI Academy 3단계, MIT SMR "디렉팅", McKinsey 3단계가
   같은 방향을 가리킨다.
2. **만들면서 배우고, 산출물을 들고 나간다** — 삼성 임원 2,300명 합숙, LG 임원 라이브코딩,
   Moderna 커스텀 GPT 300개. "실무 문제 먼저" 액션러닝(NAU·ISTE)이 이 갈래의 설계 원형이다.
3. **AI가 교사가 된다** — 답을 주지 않고 질문하는 Study Mode·Learning Mode, 소크라테스식 AI가
   저성취 학습자에게 가장 효과가 크다는 실측, 계획서 안에서 기능을 배우게 하는 도구.
4. **학습 효과의 역설이 실측됐다** — 결과물을 만들게 하면 검증 행동이 오히려 준다(Anthropic
   9,830건), AI를 어중간하게 쓰면 안 쓰는 것보다 나쁘다(912명). 교육 설계에서 가장 새로운
   근거이고, 위키에는 없던 것이다.
5. **교육에서 인에이블먼트로** — 3개월 과정 개발 대신 업무 흐름 속 실시간 코칭. Bersin의
   800개 조직 조사에서 생산성 7배. 완주율 30% 격차를 메우는 것은 만들기 이벤트가 아니라
   확산 트랙의 분리다.

가장 큰 발견은 4번이다. 나머지 넷은 위키가 이미 부분적으로 잡고 있었지만, "결과물 만들기
실습이 검증 역량을 키우지 않는다"는 실측은 우리 프로그램 설계의 전제를 건드린다.

## 수집 범위

| 출처 | 건수 | 비고 |
|---|---|---|
| 위키(스캔 결과) | 9건 | 9월호 트렌드 1·적용 5, NAU 액션러닝, Bersin L&D 전환, HBI 2026, Claude Academy, Mollick 도구 가이드, Adeptly, 초급 일자리=학습 인프라 |
| 외부 · 프레임워크·연구 | 20여 건 | Anthropic 4D·Fluency Index, OpenAI Academy, Wharton, Hardman, arXiv 2편, Bersin, McKinsey, BCG, LG·고용노동부 |
| 외부 · 기법·사례 | 18건 | Study/Learning Mode, Socratic Mind, 삼성·LG·신한·KB·KOTRA, Moderna, 완주율 집계 |
| 접근 실패 | 6건 | Udemy 2026 리포트(403), McKinsey L&D 페이지(타임아웃), OpenAI·Anthropic 학습모드 1차 페이지(403/404), arXiv 본문 2편 |

국내 사례는 전부 2차 언론 보도이고 사후 측정치가 없다. 중소·중견기업 사례는 한 건도 없다.

## 지형: 무엇이 새롭고 무엇이 재포장인가

| 갈래 | 새로움 | 근거 수준 | 위키 보유 | 대표 출처 |
|---|---|---|---|---|
| 위임 설계로 내용 이동 | 재포장에 가까움 — 방향은 1년째 같고 이제 공식 커리큘럼이 됨 | 프레임워크 | 있음 | Anthropic 4D · OpenAI Academy · MIT SMR |
| 만들면서 배우기 + 강제 산출물 | 규모가 새로움 — 수천 명 단위 실행 | 사례(수치 일부) | 있음 | 삼성 · LG · Moderna · NAU |
| AI가 교사 | 도구는 새로움, 효과 근거는 얇음 | 실측 1건 + 의견 | 일부 | Socratic Mind · Study Mode |
| 학습 효과의 역설 | **가장 새로움** — 2026년 실측 | 실측 3건 | 없음 | AI Fluency Index · Wang & Zhang |
| 인에이블먼트 | 프레임은 오래됐고 수치가 새로움 | 대규모 조사 | 있음 | Bersin 800개 조직 |

## 갈래별로 읽기

### 1. 가르칠 내용이 옮겨갔다

프롬프트 기술은 입문 과정으로 내려가고, 위임·검증 설계가 본 과정이 됐다. 9월호 트렌드 1이
이미 이 흐름을 잡았고(MIT SMR "프롬프팅을 멈추고 디렉팅하라", Mollick 위험도×자율성 판단
트리), 외부 조사는 이것이 벤더 공식 커리큘럼으로 굳었음을 보여준다.

- **Anthropic AI Fluency 4D** — Delegation·Description·Discernment·Diligence. Rick Dakan·Joseph
  Feller 공동 개발, Claude Academy 무료 코스. AI 협업을 도구 기술이 아니라 네 가지
  판단 역량으로 구조화했다 ([aifluencyframework.org](https://aifluencyframework.org/) ·
  [코스](https://academy.claude.com/courses/ai-fluency-framework-foundations)). 위키의
  [[2026-08-20-claude-academy-launch]]가 이 코스의 출시 기록이다.
- **OpenAI Academy 3단계** — AI Foundations → Applied AI Foundations → Agents and Workflows.
  두 번째 단계의 실습이 "워크플로우 플랜 작성"(입력·모델·도구·검토 지점·사람 감독을 명시)
  이다. 단발 프롬프트에서 설계도 작성으로 옮겨간 것을 실습 단위에서 확인할 수 있다
  ([OpenAI](https://openai.com/index/academy-courses-applying-ai-at-work/)).
- **McKinsey** — AI 업스킬링을 리터러시(공통 유창성) → 도입(워크플로우 내재화) → 도메인
  전환의 3단계로 두고, 병목은 직원 준비도가 아니라 리더의 방향 설정 속도라고 진단했다
  ([McKinsey](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/redefine-ai-upskilling-as-a-change-imperative)).
  HBI 2026 조사([[2026-07-22-hbi-2026-global-leadership-study]])의 "탐구의 설계자를 길러라"와
  같은 방향이다.

### 2. 만들면서 배우고, 산출물을 들고 나간다

위키의 [[edsurge-problem-of-practice-ai-teacher-pd]]가 설계 원형이다 — 실무 문제 정의 →
그 문제에 필요한 AI만 학습 → 현장 투입 → 데이터 수집, 의사결정권자를 팀에 포함. 9월호
적용 5가 이를 AI Leader Program(팀장) 문제해결 과정의 벤치마크로 이미 옮겼다.

외부 조사에서 새로 확인된 것은 **규모**다.

- **삼성** — 전 관계사 임원 약 2,300명이 2박 3일 합숙(2026-05~08), 각자 업무에 적용할
  에이전트 1~2개를 만들어 나가는 구조. 사장단 50명은 별도 부트캠프에서 직접 제작. 전 직원
  28만 명 교육이 그룹 목표 ([MTN](https://news.mtn.co.kr/news-detail/2026052610525242525) ·
  [서울경제](https://www.sedaily.com/article/20053847)).
- **LG인화원** — 3단계. AX Camp(트렌드 + 개인 업무 자동화 에이전트 제작, 03월) → AI for
  Company(임원이 라이브코딩으로 조직 업무 개선 에이전트를 직접 제작, 06월~) → AI for
  Customer(사업화 전략, 07월~) ([다음](https://v.daum.net/v/20260507151419100)).
- **신한은행** — 임직원 1만 2천 명 전원 교육 + 1,000명 전문가 트랙 이중 구조, 외부 전임교수
  4명 영입 ([다음](https://v.daum.net/v/20260610144325140)).
- **KB금융** — 7개 계열사 316명 에이전트 경진대회, 우수 사례는 별도 "AI 챌린지 프로그램"
  으로 확산 ([우먼타임스](https://www.womentimes.co.kr/news/articleView.html?idxno=105995)).
- **Moderna AI Academy** — 유일하게 수치 체계가 완결된 사례. 입문(DeepLearning.AI) → 커스텀
  GPT 제작 실습(자체 제작) → 필수 라이브 세션의 3단 + 부서 간 챔피언 팀. 등록 2,600명+,
  커스텀 GPT 300개+, 완주율 업계 평균 대비 240%, 사후 평가 지식 30% 증가
  ([Coursera 사례](https://www.coursera.org/enterprise/resources/casestudy/moderna)). 파트너사
  집계라 수치 출처 구분이 불명확하다.
- **KOTRA 리버스 멘토링** — 20대 직원 22명이 CEO 포함 임원 7명을 월 1회 순환 코칭, 5개월.
  저비용·저마찰 임원 교육 모델 ([서울경제](https://en.sedaily.com/finance/2026/08/31/kotra-launches-reverse-mentoring-with-staff-in-their-20s)).

국내 네 사례는 모두 목표·인원만 공개됐고 완주율·정착률은 없다. 규모 설계의 참고이지
효과의 근거는 아니다.

이 갈래에서 가장 정교한 설계는 위키 밖, 사용자 본인의 AX 리더십 클래스 원칙이다 —
체험:토크 65:35, 체험 → 관찰 질문 → 디브리핑, 의도된 실패(어설픈 baseline을 먼저 겪게 하고
개선은 본인 손으로), 통찰 하나 = 증명하는 실습 하나, 월요일의 지시 3가지를 손글씨로 들고
나가기. 외부 조사에서 이 수준의 세션 설계 문헌은 나오지 않았다.

### 3. AI가 교사가 된다

- **Study Mode(ChatGPT)·Learning Mode(Claude)** — 답을 바로 주지 않고 유도 질문으로 이끈다.
  Claude Code에서는 `#TODO` 주석을 남기고 사용자가 채우게 한다. 두 기능 모두 벤더 1차 발표
  페이지를 열지 못해 2차 소스로만 교차 확인했다 — 위키 반영 전 재확인 필요.
- **Socratic Mind(Georgia Tech)** — 대학생 173명, AI가 정답 대신 연쇄 질문을 던지는 형성평가.
  저성취 학생일수록 상승폭이 컸다 ([Springer](https://link.springer.com/article/10.1007/s10758-026-10007-6)).
  대상이 대학생이라 직장인 재현성은 별도 검증이 필요하지만, "질문형 설계는 뒤처진 학습자에게
  더 효과적"이라는 방향은 저활용층 교육에 직접 시사점이 있다.
- **Wharton 7역할 프롬프트** — AI를 튜터·코치·멘토·팀메이트·툴·시뮬레이터·학생으로
  역할 지정하는 템플릿, CC-BY 공개 ([GAIL](https://gail.wharton.upenn.edu/prompt-library/)).
  2024년 자료지만 여전히 표준 참조다.
- **Adeptly**([[adeptly-claude-code-learning-crew-pipeline]]) — 문서 대신 자기 계획서를 읽으며
  기능을 배우게 하는 도구. "업무 흐름 속 학습"을 도구로 구현한 사례이나 이용자 수치는 없다.

### 4. 학습 효과의 역설 — 이 문서에서 가장 새로운 것

- **Anthropic AI Fluency Index(2026-02)** — Claude.ai 대화 9,830건에서 11개 유창성 행동을
  관찰. 검증 행동은 희소하고(AI 추론 검증 15.8%, 사실 검증 8.7%), **코드·문서 같은 결과물을
  생성할 때 지시는 정교해지지만 비판적 검토는 오히려 3.1~5.2%p 감소**했다
  ([Anthropic](https://academy.claude.com/tutorials/the-ai-fluency-index)). 결과물 만들기
  실습만으로는 검증 역량이 자라지 않는다는 뜻이다.
- **Cognitive Offloading Paradox(Wang & Zhang 2026, Hardman 해설)** — 대학생 912명 3파 시차
  조사. AI 협력 지향성이 높을수록 비판적 평가와 오프로딩이 둘 다 늘고 둘 다 깊은 학습을
  예측한다. 단 **부분적·산발적 사용은 아예 안 쓰는 것보다 나쁘다** — 오프로딩이 학습을 돕는
  것은 전면 위임을 선택했을 때뿐이다 ([Hardman](https://drphilippahardman.substack.com/p/the-cognitive-offloading-paradox)).
  해설자가 제안한 실습 구조: AI 없이 먼저 답한다 → AI와 전면 협업한다 → AI 없이 다시
  평가한다. AI는 오류를 지적만 하고 고쳐주지 않는다.
- **의존형 vs 자율형 오프로딩** — AI 답을 검토 없이 채택하는 의존형만 탈숙련과 결부되고,
  문제 구조를 쥔 채 하위 작업만 넘기는 자율형은 그렇지 않다
  ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC13420724/), 초록 수준 확인).
- **Faster Completion, Less Learning(arXiv 2026-07)** — 생성형 AI로 문제 완료는 빨라지지만
  사후 지식은 준다 ([arXiv](https://arxiv.org/pdf/2605.21629), 본문 미열람).

위키의 [[entry-level-jobs-as-learning-infrastructure]](초급 일자리를 자동화하면 판단력이
자랄 구간이 사라진다)가 조직 차원에서 같은 말을 하고 있었다. 이번 실측들은 그것을 학습자
개인 수준에서 확인한 셈이다.

### 5. 교육에서 인에이블먼트로

- **Bersin "Dynamic Enablement"** — 800개 조직 조사, 케이스 50건+. 업무 흐름 속 실시간
  지원 체계를 갖춘 기업이 정적 교육 기업 대비 생산성 7배, 재무 목표 초과 달성 6배.
  전환 방향은 "도움말 버튼 → 대화형 에이전트", "일반 챗봇 → 특정 전문가의 디지털 트윈"
  ([Bersin](https://joshbersin.com/2026/03/the-world-of-corporate-training-lurches-toward-enablement/)).
  위키의 [[hr-jobs-growing-despite-ai]]가 같은 저자의 진단을 이미 담고 있다 — L&D는 3개월
  과정 개발에서 즉시 쓸 수 있는 시뮬레이션·성과지원 도구 제작으로.
- **완주율 격차** — 역량 기반 접근을 표방하는 기업 79%, 실제 완주율 약 30%. 구조화된
  프로그램은 자기주도 대비 3~4배 채택률 ([Enterprise DNA 집계](https://enterprisedna.co/resources/stats/data-skills/),
  원 표본 미상).
- **확산 트랙의 분리** — Moderna의 챔피언 팀, KB의 챌린지 프로그램처럼 만들기 이벤트와
  정착 담당을 나눈 설계가 격차를 메우는 공통 답이다. 챔피언 네트워크를 정면으로 다룬
  학술·1차 자료는 찾지 못했다.

## 우리 프로그램에 바로 가져갈 것

1. **실습 구조를 3단으로** — AI 없이 먼저 → AI와 전면 협업 → AI 없이 재평가. 역설 연구
   둘이 같은 처방을 낸다. 지금의 "만들고 끝" 실습에 앞뒤 한 단계씩 붙이면 된다.
2. **검증(Discernment)을 별도 평가 목표로** — 결과물 품질만 보면 검증 역량은 늘지 않는다.
   SKADA 역량 진단(CAP-01)에 "AI 산출물에서 오류를 찾아내는 과제"를 넣을 근거가 생겼다.
3. **위임 유형을 가르친다** — 의존형(검토 없이 채택)과 자율형(구조는 쥐고 하위 작업만
   위임)의 구분을 AI Leader Program(팀장)의 위임 설계 실습에 명시한다.
4. **확산 트랙을 분리한다** — 해커톤·캠프 뒤에 챔피언·챌린지 트랙을 별도로 둔다. 국내
   대기업 사례의 공백(사후 측정 없음)이 곧 우리가 차별화할 지점이다.

## 확인하지 못한 것

- Study Mode·Learning Mode의 1차 발표 페이지(403/404). 기능 설명은 2차 교차 확인.
- 국내 대기업 4사의 완주율·정착률·생산성 변화. 전부 목표·인원 발표뿐.
- BCG "페르소나 학습 경로 채택률 20배" — 원문에 표본·방법이 없어 인용하지 않았다.
- arXiv 2편의 표본·통계치(본문 미열람). Udemy 2026 리포트(403).
- SKILL.md·CLAUDE.md 작성 자체를 학습 산출물로 삼는 방식의 외부 기업 교육 사례 — 없다.
  현재로선 이 위키의 실천이 가장 진전된 사례다.
- AI 롤플레이·시뮬레이션의 효과 수치 — 벤더 홍보 주장뿐이라 제외했다.

## 출처

**위키**: [[edsurge-problem-of-practice-ai-teacher-pd]] · [[hr-jobs-growing-despite-ai]] ·
[[2026-07-22-hbi-2026-global-leadership-study]] · [[2026-08-20-claude-academy-launch]] ·
[[which-ai-to-use-mollick-guide]] · [[adeptly-claude-code-learning-crew-pipeline]] ·
[[entry-level-jobs-as-learning-infrastructure]] · [[directing-ai-agents-vs-prompting]] ·
outputs/insight-report/2026-09.md 트렌드 1·적용 5

**프레임워크**: [Anthropic AI Fluency 4D](https://aifluencyframework.org/) ·
[AI Fluency Index](https://academy.claude.com/tutorials/the-ai-fluency-index) ·
[OpenAI Academy](https://openai.com/index/academy-courses-applying-ai-at-work/) ·
[McKinsey](https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/redefine-ai-upskilling-as-a-change-imperative) ·
[Wharton GAIL](https://gail.wharton.upenn.edu/prompt-library/)

**연구**: [Hardman — Cognitive Offloading Paradox](https://drphilippahardman.substack.com/p/the-cognitive-offloading-paradox) ·
[arXiv 2605.21629](https://arxiv.org/pdf/2605.21629) · [PMC13420724](https://pmc.ncbi.nlm.nih.gov/articles/PMC13420724/) ·
[Socratic Mind](https://link.springer.com/article/10.1007/s10758-026-10007-6)

**L&D·사례**: [Bersin — Dynamic Enablement](https://joshbersin.com/2026/03/the-world-of-corporate-training-lurches-toward-enablement/) ·
[Moderna](https://www.coursera.org/enterprise/resources/casestudy/moderna) ·
[삼성](https://news.mtn.co.kr/news-detail/2026052610525242525) · [LG](https://v.daum.net/v/20260507151419100) ·
[신한](https://v.daum.net/v/20260610144325140) · [KB](https://www.womentimes.co.kr/news/articleView.html?idxno=105995) ·
[KOTRA](https://en.sedaily.com/finance/2026/08/31/kotra-launches-reverse-mentoring-with-staff-in-their-20s) ·
[완주율 집계](https://enterprisedna.co/resources/stats/data-skills/)
