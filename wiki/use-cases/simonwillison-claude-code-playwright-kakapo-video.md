---
type: use-case
date: 2026-09-26
tools: [claude, claude-code]
mechanism: [vibe-coding, cli-pipeline]
domain: content-creation
task: 컨퍼런스 발표 클로징 슬라이드용 픽셀아트 애니메이션 영상 제작
outcome: 프롬프트 몇 번으로 완성해 발표 당일 바로 사용 (정량 성과 미확인)
model: Claude Opus 5.5 (이미지 생성) + Claude Code(Playwright 자동화)
cost: 미확인
permissions: 미확인 (개인 로컬 환경)
maturity: demo
evidence: anecdotal
importance: medium
uses: [course]
source: https://simonwillison.net/2026/Sep/26/kakapo-party/
---

# Simon Willison, Claude + Claude Code로 발표용 픽셀아트 애니메이션 영상을 즉석 제작

> **공식**: Claude(이미지 생성)와 Claude Code(Playwright 브라우저 자동화)를 활용해
> 컨퍼런스 발표 클로징 슬라이드용 애니메이션 영상 제작을 수행 → 프롬프트 몇 번으로
> 완성해 발표 당일 바로 사용.

## 무엇을 자동화했나

Simon Willison(구루 1차 채널 — Django 공동창시자, LLM 실무 기록으로 유명)이
WeAreDevelopers World Congress North America 클로징 키노트를 준비하며, 마지막
슬라이드에 쓸 "카카포(kākāpō, 뉴질랜드 멸종위기 앵무새) 파티" 애니메이션을 즉석에서
만든 사례. 발표 당일 아이디어를 떠올려 실제 사용까지 이어진, 준비 시간이 거의 없는
상황에서의 자료 제작이다.

## 어떻게 구성했나 (아키텍처)

1. **이미지 소싱**: Google 이미지 검색으로 카카포 사진 3장 확보.
2. **애니메이션 생성 (Claude, 대화형)**: 사진 3장 + 텍스트 프롬프트("픽셀아트로,
   HTML5 canvas 애니메이션, 카카포 20마리 이상이 파티하듯 뛰는 모습 + 색종이 효과")를
   Claude에 전달 → 단일 HTML 파일(pixel art + canvas)을 결과물로 받음.
3. **영상 변환 (Claude Code + Playwright)**: 로컬 Claude Code 세션에 완성된 HTML
   파일 경로를 주고 "브라우저로 열어서 몇 번 클릭해 색종이 효과를 유도하고, 15초
   분량 영상으로 녹화해줘 (3초 지난 뒤부터 클릭 시작, 클릭 위치는 화면 전역에 분산)"라고
   지시. Claude Code가 Playwright 스크립트를 직접 작성해 브라우저를 조작하고 화면을
   녹화해 mp4 파일을 만들었다.
4. Playwright 스크립트는 `uv` 인라인 의존성 선언(`# /// script ... dependencies =
   ["playwright"] ///`) 형태로 작성돼 별도 환경 설정 없이 바로 실행 가능했다 — 클릭
   좌표·타이밍을 화면 구석구석에 분산시켜 색종이 효과가 고르게 퍼지도록 좌표 목록을
   직접 설계한 점이 특징.
5. 완성된 mp4를 Keynote 프레젠테이션에 임베드해 클로징 슬라이드로 사용.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | Claude Opus 5.5(이미지 생성 대화) + Claude Code(로컬 세션, Playwright 자동화) |
| 비용 | 미확인 |
| 권한 | 미확인(개인 로컬 환경, 별도 승인 게이트 없음) |
| 성숙도 | demo (1회성 개인 제작물) |

## 성과와 수치

정량 수치는 없다(evidence: anecdotal). 저자 본인이 "정확히 원하던 결과가 나왔다"고
평가했고, 실제로 발표 클로징 슬라이드에 사용됐다는 사실 자체가 재현 가능성의
증거다. Playwright 스크립트 전문과 대화 트랜스크립트가 모두 공개돼 있어 재현
난이도가 낮다.

## 재현 가이드 (난이도: 하)

1. 준비물: 소재가 될 이미지 몇 장(사진·스크린샷 등), Claude(웹/앱), 로컬 Claude Code
   설치.
2. Claude에 소재 이미지 + "이런 스타일의 애니메이션을 canvas로 만들어줘" 식
   자연어 프롬프트만으로 HTML 결과물 요청.
3. 결과 HTML을 로컬에 저장 후 Claude Code에 파일 경로를 주고 "브라우저로 열어
   상호작용시키면서 N초 분량 영상으로 녹화해줘"라고 지시 — 클릭 타이밍·좌표를
   자연어로 구체적으로 지정할수록 결과가 좋다.
4. Claude Code가 자체적으로 Playwright 스크립트를 작성·실행하는지 확인(별도
   프레임워크 설치 지식 불필요).
5. 결과 mp4를 프레젠테이션 툴에 바로 임베드.

## 강의·AX 활용 포인트

- **강의**: "코딩을 몰라도 브라우저 자동화 스크립트를 즉석에서 얻을 수 있다"는
  좋은 최소 사례 — Claude Code가 Playwright라는 특정 도구를 자율적으로 선택하고
  스크립트까지 작성한 점을 강조하면 비개발자 수강생에게 "AI Tool의 실행 범위"를
  체감시키기 좋다.
- **AX**: 발표 자료·데모 영상처럼 반복적이지만 급하게 필요한 산출물을 사내
  누구나 즉석에서 만들 수 있다는 사례 — 디자인팀 병목 없이 "그럴듯한 자료"를
  당일 만들어내는 워크플로로 소개할 수 있다(단, 브랜드 품질 기준이 있는 공식
  자료에는 별도 검수 필요).

## 출처

- [Simon Willison — Kākāpō Party](https://simonwillison.net/2026/Sep/26/kakapo-party/)
- [Claude 대화 트랜스크립트](https://claude.ai/share/43bec0be-a0a3-4737-bfac-34894af34ddc)
