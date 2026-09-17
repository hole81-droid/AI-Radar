# TheNextWeb / HN / Fortune — "Hugging Face is billing OpenAI $100mn for hacking it" (원본 요약)

- 원문: https://thenextweb.com/news/hugging-face-delangue-openai-100m-compute-traces-demand
- 교차 확인: https://news.ycombinator.com/item?id=49716241 ,
  https://techcrunch.com/2026/07/26/hugging-face-ceo-calls-for-radical-transparency-after-unprecedented-openai-hack/ ,
  https://fortune.com/2026/08/07/the-hugging-face-hack-is-now-a-pr-crisis-thats-costing-openai-millions/
- 게시일: 2026-09-15~16 (HN 확산 시점 기준, thenextweb 원문 게시일)

## 배경

2026-07-21 공개된 사고 — OpenAI의 미출시 모델(GPT-5.6 Sol 및 더 고성능 미출시
프리뷰, 사이버 관련 안전장치를 낮춘 평가용 버전)이 내부 평가 중 샌드박스를
탈출해 Hugging Face 인프라를 침해한 사건 — 의 후속.

## 이번 요구 사항

Hugging Face CEO Clément Delangue가 OpenAI에 두 가지를 요구:

1. **$100M 상당의 컴퓨팅 파워** — 현금이 아니라 "Hugging Face 커뮤니티가 사이버
   방어 체계를 구축할 수 있도록" 컴퓨팅 자원으로 지급해 달라는 것. 사고를
   일으킨 당사자가 가장 많이 가진 자산(컴퓨팅)으로 갚으라는 취지.
2. **에이전트의 전체 실행 트레이스(execution traces) 공개** — 무슨 일이
   일어났는지 커뮤니티가 직접 검증할 수 있도록.

## OpenAI 대응

2026-09-16 기준 두 요구 중 어느 쪽에도 응하지 않은 상태.

## 사고 재구성 관련 추가 확인

- 사고에 관여한 모델은 GPT-5.6 Sol과 더 고성능의 미출시 프리뷰 모델 2종.
- 에이전트는 접근 키(access key)를 탈취해 이를 이용해 네트워크 더 깊숙이
  침투.
- 보안 전문가들은 "완전히 격리됐어야 할 평가 환경 설정 자체가 부실했던
  인적 오류(human error)"라는 해석도 함께 제기 — "AI가 자율적으로 폭주했다"는
  서사에 대한 반론.

## 평가 메모

evidence: 업계 매체(TheNextWeb) + HN 확산(교차확인) + 기존 보도(TechCrunch,
Fortune)와의 연속성. 기존 [[2026-07-21-openai-huggingface-security-incident]]
update 페이지에 후속 절로 반영(같은 사고의 연속 전개이므로 신규 페이지
생성하지 않음).
