---
type: use-case
date: 2026-07-21
tools: [claude-code]
mechanism: [cli-pipeline]
domain: dev-automation
task: PR 기반 CI 파이프라인으로 다중 Claude Code 세션 병렬 개발의 코드 품질을 게이트
outcome: 회귀테스트 2,000+건·코드품질 검사 10종 통과해야 배포, 세션 3~5개 동시 운영 지속 (주장)
model: 미확인
cost: 미확인
permissions: Claude가 dev 브랜치로 PR 오픈 → GHA 자동 검사(1분) 통과 후 병합, dev→master 승격 시 DB 마이그레이션·Playwright 헤드리스 클릭스루까지 포함한 심화 게이트 추가
maturity: production
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://old.reddit.com/r/ClaudeAI/comments/1v28snk/if_youre_not_already_using_a_ci_pipeline_with/
---

# Claude Code 다중 세션 + PR 기반 CI 파이프라인으로 "세션 간 혼선" 해결

> **공식**: Claude Code로 Git worktree 기반 다중 세션 + GitHub Actions PR 파이프라인(cli-pipeline)을
> 활용해 대형 개인 프로젝트의 코드 품질 관리를 수행 → 세션 3~5개 동시 운영, 회귀테스트 2,000+건 게이트

## 무엇을 자동화했나

30년차 소프트웨어 엔지니어인 작성자는 Claude Code Max 계정 2개를 매주 소진할 정도로 헤비 유저다.
개인 프로젝트로 시작한 것이 사실상 SaaS급 제품으로 커지면서, 여러 Claude Code 세션 사이에서
정보를 복사·붙여넣기하고 코드베이스에 임시 마크다운 문서 수십 개가 쌓이는 문제에 부딪혔다.
기능 개발을 3일간 완전히 멈추고 PR 기반 CI 파이프라인 구축에 전념한 뒤 "훨씬 일찍 했어야 했다"고
평가했다.

## 어떻게 구성했나 (아키텍처)

- **브랜치 전략**: `master`(운영 서버가 추종) / `dev`(개발 서버가 추종) 이원화.
- **세션-워크트리 매핑**: Claude Code 세션마다 `dev`에서 분기한 PR 브랜치 + 격리된 Git worktree를
  할당. 세션이 작업을 마치면 `dev`로 PR을 오픈.
- **1단계 게이트(빠름, ~1분)**: GitHub Actions가 PR마다 기본 린트·유출 시크릿 검사 등을 실행.
- **2단계 게이트(심화)**: `dev`에 작업이 누적되면 `master`로 승격 PR을 열고, DB 마이그레이션
  검증 + 실제 헤드리스 브라우저(Playwright)로 웹사이트 클릭스루 자동화까지 수행. 전부 통과해야
  운영 서버 배포.
- **LLM 특화 결정론적 게이트**: 금지어(LLM-slop 단어) 검사, cyclomatic complexity 검사(LLM이
  장황한 단일 함수를 작성하는 경향 억제) 등을 별도로 추가.
- **세션 간 통신**: 마크다운 산개 대신 전부 GitHub Issues로 이전 — Claude가 CLAUDE.md의 LLM
  최적화 지침에 따라 스스로에게 메모를 남기고, 버그 리포트를 열고 닫고, 조밀한 세션 인계 문서를
  작성하고, 할일을 추적.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Max 플랜 계정 2개 언급, 특정 모델명 없음) |
| 비용 | 미확인 |
| 권한 | Claude가 PR을 열고 GHA가 자동 게이트, 사람은 dev→master 승격 시점에만 개입 |
| 성숙도 | production — 실제 SaaS 제품에 적용, 3~5개 세션 상시 운영 중 |

## 성과와 수치

- 회귀테스트 2,000건 이상 + 코드 품질 검사 약 10종을 통과해야 배포되는 구조를 갖췄다는 자기 보고
  (**claimed**, 정량 검증 자료 별도 공개 없음).
- 테스트 실패 시 Claude가 스스로 확인·수정 후 PR을 재병합하는 루프까지 구축했다고 주장.
- Reddit 169개 댓글 중 상위 댓글은 "30년차 엔지니어가 애초에 CI가 없었다는 게 놀랍다"는 반응 —
  즉 이 사례의 새로움은 "CI를 처음 도입했다"는 데 있는 게 아니라 **"LLM 세션 간 혼선을 CI/PR
  구조로 해결했다"**는 프레이밍에 있다.

## 재현 가이드

- **난이도**: 중
- **준비물**: GitHub 저장소, GitHub Actions, Git worktree 사용법, Playwright(심화 게이트용)
- **핵심 단계**:
  1. `master`(운영)/`dev`(개발) 브랜치를 분리하고, Claude Code 세션마다 `dev`에서 분기한
     worktree를 할당해 병렬 작업 시 충돌을 원천 차단
  2. PR마다 도는 "빠른 게이트"(린트·시크릿 검사, ~1분)를 GHA로 구성
  3. `dev`→`master` 승격 PR에는 DB 마이그레이션 검증 + 헤드리스 브라우저 클릭스루 등 "심화 게이트"를 추가
  4. LLM 특유의 실패 패턴(장황한 함수, 상투어)을 겨냥한 결정론적 검사(cyclomatic complexity, 금지어)를 별도로 추가
  5. 세션 간 정보 공유는 markdown 산개 대신 GitHub Issues로 일원화하고 CLAUDE.md에 기록 규칙 명시

## 강의·AX 활용 포인트

- **강의**: "여러 에이전트 세션을 어떻게 안전하게 병렬 운영하는가"의 실전 답 중 하나가 새 오케스트레이션
  프레임워크가 아니라 **이미 익숙한 CI/CD·PR 리뷰 구조를 세션 경계로 재활용하는 것**이라는 점 —
  [[three-agents-nonstop-beads-worktree]](Beads+worktree 3-에이전트 사례)와 비교하며 "worktree
  격리 + 게이트" 패턴의 여러 변형을 함께 가르칠 수 있다.
- **AX**: 대형 코드베이스에 에이전트를 투입할 때 신뢰의 원천은 에이전트 자체의 신뢰도가 아니라
  **자동화된 다층 게이트(빠른 검사 → 심화 검사 → 사람 승인)**라는 설계 원칙. 기업 도입 시 그대로
  적용 가능한 거버넌스 참조 모델.

## 출처

- [r/ClaudeAI — If you're not already using a CI pipeline with your larger Claude Code projects, switch ASAP](https://old.reddit.com/r/ClaudeAI/comments/1v28snk/if_youre_not_already_using_a_ci_pipeline_with/)
