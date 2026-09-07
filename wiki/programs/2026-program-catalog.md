---
type: program
date: 2026-07-16
importance: high
uses: [course]
source: mySUNI 내부 문서 — 첨부1.2026 AI역량육성 프로그램 안내_하반기.pdf (2026-07-16)
---

# 2026 AI역량육성 프로그램 카탈로그

> **문서 상태**: 운영 기준 · **문서 역할**: AI역량육성 프로그램 탐색·과정기획의 **공식 카탈로그** · **기준일**: 2026-07-16
> **확인 상태**: 프로그램 구성은 확인, 세부 일정·단가·회차는 최신 원본 재확인 필요

> **AI Radar 반입 메모 (2026-09-07)**: 이 문서는 mySUNI AI 역량육성 컬리지의 내부 카탈로그를
> 위키 공식 문서로 반입한 것이다. 원본 내용은 그대로 두고 frontmatter와 이 메모만 덧붙였다.
> 이 위키에서의 역할은 **"수집한 사례·트렌드를 어느 프로그램·모듈에 적용할 것인가"의 매핑 기준**이다
> — [[program-module-map]]과 함께 `AI 역량육성 Insight` 리포트(`outputs/insight-report/`) 3부의
> 근거로 쓴다. 원본이 참조하는 `knowledge-hub/module-library/course-modules.json`(모듈 ID 정의),
> `module-design-framework.md`, `program-page-template.md`와 기획서·교안 파일(`program-planning
> reports/`, `program-materials/`)은 **이 위키에 반입되지 않았다.** 모듈 ID(`AGT-01` 등)의 정의가
> 필요하면 원본 저장소를 확인한다. 위키 페이지가 이 카탈로그의 프로그램을 가리킬 때는 frontmatter
> `programs:` 필드에 프로그램명을 쓴다(예: `programs: [AI Camp, AI Leader Program (팀장)]`).

이 카탈로그는 Agent와 담당자가 과정 기획을 시작할 때 가장 먼저 사용하는 **공식 프로그램 지도**다. 프로그램 유형·대상·기본 운영 방향·권장 모듈을 정하는 기준으로 사용한다. 실제 모집, 일정, 단가, 대상자 선발, 커리큘럼 확정에는 해당 연도의 최신 프로그램 안내와 개별 기획서를 사용한다.

## 포트폴리오 구조

```text
그룹 AX Agenda와 멤버사 Pain Point
├─ 경영층·리더 변화관리
│  ├─ CEO/C-Level 과정
│  ├─ AI Leader Program (임원)
│  └─ AI Leader Program (팀장)
├─ 구성원 AI 활용·업무 적용
│  ├─ AI Camp / AI Mini Camp / AI야놀자
│  ├─ AI일지 / VoD / 온라인 실습
│  └─ AI Learn X 상시경연 / Playground
├─ 현업 문제 해결·확산
│  ├─ AI Project 실전코칭(PBL)
│  └─ 해커톤·공모전·경연
└─ AI Key Talent·기술 전문성
   ├─ ML Engineer / Adv. ML Engineer / SKADA
   └─ AI Agent Service 개발자 과정군
```

## 프로그램 목록

`사용 AI Tool`은 실제 교안·실습자료에서 확인된 도구만 적는다. `최신 교안 확인 필요`는 도구가 없다는 뜻이 아니라, 현 시점 정본 교안으로 아직 검증하지 않았다는 상태다.

| 영역 | 프로그램 | 대상 | 수준 | 사용 AI Tool | 핵심 주제 | 학습목표 | 운영 방식·핵심 내용 | 기획·교안 연결 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 경영층·변화관리 | CEO/C-Level 과정 | CEO·C-Level | 전략 | 최신 개별 교안 확인 필요 | AI·AX 리더십, 전략 Agenda | AI·AX 관점의 판단과 리더십 Agenda 설정 | Spot성·전략 과제형 과정 | `program-planning reports/[mySUNI] CEO AX 역량 강화.pptx`, `CEO_AX_리더십클래스_교안.pdf` |
| 경영층·변화관리 | AI Leader Program (임원) | 임원 | 기초·활용·고급 | 최신 개별 교안 확인 필요 | AI 일상화, 사업·조직 변화관리 | AI 기반 업무 적용과 AX 실행안 도출 | 기초·활용·고급 코스를 연계 또는 선택 수강 | `program-planning reports/AI경영자과정 '26년 기획안_피드백ver_260129.pdf`, `[mySUNI] ALP임원 정규 커리큘럼(안).pdf` |
| 경영층·변화관리 | AI Leader Program (팀장) | 팀장 및 문제해결 과정의 산하 구성원 | 기초·활용·문제해결 | A.Biz, SKI GPT, Playground; ChatGPT·Gemini·Claude; A.Biz Agent Builder (교안 확인 기준) | AI 리더십, 정보수집·보고서·전략·성과관리, 팀 단위 AI 문제해결 | AI 활용 Skill 체득, 팀 과제 리딩, MVP/PoC 검증과 적용 판단 | 멤버사 환경 맞춤. 문제해결 과정은 팀장+팀원이 4주간 실제 과제를 수행 | `program-planning reports/AI Leader Program(팀장)_운영계획_품의용.pdf`, `AI팀장과정_운영계획_260129.pptx` |
| 구성원 활용 | AI Camp | 실제 업무 문제를 가진 구성원 또는 소규모 팀 | 심화·프로젝트 | Open AI Tool 또는 A.Biz 2.0 Track | 실제 업무 문제 해결, Agent·자동화·프로토타입 | 최소 작동 PoC 완성과 현업 검증 | **2주간 Full-day 4일** 인텐시브, 프로젝트·코칭·상호학습 | `program-planning reports/★ 2026 AI Camp 운영계획(안)_20260202.pptx` 및 개별 교안 |
| 구성원 활용 | AI Mini Camp | 대규모 구성원 | 입문~심화 | 최신 교안별 확인 필요 | AI 활용, 보고서·데이터·바이브코딩 예시 실습 | 예시 과제로 AI 활용을 체험하고 개인 적용 아이디어 도출 | **3~6시간(통상 4시간)** 원데이 예시 실습. 실제 개인 업무 문제는 다루지 않음 | `program-planning reports/2026년 AI mini camp 운영(안).pptx`, `program-materials/Mini camp_*` |
| 구성원 활용 | AI야놀자 | 개인 신청 구성원 | 입문 | 최신 개별 교안 확인 필요 | 일상·트렌드 기반 AI 체험 | AI 활용의 심리적 장벽 완화와 안전한 첫 사용 | 개인 신청형 Bite-sized Learning | `program-planning reports/AI야놀자 '26년 운영안_260209_공유.pptx` |
| 현업 적용 | AI Project 실전코칭(PBL) | 현업 과제 팀 | 프로젝트 | ML/DL·LLM Track별 도구는 최신 교안 확인 필요 | 현업 과제, 데이터·모델링·현장 적용 | 과제정의서·PoC·적용 확대 판단 도출 | 멘토링, ML/DL·LLM·Mini Track | `program-planning reports/★2026 PBL 운영 계획_담당님 보고.pptx` |
| 기술 인재 | ML Engineer | AI 과제를 주도할 실무자 | 중급 | 최신 교안 확인 필요 | AI Math, DL, 모델 학습·평가 | 현업 AI 과제를 기획·실행하는 실무 역량 확보 | 사전 VOD + 5주 Off-duty | `program-planning reports/★2026 ML Engineer 운영 계획_담당님 보고.pptx` |
| 기술 인재 | Adv. ML Engineer | 소수 정예 기술 인재 | 고급 | 최신 개별 기획서 확인 필요 | 고도화 AI 문제해결, Biz Impact | 전문 리뷰 기반의 고도화 실험과 적용 가설 도출 | 대학원 Lab 기반 고급 과정 | 최신 개별 기획서 확인 필요 |
| 기술 인재 | AI Agent Service 개발자 — Essence for PO | PM/PO | 중급 | LLM, RAG, Agent, MCP, 워크플로우 설계 도구(세부 제품은 교안 확인) | AI Agent 서비스 기획·통제 설계 | Agent 서비스 캔버스, 사용자 시나리오, 권한·승인 맵 작성 | 2일 Off-duty | `program-materials/SK_AI_Agent_Service_Essence_for_PO_공통_V7.5.pdf` |
| 기술 인재 | AI Agent Service 개발자 — RAG 개발 | 개발자 | 중급~고급 | ReAct, MCP, LangGraph, Agentic RAG | RAG 기반 Agent 구현·검증 | RAG 설계서, 평가 질문셋, 동작 검증 결과 도출 | 4일 Off-duty | `program-materials/SK_RAG를_활용한_AI_Agnet_Serivce_개발_공통.pdf` |
| 기술 인재 | AI Agent Service 개발자 — LLMOps | Agent 서비스 운영 담당자 | 고급 | Observability, Prompt, Evaluation, 배포 도구(세부 제품은 교안 확인) | 관측·평가·배포·운영 | 평가·모니터링 요건과 릴리스·장애 대응 계획 수립 | 2일 Off-duty | `program-materials/[mySUNI] AI Agent Service 운영을 위한 LLMOps_하이닉스.pdf` |
| 기술 인재 | AI Agent Service 개발자 — Fine-Tuning | 모델 개발 담당자 | 고급 | PEFT, Alignment, 평가 도구(세부 제품은 교안 확인) | 데이터셋, Fine-Tuning, 평가 | Task 맞춤 성능 개선과 적용 판단 | 데이터·PEFT·Alignment·평가 실습 | 최신 개별 교안·기획서 확인 필요 |
| 기술 인재 | AI Agent Service 개발자 — Mastery Course | Agent 개발자 | 고급 | LangGraph, MCP, Agentic RAG, 평가·배포 도구 | 설계~배포, 멀티 Agent, 평가·서빙 | 구현 Agent와 안전·평가 설계, 서비스 데모 완성 | 8일 Off-duty | `program-materials/SK_AI_Agent_Service_Mastery_Course_공통.html` |
| 기술 인재 | SKADA | AI·AX 개발 역량 인증 대상자 | Citizen~Advanced Practitioner | Track별 최신 교안 확인 필요 | AI·AX 개발 역량 진단·인증 | 현재 수준 진단과 학습경로·역량 증빙 계획 수립 | 인증체계 운영 | `program-planning reports/26년 SKADA 운영 방안_0319보고.pdf` |
| 온라인·상시학습 | VoD | 전 구성원 | 입문~중급 | 콘텐츠별 최신 교안 확인 필요 | AI·Digital Tech 기초와 활용 | 다음 실습을 위한 개념·용어·기초 역량 확보 | 상시 자기주도 학습 | `program-planning reports/첨부2_온라인과정운영상세.pptx` |
| 온라인·상시학습 | CDS / Guided Project / AI Learn X 상시경연 | 자기주도 학습자 | 입문~프로젝트 | 과정별 최신 운영 상세 확인 필요 | 온라인 실습, Guided Project, 경연 | 학습 진척과 프로젝트·평가·공유 기록 확보 | Self Study 환경, 과제·경연·진척 관리 | 최신 운영 상세와 성과 원장 확인 필요 |
| 변화관리·사례확산 | AI일지 | AI 활용 경험 보유 구성원 | 활용 | 사례·콘텐츠 제작 도구는 최신 교안 확인 필요 | AI 활용 사례의 콘텐츠화·공유 | 검증된 사례를 변화관리 자산으로 확산 | 사례 또는 MC+사례 협업, VoD 연계 | `program-planning reports/2026 AI일지 운영안_260205_담당님 보고.pptx` |
| 변화관리·플랫폼 | Playground / Community | 학습자·사례 공유 참여자 | 전 수준 | 플랫폼 기능·연계 Tool은 최신 운영안 확인 필요 | 산출물 공유, 상호 피드백, 커뮤니티 | 사례 재사용과 후속 학습경로 연결 | 플랫폼·커뮤니티 운영 | `program-planning reports/Playground '26년 추진방향_V2.2_260113.pptx`, `커뮤니티_운영계획_260205.pptx` |
| 현업 적용 | AI 해커톤·공모전 | 과제 수행 팀 | 활용~프로젝트 | Agenda·운영안별 확인 필요 | 문제 해결, 팀 빌드, 멘토링, 발표 | 결과물·평가 기록·확산 후보 사례 도출 | Agenda·운영안에 따라 별도 설계 | `program-planning reports/2026 AI 해커톤 실행 계획 보고_v1.2_260710.pptx` |

### 과정 메타데이터 관리 규칙

각 프로그램은 최소한 **대상, 수준, 사용 AI Tool, 핵심 주제, 학습목표, 운영 방식·기간, 대표 산출물, 근거 교안 경로, 기준일, 검토 상태**를 유지한다. 도구명은 기술 범주(예: RAG)와 구분해 실제 교안에서 확인된 제품·서비스·프레임워크를 기록하며, 확인되지 않은 값은 추정하지 않는다.

새 `program_material` 또는 `program_planning_report`가 ingest되면 다음을 수행한다.

1. metadata → 전문 추출 → 필요한 원본 교안 순으로 과정명과 메타데이터를 확인한다.
2. 기존 프로그램 행의 대상·수준·사용 AI Tool·주제·학습목표·운영 방식·산출물에 새 정보 또는 변경이 있는지 비교한다.
3. 예를 들어 AI Mini Camp 교안에 Claude Code 활용이 확인되면 `AI Mini Camp` 행의 `사용 AI Tool`과 관련 주제·수준·근거 경로·기준일을 갱신한다.
4. 원본 간 충돌, 자동 추출 오류, 도구의 실제 사용 여부가 불명확한 경우 `검토 필요`로 남기고 확정 표현을 하지 않는다.
5. 갱신한 카탈로그는 영향받는 프로그램 제안 Agent·모듈 맵에 연결하고, 변경 근거·기준일·검토 상태를 남긴다.

## 프로그램 제안 판단 기준

프로그램 제안 시에는 요청자의 직급만으로 프로그램을 고르지 않고, **실제 과제 여부·팀 단위 수행 여부·PoC 완성 필요성·운영 기간**을 함께 판단한다.

| 요청 상황 | 우선 제안 | 판단 기준 |
| --- | --- | --- |
| 팀장이 과제를 리딩하고 팀원과 실제 현업 문제를 해결하며, KPI·데이터·보안·적용 확대까지 검토해야 함 | **AI Leader Program(팀장) — 문제해결 과정** | 팀장과 산하 구성원이 팀 단위 프로젝트를 수행하는 4주 멘토링형 과정. 문제정의 → MVP 개발·검증 → 결과공유·평가로 진행 |
| 학습자 개인 또는 소규모 팀이 실제 업무 문제를 가져와 최소 작동 PoC를 집중적으로 완성해야 함 | **AI Camp** | 2주간 Full-day 4일 인텐시브 과정. 실제 과제 기반 프로젝트와 코칭으로 PoC를 완성 |
| 많은 구성원에게 도구·Agent 개념과 예시 실습을 빠르게 경험시키고, 후속 과제를 발굴해야 함 | **AI Mini Camp** | 3~6시간(통상 4시간) 원데이 과정. 실제 개인 업무 문제를 다루지 않는 예시 실습 중심 |

> **Codex 기반 Agent 요청 시 유의:** AI Leader Program(팀장) 문제해결 과정 또는 AI Camp를 우선 검토한다. 기존 과정 원안에 Codex 사용이 명시되어 있지 않은 경우, Codex 접근 권한·연결 가능한 데이터·도구·보안 및 승인 기준을 먼저 확인해 PoC 범위와 멘토링 방식을 맞춤 설계한다.

## 프로그램별 권장 학습 모듈

아래는 프로그램별 고정 시간표가 아니라, 과정 기획 Agent가 대상·수준·자료 권한에 맞춰 선택할 **모듈 후보**다. 각 ID의 목적·실습·산출물·근거는 원본 저장소의 `knowledge-hub/module-library/course-modules.json`, 조합 기준은 `module-design-framework.md`(둘 다 이 위키에 미반입), 상세 프로그램 맵은 [[program-module-map]]을 참조한다.

| 프로그램 | 권장 Core·Practice·Assurance/Transfer 모듈 | 대표 학습자 산출물 |
| --- | --- | --- |
| CEO/C-Level 과정 | `AX-01`, `STR-02`, `WRK-05`, `AGT-01`, `AGT-06`, `PBL-05` | AX 판단 질문, Agent 역할·승인 경계, 의사결정 요청 |
| AI Leader Program (임원) | `AX-01`~`03`, `WRK-01`~`05`, `STR-02`~`03`, `AGT-01`~`03`, `PBL-01` | 업무 적용안, AI 비서 시나리오, AX 실행안 |
| AI Leader Program (팀장) | `AX-01`~`03`, `LIT-01`, `STR-01`~`03`, `WRK-01`~`04`, `AGT-01`~`03`, `PBL-01`~`05` | 팀 과제정의서, 전략/성과관리 결과물, 개선 백로그 |
| AI Camp | `LIT-01`, `WRK-01`, `AGT-01`~`05`, `BLD-01`, `PBL-01`, `PBL-03`~`06`, `COM-01` | 실제 업무 문제 기반의 최소 작동 PoC, 검증 로그, 사례 카드 |
| AI Mini Camp | `LIT-01`, `WRK-01`~`03`, `AGT-03`, `BLD-01`, `DAT-01` | 예시 실습 과제 결과물, 개인 적용 아이디어 또는 직무별 체험 결과물 |
| AI야놀자 | `EXP-01`, `LIT-01`, `WRK-01` | 콘텐츠·개인 Agent 등 체험 결과물, 안전사용 체크 |
| AI Project 실전코칭(PBL) | `PBL-01`~`06`, `DAT-01`, `MLE-01`~`02` 또는 `AGT-01`~`06`, `COM-01` | 과제정의서, PoC, 코칭 로그, 적용·확대 판단 |
| ML Engineer | `DAT-01`, `MLE-01`~`03`, `PBL-01`, `PBL-03`~`05` | 실험 설계서, 모델 평가 리포트, 개선/적용 제안 |
| Adv. ML Engineer | `DAT-01`, `MLE-01`~`03`, `PBL-03`~`05`, `COM-01` | 고도화 실험 결과, 전문 리뷰, Biz Impact 가설 |
| AI Agent Service — Essence for PO | `STR-01`, `AGT-01`~`03`, `AGT-05`~`06`, `PBL-01`, `PBL-03` | Agent 서비스 캔버스, 사용자 시나리오, 권한·승인 맵 |
| AI Agent Service — RAG 개발 | `AGT-04`~`06`, `BLD-02`~`03`, `PBL-03` | RAG 설계서, 평가 질문셋, 동작 검증 결과 |
| AI Agent Service — LLMOps | `AGT-06`, `BLD-03`, `OPS-01`, `PBL-03`, `PBL-05` | 평가·모니터링 요건, 릴리스·장애 대응 계획 |
| AI Agent Service — Fine-Tuning | `DAT-01`, `MLE-02`~`03`, `BLD-03`, `PBL-03` | 데이터셋 계획, 비교 평가 리포트, 적용 판단 |
| AI Agent Service — Mastery Course | `AGT-01`~`07`, `BLD-02`~`03`, `OPS-01`, `PBL-03`~`05` | 구현 Agent, 안전·평가 설계, 서비스 데모 |
| SKADA | `CAP-01`, `DAT-01`, `MLE-01`~`02`, `PBL-01` | 역량 프로필, 학습경로, 역량 증빙 계획 |
| VoD | `LIT-01`, `WRK-01`, `DAT-01`, `AGT-01` (주제별 선택) | 사전학습 이수, 다음 실습을 위한 개념·용어 체크 |
| CDS / Guided Project / AI Learn X 상시경연 | `CAP-01`, `WRK-01`, `AGT-01`~`05`, `PBL-01`, `PBL-03`, `COM-01` | 프로젝트 산출물, 학습 진척, 평가·공유 기록 |
| AI일지 | `COM-01`, `PBL-06`, `EXP-01` (사례 성격에 따라) | 검증된 활용 사례 카드·콘텐츠 |
| Playground / Community | `COM-01`, `PBL-04`, `PBL-06`, `CAP-01` | 공개 범위가 정해진 사례·피드백·후속 학습경로 |
| AI 해커톤·공모전 | `PBL-01`, `AGT-01`~`06` 또는 `BLD-01`~`03`, `PBL-03`~`05`, `COM-01` | 결과물·발표자료, 평가 기록, 확산 후보 사례 |

## 사용 규칙

- 이 표의 `최신 개별 기획서 확인 필요` 항목은 프로그램이 없다는 뜻이 아니라, 현재 위키에서 정본으로 연결할 최신 문서를 더 확인해야 한다는 뜻이다.
- `AI Agent Service 개발자`는 하나의 프로그램군이며, PO·개발·운영·모델러 대상의 세부 과정은 서로 다른 선수지식과 목적을 갖는다. 제안서에서 하나의 동일 과정으로 뭉뚱그리지 않는다.
- 프로그램 명칭·구성·일정은 매년 변경될 수 있다. 2026 하반기 프로그램 안내의 프로그램 구성과 Page 2~79를 1차 참조한다.
- 각 과정의 상세 페이지는 원본 저장소의 프로그램 페이지 템플릿(`program-page-template.md`, 미반입)으로 추가한다. 개별 기획서·교안·운영 실적을 한 페이지에 연결하되, 원본은 복제하지 않는다.

## 1차 근거

- `knowledge-base/sources/Program List/첨부1.2026 AI역량육성 프로그램 안내_하반기.pdf` (2026-07-16)
- `knowledge-base/processed/full-text/첨부1.2026-AI역량육성-프로그램-안내_하반기__2f37d7467e.md` (원문 추출본, Page 2~79)
- `knowledge-base/sources/program-planning reports/` 및 `knowledge-base/sources/program-materials/`의 개별 자료

프로그램 안내의 자동 추출 및 metadata는 `needs_review` 상태이므로, 대외·예산·확정 일정 판단은 PDF/PPTX 원본과 담당자 확인을 우선한다.

## 관련

- [[program-module-map]] — 프로그램별 권장 학습 모듈 맵(교안에서 확인한 핵심 활동 포함)
- [[sk-group-ax-agenda-2026]] — 그룹 AX Agenda("1인 1에이전트")
- `outputs/insight-report/` — 이 카탈로그를 매핑 기준으로 쓰는 월간 Insight 리포트
