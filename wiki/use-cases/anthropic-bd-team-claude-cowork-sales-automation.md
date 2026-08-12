---
type: use-case
date: 2026-08-07
tools: [claude-cowork]
mechanism: [skills, cron-routines, mcp]
domain: sales
task: 세일즈 인바운드 응답·아웃바운드 프로스펙팅·디스커버리콜 평가 자동화
outcome: 인바운드 응답 하루 5시간 수작업 → 검토만 필요한 초안으로 전환, 담당자 1인당 100개+ 계정 동시 관리
model: 미확인
cost: 미확인
permissions: 전 발송 건 사람 검토·승인 필수(read+draft, send는 사람), Salesforce 업데이트도 담당자 명시 승인 대기
maturity: production
evidence: claimed
importance: high
uses: [course, ax]
source: https://claude.com/blog/how-anthropics-business-development-team-uses-claude-to-run-inbound-and-outbound-at-scale
---

# Anthropic BD팀, Claude Cowork로 세일즈 인바운드·아웃바운드 전체를 운영

> **공식**: Claude Cowork로 Skills·예약 태스크·다중 커넥터를 활용해 세일즈 인바운드 응대와
> 아웃바운드 프로스펙팅을 수행 → 인바운드 응답 하루 5시간 수작업이 검토만 필요한 초안 작성으로
> 전환, 담당자 1인당 100개 이상 계정 동시 관리 가능해짐

## 무엇을 자동화했나

Anthropic 자체 BD(Business Development)팀이 자사 제품 Claude Cowork를 실제 영업 조직 운영에
투입한 "자체 사용(dogfooding)" 사례다. 두 축으로 나뉜다.

- **인바운드**: 세일즈 지식베이스(자주 받는 질문·답변 문서)를 Claude가 참조해 문의 이메일에
  답장 초안을 작성. 인박스 스킬이 매시간 돌며 신규 문의를 트리아지하고, 노쇼·이탈 프로스펙트를
  감지해 알림.
- **아웃바운드**: 야간 예약 태스크가 담당자의 전체 계정 리스트를 훑어 계정 리서치·프로스펙팅을
  수행. 디스커버리콜 녹취를 세일즈 플레이북 기준으로 평가해 스코어카드를 생성하고, 신규 리드에게
  담당자별 문체를 반영한 퍼스널라이즈드 첫 접촉 이메일 초안을 준비.

## 어떻게 구성했나 (아키텍처)

- **Skills**: 인박스 관리, 콜 코칭, CRM 동기화, 리드 아웃리치 — 4종의 스킬로 업무를 모듈화
- **Scheduled Tasks(cron-routines)**: 야간 시간대에 전체 계정 대상 프로스펙팅을 예약 실행
- **Connectors(mcp)**: Salesforce, Gmail, Google Calendar, Apollo, Common Room, Gong, 내부
  데이터 웨어하우스까지 연결해 CRM·이메일·통화 데이터를 넘나듦
- **Voice Profiles**: 담당자마다 커스텀 라이팅 스타일 템플릿을 둬 초안이 "AI가 쓴 티"가 나지
  않도록 처리
- 팀 전체가 공유 플러그인 저장소를 두고 지속적 피드백 루프를 스킬 개선에 반영하는 구조

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 설계 | 모든 발송은 사람이 초안을 읽고 수정 후 직접 전송("keep a person on every send"). Salesforce 업데이트 제안도 담당자의 명시적 승인 대기, 승인 사유가 시스템 개선용으로 기록됨 |
| 성숙도 | production — 팀 전체 배포, 공유 플러그인 저장소 운영 중 |

## 성과와 수치

- 인바운드 관리: "하루 약 5시간" 수작업 응대 → 간단 검토만 필요한 초안 작성 체제로 전환 (주장,
  출처: 원문 인용)
- 담당자 1인당 "100개 이상 계정" 동시 관리 (주장)
- 담당자 인용: "동료들과 나는 반복적인 수작업에 쓰는 시간이 줄고, 정작 중요한 일 — 고객을 돕는
  일 — 에 더 많은 시간을 쓴다"

정량 수치는 모두 Anthropic 공식 블로그의 자기 보고(self-reported)이며, 제3자 검증 수치는
아니다. 시간당 처리 건수, 정확도, 오탐률 등 세부 벤치마크는 원문에 없다(미확인).

## 재현 가이드

**난이도**: 중 (Cowork Skills·Connectors 설정 경험 필요, Salesforce 등 CRM 연동 권한 필요)

**준비물**: Claude Cowork 접근 권한(Team/Enterprise 권장), Salesforce/Gmail/Calendar 등
연동할 CRM·이메일 계정, 세일즈 지식베이스 문서(FAQ), 세일즈 플레이북

**핵심 단계**
1. 인바운드 FAQ·플레이북을 문서화해 Claude가 참조할 지식베이스로 등록
2. 인박스 트리아지·콜 코칭·CRM 동기화·리드 아웃리치 스킬을 개별적으로 구성
3. 계정 리스트 기반 야간 프로스펙팅을 예약 태스크로 설정
4. Salesforce·Gmail·Calendar 등 필요한 커넥터 연결
5. "발송 전 사람 검토" 게이트를 처음부터 설계에 포함 — 신뢰 구축 전까지 자동 발송 금지

## 강의·AX 활용 포인트

- **강의 소재**: Skills + Scheduled Tasks + Connectors 조합으로 "부서 전체 워크플로우"를
  자동화하는 대표 패턴 — 코딩 없이 비개발 조직(세일즈)이 AI 에이전트를 도입하는 예시로 적합
- **AX 근거**: 벤더(Anthropic) 자신의 영업 조직이 자사 제품으로 실제 운영 중이라는 점에서
  "자체 사용 검증(dogfooding)" 사례로 신뢰도가 상대적으로 높음. 다만 수치가 자기 보고라는
  한계는 명시해야 함
- **재현 시 주의**: "사람이 모든 발송을 검토"하는 권한 설계가 핵심 안전장치 — 완전 자동 발송으로
  단순화하면 오발송·오정보 리스크가 커짐. 도입 시 이 게이트를 생략하지 말 것

## 출처

- https://claude.com/blog/how-anthropics-business-development-team-uses-claude-to-run-inbound-and-outbound-at-scale
- raw/2026-08/anthropic-bd-team-claude-cowork.md
