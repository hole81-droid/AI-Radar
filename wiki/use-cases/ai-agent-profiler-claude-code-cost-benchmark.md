---
type: use-case
date: 2026-07-26
tools: [claude-code]
mechanism: [cli-pipeline]
domain: ops
task: Claude Code 에이전트 세션의 토큰·비용·캐시 효율을 로컬 프록시로 실시간 프로파일링
outcome: 실측 243세션·9,257건 요청 — 비용 68%가 툴 결과에서 발생, 캐시 효율 96.7%이나 유휴 5~60분 갭 147회에서 캐시 소실, 동일 파일 세션당 평균 4,600회+ 재읽기
model: 미확인 (프록시는 모델 비종속, Claude Code 세션 자체 모델은 원문에 미명시)
cost: 실측 — 243세션 총 API 비용 $31.45(세션당 평균 약 $0.13)
permissions: 로컬 전용 실행, API 키·인증 헤더 자동 redact, 클라우드 전송 없음
maturity: prototype
evidence: measured
importance: high
uses: [course, ax]
source: https://old.reddit.com/r/ClaudeAI/comments/1v6xx6q/i_built_a_proxy_to_see_what_claude_code_is_really/
---

# ai-agent-profiler(aap) — Claude Code 세션 243개를 실측 감청해보니 비용의 68%는 "툴 결과"였다

> **공식**: 오픈소스 로컬 프록시(ai-agent-profiler, cli-pipeline)로 Claude Code와 Anthropic API
> 사이 트래픽을 실측 기록해 에이전트 세션의 토큰/비용/캐시 구조를 리포팅 → 243세션·9,257건
> 요청 분석 결과 비용의 68%가 프롬프트가 아닌 "툴 결과"에서 발생(실측)

## 무엇을 자동화했나

Reddit 사용자(u/rguiu)가 "내 Claude Code 에이전트가 실제로 뭘 하고 있는지, 돈이 어디서
새는지"를 확인하기 위해 로컬 프록시 겸 대시보드 `ai-agent-profiler`(aap)를 만들어
오픈소스로 공개했다(2026-07-26, r/ClaudeAI 화제). 자신의 실제 엔지니어링 프로젝트
243세션에서 나온 실측 데이터를 그대로 공개했다.

## 어떻게 구성했나 (아키텍처)

- **구조**: `Claude Code → [aap 프록시] → Anthropic API`로 이어지는 네트워크 탭(tap) 형태.
  모든 요청/응답을 있는 그대로 통과시키며 NDJSON으로 기록한다.
- **설치/실행**: `git clone` → `npm install && npm run build && npm link` →
  터미널 1에서 `aap serve`(프록시+대시보드, localhost:3030), 터미널 2에서 `aap run claude`
- **특성**: 읽기 전용·바이트 그대로 전달, 서브밀리초 수준 오버헤드, 시크릿(API 키·인증 헤더)은
  저장 전 자동 마스킹, 클라우드 전송·계정·텔레메트리 없음(전 과정 로컬)
- **분석 파이프라인**: 백그라운드 잡이 트레이스를 파싱해 SQLite에 저장 — 토큰 수, 프로바이더별
  비용, 요청 분류(사용자 턴/툴 결과/검색/압축), 개별 툴 호출 단위까지 분해

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인(프록시 자체는 모델 비종속) |
| 비용 | 실측 — 243세션 총 $31.45 |
| 권한 | 로컬 전용, 시크릿 자동 redact, 클라우드 미전송 |
| 성숙도 | prototype — 개인 오픈소스 프로젝트, 실사용 데이터 기반 |

## 성과와 수치 (실측)

- **세션/요청**: 총 243세션, 총 9,257건 요청, 세션당 평균 약 38건 요청, 프록시 자체 오버헤드
  평균 9.5ms, 총 API 비용 $31.45
- **토큰 구조**: 입력(신규 과금) 33.2M(72.5%), 출력 4.76M(10.4%), 캐시 히트 964M(21.0%),
  캐시 쓰기 2.75M, 총 처리 토큰 37.9M. 캐시 가능 토큰 중 96.7%가 실제로 캐시됨(캐시 효율)
- **비용 구조**: API 비용의 **68%가 프롬프트나 모델 응답이 아니라 "툴 결과(tool result)"**에서
  발생 — 즉 돈이 새는 지점은 사용자 입력이 아니라 에이전트가 도구를 실행하고 받은 결과물
- **낭비 패턴**: Claude Code가 동일 파일을 세션당 평균 **4,600회 이상 재읽기**하는 경우가
  다수 확인됨. 5~60분 유휴 구간(총 147회 발견)에서는 ephemeral 캐시가 만료돼 다시 쓰기 비용이
  발생 — "캐시 누수"의 주요 원인으로 지목

## 재현 가이드

- **난이도**: 중 (Node.js 빌드·프록시 실행 환경 필요, 코드 수정 없이 CLI만으로 가능)
- **준비물**: Node.js/npm, 실제로 돌리고 있는 Claude Code 프로젝트
- **핵심 단계**:
  1. `git clone https://github.com/rguiu/ai-agent-profiler.git` 후 빌드·링크
  2. 터미널 1에서 `aap serve`로 프록시+대시보드 기동
  3. 터미널 2에서 `aap run claude`로 평소처럼 Claude Code 사용
  4. 로컬 대시보드(localhost:3030)에서 요청 유형별 비용·캐시 효율·파일 재읽기 패턴 확인
  5. 유휴 갭·중복 읽기 등 낭비 패턴을 찾아 워크플로(파일 캐싱, 세션 유지 시간 등) 조정

## 강의·AX 활용 포인트

- **강의**: "에이전트 비용은 프롬프트가 아니라 툴 호출에서 샌다"는 구체적 반례로, 에이전트
  코스트 최적화를 가르칠 때 추상적 설명 대신 바로 쓸 수 있는 실측 사례. 캐시 효율·유휴 갭
  개념을 실제 대시보드로 보여주기 좋다.
- **AX**: 사내에서 Claude Code 등 코딩 에이전트를 대규모로 굴리기 전에 이런 로컬 프로파일러로
  실제 비용 구조를 먼저 확인하는 것이 "자체 신고 지표만 믿지 말라"([[rtk-skill-jetbrains-token-benchmark]])는
  이 위키의 기존 원칙과도 맞닿아 있다 — 비용 거버넌스 도입 전 실측 단계로 권장할 만하다.

## 출처

- [Reddit r/ClaudeAI — I Built a Proxy to See What Claude Code Is Really Doing (243 Sessions Later, Here's What I Found)](https://old.reddit.com/r/ClaudeAI/comments/1v6xx6q/i_built_a_proxy_to_see_what_claude_code_is_really/)
- [GitHub — rguiu/ai-agent-profiler](https://github.com/rguiu/ai-agent-profiler)
