---
type: concept
date: 2026-06-03
tools: [claude-code]
importance: high
uses: [ax, course]
programs: [AI Agent Service — Mastery Course, AI Leader Program (임원)]
source: https://www.nber.org/papers/w35275
---

# 코드 생산 +180%인데 릴리스는 +30% — 병목은 "쓰기"에서 "리뷰·통합·배포"로 옮겨갔다 (NBER, 개발자 10만 명+ 실측)

> **채택 근거**: MIT 경제학과 Mert Demirer·Wharton(Penn) Leon Musolff·MIT Liyuan Yang의
> NBER Working Paper #35275 "Writing Code vs. Shipping Code: Productivity Effects Across
> Generations of AI Coding Tools"(2026-05, MIT Sloan Research Paper로도 게재). 본 위키는 이
> 원 논문의 초록·MIT Sloan 공식 소개 기사(Ideas Made to Matter)로 핵심 수치를 3중 대조했다.
> Dr. Philippa Hardman(L&D 1차 논객, drphilippahardman.substack.com)의 2026-06-04 글
> "AI is making you faster AND slower, better AND worse at your job"가 이 연구를 L&D
> 맥락으로 번역해 소개한 것이 발견 계기이지만, **수치의 1차 근거는 원 논문이며 Hardman은
> 전달·해석 매체로만 인용한다.**

## 무엇을 실증했나

**GitHub 개발자 10만 명 이상**의 실제 사용 텔레메트리를 추적해, AI 코딩 도구
3세대(자동완성 → 동기 에이전트[사람과 나란히 작업] → 비동기 에이전트[스스로 실행])가
**코드 작성 단계부터 실제 배포까지 전체 파이프라인의 각 단계**에 미치는 영향을 측정했다.

## 핵심 수치 (원 논문 초록 원문 인용, 2곳에서 대조)

| 단계 | 누적 효과 |
|---|---|
| 코딩 활동("커밋") — 자동완성 | **+40%** |
| 코딩 활동("커밋") — 동기 에이전트까지 | **+140%** |
| 코딩 활동("커밋") — 비동기 에이전트까지 | **+180%** |
| 프로젝트 수 | **+50%**로 축소 |
| 실제 릴리스(배포) | **+30%**로 축소 |

원문(초록) 인용: *"autocomplete, interactive coding agents, and autonomous coding
agents each significantly increase coding activity ('commits'), with respective
cumulative effects of 40%, 140%, and 180%... the 180% cumulative effect falls to 50%
for the number of projects, and to 30% for actual releases."*

- **AI-인간 대체탄력성(elasticity of substitution) 약 0.25** — 강한 상호보완성(사람 없이는
  AI 산출물이 완결되지 않음)을 뜻하는 낮은 수치. (초록 인용 출처마다 0.23~0.25로 미세한
  편차가 있어 근사치로 표기 — 두 곳에서 "0.25"로 일치 확인, 한 곳은 "0.23"으로 보고해
  **소수점 자리는 [추정 범위]로 남긴다**.)
- 결론 원문: *"Large task-level AI productivity gains have therefore translated only
  partially into shipped and used software thus far."*
- Hardman의 글이 인용한 세부 수치(자동완성 LOC +228%, 에이전트 +740%, 리뷰 요청 +65%,
  최종 릴리스 +20%)는 **원 논문 초록에 없는 하위 지표**로, 이번 대조에서 원문 확인은
  하지 못했다 — Hardman 글 자체의 2차 해석으로 표기하고 위 표의 커밋/프로젝트/릴리스
  수치(초록 직접 인용)와 구분해서 읽을 것.

## 메커니즘 — "약한 고리(weak-link)" 가설

AI가 빨라진 것은 파이프라인의 가장 앞단(코드 작성)뿐이다. 그 뒤의 **리뷰·통합·배포는
여전히 사람이 처리 용량을 그대로 쥐고 있는 단계**라서, 앞단에서 폭증한 산출물이
뒤로 갈수록 흡수되지 못하고 쌓인다. 병목이 "코드를 못 써서"에서 "쓴 코드를 검토·통합·
배포할 사람이 부족해서"로 이동했다는 것이 이 연구의 핵심 주장이다.

## 이 위키의 다른 결과와의 관계

- [[ai-roi-three-stage-ladder-congestion]] — Exponential View의 "정체(congestion)" 개념과
  정확히 같은 현상을 코드 파이프라인이라는 구체적 데이터로 실증한다. "AI가 실행 단을
  빠르게 만들수록 그 위 의사결정·검토 레이어가 그대로면 병목만 이동한다"는 그 글의
  주장을, 이 연구는 **커밋 +180% → 릴리스 +30%**라는 숫자로 보여준다.
- [[ai-agents-are-not-employees]] — Hardman의 글이 이 연구의 처방 중 하나로 직접 인용:
  "AI 버디/코치/멘토" 프레이밍이 리뷰어를 더 부주의하게 만든다는 Kropp et al.(2026, 이
  위키의 해당 페이지) 결과를 근거로 "의인화 언어를 걷어내고 사람 책임을 명시하라"고
  권고한다.
- [[twilight-of-chatbots-agent-management-shift]] — 에이전트가 늘수록 사람의 일이
  "만들기"에서 "관리·검증"으로 옮겨간다는 방향이 같다.

## 강의·AX 활용 포인트

- **AX**: "AI 도입 후에도 체감 성과가 안 보인다"는 경영진 질문에 쓸 수 있는 가장 구체적인
  실측 근거. "속도가 아니라 처리 용량(리뷰·통합·배포)에 투자해야 한다"는 결론이 명확하다.
  AI Leader Program(임원)의 AX 실행안 도출 모듈에서 ROI 측정 설계 사례로 쓸 수 있다.
- **강의**: AI Agent Service의 Mastery Course(설계~배포, 평가·서빙 실습)에서 "에이전트가
  빨라질수록 배포 파이프라인의 리뷰·평가 단계를 함께 설계해야 한다"는 근거 데이터로
  바로 쓸 수 있다 — 이 연구의 원 데이터가 정확히 그 파이프라인(커밋→프로젝트→릴리스)을
  다룬다.
- **한계**: 표본이 GitHub 공개 활동 기반 개발자로, 사내 비공개 리포지토리·기업 내부
  개발 프로세스에는 그대로 일반화하기 어렵다. 대체탄력성 수치의 정확한 소수점은
  출처 간 편차로 [추정 범위]로만 남긴다.

## 출처

- NBER Working Paper #35275: https://www.nber.org/papers/w35275
- 논문 PDF: https://www.nber.org/system/files/working_papers/w35275/w35275.pdf
- RePEc 초록: https://ideas.repec.org/p/nbr/nberwo/35275.html
- MIT Sloan 공식 소개: https://mitsloan.mit.edu/ideas-made-to-matter/ai-boosts-worker-productivity-does-translate-to-final-outputs
- 전달 매체(2차, L&D 해석): https://drphilippahardman.substack.com/p/ai-is-making-you-faster-and-slower (좋아요 74건, 이 뉴스레터 자기 평균 대비 낮으나 sources.md가 교육 방법론 소스로 지정)
