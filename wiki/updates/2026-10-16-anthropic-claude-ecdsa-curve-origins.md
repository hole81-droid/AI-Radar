---
type: update
date: 2026-10-16
tools: [claude]
importance: medium
uses: [course]
source: https://www.anthropic.com/research/ecdsa-curve-origins
---

# Claude, 30분 만에 NIST 타원곡선 시드값의 25년 미스터리 해결

## 무엇이 있었나

수십 년간 암호학자들은 NSA가 NIST의 ECDSA 타원곡선 표준 시드값을 어떻게 생성했는지
알지 못했다. 설명 없이 공개된 시드는 백도어 의혹을 계속 키웠고, NSA의 Jerry Solinas가
"유머러스한 암구호"에서 나왔을 거라 귀띔했지만 2023년 사망하며 확인해주지 못한 채
남아있었다.

Anthropic 직원이 내부 Claude 모델에게 시드 생성 과정을 역공학해보라고 요청하자,
**30분 만에** Claude가 답을 찾았다. 시드가 암호학적 해시가 아니라 `lrand48`
유사난수생성기(PRNG)의 출력이라는 패턴을 비트 구조에서 포착하고, 격자축소(lattice
reduction) 알고리즘으로 PRNG의 내부 상태를 복원해 1997~1998년 사이의 유닉스
타임스탬프로 초기화값을 추적했다. 일부 베이스 포인트는 Arjen Lenstra의 FreeLIP
라이브러리를 단순 정수(20000 등)로 시드한 것으로도 확인됐다.

## 왜 중요한가 (비개발자 관점)

25년 묵은 암호학 미스터리를 AI가 30분 만에 풀었다는 것 자체보다 중요한 건 **결과의
방향**이다 — 백도어 의혹을 키우던 수수께끼가 풀리면서, 생성 방법이 단순하고
검증 가능하다는 게 확인돼 오히려 ECDSA에 대한 신뢰가 강화됐다. $36,864 규모의
버그바운티는 보안 연구 비영리단체(Internet Security Research Group)에 기부됐다.

## 활용/시사점

- 강의 소재로서 "AI가 긴 시간이 걸리던 역공학·패턴 탐지 작업을 압축한다"는 것을
  보여주는 간결한 사례. [[2026-09-04-anthropic-claude-fermat-last-theorem-proof]]나
  [[2026-08-10-claude-riemann-hypothesis-research]] 같은 수학 난제형 사례와 달리,
  이번엔 "며칠이 아니라 30분"이라는 속도 자체가 포인트.
- AX 관점에서는 보안·암호학처럼 고도로 전문화된 영역에서도 AI가 가설 검증용
  "1차 조사자" 역할을 할 수 있다는 근거로 쓸 수 있다.

## 출처

- [Anthropic Research — ECDSA curve origins](https://www.anthropic.com/research/ecdsa-curve-origins)
- [HN 토론](https://news.ycombinator.com/item?id=50082000) (475점, 2026-10-16)
