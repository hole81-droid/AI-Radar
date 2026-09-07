# An opinionated guide to which AI to use to do stuff

- 출처: https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22
- 저자: Ethan Mollick (One Useful Thing, Substack)
- 발행: 2026-07-23
- 참여도: 좋아요 1,246 / 댓글 52 (해당 뉴스레터 최근 23편 평균 좋아요 1,137 대비 상회)
- 수집: 2026-09-03 백필 (WebFetch 요약)

## 요지

"어떤 AI를 언제 쓸 것인가"에 대한 실무 의사결정 가이드. 작업 난이도(stakes)와
자율성 필요 수준으로 나눠 도구를 배정한다.

## 판단 기준

- **저위험 작업**(레시피, 가벼운 질문, 편지) — 무료 모델로 충분
- **고위험 의사결정**(의료·법률 조언) — 오류율이 낮은 상위 모델만.
  원문 표현: "Claude's most powerful models, Opus and Fable, or ChatGPT's GPT-5.6 Sol,
  set to at least the 'High' thinking levels"
- **자율성이 필요한 실무** — Claude 또는 ChatGPT 월 $20 이상 유료 구간

## 에이전트 시스템 (컴퓨터 접근 권한이 있는 AI)

클라우드형:
- **ChatGPT Work** / **Claude Cowork** — 회사 서버에서 동작, 기능은 제한적이나
  어느 기기에서든 접근 가능
- 사례: Mollick이 Claude에 MBA 세미나 준비를 맡김 — 이메일 검토·자료 조사·답신 초안
  작성을 약 10분 만에 완료

데스크톱형(가장 강력):
- **ChatGPT Codex** / **Claude Code** — 컴퓨터 직접 접근, 다중 파일 복합 프로젝트 가능
- 사례: "GPT-5.6 Sol in Codex"로 300쪽+ 원고의 참고문헌 195건을 30분 만에 전수 검증,
  정확도 완벽

컴퓨터 사용(computer use): 모델이 마우스·브라우저를 직접 조작.
예 — Blender를 직접 내려받아 3D 모델을 자율 제작.

## 작업별 특화 도구

| 작업 | 추천 도구 |
|---|---|
| 영상 편집·분석 | Gemini Omni (그림자·반사까지 네이티브 편집) |
| 리서치 종합 | Gemini Notebook (구 NotebookLM) |
| 이미지 생성 | ChatGPT 또는 Google Gemini (Claude는 내장 이미지 도구 없음) |
| 자연스러운 대화 | ChatGPT의 GPT-Live (실감 나는 페이싱의 네이티브 음성) |

## 안전 지침

- 이메일·지출·파일 삭제가 걸린 동작은 신뢰가 쌓일 때까지 **승인 요구를 켜둘 것**
- AI 접근 범위를 비민감 애플리케이션으로 제한
- 외부 소스發 프롬프트 인젝션을 감시

## 운영 철학

"채팅이 아니라 팀을 관리하듯 다루라(managing a team rather than chatting)" —
결과물을 무비판적으로 수용하지 말고 반복 교정과 인간 판단을 개입시킬 것.
