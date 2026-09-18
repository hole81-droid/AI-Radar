---
type: update
date: 2026-09-18
tools: []
importance: medium
uses: [ax]
source: https://tokenstead.ai/guides/zcode-silent-git-history-upload
---

# ZCode(Z.ai GLM 코딩 에이전트), 설정 꺼도 git 전체 히스토리를 몰래 클라우드 업로드

## 무엇이 있었나

2026-09-18, 개발자가 Z.ai(GLM 모델 개발사, 베이징 소재)의 데스크톱 코딩 에이전트
**ZCode**를 리버스엔지니어링한 결과를 공개했다(HN 257점).

- 로그인 상태에서 ZCode는 작업공간의 **`.git` 전체 히스토리, LFS 자산 캐시, reflog,
  전역 앱 설정**을 통째로 패키징해 암호화한 뒤 **Alibaba Cloud(Aliyun OSS)로 업로드**한다.
  현재 작업 트리 스냅샷이 아니라 **수년치 커밋 이력 전체**가 대상이다 — 이미 삭제된
  API 키, 브랜치명으로 드러나는 미출시 제품 계획, `.git/config`의 내부 호스트명까지
  포함될 수 있다.
- **사용자 설정이 작동하지 않는다**: "Optimize Experience"·"Repo Snapshot Indexing" 같은
  토글을 꺼도 실제 수집·업로드 동작은 계속된다 — 앱 시작 시, 그리고 매 프롬프트·작업
  완료 시마다 무조건 트리거된다.
- **사용자가 스스로 복호화할 수 없는 구조**: 암호화에 쓰는 RSA 공개키는 서버가 그때그때
  내려주지만, 개인키는 클라우드 쪽에만 있다 — 수백MB 규모 암호문을 로컬에서 풀 방법이 없다.

## 왜 중요한가

- [[harnesstax-coding-agent-harness-cost-benchmark|같은 주 HarnessTax 연구]]가 "하네스
  선택은 비용을 가른다"고 했다면, 이 사건은 **하네스 선택이 데이터 주권·보안까지
  가를 수 있다**는 것을 보여주는 구체적 반례다 — 벤치마크 성능·가격만 보고 코딩
  에이전트를 고르면 안 되는 이유.
- "설정 토글을 꺼도 실제로는 꺼지지 않는다"는 패턴은 벤더 신뢰도 평가에서 **UI 설정과
  실제 네트워크 트래픽을 분리해서 검증**해야 한다는 원칙을 재확인시킨다.
- 중국계 벤더의 오픈웨이트 모델(GLM)·에이전트 도구가 빠르게 확산하는 가운데, 데이터가
  실제로 어디로 가는지에 대한 경계감을 높이는 사례로 소비될 가능성이 크다.

## 활용/시사점

- **AX**: 코딩 에이전트 도구 도입 심사 체크리스트에 "설정 UI가 아니라 실제 네트워크
  트래픽(패킷 캡처 등)으로 데이터 전송 여부를 검증했는가"를 필수 항목으로 추가할 근거.
  특히 사내 코드베이스에 과거 커밋으로 삭제된 시크릿이 남아있을 가능성을 전제하고
  벤더 심사를 해야 한다는 교훈.
- **강의**: "에이전트 하네스를 고를 때 확인해야 할 것"을 가르칠 때, 성능·가격 외
  세 번째 축(데이터 흐름 투명성)을 추가하는 실제 반례로 활용 가능.

## 출처

- [Tokenstead — ZCode uploads your git history; Z.ai holds the only key](https://tokenstead.ai/guides/zcode-silent-git-history-upload)
- [Hacker News(257점) — ZCode, the GLM coding agent, silently uploads your Git history](https://news.ycombinator.com/item?id=49752422)
- [RuntimeWire — ZCode packaged 42,411 workspace files for cloud upload, researcher finds](https://runtimewire.com/article/zcode-git-history-upload-zai-server-key)
