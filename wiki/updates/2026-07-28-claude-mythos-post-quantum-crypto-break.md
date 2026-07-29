---
type: update
date: 2026-07-28
tools: [claude]
importance: high
uses: [ax, course]
source: https://thehackernews.com/2026/07/claude-ai-just-cracked-post-quantum.html
---

# Claude Mythos, 전문가 2년 넘게 못 찾은 차세대 암호 취약점을 60시간 만에 발견

## 무엇이 있었나

Anthropic의 Frontier Red Team이 Claude Mythos Preview 모델을 활용한 암호학 연구 결과를
2026-07-28 공개했다. 두 건의 성과가 핵심이다.

- **HAWK 구조적 결함 발견**: HAWK는 미국 NIST가 심사 중인 차세대(포스트 퀀텀) 전자서명
  후보 알고리즘이다. 전 세계 암호학자들이 제출 이후 2년 넘게 검증해왔고 두 차례 심사 라운드를
  통과할 만큼 견고하다고 여겨졌다. Claude Mythos는 이 알고리즘의 구조적 결함을 찾아내
  **키 강도를 사실상 절반으로 낮췄다** — 인간 전문가 2년의 검증이 놓친 것을 AI가 60시간 만에 발견.
- **AES 공격 고도화**: 7라운드로 축소한 AES(널리 쓰이는 대칭키 암호 표준)에 대한 기존 최고
  수준의 공격을 **200~800배 빠르게** 개선.
- Anthropic은 두 발견 모두 **당장 실제 서비스에 위험을 주지 않는다**고 강조했다. HAWK는
  아직 어디에도 실제 배포된 적이 없고, 비트코인은 여전히 양자 이전 방식인 ECDSA를 쓰고 있어
  이번 발견과 무관하다.
- 해당 연구는 "논문 속 수학적 발견 대부분이 AI 주도로 이뤄졌고, 인간 저자의 역할은 AI 작업을
  지시·정리·검증하는 데 그쳤다"고 명시했다.

## 왜 중요한가 (비개발자 관점)

- 이번 사례는 7/20 야코비안 추측 반증 주장([[2026-07-20-claude-fable-jacobian-conjecture]])에
  이어, Claude가 순수 수학·암호학처럼 "정답이 명확하고 검증 가능한" 고난도 전문 영역에서
  인간 최상위 전문가 집단을 앞서는 사례가 반복되고 있음을 보여준다.
- 암호학은 특히 검증이 엄격한 분야라 이번 결과가 학계에서 널리 인정받는다면, "AI가 보안 연구를
  가속화한다"는 서사에 힘이 실린다 — 동시에 공격 기법 고도화이기도 해서 "AI가 취약점을 더 빨리
  찾을 수 있다면 공격자도 그럴 수 있다"는 이중 용도 우려도 함께 제기될 수 있는 사안이다.

## 활용/시사점

- **AX**: 보안·암호 연구팀이 있는 조직이라면 AI를 "체계적 취약점 탐색 보조 도구"로 활용하는
  워크플로우(가설 생성 → 구조적 분석 → 인간 검증)를 검토할 근거 사례. 기존 [[mozilla-claude-mythos-firefox-vulnerability-detection]](Firefox 코드베이스 취약점 탐지, 월간 수정 14배 증가)와 같은
  Claude Mythos 라인의 보안 활용 사례가 축적되는 중.
- **강의**: "AI가 검증 가능한 전문 영역에서 인간을 앞서는 사례"의 최신 예시로, 야코비안 추측
  사례와 함께 다루면 "왜 특정 분야에서 AI가 두각을 보이는가"(명확한 정답·형식적 검증 가능성)를
  설명하는 데 유용.

## 출처

- [The Hacker News — Claude AI Just Cracked a Post-Quantum Test Scheme and Found a Faster 7-Round AES Attack](https://thehackernews.com/2026/07/claude-ai-just-cracked-post-quantum.html)
- [Decrypt — Claude Mythos Cracked Post-Quantum Cryptography That Humans Spent Years Failing to Break](https://decrypt.co/374600/claude-mythos-cracked-post-quantum-cryptography)
- [Tech Times — AI Cracks Post-Quantum Cipher in 60 Hours After Two Years of Human Review Failed](https://www.techtimes.com/articles/321876/20260728/ai-cracks-post-quantum-cipher-60-hours-after-two-years-human-review-failed.htm)
- [TheNextWeb — Claude found mathematical flaws in two cryptographic algorithms that years of expert review missed](https://thenextweb.com/news/anthropic-claude-mythos-cryptographic-attacks-hawk-aes)
