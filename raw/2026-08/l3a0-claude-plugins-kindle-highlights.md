---
source: https://github.com/l3a0/claude-plugins
captured: 2026-08-25
---

# l3a0's Claude Code Plugins

개인 컬렉션의 Claude Code 스킬을 `l3a0` 네임스페이스 아래 단일 플러그인으로 발행한 저장소입니다.

## 설치

```
claude plugin marketplace add l3a0/claude-plugins
claude plugin install l3a0@l3a0
```

스킬은 `/l3a0:<skill-name>` 형태로 호출되며, 요청이 스킬 설명과 일치하면 Claude가 자동으로 실행합니다.

## kindle-highlights 스킬

### 개요

Amazon 노트북 페이지에서 강조된 부분을 내보낼 때 일부 하이라이트가 "일부 강조가 내보내기 제한으로 인해 숨겨지거나 잘렸습니다"라는 안내로 나타나는 문제를 해결합니다.

이 스킬은 Kindle 노트북에서 책의 모든 하이라이트를 추출하여 위치 인용을 포함한 통합 마크다운 파일로 생성하며, 내보내기 제한으로 인해 차단된 부분까지 복구합니다.

**성과:** 4권의 실제 책에서 2,432개 하이라이트 추출, 그중 815개 차단된 부분(454개 잘림 + 361개 완전 숨김) 모두 복구

### 전제 조건 (macOS 전용)

1. Claude Desktop "Control Chrome" 확장 설치
2. Amazon 계정으로 로그인한 Google Chrome
3. Mac Kindle 앱 (App Store, 동일 Amazon 계정 로그인)
4. Xcode Command Line Tools (`xcode-select --install`)
5. Python3

### 동작 원리

1. 노트북 페이지 DOM에서 모든 하이라이트를 JSON으로 스크래핑
2. Kindle 앱의 SQLite 데이터베이스에서 정확한 위치 정보 읽기
3. 차단된 텍스트는 Cloud Reader 렌더링 페이지 캡처 후 Apple Vision으로 OCR 처리
4. 마크다운 파일 생성 및 QA 검사

## 라이선스

MIT

## 관련 HN 스레드

https://news.ycombinator.com/item?id=49424758 ("A Claude Code skill that recovers export-blocked Kindle highlights", 40점, 2026-08-24)
