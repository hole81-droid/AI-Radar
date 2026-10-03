---
type: update
date: 2026-09-30
tools: [claude, claude-code]
importance: medium
uses: [ax]
source: https://www.anthropic.com/news/claude-in-amazon-bedrock-fedramp-high
---

# Claude for Government, FedRAMP High 환경에서 정식 출시(GA) — Claude Code·M365 조기접근 동반

> **소급 반영 메모**: 09-30 발표가 09-30~10-03 데일리 스캔에서 전부 누락돼 10-04
> 스캔에서 뒤늦게 반영한다. RSS·1차 채널에 바로 걸리지 않는 공식 발표는 WebSearch로
> 한 번 더 교차확인해야 한다는 기존 교훈(2026-08-30 Cowork 브라우저 소급 사례,
> 2026-09-01 Claudeforce 소급 사례)이 다시 확인된 경우다.

## 무엇이 바뀌었나

Anthropic이 2026-09-30 **Claude for Government**를 미 연방·주 정부 기관 대상
**FedRAMP High 인증 환경**에서 정식 출시(GA)했다. 2026-07 공개 베타 이후 약 2개월
만의 정식 전환이다.

- **관리 기능**: 선불 사용량 한도(하드 캡)와 사용자 그룹별 지출·모델 한도 설정, 사용량
  모니터링·잔액 알림, 관리자 작업 감사 로그, 민감 작업에 대한 **2인 승인(two-person
  approval)** 체계.
- **업무 기능**: 데스크톱 파일 직접 작업, Skills·Plugins·Projects로 메모 작성·RFP
  검토·케이스워크 등 수행.
- **동시 조기접근(early access) 개시**: 같은 FedRAMP High 환경에서 **Claude Code
  CLI**(정부 소프트웨어 개발용)와 **Claude for Microsoft 365**(정부 생산성 업무용)도
  조기접근을 시작 — 정부 영역에서 코딩·오피스 업무까지 Claude 표면을 동시에 확장.
- 같은 주(10-01) **Barclays가 Claude를 운영·고객경험 업무로 확대 적용**한다고 발표—
  민간 금융권에서도 규제 수준 거버넌스 요구가 높은 영역으로 Claude 채택이 이어지는
  흐름과 겹친다(세부 수치는 미확인).

## 왜 중요한가

- JPMorgan의 "상시 접근 권한 없는" 샌드박스형 Claude Code 도입
  ([[2026-09-17-jpmorgan-claude-code-devspace-sandbox]])에 이어, 이번엔 **정부 조달
  기준(FedRAMP High)을 통과한 표준 거버넌스 패키지**(지출 한도·2인 승인·감사 로그)가
  코딩 에이전트에까지 적용되는 사례다 — 민간·공공 양쪽에서 "에이전트 권한을 기본값으로
  제한하는" 설계가 표준으로 자리잡는 흐름을 보여준다.
- 정부 기관처럼 조달·보안 심사가 가장 까다로운 고객층에 코딩 에이전트(Claude Code)와
  생산성 도구(M365 연동)를 **동시에** 들여보냈다는 것은, Anthropic이 "안전하게 설계된
  에이전트 거버넌스"를 엔터프라이즈 영업의 핵심 차별점으로 삼고 있음을 보여준다.

## 활용 포인트

- **AX**: 규제 산업(금융·공공)에서 AI 에이전트를 도입할 때 참고할 거버넌스 체크리스트
  원형 — 지출 상한, 역할별 모델 접근 제한, 민감 작업 2인 승인, 감사 로그 4요소.
- **강의**: "일반 소비자용 AI 기능"과 "규제 환경용 AI 기능"이 같은 모델을 기반으로
  어떻게 다른 거버넌스 레이어를 둘러쓰는지 보여주는 대조 사례.

## 출처

- [Anthropic — Claude in Amazon Bedrock: Approved for Use in FedRAMP High and DoD IL4/5 Workloads](https://www.anthropic.com/news/claude-in-amazon-bedrock-fedramp-high)
- [TechRepublic — Claude for Government Is Now Generally Available to US Agencies](https://www.techrepublic.com/article/news-anthropic-claude-government-general-availability/)
- [WindowsForum — Anthropic Claude for Government Reaches GA: FedRAMP High Controls and Microsoft 365 Early Access](https://windowsforum.com/news/anthropic-claude-for-government-reaches-ga-fedramp-high-controls-and-microsoft-365-early-access.446994/)
