---
type: update
date: 2026-09-18
tools: [claude-code]
importance: medium
uses: [course, ax]
source: https://github.com/anthropics/claude-code/tree/main/mods/agents-md
---

# Claude Code, AGENTS.md 표준 지원 시작 — 프로젝트 설정 파일을 도구 간에 공유

## 무엇이 있었나

Claude Code v2.1.277부터 프로젝트 폴더에 `CLAUDE.md`가 없으면 **`AGENTS.md`를 대신
읽어 사용**하는 기능이 추가됐다(Anthropic 엔지니어 Thariq Shihipar가 X에 공지, `/config`에서
켜고 끌 수 있음). `AGENTS.md`는 Codex·Cursor 등 여러 코딩 에이전트가 이미 채택한
**비공식 업계 표준** 프로젝트 지시문 파일 형식이다.

이 기능은 Anthropic이 새로 도입 중인 **"Claude Code mods"**(하네스를 커스터마이즈하는
플러그인 체계)의 **내장(built-in) mod**로 구현됐다 — 사용자도 향후 직접 mod를 만들어
프로젝트 지시문 처리 방식을 바꿀 수 있다.

## 왜 중요한가

- 지금까지는 Claude Code·Codex를 함께 쓰는 팀이 같은 프로젝트에 `CLAUDE.md`와
  `AGENTS.md`를 **따로 유지**하거나 심링크로 우회해야 했다([[fabiensanglard-agent-md-persistent-style-guide]]
  참조). 이번 지원으로 **하나의 설정 파일을 여러 에이전트 도구가 공유**할 수 있게 됐다 —
  팀이 특정 벤더에 록인되는 정도를 낮추는 방향의 변화다.
- Simon Willison도 같은 날 자신의 블로그에서 이 변화를 별도로 짚었을 만큼(구루 채널
  1차 확인) 개발자 커뮤니티에서 빠르게 화제가 됐다 — HN에 관련 글 2건이 동시에
  랭크됐다(&quot;Claude Code now reads AGENTS.md if there is no Claude.md&quot;,
  &quot;Anthropic finally adds AGENTS.md support to Claude Code&quot;).
- **주의**: 우선순위는 `CLAUDE.md`가 있으면 `CLAUDE.md`를 쓰고, 없을 때만 `AGENTS.md`로
  대체한다 — 두 파일이 같이 있으면 자동 병합되지 않는다.

## 활용/시사점

- **강의**: "프로젝트 지시문 파일"(CLAUDE.md/AGENTS.md)과 "재사용 가능 스킬"의 역할
  차이를 설명할 때, 이제는 "어느 도구를 쓰든 같은 지시문 파일 하나로 시작할 수 있다"는
  실습 포인트를 추가할 수 있다.
- **AX**: 멀티 벤더(Claude Code+Codex 등) 사내 표준을 설계하는 팀은 앞으로
  `CLAUDE.md` 대신 `AGENTS.md`를 1차 표준으로 채택하는 편이 도구 전환 비용을 낮춘다.

## 09-23 후속 — "텔레메트리를 꺼두면 AGENTS.md를 못 읽는다" 버그 (HN 427점, 09-24 확인)

블로거 szypowi.cz가 09-23 발견해 공개한 내용에 따르면, 이 AGENTS.md 지원 기능은 원격
feature flag(`tengu_agents_md_mod`)로 켜고 끄는 구조인데, 이 플래그 조회 자체가
텔레메트리 채널을 타고 있었다 — `DISABLE_TELEMETRY`나
`CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` 환경변수로 텔레메트리를 끈 사용자는
**로컬 파일을 읽는 데 네트워크가 필요 없음에도** 서버 응답을 기다리다 조용히
기능이 비활성화됐다(경고 없음). Bedrock·Vertex 경유 사용자나 사내 정책상 비필수
트래픽을 차단하는 기업 환경에서도 같은 문제가 발생한다. 저자는 발견 시점(09-23)
기준 공식 수정 확인 전이라고 밝혔고, 임시 우회책으로 `CLAUDE.md`에
`@AGENTS.md` import 구문을 넣는 방법을 권장했다(HN 게시물 제목엔 사후에 [fixed]가
붙었으나 원문 자체에는 수정 시점이 명시돼 있지 않다 — 상태 확인은 다음 스캔에서
재검증).

**시사점**: "설정 끄기"(텔레메트리 차단)가 기능 자체를 조용히 무력화하는 사례는
프라이버시 설정과 기능 가용성이 암묵적으로 결합된 설계의 위험을 보여준다 — 기업이
텔레메트리를 끄는 이유(데이터 거버넌스)와 기능이 꺼지는 결과가 무관해 보일수록
발견이 늦어진다는 점을 강의·AX 체크리스트에 함께 언급할 만하다.

## 10-01 후속 — "Claude Code mods" 체계 정식 출시 (v2.1.287)

09-18 당시 "AGENTS.md 지원은 새로 도입 중인 mods 체계의 내장 mod로 구현됐다"고
예고했던 그 플랫폼 기능이 2026-10-01 **Claude Code v2.1.287**로 정식 출시됐다.

- **mod란**: 플러그인 안에 담긴 JavaScript/TypeScript 이벤트 핸들러. 툴 호출,
  프롬프트 제출, 턴 완료, 슬래시 명령, 화면 렌더링 등 Claude Code 내부 이벤트가
  발생할 때마다 호출돼 그 이벤트를 **관찰·수정·가로채기** 할 수 있다. 기존 설정파일
  기반 "hooks"(셸 명령 실행)와 달리, mod는 Claude Code 프로세스 **안에서** 직접
  실행되므로 화면에 패널·버튼을 그리거나 툴 호출 자체를 바꿔치는 것처럼 설정 훅이
  못하는 일을 할 수 있다.
- **내장 전환 사례**: Anthropic은 자사 기능 중 `/diff` 패널, AGENTS.md 로더(이 페이지가
  다루는 기능), 텔레메트리 전송 로직을 전부 mod로 재구현해 "Built-in mods"로 공개했다
  — mod 체계가 실험적 애드온이 아니라 Claude Code 자체의 내부 구현 방식이 됐다는 뜻이다.
- **샘플 공개**: `claude-code-playground` 저장소에 위험한 셸 명령(`rm -rf` 등) 실행 전
  영향범위를 시각화하는 `blast-radius`, 컨텍스트 윈도우 소진을 예보하는
  `token-weather`, 직전 턴의 파일 수정을 단계별로 재생하는 `replay-theater` 등
  샘플 mod 3종을 공개했다. 커뮤니티 카탈로그(`awesome-claude-code-mods`)도 함께
  등장해 GitHub에 공개된 mod들을 스캔하고 각 mod가 읽기/쓰기/실행/네트워크 중
  무엇에 접근하는지 자동 분석해 보여준다.
- **보안 경고**: mod는 **샌드박싱되지 않으며 사용자 권한 그대로** 실행된다 — 파일
  읽기/쓰기, 프로세스 실행, 네트워크 요청, 세션 내용 열람·조작, 심지어 권한 프롬프트를
  사용자 대신 승인하는 것까지 가능하다. 공식 문서는 "신뢰하는 제작자·마켓플레이스의
  mod만 설치하라"고 명시한다.
- **버전 요구**: v2.1.287 이상, 기본값 켜짐. `--safe-mode`로 세션 단위, 설정파일
  `disableAllHooks`로 영구 비활성화 가능.

09-18 당시엔 "mods 체계의 첫 내장 기능"이라는 예고 수준이었던 것이, 2주 만에
**사용자가 직접 TypeScript로 하네스 자체의 UI·동작을 바꿀 수 있는 공식 플러그인
계층**으로 완성된 것이어서, "Claude Code를 커스터마이징하는 표준 방법"이 하나
더 생긴 셈이다. 다만 비샌드박스·전권한 실행 구조라 기업 환경에서는 "mods를 누가
검수·승인할 것인가" 거버넌스가 AGENTS.md 사례보다 더 중요해진다.

## 출처

- [Simon Willison — Quoting Thariq Shihipar](https://simonwillison.net/2026/Sep/18/thariq-shihipar/)
- [GitHub — anthropics/claude-code mods/agents-md](https://github.com/anthropics/claude-code/tree/main/mods/agents-md)
- [Hacker News(181점) — Claude Code now reads AGENTS.md if there is no Claude.md](https://news.ycombinator.com/item?id=49760187)
- [블로그 — Claude Code reads AGENTS.md only when telemetry is on](https://blog.szypowi.cz/p/claude-code-reads-agents.md-only-when-telemetry-is-on/) · [Hacker News(427점)](https://news.ycombinator.com/item?id=49814947)
- 10-01 후속: [Claude Code Docs — Mods overview](https://code.claude.com/docs/en/plugins/mods/overview) · [GitHub — anthropics/claude-code/mods](https://github.com/anthropics/claude-code/tree/main/mods) · [GitHub — anthropics/claude-code-playground/claude-code/mods](https://github.com/anthropics/claude-code-playground/tree/main/claude-code/mods) · [GitHub — karanb192/awesome-claude-code-mods](https://github.com/karanb192/awesome-claude-code-mods)
