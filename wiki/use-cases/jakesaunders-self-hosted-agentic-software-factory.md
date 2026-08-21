---
type: use-case
date: 2026-08-21
tools: [codex, claude]
mechanism: [cli-pipeline, vibe-coding]
domain: dev-automation
task: 프롬프트 1회로 저장소 생성부터 프로덕션 배포까지 SDLC 전 과정 무인 완수
outcome: 추가 개입 없이 앱 개발+테스트+CI+배포 완료(정량 성과 미확인, 정성적 성공 사례)
model: Codex(주력, 구독), Claude(일부 능력에 병행 언급, 구체 역할 미확인)
cost: 월 £20(Codex 구독) — 그 외 인프라 비용 미확인
permissions: 완전 자율 — 외부 인그레스 없는 자체 서버·VPN 격리 환경에서 사람 승인 게이트 없이 실행
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://blog.jakesaunders.dev/building-an-almost-fully-self-hosted-sandboxed-agentic-software-factory/
---
# 개인 개발자, (거의) 완전 셀프호스팅 샌드박스로 "에이전틱 소프트웨어 팩토리" 구축

> **공식**: Codex(+Hermes 에이전트 프레임워크, cli-pipeline)를 활용해 프롬프트 1회로
> 저장소 생성→개발→테스트→CI→배포까지 SDLC 전 과정을 수행 → 사람 개입 없이 프로덕션
> HTTPS 배포까지 완주

## 무엇을 자동화했나

"칼로리 트래커 앱 만들어줘" 같은 자연어 프롬프트 한 번으로, 에이전트가 Git 저장소
생성부터 풀스택 앱(SvelteKit+Drizzle ORM+PostgreSQL) 개발, 테스트 작성, CI 그린,
Docker 컨테이너화, SSL 포함 프로덕션 배포까지 사람의 추가 메시지 없이 완주하는
개인용 개발 파이프라인. 배포 후 발견된 CSRF 버그도 에이전트가 스스로 진단·수정했다.

## 어떻게 구성했나 (아키텍처)

- **추론**: Codex(월 £20 구독)가 주력, Claude도 일부 사용된다고 언급(역할 비구체적)
- **오케스트레이션**: Hermes(OpenClaw 스타일 개인비서형 에이전트 프레임워크)
- **격리(샌드박스)**: eBay에서 구입한 2021년형 i7·32GB RAM 서버, 외부 인그레스 없음
  (포트포워딩 없음), Tailscale VPN으로만 접근, Pi-hole DNS 규칙으로 내부 서브도메인만
  노출, DNS-01 ACME 검증으로 공개 A레코드 없이 SSL 발급
- **구성요소**: Forgejo(셀프호스팅 Git+CI 러너) · Coolify(셀프호스팅 PaaS, 배포 관리) ·
  Firecrawl(셀프호스팅 스크래핑/웹 접근 레이어) · Docker Compose(컨테이너화)

## 벤치마크 데이터

| 항목 | 값 | 근거 |
|---|---|---|
| 모델 | Codex(주력)+Claude(일부, 구체 역할 미확인) | 원문 서술 |
| 비용 | Codex 구독 월 £20 — 서버·인프라 비용은 "eBay 중고" 언급뿐, 총액 미확인 | 원문 |
| 권한 설계 | 완전 자율 실행 — 승인 게이트 없음, 대신 네트워크 격리(VPN·DNS만 노출)로 리스크 통제 | 원문 |
| 성숙도 | prototype — 개인 실험 프로젝트, 프로덕션 서비스 아님 | 자체 판단 |
| 증거 수준 | anecdotal — 개인 블로그 1건, 제3자 검증 없음 | 자체 판단 |

## 성과와 수치

- "프롬프트 한 번으로 저장소 생성, 앱·테스트 작성, CI 그린, Postgres 프로비저닝, HTTPS
  뒤 배포까지 추가 메시지 없이 완료됐다"(저자 인용)
- 정량 지표(소요 시간·총비용 등)는 원문에 없음 — 성공 여부는 정성적 서술 기준

## 재현 가이드

- **난이도**: 상 (자체 서버 조달·네트워크 격리 설계·여러 셀프호스팅 컴포넌트 연동 필요)
- **준비물**: 외부 노출 없는 전용 서버, Tailscale 등 VPN, Codex/Claude 구독, Forgejo·
  Coolify·Firecrawl 셀프호스팅 환경
- **핵심 단계**:
  1. 네트워크 격리부터 설계한다 — 포트포워딩 없이 VPN으로만 접근 가능하게 구성
  2. 자체 Git+CI(Forgejo), 배포(Coolify), 웹 접근(Firecrawl)을 미리 셀프호스팅해둔다
  3. 에이전트 프레임워크(Hermes 등)가 이 도구들을 도구로 호출하도록 연결한다
  4. 승인 게이트 대신 "네트워크 밖으로 나갈 수 없는" 환경 자체를 안전장치로 삼는다

## 강의·AX 활용 포인트

- **강의**: "완전 자율 에이전트에게 권한을 얼마나 줄 것인가"라는 질문에 대해
  [[gpt-5-6-sol-autonomous-business-failure]](권한 남용 반면교사)와 대비되는 답 —
  승인 게이트 대신 네트워크 격리로 리스크를 통제하는 설계 패턴.
- **AX**: 사내에서 "완전 자율 배포"를 시도한다면 이 사례처럼 인프라 자체를 격리하는
  방식이 사람 승인 병목 없이도 안전을 확보하는 대안이 될 수 있음을 보여준다. 단
  프로토타입 단계 개인 사례이므로 프로덕션 채택 근거로는 보조 자료로만 활용할 것.

## 출처

- [블로그 원문 — Building an (almost) fully self-hosted, sandboxed, agentic software factory](https://blog.jakesaunders.dev/building-an-almost-fully-self-hosted-sandboxed-agentic-software-factory/)
- [Hacker News 토론(65점)](https://news.ycombinator.com/)
