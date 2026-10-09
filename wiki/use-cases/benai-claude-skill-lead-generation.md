---
type: use-case
date: 2026-10-08
tools: [claude-code]
mechanism: [skills]
domain: sales
task: Claude Skill 기반 콜드 아웃리치 리드 생성 스킬 3종 구축
outcome: 아웃리치용 Skill Creator로 스킬 3종 구축(정량 리드 수·전환율은 미확인, "무제한" 표현은 주장)
model: 미확인
cost: 미확인
permissions: 미확인
maturity: demo
evidence: claimed
importance: medium
uses: [course]
source: https://www.youtube.com/watch?v=kXAp1YzPcVI
---

> **공식**: Claude Skill(Skill Creator)로 skills 방식을 활용해 콜드 아웃리치 리드 생성
> 자동화를 수행 → 재사용 가능한 아웃리치 스킬 3종 구축(정량 성과는 미확인)

## 무엇을 자동화했나

AI 자동화 유튜버 Ben AI(Ben van Sprundel)가 Claude의 "Skill Creator" 기능으로
콜드 아웃리치(리드 발굴·초기 접촉) 업무를 스킬화하는 방법을 공개 튜토리얼로
시연했다. 제목의 "무제한 리드"는 저자의 마케팅 표현이며 실측 수치는 아니다.

## 어떻게 구성했나 (아키텍처)

1. Claude의 Skill Creator로 아웃리치 목적 스킬 3종을 설계·생성(영상 챕터 구성:
   "스킬 #1~#3" + "나만의 스킬 설정하기" 4단계 가이드).
2. 영상에서 소개하는 보조 툴 스택(n8n·Relevance AI·Make.com·Apify, Wispr Flow)은
   저자가 일반적으로 쓰는 소프트웨어 목록으로, 이번 스킬 3종 각각에 전부 결합됐는지는
   영상 설명만으로 확인되지 않음(원문 확인 한계).
3. 무료 템플릿을 별도로 배포해 시청자가 그대로 재현할 수 있도록 공개.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 | 미확인 |
| 성숙도 | demo (튜토리얼 시연, 저자 자신의 상용 운영 여부는 불명확) |

## 성과와 수치

- 주장: "무제한 리드 생성"이라는 제목 표현 — 실측 리드 수·응답률·전환율 등 정량
  수치는 영상 설명·챕터 목록에서 확인되지 않음.
- 실측 확인 가능한 것은 "Skill Creator로 3개의 아웃리치 스킬을 구축했다"는 구조뿐.

## 재현 가이드

- **난이도**: 중
- **준비물**: Claude Skill Creator 접근권, (선택) n8n·Apify 등 보조 자동화 툴
- **핵심 단계**:
  1. 아웃리치 업무를 세부 작업(리드 수집·메시지 생성·후속 조치 등)으로 쪼갠다.
  2. Skill Creator로 각 작업을 스킬 하나씩으로 변환한다.
  3. 무료 템플릿을 참고해 자신의 CRM·데이터 소스에 맞게 커스터마이징한다.
  4. 실제 리드 생성·전환 수치를 직접 측정해 "무제한"이라는 마케팅 표현과
     자신의 실측 결과를 구분해서 평가할 것.

## 강의·AX 활용 포인트

- **강의**: CLAUDE.md가 최우선으로 꼽는 "에이전트 구축·자동화 활용법 튜토리얼" 유형의
  전형적 사례 — Skill Creator로 업무를 스킬 단위로 분해하는 방법을 가르치는 소재로
  적합하다. 다만 정량 성과가 없으므로 "주장"과 "실측"을 구분해 가르칠 것.
- **AX**: 영업·마케팅 부서가 반복되는 아웃리치 업무를 스킬 단위로 표준화하는
  출발점 사례로 참고 가능하나, 도입 전 자체 파일럿으로 실측 성과를 확인해야 한다는
  반례로도 쓸 수 있다.

## 출처

- [Ben AI — How to Generate Unlimited leads with 1 Claude Skill (free template)](https://www.youtube.com/watch?v=kXAp1YzPcVI)
- raw/2026-10/benai-claude-skill-lead-generation.md
