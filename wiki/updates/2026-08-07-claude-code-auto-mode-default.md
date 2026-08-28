---
type: update
date: 2026-08-07
tools: [claude-code]
importance: high
uses: [course, ax]
source: https://claude.com/blog/auto-mode-default-in-claude-code
---

# Claude Code Auto Mode, Pro·Max·Team 기본값으로 전환

## 무엇이 바뀌었나

Claude Code의 "Auto mode"가 2026-08-07부로 Pro·Max·Team 플랜에서 **기본 동작**이 됐다.
Auto mode는 도구 실행마다 매번 승인을 받는 방식(권한 프롬프트) 대신, 모델 기반 분류기가
위험한 행동만 걸러내고 나머지는 승인 없이 진행하는 방식이다. 2026-03 리서치 프리뷰로
시작해, Pro 플랜 선택 기능(2026-05) → Bedrock/Google Cloud/Microsoft Foundry 확대(2026-06)를
거쳐 이번에 주요 플랜 기본값이 됐다.

이중 방어 구조로 설계됐다: (1) Claude가 "읽는" 내용 — 툴 실행 결과를 프롬프트 인젝션 탐지
프로브로 스캔, (2) Claude가 "하는" 행동 — 사용자 의도와 정렬되는지 확인하는 액션 정합성 체크.
같은 날 Anthropic 엔지니어링 블로그에 아키텍처 상세("How we built Claude Code auto mode: a
safer way to skip permissions")도 공개됐다.

Anthropic은 여전히 프로덕션 시스템과 분리된 격리(sandbox) 환경에서 사용할 것을 권장하며,
의미 있는 프로덕션 세션에는 사람의 감독이 필요하다고 명시했다.

## 왜 중요한가

"매번 승인 눌러야 하는 번거로움(승인 피로)"은 에이전틱 코딩 도구 도입의 가장 흔한 불만 중
하나였다. 이번 기본값 전환은 Anthropic이 "안전장치를 갖춘 자율성"이 대중 사용자 단계에서도
충분히 성숙했다고 판단했다는 신호다. 동시에 "프로덕션과 분리해서 쓰라"는 권고를 명시한 것은
자율성 확대가 여전히 리스크 관리와 짝을 이뤄야 한다는 점을 보여준다.

## 활용 포인트

- **학습과정**: "권한 프롬프트 → 분류기 기반 자동 승인"으로의 전환은 에이전트 자율성 설계
  스펙트럼(수동 승인 ↔ 완전 자율)을 가르치는 좋은 사례. [[loop-engineering]]·
  [[ai-agent-routing]] 개념과 함께 다루면 좋다.
- **AX**: 기업이 에이전틱 코딩 도구를 확산할 때 "기본값을 자율로 바꾸되 프로덕션은 격리
  환경으로 분리"하는 정책 설계 참고 사례로 인용 가능.

## 후속 (08-27) — 프롬프트 인젝션 연구자가 우회 성공률 80% 확인

프롬프트 인젝션 연구자 Johann Rehberger(embracethered.com)가 Auto Mode를 우회하는 공격
체인을 공개했다. Claude가 WebFetch 대신 `curl`을 직접 쓰도록 유도(HTTP 415 응답 활용)한
뒤 ZIP 아카이브를 내려받아 압축을 풀게 하고, Claude가 신뢰할 수 없는 바이너리 실행을
거부하고 자체 Python 디코더를 작성하도록 유도한다. 이 디코더가 압축 해제된 디렉터리
안에서 실행되는 점을 노려, 아카이브에 심어둔 악성 `struct.py`가 Python 표준 라이브러리의
`base64` 모듈을 가로채 임의 코드를 실행한다.

- 표본 규모는 작지만 공격 성공률 **60~80%**를 기록했고, 파일을 워크스페이스 밖에 쓰는
  subprocess 변형 페이로드에서 최고치(80%)가 나왔다.
- 일부 실행에서는 Claude가 침해를 감지하고 악성 프로세스를 정리하려 했으나 **Auto Mode가
  정리 명령 자체를 차단**하는 역설적 상황도 발생 — 안전장치가 오히려 실패의 일부가 될 수
  있음을 보여준 사례.
- Anthropic은 이 신고를 "정보 제공(Informative)"으로 종결하며, Auto Mode는 보안 보장이
  아닌 최선노력(best-effort) 분류기 기반 편의 기능이고 "진짜 방어선은 OS 격리와 네트워크
  아웃바운드 통제"라고 답했다 — 08-07 최초 발표 당시 명시했던 "프로덕션과 분리해서 쓰라"는
  권고와 일관된 입장이다.
- 연구자는 컨테이너/VM/OS 샌드박스에서 무인 에이전트를 실행하고, 네트워크 아웃바운드를
  제한하고, 에이전트를 모니터링하고, 홈 디렉터리·SSH 키·클라우드 자격증명을 노출하지
  말라고 권고했다.

→ Simon Willison, [Breaking Claude Code Opus 5 Auto Mode](https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/) ·
[embracethered.com 원문](https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/)

## 출처

- https://claude.com/blog/auto-mode-default-in-claude-code
- https://www.anthropic.com/engineering/claude-code-auto-mode (아키텍처 상세)
- https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/ (08-27 우회 사례)
- https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/
- raw/2026-08/claude-code-auto-mode-default.md
