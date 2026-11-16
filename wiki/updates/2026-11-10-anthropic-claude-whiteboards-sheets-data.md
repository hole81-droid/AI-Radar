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

## 왜 중요한가

[[2026-10-08-anthropic-claude-dashboards-motion-launch]]의 Dashboards가 "Data"로 이름을 바꾸며 GA가 됐고, 문서·표·보드까지 한 곳에서 만드는 방향이 분명해졌다. 기업에서는 11-20 Data 기본 ON이 사실상 시한이므로, 데이터 접근 권한·certified query 운영 원칙을 그 전에 정해야 한다.

## 활용 포인트

- **ax**: 11-20 이전에 Enterprise 관리자가 Data 기본값과 웨어하우스 커넥터 권한 범위를 점검.
- **course**: 팀 회고·캠페인 트래커·예산표를 Claude로 만드는 실습 소재(Ben AI 영상 "Claude Meetings…"·"4 BIG Updates"도 같은 주간 업데이트 계열).

## 출처

- [Claude — Sheets, Whiteboards, and Data](https://claude.com/resources/articles/sheets-whiteboards-data) ([[raw/2026-11/claude-whiteboards-sheets-data]])
