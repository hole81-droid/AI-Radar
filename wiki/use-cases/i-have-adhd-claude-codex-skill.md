---
type: use-case
date: 2026-07-28
tools: [claude-code, codex]
mechanism: [skills]
domain: personal-productivity
task: AI 코딩 에이전트(Claude Code·Codex)의 응답 스타일을 ADHD 친화적 구조로 자동 재구성
outcome: 정성적 — Reddit 320+ 댓글 화제, "Opus 5의 장황함을 멈추는 데 효과적"이라는 반응이 최다.
  다만 "몇 메시지 지나면 규칙을 잊는다", "너무 제한적으로 느껴진다"는 반례도 다수(정량 수치 미확인)
model: 미확인 (스킬 자체는 특정 모델에 종속되지 않음)
cost: 무료 (오픈소스 플러그인, 로컬 설치, 별도 API 비용 없음)
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course]
source: https://github.com/ayghri/i-have-adhd
---

# i-have-adhd — Claude Code·Codex 응답을 "행동 우선" 구조로 강제하는 출력 스타일 스킬

> **공식**: Claude Code·Codex(skills)로 규칙 기반 출력 스타일 플러그인(SKILL.md 10개 규칙)을
> 활용해 AI 응답을 ADHD 친화적 구조(행동 우선·번호매김·상태 유지)로 자동 재구성 → Reddit
> 320+ 댓글 화제, 효과 체감은 엇갈림(정성적, 정량 미확인)

## 무엇을 자동화했나

GitHub 사용자 u/ayghri가 만든 오픈소스 플러그인 `i-have-adhd`가 2026-07-28 r/ClaudeAI에서
"Whoever created the ADHD skill god bless you" 글로 재조명되며 화제가 됐다(원 게시자는 스킬
전문을 그대로 인용해 공유, 320개 이상 댓글).

- 이 스킬은 Claude가 장황하게 설명부터 시작하고 실제 답은 뒤에 묻어버리는 습관을 없애기 위해
  만들어졌다 — "결론부터, 실행 가능한 형태로" 응답하도록 강제하는 시스템 프롬프트 레이어.
- 코딩 작업뿐 아니라 디버깅·설명·계획·일상 대화 등 모든 응답에 적용되도록 설계됨.

## 어떻게 구성했나 (아키텍처)

플러그인은 `skills/i-have-adhd/SKILL.md`에 10가지 규칙을 저장하는 단순한 구조다.

1. 다음 행동으로 응답 시작 (맥락 설명이 아니라 실행 가능한 행동이 첫 줄)
2. 다중 단계 작업은 번호 매김, 한 단계당 하나의 유한한 행동
3. 구체적이고 2분 내 실행 가능한 다음 단계로 마무리
4. 곁가지(사이드 토픽) 억제
5. 턴 간 상태를 다시 언급(작업기억이 작아 화면 밖 내용은 잊는다는 전제)
6. 막연한 "약간의 작업" 대신 구체적 시간 추정치 제시
7. 진행 상황·성취를 눈에 보이게 표시(도파민 관련 설계)
8. 오류는 담담하게 처리
9. 목록은 5항목 이하로 제한
10. 전문 용어·인사말·불필요한 요약 제거

- **Claude Code 설치**: `claude plugin marketplace add ayghri/i-have-adhd` →
  `claude plugin install i-have-adhd@i-have-adhd` → `/i-have-adhd`로 세션별 호출,
  `touch ~/.claude/.i-have-adhd-always`로 상시 적용 가능
- **Codex 설치**: `$i-have-adhd` 명령으로 호출
- 사용자가 포크해 규칙을 직접 커스터마이징하는 것을 전제로 설계됨(원 저자가 "짧게 줄인 버전"도
  커뮤니티에서 다수 파생됨)

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 — 스킬은 출력 스타일 레이어로 특정 모델에 종속되지 않음(커뮤니티 언급은 주로 Claude Opus 5 기준) |
| 비용 | 무료 — 로컬 플러그인 설치, 별도 API 비용 없음 |
| 권한 | 미확인 |
| 성숙도 | prototype — 개인 오픈소스 프로젝트, 커뮤니티 확산 단계 |

## 성과와 수치

- **일화(anecdotal)**: "Opus 5의 장황한 답변을 즉시 멈추고 요점만 말하게 한다"는 호평이 최상위 댓글.
- **커뮤니티 반응 요약**(320+ 댓글 자동 요약 기준): ① 스킬로 두기엔 너무 길어 CLAUDE.md나
  커스텀 인스트럭션에 넣는 게 낫다는 의견과 GitHub 저장소의 "always-on" 모드를 쓰라는 의견이
  공존. ② 효과는 엇갈림 — 다수는 "Opus 5의 장황함을 잡는 데 효과적"이라고 보고했지만, 일부는
  "몇 메시지 지나면 Claude가 규칙을 잊고 다시 장황해진다"고 반박. ③ 모든 ADHD 사용자에게
  맞는 것은 아님 — 오히려 Claude의 상세한 답변을 선호하는 사용자도 상당수. ④ "행동 우선"과
  "인사말 생략" 규칙이 실질적으로 가장 효과적이라는 데는 대체로 공감대.
- 정량적 응답 길이 감소율·작업 완료율 등은 공개되지 않아 미확인.

## 재현 가이드

- **난이도**: 하
- **준비물**: Claude Code 또는 Codex, 터미널 접근 권한
- **핵심 단계**:
  1. Claude Code: `claude plugin marketplace add ayghri/i-have-adhd` 실행 후
     `claude plugin install i-have-adhd@i-have-adhd`로 설치
  2. 세션 중 `/i-have-adhd`로 호출하거나, 상시 적용을 원하면
     `touch ~/.claude/.i-have-adhd-always` 실행
  3. Codex 사용자는 `$i-have-adhd` 명령으로 동일 스타일 적용
  4. 규칙이 너무 엄격하거나 느슨하면 `SKILL.md`를 포크해 10개 규칙 중 필요한 것만 커스터마이징
  5. (선택) CLAUDE.md·커스텀 인스트럭션에 핵심 규칙(행동 우선, 인사말 생략)만 요약해 넣어
     스킬 호출 없이도 상시 적용되게 하는 커뮤니티 대안도 고려

## 강의·AX 활용 포인트

- **강의**: "시스템 프롬프트/스킬로 AI의 커뮤니케이션 스타일 자체를 사용자군에 맞게 커스터마이징한다"는
  개념을 보여주는 좋은 입문 사례 — 접근성(ADHD) 관점에서 AI UX를 설계하는 실습 소재로 활용 가능.
  동시에 "커뮤니티 반응이 엇갈렸다"는 점 자체가 "AI 스킬 하나로 모두를 만족시킬 수 없다 — 항상
  개인화·커스터마이징이 필요하다"는 교훈으로 다루기 좋다.
- **AX**: 사내 AI 도구 응답이 너무 장황해 실무자가 요점을 찾는 데 시간을 쓰는 조직이라면,
  이런 "출력 스타일 강제 레이어"를 사내 표준 CLAUDE.md/시스템 프롬프트에 반영하는 것을
  저비용으로 시도해볼 수 있다.

## 출처

- [Reddit r/ClaudeAI — Whoever created the ADHD skill god bless you](https://old.reddit.com/r/ClaudeAI/comments/1v8o1jn/whoever_created_the_adhd_skill_god_bless_you/)
- [GitHub — ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)
