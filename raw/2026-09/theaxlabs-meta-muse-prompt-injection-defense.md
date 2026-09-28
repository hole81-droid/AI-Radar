# AX LABS — AI 에이전트 프롬프트 인젝션 방어: Meta Muse 사례

- 원문: https://theaxlabs.com/blog/ai-agent-prompt-injection-defense-meta-muse
- 수집일: 2026-09-29 (발행 2026-09-28)

## 요약 (WebFetch 추출)

**다루는 도구**: Meta Muse — 이메일·웹브라우징·폼작성·결제 자동실행 개인 AI 에이전트,
Muse Spark 1.3 기반, 사용자별 전용 VM.

**9계층 방어 구조**:
1. 런타임 셀 격리(systemd-nspawn 컨테이너)
2. 대리 토큰 — 실제 토큰은 경계에서 교체
3. Sentinel 게이트 — 모든 외부 요청의 단일 허가 주체
4. 오염 추적 — 개인데이터 접근 프로세스는 승인 자동 상실
5. privsep — 크리덴셜 취급 코드 위치 제한
6. authd ACL — 크리덴셜 접근 제한
7. 입력 방어 3중 — 모델 학습+신뢰불가 라벨+분류기 앙상블
8. 대화 밖 승인 — 별도 UI 다이얼로그로만 처리
9. 브라우저 격리 — DOM 대신 접근성 트리만 노출

**실측 수치**:
- Proactive Memory Agent: Claude Sonnet 4.5 +8.3pp(37.6%→45.9%), Claude Opus 4.6 +2.4pp(43.5%→45.9%)
- 나비에-스토크스 증명(OpenAI 별도 사례 인용): 동시 에이전트 1만 개, 88시간, 출력 토큰 약 3,000억,
  에이전트 간 메시지 490만 건

**주의**: 원문이 "Andrew Ng The Batch 371호 종합 정리"라고 밝혔으나, The Batch 공식
아카이브(deeplearning.ai/the-batch/tag/letters)에서 09-11~09-25 레터 목록을 직접 대조한 결과
해당 내용을 확인하지 못했다 — 이 귀속은 검증 실패로 판단해 위키 페이지에는 반영하지 않음
(AX LABS 자체 분석으로만 인용).
