---
type: update
date: 2026-07-21
tools: [claude]
importance: high
uses: [ax]
source: https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/
---

# Anthropic의 $1.5B 저작권 집단소송 합의, 법원 최종 승인

## 무엇이 있었나

미국 샌프란시스코 연방법원 Araceli Martinez-Olguin 판사가 Anthropic의 **$1.5B(약 2조원) 저작권
집단소송 합의**에 최종 승인을 내렸다 — 미국 저작권 소송 사상 최대 규모 합의로 알려졌다.

- 원고는 Claude 학습에 자신들의 책이 무단 사용됐다고 주장한 작가·출판사 그룹. 앞서 William Alsup
  판사는 "Claude 학습을 위한 저작물 활용 자체는 공정이용(fair use)"이라면서도, Anthropic이
  저작권 침해 서적 700만 권 이상을 "중앙 서고"에 무단 저장·보관한 점은 위법이라고 판단했었다.
  이번 승인은 그 후속 배상 절차의 최종 단계.
- **배상 규모**: 약 482,000권(작품) 대상, 작품당 $3,000 지급. 저작권자의 91%가 이미 배상 청구
  절차를 마친 상태.
- 일부 작가들은 "합의금이 너무 적다"며 이의를 제기했으나, 재판부는 "소송 전체의 리스크·보상을
  현실적으로 평가하지 못한 주장"이라며 기각. 변호사 보수는 청구된 $187.5M 중 $101M+가 승인됨.
- 이 합의는 **판례로서 구속력이 없다** — "AI 학습을 위한 저작물 사용은 공정이용"이라는 원심 판단
  자체는 유지되지만, 무단 보관·복제 관행에 대해서는 거액의 배상 책임이 실제로 발생할 수 있다는
  선례가 됐다.

## 왜 중요한가 (비개발자 관점)

- AI 모델 학습 데이터를 둘러싼 저작권 분쟁에서 실제로 거액의 배상금이 지급되는 최초의 대형
  사례라는 점에서, "학습에 쓴 것 자체는 괜찮아도 무단 보관/복제는 별개로 위법"이라는 구분이
  구체적 금액(작품당 $3,000)으로 확정됐다.
- Anthropic의 [[anthropic|players/anthropic]] 페이지에 기록된 기존 "저작권 소송($75M 신규
  제기)"과는 별개의, 더 오래되고 규모가 큰 소송 건의 최종 마무리 단계다.
- IPO를 준비 중인 Anthropic 입장에서는 이 소송 리스크가 수치로 확정·마무리됐다는 점이 상장
  절차에 긍정적 신호로 해석될 수 있다.

## 활용/시사점

- **AX**: 기업이 AI 모델을 자체 학습·파인튜닝할 때 "데이터를 어떻게 확보했는가"(정당한 라이선스
  vs 무단 수집·보관)가 향후 법적 리스크의 핵심 분기점이 된다는 실제 배상 규모 기준선 —
  작품당 $3,000 × 482,000건이라는 구체적 숫자는 AX 리스크 산정 시 참고할 만한 벤치마크.
- **강의**: "AI 학습은 공정이용, 그러나 불법 보관은 별도"라는 구분을 실제 판결·합의 사례로
  설명할 수 있는 교재.

> ⚠️ 상충: [[anthropic|players/anthropic]] 페이지는 "저작권 소송($75M 신규 제기)"을 리스크
> 요인으로 언급하고 있으나, 이는 이번에 최종 승인된 $1.5B 합의(작가 Bartz 등이 제기한 기존
> 소송)와는 별개의 건이다. 혼동 방지를 위해 anthropic.md에 구분 문구를 추가함.

## 출처

- [TechCrunch — Anthropic's landmark $1.5B copyright settlement is approved](https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/)
- [Engadget — Judge approves Anthropic's record-breaking $1.5 billion settlement for AI copyright lawsuit](https://www.engadget.com/2219475/judge-approves-anthropic-1-5-billion-settlement-authors/)
- [Publishers Weekly — Judge Gives Final Approval of $1.5 Billion Anthropic Settlement](https://www.publishersweekly.com/pw/by-topic/digital/copyright/article/100888-judge-gives-final-approval-in-1-5-billion-settlement-in-anthropic-copyright-case.html)
- [TechTimes — Anthropic Copyright Settlement Gets Final Approval: $3,000 Per Book, No Binding Precedent](https://www.techtimes.com/articles/321156/20260721/anthropic-copyright-settlement-gets-final-approval-3000-per-book-no-binding-precedent.htm)
