---
type: update
date: 2026-09-14
tools: [claude]
importance: medium
uses: [ax]
source: https://support.claude.com/en/articles/16893491-get-started-with-smart-reports
---

# Claude Enterprise, 팀 사용 세션을 스스로 읽고 요약하는 "Smart Reports" 베타 공개

## 무엇이 있었나

Anthropic이 Claude Enterprise 관리자용 신규 베타 기능 "Smart Reports"를 공개했다.
기존에는 "얼마나 썼는지"(호출 수·비용)만 보여주던 사용량 분석에서 한 단계 나아가,
**Claude가 팀의 세션(Chat·Claude Code·Claude Cowork) 내용을 직접 읽고** 어떤 업무가
이뤄졌는지, 비용이 얼마인지, 어디서 마찰(friction)이 있었는지를 산문과 차트로
요약해준다.

- **범위 설정**: 팀/부서, 최대 28일 기간, 대상 제품, 커스텀 질문을 지정할 수 있다.
- **출력**: 업무를 워크스트림·산출물 유형별로 분류하고, 반복되는 패턴을 "공유 스킬"
  후보로 제안한다. 차트에서 순위별 세션으로 드릴다운하면 한 단락 요약·산출물 유형·
  날짜·비용을 볼 수 있다.
- **마찰 분석**: 커넥터 미설정, 미달성 산출물, 승인 병목, 툴 실패, 재작업(rework)
  등 실패 유형별로 별도 섹션을 제공한다.
- **제약**: 생성에 수 시간 소요, 고객관리암호화(CMEK)·HIPAA·Access Transparency·
  제로 데이터 보존(ZDR) 설정 조직은 이용 불가. 개인 식별은 기본 비활성화. 베타 기간
  조직당 월 10건 무료.

> **출처 메모**: 공식 뉴스룸(anthropic.com/news)에는 별도 발표 글이 확인되지 않고,
> Claude Help Center 문서로만 공지된 것으로 보인다(게시 시점도 2차 보도마다
> 09-10·09-14로 엇갈림 — 이 페이지는 상세도가 높은 09-14 보도 기준으로 기록).

## 왜 중요한가

기업이 AI 도구 도입 효과를 "느낌"이 아니라 데이터로 보고해야 하는 압박이 커지는
가운데, 벤더가 직접 "이 도구로 실제로 무슨 일이 일어났는지"를 자동 서술해주는
기능을 내놓은 것이다. Anthropic은 이를 **재계약(renewal) 논의에서 AI 투자 대비
효과를 입증하는 자료**로 포지셔닝하고 있다.

## 활용/시사점

- **AX**: AI 도입 ROI를 측정할 때 "사용량"이 아니라 "무엇을 했고 어디서 막혔는가"를
  보는 것이 다음 단계라는 신호. 사내 AI 도입 현황 보고 체계를 설계할 때 참고할 수
  있는 벤치마크 기능.
- **강의**: "AI 도입 효과 측정"을 주제로 한 임원 대상 과정에서, 벤더가 제공하는
  자동 분석 도구의 장단점(수 시간 소요, 특정 보안 설정 조직은 이용 불가 등)을
  토론 소재로 쓸 수 있다.
- 같은 시기 Claude Code 사용한도 논쟁(→ [[2026-08-31-claude-code-weekly-limit-change]])이
  "사용자가 직접 계측"하는 쪽으로 흐른 것과 대조적으로, 이 기능은 "벤더가 대신
  해석해주는" 접근이라는 점도 흥미로운 대비다.

## 출처

- [Claude Help Center — Get started with smart reports](https://support.claude.com/en/articles/16893491-get-started-with-smart-reports)
- [claypier — Claude Enterprise Adds Smart Reports in Beta, With 10 Free Reports a Month](https://claypier.com/en/claude-enterprise-smart-reports-beta/)
