---
type: use-case
date: 2026-08-13
tools: [claude-code]
mechanism: [cron-routines, second-brain]
domain: dev-automation
task: 고객 이메일 버그 리포트 트리아지·문서 최신화 점검·앱 로그 모니터링·자체 티켓 관리
outcome: SQLite 티켓 DB로 600여 건 자체 관리 (자기보고, 제3자 검증 없음)
model: 미확인
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://old.reddit.com/r/ClaudeAI/comments/1vnnpur/example_of_a_real_working_loop_orchestrator/
---

> **공식**: Claude Code로 heartbeat 루프 오케스트레이터를 활용해 고객 문의 트리아지·문서 점검·
> 로그 모니터링을 수행 → SQLite DB에 600여 건의 티켓을 자체 관리

## 무엇을 자동화했나

20년차 시니어 엔지니어·디자이너가 개인적으로 만든 "Lloyd"라는 이름의 루프 오케스트레이터 사례.
정해진 주기(heartbeat)로 깨어나 다음을 수행한다.

1. 이메일에서 신규 고객 버그 리포트 확인 + 과거 관련 티켓 조회 (컨텍스트 없이 바로 작업 착수)
2. 웹사이트 문서가 최신 상태인지 점검
3. 앱 실행 로그를 훑어, 에러로 기록되지 않았지만 "시끄러운(noisy) 문제"를 발견
4. 위 과정에서 찾은 버그·개선 아이디어를 스스로 티켓으로 등록해 사람이 트리아지할 수 있게 남김

## 어떻게 구성했나 (아키텍처)

- Claude Code 오케스트레이터에 여러 개의 "playbook"(자동화 스크립트)을 연결해 이메일 확인 같은
  반복 작업을 표준화.
- 로컬 SQLite 테이블을 "자체 내부 Jira"처럼 사용 — 세션이 끝나도 티켓 이력이 DB에 남아, 다음
  실행에서 관련 과거 티켓을 조회할 수 있다(세션 간 기억을 파일이 아니라 구조화 DB로 영속화하는
  패턴).
- "heartbeat" 개념으로 주기적 실행 루프를 돌리고, 각 턴마다 발견한 "pulse action item"을 처리한
  뒤 다음 주기로 넘어간다.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 설계 | 미확인 — 사람 검토 게이트 유무가 원문에 명시되지 않음 |
| 성숙도 | prototype (개인 도구, 회사명 비공개) |

## 성과와 수치

- "600여 개 티켓을 관리했다"는 작성자 본인의 서술(anecdotal). 처리 시간 절감, 비용, 정확도 등
  정량 수치는 원문에 없다.

## 재현 가이드 (난이도: 중)

1. Claude Code에 이메일·로그·문서 접근용 커넥터 또는 스크립트("playbook")를 연결한다.
2. SQLite 같은 경량 DB에 티켓 테이블(제목·상태·관련 이력)을 설계한다.
3. 주기 실행(heartbeat) 트리거를 cron이나 스케줄 태스크로 구성한다.
4. 매 실행 턴마다 "확인 → 과거 이력 조회 → 필요 시 티켓 생성" 순서로 처리하도록 프롬프트/스킬을
   설계한다.
5. 자동 등록된 티켓을 사람이 최종 트리아지하는 검토 지점을 반드시 남긴다(원문에는 이 부분이
   명시되지 않아 재현 시 직접 설계 필요).

## 강의·AX 활용 포인트

- "세션 간 기억을 DB로 영속화"하는 패턴은 강의에서 에이전트 메모리 설계 예시로 쓰기 좋다.
- 로그에서 "에러로 기록되지 않은 조용한 문제"까지 찾아내는 방식은 AX 관점에서 운영팀의
  프로액티브 모니터링 벤치마크로 인용할 수 있다.
- 다만 개인 프로젝트·자기보고 수치라는 한계, 그리고 발송/커밋 등 실제 액션에 대한 권한 설계가
  공개되지 않았다는 점을 강의·보고서에 반드시 함께 언급해야 한다.

## 출처

- [Reddit r/ClaudeAI — Example of a real working loop orchestrator](https://old.reddit.com/r/ClaudeAI/comments/1vnnpur/example_of_a_real_working_loop_orchestrator/)
