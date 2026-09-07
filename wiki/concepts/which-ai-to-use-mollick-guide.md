---
type: concept
date: 2026-07-23
tools: [claude-code, codex, chatgpt, gemini]
importance: high
uses: [course, ax]
source: https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22
---

# "어떤 AI를 언제 쓰는가" — Mollick의 도구 선택 가이드 (2026 여름판)

> **채택 근거(화제성)**: Ethan Mollick(One Useful Thing)의 2026-07-23 글.
> 좋아요 **1,246건·댓글 52건**으로, 같은 뉴스레터 최근 23편 평균(좋아요 1,137건)을
> 웃돈다. 2026-09-01 첫 백필에서는 이 뉴스레터의 창 안 2건 중 "Agency and Agents"만
> 검토하고 이 글은 스크리닝에서 빠졌다 — 2026-09-03 개정 규칙(화제성 우선)으로
> 재발굴한 항목이다.

## 무엇인가

Wharton 교수 Ethan Mollick이 "AI가 여러 개인데 무엇을 언제 쓸지 모르겠다"는 가장
흔한 실무 질문에 답한 **의사결정 가이드**다. 도구 목록이 아니라 **작업의 위험도와
필요한 자율성 수준으로 분기하는 판단 트리**라는 점이 핵심이다.

강의 소재로서 가치가 특히 높다 — 비개발자 청중에게 "AI 도구 선택"을 가르칠 때
그대로 쓸 수 있는 뼈대이고, 저자가 실제로 돌려본 사례가 붙어 있다.

## 1축 — 작업의 위험도

| 작업 성격 | 권장 | 근거 |
|---|---|---|
| 저위험(레시피·가벼운 질문·편지) | 무료 모델로 충분 | 오류의 대가가 작다 |
| 고위험(의료·법률 조언) | 상위 모델을 "High" 이상 사고 수준으로 | 오류율이 유의하게 낮다 |
| 자율성이 필요한 실무 | 월 $20 이상 유료 구간 | 도구 접근·긴 작업이 필요 |

고위험 구간에 대한 원문 지목: *"Claude's most powerful models, Opus and Fable, or
ChatGPT's GPT-5.6 Sol, set to at least the 'High' thinking levels"*.

## 2축 — 에이전트를 어디서 돌릴 것인가

**클라우드형** — ChatGPT Work / Claude Cowork.
회사 서버에서 동작하고 어느 기기에서든 접근되지만 할 수 있는 일이 제한적이다.
Mollick 사례: MBA 세미나 준비를 맡겨 **이메일 검토·자료 조사·답신 초안 작성을
약 10분** 만에 처리.

**데스크톱형(가장 강력)** — ChatGPT Codex / Claude Code.
컴퓨터에 직접 접근해 다중 파일 복합 프로젝트를 수행한다.
Mollick 사례: "GPT-5.6 Sol in Codex"로 **300쪽 넘는 원고의 참고문헌 195건을 30분에
전수 검증**, 정확도 완벽.

**컴퓨터 사용(computer use)** — 모델이 마우스·브라우저를 직접 조작.
예시로 Blender를 스스로 내려받아 3D 모델을 제작한 사례를 든다.

이 구분은 이 위키가 [[loop-engineering]]·[[vibe-coding-vs-agentic-engineering]]에서
다뤄 온 "채팅 → 루프 → 하네스" 계보와 같은 축을 비개발자 언어로 옮긴 것이다.

## 3축 — 작업별 특화 도구

| 작업 | 추천 |
|---|---|
| 영상 편집·분석 | Gemini Omni (그림자·반사까지 네이티브 편집) |
| 리서치 종합 | Gemini Notebook (구 NotebookLM) |
| 이미지 생성 | ChatGPT 또는 Google Gemini (Claude는 내장 이미지 도구 없음) |
| 자연스러운 대화 | ChatGPT GPT-Live (실감 나는 페이싱의 네이티브 음성) |

## 안전 지침 (그대로 실무 체크리스트로 쓸 만함)

- 이메일 발송·지출·파일 삭제가 걸린 동작은 신뢰가 쌓이기 전까지 **승인 요구를 켜 둔다**
- AI 접근 범위를 **비민감 애플리케이션으로 한정**한다
- 외부 소스發 **프롬프트 인젝션**을 상시 감시한다

## 운영 철학

**"채팅이 아니라 팀을 관리하듯 다뤄라"**(managing a team rather than chatting).
결과물을 무비판적으로 받지 말고 반복 교정과 인간 판단을 개입시키라는 것으로,
[[directing-ai-agents-vs-prompting]](MIT Sloan)의 "프롬프팅이 아니라 지시하라"와
같은 결론에 서로 다른 경로로 도달했다.

## 강의·AX 활용 포인트

- **강의**: 1강 도입부의 "도구 지도" 슬라이드로 그대로 전용 가능. 위험도·자율성
  2축은 비개발자에게 가장 잘 먹히는 분류다.
- **AX**: 전사 도구 표준 수립 시 "무엇을 무료로 두고 어디부터 유료 좌석을 살지"의
  근거. 안전 지침 3개는 사내 AI 사용 규정 초안으로 바로 옮길 수 있다.
- **주의**: 참고문헌 195건 검증·MBA 세미나 준비는 **저자 1인의 일화**이고 재현
  검증은 없다. 수치로 인용하지 말고 "가능한 작업의 예"로 쓸 것.

## 출처

- 원문: https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22
- 수집 원문 요약: `raw/2026-09/mollick-opinionated-guide-which-ai-to-use.md`
