# Peter Vijeh — "Reddit NER" 프로젝트 (Gemini로 라벨링 후 로컬 모델 파인튜닝)

- 원문: https://www.petervijeh.com/projects/reddit-ner
- 2차 확인: Hacker News(87점) https://news.ycombinator.com/item?id=49740330 ("I had Gemini train its own replacement for $9")
- 게시일: 2026-09-17
- 수집일: 2026-09-20
- 반영: [[petervijeh-gemini-distillation-gliner-9-dollars]] (use-case)

## 요지

Reddit 댓글에서 칼 브랜드·모델·강종을 추출하는 NER 작업을 Gemini 3.1 Pro API로 처리하다
비용이 누적되자, Gemini로 4,290건을 한 번만 라벨링한 뒤 그 데이터로 GLiNER large v2.5
(459M)를 파인튜닝해 로컬 서빙으로 전환.

## 핵심 수치

- 라벨링 $9(건당 $0.0021) + GPU 학습 $2.50 = 총 $11.50, 약 4,291건 처리 후 손익분기.
- F1 0.83(held-out), 소재 클래스 재현율 0.911(클래스별 임계값).
- 초기 5회 학습 실패 원인: `words_mask` 텐서가 단어 인덱스를 요구(이진 마스크 아님).
