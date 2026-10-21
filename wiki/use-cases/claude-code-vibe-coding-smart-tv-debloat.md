---
type: use-case
date: 2026-10-21
tools: [claude-code]
mechanism: [vibe-coding]
domain: personal-productivity
task: 비개발자가 스마트 TV의 광고·블로트웨어 제거 및 홈스크린 재구성을 Claude Code로 자동화
outcome: 오픈소스 프로젝트로 37개 브랜드·107개 TV 모델 설정 공개, 수천 명이 동일 방식 적용 (일화, 집계 수치 미확인)
model: 미확인 (원문에 모델 버전 명시 없음, Claude Code 일반)
cost: 미확인
permissions: 로컬 WiFi 네트워크 접근 + TV 설정 변경 권한(매 변경 전 사용자 승인)
maturity: demo
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://techcrunch.com/2026/10/19/people-are-using-ai-to-make-their-smart-tvs-dumb-again/
---

> **공식**: Claude Code로 vibe-coding(평문 지시 → 코드/설정 변경 자동 실행)을 활용해
> 스마트 TV의 광고·블로트웨어 제거 및 홈스크린 재구성을 수행 → 비개발자도 복사해 쓸 수
> 있는 안전장치 프롬프트로 바이럴 확산, 오픈소스 커뮤니티 카탈로그(107개 모델)까지 형성

## 무엇을 자동화했나

2026년 10월 중순, "부모님의 스마트 TV에서 광고를 빼달라"는 개인적 요청을 Claude Code에
맡긴 사례가 Reddit·X에서 동시에 확산됐다. 핵심은 **비개발자도 TV 모델명만 주면 Claude
Code가 WiFi로 TV를 찾아 분석하고, 무엇을 끌지/켜둘지 평문으로 설명한 뒤 매 변경 전
승인을 받는 구조**다. 원조 사례(X의 @justansub)는 25개 Xiaomi 소프트웨어 패키지를 끄고
Apple TV 스타일 홈스크린을 새로 작성했고, 이 작업을 오픈소스 프로젝트 `cleanyourtv`로
공개해 37개 브랜드·107개 TV 모델의 검증된 설정을 축적했다. Reddit에서는 Samsung
Tizen TV 2건이 각각 더 깊은 변형(홈스크린 완전 교체, 웹캠 피드백 루프)으로 이어졌다.

## 어떻게 구성했나 (아키텍처)

- **안전장치가 포함된 프롬프트 템플릿**이 핵심 메커니즘이다: "TV IP로 WiFi 연결 →
  TV에 있는 모든 앱을 '꺼도 안전함 / TV에 필요함 / 내가 쓰는 앱' 3개 목록으로 평문
  분류해서 보여줘 → 여유 메모리 확인 → **변경 전 매번 나에게 물어봐**." 이 구조
  덕분에 비개발자가 그대로 복사해도 되돌릴 수 없는 실수를 할 위험이 줄어든다.
- **심화 사례(NelsonEU, Samsung Q70B)**는 두 가지 기법을 추가했다:
  1. TV가 의존하는 소수의 TV API를 **모킹(mock)**해 노트북 브라우저에서 레이아웃·
     리모컨 네비게이션을 반복 테스트 — TV에 매번 설치하지 않고 새로고침만으로
     반복(iteration) 속도를 끌어올리는, 일반적인 "로컬 개발 서버" 패턴을 하드웨어
     제어에 응용한 것.
  2. 제조사가 공식 지원하지 않는 Home 버튼 재할당을 위해 "CleanFrame" 방식 사용 —
     문서화되지 않은 TV 설정을 바꾸는 작은 헬퍼가 **원래 값을 먼저 백업**해 두고
     문제가 생기면 복원하는 롤백 안전장치를 자체 구현.
- 접속 수단은 TV의 로컬 네트워크 인터페이스(WiFi, 일부는 ADB 유사 프로토콜 추정)이며,
  별도 root 권한 없이 동작한다고 보도됨.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (보도·게시물에 버전 명시 없음) |
| 비용 | 미확인 |
| 권한 설계 | 로컬 WiFi 접근 + 설정 변경, 매 변경 전 사용자 승인(명시적 가드레일) |
| 성숙도 | demo (개인 프로젝트·오픈소스 카탈로그 수준, 기업 제품화 아님) |
| 증거 유형 | anecdotal (바이럴 확산 규모는 "수천 명"급으로 보도되나 정량 집계 없음) |

## 성과와 수치

- `cleanyourtv` 프로젝트가 **37개 브랜드·107개 TV 모델**의 테스트된 설정을 카탈로그화
  (오픈소스, 수치는 프로젝트 자체 공개분 — claimed).
- "수천 명이 이틀 사이 자신의 TV에 같은 방식을 적용했다"고 보도됐으나 정확한 집계는
  없음 — **미확인**.
- 시간·비용 절감 등 정량적 ROI 수치는 없음 — 소비자 자가 수리/커스터마이징 사례이며
  업무 생산성 지표가 아니다.

## 재현 가이드

- **난이도**: 중 (WiFi로 TV에 접속하는 방법 확인 + Claude Code 기본 사용법 필요,
  TV 모델별 변수가 커서 "그대로 따라만 하면 끝"은 아님).
- **준비물**: Claude Code, TV와 같은 WiFi 네트워크, TV의 IP 주소/모델명, (심화 적용 시)
  Node.js 등 로컬 개발 환경.
- **핵심 단계**:
  1. TV의 IP 주소와 정확한 모델명을 확인한다.
  2. Claude Code에 "변경 전 매번 물어봐" 안전장치를 포함한 프롬프트로 TV 분석을
     지시한다(raw 노트의 프롬프트 템플릿 참고).
  3. 제안된 앱 분류(끄기/유지)를 검토하고 하나씩 승인한다.
  4. 홈스크린까지 바꾸고 싶다면 `cleanyourtv`나 NelsonEU의 `arn0-tv` 저장소를
     참고해 TV API 모킹 환경을 로컬에 먼저 구성한다.
  5. 되돌릴 수 없는 설정(Home 버튼 재할당 등)은 원래 값을 백업하는 롤백 로직을
     먼저 넣는다.

## 강의·AX 활용 포인트

- **강의**: "AI 코딩 도구가 소프트웨어 개발을 넘어 가전기기 제어까지 확장된다"는
  비개발자 공감형 사례로 좋다. 특히 "매 변경 전 승인받기"라는 안전장치 프롬프트
  패턴은 사내에서 비개발자에게 에이전트형 도구를 처음 가르칠 때 그대로 전용 가능한
  가드레일 모범 사례다.
- **AX**: 직접적인 업무 자동화 사례는 아니지만, "에이전트에게 디바이스·시스템
  제어를 맡길 때 반드시 승인 체크포인트를 두라"는 설계 원칙을 경영진에게 설명할
  때 쓰기 좋은 친숙한 비유 소재(사내 IT 자산·레거시 시스템 자동화 논의로 연결 가능).

## 출처

- [TechCrunch — People are using AI to make their smart TVs dumb again](https://techcrunch.com/2026/10/19/people-are-using-ai-to-make-their-smart-tvs-dumb-again/)
- [X(@justansub) — 원조 게시물·프롬프트 전문](https://x.com/justansub/status/2111571310187053361)
- [Reddit r/ClaudeAI — I replaced my Samsung TV's home screen with Claude Code](https://www.reddit.com/r/ClaudeAI/comments/1xbzlih/i_replaced_my_samsung_tvs_home_screen_with_claude/)
- [Reddit r/ClaudeAI — I used Claude to fix my Samsung TV](https://www.reddit.com/r/ClaudeAI/comments/1xbj7jr/i_used_claude_to_fix_my_samsung_tv/)
- [GitHub — NelsonEU/arn0-tv](https://github.com/NelsonEU/arn0-tv)
- raw: [[raw/2026-10/reddit-claude-code-smart-tv-debloat-vibe-coding]]
