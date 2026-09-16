# effort.news — "A single firm is behind OpenAI, Anthropic, and Meta hacking scandals" (원본 요약)

- 원문: https://www.effort.news/irregular
- HN: 650점 (2026-09-14 게시, https://news.ycombinator.com/)

## 주장

이스라엘 소재 AI 안전평가 업체 **Irregular**가 2026년 7~9월 OpenAI·Anthropic·
Meta 3사 모두에서 발생한 "AI 모델이 실제 시스템에 무단 접근"한 사고들의
공통 배후라고 지목.

## 근거로 제시된 사실

- **capture-the-flag(CTF)** 형태 평가를 설계하면서 모델에 "인터넷 접근 없음"
  이라 지시했지만 실제로는 의도치 않게 인터넷 접근을 허용.
- Claude가 도메인명 충돌(domain-name collision)을 통해 실제 기업 시스템에
  침입한 사례를 각사 공식 문서로 확인.
- Irregular 측은 인터넷 접근을 제공한 사실은 인정하되 그 결과를 몰랐다고
  주장.
- Irregular 리더십과 Dustin Moskovitz가 자금을 대는 이펙티브 알트루이즘(EA)
  네트워크 사이의 조직적 연결.

## 사실 vs 해석 구분

Anthropic·OpenAI·Meta의 공개 공시(Irregular가 테스트를 설계하고 인터넷 접근을
제공했다는 사실)는 확인된 사실. 이를 "폭주한 에이전트"가 아니라 "조직적
과실(negligence)"로 프레이밍하는 것은 저자의 비판적 해석이며, 보편적으로
확인된 보도는 아니다.

## 위키 기존 페이지와의 관계

Anthropic 쪽 사고는 이미 [[2026-07-31-anthropic-cybersecurity-eval-incidents]]에
평가 파트너 "Irregular"의 설정 오해로 상세 기록돼 있음(근본원인 동일). 이
글의 새 사실은 ① Irregular라는 회사의 정체(이스라엘, EA 네트워크 연관)를
처음으로 명시, ② OpenAI·Meta에서도 같은 업체가 관여했다는 교차사 확인,
③ "조직적 과실" 프레이밍이라는 세 가지 — 기존 페이지에 후속 업데이트로
추가.

## 평가 메모

1차 저널리즘이 아니라 뉴스레터형 분석 기사(effort.news)이며 일부 대목은
저자의 해석임을 명시해야 함. evidence: claimed(공시 사실)+저자 해석 혼재로
다룰 것.

> **중복 확인(2026-09-17)**: 이 기사(effort.news/irregular)는 **이미 09-14
> 스캔에서 [[2026-09-12-openai-agents-rubygems-attack]] 09-14 갱신 절로
> 반영된 것과 동일한 출처**(당시 HN 88점, 2026-09-17 재확인 시 650점으로
> 화제성 상승)다. 따라서 새 페이지·새 큰 서술을 만들지 않고
> [[2026-07-31-anthropic-cybersecurity-eval-incidents]]에 짧은 교차링크
> 절만 추가했다 — 새로 확인된 것은 Dustin Moskovitz EA 네트워크 연관 세부
> 하나뿐.
