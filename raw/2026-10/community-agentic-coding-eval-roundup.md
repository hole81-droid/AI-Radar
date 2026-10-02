---
captured: 2026-10-03
---

# 커뮤니티 화제·도구 실사용 평가 원문 캡처 (2026-10-03 스캔)

## 1. The Four Horsemen of Agentic Coding
- URL: https://distantprovince.substack.com/p/the-four-horsemen-of-agentic-coding
- 저자: Alex Martsinovich. HN 100점.
- 에이전틱 코딩의 4가지 부작용: ① Slop(결과물 품질 — "Claude는 이제 횡설수설체로
  소통하는 것으로 유명하다", "Astra는 괴상한 경쟁형 코드골프 스타일로 쓴다") ②
  Alienation(엔지니어가 코드 생산에서 멀어지며 애착 상실) ③ Deskilling(AI 장기 사용 후
  "감이 무뎌진다"는 보고 다수, 숙련 유인 감소) ④ Team Fallout(동료와의 협업 대신 각자
  에이전트와 고립 작업하며 팀 결속 약화).
- Claude·Codex·Astra를 구체적으로 언급.

## 2. One month coding with GLM 5.3 Flash
- URL: https://wagtail.org/blog/one-month-on-glm-53-flash/
- HN 76점.
- 2026년 9월 한 달간 GLM 5.3 Flash만 쓰기로 한 챌린지 — 실제로는 2B 토큰 중 50%만
  목표 모델에 갔고 나머지는 DeepSeek V4.1 Flash·Qwen 3.8 Flash로 분산(인프라 가용성
  문제로 모델 전환 불가피).
- 비용: GLM 5.3 Flash 단독 $68(약 4kWh, 탄소 365g). MCP 서버 프로토타입 실험은
  4.5억 토�큰에 $150(5kWh).
- 벤치마크 테이블: DeepSeek V4.1 Flash가 Wagtail 태스크에서 95% 정확도, $0.09/태스크,
  14.9Wh로 비교군 중 우수.
- 결론: 폭넓은 모델 실험이 R&D·벤치마킹 업무에는 필수적이라 한 모델에 묶이기 어려움.

## 3. Claude Opus 5.5 "nerf" 논쟁 — Reddit r/ClaudeAI + 팩트체크
- Reddit r/ClaudeAI 09-23 이후 다수 게시물: "Confirmed: Opus 5.5 has been nerfed",
  "Evidence - Opus 5.5 today vs launch regression with same prompt (Godot Engine)",
  "Is Opus 5.5 Nerfed Now? LiveNerf Day 8 Update" 등 반복 제기.
- 팩트체크: https://zoogom.com/en/posts/claude-opus-5-5-nerf-rumor-fact-check-2026/
  - X·Reddit·GitHub(이슈 #96205, "Windows에서 하루만에 급격한 성능 저하") 보고 09-23부터 시작.
  - **"Anthropic이 Opus 5.5의 가중치·양자화 품질·서빙 컴퓨트를 출시 후 광범위하게
    낮췄다는 공개 증거는 없다."** 사용자 보고는 동일 프롬프트·응답ID 비교, 반복 A/B
    테스트 없이 인상 비교에 그침.
  - 문서화된 기술적 설명 5가지: ① 안전 분류기가 사이버보안·생물학·프론티어-LLM
    주제 요청을 Opus 5·4.8로 자동 라우팅(고지는 되지만 사용자가 놓치기 쉬움)
    ② Opus 5.5 기본 effort가 `medium`(Opus 5는 `high`) — 설정 안 맞추면 불공정 비교
    ③ "thinking" 표시 방식이 텍스트 대신 도구 호출 사이 진행 메모로 바뀌어 "멈춘 것
    처럼" 보일 수 있음 ④ 장기 세션에서 누적된 stale 상태·압축 요약이 성능에 영향
    ⑤ 과거 라우팅 오류·TPU 컴파일러 버그 등 인프라 이슈가 가중치 변경 없이도 품질을
    저하시킨 전례.
  - 평가: 통제된 방법론 없는 산발적 불만, "출시 직후 회의론" 성격이 강하고 지속적
    성능저하로 확정할 근거는 약함.
