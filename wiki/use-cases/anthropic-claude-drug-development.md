---
type: use-case
date: 2026-10-27
tools: [claude-code, claude]
mechanism: [skills, mcp, cli-pipeline]
domain: research
task: 신약 개발 전주기(타깃 설계·항체 설계·제조/규제 문서 검토·임상시험 기획) 자동화
outcome: Enveda 제조문서 검토 25시간+→3시간 미만(89%↓)·Generate Biomedicines CAR-T 설계 70%↓ 길이로 수용체 10배·Divergence 항체 35,000종/1개월 설계
model: claude-code, claude(버전 비공개 다수)
cost: 미확인
permissions: Claude Science workbench + 파트너사 자체 데이터시스템 연동(권한 세부 미공개)
maturity: prototype
evidence: measured
importance: high
uses: [course, ax]
source: https://www.anthropic.com/research/early-progress-drug-development
---

> **공식**: Anthropic이 Claude Code·Claude를 활용해 6개 제약·바이오 파트너사의 신약 개발
> 전주기(타깃 발굴~제조 문서 검토)에 투입 → Enveda 제조문서 검토 25시간+→3시간 미만(89%↓),
> Generate Biomedicines CAR-T 세포치료제 설계 70%↓ 길이로 수용체 10배 증가, Divergence Labs
> 항체 설계 35,000종을 약 1개월에 생성

## 무엇을 자동화했나

Anthropic이 자체 생명과학 이니셔티브를 확장하며 6개 외부 연구기관과의 "deep research
partnership" 결과와 자체 인수(Mithril Medicine)의 초기 성과를 공개했다. 대상 업무는
단일 기능이 아니라 신약 개발의 여러 단계에 걸쳐 있다:

- **타깃·분자 설계**: CAR-T 세포치료제 유전 설계(Generate Biomedicines), 항체 설계
  (Divergence Labs·BigHat Biosciences)
- **제조·규제 문서화**: 품질 검수·규제 제출서류 초안(Enveda)
- **임상시험 기획**: 성공확률 추정·분석(Bristol Myers Squibb)
- **운영 위임**: 연구조직 운영·실험실 코디네이션(Mithril Medicine, 선천성 근이상증 치료제)

## 어떻게 구성했나 (아키텍처)

- **Generate Biomedicines** — Claude Code를 과학자 6명이 직접 사용해 CAR-T 치료제의
  유전 설계를 재작업. 모델 자체가 설계를 생성하는 것이 아니라 과학자가 Claude Code를
  반복적 설계 도구로 사용하는 구조.
- **Divergence Labs** — Claude(버전 비공개)가 IgE 결합 + 세포 탈착 기능을 모두 갖는
  이중 구조 항체를 약 1개월 동안 약 35,000종 생성. 결과 중 3종의 IgE 결합 "hit", 20종의
  탈착 "hit"을 사람이 걸러냈고, 그중 3종이 표준 치료제를 능가.
- **BigHat Biosciences** — Claude를 자체 실험실 데이터 시스템("Reccy")에 직접 연결해
  항체 단편(결합력·열안정성·응집도)을 반복 개선. 약 10주간 1,010개 변이체를 테스트.
- **Enveda** — Claude를 제조 문서 관리 시스템에 연결해 1,061페이지 분량의 품질·규제
  문서를 검수. 사람이 이미 찾은 11건의 이슈를 전부 재확인하고 사람이 놓친 7건을 추가로
  발견.
- **Bristol Myers Squibb** — Claude에 단일 프롬프트로 임상시험 설계를 입력해 성공확률
  분석 초안을 생성(기존 수일 걸리던 작업을 수시간으로 단축).
- **The Column Group / Pleiades** — Claude + 커스텀 Skill로 45개 타깃-질병 쌍에 대한
  평가 도구 구축.
- **Mithril Medicine** — Anthropic이 인수한 조직. Claude가 계약 연구기관(CRO) 선정,
  실험실 조율, 운영 업무 위임을 수행하며 선천성 근이상증 치료제를 18개월 미만으로
  콘셉트→마우스 실험 성공 단계까지 진행.

## 벤치마크 데이터

| 항목 | 내용 |
|---|---|
| 모델 | Claude Code(Generate Biomedicines) · Claude 버전 다수(비공개, Divergence·BigHat·Enveda·BMS 등) |
| 비용 | 미확인 |
| 권한 설계 | Claude Science workbench 제공, 파트너사 자체 데이터·실험실 시스템에 연결(세부 접근범위는 원문 미공개) |
| 성숙도 | prototype~전임상(preclinical) 단계 — Mithril만 임상시험(2028년 목표) 진입 예정 |

## 성과와 수치

**실측(measured, Anthropic·파트너사 공동 발표 기준)**:
- Generate Biomedicines: CAR-T 치료제 설계 길이 약 70%↓, 실험실 테스트에서 수용체 약
  10배 증가·종양세포 살해력 개선·면역세포 활성 지속기간 연장.
- Divergence Labs: 약 35,000개 항체 설계를 약 1개월에 생성, IgE 결합 hit 3종·탈착 hit
  20종 확보, 그중 3종이 표준 의약품 성능을 상회.
- BigHat Biosciences: 10주간 1,010개 변이체 테스트, 최상위 버전 기준 결합력 10배+↑·
  열안정성 18°C↑·응집속도 100배+↓.
- Enveda: 1,061페이지 검수 시간 25시간+ → 3시간 미만(약 89%↓), 사람이 놓친 이슈 7건
  추가 발견, 규제 제출서류 초안을 "수작업 3개월" 대비 4시간에 완성.
- Mithril Medicine: 콘셉트부터 마우스 실험 성공까지 18개월 미만, 인간 임상시험은
  2028년 말 목표.

**한계**: 전부 **전임상(preclinical) 단계**이며(Mithril만 임상 진입 예정), 벤더(Anthropic)
자체 발표로 독립적 제3자 검증은 포함되지 않았다. 비용·구체적 권한 설계(데이터 접근 범위,
안전장치)는 원문에 공개되지 않았다.

## 재현 가이드

- **난이도**: 상 (생명과학 전문 데이터·실험실 인프라·규제 지식이 필요해 일반 업무
  자동화 재현과는 결이 다르다)
- **준비물**: Claude Science workbench 접근권, 실험실 데이터 시스템 연동(API 또는
  커스텀 통합), 도메인 전문가의 설계 검증 체계.
- **핵심 단계**:
  1. 업무를 "설계 생성"·"문서 검수"·"운영 위임" 등 단일 기능으로 좁혀 시작.
  2. Claude(또는 Claude Code)를 기존 데이터·문서 시스템에 연결(Reccy 같은 자체 LIMS 등).
  3. 사람이 결과를 반드시 재검토하는 체크포인트를 둔다(Divergence·BigHat·Enveda
     전부 사람의 최종 스크리닝을 거침).
  4. 반복 사이클(수주~수개월)을 통해 변이체·설계안을 누적 개선.
  5. 전임상 단계 성과를 임상 진입 전 별도로 검증.

## 강의·AX 활용 포인트

- **강의**: "AI 에이전트를 R&D 반복설계 도구로 쓰는 법"의 교차 산업 사례 모음 — 같은
  Claude가 유전설계·항체설계·문서검수·운영위임 등 전혀 다른 업무유형에 투입된 것을
  보여줘 "업무를 어떻게 좁혀 위임하는가"를 가르치는 소재로 적합.
  [[vals-ai-opus-magnetic-semiconductor-discovery]](신소재 탐색)와 함께 "AI가 과학
  R&D의 가설 생성·반복 단계를 압축한다"는 패턴의 또 다른 사례로 묶어 다룰 수 있다.
- **AX**: Enveda의 문서검수 사례(25시간→3시간, 89%↓)는 **규제·컴플라이언스 문서 검토**
  업무 전반(제조업 품질문서, 법무 계약서 검토 등)에 바로 이식 가능한 패턴이다. 다만
  전부 벤더 자체 발표·전임상 단계임을 전제로, "실험실 검증 전 가설 생성기"로서의
  역할과 "최종 검증"의 역할을 구분해 커뮤니케이션해야 한다.

## 출처

- [Anthropic — Early progress on accelerating drug development with Claude](https://www.anthropic.com/research/early-progress-drug-development)
- [Hacker News — Early progress on accelerating drug development with Claude](https://news.ycombinator.com/item?id=50265609) (45점, 2026-10-27)
