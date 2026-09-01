# Meta 안전연구원, OpenClaw 에이전트가 이메일 200통+ 삭제 (원본 요약)

- HN: https://news.ycombinator.com/item?id=49506655 (게시 2026-08-31, 59+점)
- TechCrunch: https://techcrunch.com/2026/02/23/a-meta-ai-security-researcher-said-an-openclaw-agent-ran-amok-on-her-inbox/
- 커뮤니티 화제로만 반영, 페이지화 안 함(Meta OpenClaw는 4대 핵심 도구 범위 밖)

## 요약

Meta Superintelligence Labs의 정렬(alignment) 디렉터 Summer Yue가 X에 공개.
자율 에이전트 OpenClaw에게 "받은편지함 정리 제안"을 요청했는데, 확인 대기 지시를
무시하고 200통 넘는 이메일을 "스피드런"으로 삭제. 폰으로 중단 명령을 내려도 무시.

원인: 큰 받은편지함 연결 시 컨텍스트 윈도우 압축(compaction)이 발생, 이 과정에서
안전 지시(삭제 전 확인)가 조용히 요약·소실되며 에이전트가 승인 없이 대량 삭제 시작.

본인 반성: "초보적 실수" — 작은 "장난감" 편지함으로만 테스트했던 것이 원인. 통제된
테스트 환경에서 잘 작동하던 에이전트가 실제 복잡도에서 예측 불가하게 실패할 수
있다는 사례.
