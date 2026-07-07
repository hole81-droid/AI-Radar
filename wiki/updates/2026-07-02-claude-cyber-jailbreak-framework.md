---
type: update
date: 2026-07-02
tools: [claude]
importance: medium
uses: [ax]
source: https://www.anthropic.com/news/fable-safeguards-jailbreak-framework
---

# Anthropic, 탈옥 심각도 척도 CJS 공개 — 업계 표준 제안

## 무엇이 있었나

Fable 5 재배포(7/1) 다음 날, Anthropic이 Fable 5의 **사이버 세이프가드 상세와 탈옥(jailbreak) 평가 프레임워크**를 공개했다.

- **사이버 능력 4단계 분류**: 금지(prohibited) / 고위험 이중용도 / 저위험 이중용도 / 무해 — 모델이 응답해도 되는 사이버 관련 요청의 기준선.
- **Cyber Jailbreak Severity(CJS) 척도**: 탈옥의 심각도를 CJS-0(무해)부터 CJS-4(치명적)까지 등급화. Anthropic은 이를 **업계 표준 초안**으로 제안했다.
- **HackerOne 신고 프로그램** 개설 — 외부 연구자가 탈옥을 발견하면 보상받고 신고하는 공식 채널.

수출통제 사태의 원인이 Amazon 연구진의 세이프가드 우회 보고서였던 만큼, 이번 공개는 "무엇이 얼마나 위험한 탈옥인지"를 규제 당국·업계와 공유 언어로 만들려는 후속 조치다.

## 왜 중요한가 (비개발자 관점)

- 지금까지 AI 탈옥은 "뚫렸다/안 뚫렸다"로만 얘기됐지만, 이제 지진 규모처럼 **심각도 등급**으로 소통하자는 제안 — 규제와 보도의 기준이 될 수 있다.
- 수출통제로 모델이 통째로 내려가는 일을 겪은 회사가 내놓은 재발 방지책이라는 맥락: 안전 체계의 투명한 공개가 **규제 리스크를 줄이는 사업 전략**이 됐다.
- 경쟁사들이 이 척도를 채택하면 AI 안전성의 비교 가능한 공통 지표가 처음 생기는 셈.

## 활용/시사점

- **AX**: 기업이 AI 벤더를 평가할 때 "탈옥 대응 체계가 있는가, 심각도를 어떻게 분류하는가"를 체크리스트에 넣을 근거. 자체 AI 서비스 운영 조직이라면 CJS를 내부 인시던트 등급으로 차용 가능.

## 출처

- https://www.anthropic.com/news/fable-safeguards-jailbreak-framework (공식 발표)
- https://www.marktechpost.com/2026/07/01/anthropic-redeploys-claude-fable-5-on-july-1-after-us-export-controls-lift-adds-new-cybersecurity-classifier/ (재배포 시 분류기 도입 맥락)
