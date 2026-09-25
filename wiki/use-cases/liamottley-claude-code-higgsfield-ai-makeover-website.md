---
type: use-case
date: 2026-09-25
tools: [claude-code, claude]
mechanism: [mcp, vibe-coding]
domain: content-creation
task: 비즈니스용 웹사이트 콘셉트·카피·미디어·UI 제작 및 리드 캡처 시스템 구축
outcome: 미확인(초기 실트래픽 결과 공유만 언급, 정량 수치 없음)
model: 미확인 (Claude Code, Fable 5 세대 추정)
cost: 미확인
permissions: 미확인 (1인 에이전시 로컬 작업 추정)
maturity: production
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://www.youtube.com/watch?v=1P5xtV-Kf0o
---

> **공식**: Claude Code + Higgsfield(MCP)를 활용해 웹사이트 디자인·미디어 제작·리드 캡처 구축을 수행 → "AI 슬롭" 없는 완성도의 비즈니스 사이트 제작(정량 성과는 미확인)

## 무엇을 자동화했나

AI 에이전시 운영자 Liam Ottley가 자신의 비즈니스 "AI Makeover"(aimakeover.io) 홍보 사이트를
Claude Code로 처음부터 새로 제작했다. 콘셉트 기획·페르소나 설정·카피라이팅부터 이미지를
와이드스크린 자산으로 아웃페인팅하고 정지 이미지를 모션 클립으로 변환하는 미디어 제작,
UI 레퍼런스 소싱, 방문자를 리드로 전환하는 캡처 시스템까지 한 사람이 Claude Code
세션 안에서 여러 MCP 서버를 연결해 전 과정을 진행했다.

## 어떻게 구성했나 (아키텍처)

- **코딩**: Claude Code + Claude(Fable 5급)로 사이트 뼈대(3.js 활용, 인터랙티브 요소 포함) 작성.
- **미디어 제작(MCP)**: Higgsfield를 Claude Code 안에 MCP로 연결해 인물 사진을
  와이드스크린으로 아웃페인팅하고, 정지 사진을 움직이는 클립으로 변환.
- **UI 레퍼런스(MCP)**: Mobbin·21st.dev를 MCP로 연결해 고품질 UI 컴포넌트·레퍼런스를
  검색·소싱 — 처음부터 디자인하는 대신 검증된 패턴을 참고.
- **리드 캡처**: Osprey를 aimakeover.io에 설정해 방문자를 이름·이메일·LinkedIn·전화번호로
  리졸브. 향후 웹훅·Instantly·Expandi 연계 아웃바운드 자동화, 기업→담당자 리졸빙 기능
  추가 예정이라고 언급.
- **"AI 슬롭" 방지 원칙**: 저자가 명시적으로 강조한 것은 강한 카피와 커스텀 미디어가
  범용 AI 생성 사이트 티를 벗는 핵심이라는 점 — 템플릿 그대로 쓰지 않고 MCP로 소싱한
  레퍼런스를 재해석하는 단계를 거쳤다.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Claude Code, Fable 5 세대 추정) |
| 비용 | 미확인 |
| 권한 | 미확인 (1인 에이전시 로컬 작업 추정) |
| 성숙도 | production (실제 운영 중인 비즈니스 사이트) |
| 근거 수준 | anecdotal (제작자 본인 시연 영상, 정량 비교 없음) |

## 성과와 수치

"초기 실트래픽에서 결과를 공유한다"는 언급만 있을 뿐, 전환율·방문자 수 등 구체 수치는
영상 설명·본문에서 확인되지 않았다 — **미확인**으로 남긴다.

## 재현 가이드

**난이도: 중** (MCP 서버 여러 개를 조합하는 구성 경험 필요)

준비물:
- Claude Code + Higgsfield 계정(MCP 연동)
- Mobbin·21st.dev 접근(MCP, UI 레퍼런스 소싱)
- 리드 캡처 도구(영상에서는 Osprey 언급)

핵심 단계:
1. 콘셉트·타깃 페르소나·핵심 카피를 먼저 정하고 Claude Code에 컨텍스트로 제공한다.
2. Higgsfield MCP로 정지 이미지를 아웃페인팅·모션 클립으로 변환해 "AI 티" 나는 스톡 이미지
   대신 커스텀 미디어를 확보한다.
3. Mobbin·21st.dev MCP로 UI 컴포넌트 레퍼런스를 검색해 처음부터 디자인하지 않고 검증된
   패턴을 재해석한다.
4. 리드 캡처 시스템을 붙여 방문자를 신원 정보로 리졸브하고, 이후 아웃바운드 자동화와 연결한다.

## 강의·AX 활용 포인트

- **강의**: "AI로 웹사이트를 만들면 다 비슷해 보인다"는 통념에 대한 반례 — 여러 MCP 서버를
  체이닝해 미디어·UI·카피 각 단계에서 커스터마이징 지점을 만드는 구조를 실습 소재로 쓸 수
  있다. Claude Code가 코딩 도구를 넘어 MCP로 외부 크리에이티브 서비스(이미지 아웃페인팅 등)를
  오케스트레이션하는 사례로도 유용하다.
- **AX**: 마케팅·브랜드 부서가 "생성형 AI 산출물이 다 비슷해 보인다"는 리스크를 관리할 때,
  이 사례처럼 카피·미디어·UI 소싱을 각각 별도 MCP 단계로 분리해 사람의 편집 판단을 끼워
  넣는 구조가 참고가 된다. 단, 정량 성과가 확인되지 않은 자기 보고 사례임을 감안해야 한다.

## 출처

- [Liam Ottley — Claude Code + Higgsfield = Insane $10K Websites (YouTube)](https://www.youtube.com/watch?v=1P5xtV-Kf0o)
