---
type: update
date: 2026-10-08
tools: [claude]
importance: medium
uses: [course, ax]
source: https://claude.com/resources/articles/dashboards-and-motion
---

# Claude Dashboards·Claude Motion 베타 출시 — 텍스트 한 줄로 대시보드·애니메이션 설명자료 제작

## 무엇이 바뀌었나

Anthropic이 2026-10-08 **Claude Dashboards**와 **Claude Motion** 두 기능을 베타로 출시했다.
RSS·1차 채널(공식 뉴스룸)에서 즉시 걸리지 않아 2026-10-08~10-11 스캔에서 모두 누락됐다가
2026-10-12 YouTube(조코딩 IT뉴스)·WebSearch 교차확인으로 뒤늦게 포착했다.

- **Claude Dashboards**(유료 플랜 베타): BigQuery·Databricks·Snowflake 같은 데이터 플랫폼이나
  Salesforce 같은 CRM에 연결한 뒤 평문으로 질문하면, Claude가 데이터를 직접 조회해 답하고
  **대시보드를 만들어 데이터가 바뀔 때마다 최신 상태로 유지**한다.
- **Claude Motion**(Team·Enterprise 베타): 메시지창에 `/motion`을 입력하면, Claude가 사용자의
  텍스트·차트·도형·이미지를 애니메이션으로 만드는 **코드를 직접 작성**한다. 별도 비디오 생성
  모델을 쓰지 않으므로 생성된 사람·영상 소스가 전혀 없고, 결과물의 모든 단어·숫자·타이밍을
  그대로 수정할 수 있다. 완성본은 MP4로 내려받거나 Adobe·Descript·HeyGen·Higgsfield·invideo·
  Luma AI·Runway로 바로 열 수 있다(Canva·Captions는 출시 예정).
- 공식 예시: 분기 보고서를 전사 회의용 30초 설명영상으로 바꾸기, 이사회 덱의 차트에 움직임을
  더하기, 고객 온보딩용 제품 워크스루 영상 만들기.

## 왜 중요한가

- 두 기능 모두 "결과물을 만드는 모델"이 아니라 **"결과물을 만드는 코드를 쓰는 모델"**이라는
  같은 설계 원리를 쓴다 — Claude Artifacts·Claude Docs·Slides와 같은 계열의 접근으로, 이미지·
  영상 생성 모델 특유의 "그럴듯하지만 손 못 대는 결과물" 문제를 코드 기반 편집 가능성으로 우회한다.
- Dashboards는 BI 툴(Tableau·Looker 등) 영역을 "자연어 질문 → 즉시 대시보드"로 축소하려는
  시도이고, Motion은 PPT/영상편집 도구 없이 사내 보고서를 설명영상으로 바꾸는 경로를 연다 —
  둘 다 "결과물을 다른 도구로 옮겨 다듬는다"는 기존 워크플로를 없애려는 흐름([[2026-09-16-anthropic-claude-cowork-chat-merge-docs-slides]])의 연장선이다.

## 활용/시사점

- **강의**: 비개발자 대상 실습에서 "말로 차트 애니메이션·대시보드 만들기"는 코딩 지식 없이
  바로 체감할 수 있는 소재다. Claude Code 등 개발자용 에이전트와 달리 입력 장벽이 낮다.
- **AX**: 데이터 플랫폼 연결(BigQuery 등)이 전제이므로, 사내 데이터 거버넌스·접근권한 설계가
  선행 과제다. 보고서 작성·설명영상 제작 외주/제작팀 업무 일부가 대체될 수 있는 영역.

## 출처

- [Claude — Build live dashboards and animate explainers with Claude](https://claude.com/resources/articles/dashboards-and-motion)
- [the-decoder — Claude can now generate animated explainer videos and live data dashboards from text prompts](https://the-decoder.com/claude-can-now-generate-animated-explainer-videos-and-live-data-dashboards-from-text-prompts/)
