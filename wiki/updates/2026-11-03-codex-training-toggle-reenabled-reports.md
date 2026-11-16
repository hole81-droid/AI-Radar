---
type: update
date: 2026-11-03
tools: [codex, gemini]
importance: medium
uses: [ax]
source: https://news.ycombinator.com/item?id=50352757
---

# "Codex의 학습 데이터 사용 토글이 몰래 다시 켜졌다" 사용자 보고 — Gemini도 구독자 대화 학습 논란

## 무엇이 있었나
- **Codex**: 11-03 HN(536점)에 "Improve the model for everyone" 토글을 꺼 뒀는데 약 11-03에 다시 켜져 있었다는 보고가 올라왔다. 9월에도 같은 유형의 스레드(487점)가 있었다. OpenAI의 공식 확인·설명은 11-11까지 없었다 — **사용자 보고이며 재현은 미확인**. Codex에는 ChatGPT 데이터 설정과 별개인 "Include environments" 스위치가 따로 있어, ChatGPT 쪽만 끄면 Codex 환경 컨텍스트가 학습에 쓰일 수 있다고 한다(OpenAI 도움말 근거, 2차 요약 경유).
- **Gemini**: 11-04 Tell HN(737점)은 개인 구독 계정에서도 Gemini가 대화 이력으로 학습한다는 주장 — 본문 미열람, 제목 수준 확인.

## 왜 중요한가
코드·사내 맥락을 다루는 도구의 학습 제외 설정이 **갱신 시 되돌아간다는 의혹**만으로도 기업 도입 심사에 영향을 준다. 개인 계정 사용 금지, 기업용 플랜(학습 제외 계약), 설정 정기 점검을 규정에 넣을 근거.

## 활용 포인트
- AX: 정기 설정 감사 체크리스트(두 스위치 모두 확인).
- 연관: [[codex]], [[gemini]]
