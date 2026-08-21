# GitHub: NoBuzz — Claude Code의 "버즈피드체"를 고치는 /debuzz 스킬

- 원문: https://github.com/adnanakil/nobuzz/blob/main/README.md
- 게시일: 확인 불가(GitHub 저장소, 커밋 이력 기준 추정 최근) — HN 게재일 2026-08-21 기준 수집
- 수집일: 2026-08-22 (WebFetch로 원문 대조)
- 커뮤니티: Hacker News 148점 ("Claudette: Make Claude stop talking like a BuzzFeed article",
  https://github.com/adnanakil/nobuzz/blob/main/README.md)

## 요지

Claude Code의 장황하고 과장된("BuzzFeed식") 응답 스타일을 평이한 영어로 번역해주는
Claude Code 스킬 `/debuzz`. 메커니즘은 Claude Code와 무관한 별도 모델(Google Gemini CLI)에
결과를 다시 통과시키는 크로스 툴 파이프라인.

## 작동 방식

1. Claude의 직전 응답을 임시 파일에 기록
2. `gemini -p` 명령으로 평이한 영어 스타일 지침과 함께 Gemini CLI에 파이프
3. Gemini의 번역 결과를 그대로 출력

## 설치·재현성

- Git clone + 디렉터리 생성 + Gemini CLI 설치(`npm install -g @google/gemini-cli`) 및 인증
  — 재현 가능한 설치 단계가 README에 명시됨.
- 3단계 번역 모드 제공: 동료용(기술적 디테일 유지), 매니저용(축약), 임원용(3~5문장 요약).
  "say that in normal english" 같은 자연어 트리거로도 작동.

## 성과·규모

README에 정량 사용 통계 없음. 문서화 시점 기준 GitHub 스타 51개 — 널리 채택된 프로덕션
도구라기보다 소규모 유틸리티/유머 프로젝트 성격. MIT 라이선스.
