---
type: update
date: 2026-08-24
tools: []
importance: medium
uses: [course, ax]
source: https://theaxlabs.com/blog/headlong-persistent-agent-microharness
---

# Headlong — MIT·Laude Institute의 오픈소스 "지속형 에이전트" 하네스 공개

## 무엇이 있었나

MIT와 Laude Institute가 2026-08-24 오픈소스 에이전트 마이크로하네스 **Headlong**을
공개했다(AX LABS가 2026-08-25 실무 관점으로 정리). Claude Code·Codex처럼 요청을 받아야
움직이는 방식과 달리, Headlong 에이전트는 **요청이 없어도 멈추지 않고 스스로 생각을
생성하며 필요할 때만 사람과 소통**하는 상시 가동형(persistent) 구조를 지향한다.

- 핵심은 `shellm`(재귀적 언어모델 코어)·`traj`(append-only 궤적 저장소)·`context`(궤적
  렌더링)·`thinkers`(반응형 사고 디스패처) 4개 도구로 이뤄진 **9.8K줄 Bash 코드베이스**.
  모델 비종속 설계로 GLM·Grok 등 다양한 LLM으로 구동 가능.
- 메모리는 삭제 대신 최근 항목은 원본 유지, 오래된 항목은 점진 압축하는 "해상도 저하"
  방식을 쓴다.
- 원라인 설치(`curl -fsSL https://headlong.ai/install.sh | bash`)를 제공하지만 Docker
  컨테이너화를 강력 권장하고, 비컨테이너 설치 시 명시적 안전 확인을 요구한다.

## 왜 중요한가 (비개발자 관점)

- 개발자가 대화창 앞에서 매번 지시하는 현재의 "요청-응답형" AI 코딩 도구와 달리, 스스로
  생각을 이어가다 필요할 때만 사람을 부르는 "상시 가동 비서"에 가까운 설계다. 루프
  엔지니어링(→ [[loop-engineering]]) 논의가 "얼마나 오래, 얼마나 자율적으로 도는가"의
  다음 단계로 넘어가고 있음을 보여준다.
- 흔치 않게 **실패 사례를 그대로 공개**했다 — 에이전트가 자기 서비스를 3차례 스스로
  중단시켰고, 시간당 $1~2 비용이 들며, 워치독 타임아웃이 자율 위임 실험을 방해해 12일간
  병합 커밋이 64건→12건으로 급감했다. 상시 가동 에이전트를 도입할 때 마주칠 현실적 리스크
  (비용·오작동·프라이버시 — 단일 사고 스트림이 기밀 구분 없이 모든 사용자 정보를 공유)를
  미리 보여주는 드문 사례다.

## 활용/시사점

- **강의**: 요청-응답형(Claude Code·Codex) vs 상시 가동형(Headlong) 에이전트 아키텍처를
  대비해 설명하는 최신 교재. 실패 사례가 투명하게 공개돼 있어 "에이전트 자율성을 얼마나
  허용할 것인가"를 다루는 리스크 설계 수업 소재로도 적합하다.
- **AX**: 사내에 상시 가동형 에이전트를 검토한다면 이 사례의 세 가지 실패 유형(자기중단,
  시간당 비용 누적, 프라이버시 격리 부재)을 도입 전 체크리스트로 그대로 쓸 수 있다.
  DeepSeek Harness(→ [[2026-08-13-deepseek-harness-launch]])에 이어 오픈소스 하네스
  경쟁이 "지속성(persistence)" 축으로도 확장되는 흐름이다.

## 출처

- [AX LABS — Headlong 설치법과 구조](https://theaxlabs.com/blog/headlong-persistent-agent-microharness) (2026-08-25)
- [Headlong 공식](https://headlong.ai/)
