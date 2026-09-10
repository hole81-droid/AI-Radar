---
type: concept
date: 2026-06-11
tools: [claude-code, codex]
importance: high
uses: [course, ax]
source: https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers
---

# "AI는 왜 개발자를 대체하지 못했나" — Decide-Execute-Deliver 프레임 (AI as Normal Technology)

> **채택 근거(화제성)**: AI as Normal Technology(Narayanan·Kapoor 등), 2026-06-11
> 발행. 좋아요 589건 — 최근 23편 자기 평균 206.0건의 약 2.9배. 이 창(05-01~07-14)
> 안에서 정독 대상 5건 중 가장 큰 참여도.

## 무엇인가

"AI 역량이 특정 임계값을 넘으면 대량 해고가 온다"는 서사를 **AI 도입이 가장
빠르고 규제 장벽이 가장 낮은 직군(소프트웨어 개발)**의 실제 데이터로 반박하는 글.
저자들의 핵심 주장: 이 직군에서조차 대량 해고 서사가 근거를 못 찾는다면,
다른 대부분의 직군은 그보다 **더** 완충 여지가 크다.

### 프레임 — "결정·실행·전달 샌드위치"(decide-execute-deliver sandwich)

지식노동을 3단으로 나눈다.

| 단 | 내용 | AI의 영향 |
|---|---|---|
| **결정(Decide)** | 무엇을 만들지, 어떻게 만들지 판단 | 자동화 저항 |
| **실행(Execute)** | 코드를 실제로 작성 | **AI가 강하게 압축** |
| **전달(Deliver)** | 리뷰·통합·배포·유지보수 | 자동화 저항 |

AI는 가운데 "실행" 단을 크게 압축하지만, 위아래 단(판단·전달)은 능력 향상만으로는
쉽게 자동화되지 않는다는 것이 핵심 논지다.

### 반례 검증 — "AI 해고"로 보도된 사례의 실상

**Block(캐시앱·스퀘어·애프터페이 운영사)** 사례를 정면으로 검증한다. Block은
2026년 2월 직원 4,000명(전체의 약 40%)을 해고하며 창업자 Jack Dorsey가
"AI가 더 작고 수평적인 팀으로 일하는 새로운 방식을 가능케 한다"고 밝혔다.
그러나 이 글이 인용한 후속 취재에 따르면:

- Block은 팬데믹 기간 인력을 3배 이상 늘렸다가 재무 압박에 몰린 상태였다 —
  AI는 해고 사유의 표면적 설명일 뿐, 실제로는 과잉 채용 조정이라는 반론.
- Cash App 데이터과학자 Naoko Takeda는 "AI를 모두에게 억지로 밀어넣었지만
  생산성 향상은 매우 제한적이었다"고 밝히며 **75% 잔류 인상 제안을 거절하고
  퇴사**했다.

> ⚠️ **참고**: 2026-09 WebSearch로 이 사례를 1차 대조한 결과, 여러 매체(Fortune·
> CNN·Fast Company)가 Takeda에게 제시된 재직 인센티브를 **75%가 아니라 90%
> 인상**으로 보도했다. normaltech.ai 원문은 75%로 적었다 — 수치 차이가 있어
> 인용 시 "제안 인상폭 보도가 매체별로 75~90%로 갈린다"로 명시할 것.
> Block 4,000명 감원(전체의 약 40%) 자체와 Dorsey의 발언 취지는 다수 매체
> (Fortune 2026-02-27, CNN 2026-02-26)로 교차 확인됨.

## 강의·AX 활용 포인트

- **강의**: "AI 도입 = 인력 감축"이라는 단순 도식을 깨는 반례 교재. "결정·실행·
  전달" 3단 프레임은 어떤 직군에서든 "AI가 압축하는 단은 어디인가"를 스스로
  진단하게 하는 워크시트로 변형 가능.
- **AX**: 조직 내 AI발 구조조정 논의에서 "그 해고가 정말 AI 때문인가, 아니면
  AI가 편리한 설명일 뿐인가"를 구분하는 체크리스트 근거로 쓸 수 있다.
- **한계**: 이 글은 시리즈의 첫 편이며("개별 개발자의 커리어는 여전히 험할 수
  있다"는 후속편 예고), 소프트웨어 개발 직군에 국한된 논증이다. 저자들의
  "AI as Normal Technology" 프레임 자체가 하나의 입장이며, 이 위키에는 반대
  방향(agentic 도입이 빠르다는) 사례도 병존한다는 점을 함께 언급할 것.

## 출처

- 원문: https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers
- Block 인센티브 수치 대조: Fortune(2026-02-27) https://fortune.com/2026/02/27/block-jack-dorsey-ceo-xyz-stock-square-4000-ai-layoffs/ ,
  Fast Company(Takeda 인터뷰) https://www.fastcompany.com/91502578/
