---
type: use-case
date: 2026-07-26
tools: [claude-code]
mechanism: [skills, subagents]
domain: ops
task: Google Meet·Zoom·Teams 화상회의에 CEO·QA·보안 등 전문가 페르소나 봇을 실시간 참가시켜 발언
outcome: 정성적 — 페르소나 합류까지 약 30초, Claude Code 세션 하나가 회의 전사를 읽고 발언자·발언내용을 결정하는 단일 오케스트레이터 구조. 알려진 한계: 음성인식 이름 오인식, 봇 간 발화 겹침
model: 미확인
cost: 미확인
permissions: 미확인 (오픈소스 MIT, 로컬 설치)
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course]
source: https://old.reddit.com/r/AI_Agents/comments/1v6wibg/i_made_every_gstack_specialist_ceo_qa_sre_join_my/
---

# gstack 페르소나 화상회의 봇 — Claude Code가 유일한 두뇌, 19명의 "말만 하는" 전문가 봇

> **공식**: Claude Code(skills+subagents)로 gstack 페르소나 라이브러리와 AgentCall 회의봇
> 플랫폼을 결합해 화상회의 중 전문가 관점 투입을 자동화 → 19개 페르소나·6개 팀 프리셋,
> 합류까지 약 30초(정성적, 정량 성과지표 미확인)

## 무엇을 자동화했나

Reddit 사용자가 평소 Claude Code에서 쓰던 gstack의 페르소나 슬래시 커맨드(CEO 리뷰, QA,
보안 등)를 실제 화상회의에 참여시킬 수 있게 만들었다(2026-07-26, r/AI_Agents 공개).
"CEO랑 QA 리드를 불러줘"라고 말하면 약 30초 후 각자의 3D 아바타와 목소리를 가진 봇이 회의에
합류해, 자기 분야 이야기가 나올 때 캐릭터에 맞게 대답한다. 19개 전문가 페르소나, 6개 팀
프리셋을 지원한다.

## 어떻게 구성했나 (아키텍처)

이 프로젝트에서 제작자가 가장 강조하는 설계는 "봇 자체에는 지능을 두지 않는다"는 원칙이다.

- **봇(페르소나)**: 자체 LLM이 전혀 없는, WebSocket 위의 얇은 stdin/stdout 셸(shim)에 불과함
- **두뇌**: Claude Code 세션 하나가 유일한 지능 — 회의 실시간 전사를 읽고, 누가 무엇을
  말해야 할지 판단한 뒤 해당 페르소나 봇에게 대사를 전달
- **통신 계층("지능 버스")**: 인박스(전사 유입)·아웃박스(봇별 응답) 두 개의 JSONL 파일이
  전부 — 별도 프레임워크나 빌드 단계 없이 서버는 표준 라이브러리만 쓴 Python, 클라이언트는
  순수 JS
- **설치**: curl 명령 한 줄로 설치되며 Claude Code Skill로 자동 등록됨
- 기반 오픈소스: gstack(페르소나 라이브러리, Garry Tan 제작) + AgentCall(회의봇 플랫폼), MIT 라이선스

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 미확인 (오픈소스, 로컬 설치) |
| 성숙도 | prototype — "이것은 런칭이지 승리 선언이 아니다"(제작자 표현) |

## 성과와 수치

- **일화(anecdotal)**: 아바타 합류까지 약 30초, 여러 화상회의 플랫폼(Google Meet/Zoom/Teams)
  지원. 정량적 사용자 수·회의 건수 등은 공개되지 않음.
- **알려진 한계(제작자 직접 공개)**: 음성인식(STT)이 이름을 종종 잘못 알아들음, 여러 봇이
  동시에 말하려는 충돌이 실제로 발생해 아직 튜닝 중.

## 재현 가이드

- **난이도**: 중 (오픈소스 저장소 설치는 curl 한 줄이나, 회의 플랫폼 연동·WebSocket 인프라 이해 필요)
- **준비물**: Claude Code, gstack 페르소나 라이브러리, AgentCall 계정/설정
- **핵심 단계**:
  1. curl 설치 스크립트로 gstack 회의봇 확장을 Claude Code Skill로 등록
  2. 화상회의 시작 후 원하는 페르소나를 호출("CEO랑 QA 리드 불러줘")
  3. Claude Code 세션이 실시간 전사(JSONL 인박스)를 읽고 발언자·발언내용 판단
  4. 판단 결과를 아웃박스 JSONL로 내보내면 해당 페르소나 봇이 음성으로 발화
  5. STT 오인식·봇 간 발화 충돌 등은 현재 알려진 한계로 별도 튜닝 필요

## 강의·AX 활용 포인트

- **강의**: "지능은 오케스트레이터 하나에만 두고 나머지는 얇은 실행 계층으로 둔다"는 멀티에이전트
  설계 원칙을 보여주는 사례 — 각 봇에 개별 LLM을 붙이는 대신 중앙 집중형 두뇌+파일 기반 메시징
  구조를 택한 이유(비용·일관성·디버깅 용이성)를 설명하는 교재로 적합.
- **AX**: 실제 회의에 "전문가 관점 시뮬레이션"을 투입하는 아이디어 자체는 신제품 리뷰·의사결정
  회의에서 다양한 관점을 강제로 끌어들이는 용도로 응용 가능하나, 프로토타입 단계 한계(STT 오류,
  발화 충돌)를 고려하면 아직 실제 업무 도입보다는 개념 검증 단계로 보는 것이 적절하다.

## 출처

- [Reddit r/AI_Agents — I made every gstack specialist (CEO, QA, SRE…) join my Google Meet as a voice bot — with Claude Code as the brain](https://old.reddit.com/r/AI_Agents/comments/1v6wibg/i_made_every_gstack_specialist_ceo_qa_sre_join_my/)
