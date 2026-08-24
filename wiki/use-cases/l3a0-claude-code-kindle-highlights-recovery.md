---
type: use-case
date: 2026-08-24
tools: [claude-code]
mechanism: [skills, browser-agent]
domain: personal-productivity
task: Kindle 노트북 내보내기에서 잘리거나 숨겨진 하이라이트를 복구해 단일 마크다운으로 통합
outcome: 실제 책 4권 2,432개 하이라이트 추출, 그중 차단됐던 815개(잘림 454+숨김 361) 전부 복구
model: 미확인 (Claude Code + Claude Desktop "Control Chrome" 확장 전제, 특정 Claude 모델 버전 원문 미기재)
cost: 미확인
permissions: 미확인 (로컬 Chrome·Kindle 앱·SQLite 파일 접근 필요, 세부 권한 설계는 원문에 없음)
maturity: prototype
evidence: measured
importance: low
uses: [course]
source: https://github.com/l3a0/claude-plugins
---

# l3a0 kindle-highlights — Claude Code Skill로 Kindle 내보내기 제한 하이라이트 복구

> **공식**: Claude Code Skill(skills, Chrome 브라우저 제어 + 로컬 SQLite·OCR 파이프라인)을
> 활용해 Kindle 노트북 하이라이트 내보내기 제한 문제를 해결하는 업무를 수행 → 실제 책
> 4권에서 하이라이트 2,432개 추출, 차단됐던 815개까지 전부 복구

## 무엇을 자동화했나

Amazon Kindle 노트북 페이지(`read.amazon.com/notebook`)에서 하이라이트를 내보낼 때
"일부 강조가 내보내기 제한으로 인해 숨겨지거나 잘렸습니다"라는 안내와 함께 일부
텍스트가 잘리거나 완전히 숨겨지는 문제가 있다. 이 Claude Code 스킬(`/l3a0:kindle-highlights`)은
책의 모든 하이라이트를 위치 인용과 함께 하나의 마크다운 파일로 정리하면서, 내보내기
제한으로 잘리거나 숨겨진 부분까지 복구한다.

## 어떻게 구성했나 (아키텍처)

3단계 파이프라인으로 구성된다:

1. **웹 스크래핑(browser-agent)**: Claude Desktop의 "Control Chrome" 확장으로 Chrome을
   직접 제어해 `read.amazon.com/notebook` DOM에서 모든 하이라이트를 JSON으로 추출.
2. **로컬 DB 대조**: Mac Kindle 앱의 로컬 SQLite 주석 데이터베이스에서 정확한 문자
   위치 정보를 읽어, 웹 내보내기가 숨긴 하이라이트의 위치를 식별.
3. **OCR 복구**: 내보내기가 차단한 구간은 Kindle Cloud Reader 페이지를 캔버스로
   캡처한 뒤 Apple Vision 프레임워크로 로컬 OCR 처리해 텍스트를 복원.
4. 최종적으로 위치 섹션·인용문·"복구됨" 플래그를 포함한 통합 마크다운 파일을 생성.

macOS 전용이며 Claude Desktop Control Chrome 확장, 로그인된 Chrome·Mac Kindle 앱,
Xcode Command Line Tools, Python3가 전제 조건이다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Claude Code 전제, 구체 모델 버전 원문 미기재) |
| 비용 | 미확인 (로컬 실행, 별도 API 과금 언급 없음) |
| 권한 설계 | 미확인 (로컬 Chrome 제어·Kindle 앱 DB·파일시스템 접근이 필요하다는 서술만 있음) |
| 성숙도 | prototype — 개인 GitHub 플러그인 저장소의 스킬 1종, 상용화 근거 없음 |
| 증거 수준 | measured — 저자가 실제 책 4권에 대한 처리 결과 수치를 README에 공개 |

## 성과와 수치

- **실측(measured)**: 책 4권에서 하이라이트 2,432개 추출, 그중 내보내기 제한으로
  차단됐던 815개(잘림 454개 + 완전 숨김 361개) 전량 복구.
- HN에서 40점(2026-08-24)으로 소규모 화제. 독립 재현·제3자 검증은 확인되지 않음.

## 재현 가이드

- **난이도**: 중 (macOS 전용, Claude Desktop Control Chrome 확장·Kindle 앱·Xcode CLI·
  Python3 등 로컬 환경 구성이 필요)
- **준비물**: Claude Desktop(Control Chrome 확장), Amazon 계정 로그인된 Chrome, Mac
  Kindle 앱(동일 계정), Xcode Command Line Tools, Python3
- **핵심 단계**:
  1. `claude plugin marketplace add l3a0/claude-plugins` → `claude plugin install l3a0@l3a0`
  2. Kindle 노트북 페이지를 Chrome으로 열어 스킬이 DOM을 스크래핑하도록 요청
  3. Mac Kindle 앱 SQLite DB에서 위치 정보를 대조해 숨겨진 하이라이트 식별
  4. 차단된 구간은 Cloud Reader 캡처 + OCR로 복구해 최종 마크다운 통합

## 강의·AX 활용 포인트

- **강의**: "웹 스크래핑 + 로컬 DB 대조 + OCR 복구"를 하나의 Claude Code 스킬로 엮은
  전형적인 개인용 데이터 복구 자동화 사례. 브라우저 제어(browser-agent)와 로컬 파일
  접근을 조합하는 스킬 설계 패턴 예시로 쓸 수 있다.
- **AX**: 업무 규모는 작지만, "벤더가 의도적으로 제한한 데이터 내보내기를 여러 소스를
  교차 대조해 우회 복구"하는 접근 자체는 사내에서 레거시 시스템의 제한적 내보내기
  기능을 보완하는 아이디어로 참고할 수 있다. 다만 실측 수치가 개인 4권 처리 사례
  하나뿐이라 규모 확장성은 검증되지 않았음을 명시할 것.

## 출처

- [GitHub — l3a0/claude-plugins README](https://github.com/l3a0/claude-plugins)
- [Hacker News 토론(40점) — "A Claude Code skill that recovers export-blocked Kindle highlights"](https://news.ycombinator.com/item?id=49424758)
