---
type: use-case
date: 2026-10-09
tools: [codex]
mechanism: [vibe-coding, cli-pipeline]
domain: dev-automation
task: 저녁 요리 중 음성 대화로 블로그 뉴스레터 아카이브 페이지 기능 개발
outcome: 약 30분 음성 대화로 기능 구현+PR 생성, 이후 30분 키보드 전환해 다듬음 (일화, 시간만 실측)
model: GPT-6 Astra High (ChatGPT Codex 탭 음성모드)
cost: 미확인
permissions: 미확인 (로컬 개발 환경, 코드 변경·PR 생성 권한)
maturity: production
evidence: anecdotal
importance: medium
uses: [course]
source: https://simonwillison.net/2026/Oct/9/built-using-my-voice/
---

> **공식**: ChatGPT Codex(음성 대화 모드, GPT-6 Astra High)로 vibe-coding 방식을 활용해
> 블로그 뉴스레터 아카이브 페이지 기능을 수행 → 약 30분 대화로 PR 생성, 키보드 전환 30분으로 마무리

## 무엇을 자동화했나

Simon Willison(구루 1차 채널, LLM 실무 기록의 최고 신뢰도 소스)이 저녁 요리를 하며
ChatGPT Codex 탭의 음성 대화 모드(GPT-6 Astra High)로 자신의 블로그에 새 기능을
만들었다. 만든 기능은 Substack 주간 뉴스레터와 후원자 전용 월간 뉴스레터를 모아
보여주는 "뉴스레터 인덱스" 페이지로, 사이트 검색 연동과 아카이브 페이지까지 포함한다.

## 어떻게 구성했나 (아키텍처)

1. 타이핑으로 로컬 개발 서버를 띄운 뒤, 이후 약 30분은 요리를 하며 순수 음성으로
   요구사항을 대화체로 설명 — Codex가 이를 코드 변경으로 구현.
2. 결과: Django 모델 신규 추가(마이그레이션·admin 설정 포함), import 함수 4종
   (Substack RSS·Substack 비공개 API·GitHub 저장소·비공개 뉴스레터), 공개 아카이브
   페이지(가시성 규칙 포함), 사이트 검색 연동까지 한 번에 구현되어 PR이 생성됨.
3. 코드 리뷰 단계(약 30분)는 키보드 입력으로 전환 — import 메커니즘을 다듬는 세밀한
   작업은 음성보다 타이핑+복붙(에러메시지·코드 하이라이트)이 더 효율적이었다고 명시.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | GPT-6 Astra High (ChatGPT Codex 음성 대화 모드) |
| 비용 | 미확인 |
| 권한 | 미확인 (로컬 개발 환경, 코드 변경·PR 생성 권한으로 추정) |
| 성숙도 | production (실제 자신의 블로그에 배포되는 기능) |

## 성과와 수치

- 실측: 약 30분 음성 대화로 기능 구현 완료(PR 생성), 이후 약 30분 키보드 리뷰로
  마무리 — 총 소요 시간만 실측, 비용·코드량 등 다른 수치는 원문에 없음(일화).
- 저자 본인 평가: 음성 입력은 "멀티태스킹"(요리 중 개발)에는 효과적이지만, 일상적인
  주력 작업 방식으로는 부적합하다고 명시 — "에러메시지를 붙여넣거나 코드를 직접
  하이라이트해 바꿀 부분을 가리키는 게 말로 설명하는 것보다 여전히 더 효율적"이라는
  것이 핵심 결론.

## 재현 가이드

- **난이도**: 하
- **준비물**: ChatGPT Codex 음성 대화 모드 접근권, 로컬 개발 환경(이번 사례는 Django)
- **핵심 단계**:
  1. 로컬 서버를 먼저 타이핑으로 띄운다(초기 설정은 음성에 적합하지 않음).
  2. 양손이 자유로운 상황(요리·이동 등)에서 기능 요구사항을 대화체로 설명한다.
  3. 결과 코드가 생성되면 세밀한 수정(에러 처리, import 로직 등)은 키보드로 전환한다.
  4. 음성은 "구상·구현 위임" 단계에, 키보드는 "정밀 리뷰" 단계에 쓰는 역할 분리가 핵심.

## 강의·AX 활용 포인트

- **강의**: "음성 vs 키보드" 각각이 에이전틱 코딩의 어느 단계(구상 vs 정밀 수정)에
  유리한지 구분해 가르치는 실전 자료. 멀티태스킹 시나리오(이동 중·가사 중 개발)에서
  에이전트 활용법 사례로 적합.
- **AX**: 개발자가 아닌 직군(현장·이동이 많은 업무)이 코드/문서 작업을 음성으로
  위임하는 모델의 한계와 적합 구간을 보여주는 1차 증언 — 기업 내 음성 기반 AI 도입
  검토 시 "정밀 작업은 여전히 텍스트가 낫다"는 반증 자료로 활용 가능.

## 출처

- [Simon Willison — A new feature for my blog, built using my voice](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)
- raw/2026-10/simonwillison-built-using-my-voice.md
