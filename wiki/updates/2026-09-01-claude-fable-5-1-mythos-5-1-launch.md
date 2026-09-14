---
type: update
date: 2026-09-01
tools: [claude-code, claude]
importance: high
uses: [ax, course]
source: https://www.anthropic.com/claude-fable-and-mythos-5-1
---

# Claude Fable 5.1·Mythos 5.1 출시 — 코딩·지식노동 최상위 모델 업그레이드, 비용 최대 45%↓

## 무엇이 바뀌었나

Anthropic이 2026-06-09 출시한 Fable 5·Mythos 5([[2026-06-30-claude-sonnet-5]] 계열,
[[claude-code]] 허브 참고)의 후속 버전 **Fable 5.1**·**Mythos 5.1**을 출시했다. HN에서
735점을 기록하며 당일 최고 화제였다.

- **성능**: 코딩·지식노동·장시간 문제해결에서 Fable 5 대비 low/medium effort는 동등 이상,
  high/xhigh effort 구간에서 더 큰 폭으로 향상.
- **비용**: 일반 워크로드 기준 약 **25% 저렴**, 에이전틱 작업이 많은 경우 캐시 읽기
  가격 인하로 최대 **45% 저렴**.
- **안전장치 개선**: Claude Code 사용자 기준 사이버보안 관련 **오차단(false positive)이
  약 60% 감소** — 정상 보안 작업을 위험 행위로 오판해 막는 사례가 줄었다는 뜻.
- **모델 관계**: Fable 5.1과 Mythos 5.1은 **같은 모델에 안전장치 수준만 다르게** 적용한
  버전이다. Fable 5.1은 전체 공개, Mythos 5.1은 미국 내 기업·개인 대상 신뢰 접근
  프로그램 참여자로 제한된다(기존 Fable 5/Mythos 5 관계와 동일한 구조).

## 같은 날 함께 발표된 것 — Enterprise Frontier Safeguards (데이터 보관 정책 변경)

Fable 5·Mythos 5 출시(2026-06) 때 도입했던 "안전 목적의 트래픽 30일 보관" 정책이 기업
고객 반발을 불렀다. Anthropic은 이번에 **Enterprise Frontier Safeguards**를 신설해
대응했다:

- 기업이 데이터를 **자사 클라우드 인스턴스 안에 자체 보관**하며, Anthropic의 자동
  오남용 모니터링만 통과시키는 구조로 전환(Anthropic 직원의 사람 리뷰 없이 자동화
  가능).
- 추가 과금 없음. 직접 API 이용이든 클라우드 프로바이더 경유든 동일하게 제공.
- 비기업 사용자(개인 Mythos급 이용자)에게는 기존 6월 정책이 계속 적용된다.
- 배경: CNBC·Bloomberg 등이 8/20부터 보도해온 기업 고객 반발("우리 코드를 왜
  Anthropic이 들여다보나")에 대한 직접 대응.

## 왜 중요한가 (비개발자 관점)

"AI 모델이 더 똑똑해졌다"보다 이번 발표에서 기업 담당자가 눈여겨볼 대목은 **비용
25~45% 인하**와 **보안 오탐 60% 감소**다. Claude Code 등 에이전틱 도구를 실무에 쓰는
조직 입장에서 오탐이 잦으면 "매번 AI가 겁먹고 멈춘다"는 불만이 쌓이는데, 이 부분이
개선됐다는 뜻이다. 데이터 보관 정책 변경은 "AI 벤더에게 우리 데이터를 얼마나, 어떻게
맡길 것인가"라는 기업 AI 도입의 핵심 협상 지점을 벤더가 먼저 양보한 사례로 볼 수 있다.

## 후속 — Fable 5.1, 370년 묵은 암호 해독 주장 (검증 논쟁 중)

AI 평가업체 Vals AI가 Fable 5.1에게 17세기 스코틀랜드 작가 Thomas Urquhart가 1653년
저서 *Logopandecteision*에 남긴 미해독 암호("Cyphral Distich", 숫자 32개씩 두 줄)를
풀게 했더니 44분·176,000토큰 만에 규칙을 스스로 추론해 해독했다고 발표했다(같은 방식으로
1652년 저서의 8행시 285개 숫자도 해독). 결과가 암호 저자가 예고한 대로 "정확히 32글자·
각운이 맞는 두 줄"을 이뤘다는 점에서 자체 검증됐다고 주장했다. 이 소식이 09-13~09-14
Hacker News에서 790점+ 로 재부상하며 큰 화제가 됐다.

> ⚠️ 상충: 암호학 커뮤니티(Reticuli Labs, GitHub)는 Vals AI의 해독 결과에 이의를 제기했고,
> 역사 암호 전문가의 공식 검증은 아직 없다. [[2026-09-04-anthropic-claude-fermat-last-theorem-proof]]·
> [[2026-08-10-claude-riemann-hypothesis-research]] 등 이전 "AI가 난제를 풀었다" 발표들과
> 마찬가지로, **벤더/평가업체 자체 발표 단계이며 동료검증 전**이라는 점을 명시해 인용할 것.

## 활용 포인트

- **강의**: "같은 모델, 다른 안전장치 등급"이라는 Fable/Mythos 구조는 AI 배포 시
  성능과 안전 통제를 어떻게 분리 설계하는지 설명하는 좋은 예시.
- **AX**: 기업 AI 도입 시 데이터 보관·모니터링 주체를 협상 가능한 항목으로 인식하고,
  벤더 계약에 "자사 클라우드 내 보관" 옵션 유무를 체크리스트화할 근거로 쓸 수 있다.
  Claude Code 오탐 감소는 실무 도입 저항(승인 피로) 완화 사례로 [[loop-engineering]]과
  함께 참고할 만하다.

## 출처

- [Anthropic 공식 — Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)
- [Anthropic 공식 — Developing Enterprise Frontier Safeguards with our customers](https://www.anthropic.com/news/enterprise-frontier-safeguards)
- [Hacker News 토론 (737점)](https://news.ycombinator.com/item?id=49525378)
- [VentureBeat — Anthropic's Claude Fable 5.1 and Mythos 5.1 arrive with a 75% cost reduction for Fable cache reads](https://venturebeat.com/technology/anthropics-claude-fable-5-1-and-mythos-5-1-arrive-with-a-75-cost-reduction-for-fable-cache-reads)
- [CNBC — Anthropic changes data retention policy after pushback from customers](https://www.cnbc.com/2026/09/01/anthropic-data-retention.html)
- 관련: [[2026-06-30-claude-sonnet-5]] · [[claude-code]]
- 09-14 후속: [Vals AI — Claude Fable 5.1 Solves the Cyphral Distich](https://www.vals.ai/blogs/fable-solves-cyphral-distich) · [Hacker News 토론 (790점+)](https://news.ycombinator.com/item?id=49688695)
