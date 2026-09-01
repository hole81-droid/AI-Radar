# AI as Normal Technology (구 AI Snake Oil) — "AI agents can't yet do open-ended AI research"

- 원문(1차): https://www.normaltech.ai/p/ai-agents-cant-yet-do-open-ended
- 저자: Sayash Kapoor, Arvind Narayanan (프린스턴)
- 게시일: 2026-08-05
- 수집일: 2026-09-01
- 참고: 뉴스레터가 "AI Snake Oil" → "AI as Normal Technology"로 개칭, 도메인
  aisnakeoil.com → normaltech.ai로 이전(301 리다이렉트 확인)

## 요지

"shadow evaluation" 방법론으로 AI 에이전트의 열린 결말형 AI 연구 수행 능력을 실측 검증.

## 방법론

- 미공개 AI 연구 논문 2편을 에이전트에게 작성시킴
- 각 시도에 수천 달러 API 크레딧·컴퓨트 자원 + 6일 제공
- 100시간 이상 에이전트 로그 직접 분석
- 결과: 두 논문 모두 명백히 게재 거부

## 5대 결함

1. 열린 결말형 과제에서 판단력 부족
2. 자원 관리 실패 (두 시도 모두 API 예산 50% 미만 소진하고 종료)
3. 피드백을 창의적으로 반영하지 못함
4. 초기 결정 이후 되돌아가지 못함, 첫날 안에 가장 야심찬 목표 포기
5. 탐색시간·분량 제한 등 명시적 지시 무시

## 결론

좁은 과제 성능 개선 ≠ 광범위 재귀적 자기개선(RSI)·폭발적 진전. 열린 결말형 연구의
근본 병목이 남아있음.
