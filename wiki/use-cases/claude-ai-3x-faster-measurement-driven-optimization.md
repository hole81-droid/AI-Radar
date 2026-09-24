---
type: use-case
date: 2026-09-23
tools: [claude-code]
mechanism: [subagents, cli-pipeline]
domain: dev-automation
task: claude.ai·Claude 데스크톱 앱의 프론트엔드·시스템 성능 최적화(웹앱 실행·메시지 전송·스트리밍 속도)
outcome: 13개 측정 지표 기하평균 3.1배 개선, 3,000+ PR 병합에도 인시던트·롤백 0건
model: Claude Tag(베타, Opus 5.5급 내부 연구 모델)
cost: 미확인
permissions: 모든 PR 자동 코드리뷰+최소 1명 인간 승인, 대부분 변경을 단기 기능 플래그 뒤에 배포
maturity: production
evidence: measured
importance: high
uses: [course, ax]
source: https://claude.dev/blog/how-we-made-claude-ai-faster/
---

> **공식**: Claude Code(Claude Tag 내부 연구 모델)로 측정 기반 자율 최적화 루프를 활용해 claude.ai·데스크톱 앱 성능 개선을 수행 → 13개 지표 기하평균 3.1배, 인시던트 0건

## 무엇을 자동화했나

Anthropic 내부 엔지니어링팀이 2026년 8월 2주 스프린트로 claude.ai 웹앱과 Claude
데스크톱 앱(Claude Code Desktop·Cowork Desktop 포함)의 핵심 사용자 경험 성능을
개선했다. 사람이 병목을 하나하나 찾아 고치는 대신, Claude(내부 연구 모델 "Claude
Tag")가 **병목 탐색 → 벤치마크 구축 → 코드 수정 PR 작성 → 배포 모니터링 → 실사용자
필드 데이터 분석**까지 전체 사이클을 스스로 반복하며 150개 이상의 스레드에서
비동기적으로 병렬 작업했다.

## 어떻게 구성했나 (아키텍처)

- **측정 우선 원칙**: "Claude가 무언가를 측정할 수 있게 되면, 그것을 더 빠르게 만들
  수 있다." 기존 방식(지표 추가→데이터 수집→이해→최적화)을 뒤집어, 지표를 추가하는
  즉시 Claude가 최적화를 시작하고 증명되면 그 값을 "래칫(ratchet)"으로 잠근다.
- **측정 도구 체계**: Valgrind(`node --predictable`)로 CPU 명령어 수, V8 정확
  커버리지로 함수 호출 횟수, React 커밋/스타일 재계산/DOM 변경 횟수, Real User
  Monitoring(실사용자 데이터).
- **거버넌스**: 모든 PR에 자동 코드리뷰 + 최소 1명 인간 승인 필수. 거의 모든 변경을
  단기 기능 플래그 뒤에 배포(약 200개 플래그 도입, 절반 이상 정리 완료), 14개
  뷰포트 크기에서 1픽셀 이내 정렬 보장 테스트, 점진적 롤아웃(직원→1%→전체).
  Slack 채널 기반으로 "스레드 개설 → Claude 문제 분석 → 벤치마크 구축 → PR 제출
  → 플래그 배포 → 필드 데이터 읽음 → 벤치마크 고정" 루프를 반복.
  경영진은 ambition(대담한 범위 권장)·taste(스크린샷·영상으로 사용자 인식 변경 검증)·
  direction(스레드 우선순위 결정) 3가지 축으로만 개입.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | Claude Tag(베타, Opus 5.5급 내부 연구 모델) + Datadog MCP 서버 |
| 비용 | 미확인 |
| 권한 | 자동 코드리뷰+인간 최소 1명 승인, 기능 플래그 뒤 배포, 단계적 롤아웃 |
| 성숙도 | production (claude.ai·데스크톱 앱 실사용자 전체 대상) |
| 근거 수준 | measured (Anthropic 공식 블로그, 구체 수치 다수 공개) |

## 성과와 수치 (실측)

| 여정 | 플랫폼 | Before | After | 개선도 |
|---|---|---|---|---|
| 앱 실행 | Web | 3,085ms | 550ms | 5.6배 |
| 대화 시작 | Claude Code Desktop | 837ms | 347ms | 2.4배 |
| 메시지 전송 | Cowork Desktop | 928ms | 48ms | 19배 |
| 긴 답변 스트리밍(메인스레드 블로킹) | Web/Desktop | 750ms | 200ms | 3.75배 |
| 120Hz MacBook 프레임율 | - | 60fps | 120fps 유지 | 체감 2배 |

- 13개 측정 지표 전체 기하평균 3.1배 개선(공식 수치).
- 3,000개 이상 PR 병합, 150개 이상 동시 스레드, **고객 대면 인시던트·롤백 0건**(측정,
  자사 발표).
- 부수 발견: `location.reload()` 잔여 호출로 하루 50만 건 숨은 새로고침, em dash 등
  비Latin-1 문자가 문자열 전체를 UTF-16으로 바꿔 정규식 성능을 떨어뜨리는 문제 등
  — 측정 인프라를 갖추자 사람이 놓쳤던 문제가 드러난 사례.

## 재현 가이드

**난이도: 상** (조직 차원의 관측성 인프라·거버넌스 설계가 선행 조건)

준비물:
- 성능을 정량화할 측정 도구 체계(프로파일러·커버리지 도구·RUM)
- CI에 통합 가능한 벤치마크 "래칫"(회귀 시 자동 차단) 구조
- PR 자동 리뷰 + 최소 1인 인간 승인 게이트, 기능 플래그 인프라
- 에이전트가 스스로 스레드를 열고 우선순위를 제안할 수 있는 협업 채널(이 사례는 Slack)

핵심 단계:
1. 성능 측정 지표를 먼저 정의·계측한다(지표가 없으면 에이전트가 최적화할 대상 자체가
   없다).
2. 에이전트에게 "이 지표를 개선하라"는 목표만 주고, 병목 탐색부터 PR 작성까지는
   맡긴다 — 사람은 우선순위·범위·사용자 체감(taste) 검증만 담당.
3. 모든 변경을 기능 플래그 뒤에서 점진적으로 배포하고, 벤치마크가 개선되면 그 값을
   래칫으로 고정해 회귀를 원천 차단한다.
4. 자동 리뷰 + 최소 1인 인간 승인을 항상 병행해, 대량 PR 처리량에도 안전장치를
   유지한다.

## 강의·AX 활용 포인트

- **강의**: "측정할 수 있어야 개선할 수 있다"는 원칙을 에이전트 활용 워크숍의 도입부
  사례로 쓰기 좋다 — 에이전트에게 모호한 지시("더 빠르게")가 아니라 측정 가능한
  목표를 줘야 하는 이유를 실제 3,000+ PR 규모로 보여준다.
- **AX**: 대량의 자율 PR을 안전하게 흡수하려면 "기능 플래그+단계적 롤아웃+래칫형
  회귀 방지"라는 3중 안전장치가 필요하다는 것을 조직 내 에이전트 거버넌스 설계
  체크리스트에 반영할 만하다. 같은 위키의 [[anthropic-agentic-coding-ci-test-impact-analysis]](CI
  부하 대응 사례)와 함께 "Anthropic이 자사 인프라에 Claude를 쓰는 방식" 시리즈로
  묶어 참고할 수 있다.
- 같은 장르의 커뮤니티 사례로 [[minimaxir-agentic-rust-performance-optimization]](개인
  개발자의 Rust 코드 반복 최적화)와 대비하면, "기업 인프라 규모의 측정 기반 최적화"
  vs "개인 프로젝트의 프롬프트 기법 기반 최적화"라는 두 축을 함께 가르칠 수 있다.

## 출처

- [Anthropic — How we made claude.ai 3x faster in two weeks](https://claude.dev/blog/how-we-made-claude-ai-faster/)
- [Hacker News(220점) — Once Claude can measure something, it can make it faster](https://news.ycombinator.com/item?id=49821196)
