---
type: update
date: 2026-10-30
tools: [claude-code]
importance: high
uses: [ax]
source: https://phorion.io/blog/offical-claude-code-vsx-compromise/
---

# Cursor Marketplace의 "Claude Code" VS Code 확장에 백도어 — 버전 2.1.312·2.1.313

## 무엇이 있었나
보안업체 Phorion이 10-30 공개(10-31 갱신)한 보고에 따르면, Cursor Marketplace에 올라온 Claude Code 확장의 2.1.312·2.1.313 버전 `extension.js` 앞부분에 악성 코드가 삽입돼 있었다. 확장이 로드되는 순간(사용자 조작 없이) 실행된다. Cursor는 두 버전을 마켓에서 내렸다. HN에서 같은 사건이 두 건(1,014점·663점·399점대)으로 올라올 만큼 반응이 컸다. 원문: [Phorion](https://phorion.io/blog/offical-claude-code-vsx-compromise/), HN 토론 [1](https://news.ycombinator.com/item?id=50300683).

악성 코드가 한 일(Phorion 기술):
- `~/.ssh/authorized_keys`에 공격자 키(주석 `svc-telemetry`)를 심어 원격 접속 통로를 만들고, 공격자 서버로 역방향 SSH 터널을 연다.
- macOS는 LaunchAgent(`com.apple.sysmond.plist`로 위장), Linux는 cron, Windows는 예약 작업으로 재부팅 후에도 살아남는다.
- 호스트명·사용자명·Git 이메일·공인 IP와 `KEY`·`TOKEN`·`AWS` 패턴 환경변수의 **이름**(값 아님)을 한 번 외부로 보낸다.
- 확장을 지워도 백도어는 남는다 — 터널 프로세스 종료, 지속성 항목 삭제, `authorized_keys` 정리, 접근 가능했던 자격증명 교체가 필요하다.

**미확인**: 피해자 수, 공급망 침투 경로(Anthropic 계정 탈취인지 마켓 계정인지), Anthropic의 공식 대응 — 글에 없다.

## 왜 중요한가
에이전트 도구 자체가 아니라 **그 도구를 꾸미는 확장·플러그인 유통 경로**가 공격 대상이 됐다. 개발자 PC에는 SSH 키·클라우드 토큰이 몰려 있어 한 번 뚫리면 사내 시스템으로 번진다. 기업은 AI 코딩 도구를 도입할 때 "공식 마켓에서 받았는가"가 아니라 "버전 고정·사내 미러·확장 허용 목록"으로 통제해야 한다. 관련: [[2026-10-17-opencode-security-breach]].

## 활용 포인트
- 강의: "AI 코딩 도구 도입 시 보안 체크리스트(확장·플러그인 허용 목록, 자격증명 분리)" 사례.
- AX: 도구 선정 평가 항목에 공급망 통제를 넣는다. 
- 연관: [[claude-code]], [[2026-11-05-claude-code-useragent-email-leak]]
