---
type: use-case
date: 2026-10-20
tools: [claude-code]
mechanism: [vibe-coding, subagents]
domain: dev-automation
task: 여러 Claude Code 세션을 Mac 노치 UI에서 한 번에 보고·승인·응답하는 관리 앱 자체 개발
outcome: 무료 오픈소스(MIT) 공개 — 배포 전 "디자인 스튜디오" 패턴으로 약 240개 시나리오 전수 검증
model: 미확인 (Claude Code, 모델 버전 언급 없음)
cost: 미확인
permissions: 미확인
maturity: demo
evidence: anecdotal
importance: low
uses: [course]
source: https://www.reddit.com/r/ClaudeAI/comments/1xav00t/i_tried_to_put_real_craft_into_a_small_notch_app/
---

> **공식**: Claude Code로 vibe-coding + 서브에이전트 분업을 활용해 멀티세션 관리 앱 "Perch"를
> 제작 → 배포 전 약 240개 시나리오 전수 검증 패턴으로 품질 확보, MIT 오픈소스 공개

## 무엇을 자동화했나

여러 Claude Code 세션을 동시에 돌리는 개발자가, 창을 전환하지 않고 Mac 메뉴바 노치에서 모든
세션의 상태를 보고·승인·응답할 수 있는 앱 "Perch"를 Claude Code로 직접 제작해 공개했다. 전작
`crystl.dev`의 tmux 기반 멀티세션 관리([[crystl-tmux-claude-code-multi-session]])와 같은
문제(여러 에이전트 세션 동시 관리)를 GUI 앱으로 푼 사례다.

## 어떻게 구성했나 (아키텍처)

- **구현**: Claude Code가 Swift 앱 본체, UI, 그리고 노치에서 바로 응답할 수 있게 하는 훅(hook)
  코드까지 대부분 작성.
- **품질 확보 패턴("디자인 스튜디오")**: 실제 UI를 샘플 데이터로 그대로 띄우는 별도 페이지를 만들고,
  앱이 가질 수 있는 상태 약 240개 시나리오를 그 페이지에서 전수 점검. 저자가 "예스"하기 전에는
  아무 것도 배포되지 않는 게이트를 둠. 데모 트레일러 영상도 이 페이지에서 그대로 촬영.
- **범위**: 세션별로 무엇을 했는지 보기, 옵션 선택·답장을 창 전환 없이 처리, 원래 창·터미널
  창으로 바로 복귀하는 3가지 핵심 기능.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | demo (오픈소스 공개, 1인 프로젝트, macOS 15+ 전용) |
| 근거 수준 | anecdotal (제작자 본인 서술) |

## 성과와 수치

- 약 240개 상태 시나리오를 배포 전 전수 검증(저자 서술, 정확한 테스트 방법론 공개 안 됨).
- 무료·MIT 라이선스·100% 로컬 실행·텔레메트리 없음(실측 가능, 코드 공개).

## 재현 가이드 (난이도: 중)

1. 에이전트가 만드는 UI를 실제 데이터 흐름과 분리된 "샘플 데이터 스튜디오" 페이지로 먼저 본다.
2. 그 페이지에서 가능한 상태 조합을 전수 나열하고, 하나씩 승인한 것만 반영한다.
3. 데모 자료(트레일러·스크린샷)도 같은 검증 페이지에서 뽑아 실제 동작과의 괴리를 없앤다.

## 강의·AX 활용 포인트

"에이전트가 만든 UI를 사람이 어떻게 승인할 것인가"에 대한 구체적인 패턴이다 — 전수 시나리오
점검 후 게이트를 통과한 것만 배포하는 방식은, 기업이 AI 생성 UI/산출물의 품질보증 프로세스를
설계할 때 참고할 수 있는 저비용 모델이다.

## 출처

- [Reddit r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/comments/1xav00t/i_tried_to_put_real_craft_into_a_small_notch_app/)
- 관련: [[crystl-tmux-claude-code-multi-session]]
