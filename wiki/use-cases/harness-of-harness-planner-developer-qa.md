---
type: use-case
date: 2026-09-07
tools: [claude-code, codex]
mechanism: [subagents, cli-pipeline]
domain: dev-automation
task: 장시간 자율 코딩 에이전트 루프에서 흔한 회귀 재발("고친 걸 또 깨뜨림")과 완료 오판("안 되는 걸 됐다고 보고")을 막기 위해 Planner·Developer·QA 3역할 반복 호출 프로토콜을 Claude Code 서브에이전트·Codex 역할별 지시로 실무 이식
outcome: 원 논문 벤치마크 3종(GameCraft-Bench·FrontierSWE·ProgramBench) 평균 상대개선 52.25%(최대 82.86%), 동일 모델로 "계속 해줘"를 반복한 경우보다 루프 2회가 점수는 높고 토큰은 적음(5.67M vs 6.33M) — 원 논문 measured, AX LABS의 실무 이식 자체 효과는 미실측
model: Codex+GPT-5.5(high), OpenCode+DeepSeek-V4, Pi+MiniMax-M3 (원 논문 벤치마크 기준 3개 하네스·모델 조합). AX LABS가 실무용으로 옮긴 프롬프트 자체는 모델·하네스 비종속 설계
cost: HoH 2루프 5.67M 토큰(64.84점) vs "계속 개발해줘" 단순반복 3회 6.33M 토큰(58.24점); Full HoH 3루프 8.41M 토큰(71.52점, GameCraft-Bench); 절제실험에서 웜스타트를 빼면 토큰이 8.41M→11.12M(+32%)로 오히려 늘면서 점수는 63.67로 하락
permissions: Planner·QA Tester는 Read+Bash(실행용)만 가짐 — Edit·Write 금지, 코드 수정 불가. Developer만 전체 쓰기 권한 보유. Codex 실무 이식 시 `codex exec --sandbox read-only`(Planner/QA) vs `--sandbox workspace-write`(Developer)로 강제
maturity: prototype
evidence: claimed
importance: medium
uses: [course, ax]
programs: [AI Agent Service 개발자 — Mastery Course]
source: https://theaxlabs.com/blog/harness-of-harness-planner-developer-qa-prompts
---

> **공식**: Claude Code 서브에이전트 정의·Codex 역할별 지시(subagents+cli-pipeline)로
> Planner→Developer→QA 3역할을 같은 하네스·같은 모델로 반복 호출하는 루프를 구성 → 벤치마크
> 3종 평균 상대개선 52.25%(최대 82.86%), 70루프 자율 게임 개발까지 확장(원 논문 기준)

## 무엇을 자동화했나

상하이 AI Lab이 2026-09-01 공개한 논문 **"Harness-of-Harness: Multi-Day Autonomous
Software Development with Continual Improvement"**(Haoyang Yan et al.)는 Codex CLI·
OpenCode·Pi 같은 기존 코딩 하네스를 고치지 않고, 같은 하네스를 Planner·Developer·QA
Tester 세 역할로 나눠 반복 호출하는 프로토콜(HoH)을 제안한다. 국내 AX 블로그 AX LABS가
이 논문을 리뷰한 뒤, 논문 부록 A.2의 역할별 프롬프트 템플릿을 실무에 그대로 넣을 수 있는
형태로 옮기고 Claude Code·Codex·자체 에이전트 루프에 붙이는 방법까지 정리해 공개했다.
장시간 "계속 해줘" 방식의 단일 역할 반복 루프에서 흔히 나타나는 두 가지 문제 —
이전에 고친 부분이 새 변경으로 다시 깨지는 회귀, 그리고 안 되는 것을 됐다고 보고하는
완료 오판 — 을 역할 분리와 산출물 스키마 강제로 구조적으로 막는 것이 목표다.

## 어떻게 구성했나 (아키텍처)

같은 하네스·같은 모델을 한 루프에 세 번, 서로 다른 역할로 호출한다.

1. **Project Planner** — 코드 수정 금지, Read 전용. 명세와 이전 루프의 QA 증거만 보고
   이번 루프의 범위·관찰 가능한 검증 조건을 문서로 작성한다. 블로커·회귀를 신규 기능보다
   앞세우고, 우선순위는 최대 3개로 제한한다. 매 루프 새로 문서를 쓴다(이전 개발 문서 재사용
   금지).
2. **Developer** — 유일한 쓰기 권한. Planner의 문서를 기반으로 이전 코드를 이어서
   수정하고(웜스타트), 코드와 실행 기록을 산출한다.
3. **QA Tester** — 동결된 코드만 검사, 수정 불가. "소스 코드에 구현이 존재한다"를 검증으로
   인정하지 않고 실행 기록을 요구하며, verified/gap 형태의 증거 번들을 산출한다.

코드는 Developer→Developer로만 이어지고(웜스타트), 증거는 QA→Planner로만 전달된다.
Developer 이후 커밋을 넣어 QA가 검사할 후보를 동결하고 큰 회귀 발생 시 마지막 검증
상태로 되돌릴 수 있게 한다. AX LABS는 이를 두 갈래로 이식했다 — ① Claude Code:
`.claude/agents/`에 `planner.md`·`developer.md`·`qa-tester.md` 서브에이전트를 정의하고
루프는 메인 세션이 돌린다. ② Codex/OpenCode/Pi: 셸 루프에서 하네스를 세 번 호출하되
역할 프롬프트 파일과 작업 디렉토리 권한(`--sandbox read-only`/`workspace-write`)만 바꾼다
— 논문의 실제 구현 방식이 이 형태다.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델·하네스 | Codex+GPT-5.5, OpenCode+DeepSeek-V4, Pi+MiniMax-M3 (원 논문 벤치마크 3개 조합). AX LABS 실무 이식 프롬프트 자체는 모델 비종속 |
| 비용 | HoH 2루프 5.67M 토큰(64.84점) vs 단순반복 3회 6.33M 토큰(58.24점); 웜스타트 제거 시 8.41M→11.12M 토큰(+32%)으로 비용 증가 |
| 권한 | Planner·QA는 Read+Bash(실행)만, Edit/Write 금지. Developer만 전체 쓰기 권한 |
| 성숙도 | prototype — 학술 논문의 벤치마크 재현 + AX LABS의 실무 프롬프트 변환 공개. 자사 프로덕션 적용 사례는 없음 |
| 근거 수준 | claimed — 원 논문 수치는 measured(공개 벤치마크 실측)이나, AX LABS가 이식한 실무 프롬프트 자체의 효과는 별도로 실측되지 않음 |

## 성과와 수치

- **원 논문 실측**: 세 벤치마크(GameCraft-Bench·FrontierSWE·ProgramBench)·세 하네스 조합
  전부에서 HoH가 3루프(HoH@3) 기준으로 개선. 예) Codex+GPT-5.5: GameCraft-Bench 49.58→
  71.52(+21.93), FrontierSWE 44%→71%, ProgramBench 60.41→66.50. 평균 상대개선 52.25%,
  최대 82.86%.
- **원 논문 실측**: FrontierSWE에서 Codex를 10루프까지 돌리면 Dominance가 22%→72.67%까지
  계속 상승. 벤치마크 점수는 개발 루프에 절대 되돌려주지 않아, 채점표를 보고 맞춘 결과가
  아니라 공개 명세·QA 관찰 증거만으로 얻은 개선이라고 논문은 강조한다.
- **원 논문 실측(절제실험, GameCraft-Bench)**: 계획 갱신 제거 −8.13점, 증거 피드백 제거
  −6.28점, 웜스타트 제거 −7.85점(토큰은 오히려 8.41M→11.12M로 32% 증가). 세 장치 중
  하나만 빼도 6~8점이 떨어져 세트로 작동함을 보여준다.
- **원 논문 실측**: PRD 하나로 시작한 5분짜리 FPS 게임 "Fusepoint"를 70루프 돌려 기록된
  이슈 81건 중 65건을 종료, 17건은 검증 종료 후 재오픈. 논문은 재오픈을 실패가 아니라
  이터레이션 개발의 정상 궤적으로 해석하며, 재오픈 기록이 이전 검증 이력을 그대로 가지고
  다시 계획에 들어간다는 점을 핵심으로 짚는다.
- **AX LABS 이식 효과**: 실측 수치 없음(claimed) — "논문의 역할 프롬프트를 이 형태로 넣으면
  재현 가능하다"는 실무 적용 가이드가 핵심이며, AX LABS 또는 제3자가 이 프롬프트로 직접
  재현 실험을 공개한 결과는 확인되지 않았다.

## 재현 가이드

- **난이도**: 중 (프롬프트 3종 작성 + 도구 권한 제한 설정, 별도 인프라 구축은 불요)
- **준비물**: Claude Code(서브에이전트 기능) 또는 Codex/OpenCode/Pi 등 CLI 코딩 에이전트,
  역할별 프롬프트 3종(Planner/Developer/QA), 도구 권한을 역할별로 제한할 수 있는 설정
  (Claude Code는 도구 목록, Codex는 `--sandbox` 플래그)
- **핵심 단계**:
  1. Planner·Developer·QA 세 역할의 프롬프트를 각각 준비한다(논문 부록 A.2 원문 또는
     AX LABS가 실무용으로 옮긴 버전)
  2. Planner·QA에는 Read+Bash(실행)만 부여하고 Edit/Write를 제거한다
  3. Developer에만 전체 쓰기 권한을 주고, 이전 루프의 코드를 이어받게 한다(웜스타트)
  4. 매 루프 Planner 문서는 새로 쓰고, QA 증거는 다음 루프 Planner에게만 전달한다
  5. Developer 산출물마다 커밋을 남겨 QA가 검사할 후보를 동결하고 롤백 지점을 확보한다

## 강의·AX 활용 포인트

- **강의**: "역할 분리 + 산출물 스키마 강제"가 장시간 에이전트 루프의 신뢰성을 어떻게
  높이는지 보여주는 실증 사례 — 멀티 에이전트 워크플로 설계 실습, 특히 Claude Code
  서브에이전트 설계 교육에 바로 쓸 수 있는 프롬프트 원문이 공개돼 있다.
- **AX**: "회귀 17건 재오픈"을 실패가 아니라 정상 궤적으로 보는 관점은, 에이전트 기반
  장기 개발 프로젝트의 진행 상황을 평가할 때 조직이 참고할 만한 프레임이다. 다만 이 페이지의
  핵심 수치는 학술 논문 벤치마크 기준이며, AX LABS의 실무 이식 프롬프트가 실제 현업
  프로젝트에서 같은 폭의 개선을 낸다는 근거는 아직 없다는 점을 함께 전달해야 한다.

## 출처

- [AX LABS — Harness-of-Harness 논문 정리: Claude Code·Codex에 바로 넣는 Planner·Developer·QA 3역할 프롬프트](https://theaxlabs.com/blog/harness-of-harness-planner-developer-qa-prompts) (2026-09-07)
- 원 논문: Haoyang Yan et al., "Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement", Shanghai AI Lab, 2026-09-01. [arXiv:2609.01481](https://arxiv.org/abs/2609.01481)
- 코드·게임 개발 궤적(GitHub): https://github.com/Flesymeb/HarnessOfHarness (AX LABS 글 인용 기준)
