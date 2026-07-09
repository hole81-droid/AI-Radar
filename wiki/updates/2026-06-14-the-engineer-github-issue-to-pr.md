---
type: update
date: 2026-06-14
tools: [claude-code]
importance: medium
uses: [course, ax]
source: https://github.com/FarzamMohammadi/the-engineer
---
# "The Engineer" — GitHub 이슈부터 병합된 PR까지 통째로 자동화하는 오케스트레이션 레이어

## 무엇이 있었나

Claude Code·OpenCode 같은 AI 코딩 CLI를 감싸 엔지니어링 생애주기 전체를 자동화하는
오픈소스 프로젝트 "The Engineer"가 공개됐다. GitHub 이슈 접수 → 요구사항 정리 →
코드/웹 조사 → 구현 계획 → 코드 작성 → 자체 리뷰 → PR 생성·병합까지 6단계 파이프라인을
자동화한다.

## 왜 중요한가

- 작업마다 별도 git worktree를 배정해 동시 실행 시 충돌을 막고 메인 저장소를 보호하며,
  비용 상한선과 "주요 결정에서 사용자 승인 요청"이라는 자율성 정책으로 안전장치를 둔다.
- 모든 작업을 ULID로 발행해 SQLite에 기록해 완전한 감사 추적을 남기는 등, 비교적 성숙한
  거버넌스 설계를 갖췄다.
- 코어가 프로토콜만 정의하고 플러그인이 구현하는 구조라 GitHub↔GitLab, Claude Code↔다른
  에이전트로 쉽게 전환 가능하다는 점도 특징이다.

## 활용/시사점

- 감사 추적·승인 정책·워크트리 격리를 갖춘 설계는 기업 개발팀의 "에이전트 거버넌스"
  강의 소재로 적합하다.
- AX 관점: 이슈 트래커부터 PR 병합까지의 전체 파이프라인을 감사 가능하게 만든 설계는
  기업이 에이전트 도입 시 요구하는 통제·추적 요건에 대한 참고 사례가 된다.
- 재현 난이도는 중간(플러그인 설정 필요).

## 출처

- [GitHub — FarzamMohammadi/the-engineer](https://github.com/FarzamMohammadi/the-engineer)
