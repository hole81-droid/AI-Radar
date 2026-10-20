---
type: use-case
date: 2026-10-20
tools: [claude-code, claude]
mechanism: [vibe-coding, subagents]
domain: personal-productivity
task: RTS 게임 전체 개발 — 디자인·밸런싱·오디오 기반 P2P 멀티플레이어 동기화
outcome: 321 커밋·12개 메이저 버전으로 완성, "더 재미있게 만들어줘" 한 문장으로 1,000회+ 시뮬레이션 플레이테스트 자동 밸런싱 트리거
model: Claude Opus 5.5 (Claude Code for Web, "Ultracode" 모드로 다중 서브에이전트 동시 오케스트레이션)
cost: 미확인
permissions: 이미지 생성 API 키를 Claude에 직접 제공(자산 반복 생성용), 그 외 미확인
maturity: demo
evidence: measured
importance: medium
uses: [course]
source: https://simonwillison.net/2026/Oct/20/battledrones/
---

> **공식**: Claude Opus 5.5 + Claude Code for Web로 vibe-coding과 서브에이전트 오케스트레이션을 활용해
> RTS 게임 전체(디자인·밸런싱·오디오 기반 멀티플레이어)를 제작 → 321커밋 12버전, 자동 1,000+회
> 플레이테스트로 밸런싱

## 무엇을 자동화했나

Simon Willison(최우선 구루 소스)이 Claude Code로 Command & Conquer 스타일의 RTS 게임
"Battle Drones"를 처음부터 끝까지 제작했다. 코드를 직접 쓰지 않고 반복 프롬프트로 12개 메이저
버전·321 커밋을 거쳐 완성했으며, 근처 기기끼리 오디오로 게임 상태를 동기화하는 서버 없는
멀티플레이어까지 구현했다.

## 어떻게 구성했나 (아키텍처)

- **모델/도구**: Claude Opus 5.5 + Claude Code for Web. "Ultracode" 모드가 복잡한 작업에서 여러
  서브에이전트를 동시에 오케스트레이션.
- **자산 생성**: OpenAI 이미지 생성 API 키를 Claude에 직접 제공해, 스프라이트를 반복적으로
  재생성·개선하는 루프를 Claude가 자체적으로 돌리게 함.
- **밸런싱**: "Make it a LOT more fun"이라는 한 문장 지시가 수 시간에 걸친 자동화 작업을
  트리거했고, 그 안에 1,000회 이상의 시뮬레이션 플레이테스트와 전면 재조정이 포함됐다.
- **오디오 기반 멀티플레이어**: 이전 실험(Chirp Pong)의 오디오 모뎀 기법을 확장. Radio Probe
  도구로 먼저 대역폭을 테스트한 뒤, 마이크 신호로 두 기기 간 게임 상태를 전송. 브라우저 간
  부동소수점 연산 차이를 없애기 위해 Claude가 브라우저 기본 수학 함수를 결정론적 버전으로
  교체해 크로스브라우저 시뮬레이션 일치를 확보.
- **3D 모델링**: Opus 5.5가 사람 개입 없이 3D 모델링 작업을 수행.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | Claude Opus 5.5 (Claude Code for Web, Ultracode 모드) |
| 비용 | 미확인 |
| 권한 설계 | 이미지 생성 API 키 직접 제공, 그 외 미확인 |
| 성숙도 | demo (플레이 가능한 공개 하비 프로젝트, 상용 아님) |
| 근거 수준 | measured (코드·커밋 전량 공개, 재현 가능) |

## 성과와 수치

- 321 커밋, 12개 메이저 버전(실측, GitHub 공개).
- "더 재미있게 만들어줘" 지시 한 번으로 1,000회+ 시뮬레이션 플레이테스트 자동 실행(저자 서술,
  정확한 횟수는 로그 기반 추정으로 추정).
- 오디오 기반 멀티플레이어: 서버 비용 없는 배포 패턴 확보(정성적 평가).

## 재현 가이드 (난이도: 중)

1. 정적 HTML/JS + WebGL(Three.js)로 시작한다 — 저자가 "게임 개발에 환상적인 매체"로 꼽음.
2. 이미지/자산 생성 API 키를 에이전트에 직접 맡겨 반복 개선 루프를 자동화한다.
3. 복잡한 작업은 "더 좋게 만들어줘" 같은 상위 목표만 주고, 세부 반복(밸런싱·테스트)은 에이전트가
   스스로 플레이테스트 루프를 설계하게 둔다.
4. 멀티 기기 동기화가 필요하면 결정론적 시뮬레이션(동일 연산 결과 보장)을 먼저 확보해야 한다 —
   브라우저 기본 수학 함수의 미세한 차이가 동기화를 깨뜨린다.

## 강의·AX 활용 포인트

"서브에이전트 오케스트레이션"과 "자동 시뮬레이션 기반 QA/밸런싱"을 작은 개인 프로젝트로 체감할 수
있는 교육 소재다. 저자 본인이 "이렇게 소프트웨어를 만드는 데 대한 죄책감을 아직 못 떨쳤다"고
밝힌 대목은, 생산성과 "직접 만들었다는 느낌"의 간극을 다루는 vibe coding 윤리 논의의 소재로도
쓸 수 있다.

## 출처

- [Simon Willison — Battle Drones](https://simonwillison.net/2026/Oct/20/battledrones/)
