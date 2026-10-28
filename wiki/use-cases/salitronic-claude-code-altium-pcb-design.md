---
type: use-case
date: 2026-10-28
tools: [claude-code]
mechanism: [mcp]
domain: dev-automation
task: 전자회로 CAD(Altium Designer)에서 사양 문서만으로 4층 PCB 전체 설계
outcome: 61개 LED·USB 차동쌍 포함 보드를 스키매틱부터 제조파일까지 1회 실행으로 완성(수치는 저자 1인 시연)
model: 미확인 (저자가 사용한 모델명 비공개, MCP 클라이언트는 Claude Code)
cost: 미확인 (도구 자체는 무료 오픈소스)
permissions: 미확인 (Altium Designer 로컬 세션에 대한 전권한 — 실험적 단계라 "설계 백업 먼저" 권고)
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://www.reddit.com/r/ClaudeAI/comments/1xhr1ym/i_gave_claude_code_600_tools_to_drive_altium/
---

# Claude Code + 자체 MCP 서버로 Altium Designer PCB 설계 전 과정 자동화

> **공식**: Claude Code로 mcp(자체 개발 Altium 제어 서버)를 활용해 전자회로 기판(PCB)
> 설계 전 과정을 수행 → 사양 문서 1개로 스키매틱·배치·배선·제조파일까지 1회 실행 완성

## 무엇을 자동화했나

전자설계 엔지니어인 Reddit 사용자(r/ClaudeAI)가 몇 달간 개발한 오픈소스 MCP 서버
**eda-agent**로, Claude Code가 전자회로 CAD 툴 **Altium Designer**(PCB 설계
표준 소프트웨어)를 직접 조작하게 만들었다. 영상 시연에서는 지름 54mm LED 보드
사양을 글로 주자 Claude Code가 부품 라이브러리 구축(심볼·풋프린트·3D 모델·
부품번호)부터 스키매틱 작성, LED 61개 원형 배치, USB 라인 90Ω 차동쌍 배선,
그라운드 플레인, 디자인 룰 체크(DRC) 통과, 제조파일(Gerber·드릴·BOM·픽앤플레이스·
STEP) 출력까지 전 과정을 수행했다. 1차 결과물에 대한 리뷰 목록을 주자 USB 배선
재작업·부품 3D 모델 보강·타이틀 블록 완성까지 2차 수정도 자율적으로 처리했다.

## 어떻게 구성했나 (아키텍처)

- **도구**: Claude Code + eda-agent(오픈소스 MCP 서버, Apache-2.0) — Altium
  Designer에서 현재 열려 있는 설계를 실시간으로 직접 편집(사용자가 화면으로
  진행을 지켜볼 수 있음). Altium 외에 KiCad·EasyEDA Pro 백엔드도 지원(단 Altium
  버전이 가장 고도화됨).
- **약 600개 도구** 노출 — 배치·배선·DRC·라이브러리 조작 등 세분화된 기능 단위.
- **데이터시트 우선 원칙**: 부품 값·규격을 추측하지 않고 실제 데이터시트를 조회
  하도록 강제 — 세션 시작 시와 10회 호출마다 서버가 재주지시.
- **배치 도구(batch tool)**: 와이어 60개를 1회 호출로 배치하는 식으로 묶어
  처리 — 개별 호출 대비 10~100배 빠르고 컨텍스트도 깨끗하게 유지.
- **검증 가능한 피드백**: 스키매틱을 템플릿에서 그리고, 배선을 실제 핀과 대조
  검증한 뒤에만 시트에 반영 — 그려지기 전에 오류를 잡는 구조.
- **GUI 전용 조작**: Altium API가 없는 메뉴·다이얼로그는 Claude가 화면을 읽고
  직접 클릭해 조작(비전 기반 GUI 자동화).

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | 미확인 (게시물에 모델명 비공개) |
| 비용 | 미확인 (도구 자체는 무료 오픈소스 Apache-2.0) |
| 권한 | 미확인 — Altium Designer 로컬 세션 전권한 조작, "아직 실험적이니 설계를 먼저 백업하라"는 저자 경고 명시 |
| 성숙도 | prototype (개인 오픈소스 프로젝트, 공식 벤더 제품 아님) |

## 성과와 수치

정량 비교 수치는 없음(anecdotal, 저자 1인의 시연·자기 보고). 저자는 "프로토타입
제작 전 수동 검토는 여전히 거칠 것"이라며 결과물이 "매우 좋은 단계"라고 평가했다.
커뮤니티 댓글은 배치 와이어 배치 실패 시 재시도 로직(부분 실패 처리)에 대한
기술적 질문을 제기했고, 저자가 개선 여지로 인정했다.

## 재현 가이드

**난이도**: 상 (MCP 서버 구현 + 전자회로 CAD 도메인 지식 모두 필요)

**준비물**: Altium Designer(또는 KiCad/EasyEDA Pro) 라이선스, Claude Code,
eda-agent MCP 서버(GitHub 공개)

**핵심 단계**:
1. 설계 사양을 "스펙 문서"로 명확히 작성한다(보드 크기, 부품 수, 신호 요구사항 등).
2. MCP 서버가 부품 데이터시트 조회를 강제하도록 설계해 추측값 사용을 막는다.
3. 반복 호출을 배치 도구로 묶어 토큰·시간 비용을 줄인다.
4. 배선·배치 결과를 그려지기 전에 핀 매핑과 대조 검증하는 체크포인트를 둔다.
5. API가 없는 기능은 화면 인식 기반 GUI 자동화로 보완한다.
6. 1차 결과물에 리뷰 목록을 주고 자율 수정 사이클을 1회 더 돌린다.

## 강의·AX 활용 포인트

- "소프트웨어 코딩 밖"의 전문 CAD 도구(전자회로 설계)에도 MCP 패턴이 그대로
  적용된다는 사례 — Claude Code의 적용 범위가 코드 저장소를 넘어 **하드웨어
  설계 워크플로**까지 확장되고 있음을 보여준다.
- "데이터시트 우선 원칙" 같은 서버 측 가드레일 설계는 다른 전문 도메인(법률·
  회계·의료 문서처럼 "추측 금지"가 핵심인 업무)에 적용 가능한 패턴이다.
- 아직 실험 단계이고 모델·비용·권한이 전부 미확인이라는 점을 함께 전달해야
  한다 — 실무 도입 전 벤치마크가 필요한 "가능성 시연" 단계로 읽는 것이 정확하다.

## 출처

- [Reddit r/ClaudeAI — I gave Claude Code ~600 tools to drive Altium Designer](https://www.reddit.com/r/ClaudeAI/comments/1xhr1ym/i_gave_claude_code_600_tools_to_drive_altium/) (2026-10-28)
- [GitHub — salitronic/eda-agent](https://github.com/salitronic/eda-agent)
