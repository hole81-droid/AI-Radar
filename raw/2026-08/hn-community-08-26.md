# HN 커뮤니티 화제 스크리닝 — 2026-08-26 스캔용

수집일: 2026-08-26. HN Algolia `search_by_date` (48h 컷오프, points 임계값 적용)로
스크리닝. 페이지화하지 않고 뉴스레터 "커뮤니티 화제"에만 기록할 항목 원문 메모.

## A week of using Codex more than Claude (242점)

- https://allaboutcoding.ghinda.com/a-week-of-using-codex-more-than-claude/
- macOS에서 Codex TUI(`gpt-5.6-sol xhigh`)와 Claude Code TUI(`opus-5 xhigh`)를
  나란히 비교한 개인 후기. Codex는 주석이 적고 더 단순한 아키텍처를 내놓는 반면, Claude는
  "위임받은 것 이상"을 하려는 경향(과설계 — 추상화·Sorbet 시그니처 남발)이 있다고 평가.
  Codex는 초반엔 빠르지만 검증·리뷰 부담이 커서 총 소요시간 이점은 없었다고 결론. Codex는
  git 브랜치 중첩 등 복잡한 git 워크플로우에서 문제를 겪었고, 저자는 Codex의 MCP 인증
  플로우를 더 선호. 한 번은 4,000줄 넘는 diff가 나와 정정이 필요했음.
- 페이지화하지 않은 이유: 정량 벤치마크 없는 개인 주관 비교, 이미 잘 알려진 "Claude는
  과설계, Codex는 미니멀"이라는 통념을 재확인하는 수준.

## Codex on AWS Bedrock 캐싱 버그로 비용 10배 (148점)

- https://github.com/openai/codex/issues/37674
- Codex CLI의 네이티브 AWS Bedrock 연동이 GPT-5.6 Sol의 명시적 프롬프트 캐싱
  (`prompt_cache_options`/`prompt_cache_breakpoint`)을 지원하지 않아, 모든 요청이 캐시
  히트가 아닌 캐시 라이트로 처리됨. 2026-08-05~08 실제 프로덕션 사용에서 3,656건 요청에
  걸쳐 캐시라이트 토큰 약 1.72억 개가 발생, 캐시라이트 비용만 약 $1,182(Sol 전체 지출의
  85%) 청구. 이슈는 아직 미해결(open, enhancement 라벨).
- 페이지화하지 않은 이유: 개발자용 설정 버그이나 "AI 도구를 벤더 API 경유로 쓸 때 캐싱
  설정 누락이 비용을 몇 배로 부풀릴 수 있다"는 AX 비용관리 시사점이 있어 뉴스레터
  AX 시사점/커뮤니티 화제에 한 줄로 반영.

## OzBrain, Proliferate 등

- Show HN: OzBrain(92점, ozbrain.com)은 2026-08-24 스캔에서 이미 85점으로 포착·확보된
  항목의 포인트 증가분 — 중복, 재수집 생략.
- Show HN: Proliferate(45점, 셀프호스팅 Codex 대체 오픈소스)는 task/outcome 확인 불가한
  단순 도구 공개라 스킵.
