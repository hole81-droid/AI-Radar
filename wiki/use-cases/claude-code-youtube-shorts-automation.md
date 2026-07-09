---
type: use-case
date: 2026-03-01
tools: [claude-code]
mechanism: [subagents, cli-pipeline]
domain: content-creation
task: 유튜브 영상·쇼츠 제작 전 과정(레퍼런스 수집→대본→음성→자막→편집→업로드) 자동화
outcome: 편당 사람 작업 5분·약 5,000원, 월 고정 약 $111 (kimkj 매뉴얼 주장 수치)
model: 미확인
cost: 편당 약 5,000원 + 월 고정 약 $111 (Claude $100 + ElevenLabs $11) — kimkj 매뉴얼 기준
permissions: 미확인
maturity: production
evidence: claimed
importance: high
uses: [course, ax]
source: https://www.threads.com/@seize.more/post/DWBXH9uEiU_/
---

# 클로드코드로 유튜브 영상 100% 자동 생산 — 템플릿 자산화 패턴

> **공식**: [Claude Code]로 [서브에이전트 6개 분업 + 씬 템플릿 자산화 파이프라인]을 활용해 [유튜브 영상·쇼츠 제작 전 과정]을 수행 → [편당 사람 작업 5분, 약 5,000원 (주장)]

## 무엇을 자동화했나

같은 목표("편집기 없이 Claude Code로 영상 생산")의 **서로 다른 두 파이프라인**이 2026년 상반기 한국 커뮤니티에서 화제가 됐다.

| 구분 | ① Threads @seize.more (쇼츠) | ② kimkj.com 매뉴얼 (영상 전 과정) |
|------|------|------|
| 도구 | Claude Code + Remotion(React 영상 프레임워크) + edge-tts(무료 TTS) | Claude Code + ElevenLabs(TTS) + Whisk/Grok Imagine(이미지·비디오) + CapCut(JSON 편집) + YouTube Data API(업로드) |
| 범위 | 대본→음성→자막→렌더링 | 레퍼런스 수집→분석·팩트체크→기획→대본→음성→자막→씬 설계→이미지·비디오→편집→업로드 (13단계) |
| 핵심 구조 | 씬 템플릿을 React 컴포넌트로 1회 구축 → 주제만 바꿔 "찍어내기" | 에이전트 6개가 대본 하나를 분업 생산, CapCut 프로젝트 JSON을 직접 생성해 편집 자동 완성 |
| 수치 | 없음 (바이럴 반응: 조회 53.6K·좋아요 603) | 편당 50분~1시간(사람 5분), 약 5,000원, 월 고정 $111 |

## 어떻게 구성했나 (아키텍처)

- **② kimkj 파이프라인 (벤치마크 데이터의 출처)**: Claude Code가 전체 오케스트레이터. 기획 단계는 서브에이전트 6개가 레퍼런스 분석·팩트체크·전략·대본을 분업. 제작 단계는 외부 API 체인(ElevenLabs TTS → SRT 자막 싱크 → Whisk/Grok 소재 생성 → CapCut JSON 자동 생성 → 렌더링 → YouTube API 업로드)을 CLI에서 순차 실행. 편집기의 프로젝트 파일(JSON)을 직접 생성하는 것이 "편집 자동화"의 핵심 트릭.
- **① Remotion 파이프라인**: 영상을 React 코드로 정의(Remotion)하고 씬 템플릿을 한 번 만들어두면, 이후 Claude Code가 대본·음성(edge-tts, 무료)·자막을 채워 렌더링만 반복 — **템플릿 자산화(1회 구축→무한 재사용)** 패턴의 최소 구현.

## 벤치마크 데이터

| 항목 | 값 | 근거 |
|------|-----|------|
| 모델 | 미확인 | 원문에 모델명 없음. "클로드 $100"는 Max 요금제로 추정 `[추정]` |
| 비용 | 편당 약 5,000원, 월 고정 약 $111 (Claude $100 + ElevenLabs $11). ①은 edge-tts가 무료라 추가 비용 없음 | kimkj 매뉴얼 (주장) |
| 권한 | 미확인 | 두 원문 모두 언급 없음 |
| 성숙도 | production — 저자가 실제 채널 운영에 사용 중이라 서술 | kimkj 매뉴얼 |

## 성과와 수치

- **주장(claimed)**: 편당 제작 50분~1시간 중 사람 작업 5분, 편당 약 5,000원 — kimkj 매뉴얼 저자의 자체 보고이며 제3자 실측 아님.
- **커뮤니티 반응(실측)**: Threads 원글 조회 53.6K, 좋아요 603, 댓글 242 (수집 시점) — 수요·화제성의 지표.

## 재현 가이드

- **난이도**: 중 (코딩 지식 불필요하나 API 계정 다수 + 1회 템플릿 구축 필요)
- **준비물**: Claude 유료 구독(파이프라인 ②는 $100 요금제 전제), ElevenLabs API(또는 무료 edge-tts), CapCut, YouTube Data API 키. ①은 Remotion(Node.js) 환경
- **핵심 단계**:
  1. 쉬운 쪽부터: ① Remotion으로 쇼츠 씬 템플릿(React 컴포넌트) 1개 구축
  2. Claude Code에 대본 생성→edge-tts 음성→자막 타이밍→렌더링 순서를 워크플로우로 정의
  3. 주제만 바꿔 반복 생산하며 템플릿 개선
  4. 확장 시 ② 구조 도입: 기획 단계를 서브에이전트로 분업, CapCut JSON 생성·YouTube 업로드까지 연결

## 강의·AX 활용 포인트

- **강의**: "템플릿 자산화(한 번 구축→무한 재사용)"를 가르치는 대표 예제. edge-tts 무료 조합(①)은 수강생 실습용, 13단계 파이프라인(②)은 심화·비용 설계 교재로 이원화 가능.
- **AX**: 콘텐츠·마케팅 팀 업무의 에이전트화 사례 — 편당 5,000원이라는 원가 구조(주장)는 사내 영상 콘텐츠 내재화 검토의 출발 수치로 쓸 수 있다. 단 자체 보고 수치이므로 파일럿 실측 필수.

## 출처

- Threads 원글: [@seize.more](https://www.threads.com/@seize.more/post/DWBXH9uEiU_/) (2026-03경 바이럴)
- 따라하기 매뉴얼: [kimkj.com — 클로드 코드로 유튜브 영상 100% 자동화](https://kimkj.com/ai-board/?execute_uid=195&mod=document&uid=195)
- 로컬 저장본: [[../../raw/2026-07/claude-code-youtube-shorts-automation]]
