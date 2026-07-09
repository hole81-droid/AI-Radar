---
type: update
date: 2026-05-16
tools: [claude-code]
importance: medium
uses: [course, ax]
source: https://claude.com/blog/best-practices-for-computer-and-browser-use-with-claude
---
# Anthropic, Claude 컴퓨터·브라우저 사용(Computer Use) 모범 사례 공개

## 무엇이 있었나

Anthropic이 Claude(Sonnet 4.6/Opus 4.7)의 Computer Use API를 화면 조작 자동화(복잡한
폼 작성, 여러 애플리케이션을 넘나드는 반복 워크플로우)에 안정적으로 쓰기 위한 세부
튜닝 방법을 공식 블로그로 공개했다.

## 왜 중요한가

- 스크린샷을 모델의 크기 제한(최대 1568~2576픽셀)에 맞게 사전 축소하고 좌표를 실제
  해상도로 환산, 지시문을 이미지보다 먼저 배치하는 등의 디테일이 정확도를 좌우한다는
  점을 구체적으로 정리했다.
- 난이도에 따라 추론량을 동적으로 조절하는 "적응형 사고"와 프롬프트 주입을 자동
  탐지하는 실시간 분류기를 함께 적용해 신뢰성을 높였다.
- 사용자가 직접 시연한 녹화를 학습 자료로 활용해 신뢰도를 높이는 방법도 제시했다.

## 활용/시사점

- "화면을 보고 대신 클릭해주는" 자동화가 데모 수준을 넘어 안정적으로 운영되려면 어떤
  디테일이 필요한지 정리한 실전 체크리스트로, 반복적인 사내 소프트웨어 조작 업무를
  자동화하려는 조직에 바로 활용 가능하다.
- 강의에서 "Computer Use 기반 자동화의 실전 튜닝 포인트"를 설명할 1차 자료로 쓰기 좋다.

## 출처

- [Claude 공식 블로그 — Best Practices for Computer and Browser Use with Claude](https://claude.com/blog/best-practices-for-computer-and-browser-use-with-claude)
