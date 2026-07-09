# [원본] 클로드코드로 유튜브 영상/쇼츠 100% 자동 제작 — Threads @seize.more + kimkj 매뉴얼

- **출처 1 (Threads 바이럴 원글)**: https://www.threads.com/@seize.more/post/DWBXH9uEiU_/ (2026-03경 바이럴)
- **출처 2 (따라하기 매뉴얼)**: https://kimkj.com/ai-board/?execute_uid=195&mod=document&uid=195
- **수집**: 2026-07-09, WebFetch
- **비고**: 두 출처는 **서로 다른 파이프라인**이다. Threads 원글은 Remotion+edge-tts 기반 쇼츠, kimkj 매뉴얼은 ElevenLabs+CapCut 기반 롱폼/영상 파이프라인. kimkj 매뉴얼은 전문 재현이 거부되어 구조화 요약본으로 저장.

---

## 출처 1. Threads @seize.more — Remotion 기반 쇼츠 자동 생산

- 주장: "클로드코드로 유튜브 쇼츠 만들 수 있다" — 영상 편집기 불필요, AI가 대본·음성·자막 자동 생성
- 도구: Claude Code + Remotion(React 기반 영상 프레임워크) + edge-tts(무료 TTS, 한국어 지원)
- 작동 원리: **"씬 템플릿을 React로 만들어두고 주제만 바꿔서 영상을 찍어내는 구조"**
- 반응(수집 시점): 조회 53.6K, 좋아요 603, 댓글 242
- 구체적 단계·제작 시간·비용 수치는 본문에 없음 (방법은 "댓글로 하나씩 공유" 언급)

## 출처 2. kimkj.com 매뉴얼 — 클로드 코드로 유튜브 영상 100% 자동화

### 도구 조합
- **Claude Code**: 전체 오케스트레이션 및 에이전트 관리 ("에이전트 6개가 대본 하나를 만듭니다")
- **ElevenLabs API**: TTS (한국어 지원)
- **Google Whisk AI / Flow**: 이미지 생성
- **Grok Imagine (xAI)**: 비디오 생성 (훅 인트로)
- **CapCut**: JSON 기반 자동 편집 ("JSON 파일로 저장되며, 이를 직접 생성하면 편집 자동 완성")
- **YouTube Data API v3**: 자동 업로드

### 13단계 프로세스
- 기획: ①레퍼런스 수집(유튜브 자막·제목·댓글) ②~⑤분석→팩트체크→전략→기획서 ⑥대본 작성·검수
- 제작: ⑦ElevenLabs TTS 음성 생성 ⑧SRT 자막 생성·타이밍 싱크 ⑨씬 설계/스토리보드 ⑩이미지 생성 ⑪동영상 생성(훅 인트로) ⑫CapCut JSON 프로젝트 자동 생성 ⑬렌더링·업로드

### 성과·비용 (저자 주장)
- 제작 시간: 편당 약 50분~1시간, 그중 **사람 작업 5분**
- 편당 비용: **약 5,000원**
- 월 고정 비용: **약 $111** (클로드 $100 + ElevenLabs $11)
- 코딩 지식 불필요 (Claude Code가 대신 처리)
