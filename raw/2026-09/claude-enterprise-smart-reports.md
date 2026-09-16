# Claude Enterprise "Smart Reports" 베타 (원본 요약)

- 1차 출처(Help Center): https://support.claude.com/en/articles/16893491-get-started-with-smart-reports
- 2차 보도: https://claypier.com/en/claude-enterprise-smart-reports-beta/ (2026-09-14),
  https://gaiinsights.substack.com/p/anthropics-new-smart-reports-feature
- 게시 시점: 2026-09-10~09-14 사이(출처마다 09-10·09-14로 다르게 기재, 공식
  뉴스룸(anthropic.com/news)에는 별도 발표 글이 확인되지 않음 — Help Center
  문서로만 공지된 것으로 보임).

## 무엇인가

Claude Enterprise 관리자가 팀의 Claude 세션(Chat·Claude Code·Claude Cowork)을
**Claude 스스로 읽고** 어떤 업무가 이뤄졌는지, 비용이 얼마인지, 어디서 마찰이
있었는지를 산문+차트로 요약해주는 베타 기능. 기존 "얼마나 썼는지"를 세는
사용량 분석(2026-07-02 출시)에서 한 단계 나아가 "무엇을 했는지"를 해석하는
단계로 이동.

## 기능

- 범위 설정: 팀/부서, 최대 28일 기간, 대상 제품(Chat/Claude Code/Cowork), 커스텀
  질문 지정 가능.
- 출력: 업무를 워크스트림·산출물 유형별로 분류, 반복 패턴을 "공유 스킬" 후보로
  제안.
- 드릴다운: 차트에서 순위별 세션으로 이동, 한 단락 요약·산출물 유형·날짜·비용
  확인 가능.
- 마찰 분석: 커넥터 미설정, 미달성 산출물, 승인 병목, 툴 실패, 재작업(rework)
  등 실패 유형별 섹션 제공.

## 제약

- 리포트 생성에 수 시간 소요.
- 고객관리암호화(CMEK)·HIPAA 설정·Access Transparency 사용 조직, 제로 데이터
  보존(ZDR) 설정의 Claude Code Enterprise는 이용 불가.
- 개인 식별은 기본 비활성화(명시적 로그 액션을 통해서만 이름 노출).
- 베타 기간 조직당 월 10건 무료.

## 평가 메모

Anthropic 자사 제품 기능 발표(1차 소스가 공식 뉴스룸이 아니라 Help Center
문서라는 점 인용 시 유의). AI 도입 ROI를 갱신·재계약 논의 자료로 쓰도록
설계됐다는 점에서 AX 근거(uses: ax)로 유효 — "AI 투자 효과를 어떻게
측정할 것인가" 논의에 바로 연결된다.
