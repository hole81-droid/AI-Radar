---
type: update
date: 2026-10-20
tools: [deepseek]
importance: high
uses: [ax]
source: https://www.bleepingcomputer.com/news/security/dhs-bans-deepseek-products-across-us-federal-civilian-agencies/
---

# 미 DHS, 연방 민간기관 전체에 DeepSeek 사용·조달 전면 금지령

## 무엇이 있었나

미국 국토안보부(DHS)가 **Directive 2026-01**(국토안보부 장관 Markwayne Mullin 서명,
2026-07-24 서명·2026-10-20 연방관보(Federal Register) 공개)을 통해 중국 AI 스타트업
DeepSeek의 제품을 연방 민간기관 IT 시스템에서 전면 금지했다.

### 조치 내용

- **조달 금지**: 향후 모든 연방 조달에서 DeepSeek 제품 배제(승인 제품 목록·구매 마켓플레이스
  포함).
- **기존 시스템 제거**: 이미 도입된 DeepSeek 제품은 즉시 제거하거나, 예외 승인을 받아야 함.
- **예외 절차**: 예외를 원하는 기관은 명령 발효 후 **60일 이내**에 근거와 완화 조치를 제시해야
  신청 가능.
- **범위 확장**: DeepSeek 자체 제품뿐 아니라, DeepSeek의 구현(모델·가중치 등)을 활용해 만든
  **제3자 제품·서비스**까지 포함. 단, 민간·개인 사용에 대한 일반적 금지는 아니며 연방 민간기관
  관할 범위에 한정.

### 금지 근거

DHS는 ①중국 정부가 DeepSeek 인프라에 접근해 개인정보를 수집·추적하거나 민감한 정부 데이터가
중국으로 이전될 위험, ②DeepSeek 모델에 잠재된 악성코드 가능성(2025년 2월 NowSecure의 DeepSeek
iOS 앱 보안 결함 보고 인용)을 근거로 들었다. 문서는 DeepSeek가 IT 시스템에 "다중 위협 벡터"를
제기한다고 명시했다.

## 왜 중요한가

Alibaba가 전 직원에게 Claude Code 사용을 금지한 사건([[2026-07-10-alibaba-bans-claude-code]])과
반대 방향의 "AI 도구 국가 분단" 사례다. 자국 기업의 AI 도구를 상대국이 막는 일이 양방향으로
벌어지고 있다는 뜻이며, 글로벌 기업이 AI 도구를 선택할 때 "어느 나라 모델인가"가 성능·비용과
별개의 조달 리스크 축으로 굳어지고 있음을 보여준다. 또한 바로 전날 보도된 해커 1명의 100개+
기업 침해 사건에서 공격자가 `claudecode_deepseek-v4.1-flash`(Claude Code 하네스에 DeepSeek
모델을 끼운 구성)를 썼다고 추정된 것([[2026-10-19-ai-agent-hacker-breaches-100-companies]])과
겹쳐, DeepSeek을 둘러싄 보안 경계감이 동시에 두 방향(정부 조달 차단 + 공격 도구 활용 의심)으로
고조된 한 주였다.

## 활용/시사점

- **AX 관점**: AI 도구 도입 시 "모델 원산지·데이터 주권" 체크리스트가 필요하다는 선례다. 국내
  기업도 글로벌 고객·협력사와 거래할 때 유사한 조달 제한 요구를 받을 수 있다.
- 예외 신청 절차(60일 내 근거·완화조치 제시)는 기업이 자체 AI 거버넌스 정책을 설계할 때 참고할
  수 있는 "리스크 기반 예외 승인" 모델이다.

## 출처

- [BleepingComputer — DHS bans DeepSeek products across US federal civilian agencies](https://www.bleepingcomputer.com/news/security/dhs-bans-deepseek-products-across-us-federal-civilian-agencies/)
- [Security Magazine — DHS Banning DeepSeek from US Federal Civilian Agencies](https://www.securitymagazine.com/articles/102669-dhs-banning-deepseek-from-us-federal-civilian-agencies)
- 관련: [[2026-07-10-alibaba-bans-claude-code]], [[2026-10-19-ai-agent-hacker-breaches-100-companies]]
