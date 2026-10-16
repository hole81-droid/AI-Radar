# Claude reveals ECDSA curve origins

- 출처: https://www.anthropic.com/research/ecdsa-curve-origins
- 수집일: 2026-10-17 (HN 게시 2026-10-16, 475점)

## 요약 (WebFetch 정독)

### 미스터리
수십 년간 암호학자들은 NSA가 NIST의 널리 쓰이는 타원곡선 표준(ECDSA에 쓰이는 곡선들)의
시드값을 어떻게 생성했는지 의문을 가졌다. 이 시드들은 설명 없이 공개되어 백도어 의혹을
키웠다. NSA의 Jerry Solinas는 "Bob and Jerry rule" 같은 유머러스한 암구호에서 나왔을
것이라고 언급했지만, 2023년 사망하며 세부사항을 확인해주지 못했다.

### 방법
Anthropic 직원이 내부 Claude 모델에게 시드 생성 과정을 역공학해보라고 요청. 30분 만에
Claude는 공개된 시드가 암호학적 해시가 전혀 아니라는 것을 발견했다.

- 비트 구조의 패턴에서 `lrand48` 유사난수생성기(PRNG) 사용을 포착
- 격자축소(lattice reduction) 알고리즘으로 PRNG의 내부 상태를 복원
- 초기화값을 1997~1998년 사이의 유닉스 타임스탬프로 추적

### 핵심 발견
시드는 `lrand48`을 유닉스 타임스탬프로 초기화해 생성된 것으로, 32비트 시드값과 반복
횟수만 있으면 충분했다. 일부 베이스 포인트는 Arjen Lenstra의 FreeLIP 라이브러리에서
나왔고, 20000 같은 단순 정수로 시드됐다는 것도 확인했다.

### 의의
이 발견은 ECDSA의 보안성에 대한 신뢰를 강화한다. 단순하고 검증 가능한 생성 방법이
확인되면서, 수십 년간 이어진 미스터리가 암시하던 것보다 백도어 가능성이 훨씬 낮아졌다.
$36,864 규모의 버그바운티는 Internet Security Research Group에 기부됐다.
