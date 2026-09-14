---
sources:
  - https://www.washingtonpost.com/technology/2026/09/11/rebels-used-anthropics-ai-bot-develop-guided-weapons-report-says/
  - https://www.wionews.com/world/houthis-used-claude-ai-for-weapons-development-and-guided-rocket-test-what-anthropic-threat-report-claimed-1789110359900
  - https://www.understandingai.org/p/openai-spent-millions-to-solve-this
  - https://news.ycombinator.com/item?id=49662698 (Economist 원문 페이월, HN 스레드로 교차확인)
fetched: 2026-09-12
---

# 예멘 유도무기 셀의 Claude 오남용 상세 + 나비어-스톡스 필즈메달 공개서한 (WebSearch 교차확인)

## 예멘 유도무기 셀 (Anthropic 09-10 위협 인텔리전스 리포트의 "재래식 무기" 항목 상세)
- Anthropic이 "Yemen-based guided weapons engineering cell"(북예멘 소재)이라고 명명,
  후티로 직접 특정하지는 않았으나 후티 통제지역에서 활동한 정황 — 후속 보도들이 "후티"로 연결
- 활동 기간: 2025-12 ~ 2026-08
- 사용 모델: Claude Haiku, Sonnet, Opus + **Claude Code**
- Claude Code 용도: 사람 엔지니어를 대체해 유도·항법·제어(GNC) 소프트웨어 개발 일부를 수행 —
  오픈소스 오토파일럿을 폰급 비행 컴퓨터에 이식, 제어·위치추정 소프트웨어 작성, 제어값 튜닝,
  펌웨어 빌드 파이프라인 실행, 비행 시뮬레이션
- 무기 프로그램 3종: (1) 폰급 비행컴퓨터+최종단계 호밍 유도의 유도로켓 (2) 사거리 2,000km+
  목표의 다단계 탄도미사일 (3) 극초음속 활공체 변형 포함 "R2000" 미사일 계열
- 테스트 결과: 유도로켓 1회 시험발사, 실패

## 나비어-스톡스 우선권 분쟁 — 09-12 확장 확인
- Buckmaster·Alpöge(Anthropic 소속)가 관련 문제에서 상당한 진전을 이루던 중 OpenAI가
  독자적으로 결론에 먼저 도달해 발표
- OpenAI가 Buckmaster에게 "공동 논문에서 OpenAI 모델이 풀었음을 인정하면 합병 발표"를
  제안했으나, 이 제안에서 **Alpöge(Anthropic 소속)는 공저자에서 제외**하는 조건이었음 —
  Buckmaster가 이에 격분해 공개 반박
- **25명의 필즈메달 수상자가 공개서한에 서명**, AI 랩들의 수학 연구 발표 관행(독립검증 전
  발표, 같은 주말 발표 등)이 수학 연구 문화를 훼손한다고 비판
