---
type: use-case
date: 2026-10-19
tools: [claude-code]
mechanism: [cli-pipeline]
domain: dev-automation
task: tmux로 여러 Claude Code 에이전트 세션을 동시에 띄우고 원격 제어하기
outcome: SSH 연결이 끊겨도 에이전트가 계속 실행, 스크립트로 여러 에이전트 동시 조작 가능
model: 미확인
cost: 미확인
permissions: 미확인
maturity: pilot
evidence: anecdotal
importance: medium
uses: [course]
source: https://crystl.dev/guides/tmux-for-ai-agents/
---

# Claude Code 멀티 에이전트를 tmux로 운영하기

> **공식**: Claude Code로 cli-pipeline을 활용해 "여러 저장소에서 동시에 돌아가는
> 코딩 에이전트 세션 관리"를 수행 → SSH 연결 끊김과 무관하게 지속 실행, 스크립트로
> 여러 에이전트를 한 번에 조작

## 무엇을 자동화했나

터미널 멀티플렉서 **tmux**를 Claude Code의 "세션 매니저"로 써서, 여러 저장소에서
동시에 돌아가는 에이전트 작업을 한 화면에서 관리한다. 이 글(crystl.dev 가이드)이
다루는 범위는 단일 세션 관리가 아니라 **여러 에이전트를 병렬로 띄우고, 스크립트로
원격 조작하고, 출력을 자동으로 로깅하는 것**이다.

## 어떻게 구성했나 (아키텍처)

- **세션 단위**: 저장소(repo) 하나당 tmux 세션 하나, 세션 이름은 저장소 이름으로
  고정한다 — 어느 창이 어느 프로젝트인지 바로 식별 가능.
- **원격 조작**: `tmux send-keys`로 실행 중인 Claude Code 세션에 명령어·텍스트를
  주입한다 — 사람이 터미널에 타이핑하는 것과 동일한 효과를 스크립트로 낸다.
- **상태 확인**: `tmux capture-pane`으로 에이전트 화면을 그대로 캡처해 현재 진행
  상황을 읽는다.
- **로깅**: `tmux pipe-pane`으로 에이전트 출력을 파일로 실시간 스트리밍한다 —
  세션이 끝난 뒤에도 전체 로그가 남는다.
- SSH 연결이 끊겨도 tmux 세션 자체는 서버에서 계속 돌기 때문에, 장시간 작업
  (대규모 리팩터링 등)에 적합하다.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 미확인 |
| 성숙도 | pilot (개인 가이드 수준, 특정 기업 프로덕션 도입 사례 아님) |

## 성과와 수치

실측 수치는 없음(anecdotal). 저자가 밝힌 효과는 "SSH 연결 끊김에도 에이전트 지속
실행"과 "스크립트로 여러 에이전트 제어 가능"이라는 정성적 설명뿐이다.

**한계(저자 직접 언급)**: tmux 자체는 "어떤 에이전트가 입력을 기다리고 있는지"를
표시해주지 못한다 — 에이전트별 상태 추적이 안 되고, 서버가 재부팅되면 세션이
사라진다.

## 재현 가이드

**난이도**: 중 (tmux 기본 사용법 숙지 필요)

**준비물**: tmux 설치, Claude Code CLI, 관리할 저장소 여러 개

**핵심 단계**:
1. 저장소별로 tmux 세션을 생성하고 저장소 이름으로 명명한다.
2. 각 세션 안에서 Claude Code를 실행한다.
3. `send-keys`로 각 세션에 작업 지시를 주입하는 제어 스크립트를 작성한다.
4. `pipe-pane`으로 각 세션의 출력을 로그 파일로 저장한다.
5. 필요 시 `capture-pane`으로 현재 화면을 읽어 진행 상황을 점검한다.

## 강의·AX 활용 포인트

- 여러 프로젝트를 동시에 돌리는 "멀티 에이전트 오케스트레이션"의 가장 저수준·저비용
  구현 방식을 보여주는 소재 — Claude Managed Agents 같은 벤더 제공 오케스트레이션과
  대비해서 "직접 구축하면 이런 트레이드오프(상태 추적 불가, 재부팅 시 손실)가
  생긴다"는 걸 가르치기 좋다.
- 1인 개발자·소규모 팀이 비용 없이 병렬 에이전트 운영을 시작하는 입문 단계로 적합.

## 출처

- [crystl.dev — Tmux and Claude Code: Sessions, Send-Keys, and the Ceiling](https://crystl.dev/guides/tmux-for-ai-agents/)
- [Hacker News 토론](https://news.ycombinator.com/item?id=50148855) (145점)
