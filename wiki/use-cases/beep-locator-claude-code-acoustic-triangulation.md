---
type: use-case
date: 2026-11-09
tools: [claude-code]
mechanism: [vibe-coding]
domain: personal-productivity
task: 집 안 정체불명 비프음의 위치를 여러 기기 마이크로 삼각측량하는 웹앱 제작
outcome: 비프음 위치를 약 40cm 오차로 특정, 상자 더미에서 배터리 방전 일산화탄소 감지기 발견
model: Claude Opus 5.5 (extra thinking) → Fable 5.2로 후속 개선
cost: 미확인
permissions: 미확인 (로컬 네트워크의 개인 기기, 브라우저 마이크 접근)
maturity: demo
evidence: anecdotal
importance: low
uses: [course]
source: https://simonwillison.net/2026/Nov/9/mysterious-beeps/
---

# Simon Willison — Claude Code로 "Beep Locator" 제작, 미스터리 비프음의 위치를 찾다

> **공식**: Claude Code로 vibe-coding을 활용해 여러 기기 마이크 삼각측량 웹앱 제작을 수행 → 비프음 위치 약 40cm 오차로 특정 (일화)

## 무엇을 자동화했나

간헐적으로 울려 귀로는 찾을 수 없는 비프음의 발원지를 수작업 수색 대신 소프트웨어로 찾았다.

## 어떻게 구성했나 (아키텍처)

- iPad 2대·휴대폰·노트북 등 브라우저를 **리스너**로 쓰고, Python 웹서버가 WebSocket으로 조율.
- 각 기기가 오디오 버퍼를 유지하며 FFT로 비프 감지. 감지되면 서버가 한 기기에서 "처프" 신호를 재생해 녹음 클립을 정렬하고 음원 위치를 삼각측량.
- Claude가 2007년 BeepBeep 음향 거리측정 논문을 찾아 방식의 근거로 삼음. 기기끼리 소리를 주고받아 위치를 보정, 박수 모드로 정확도 검증.
- 실행 중에도 `installModule()`로 새 JavaScript 모듈을 기기에 밀어 넣어 기기 재설정 없이 기능 추가.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | Opus 5.5(iPhone용 Claude Code, extra thinking) → Fable 5.2(노트북) |
| 비용 | 미확인 |
| 권한 | 미확인 |
| 성숙도 | demo (일회성 프로젝트) |
| 근거 | anecdotal — 개인 블로그 1건 |

## 성과와 수치

약 40cm 오차로 위치를 좁혀 상자 더미를 열자 오래된 일산화탄소 감지기(배터리 교체 필요)가 나왔다(저자 보고, 일화).

## 재현 가이드

- 난이도: **중**
- 준비물: 마이크가 있는 기기 3대 이상, 같은 네트워크, Claude Code
- 핵심 단계: ① 서버+브라우저 리스너 구조 요청 ② 논문 기반 도달시간차 계산 ③ 기기 위치 보정 ④ 실행 중 모듈 주입 구조로 반복 개선

## 강의·AX 활용 포인트

- "문제를 말로 설명하고 연구 논문까지 찾아 구현하게 하는" 비개발자용 vibe coding 입문 데모로 적합. 업무 적용보다는 **에이전트가 현실 문제를 설계-구현하는 범위**를 보여주는 소재.

## 출처

- [Simon Willison — Locating the source of a mysterious beep with Claude](https://simonwillison.net/2026/Nov/9/mysterious-beeps/)
