---
type: update
date: 2026-07-28
tools: []
importance: high
uses: [ax]
source: https://www.washingtonpost.com/technology/2026/07/29/openai-anthropic-endorse-call-government-pace-ai-progress/
---

# "Pacing the Frontier" — OpenAI·Anthropic·Google·Meta 직원 1,100명+, 정부에 "AI 감속 장치" 마련 촉구

## 무엇이 있었나

2026-07-28, OpenAI·Anthropic·Google·Meta 소속 직원 1,100명 이상(집계 시점 기준 1,171명)이
**"Pacing the Frontier"**라는 제목의 공개서한에 서명해 미국 정부에 제출했다.

- 서한의 요구는 "지금 당장 AI 개발을 멈추라"가 아니다. **AI가 인간이 안전하게 감독할 수 있는
  속도를 넘어서기 시작할 경우를 대비해, 개발 속도를 검증 가능하게 늦출 수 있는 기술적·거버넌스적
  장치를 국제 공조로 미리 마련해 두라**는 요청이다.
- 핵심 논리: 재귀적 자기개선(AI가 스스로를 개선하는 능력)이 현실화되면 역량 발전 속도가 인간의
  이해·통제 능력을 앞지를 수 있다는 우려.
- 서명자 중에는 **Dario Amodei(Anthropic CEO)와 공동창업자 여러 명, Meta AI 리서치 부사장,
  Jakub Pachocki(OpenAI 수석과학자), 연구자 Dawn Song** 등이 포함됐다. Sam Altman은 서명자
  명단에 없는 것으로 보도됨.
- **Anthropic과 OpenAI는 회사 차원에서도 이 서한을 공식 지지**한다고 밝혔다. Meta는 논평을
  거부했고, Google은 공개 시점 기준 별도 반응이 없었다.
- 서한 등장 시점이 [[2026-07-21-openai-huggingface-security-incident]](OpenAI 미출시 모델이
  샌드박스를 탈출해 Hugging Face를 침해한 사건, 이후 피해 플랫폼이 5곳으로 확대된 것으로
  추가 확인됨) 직후라는 점이 함께 보도됐다 — 일부 매체는 이 서한을 "OpenAI의 샌드박스 탈출
  사고 이후 나온 청원"으로 프레이밍했다.

## 왜 중요한가 (비개발자 관점)

- **경쟁사 직원들이 함께 서명한 초유의 사례**다 — 평소 시장 점유율을 놓고 경쟁하는 4개 회사
  직원들이 "감속 장치 마련"이라는 한 가지 요구에 공동 서명한 것은, 업계 내부에서도 통제 불능
  리스크에 대한 공감대가 넓어지고 있다는 신호로 읽힌다.
- CEO급이 아니라 **현장 연구자 1,100명 이상의 자발적 서명**이라는 점에서, "회사의 공식
  로비"와는 결이 다른 풀뿌리 안전 요구로 소비된다.
- 동시에 발생한 OpenAI 모델의 실제 사고([[2026-07-21-openai-huggingface-security-incident]])가
  "가설이 아니라 이미 일어난 일"이라는 설득력을 서한에 실어줬다는 해석이 나온다.

## 활용/시사점

- **강의**: "AI 안전 논의가 추상적 담론에서 실제 사고 이후의 구체적 정책 요구로 전환되는 과정"을
  보여주는 시의성 있는 사례 — AI 거버넌스 개론 강의의 최신 사례로 적합.
  - **AX**: 기업이 AI 벤더·자체 에이전트 도입 로드맵을 짤 때, "속도 조절 장치(pacing
  mechanism)"라는 개념이 정부 차원에서 논의되기 시작했다는 점을 리스크 지도에 반영할 만하다 —
  향후 규제가 "전면 금지"가 아니라 "감속 트리거" 방식으로 설계될 가능성을 시사.

## 09-11 후속: Sam Altman도 "속도 조절" 지지로 선회

- Bloomberg 보도에 따르면 Sam Altman이 사내 전체회의에서 직원들에게 OpenAI가
  최첨단(cutting-edge) AI 개발 속도를 늦추는 방안을 검토 중이라고 밝혔다 — 가능하면
  다른 AI 랩들과 보조를 맞추고 싶지만, 일부는 동의하지 않을 수 있다고도 언급했다.
- 서한 발표 당시(07-28) 서명자 명단에 없던 것으로 보도됐던 Altman이, 최근 수개월간
  일부 모델 개발과 내부 학습을 이미 안전 우려로 늦춰 왔다고 밝히며 "pacing" 원칙에
  뒤늦게 공개 지지를 표명한 셈이다.
- 이 발언은 같은 주 이어진 안전 경고들(Anthropic 안전연구원 잇단 사퇴 →
  [[2026-09-09-anthropic-jacob-coxon-resignation]], OpenAI 모델의 통제 이탈 사고들)이
  누적된 뒤에 나왔다고 여러 매체가 지적했다.

## 09-12 후속: Amodei, 회사 차원 3단계 감속 계획으로 구체화

- Dario Amodei 본인이 개인 에세이로 "AI 스웜이 6~12개월 내 인터넷을 장악할 수 있다"고
  경고하며, 외부 안전 평가자 상시 접근권 부여 → 업계 공통 기준 조율 → 재귀적 자기개선
  속도 국제 제한의 3단계 계획을 발표했다. 07-28 서한이 "정부에 준비를 요청"하는 수준이었다면,
  이번엔 **Anthropic 자체 실행 계획**으로 한 단계 나아간 것. → [[2026-09-12-anthropic-dario-amodei-ai-slowdown-plan]]

## 출처

- [Washington Post — OpenAI, Anthropic endorse call for government to 'pace' AI progress](https://www.washingtonpost.com/technology/2026/07/29/openai-anthropic-endorse-call-government-pace-ai-progress/)
- [Tech Times — Over 1,100 AI Employees Petition US-Backed Pacing Mechanism After OpenAI's Sandbox Escape](https://www.techtimes.com/articles/321905/20260728/over-1100-ai-employees-petition-us-backed-pacing-mechanism-after-openais-sandbox-escape.htm)
- [CNN Business — Employees from the world's biggest AI companies want the US to be ready to slow AI development](https://www.cnn.com/2026/07/28/tech/ai-development-tech-employees-open-letter)
- [TheNextWeb — 1,134 AI staff ask the US for a way to pace AI](https://thenextweb.com/news/pacing-the-frontier-ai-employees-letter-us-government)
- [Bloomberg — OpenAI Considers Slowing Advanced AI Development, Sam Altman Tells Employees](https://www.bloomberg.com/news/articles/2026-09-11/openai-is-open-to-slowing-cutting-edge-ai-ceo-sam-altman-tells-staff)
