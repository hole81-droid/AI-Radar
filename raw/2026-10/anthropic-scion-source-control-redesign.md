# Anthropic, "Redesigning source control at Anthropic" (Scion)

- 원문: https://www.anthropic.com/engineering/redesigning-source-control
- 공식 X 공지: https://x.com/AnthropicAI/status/2110047081414987957
- HN: https://news.ycombinator.com/item?id=... (408점, 2026-10-13)
- 교차보도: https://fourweekmba.com/ai-anthropic-builds-scion-to-replace-git-at-30000-merges-a-day/

## 핵심 내용 (WebFetch 정독 요약)

### 문제
- Claude를 이용한 자율 코드 생성으로 모노레포 일일 머지 건수가 2026년 5월
  약 2,500건 → 9월 30,000건 이상으로 폭증.
- git은 오프라인 작업을 전제로 설계된 분산 구조라 "항시 온라인" 에이전트
  스케일에서 심각한 병목이 됨. 압축된 워킹 카피가 25GB를 넘고, 그대로
  fetch를 반복하면 일일 git 트래픽이 600PB를 넘는 수준.

### 해법: Scion (자체 버전 관리 시스템)
- git을 무한정 확장하는 대신 "항시 온라인" 에이전트에 최적화한 사내 VCS를
  직접 구축. 7인 팀이 코드량이 10배로 늘어나는 와중에 5개월 만에 전체
  마이그레이션 완료.
- **서버 중심 아키텍처**: git의 분산 모델과 달리 클라이언트가 항상 온라인
  상태임을 전제, 병합·리베이스·blame 같은 복잡한 연산을 서버로 이전.
- **체인지셋 기반 저장**: git의 트리 포인터 대신 "첫 부모 기준으로 변경된
  파일 목록"을 콘텐츠 주소 블롭 참조로 저장 — 락 없는 증분 커밋 가능.
- **파생 데이터**: blame 인덱스·경로 히스토리·스킵 리스트 등을 체인지셋과
  별도로 계산해, 클라이언트 변경 없이 최적화 가능.
- **3단 캐싱**: 데몬 → 지역 캐시 → 권위 서버의 3계층 구조로 최소한의
  조정만으로 99% 이상의 캐시 적중률 유지.

### 결과 (실측)
- 인프라 footprint: 기존 git 미러링 대비 **200배 축소**.
- 체크아웃 속도: 분 단위 → **초 단위**(2자릿수 배 향상).
- CI 용량: **CPU 용량 25% 확보**.
- 타임라인 압박 속에서도 광범위 테스트·퍼징·레이트리밋까지 구현.

## 위키 반영 판단

같은 "Claude 에이전트의 코드 저작 폭증 → 내부 인프라 재설계" 계열 이야기로,
기존 [[anthropic-agentic-coding-ci-test-impact-analysis]](2026-09-14, CI
test-impact 재설계)와 짝을 이루는 후속/병행 사례. 소스 컨트롤이라는 다른
계층을 다루므로 별도 use-case 페이지로 신규 생성.
