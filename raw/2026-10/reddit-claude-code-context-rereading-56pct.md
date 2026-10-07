# r/ClaudeAI — "56% of my Claude Code usage was Claude re-reading the conversation"

- URL: https://www.reddit.com/r/ClaudeAI/comments/1wzhbfc/56_of_my_claude_code_usage_was_claude_rereading/
- 작성자: u/stichstichstich
- 게시일: 2026-10-06T23:17:48Z
- 수집 경로: r/ClaudeAI top/.rss?t=day + 퍼머링크 .rss (2026-10-08 스캔)

## 본문 전문 (번역 핵심)

- 6개월치 본인 Claude Code 트랜스크립트를 API 요금으로 환산해 분석.
- 실제 유용한 작업에 쓰인 비용은 **20%뿐**. **56%는 대화를 다시 읽는 데** 쓰임 — 매 호출이 전체 컨텍스트를 다시 전송하기 때문. 호출의 거의 절반이 20만 토큰을 초과.
- 테스트 중인 대응 2가지: ① 무관한 소작업 전 `/clear` ② `~/.claude/settings.json`에 `"env": {"CLAUDE_CODE_AUTO_COMPACT_WINDOW": "200000"}`로 조기 압축.
- 다음 주 실제 전/후 수치를 공개하겠다고 예고(이번 스캔 시점 미공개).
- **수정(Edit)**: 캐싱 관련 질문에 답하며 "재읽기는 할인된 캐시 읽기 요금으로 과금되며, 56%는 이미 그 할인 반영 후의 수치"라고 명시.

## 댓글 자동 요약(모더레이터 봇, 50개 댓글 기준)

- 총평: "당연한 결과다" — LLM은 상태가 없어(stateless) 매번 전체 맥락을 다시 읽어야 하는 게 현재 구조의 본질.
- 반박: 56%가 "풀 프라이스"로 계산된 것처럼 보이는 주장은 오해 — 실제로는 캐시 할인 토큰이 대부분이라, 목표는 "컨텍스트를 줄이기"가 아니라 "캐시 적중률을 최대화하기"가 돼야 한다는 지적. (단, 작성자는 이미 이 지점을 Edit로 반영했다고 밝힘)

## 수집 메모

- 1인 실측(API 요금 환산)이나 제3자 검증 없음, 캐싱 효과를 둘러싼 커뮤니티 내 해석 차이가 있음 — "주장 vs 논쟁 중"으로 다뤄야 함.
- `/clear`·`CLAUDE_CODE_AUTO_COMPACT_WINDOW` 설정은 재현 가능한 기법이나, 전/후 수치가 아직 공개되지 않아 use-case 승격은 보류.
