---
type: concept
date: 2026-05-06
tools: []
importance: medium
uses: [ax, course]
programs: [AI Agent Service 개발자 — Essence for PO]
source: https://joshbersin.com/2026/05/servicenow-pushes-the-envelope-on-enterprise-ai-with-vision-of-managing-everything/
---

# 엔터프라이즈 AI 에이전트 거버넌스 경쟁 — ServiceNow·SAP가 "관리 계층"을 판다

> **출처 유형**: **아티클(애널리스트 벤더 분석) 2건** — Josh Bersin, ServiceNow 편(2026-05-06)·
> SAP 편(2026-05-17). 저자는 벤더 컨설팅·자문 사업을 겸하는 HR 애널리스트로, 벤더 발표
> 내용을 기술적으로 타당하다고 평가하면서도 비판적 논점도 함께 제시한다.

## 무엇인가

2026년 5월 ServiceNow와 SAP이 잇달아 "우리 플랫폼이 기업 내 모든 AI 에이전트를
관리·통제하는 계층이 되겠다"는 전략을 발표했다. 두 사례 모두 **개별 AI 기능 추가가
아니라, 기존 업무 시스템 전체를 에이전트 관리 플랫폼으로 재정의**하는 방향이라는
공통점이 있다.

## ServiceNow — Action Fabric·Otto·AI Control Tower (2026-05-06)

- 4년 내 매출 2배($30억) 목표, **"모든 AI 에이전트의 관리 도구·보안·진입점"**을 자처.
- **Action Fabric**: 모든 모델·에이전트 활동을 감시하는 관리 계층(인증·권한범위·감시).
- **Otto**: Moveworks·NowAssist 통합 직원경험 에이전트("엔터프라이즈 진입점").
- **AI Control Tower**: 에이전트 발견·관찰·통제·보안, ROI 계산, 악의적 명령 주입 자동 차단.
- **Autonomous Workforce**: Site Reliability·HR Service Delivery·Case Management 등
  사전 정의된 AI 전문가 역할.
- **Josh Bersin의 HR 2030 Blueprint와 연결되는 대목**: 저자는 조직이 에이전트를
  **실행 에이전트 / 규칙설정 에이전트 / 모니터링 에이전트** 세 유형으로 구분해
  정의해야 한다고 제안한다 — 우리 위키의 "권한·승인 설계" 논의와 같은 문제의식.

**저자의 비판**: 실제 기업 문제는 "혼란"이 아니라 "확장 가능한 ROI 사용 사례 구축"이며,
"모든 결정을 모니터링·관리"하는 발상이 직원 자율성을 과도하게 제한할 수 있다고 지적.
많은 ServiceNow 고객이 구매한 소프트웨어를 실제로 쓰지 않는 전례도 언급.

## SAP — Autonomous Enterprise (2026-05-17)

- SAP CEO 크리스찬 클라인: 통합 AI 플랫폼으로 에이전트를 구축·관리하고 핵심 업무를
  자동 실행하는 체계 발표. **224개 에이전트 + 51개 어시스턴트** 출시.
- **3단계 진화 모델**: 자동화(기존 프로세스 오류 자동 수정) → 최적화(프로세스 자체
  재설계, 5~10배 ROI 기대). 저자는 "웨이모 vs 개조된 일반 자동차" 비유로 설명.
- **Joule Studio**(에이전트 개발 도구), **SAP 지식 그래프**(비즈니스 규칙·데이터의
  의미론적 계층화), **AI Agent Hub**(관리·거버넌스).
- HR 분야 에이전트: 급여 오류 방지, 직원 개발, 채용, 경력 개발.
- **"회사 모형(company model)"**: 전사 운영 지식·정책을 대규모로 학습시켜 조직재편·
  인력재배치 시 숨은 우수 사례를 발굴한다는 아이디어 — 예: 영업팀 저성과의 원인이
  리더십·시장환경·팀구성 중 무엇인지 자동 진단.

## 왜 우리 맥락에 중요한가

두 벤더 모두 "에이전트를 어떻게 통제·관리할 것인가"를 제품화하고 있다는 사실 자체가,
**에이전트 권한·승인 설계가 이미 시장의 핵심 제품 카테고리로 굳어지고 있다**는
신호다. 특히 ServiceNow의 "실행/규칙설정/모니터링" 3분류는 우리 프로그램의
권한·승인 맵 설계 실습에 그대로 대입할 수 있는 어휘다.

## 한계

- 둘 다 **벤더 자체 발표**이며 독립적 성과 검증이 없다. SAP의 "5~10배 ROI"는 구체
  사례 없이 모델상 기대치로 제시됐다.
- 저자는 두 벤더의 컨설팅 고객일 가능성이 있어 평가에 상업적 이해관계가 섞였을 수
  있다(본문에서 비판적 논점도 병기하므로 완전한 옹호는 아님).

## 강의·AX 활용 포인트

- **AI Agent Service 개발자 — Essence for PO**: 권한·승인 맵 실습에서 "실행/규칙설정/
  모니터링" 3유형 분류를 시작점으로 쓸 수 있다. 지금 대개 승인 항목만 있는 맵에
  "누가 규칙을 정하고 누가 감시하는가" 축을 추가하는 논거.
- **CEO/C-Level 과정**: 에이전트 관리 플랫폼 구매가 곧 AI 전환이 아니라는 저자의
  경고("고객이 소프트웨어를 안 쓴다")는 벤더 도입 전 점검 리스트로 쓸 수 있다.

## 출처

- ServiceNow 편: https://joshbersin.com/2026/05/servicenow-pushes-the-envelope-on-enterprise-ai-with-vision-of-managing-everything/
- SAP 편: https://joshbersin.com/2026/05/saps-autonomous-enterprise-it-now-calls-itself-an-ai-company/
- 관련: [[bersin-multiagent-talent-acquisition]]

> 같은 주제의 다른 출처(2026-09-10 소급 백필에서 교차 연결): [[mit-sloan-adaptive-ai-governance-seven-companies]]
