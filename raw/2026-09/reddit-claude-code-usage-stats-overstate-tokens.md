# Reddit r/ClaudeAI — "Claude Code's /usage Stats tab overstates your tokens ~2x. Reported on GitHub since Aug 2025, still unfixed." (원본 요약)

- 원문: https://www.reddit.com/r/ClaudeAI/comments/1whuvcf/claude_codes_usage_stats_tab_overstates_your/
- 작성자: u/Background-Basis-672
- 게시일: 2026-09-16
- 관련 스크립트: https://www.hallengrens.com/files/count_claude_tokens.py
- 상세 글: https://www.hallengrens.com/insights/the-meter-shows-double/

## 내용

`~/.claude/projects` 원본 트랜스크립트를 직접 재계산한 결과, Claude Code의
`/usage` 화면 중 **Stats 탭이 토큰 수를 실제의 약 2배로 표시**한다는 버그를
확인. 원인은 Claude Code가 콘텐츠 블록 하나당 트랜스크립트 행을 하나씩 쓰는데,
각 행이 해당 호출의 전체 사용량을 반복 기록하기 때문(원 버그 리포트 예시:
1,647 requests vs 4,430 rows).

- 같은 화면의 **Usage 탭**과 `claude -p --output-format json`은 올바르게
  중복제거(dedupe)함. Anthropic 공식 문서도 message id 기준 dedupe를 권장.
- GitHub에 2025년 8월 이후 **5회** 제보(#6805, #87303, #90991, #91775, 데스크톱
  앱용 #94224는 이번 주 일요일 제보) — 아직 담당자 응답 없음.
- **과금에는 영향 없음**(빌링·한도는 서버 사이드로 별도 계산). 다만 사용자가
  "내 플랜이 실제로 뭘 주는지" 자체 판단하거나 타 벤더와 비교할 때 쓰는
  수치가 왜곡됨.

## 평가 메모

evidence: measured(원본 트랜스크립트 재계산, 스크립트 공개). 같은 날 확산 중인
"사용한도 체감 감소" 논쟁에 "체감 수치 자체가 UI 버그로 부풀려져 있을 수 있다"는
반대 방향의 팩트를 더하는 항목 — [[2026-08-31-claude-code-weekly-limit-change]]
후속 크로스링크 대상.
