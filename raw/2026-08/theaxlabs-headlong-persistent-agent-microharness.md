# AX LABS — "Headlong 설치법과 구조 — 계속 생각하는 에이전트 하네스 뜯어보기"

- 원문: https://theaxlabs.com/blog/headlong-persistent-agent-microharness
- Headlong 공식: https://headlong.ai/ (install: `curl -fsSL https://headlong.ai/install.sh | bash`)
- 게시일: 2026-08-25 (AX LABS 블로그, "에이전트 제품 설계" 카테고리)
- 원 개발: Laude Institute + MIT, 오픈소스 공개 2026-08-24
- 수집일: 2026-08-26

## 요지

MIT·Laude Institute가 공개한 오픈소스 "지속형(persistent) 에이전트" 마이크로하네스
Headlong을 AX LABS가 실무 관점으로 정리. 요청이 없어도 멈추지 않고 스스로 생각을 생성하며
필요할 때만 사람과 소통하는 상시 가동형 에이전트 구조와, 그 과정에서 저자들이 직접 겪은
실패 사례(자기 서비스 중단, 시간당 비용, 위임 붕괴)까지 투명하게 공개한 것이 핵심.

## 핵심 내용

- **아키텍처**: 4개 핵심 도구로 구성된 9.8K줄 Bash 코드베이스.
  1. `shellm` — LLM에 컨텍스트를 넘기고 bash 명령을 실행·반복하는 재귀적 언어모델 코어
  2. `traj` — fork/merge를 지원하는 append-only 궤적(trajectory) 저장소
  3. `context` — 궤적을 계층적 메시지 배열로 렌더링
  4. `thinkers` — 반응형 사고 프로세스를 실행하는 디스패처
  - 부가 요소: 메모리 시스템, 웹 대시보드, Slack/Telegram 브리지, 비상정지 버튼
    (`headlong-killall`)
- **메모리 모델**: 오래된 기록을 삭제하지 않고 "해상도 저하(resolution degradation)" 방식
  사용 — 최근 항목은 원본 그대로, 오래된 항목은 점진적으로 요약 압축. 원본 jsonl은 보존돼
  필요 시 세부 조회 가능.
- **문서화된 실패 사례**:
  - 비용: GLM·Grok 기준 시간당 $1~2
  - 에이전트가 자기 서비스를 3차례 스스로 중단시킴 → 팀이 가드 추가, 이후 에이전트가
    자체적으로 가드를 정교화
  - 워치독의 30초 무응답 타임아웃이 셀프-딜리게이션 실험을 방해해 12일간 병합 커밋이
    64건→12건으로 급감
  - 프라이버시: 단일 사고 스트림이 기밀 요청 여부와 무관하게 모든 사용자 정보를 공유
- **설치·안전장치**: 원라인 설치. Bash 3.2+·git·curl·jq·LLM API 키 필요. Docker
  컨테이너화 강력 권장(비컨테이너 환경 설치 시 명시적 안전 확인 요구). 지출 상한이 걸린
  제한된 API 키 사용 권장.
- **성공 사례**: 에이전트 "Audel"이 사람 개입 없이 48분(15개 사고 단계, 로그 343줄) 만에
  리콜 프로세스 버그를 자율 디버깅.

## AX LABS 코멘트/맥락

- 요청-응답형 에이전트(Claude Code·Codex 등 CLI 세션형)와 달리, Headlong은 "항상 켜져
  있는" 지속 에이전시를 지향 — 루프 엔지니어링·하네스 엔지니어링 담론의 다음 단계로
  제시됨.
- 모델 비종속(model-agnostic) 설계로 GLM·Grok 등도 구동 가능, 특정 벤더 락인 없음.
- 실패 사례를 숨기지 않고 그대로 공개한 것이 AX 관점에서 특히 유용 — "상시 가동 에이전트"의
  현실적 리스크(비용·자기중단·프라이버시)를 도입 전 체크리스트로 쓸 수 있음.

## 사용 판단

지속적 사실(오픈소스 하네스 신규 출시, Claude Code·DeepSeek Harness 등과 경쟁 구도)로
판단해 wiki/updates/2026-08-24-headlong-persistent-agent-microharness.md 생성,
[[loop-engineering]]·[[timeline]] 교차링크.
