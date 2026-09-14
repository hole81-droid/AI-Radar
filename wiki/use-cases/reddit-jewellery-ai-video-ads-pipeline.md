---
type: use-case
date: 2026-09-15
tools: []
mechanism: [cli-pipeline]
domain: marketing
task: 주얼리 브랜드 제품 사진 → 광고 영상 제작 파이프라인 자동화
outcome: 월 4편→30편 제작량 7.5배 증가, 같은 기간 매출 약 10%↑ (본인 주장, AI 기여분 별도 분리 안 됨)
model: 미확인 (Pixverse·Invideo·Adtest — Claude Code/Codex 계열 아님)
cost: 미확인
permissions: 미확인
maturity: production
evidence: claimed
importance: medium
uses: [course, ax]
source: https://www.reddit.com/r/AI_Agents/comments/1wg16cc/i_used_ai_tools_to_take_our_jewellery_brand_from/
---

> **공식**: 3종 AI 영상 도구(Pixverse·Invideo·Adtest)로 cli-pipeline 유사 구조를 활용해 주얼리 제품 사진→광고 영상 제작 전 과정을 수행 → 월 4편→30편(7.5배), 같은 기간 매출 약 10%↑ (본인 주장)

## 무엇을 자동화했나

r/AI_Agents에 올라온 주얼리 브랜드 운영자의 사례. 제품 카탈로그는 많은데 영상 제작
역량(소규모 자체 제작팀)이 병목이라 월 4편밖에 못 만들던 상황을, 3개 AI 도구를 잇는
파이프라인으로 **제품 사진→최종 광고 영상**까지 자동화해 월 30편으로 늘렸다고 공개했다.
Claude Code·Codex 계열 도구는 아니지만, "AI 도구 체인으로 콘텐츠 제작 업무 전체를
자동화"한다는 이 위키의 핵심 수집 대상 패턴과 정확히 일치한다.

## 어떻게 구성했나 (아키텍처)

3단계 파이프라인:

1. **Pixverse** — 제품 사진을 업로드해 극세부 히어로샷 생성. 배경·카메라 무빙을 커스텀
   재구성하면서 제품 고유의 디테일(보석 질감 등)은 유지.
2. **Invideo** — 히어로샷을 받아 완성 광고로 조립. 주얼리는 색상·조명·각도별 디테일이
   중요한데, 툴이 제품 정보를 기억해 변형본(variation) 제작이 쉬웠다고 함. 반응 좋았던
   기존 광고의 후킹 문구를 참조해 여러 버전을 스핀오프 제작.
3. **Adtest** — 완성된 영상들을 타깃 오디언스별로 채점해 성과 예측 점수를 매기고, 점수
   높은 안에 예산을 더 배정.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (범용 AI 영상 생성 툴, 특정 LLM 미명시) |
| 비용 | 미확인 |
| 권한 설계 | 미확인 |
| 성숙도 | production (실제 브랜드 운영에 적용 중) |

## 성과와 수치

- **claimed (본인 신고)**: 월 제작량 4편 → 약 30편(7.5배).
- **claimed, 귀속 불확실**: 같은 기간 매출 약 10% 증가 — 작성자 본인이 "계정 내 다른
  변수도 함께 바뀌고 있어서 전적으로 AI/영상 덕분이라고 단정하지는 않는다"고 명시.
  창작 테스트량 증가가 도움이 됐다는 정도로만 해석해야 한다.
- 제3자 검증 없음, 단일 사업자 자기 보고.

## 재현 가이드

- **난이도**: 하 (전용 SaaS 툴 3종을 잇는 구조라 코딩 불요, 구독만으로 시작 가능)
- **준비물**: 제품 사진 카탈로그, Pixverse·Invideo·Adtest 구독, 기존에 성과 좋았던 광고
  문구(레퍼런스용)
- **핵심 단계**: ① 사진→히어로샷 생성(Pixverse) ② 히어로샷→다수 변형 광고 조립(Invideo)
  ③ 변형본 성과 예측 채점 후 예산 재배분(Adtest) ④ 결과를 다음 라운드 레퍼런스로 재투입

## 강의·AX 활용 포인트

- **강의**: "코딩 없이 AI 툴 체인만으로 제작량을 늘린다"는 비개발자 대상 실습 사례로
  적합 — Claude Code/Codex류 개발형 자동화와 대비되는 "노코드 마케팅 파이프라인" 축.
- **AX**: 제작량 증가가 곧바로 매출 증가로 이어진다는 단순 인과를 경계하되, "더 많은
  변형을 더 싸게 테스트할수록 성과가 개선된다"는 크리에이티브 테스팅 원리 자체는
  전자상거래 AX 사례로 재사용 가능.

## 출처

- [Reddit r/AI_Agents — I used AI tools to take our jewellery brand from 4 to 30 product videos a month. Sales grew nearly 10%](https://www.reddit.com/r/AI_Agents/comments/1wg16cc/i_used_ai_tools_to_take_our_jewellery_brand_from/) (2026-09-15)
