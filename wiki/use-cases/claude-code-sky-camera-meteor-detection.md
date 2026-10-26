---
type: use-case
date: 2026-10-26
tools: [claude-code]
mechanism: [mcp, skills]
domain: ops
task: 4K 천체 카메라 영상에서 유성·비행기·고정광원 탐지·분류·재학습 운영 전 과정을 자동화
outcome: 오탐율(별→비행물체 오인) 약 50%→7%↓, 유성 포착율 90% 유지, 완전 무인 야간 운영
model: Claude Code (버전 미확인)
cost: 미확인
permissions: MCP 서버가 가드레일 강제(API 키로 새 키 생성 불가, 삭제는 미리보기+확인 필수, 최신판보다 오래된 데이터로 덮어쓰기 불가) — 사람이 직접 하는 건 Cloudflare 터널·로그인 앱·API 키 생성뿐
maturity: production
evidence: claimed
importance: medium
uses: [course]
source: https://www.reddit.com/r/ClaudeAI/comments/1xfqc9x/i_built_an_open_source_sky_camera_that_claude/
---

> **공식**: Claude Code(MCP 서버 + 전용 Skills)로 4K 천체 카메라의 야간 탐지→분류→재학습
> 파이프라인 운영을 자동화 → 오탐율 약 50%→7%↓, 완전 무인 운영으로 아침마다 요약 영상만 전달

## 무엇을 자동화했나

유성을 찾으려면 밤새 찍은 영상을 사람이 직접 훑으며 프레임을 골라내고, 라벨링하고,
모델을 재학습시키는 과정을 반복해야 했다. 이 전체 루프(탐지→분류→승인/반려→재학습)를
Claude Code가 대신 수행하도록 openskycam이라는 오픈소스 시스템을 구축했다.

## 어떻게 구성했나 (아키텍처)

- **구조**: 4K RTSP 카메라 + Raspberry Pi + 대용량 디스크(macOS/Linux, GPU는 선택)로
  영상을 24/7 녹화. 자체 **MCP 서버**가 웹사이트가 하는 모든 일을 API로도 노출해,
  Claude Code가 전체 워크플로를 직접 운전할 수 있게 했다.
- **Skills**: MCP 서버가 `build-a-workflow`·`find-detections`·`verify-changes` 등
  가이드·Skill을 자체 제공 — Claude가 사용자 프롬프트가 아니라 **서버가 정의한 규칙**을
  보고 학습하는 구조.
- **가드레일은 서버 쪽에 강제**: API 키로 새 키를 만들 수 없음, 삭제는 미리보기를
  보여주고 확인을 받아야 함, 편집은 최신판보다 오래된 데이터로 덮어쓰면 실패 처리.
  프롬프트에 의존하는 대신 서버 레벨에서 안전장치를 건 것이 핵심 설계.
- **자가 개선 루프**: 모델이 별을 비행물체로 자꾸 오인하자, 사용자가 승인한 탐지로
  데이터셋을 만들어 Claude가 직접 재학습시켰다.
- **무인 설정**: `npm run setup -- --yes`가 `.env`를 읽어 빠진 설정값 이름만 알려주며
  멈춘다. 사람이 직접 해야 하는 건 Cloudflare 터널·로그인 앱·API 키 생성뿐.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | Claude Code(버전 미확인) |
| 비용 | 미확인 |
| 권한 설계 | MCP 서버 강제(키 생성 제한·삭제 확인·과거판 덮어쓰기 차단) |
| 성숙도 | production (2024년부터 운영 중) |

## 성과와 수치 (실측/주장 구분, 출처)

- **작성자 자체 집계(주장, 외부 검증 없음)**: 재학습 전 야간(학습에 쓰지 않은 날 기준)
  별을 비행물체로 오인하는 비율이 **약 50%→7%**로 떨어졌고, 유성 포착율은 **90%**를
  유지했다고 밝혔다.
- 매일 밤 9시30분~다음날 18시까지의 탐지 결과를 요약 영상으로 자동 생성해 사람에게
  전달하는 형태로 **"완전 무인 운영"** 상태를 유지 중이라고 설명한다.

## 재현 가이드 (난이도: 상)

1. RTSP 지원 카메라·상시 녹화용 저장공간·Cloudflare 계정(도메인 포함)을 준비한다.
2. 웹사이트가 하는 모든 동작을 API로도 노출하는 **MCP 서버**를 설계해 Claude Code가
   직접 운전할 수 있게 한다.
3. 안전장치(삭제 확인, 키 생성 제한, 버전 덮어쓰기 차단)는 **프롬프트가 아니라 서버
   로직**으로 강제한다 — 에이전트가 무엇을 하려 해도 서버가 막아줘야 신뢰할 수 있다.
4. 사람이 승인/반려한 결과를 다시 학습 데이터로 삼아 Claude가 모델을 스스로
   재학습시키는 피드백 루프를 넣는다.
5. `npm run setup -- --yes` 같은 무인 설치 스크립트로 재현성을 확보한다.

## 강의·AX 활용 포인트

- **강의**: "프롬프트로 안전장치를 걸지 말고 서버(MCP)가 강제하게 하라"는 원칙을
  보여주는 좋은 1인 프로젝트 사례 — 에이전트 권한 설계 수업에 바로 쓸 수 있다.
- **AX**: 상시 모니터링·분류 업무(품질검사, 이상감지 등)를 다루는 조직이라면, "사람이
  승인한 판정을 다시 학습 데이터로 되먹이는" 구조를 하나의 템플릿으로 참고할 수 있다.
  다만 수치는 제작자 1인의 자체 집계이며 외부 검증은 없다는 점을 분명히 할 것.

## 출처

- [Reddit r/ClaudeAI — I built an open source sky camera that Claude Code can actually run](https://www.reddit.com/r/ClaudeAI/comments/1xfqc9x/i_built_an_open_source_sky_camera_that_claude/)
- [openskycam 문서](https://docs.openskycam.org/)
