# Linus Torvalds's first LLM-assisted patch series (2026-10-14)

- 1차 소스: https://lwn.net/Articles/1100449/
- 보조 소스: https://itsfoss.com/news/linus-torvalds-claude-code-linux/
- HN 토론: https://news.ycombinator.com/item?id=50090842 (109점, 2026-10-14)

## 핵심 내용 (WebFetch 정독 요약)

- Torvalds가 커널 브랜치 `noref-filemap-read-with-llm`에 8~10개 패치로 구성된
  시리즈를 공개. 여러 스레드가 동일 캐시 파일을 읽을 때 folio 참조카운터 경합으로
  속도가 떨어지는 병목을 "hot" folio 감지 + RCU 유예 기간 활용으로 제거.
- Torvalds 본인이 커밋 메시지에서 직접 밝힌 역할 분담: "코드, 테스트 프로그램,
  [알려진 문제점] 목록 뒤의 리뷰, 이 설명의 첫 초안은 LLM 코딩 어시스턴트(Claude
  Code)가 그의 지시 하에 작성했다." 성능 측정은 Torvalds 본인이 직접 수행.
- 성능: 8스레드 동시 읽기 처리량 초당 약 1,000만 회 → 3,000만~3,300만 회(약 3배,
  LWN은 "order-of-magnitude speedup"으로 표현).
- 리뷰 중 레이스 컨디션 발견 — 추가 수정 필요, 아직 병합 전.
- Torvalds 발언: "I actually really like using AI" / AI를 "to do the things that
  I'm bad at"에 쓴다 / "treated as a tool"로 쓰면 잘 작동 / 동시에 "the load it
  puts on maintainers has become a real problem"(메인테이너 부담 증가는 실제
  문제가 됐다)고 언급.
- Maintainers Summit에서 먼저 발표 후 커뮤니티 리뷰를 위해 메일링 리스트에 게시.

## 위키 반영 판단

Linux 커널이라는 가장 보수적인 코드베이스의 최고 책임자가 Claude Code를 커밋
메시지에 직접 credit한 첫 사례이자, "AI 초안 + 전문가 전량 검증 + 실측 성능
측정" 모델을 보여주는 실측 사례라 use-case로 페이지화.
→ [[linus-torvalds-claude-code-linux-kernel-patch]]
