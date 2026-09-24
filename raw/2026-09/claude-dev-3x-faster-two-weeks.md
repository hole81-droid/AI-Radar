# Anthropic — "How we made claude.ai 3x faster in two weeks"

- 원문: https://claude.dev/blog/how-we-made-claude-ai-faster/
- 게시일: 2026-09 (2026-08 스프린트 회고, HN 220점 09-23 재부상)
- 수집일: 2026-09-25

## 요지

Anthropic 내부 엔지니어링팀이 2026년 8월 2주 스프린트로 claude.ai·Claude 데스크톱 앱의
핵심 사용자 경험을 13개 측정 지표 기준 기하평균 3.1배 개선했다. 핵심은 "Claude가 무언가를
측정할 수 있게 되면, 그것을 더 빠르게 만들 수 있다"는 원칙 — 베타 버전 내부 연구 모델
"Claude Tag"(Opus 5.5급)가 병목 탐색→벤치마크 구축→PR 작성→배포 모니터링→필드 데이터
분석까지 사이클을 스스로 반복했다.

## 핵심 사실

- **측정 도구 체계**: Valgrind(`node --predictable`)로 CPU 명령어 수 계산, V8 정확 커버리지로
  함수 호출 횟수, React 커밋/스타일 재계산/DOM 변경 횟수 추적, Real User Monitoring.
- **거버넌스**: 모든 PR 자동 코드리뷰 + 최소 1명 인간 승인, 거의 모든 변경을 단기 기능
  플래그 뒤에 배포(약 200개 도입, 절반 이상 정리), 14개 뷰포트에서 1픽셀 내 정렬 테스트,
  점진적 롤아웃(직원→1%→전체).
- **래칫(ratchet) 시스템**: 벤치마크 개선 시 천장값 자동 하향, CI에서 회귀 감지(숫자는
  아래로만 이동 가능).
- **팀 구성**: Raymond Wang·Sam Attard·Issac G. 등 명명된 담당자, Boris Cherny가 방향 제시.
  경영진은 ambition(대담한 범위)·taste(스크린샷·영상 검증)·direction(스레드 우선순위)
  3가지로 조율.
- **성능 수치**(before→after): 앱 실행(Web) 3,085ms→550ms(5.6배), 대화 시작(Claude Code
  Desktop) 837ms→347ms(2.4배), 메시지 전송(Cowork Desktop) 928ms→48ms(19배), 긴 답변
  스트리밍 메인스레드 블로킹 750ms→200ms(3.75배), 120Hz MacBook 프레임율 60fps 유지→120fps.
- 3,000개 이상 PR 병합, 150개 이상 동시 스레드 운영, **고객 대면 인시던트·롤백 0건**.
- 부작용 발견: `location.reload()` 잔여 호출로 하루 50만 건 숨은 새로고침, Chrome
  주소창 입력 중 백그라운드 사전 렌더링으로 인한 레이아웃 시프트, em dash 등 비Latin-1
  문자가 문자열 전체를 UTF-16으로 전환시켜 정규식 성능을 떨어뜨리는 문제.

## 맥락

- HN에 09-23 "Once Claude can measure something, it can make it faster"라는 제목으로
  재부상(220점) — 원문 자체는 2026-08 스프린트를 다룬 8월 발행 글.
- use-case로 문서화: [[claude-ai-3x-faster-measurement-driven-optimization]]
