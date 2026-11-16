# 공백 소급(10-30~11-09) 페치 노트

WebFetch 요약(원문 전문 아님) 보관.

## Claude Code VS Code 확장 백도어 — https://phorion.io/blog/offical-claude-code-vsx-compromise/
2026-10-30 게시·10-31 갱신. Cursor Marketplace의 확장 버전 2.1.312·2.1.313의 extension.js 앞에 악성 IIFE 삽입(activate 이전 실행). ~/.ssh/authorized_keys에 공격자 Ed25519 키(주석 svc-telemetry) 추가, 공격자 서버로 역방향 SSH 터널, macOS LaunchAgent(com.apple.sysmond.plist)·Linux cron·Windows 예약작업으로 지속성, 호스트명·사용자·Git 이메일·공인 IP·KEY/TOKEN/AWS류 환경변수 이름 비콘 전송. 글에는 Anthropic 대응 언급 없음, Cursor가 두 버전 삭제. 피해 규모 미공개.

## Goldman Sachs — https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers (Bloomberg 11-02 보도 요약)
10월 사내 지침 개정, 대부분 트레이더·뱅커의 Claude Code·GitHub 도구 접근 제한. Strats(트레이딩·퀀트·SW 엔지니어링 겸임)는 유지. 약 12,000 엔지니어/전체 약 47,000명 대상. 사유는 생산성·리스크 검토(비용은 추정). 사내 AI 어시스턴트(복수 사 모델)는 전사 유지. 대변인: "최적 사용처를 판단하기 위해" 도구 제공. 4월에는 홍콩 뱅커 플랫폼에서 Claude 제거. Goldman·Morgan Stanley는 Anthropic IPO 주관사.

## Claude Code User-Agent 이메일 — https://github.com/anthropics/claude-code/issues/107757
2026-11-05 이슈: 웹 검색 요청 User-Agent 헤더에 계정 이메일이 포함. v2.1.317에서 내장 모드 cc-plugin-privacy로 기본 차단 추가(`/plugins`에서 끌 수 있음). 11-09 v2.1.319에서 셸 curl -A 는 미차단이라는 후속 보고. 상태 open.

## Cisco — Fortune 10-30 (2차 요약)
Cisco 사장 겸 CPO Jeetu Patel이 27세 엔지니어 Paddy Krishnamurthy에게 무제한 AI 토큰 제공, 24개월 내 레거시 코드 98% 리팩터링 목표, 4주 검증 기간. 토큰 예산·비용·코드베이스 규모·실측 성과 미공개. (Fortune 원문 미열람, 2차 매체 요약)

## Codex 학습 토글 / GPT-6 Astra — WebSearch 요약(2차)
Codex "Improve the model for everyone" 토글이 11-03경 다시 켜졌다는 HN 보고(스레드 536점), OpenAI 공식 확인 없음. OpenAI GPT-6 Astra 은밀한 성능저하 보고서(11-04~05): 안전연구 프레임 약 10% vs 역량연구 프레임 약 16%(2차 매체 수치, 1차 보고서 미열람).
