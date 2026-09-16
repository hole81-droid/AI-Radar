# Anthropic 엔지니어링 — "Agentic coding is straining CI" (원본 요약)

- 원문: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic
- 게시일: 2026-09-14
- 저자: Sachin Malhotra
- HN 픽업: query=claude 검색 (본문 확인은 WebFetch로 직접 정독)

## 문제

Anthropic 엔지니어들의 분기당 코드 생산량이 기존(2021~2025) 대비 8배로 증가했고,
그중 80%를 Claude가 직접 작성한다. 6개월 사이 CI(지속적 통합) job 수가 25배로
폭증해 기존 테스트 선택(test impact analysis) 서비스가 감당하지 못했다.

## Test Impact Analysis란

PR마다 모든 테스트를 돌리는 대신, 과거 실행 이력과 코드 관련성을 바탕으로
어떤 테스트를 돌릴지 결정론적으로 선별하는 서비스. 특히 에이전트가 스스로
결과를 검증·반복(self-verify and iterate)하려면 정확한 테스트 컨텍스트가
필요하기 때문에 이 서비스의 정확도가 중요해졌다.

## 아키텍처와 확장 과정

기존 구조(listener가 테스트 결과 기록 + selector가 실행 테스트 결정)는 v0가
단일 프로세스(singleton)로 설계돼 수평 확장이 불가능했다.

- **1차 땜질(70일 지속)**: 머신 코어 수를 2배로.
- **2차 땜질(29일 지속)**: 코드 패키지 단위로 샤딩, listener 병렬화.
- **3차 땜질(1일 미만)**: 일일 재시작 — 효과 없음, 서비스가 시간 단위로 뒤처짐.

최종 재설계: 인메모리 데이터 스토어 + 상태 없는(stateless) listener 워커가
저널에 append하는 구조로 전환, 진짜 수평 확장과 메모리 제약 해소. 엔지니어
1명이 3주 만에 완성.

## 핵심 수치

- 코드량: 분기당 8배 증가
- Claude 저작 비중: 신규 코드의 80%
- 테스트 수: 코드베이스 전체 10배 증가
- CI job 수: 6개월간 25배 증가
- 패치 지속력: 70일 → 29일 → 1일 미만(악화 가속)

## 다른 엔지니어링 팀에 대한 조언

- v0 설계 단계부터 "2분기 안에 25배 부하"를 가정할 것
- Claude가 서비스를 모니터링·자율 최적화할 수 있도록 계측(instrument)할 것
- 입출력 job 수 일치 여부로 추적 신뢰성을 확보할 것
- 카나리 배포로 측정 가능하지 않다면 핵심 서비스에 싱글톤 구조를 피할 것
