# Simon Willison — "A new feature for my blog, built using my voice"

- URL: https://simonwillison.net/2026/Oct/9/built-using-my-voice/
- 발행일: 2026-10-09
- 수집: WebFetch

## 핵심 내용

- 저녁 요리를 하며 ChatGPT Codex 탭의 음성 대화 모드(GPT-6 Astra High)로 블로그에
  새 기능을 만든 경험담.
- 만든 기능: Substack 주간 뉴스레터 + 후원자 전용 월간 뉴스레터를 모아 보여주는
  "뉴스레터 인덱스" 페이지, 검색 연동, 아카이브 페이지 포함.
- 워크플로: 로컬 서버는 타이핑으로 먼저 실행 → 약 30분 음성 대화로 요구사항을
  설명 → Codex가 구현(Django 모델+마이그레이션+admin, import 함수 4종: Substack
  RSS·Substack 비공개 API·GitHub 저장소·비공개 뉴스레터, 공개 아카이브 페이지,
  사이트 검색 연동) → PR 생성 → 이후 약 30분은 키보드로 전환해 import 로직을 다듬음.
- 저자 평가: 음성은 멀티태스킹(요리 중 개발)에는 효과적이나 일상 작업 방식으로는
  부적합 — "에러메시지를 붙여넣거나 코드를 하이라이트하는 것이 말로 설명하는 것보다
  더 효율적"이라는 것이 핵심 결론. 시각적 프리뷰가 가능해 주방에서도 생산적인
  개발이 가능했다는 점은 긍정적으로 평가.

## 수집 메모

- Simon Willison은 sources.md "구루·실무자 1차 채널" 표의 최고 신뢰도 소스.
- 정량 수치는 소요 시간(약 30분+30분)뿐, 비용·코드량 등은 원문에 없음.
