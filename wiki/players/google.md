---
type: player
date: 2026-07-07
tools: [gemini]
importance: high
uses: [ax]
source: https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-june-2026/
---

# Google (Alphabet) — Gemini / DeepMind

## 개요

Alphabet 산하 Google은 자체 연구조직 **Google DeepMind**(CEO Demis Hassabis)가 개발하는 **Gemini** 모델 패밀리를 축으로, AI 사업을 소비자·기업·개발자 세 층위로 전개한다.

- **소비자**: Gemini 앱(채팅·Live·Deep Research·이미지/비디오 생성), 24/7 에이전트 [[2026-06-30-google-gemini-spark-macos-mcp|Gemini Spark]], 검색 AI Overviews. 구독은 AI Plus $4.99 / AI Pro $19.99 / AI Ultra $99.99~199.99(월).
- **기업**: Workspace 통합(Docs·Sheets·Gmail의 Gemini 기능), Google Cloud Vertex AI, Gemini Enterprise.
- **개발자**: Gemini API(Managed Agents, Computer Use, MCP 지원), 에이전트 개발 플랫폼 Antigravity. 상세 제품 현황은 [[gemini]] 허브 참조.

강점은 검색·Android·Workspace라는 초대형 배포 채널과 자체 TPU 인프라, 약점은 잦은 제품 통폐합으로 인한 신뢰 비용이다.

## 최근 2주 동향 (2026-06-23 ~ 07-07)

수확과 악재가 교차한 2주였다. 제품 면에서는 **Spark의 macOS 진출과 커스텀 MCP 지원**(6/30)으로 에이전트 경쟁의 선두권을 지켰고, Workspace에서는 **Sheets 수식 오류 원클릭 수정**(6/22~) 같은 체감형 통합을 확대했다. 반면 플래그십 **Gemini 3.5 Pro는 6/30 GA 목표까지 두 차례 연기**되어 7월 중순 출시로 밀렸고, **Shazeer(→OpenAI)·Jumper(→Anthropic) 등 핵심 연구자 연쇄 이탈**로 6/22 주가가 7% 급락하며 시총 약 $270B이 증발했다. 이탈은 이후에도 이어져, 7/13 기준 DeepMind 핵심 연구자 **Jonas Adler**(AI 코딩팀 리드)·**Alexander Pritzel**(사전학습 담당)도 추가로 Anthropic에 합류한 것으로 확인됐다. → [[2026-07-13-anthropic-hires-top-researchers]] 6/18 발효된 **Gemini CLI → Antigravity CLI 강제 전환**의 오픈소스 커뮤니티 반발도 이 기간 내내 이어졌다. 요약하면: 에이전트·Workspace 제품력은 확장 중이나, 플래그십 모델 일정과 연구 인재 유지에서 경쟁 압박이 뚜렷하다.

## 최근 동향 추가 (07-16)

플래그십 **Gemini 3.5 Pro가 세 번째로 연기**됐다 — Bloomberg·Reuters 보도로는 "코딩 성능이 내부 목표 미달"이 원인이며, 새 출시일은 미정. Alphabet 주가도 하락 반응을 보였다. 같은 날 Google은 리서치 도구 **NotebookLM을 "Gemini Notebook"으로 리브랜딩**하며 노트북 내 코드 실행·크로스플랫폼 동기화를 추가해, 플래그십 모델 지연 속에서도 응용 제품으로 존재감을 유지하려는 모습을 보였다. 같은 주 중국 Moonshot AI가 프론트엔드 코딩 벤치마크에서 Claude Fable 5를 앞서는 오픈웨이트 모델 Kimi K3를 공개해, Gemini 3.5 Pro의 지연이 상대적으로 더 부각되는 구도가 됐다.

## 최근 동향 추가 (07-20)

Bloomberg 보도로 Gemini 전용 추론칩 **"Frozen v2"** 개발이 알려졌다 — 모델 아키텍처 일부를
하드웨어에 직접 새겨 전력당 처리량을 최대 10배까지 높이는 것이 목표(2028년 출시 목표).
Google Cloud의 내부 컴퓨트 부족을 완화하려는 전략이며, 보도 직후 Alphabet 주가가 상승했다.
플래그십 모델(Gemini 3.5 Pro) 지연이 이어지는 가운데서도 인프라 경쟁력은 여전하다는 신호. → [[2026-07-20-google-frozen-v2-chip]]

## 최근 동향 추가 (07-29)

FT 보도로 **Google DeepMind가 AlphaFold(2024 노벨화학상) 전담 연구팀을 해체**한 사실이
확인됐다 — 지난 1년에 걸쳐 원 논문 저자 대부분이 재배치됐고, 핵심 연구자 John Jumper는
이미 6월 Anthropic으로 이동한 상태였다. 남은 인력은 Gemini 프로젝트나 자회사 Isomorphic
Labs로 흩어졌다. DeepMind 리서치 VP는 "9년간의 단일 난제 집중 전략이 진화했다"고 설명 —
Gemini를 여러 에이전트·특화 모델의 사령탑으로 삼는 조직 철학으로의 전환을 시사한다.
→ [[2026-07-29-google-deepmind-alphafold-team-dismantled]]

**7/30 — Gemini Robotics 2 공개**: 휴머노이드 로봇 전신(발끝~손끝)을 조율하고 여러 로봇이
동시 협업하도록 하는 3종 모델 패밀리(VLA·임베디드 추론 VLM·온디바이스 VLA) 발표. 새 로봇
기종에 몇 시간 만에 적응 가능하다고 주장, 카세트 삽입·전구 교체 등 정교한 조작 시연.
→ [[2026-07-31-google-gemini-robotics-2-launch]]

## 최근 동향 추가 (08-05)

**Google DeepMind CEO 교체 — Hassabis 회장·수석과학자로, Jeff Dean 등 핵심 인력 퇴사**:
Demis Hassabis가 CEO에서 물러나 DeepMind 의장 겸 Alphabet 수석과학자로 이동하고, CTO
Koray Kavukcuoglu가 SVP로 승진해 일상 운영·Gemini 개발을 총괄한다. 27년 재직한 Jeff Dean은
Sanjay Ghemawat·Oriol Vinyals·Quoc Le와 함께 퇴사해 별도 스타트업 "Discovery Loop"를
창업(Alphabet이 창업 투자자로 참여). Alphabet 주가는 발표 직후 약 4~5% 하락 — 6월부터
이어진 핵심 연구자 연쇄 이탈([[2026-06-22-google-deepmind-talent-exodus]])·
[[2026-07-29-google-deepmind-alphafold-team-dismantled|AlphaFold 팀 해체]] 흐름이 조직
최상단까지 번진 사례로 해석된다. → [[2026-08-05-google-deepmind-leadership-shakeup]]

## 관련 업데이트

- [[2026-08-05-google-deepmind-leadership-shakeup]] — Hassabis CEO 사임(회장·수석과학자 이동), Jeff Dean 등 퇴사·Discovery Loop 창업 (high)
- [[2026-07-31-google-gemini-robotics-2-launch]] — 로봇 전신 제어 모델 Gemini Robotics 2 공개, 3종 모델·다중 로봇 협업 (medium)
- [[2026-07-29-google-deepmind-alphafold-team-dismantled]] — 노벨상 수상 AlphaFold 전담팀 해체, Jumper Anthropic 이적 재확인 (high)
- [[2026-07-20-google-frozen-v2-chip]] — Gemini 전용 추론칩 "Frozen v2", 전력당 최대 10배 효율 (medium)
- [[2026-07-01-google-gemini-3-5-pro-rollout-delay]] — Gemini 3.5 Pro 재연기, 07-16 세 번째 연기 확인(코딩 성능 미달) (high)
- [[2026-07-16-google-notebooklm-gemini-notebook-rebrand]] — NotebookLM → Gemini Notebook 리브랜딩, 코드 실행 추가 (medium)
- [[2026-06-30-google-gemini-spark-macos-mcp]] — Spark macOS 베타 + 커스텀 MCP·연동 앱 확대 (high)
- [[2026-06-22-google-deepmind-talent-exodus]] — DeepMind 인재 이탈, Alphabet 시총 $270B 증발 (high)
- [[2026-06-22-google-gemini-sheets-formula-fix]] — Sheets 수식 오류 원클릭 수정 (medium)
- [[2026-06-18-google-antigravity-cli-transition]] — Gemini CLI 종료·Antigravity 전환과 반발 (medium)

## 출처

- https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-june-2026/
- https://deepmind.google/blog/
- https://gemini.google/subscriptions/
- https://www.cnbc.com/2026/06/22/alphabet-goog-stock-ai-departures.html
