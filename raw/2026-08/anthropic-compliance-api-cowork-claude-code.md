# Anthropic, Compliance API를 Cowork·Claude Code 전체로 확장

- 원문: https://claude.com/blog/compliance-api-cowork-and-claude-code
- 게시일: 2026-08-19 전후
- 수집일: 2026-08-20

## 요지

Claude의 Compliance API 적용 범위가 Cowork(데스크톱·웹·모바일)와 Claude Code(CLI·데스크톱
앱)까지 확장됐다. Claude Enterprise 고객 대상 베타.

## 핵심 내용

- 보안팀이 감사(audit)·전자증거개시(eDiscovery)를 위해 통합 세션 콘텐츠·메타데이터를
  API로 가져올 수 있음.
- 새 세션 엔드포인트가 Cowork·Claude Code 세션마다 통합된, 서버에 저장된 트랜스크립트를
  반환 — 프롬프트·응답·툴 실행 기록이 하나의 세션 레코드로 묶임.
- 기존 Compliance Access Key로 바로 사용 가능, 별도 통합 작업 불필요.
- **한계(베타 범위 밖)**: Claude Code 웹 버전, Claude Platform 경유 세션, Amazon Bedrock·
  Google Vertex AI·Microsoft Foundry에서 실행된 세션은 미포함.

## 원문 URL

https://claude.com/blog/compliance-api-cowork-and-claude-code
