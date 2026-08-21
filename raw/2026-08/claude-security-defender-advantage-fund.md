# Anthropic, Claude Mythos 5 사이버보안 방어역량을 기업·오픈소스·정부 파트너로 확장

- 원문: https://claude.com/blog/bringing-claude-mythos-5-to-more-defenders
- 게시일: 2026-08-21
- 수집일: 2026-08-22 (WebFetch로 원문 대조)

## 요지

Anthropic이 Claude Mythos 5의 방어적 사이버보안 역량 접근권을 넓히는 여러 이니셔티브를
동시 발표.

## 핵심 내용

1. **Claude Security 강화**: 엔터프라이즈 고객이 Claude Mythos 5로 코드베이스 취약점 스캔
   실행 가능. 결과에 CWE 분류·신뢰도/심각도 등급·수정안이 포함되며, 모든 패치는 사람 검토를
   거쳐야 적용됨.
2. **파트너 통합**: Mythos 5를 서드파티 사이버보안 툴에 통합.
3. **Defender Advantage Fund**: 오픈소스 취약점 패치 작업을 하는 조직에 총 $35M 규모 크레딧
   지원 — 실제 운영 중인 취약점 패치와 보안 프로세스 자동화에 초점.
4. **Cyber Verification Program 확대**: 검증된 방어자(defender)·정부 파트너로 접근권 확대.

## 설계 철학

"가장 위험한 행동은 사용자가 모델에 직접 접근할 때 발생한다"는 논리로, 악의적 행위자가
모델을 직접 조종해 악용하는 것을 막기 위해 방어자에게는 스캔 결과·패치 같은 "특정 산출물"만
주는 방식으로 접근을 제한. 사람 검토를 필수 게이트로 둔 것이 핵심.

## 맥락

- [[2026-07-02-claude-cyber-jailbreak-framework]](CJS 탈옥 심각도 프레임워크, 7/2)·
  [[2026-07-28-claude-mythos-post-quantum-crypto-break]](HAWK 암호 결함 발견, 7/28)에
  이어 Anthropic이 "공격보다 방어에 AI를 먼저 풀자"는 메시지를 반복 강조하는 흐름의 연장.
- HN에도 게재(33점, claude.com/blog 원문 링크).
