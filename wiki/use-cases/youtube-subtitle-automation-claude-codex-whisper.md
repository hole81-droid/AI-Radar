---
type: use-case
date: 2026-07-14
tools: [claude-code, codex]
mechanism: [cli-pipeline, skills]
domain: content-creation
task: Cursor 오케스트레이션 하에 Whisper·Claude Code·Codex로 유튜브 자막(SRT) 제작 전 과정 자동화
outcome: 자막 제작 전 과정(초벌 생성→오타 교정→문맥 수정→분할 정리)을 재사용 가능한 스킬로 자동화 (정량 수치 미확인)
model: 미확인 (Claude Code/Codex 구체 모델 버전 명시 없음, Antigravity 등으로 대체 가능하다고만 언급)
cost: 미확인
permissions: 미확인 (Claude Code·Codex의 "허용 모드(auto-allow)" 설정을 활용한다고만 언급)
maturity: demo
evidence: anecdotal
importance: medium
uses: [course, ax]
source: https://www.youtube.com/watch?v=z_a7D7C-0Tg
---
# 자동자막 끝판왕 — Cursor+Whisper+Claude Code/Codex로 유튜브 SRT 자막 완전 자동화

> **공식**: Cursor 오케스트레이션 하에 Whisper·Claude Code·Codex로 CLI 파이프라인+재사용 스킬을 활용해 유튜브 자막(SRT) 제작 전 과정을 수행 → 초벌 생성부터 최종 교정까지 전 공정 자동화 (정량 성과는 원문 미확인)

## 무엇을 자동화했나

"기쿠한 자동화" 채널이 공개한 튜토리얼로, 유튜브 영상 편집 시 필요한 SRT 자막 제작
전 과정을 자동화했다. 단순 STT(음성인식) 자막 생성을 넘어, 오타·고유명사 교정과 문맥
수정, 문장 분할까지 AI 코딩 에이전트가 처리하도록 구성한 것이 특징이다.

## 어떻게 구성했나 (아키텍처)

- **오케스트레이터**: Cursor(에디터)가 전체 작업을 지휘.
- **STT**: OpenAI Whisper Large-v3로 정밀 타임스탬프가 포함된 초벌 자막을 생성.
- **교정 에이전트**: Claude Code / Codex(또는 Antigravity 등 대체 가능)가 STT 오타·고유명사를
  교정.
- **문맥 보정**: 별도 대본 파일을 참고 자료로 넣어 문맥에 맞게 수정.
- **분할 정리**: 문장 길이·의미 단위로 자막을 분할하고, 자막 사이 공백 문제를 처리.
- **재사용화**: 위 전체 과정을 "자막자동화 스킬"로 저장해 다음 영상 제작 시 그대로 재사용.
- Claude Code·Codex의 "허용 모드(auto-allow)" 설정으로 매 단계 승인 없이 파이프라인이
  이어지도록 구성한 팁을 공유.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Whisper Large-v3만 명시, Claude Code/Codex 세부 모델 버전 불명) |
| 비용 | 미확인 |
| 권한 | 미확인 (auto-allow 설정 언급만 있고 구체 범위 불명) |
| 성숙도 | demo (개인 제작자의 튜토리얼 시연) |

## 성과와 수치

- **일화**: 제작자가 자신의 실제 영상 편집 워크플로우에 적용해 시연. 시간/비용 절감을
  뒷받침하는 구체적 수치는 영상 메타데이터(oEmbed) 조회로는 확인하지 못했다 — WebFetch가
  영상 설명란 전문을 가져오지 못해 "미확인"으로 남긴다.
- 실습 자료(노션 링크)를 공개했다고 알려져 있어 재현성은 높은 편으로 추정되나, 원문에서
  직접 확인하지 못했다.

## 재현 가이드

- **난이도**: 중 (Whisper 로컬/API 실행, Claude Code·Codex CLI 세팅, 스킬 파일 작성 필요)
- **준비물**: Cursor, OpenAI Whisper Large-v3 접근, Claude Code 및/또는 Codex CLI, 원본
  대본 파일
- **핵심 단계**:
  1. Whisper Large-v3로 타임스탬프 포함 초벌 SRT 생성
  2. Claude Code/Codex에 STT 결과와 원본 대본을 함께 제공해 오타·고유명사 교정
  3. 문장 길이·의미 단위로 자막 재분할, 자막 간 공백 이슈 정리
  4. auto-allow 설정으로 반복 승인 없이 파이프라인 연속 실행
  5. 전 과정을 스킬 파일로 저장해 다음 영상에 재사용

## 강의·AX 활용 포인트

- 콘텐츠 제작 AX에서 "STT+AI 코딩 에이전트 조합으로 자막 후처리를 자동화"하는 대표
  사례로 강의 소재화하기 좋다 — 특히 여러 도구(Cursor/Whisper/Claude Code/Codex)를
  역할별로 조합하는 오케스트레이션 패턴이 교육적.
- "스킬로 저장해 재사용"하는 흐름은 다른 반복 업무 자동화에도 그대로 적용 가능한 템플릿으로
  소개할 수 있다.
- 정량 성과가 미확인이므로 AX 보고서의 ROI 근거로 쓰기엔 약하다 — 도입 전 자체 파일럿으로
  시간 절감치를 실측할 것을 권고하는 식으로 활용.

## 출처

- [YouTube — 자동자막 끝판왕!! 클로드코드/Codex로 완벽한 자막 자동화 | 영상편집 자동화 (기쿠한 자동화)](https://www.youtube.com/watch?v=z_a7D7C-0Tg)
