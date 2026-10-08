# Reddit r/ClaudeAI — I Tested Haiku 5.5 vs Luna vs DeepSeek Flash vs Gemini 3.8 Flash

- URL: https://www.reddit.com/r/ClaudeAI/comments/1x09xst/i_tested_haiku_55_vs_luna_vs_deepseek_flash_vs/
- 작성자: u/NiagaraPeloton
- 게시일: 2026-10-07
- 수집: curl + .rss 퍼머링크

## 본문 요지

본인이 운영하는 다중 모델 플릿/오케스트레이터 하네스로, 신모델이 나올 때마다 자체
벤치마크를 돌림. 이번엔 소형·고속 모델군 4종(Claude Haiku 5.5 vs OpenAI Luna vs DeepSeek
Flash vs Gemini 3.8 Flash)을 **86개 문항·11개 카테고리**(코딩, 버그 수정, 코드 리뷰, SQL,
비정형 텍스트에서 데이터 추출, 수학, 장문 문서, 툴 콜링, 고객 설명문(영어+스페인어), 안전성)
로 비교. 실제 업무 패턴을 본뜬 커스텀 데이터로 3회씩 실행, 가능한 항목은 자동 채점,
개방형 항목은 Opus가 블라인드 채점.

**종합 점수(100점 만점)**: DeepSeek Flash 86.6 · Luna 85.2 · Gemini 3.8 Flash 85.1 ·
Haiku 5.5 84.7 — "품질은 거의 동률".

**모델별 특성**:
- Haiku 5.5: 가장 빠름(중앙값 3.5초). 코드·버그수정·SQL·수학에서 거의 완벽. 툴 콜링·
  안전성에서 약함. "고물량 워크호스"로 적합.
- DeepSeek Flash: 종합 1위(근소), 장문 문서 처리 완벽. 다만 최악의 경우 느리고,
  가끔 스스로 궁지에 몰려 빈 응답을 반환.
- Luna: 유료 API 중 가장 저렴, 전반적으로 견고, 장문 문서가 약점.
- Gemini 3.8 Flash: 툴 콜링이 압도적으로 우수(81 vs 나머지 ~50), 그러나 가장 느리고
  (중앙값 11초) 안전성 점수 최저.

## 수집 메모

- 1인 자체 벤치마크(측정치는 실측이나 표본·채점 방식은 비공개 커스텀) — "실측"이지만
  표준 벤치마크 아님을 뉴스레터에 명시. 커뮤니티 섹션(도구 실사용 평가)으로 처리,
  별도 use-case 페이지화는 보류(특정 업무 자동화가 아니라 모델 간 비교 평가이기 때문).
