# IEEE Spectrum — "How OpenAI Used Its Own LLMs to Design Its Jalapeño Chip"

- 원문: https://spectrum.ieee.org/llms-for-chip-design
- 게시일: 2026-09-18
- 수집일: 2026-09-20
- 관련 기존 페이지: [[2026-06-24-openai-jalapeno-chip]] (06-24 최초 발표에 후속 절로 반영 완료)

## 요지

OpenAI 엔지니어(Richard Ho, Chris Leary 등) 인터뷰 기반 심층 취재. Jalapeño 칩 설계에
o3(공개 전)·내부 파인튜닝 모델·GPT-6 Astra 전신 모델과 Google 오픈소스 고위합성 도구
XLS를 활용한 구체 내역을 확인.

## 핵심 수치

- RTL→테이프아웃 9개월, 아키텍처~첫 실리콘 20개월 미만, 팀 상시 100명 미만.
- DeepSeek 잠재attention 커널 최적화: 이론성능 대비 0.31% → 88.94%, 약 40시간 소요.
- Broadcom이 백엔드(물리설계) 담당, 행렬곱 유닛 면적 10% 절감.

## 인용

- Richard Ho(하드웨어 VP): "모델들이 우리 엔지니어에게 초능력을 주고 있다"
- Chris Leary: AI는 "소프트웨어처럼 보이는 일"에서 가장 잘 작동
