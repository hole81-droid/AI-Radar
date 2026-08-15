# GLM-5.3: Frontier coding with emergent cyber capabilities

- 원문: https://www.alphaxiv.org/abs/2608.glm-5 (기술 리포트) / https://the-decoder.com/zhipu-ai-releases-glm-5-3-claims-its-the-strongest-open-weights-coding-model/ / https://www.techtimes.com/articles/324426/20260814/glm-53-post-training-produced-exploit-chains-zai-never-planned-finds-1097-critical-bugs.htm
- 수집일: 2026-08-15 (스캔), 발표일: 2026-08-14

## 요약 (WebSearch 종합)

Zhipu AI(중국)가 2026-08-14 차세대 모델 **GLM-5.3**을 공식 출시. 베이스 모델은 GLM-5.2와
동일하게 유지한 채, 포스트트레이닝(post-training) 극한 스케일링만으로 성능 향상을 이뤘다고
주장.

### 코딩 성능
- 자체 내부 평가에서 GLM-5.2 대비 코딩 능력 50% 향상.
- Terminal Bench 3.0, Agents' Last Exam 등 공개 벤치마크에서 오픈소스 모델 중 1위.
- 코딩·에이전트 능력이 Claude Fable 5에 근접한다고 자평.

### 이머전트 사이버 능력 (핵심 화제)
- 사이버보안 역량이 회사가 의도한 수준을 넘어 스스로 성장 — 멀티스텝 익스플로잇 체인
  추론까지 도달, "계획하지 않았던" 능력이라고 회사 스스로 인정.
- 269개 프로젝트에서 2,436개 취약점을 발견(최대 40년 된 코드 포함).
- CyberGym 벤치마크 84.5%로 Mythos 5·GPT-5.6 Sol을 근소하게 상회. 단 ExploitBench 같은
  심층 익스플로잇 과제에서는 여전히 폐쇄형 프론티어 모델과 격차 존재.

### 출시 방식
- 가중치(weights)는 발표 2주 후 오픈소스 공개 예정 — GLM 시리즈 최초로 안전성 검토를
  이유로 공개를 미룸.
- HN 프론트페이지 1위(1015점, 2026-08-15 확인 기준).

## 참고 링크
- https://finance.biggo.com/news/0b571a42-9531-433c-b81b-c8468d173989
- https://blog.sandbase.ai/glm-5-3-release-watch-2026/
- https://the-agent-report.com/2026/08/glm-5-3-zai-post-training-coding-cyber/
