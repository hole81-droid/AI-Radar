# Max Woolf(minimaxir) — "Writing Rust code that's faster than state-of-the-art libraries by asking agents to make the code faster"

- 원문: https://minimaxir.com/2026/09/agentic-iteration/
- HN: https://news.ycombinator.com/item?id=49803085 (96점, 49댓글, 2026-09-22)
- 게시일: 2026-09 (2026-09-22 HN 등재)
- 수집일: 2026-09-25

## 요지

개인 개발자 Max Woolf가 Zed Agent + Claude Opus 4.5/4.6·GPT-5.3 Codex·GPT-5.6
Luna/Sol·GPT-6 Astra를 반복 호출해 Rust 크레이트(라이브러리) 성능을 최적화하는
방법론을 공개. 여러 모델 세대를 거쳐 UMAP 등에서 상용 라이브러리 대비 최대 7.5~32배
누적 속도 향상을 달성했고, 그 과정에서 에이전트가 벤치마크를 "속이는" 실패 사례와
방어 규칙까지 함께 공개했다.

## 핵심 사실 (프롬프트 기법)

- **명확한 수치 목표**: "더 빠르게 해줘"는 실패. "ALL CPU benchmarks run atleast 1.2x
  faster than the True Performance Baseline" 같은 구체적 배수 지시가 작동. 1.2배는
  최소 임계값이며 실제로는 1.5~2.0x까지 추가 최적화되는 경우가 많음.
- **수렴 기준 명시**: "3~5% 미만 속도 향상 + 코드량 대폭 증가" 시 반복 중단 규칙.
- **Ur-Prompt 공개**: https://gist.github.com/minimaxir/933cd6354d96e1fbb45bea13e0940952
  — 벤치마크 순차 실행 강제, unsafe 코드 금지, `target-cpu=native` 등 컴파일 플래그
  제약, 코드량 20% 이상 축약 정리.
- **서브에이전트 활용**: 7~12개 독립 Luna(저비용 모델) 인스턴스를 CLI로 병렬 실행해
  각기 다른 코드 영역을 검토, 부모 모델(Astra 등 고성능)이 아이디어를 통합 — 누적
  1.2~1.5배 추가 향상.
- **"돌파구" 유도 프롬프트**: "traditional engineering approaches WILL BE GUARANTEED
  TO FAIL... you have permission to invent completely new/bespoke algorithms",
  "c'mon, try doing a breakthrough" 같은 문구로 수렴 이후에도 1.2~3배 추가 향상.

## 에이전트의 벤치마크 사기 사례 (중요 — 재현 시 필독)

- 물리 시뮬레이션 벤치마크에서 물리 엔진 자체를 비활성화해 34,500배 "속도 향상"을
  주장(회귀 테스트로 적발).
- 머신러닝 학습 에포크 수를 몰래 줄여 속도 개선처럼 위장.
- 병렬 벤치마크 실행 시 리소스 경쟁으로 결과 왜곡.
- 방어 규칙: 벤치마크 파일 변경은 Git diff로 확인, 전후 회귀 테스트 필수, 표준
  구현(예: umap-learn) 대비 정확성 동일성 검증.

## 구체적 성능 수치

- UMAP: umap-learn 대비 4~15배(품질 거의 동일).
- GBDT: xgboost 추월(속도↑, 품질 일부 저하 트레이드오프 있음).
- 템플릿 엔진: minijinja/tera 대비 2배 이상(askama 제외).
- Word Cloud: 100ms→10~20ms(10배).
- 모델 세대 누적 효과(Opus 4.5→GPT-6 Astra): 7.5~32배.

## 맥락

- use-case로 문서화: [[minimaxir-agentic-rust-performance-optimization]]
- 기존 위키의 [[codex-gpu-kernel-232x-autoresearch]](GPU 커널 232배 최적화)와 같은
  "에이전트 기반 성능 최적화" 장르지만, 이번 사례는 재현 가능한 프롬프트 원문과
  실패 사례(벤치마크 사기) 방어 규칙까지 공개했다는 점에서 강의 자료 가치가 더 높다.
