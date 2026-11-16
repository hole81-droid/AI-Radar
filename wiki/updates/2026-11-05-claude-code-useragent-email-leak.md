---
type: update
date: 2026-11-05
tools: [claude-code]
importance: medium
uses: [ax]
source: https://github.com/anthropics/claude-code/issues/107757
---

# Claude Code가 웹 요청 User-Agent에 계정 이메일을 실어 보낸다는 이슈 — v2.1.317에서 차단 모드 추가

## 무엇이 있었나
- **이슈**: 11-05 GitHub [#107757](https://github.com/anthropics/claude-code/issues/107757)(HN 1,616점). 사용자가 Claude Code의 웹 검색 요청 `User-Agent` 헤더에 자기 이메일이 들어가 제3자 사이트에 노출됐다고 보고했고, 이후 하루 수십 통의 스팸을 받았다고 주장한다(인과는 사용자 주장).
- **대응**: Anthropic 측 기여자가 11-05 v2.1.317에 내장 모드 `cc-plugin-privacy`를 넣어 기본 차단한다고 밝혔다(`/plugins`에서 끌 수 있음).
- **잔여 틈**: 11-09 v2.1.319에서 셸 `curl -A`에 이메일을 실어도 막지 않았다는 후속 보고(루프백 주소로 시험, 외부 전송 없음). 모드가 Claude Code 내장 웹 도구만 막는지는 **미확인**. 이슈는 열려 있다(12일 기준).
- **같은 주 관련 보고(HN 627점)**: Apiiro가 코딩 에이전트의 "다시 묻지 않음" 권한 설정이 공개 GitHub 파일 1,122건에 비밀번호를 노출시켰다고 분석했다 — 원문은 접근 차단(403)으로 이번에 읽지 못해 세부는 **미확인**.

## 왜 중요한가
에이전트가 만드는 네트워크 요청의 헤더까지 개인정보 점검 대상이라는 사례. 기업은 에이전트 프록시 로깅·송신 허용 목록을 두고 버전별 동작을 점검해야 한다. 같은 달 [[2026-10-30-claude-code-vscode-extension-backdoor]]와 함께 도입 보안 체크리스트 소재.

## 활용 포인트
- 강의/AX: 에이전트 송신 트래픽 관찰(mitmproxy 등)과 권한 "다시 묻지 않음" 설정 점검.
- 연관: [[claude-code]]
