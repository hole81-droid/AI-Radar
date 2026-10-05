---
type: update
date: 2026-10-05
tools: [claude]
importance: high
uses: [ax]
source: https://www.techspot.com/news/114091-florida-woman-used-claude-diary-anthropic-reported-shoot.html
---

# Anthropic, Claude 대화 내용을 경찰에 신고 — 올해 들어 최소 3번째 사례

## 무엇이 있었나

플로리다 보니타스프링스의 Carli Michelle Heller가 Claude를 "일기장"처럼 쓰며 2026-09-26
"Lee County 보안관서를 총기로 공격하겠다"고 작성했고, 다음날에는 새로 구입한 총을 언급하는
메시지도 남겼다. Anthropic의 안전 모니터링 시스템이 이를 자동으로 플래그하자 사람 검토자가
"신뢰할 만한 위협"으로 판단해 법 집행기관에 신고했고, 9/30 플로리다주법(Statute 836.10,
대량살상·테러 전자위협죄) 기준 중범죄로 기소됐다.

보도에 따르면 이는 **8월 이후 최소 3번째로 경찰까지 도달한 Claude 대화**다. 구체적으로
확인된 이전 사례는 2026-08 샌프란시스코 건 — 한 남성이 Claude에게 "반자동 AR-15를 구입했고
Dario Amodei(Anthropic CEO)를 조준하고 있다, 회사 전체를 죽이고 싶다"고 작성하자
Anthropic이 SFPD(샌프란시스코 경찰국)에 신고한 사례다.

Anthropic의 공개 개인정보 정책은 "사망 또는 중대한 신체적 위해를 예방하기 위해 공개가
합리적으로 필요하다고 선의로 판단하는 제한적 긴급상황"에 정보를 법 집행기관에 공개할 수
있다고 명시한다.

## 왜 중요한가 (비개발자 관점)

- "AI 챗봇과의 대화는 사적인 일기장이 아니다"가 추상적 경고가 아니라 **실제 형사 기소로
  이어지는 사례가 반복되고 있다**는 걸 보여준다. 직원 개인정보·고객 민원 대응 등에 Claude를
  쓰는 기업은 유사한 모니터링·신고 정책이 자사 서비스에도 적용될 수 있음을 인지해야 한다.
- 업계 비교가 대조적이다 — OpenAI는 캐나다 브리티시컬럼비아 총기난사 사건에서 가해자의
  총기 관련 대화가 안전팀에 사전 플래그됐으나 "법적 신고 기준에 미달"로 판단해 경찰에
  알리지 않았던 것으로 알려져 있고, 이후 소송으로 이어졌다. 플로리다주는 별도로 2025 FSU
  총기난사 관련 OpenAI·Altman 책임을 묻는 소송(2026-06)도 제기한 상태다. **"어느 선에서
  신고할 것인가"의 정책 재량이 벤더마다 다르고, 그 재량 자체가 법적 리스크의 대상이 되고
  있다.**
- AI 세이프티 모니터링이 "모델이 위험한 출력을 안 내게 막는 것"에서 "사용자의 실제 위협을
  감지해 외부에 알리는 것"까지 확장되는 흐름을 보여주는 사례로, 기업용 AI 도입 시 데이터
  거버넌스·개인정보 정책 검토 범위에 추가해야 할 항목이다.

## 활용/시사점

- **AX**: 사내 Claude 도입 시 "직원이 입력한 텍스트가 어떤 조건에서 외부(법집행기관 등)로
  전달될 수 있는가"를 벤더 개인정보 정책에서 명시적으로 확인하고, 사내 공지·사용 가이드에
  반영할 필요가 있다. 특히 심리상담·HR 민감 대화 성격의 사내 챗봇에 Claude를 기반으로
  쓸 경우 이 리스크가 더 직접적이다.
- **강의**: "AI 안전 모니터링의 범위가 어디까지인가"를 다루는 교육 소재로, Anthropic·
  OpenAI 두 회사의 서로 다른 재량 판단 결과(신고 vs 불신고, 그리고 각각의 법적 후폭풍)를
  비교하며 "완벽한 정답이 없는 정책 설계 문제"임을 보여줄 수 있다.

## 출처

- [TechSpot — Florida woman used Claude as a diary, then Anthropic reported an entry to police](https://www.techspot.com/news/114091-florida-woman-used-claude-diary-anthropic-reported-shoot.html)
- [Tom's Hardware — Anthropic reports Florida woman's Claude 'diary' threat](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-reports-florida-womans-claude-diary-threat-to-shoot-up-sheriffs-office-felony-charge-follows-its-at-least-the-third-such-conversation-to-reach-police-since-august)
- [Hoodline — Anthropic Reports Claude Threat Against CEO to SFPD](https://hoodline.com/2026/09/anthropic-called-sfpd-over-claude-user-who-threatened-to-kill-ceo-amodei/)
