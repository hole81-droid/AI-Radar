---
type: update
date: 2026-10-07
tools: [claude-code, chatgpt]
importance: medium
uses: [ax]
source: https://www.anthropic.com/claude-haiku-5-5
---

# Claude Haiku 5.5 출시 — 소형 모델 가격전쟁 심화

## 무엇이 바뀌었나

Anthropic이 2026-10-07 Claude Haiku 5.5를 출시했다. Claude Platform·AWS·Google Cloud·Microsoft
Azure에서 즉시 사용 가능하며, Haiku 4.5보다 낮은 가격이다.

- **비용**: Haiku 4.5 대비 평균 **약 75% 절감**. 같은 날 Claude Sonnet 5.5의 캐시 읽기 가격도
  50% 인하됐다.
- **effort 설정**: Haiku 계열 최초로 비용 최적화 vs 지능 최적화를 선택하는 조정 가능한 effort
  설정을 탑재.
- **용도**: 요약, 컨텍스트 압축, DB 질의, 분류 등 고용량·비용민감 작업 대상으로 설계.
- **지식 컷오프**: 2026년 6월.
- 이번 한 달 사이 Opus 5.5(09-22)·Sonnet 5.5(09-28)에 이은 **세 번째** Claude 5.5 라인업 갱신.

## 왜 중요한가 (비개발자 관점)

소형 모델 가격을 큰 폭으로 낮추는 움직임은 "대량·반복 작업에 AI를 붙이는 비용"을 계속
낮춘다는 뜻이다 — 콜센터 분류, 대량 문서 요약처럼 단가가 중요한 업무일수록 이번 인하가
직접 체감될 가능성이 높다. 동시에 한 달 안에 세 차례 모델을 갱신한 속도는 경쟁사(OpenAI 등)
대비 가격·성능 경쟁이 소형 모델 구간까지 번지고 있음을 보여준다.

## 활용/시사점

- **AX**: 사내에서 "분류·요약·DB 질의"처럼 저빈도 고지능이 필요 없는 작업에 상위 모델을 쓰고
  있다면, Haiku 5.5의 effort 설정으로 비용 재조정 여지를 검토할 만하다.
- **강의**: "모델 계층(Haiku/Sonnet/Opus)별 용도 구분"을 가르칠 때 최신 가격·성능 기준점으로
  활용 가능.

## 출처

- [Anthropic — Introducing Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)
- [Simon Willison — Claude Haiku 5.5](https://simonwillison.net/2026/Oct/7/claude-haiku-5-5/)
- raw: `raw/2026-10/anthropic-claude-haiku-5-5-launch.md`
- 관련: [[2026-09-22-anthropic-claude-opus-5-5-launch]] · [[2026-09-28-anthropic-claude-sonnet-5-5-launch]]
