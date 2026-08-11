---
source_url: https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content
related_url: https://techcrunch.com/2026/08/11/anthropic-says-it-will-watermark-text-generated-by-its-ai-models/
retrieved: 2026-08-12
publish_date: 2026-08-11
---

# How Claude marks AI-generated content

WebFetch로 확인한 원문 요지.

## 핵심 내용

- Anthropic이 EU AI Act Article 50(2) Code of Practice(AI 생성 콘텐츠 투명성 실천규범)에
  생성형 AI 모델 제공자·시스템 제공자로 서명.
- 2026-08-02 이후 출시되는 Claude 모델은 출시 시점부터 마킹(워터마크) 지원. 그 이전 모델도
  순차적으로 마킹 기능을 추가 중.
- 적용 범위: API, claude.ai, Claude Code, Claude Cowork, Claude Tag 전체. AWS·Google Cloud·
  Microsoft Foundry 등 서드파티 클라우드 포함, 전 세계 전 리전 적용.
- 텍스트: 지각 불가능한 워터마크를 텍스트 자체에 삽입(의미·품질·가독성 불변).
- 파일(.svg/.png/.jpg): C2PA 표준을 따르는 서명된 출처(provenance) 메타데이터 첨부.
- 한계: "Claude 마크 감지 = 콘텐츠가 Claude에 의해 처리됐을 가능성"을 뜻할 뿐, 완전한
  출처 증명은 아님(Claude가 원본을 새로 만들지 않고 편집만 했을 수도 있음). 제3자 검증용
  기술 문서는 추후 공개 예정.

## 커뮤니티 반응 (Reddit r/ClaudeAI, 2026-08-10~11)

- "Claude will now include invisible marks to show a text was made with AI" 스레드 —
  [Independent 기사](https://www.independent.co.uk/tech/claude-anthropic-update-watermark-new-b3031096.html) 링크, 찬반 논쟁.
- "Claude watermarking our work is unethical and disgusting" — 사용자가 만든 결과물에
  마킹하는 것에 대한 반발.
- "How would an invisible watermark in AI-generated text actually work?" — 기술적 원리에
  대한 궁금증(어떻게 편집·재작성 후에도 탐지가 살아남는지).
- "Clarification needed: Do models launched BEFORE August 2 currently watermark?" —
  적용 시점 문구가 모호하다는 지적.
- 출처: https://old.reddit.com/r/ClaudeAI/top/.rss?t=day (2026-08-11 스캔 시점 상위 게시물)
