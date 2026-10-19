# 해커 1명이 AI 에이전트 군단으로 100개 이상 기업 침해

- URL: https://thenextweb.com/news/ai-agents-hacker-cairn-100-sites-deere-norforge
- 추가 출처: https://it.slashdot.org/story/26/10/19/1746204/a-hacker-broke-into-john-deere-sharkninja-with-an-army-of-ai-agents
- HN 토론: https://news.ycombinator.com/item?id=50152877 (59점)
- 사건일: 2026-10-19 보도
- 수집: WebSearch

## 핵심 내용

- AI 보안업체 Norforge가 오픈소스 AI 플랫폼 Cairn("범용 문제 해결 엔진")의 노출된
  작업 로그를 통해, 한 해커가 거의 자율적인 AI 에이전트 군단으로 미국·캐나다·호주·
  일본 기업 100곳 이상을 침해한 것을 포착.
- 피해 기업: John Deere, SharkNinja, Cummins 등.
- 침투 전술은 100자 미만의 중국어 지시문으로 입력, 성공 침해는 평균 23시간 소요.
- 비용 추정: 작업당 평균 $5, 성공률 약 10%, 성공 1건당 약 $50.
- 모든 작업이 `claudecode_deepseek-v4.1-flash`라는 워커로 실행 — Claude Code
  하네스 + DeepSeek V4.1 Flash 모델 조합으로 추정.
- John Deere: "민감정보 접근 증거 없음". SharkNinja: "제품지원 독립 사이트만
  영향, 위협 봉쇄".

## 수집 메모

- Claude Code "하네스"가 Anthropic 모델과 무관하게 재사용된 사례로 읽힘 — 보안
  책임 소재가 모델 제공사와 하네스 제공사 간에 분리될 수 있음을 보여줌.
