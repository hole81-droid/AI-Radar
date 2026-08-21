# 개인 블로그: (거의) 완전 셀프호스팅 샌드박스 에이전틱 소프트웨어 팩토리 구축기

- 원문: https://blog.jakesaunders.dev/building-an-almost-fully-self-hosted-sandboxed-agentic-software-factory/
- 게시일: 2026-08-21 (HN 게재 기준)
- 수집일: 2026-08-22 (WebFetch로 원문 대조)
- 커뮤니티: Hacker News 65점 (https://news.ycombinator.com/, story id 관련 "Building an (almost) fully self-hosted, sandboxed, agentic software factory")

## 요지

개인 개발자가 프롬프트 한 번으로 저장소 생성→코드 작성→테스트→CI 통과→배포까지 사람 개입
없이 끝내는 "에이전틱 소프트웨어 팩토리"를 자체 서버에 구축한 과정을 정리한 블로그.

## AI 도구·에이전트 프레임워크

- **추론 엔진**: Codex(월 £20 구독)가 주력. Claude도 일부 능력에 사용된다고 언급.
- **에이전트 프레임워크**: Hermes(OpenClaw 스타일 개인비서형 에이전트 프레임워크)가
  오케스트레이션을 담당.

## 자동화한 작업

단일 자연어 프롬프트("칼로리 트래커 앱 만들어줘")로 에이전트가 독립적으로:
1. Git 저장소 생성
2. SvelteKit + Drizzle ORM + PostgreSQL 풀스택 앱 부트스트랩
3. 애플리케이션 코드·테스트 작성
4. CI 파이프라인 통과할 때까지 실행
5. Docker Compose로 컨테이너화
6. SSL 인증서까지 포함해 커스텀 도메인에 프로덕션 배포
7. 이후 발견된 CSRF 버그까지 스스로 진단·수정

## 아키텍처 (샌드박스 격리)

- eBay에서 구입한 2021년형 i7·32GB RAM 서버, 외부 인그레스 없음(포트포워딩 없음)
- Tailscale VPN을 통해서만 접근, Pi-hole DNS 규칙으로 내부 서브도메인만 노출
- SSL은 공개 A레코드 없이 DNS-01 ACME 검증으로 발급
- **오케스트레이션 구성요소**: Forgejo(셀프호스팅 Git+CI 러너), Coolify(셀프호스팅 PaaS,
  배포 관리), Firecrawl(셀프호스팅 스크래핑/웹 접근 레이어), Docker Compose(컨테이너화)

## 성과

"프롬프트 한 번으로 저장소 생성, 앱·테스트 작성, CI 그린, Postgres 프로비저닝, HTTPS 뒤
배포까지 추가 메시지 없이 완료됐다"(저자 인용). 정량 성과 지표(비용·시간 등)는 원문에
명시되지 않음 — 개인 프로젝트·정성적 서술 중심.
