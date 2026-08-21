---
type: use-case
date: 2026-08-21
tools: [claude-code, gemini]
mechanism: [skills]
domain: personal-productivity
task: Claude의 장황한 응답을 청중별(동료/매니저/임원) 평이한 영어로 자동 번역
outcome: 정량 성과 없음, GitHub 스타 51개 소규모 유틸리티(MIT)
model: Claude Code(응답 생성) + Google Gemini CLI(번역 통과)
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: low
uses: [course]
source: https://github.com/adnanakil/nobuzz/blob/main/README.md
---
# NoBuzz — Claude Code 응답을 Gemini CLI로 다시 통과시켜 "버즈피드체"를 고치는 스킬

> **공식**: Claude Code Skill `/debuzz`(skills, 크로스 툴 파이프라인으로 Gemini CLI 호출)를
> 활용해 장황한 AI 응답을 청중별 평이한 영어로 번역하는 업무를 수행 → 정량 성과 없는
> 소규모 오픈소스 유틸리티(GitHub 스타 51개)

## 무엇을 자동화했나

Claude Code의 과장되고 장황한("BuzzFeed식") 응답 스타일을, 듣는 대상(동료/매니저/임원)에
맞춘 평이한 영어로 자동 번역해주는 Claude Code 스킬. "say that in normal english" 같은
자연어 트리거로도 작동한다.

## 어떻게 구성했나 (아키텍처)

Claude Code 내에서 별도 모델(Google Gemini CLI)을 호출하는 크로스 툴 파이프라인이 핵심
메커니즘이다:
1. Claude의 직전 응답을 임시 파일에 기록
2. `gemini -p` 명령으로 평이한 영어 스타일 지침과 함께 Gemini CLI에 파이프
3. Gemini의 번역 결과를 그대로 출력
3단계 번역 모드(동료용 기술 디테일 유지 / 매니저용 축약 / 임원용 3~5문장 요약)를 지원한다.

## 벤치마크 데이터

| 항목 | 값 | 근거 |
|---|---|---|
| 모델 | Claude Code(생성) + Gemini CLI(번역), 구체 Gemini 버전 미확인 | 원문 |
| 비용 | 미확인 | — |
| 권한 설계 | 미확인 | — |
| 성숙도 | prototype — 개인 유틸리티, README에 "재미로 만든" 성격 서술 | 자체 판단 |
| 증거 수준 | anecdotal — GitHub 스타 51개, 채택 규모 근거 없음 | 자체 판단 |

## 성과와 수치

README에 정량 사용 통계 없음. HN에서 148점(2026-08-21)으로 화제가 됐으나, 이는 도구
자체의 채택 규모가 아니라 "AI 응답 톤을 다른 AI로 검수한다"는 아이디어에 대한 커뮤니티
반응임에 유의.

## 재현 가이드

- **난이도**: 하 (Git clone + Gemini CLI 설치·인증만으로 재현 가능)
- **준비물**: Claude Code, Google Gemini CLI(`npm install -g @google/gemini-cli`) 및 계정
- **핵심 단계**:
  1. Claude Code 스킬로 `/debuzz` 명령을 등록한다
  2. 직전 응답을 임시 파일로 저장하는 훅을 만든다
  3. 저장된 응답을 `gemini -p` + 스타일 지침으로 파이프해 재작성시킨다
  4. 청중별(동료/매니저/임원) 스타일 프리셋을 프롬프트에 반영한다

## 강의·AX 활용 포인트

- **강의**: 한 AI 도구의 출력을 다른 AI 도구로 검수·재가공하는 "크로스 모델 파이프라인"
  패턴의 가벼운 예시. [[claude-code-hooks-wordswap]](정규식 치환 방식)과 같은 문제의식
  (AI 말버릇 교정)을 다른 메커니즘(모델 재호출)으로 푼 대비 사례로 함께 소개 가능.
- **AX**: 보고 대상별로 같은 내용을 다른 톤으로 자동 변환하는 아이디어는 사내 보고서
  자동화에 응용할 수 있으나, 이 사례 자체는 채택 규모·성과 근거가 없는 소규모 토이
  프로젝트임을 밝힐 것.

## 출처

- [GitHub — adnanakil/nobuzz README](https://github.com/adnanakil/nobuzz/blob/main/README.md)
- [Hacker News 토론(148점) — "Claudette: Make Claude stop talking like a BuzzFeed article"](https://news.ycombinator.com/)
