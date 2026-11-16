---
type: update
date: 2026-11-10
tools: [claude]
importance: medium
uses: [ax, course]
source: https://claude.com/resources/articles/sheets-whiteboards-data
---

# Claude, Whiteboards·Sheets·Data 공개 — 협업 작업면을 Claude 안으로

## 무엇이 있었나

Anthropic이 Claude 앱 안에서 팀이 함께 일하는 세 가지 작업면을 공개했다.

- **Whiteboards(베타)**: 팀이 Claude와 함께 브레인스토밍하는 공유 보드. 말·메모를 타임라인·담당자·날짜가 있는 보드로 바꾸고 문서·덱으로 내보낸다. 회고(retro) 정리·액션아이템 도출이 대표 용도.
- **Sheets(베타)**: Claude가 탭·수식·서식·드롭다운이 있는 스프레드시트를 만들고 편집. 수정 내역이 표시된다. 기능은 단순해서 고급 작업은 xlsx·CSV 내보내기 또는 Claude for Excel로 이어간다.
- **Data(정식 GA, 구 Claude Dashboards)**: Amazon Redshift·BigQuery·ClickHouse 같은 웨어하우스에 자연어로 질의. 승인된 질의만 공유하는 certified queries·live sharing은 베타.

모든 유료 플랜에서 쓸 수 있다. Team은 기본 ON, **Enterprise는 Whiteboards·Sheets가 기본 OFF, Data는 11-20부터 기본 ON**. 관리자는 Organization settings > Artifacts에서 조정한다.

## 후속: Claude Meetings 베타 (2026-11-12)

같은 주 Anthropic이 **Claude Meetings**를 Team·Enterprise 플랜 베타로 순차 공개했다.
Claude가 영상회의(1차 지원: Google Meet)에 참여자로 "들어와" 음성·채팅으로 질문에
답하고, 회의 중 실시간으로 문서·화이트보드 등 공유 아티팩트를 만든다. 종료 후에는
claude.ai의 전용 페이지에 회의록·액션아이템을 자동 정리한다. 외부 게스트가 있는
통화에는 관리자가 명시적으로 허용하지 않으면 참여하지 않으며, 저장하는 것은
트랜스크립트·요약·화면 설명이고 **오디오 원본은 저장하지 않는다.** 베타 기간 동안
노트·트랜스크립트는 Team·Enterprise 전부 무료이고, 통화 중 생성한 문서·화이트보드
등 아티팩트는 2027-02-10까지 무료다.

## 왜 중요한가

[[2026-10-08-anthropic-claude-dashboards-motion-launch]]의 Dashboards가 "Data"로 이름을 바꾸며 GA가 됐고, 문서·표·보드까지 한 곳에서 만드는 방향이 분명해졌다. 기업에서는 11-20 Data 기본 ON이 사실상 시한이므로, 데이터 접근 권한·certified query 운영 원칙을 그 전에 정해야 한다.

## 활용 포인트

- **ax**: 11-20 이전에 Enterprise 관리자가 Data 기본값과 웨어하우스 커넥터 권한 범위를 점검.
- **course**: 팀 회고·캠페인 트래커·예산표를 Claude로 만드는 실습 소재(Ben AI 영상 "Claude Meetings…"·"4 BIG Updates"도 같은 주간 업데이트 계열).

## 출처

- [Claude — Sheets, Whiteboards, and Data](https://claude.com/resources/articles/sheets-whiteboards-data) ([[raw/2026-11/claude-whiteboards-sheets-data]])
- [TechCrunch — Anthropic launches Claude Meetings to turn workplace discussions into plans and tasks](https://techcrunch.com/2026/11/10/anthropic-launches-claude-meetings-to-turn-workplace-discussions-into-plans-and-tasks/)
