---
type: use-case
date: 2026-07-14
tools: [claude-code]
mechanism: [hooks]
domain: dev-automation
task: Claude Code Hooks로 AI 응답 중 특정 말버릇(예: "load-bearing")을 실시간으로 다른 표현으로 자동 치환
outcome: 응답이 사용자에게 도달하기 전 실시간 후처리로 반복 표현 치환에 성공 (성능 지표 없음, HN 467포인트로 화제성만 측정 가능)
model: 미확인 (특정 Claude 모델 버전 명시 없음, Claude가 반복 사용하는 표현을 다루는 범용 사례)
cost: 미확인
permissions: 미확인 (셸 스크립트 실행 권한 부여 수준으로 추정되나 원문에 별도 permission 설계 언급 없음)
maturity: demo
evidence: anecdotal
importance: low
uses: [course]
source: https://jola.dev/posts/how-to-stop-claude-from-saying-load-bearing
---
# Claude Code Hooks로 "load-bearing" 같은 말버릇 실시간 치환하기

> **공식**: Claude Code로 hooks(MessageDisplay 이벤트)를 활용해 AI 응답 중 반복되는 표현
> ("load-bearing" 등)을 실시간 자동 치환 → 웃자고 만든 예제지만 Hooks가 AI 출력 자체를
> 가로채 수정할 수 있음을 보여주는 교육 자료로 화제 (HN 467포인트)

## 무엇을 자동화했나

jola.dev 블로그(2026-07-14 게시)에서 소개한 사례로, Claude가 자주 반복하는 표현
("load-bearing", "honest", "genuine", "synthesize" 등 이른바 "claudism")을 Claude Code
Hooks를 이용해 사용자에게 응답이 표시되기 전에 실시간으로 다른 단어로 치환한다.
장난스러운 예제이지만, Claude Code Hooks가 단순히 명령 실행 전후를 가로채는 것을 넘어
"AI 출력 텍스트 자체"를 후처리할 수 있다는 점을 보여주는 교육적 가치가 있다.

## 어떻게 구성했나 (아키텍처)

- **Hook 이벤트**: `MessageDisplay` — 응답이 사용자에게 표시되기 직전 시점에 개입.
- **스크립트 위치**: `~/.claude/hooks/wordswap.sh`.
- **설정 파일**: `~/.claude/settings.json`에 아래와 같이 hook을 등록.

```json
{
  "hooks": {
    "MessageDisplay": [
      { "hooks": [{ "type": "command",
        "command": "$HOME/.claude/hooks/wordswap.sh" }] }
    ]
  }
}
```

- **동작 방식**: JSON 형식으로 입력을 받아 정규식으로 특정 문구를 치환하는 스크립트가
  실행됨. "load-bearing"을 "cooked" 등 다른 표현으로 바꾸는 방식으로 작동.
- 스크립트에 실행 권한을 부여한 뒤 새 세션을 시작하면 활성화된다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 미확인 (스크립트 실행 권한 수준으로 추정, 명시적 permission 설계 언급 없음) |
| 성숙도 | demo (장난스러운 예제, 실무 배포용은 아님) |

## 성과와 수치

- **측정 가능한 것은 화제성뿐**: Hacker News에서 467포인트를 기록(재확인 시점 기준)하며
  상당한 커뮤니티 반응을 얻었다 — 이는 measured 성격의 참여도 지표다.
- **자동화 자체의 성능 지표는 없음**: "치환이 작동한다"는 것 외에 정량적 효과(치환
  정확도, 처리 지연 등)는 원문에 없다 — anecdotal한 데모 수준으로 분류.
- HN 댓글에서는 이런 반복 표현이 강화학습(RL) 피드백 루프의 부산물이라는 논의, 인간도
  언어 수렴(linguistic convergence) 현상을 보인다는 논의가 오갔다.

## 재현 가이드

- **난이도**: 하 (bash/정규식 스크립트 하나와 settings.json 설정 한 줄이면 충분)
- **준비물**: Claude Code, 셸 스크립트 작성 환경
- **핵심 단계**:
  1. `~/.claude/hooks/wordswap.sh`에 치환하고 싶은 표현의 정규식 규칙을 작성
  2. 스크립트에 실행 권한 부여 (`chmod +x`)
  3. `~/.claude/settings.json`의 `hooks.MessageDisplay`에 스크립트 경로 등록
  4. 새 Claude Code 세션을 시작해 적용 확인

## 강의·AX 활용 포인트

- Claude Code Hooks의 활용 범위가 "명령 실행 전후 가로채기"뿐 아니라 "AI 출력 텍스트
  자체의 실시간 후처리"까지 확장된다는 점을 보여주는 쉬운 입문 예제로 강의에 쓰기 좋다.
  hooks 개념 소개 시 진지한 사례(보안 검사, 로깅) 전에 가볍게 보여주는 워밍업 데모로
  적합.
- AX 관점에서는 "브랜드 톤앤매너 강제(금칙어 치환, 사내 용어 통일)"처럼 기업이 AI 출력을
  표준화하는 데 동일 메커니즘을 응용할 수 있다는 각도로 확장해 설명 가능.
- 화제성(HN 467점)은 Hooks 기능 자체에 대한 개발자 커뮤니티의 높은 관심을 보여주는
  방증으로 인용할 수 있다.

## 출처

- [jola.dev — "How to stop Claude from saying load-bearing"](https://jola.dev/posts/how-to-stop-claude-from-saying-load-bearing)
- [Hacker News 토론 (467포인트)](https://news.ycombinator.com/item?id=48905248)
