# "바이브 코딩"으로 스마트 TV 광고·블로트웨어 제거 — Claude Code 비개발자 확산 트렌드

- 커뮤니티 소스: r/ClaudeAI top/day RSS (www.reddit.com, UA: ai-radar-wiki:v1.0)
- 핵심 게시물:
  - https://www.reddit.com/r/ClaudeAI/comments/1xbzlih/i_replaced_my_samsung_tvs_home_screen_with_claude/
    (/u/NelsonEU — Samsung Q70B 홈스크린 교체)
  - https://www.reddit.com/r/ClaudeAI/comments/1xbj7jr/i_used_claude_to_fix_my_samsung_tv/
    (/u/0xVic — Tizen TV, 웹캠으로 화면 피드백 루프 구성)
- 2차 보도: https://tech.yahoo.com/home/articles/people-vibe-coding-ads-smart-221604591.html,
  https://techcrunch.com/2026/10/19/people-are-using-ai-to-make-their-smart-tvs-dumb-again/,
  https://x.com/justansub/status/2111571310187053361 (원조 바이럴 게시물, /u/Gathin T.)
- 사건일: 트렌드 확산 2026-10-19~10-21 (원조 게시물은 그 이전)
- 수집: Reddit RSS + WebSearch 교차확인

## 핵심 내용

- **원조 사례(Ansub/Gathin T.)**: 부모님의 구형 Xiaomi Android TV가 Netflix 진입 전
  스폰서 광고를 띄우는 문제. Claude Code에 TV 모델명만 주고 WiFi로 TV를 찾게 해
  25개 Xiaomi 소프트웨어 패키지를 끄고 Apple TV 스타일의 새 홈스크린을 작성.
  오픈소스 프로젝트 `cleanyourtv`로 공개, 37개 브랜드·107개 TV 모델의 테스트된
  설정을 정리.
- **프롬프트 핵심 구조**(안전장치 포함): "IP 주소로 WiFi 연결 → 바꾸기 전에 모든 앱을
  평문으로 '꺼도 안전함/TV에 필요함/내가 쓰는 앱' 3개 목록으로 분류해서 보여줘 →
  여유 메모리 확인 → 바꾸기 전 매번 나에게 물어봐." → 비개발자도 그대로 복사해 쓸 수
  있는 구조.
- **NelsonEU 사례(심화)**: Samsung Q70B(2022년형)의 홈스크린 자체를 Claude Code로
  재작성(시계+실제 쓰는 앱+콘솔만). 핵심 트릭 2가지:
  1. TV가 의존하는 소수의 TV API를 **모킹(fake)**해서 노트북 브라우저에서 레이아웃·
     리모컨 네비게이션을 바로 반복 작업 — TV에 매번 설치할 필요 없이 새로고침만으로
     반복(iteration) 속도 대폭 향상.
  2. Home 버튼 자체를 가져가는 공식 방법이 없어 **"CleanFrame" 방식** 사용 — 문서화
     되지 않은 TV 설정 몇 개를 수정하는 작은 헬퍼가 원래 값을 먼저 저장해두고, 문제가
     생기면 복원.
  코드: https://github.com/NelsonEU/arn0-tv / 작성자 본인 Medium 글에 전체 과정 공개
  (medium.com/@arnaudetienne, WebFetch 403으로 본문 직접 확인은 실패, Reddit 게시물
  본문으로 핵심 기법 확인).
- **0xVic 사례**: Samsung Tizen TV(Android 아님) — 웹캠을 TV에 비추게 해 Claude가
  화면을 보면서 작업하는 피드백 루프 구성(세부는 코멘트에서 이어짐, 본문은 요약).
- 2026-10-19 TechCrunch·2026-10-21 Yahoo 등 복수 매체가 "스마트 TV를 다시 멍청하게
  만드는" 트렌드로 별도 보도 — 커뮤니티 발 트렌드가 미디어로 확산된 사례.

## 수집 메모

- "vibe coding"이라는 용어 자체가 이 트렌드를 가리키는 고유명사로 쓰임(TechCrunch,
  Yahoo 보도 공통).
- 비개발자가 "안전장치가 포함된 프롬프트"만으로 디바이스 자동화를 할 수 있다는 점이
  특징 — Claude Code의 범용 디바이스 제어 능력을 보여주는 좋은 교육용 소재.
