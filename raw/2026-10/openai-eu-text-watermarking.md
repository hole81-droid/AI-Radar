---
source: https://openai.com/index/eu-text-provenance/
date: 2026-10-05
captured: 2026-10-06
related: https://community.openai.com/t/openais-approach-to-eu-text-provenance-rules/1403521, https://cryptobriefing.com/openai-text-watermark-eu-chatgpt-ai-act/
---

# OpenAI, EU 텍스트 출처(provenance) 규칙 대응 — ChatGPT·Codex 비가시 워터마크 도입 (WebSearch 교차확인 캡처)

- OpenAI가 2026-10-05 "EU 규제 요건에 대응해 콘텐츠 출처 확인 범위를 텍스트까지 확장한다"고
  발표. 기존에는 이미지·오디오 출처 확인 도구만 있었음.
- **기술명 textGrain**: 모델의 단어 선택 과정에 통계적 신호를 심는 방식. 짧은 문장이나
  이후 사람이 편집을 가하면 탐지 신뢰도가 떨어진다고 자체적으로 명시.
- **적용 범위**: API 고객은 전 세계 어디서나 일부 모델에 한해 워터마킹을 **옵트인**할 수
  있고, ChatGPT·Codex의 EU 지역 생성 텍스트에는 몇 주 내로 자동 적용될 예정.
- **한계 자기 고지**: 워터마크가 탐지돼도 "OpenAI 시스템이 생성·처리에 관여했을 가능성"만
  보여줄 뿐, 누가 썼는지·얼마나 기여했는지·소유권·정확성 여부는 알려주지 않음. 탐지 안 됨 ≠
  사람이 썼다는 증거도 아니라고 명시.
- **탐지기 접근**: 초기에는 승인된 연구자·전문기관에만 제공.

> 맥락: Anthropic은 이미 2026-08-11 유사한 EU AI Act 투명성 조항 대응으로 Claude 텍스트·
> 이미지에 워터마크를 도입했다([[2026-08-11-anthropic-ai-content-watermarking]]). 그 페이지의
> "왜 중요한가" 절에서 예상했던 "다른 프론티어 기업도 유사 대응을 서두를 가능성"이 약 2개월
> 만에 OpenAI로 현실화된 사례.
