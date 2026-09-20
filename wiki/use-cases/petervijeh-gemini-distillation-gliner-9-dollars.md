---
type: use-case
date: 2026-09-17
tools: [gemini]
mechanism: [cli-pipeline]
domain: dev-automation
task: Reddit 댓글에서 개체명(브랜드·모델·소재) 추출 — 비싼 API 호출을 로컬 모델로 대체
outcome: 라벨링 $9 + 학습 $2.50로 로컬 NER 모델 완성, Gemini 라벨과 동등한 F1 0.83 확보
model: Gemini 3.1 Pro(라벨링용) → GLiNER large v2.5(459M, 로컬 서빙용)
cost: Gemini 라벨링 $9(comment당 $0.0021, 4,290건) + GPU 학습 $2.50, 4,291건 이후 API 대비 손익분기
permissions: 미확인 (개인 프로젝트, 공개 Reddit 데이터 스크레이핑으로 추정 [추정])
maturity: pilot
evidence: measured
importance: medium
uses: [course, ax]
source: https://www.petervijeh.com/projects/reddit-ner
---

> **공식**: Gemini 3.1 Pro API로 Reddit 댓글 4,290건을 한 번만 라벨링(mechanism: cli-pipeline)한
> 뒤 그 라벨로 로컬 소형 모델(GLiNER)을 파인튜닝 → 건당 API 호출을 없애고 정확도는
> Gemini 수준(F1 0.83)을 유지하며 총 $11.50로 손익분기 도달.

## 무엇을 자동화했나

칼(나이프) 관련 Reddit 댓글에서 **브랜드명·모델명·강종(steel type)**을 추출하는
개체명 인식(NER) 작업을 자동화했다. 원래는 댓글마다 Gemini 3.1 Pro API를 호출해
처리했는데, 스크레이핑 규모가 커지면서 API 비용이 누적 부담이 됐다.

## 어떻게 구성했나 (아키텍처)

1. TypeScript + MongoDB로 Reddit 댓글 스크레이핑.
2. OpenRouter API 경유로 Gemini 3.1 Pro에 **temperature 0**으로 4,290개 댓글을
   한 번만 라벨링 — 문자 오프셋이 아니라 **정확한 부분 문자열(exact substring)**
   추출 방식을 써서 위치 오류를 피함.
3. 그 라벨 데이터로 **GLiNER large v2.5**(459M 파라미터, 오픈소스 소형 NER 모델)를
   Python/PyTorch/Hugging Face Trainer로 파인튜닝(Modal의 Tesla T4로 10회 학습).
4. FastAPI로 로컬 서빙 — 이후 모든 신규 댓글 처리는 API 호출 없이 로컬에서 처리.
5. 초기 5회 학습 실패 — `words_mask` 텐서가 이진 마스크가 아니라 **단어 인덱스**를
   요구하는 비직관적 입력이라는 것을 뒤늦게 파악.

## 벤치마크 데이터

| 항목 | 수치 |
|---|---|
| 라벨링 비용 | $9 (4,290건, 건당 약 $0.0021) |
| GPU 학습 비용 | 약 $2.50 (10회 학습, Modal Tesla T4) |
| 손익분기점 | 약 4,291건 처리 후 API 비용 대비 이득 시작 |
| 정확도 | F1 0.83 (held-out 검증), 소재(material) 클래스 재현율 0.911(클래스별 임계값 적용 시) |
| 권한 설계 | 미확인 |
| 성숙도 | pilot (개인 프로젝트, 로컬 배포 완료) |

## 성과와 수치

- **실측(measured)**: 총 $11.50(라벨링+학습)로 로컬 모델 완성, Gemini 라벨과
  "일치하는" 수준의 F1 0.83을 미확인 데이터에서 달성 — 저자 본인이 실측 공개.
- 이후 처리 비용은 사실상 0에 수렴(자체 GPU/CPU 추론 비용만 발생).

## 재현 가이드

- **난이도**: 중 (NER 라벨링 파이프라인 설계 + 소형 모델 파인튜닝 경험 필요)
- **준비물**: LLM API 키(라벨링용, OpenRouter 등 경유 가능), GLiNER 등 오픈소스
  소형 NER 모델, GPU 학습 환경(Modal 같은 서버리스 GPU로도 가능), 라벨링 대상
  데이터셋(수천 건 규모)
- **핵심 단계**:
  1. 대형 모델(API)로 **한 번만** 데이터셋 라벨링(temperature 0, 정확한 부분
     문자열 추출 방식 권장)
  2. 라벨 데이터로 소형 오픈소스 모델을 파인튜닝
  3. 로컬/자체 서버에 배포해 API 호출 대체
  4. 처리량이 손익분기점을 넘는지 비용 계산으로 확인 후 전면 전환

## 강의·AX 활용 포인트

- **강의**: "거대 모델로 라벨을 만들고 소형 모델로 증류(distillation)한다"는 실전
  비용 절감 패턴의 매우 저렴하고 접근 가능한 예시 — API 호출 누적 비용이 부담되는
  반복 작업(분류·추출·태깅)에 일반화 가능한 템플릿으로 가르치기 좋다.
- **AX**: 사내에서 특정 반복 분류·추출 업무에 매번 최상위 모델 API를 호출하고
  있다면, "한 번만 라벨링 → 소형 모델 파인튜닝 → 로컬 서빙"으로 전환해 반복 비용을
  구조적으로 낮출 수 있는지 검토할 근거 사례.

## 출처

- [Peter Vijeh — Reddit NER 프로젝트 페이지](https://www.petervijeh.com/projects/reddit-ner)
- [Hacker News(87점) — "I had Gemini train its own replacement for $9"](https://news.ycombinator.com/item?id=49740330)
