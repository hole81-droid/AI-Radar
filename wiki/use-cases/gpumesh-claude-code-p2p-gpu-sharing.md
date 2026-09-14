---
type: use-case
date: 2026-09-14
tools: [claude-code]
mechanism: [vibe-coding]
domain: dev-automation
task: 유휴 GPU를 공유하는 오픈소스 P2P GPU 공유 CLI 도구(GPUMesh) 개발
outcome: 오픈소스 무료 공개, RTX 5060 기준 페어링→공유→원격 실행 전체 플로우 실사용 검증
model: 미확인
cost: 미확인
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: low
uses: [course]
source: https://www.reddit.com/r/ClaudeAI/comments/1wf14vs/i_built_gpumesh_with_claude_code_my_ai_agents_can/
---

> **공식**: Claude Code로 vibe-coding(고수준 요구사항 제시→반복 구체화)을 활용해
> 개인 개발자가 P2P GPU 공유 오픈소스 CLI 도구 개발을 수행 → 오픈소스 무료 공개,
> RTX 5060 실기 검증 완료

## 무엇을 자동화했나

개인 개발자가 자신의 GPU가 AI 에이전트 작업으로 점유돼 있을 때 친구의 유휴 NVIDIA
GPU를 빌려 쓰기 위해, 별도 클라우드 인프라 없이 신뢰된 두 기기 간에 Docker GPU
워크로드를 원격 실행하는 CLI 도구 "GPUMesh"를 개발했다. `gpumesh share`(GPU 공유)·
`gpumesh pair`(신뢰 연결 수립)·`gpumesh run --peer <name>`(원격 GPU 작업 실행) 3개
명령으로 구성된다.

## 어떻게 구성했나 (아키텍처)

- Rust로 작성된 CLI + 워크스페이스. Claude Code에게 "두 신뢰된 기기가 안전하게
  서로를 발견하고 한쪽이 다른 쪽에 Docker GPU 작업을 제출할 수 있게 하고 싶다"는
  고수준 요구사항을 제시한 뒤, P2P 네트워킹·CLI·실행 세부사항을 반복 대화로
  구체화하는 vibe-coding 방식으로 진행.
- Claude Code가 담당한 영역: P2P 네트워킹 레이어, 컨테이너/작업 실행 플로우,
  페어링·접근제어 로직, GPU 감지, 에러 핸들링, 테스트. 특히 네트워킹·Docker·NVIDIA
  Container Toolkit·CLI가 얽히는 지저분한 통합 지점 디버깅에 유용했다고 저자는 평가.
- 실제 작업은 제공자 기기의 Docker 컨테이너 안에서 GPU 옆에 붙어 실행되며,
  GPUMesh는 피어 연결·권한·작업 실행·로그만 담당.

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 |
| 비용 | 미확인 |
| 권한 설계 | 미확인 (기기 간 "신뢰 페어링"만 언급, 세부 접근제어 방식은 원문에 없음) |
| 성숙도 | prototype (개인 오픈소스 프로젝트, 초기 공개 단계) |

## 성과와 수치

RTX 5060 기준 페어링→연결→공유→원격 Docker 작업 실행→컨테이너 내 `nvidia-smi`
실행까지 전체 플로우를 저자가 직접 실측 검증했다고 주장(claimed, 제3자 검증 없음).
정량적 성능 수치(속도 개선·비용 절감 등)는 공개되지 않았다.

## 재현 가이드

- **난이도**: 중 (Rust·Docker·P2P 네트워킹·NVIDIA Container Toolkit 이해 필요)
- **준비물**: Claude Code, Docker, NVIDIA GPU 2대(신뢰 관계로 묶을 기기), NVIDIA
  Container Toolkit
- **핵심 단계**:
  1. 고수준 목표를 한 문장으로 정의("신뢰된 두 기기가 GPU 작업을 주고받는다")
  2. Claude Code와 반복 대화로 네트워킹 계층부터 구체화(vibe-coding)
  3. 컨테이너 실행·권한·에러 핸들링을 별도 라운드로 다듬기
  4. 실제 GPU 페어 기기로 전체 플로우 실측 검증

## 강의·AX 활용 포인트

"고수준 요구사항 제시 → Claude Code와 반복 구체화"라는 vibe-coding 워크플로우를
개인 인프라 도구 제작에 적용한 소규모 사례. 정량 성과는 없지만, 처음부터 상세
스펙을 주지 않고 목표만 던진 뒤 대화로 구체화하는 진행 방식 자체가 강의에서
"vibe-coding vs 스펙 주도 개발"([[vibe-coding-vs-agentic-engineering]] 참고) 비교
소재로 쓸 만하다.

## 출처

- [Reddit r/ClaudeAI — I built GPUMesh with Claude Code](https://www.reddit.com/r/ClaudeAI/comments/1wf14vs/i_built_gpumesh_with_claude_code_my_ai_agents_can/)
- [GitHub — arjun988/GPU-Share](https://github.com/arjun988/GPU-Share)
