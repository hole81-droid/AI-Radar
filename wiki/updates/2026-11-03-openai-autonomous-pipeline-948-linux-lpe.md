---
type: update
date: 2026-11-03
tools: [codex, chatgpt]
importance: high
uses: [ax]
source: https://openai.com/index/a-thousand-fewer-paths-to-root/
---

# OpenAI, 자율 취약점 발굴·악용·패치 파이프라인으로 Linux 커널 권한상승 취약점 948건 검증

## 무엇이 있었나
OpenAI 보안 연구진이 취약점 발견·익스플로잇·패치 생성을 자동으로 잇는 파이프라인을 공개했다(블로그 제목 "A thousand fewer paths to root", HN 491점). Latent Space(11-05 AINews)가 정리한 수치: 출시 전 사이버 모델로 **한 번의 실행에서 Linux 커널 로컬 권한상승(LPE) 취약점 948건을 검증하고 패치를 생성**, API 비용 합계 **$1.2M**(건당 약 $1,000, Greg Brockman 언급). 에이전트가 팀과 외부 전문가가 "새롭다"고 본 익스플로잇 기법을 10개 이상 사용했다고 한다. 연간 사람 연구자가 찾는 LPE는 20건 안팎이라는 Eric Wallace의 비교도 인용됐다. 리눅스 메인테이너·Patch the Planet 파트너와 보고·패치를 진행 중이며 오픈소스 무상 패치에 상당한 프런티어 컴퓨트를 투입하겠다고 밝혔다.
비교 수치(커뮤니티 비교, 미검증): 7월 GPT-5.6 Sol은 약 $50만에 166건. 실제 내부 비용은 API 정가보다 훨씬 낮을 것이라는 추정은 **미확인**이다. 1차 블로그는 이번 수집에서 접근 차단(403)으로 직접 읽지 못했다 — 출처: [Latent Space AINews](https://latent.space/p/ainews-its-swapping-season/).

## 왜 중요한가
"사람이 연 20건 찾던 것을 한 주에 거의 1,000건" — 보안 분야에서 에이전트 처리량이 한 자릿수 배수가 아니라 자릿수가 다르게 뛴다는 첫 대규모 수치다. 같은 능력이 공격에도 쓰이므로 방어 쪽 패치 속도가 병목이 된다. 기업 보안 조직은 패치 파이프라인 자동화를 설계해야 한다. 관련: [[2026-08-11-openai-gpt-5-6-cyber-daybreak]], [[2026-10-23-claude-mythos-5-aisi-safety-incident]].

## 활용 포인트
- AX: 보안 취약점 점검의 건당 단가($1,000 수준) 벤치마크, 패치 자동화 근거.
- 연관: [[codex]], [[openai]]
