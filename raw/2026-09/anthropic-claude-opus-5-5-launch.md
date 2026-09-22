# Anthropic — "Introducing Claude Opus 5.5"

- 원문: https://www.anthropic.com/claude-opus-5-5
- 2차 확인: https://techcrunch.com/2026/09/22/anthropic-releases-opus-5-5-with-lower-prices-and-fable-level-performance/
- 게시일: 2026-09-22
- 수집일: 2026-09-23

## 요지

Anthropic이 새 Claude 5.5 패밀리의 첫 모델 Claude Opus 5.5를 출시했다. Fable 5.1급 성능을
Opus 5 대비 대부분 작업에서 보이면서도 비용은 40% 저렴하고 속도는 30% 이상 빠르다. Opus
5.5는 자사 최상위 행동 감사(behavioral audit, 약 2,000개 시나리오) 기준 역대 최고 안전
점수를 기록했다.

## 핵심 사실

- **벤치마크**: Terminal-Bench 4.0 66.4%(Opus 5 52.3%) · FrontierCode v1.1 54.4%(48.0%) ·
  CursorBench 4.0 57.8%(46.6%) · GDPval-AA v2.1 1846 Elo(1708) · OSWorld 2.0 81.8%(74.0%).
- **가격**: 입력 $4/M(-20%), 출력 $20/M(-20%), 캐시 읽기 $0.20/M(-60%). Opus 5 대비 종합
  40% 비용 절감. Fast mode(2.5배 속도, $8/$40) 별도 제공. GPT-6 Astra 대비 작업당 약 20%
  비용으로 상회한다고 주장.
- **속도**: 표준 대비 30%+ 빠른 출력. 테스터 1인이 680,000줄 코드 마이그레이션을 하루
  이내 완료(기존 엔지니어링 팀 기준 수 주 소요), 200,000줄 코드베이스 감사를 3시간
  이내 완료(Opus 5 기준 20시간+).
- **안전성**: 컨테인먼트 경계 우회 시도 85% 감소(Opus 5 대비), 프롬프트 인젝션 저항성
  개선. Fable 5.1과 동급 사이버보안·생물학·증류(distillation) 안전장치 적용. 출시 전
  외부 평가자(Frontier Design, METR)가 평가 수행.
- **커뮤니케이션 스타일 변경**: 전문용어 사용 감소, 핵심 정보를 메시지 서두에 배치,
  장황함 감소.
- **제공**: 2026-09-22부로 AWS·Google Cloud·Microsoft Azure·Claude Platform 등 전
  플랫폼에서 즉시 사용 가능. Sonnet 5.5·Haiku 5.5는 후속 출시 예고.
- Opus 5.5는 Dario Amodei의 09-12 AI 감속(pacing) 선언 이후 Anthropic의 첫 신모델
  출시다.

## 커뮤니티 반응 (r/ClaudeAI, 09-22 top/day)

- 호평: "Opus 5.5 in Claude Code is crazy fast, especially at spotting UI bugs"
- 회의론: "Did Anthropic just find a new way to benchmax Opus 5.5 without actually
  giving subscribers that performance?" — 벤치마크 개선과 실사용 체감 사이 괴리 의혹.
- r/AI_Agents: "Opus 5.5 dropped today and… I kinda don't care anymore?" — 잦은 모델
  출시에 대한 피로감 표출.
