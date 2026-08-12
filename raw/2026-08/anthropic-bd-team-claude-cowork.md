# How Anthropic's business development team uses Claude to run inbound and outbound at scale

- 출처: https://claude.com/blog/how-anthropics-business-development-team-uses-claude-to-run-inbound-and-outbound-at-scale
- 발행일: 2026-08-07 (claude.com/blog 확인, ai-radar 스캔일: 2026-08-13)
- 수집: WebFetch 요약(원문 전문 아님, 핵심 구조·수치 추출)

## 자동화한 업무

**인바운드**
- 세일즈 지식베이스 문서(자주 받는 질문·답변)를 Claude가 읽고 답장 초안 작성
- 인박스 스킬로 매시간 이메일 트리아지·응답 초안 생성
- 노쇼·이탈 프로스펙트 알림

**아웃바운드**
- 야간 예약 태스크로 전체 계정 리스트 대상 계정 리서치·프로스펙팅
- 플레이북 대비 디스커버리콜 평가 및 스코어카드 생성
- 신규 리드 대상 퍼스널라이즈드 첫 접촉 이메일 초안

## 메커니즘

- **Skills**: 인박스 관리, 콜 코칭, CRM 동기화, 리드 아웃리치
- **Scheduled Tasks**: 야간 전체 계정 프로스펙팅
- **Connectors**: Salesforce, Gmail, Google Calendar, Apollo, Common Room, Gong, 내부 데이터 웨어하우스
- **Voice Profiles**: 담당자별 커스텀 라이팅 스타일 템플릿

## 모델
원문에 명시 없음 (미확인)

## 성과

- 인바운드 응답 관리: 하루 약 5시간 수작업 → 간단 검토만 필요한 초안 작성으로 전환
- 담당자 1인당 "100개 이상 계정" 동시 관리 가능해짐

## 권한/리뷰 프로세스

- 모든 Claude 산출물은 발송 전 사람 검토 필수 ("keep a person on every send")
- 담당자가 초안을 읽고 수정 후 직접 발송
- Salesforce 업데이트 제안은 담당자의 명시적 승인 대기, 승인 사유가 시스템 개선을 위해 기록됨

## 성숙도
프로덕션 배포 — 팀 전체에 공유 플러그인 저장소 구축, 지속적 피드백 루프가 스킬에 반영됨
