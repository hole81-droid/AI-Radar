---
type: use-case
date: 2026-07-24
tools: [claude-code]
mechanism: [skills]
domain: content-creation
task: 손글씨 사진 한 장으로 설치 가능한 개인 맞춤 TTF 폰트를 자동 제작
outcome: 정성적 — 스프링 제본·페이지 그림자가 있는 지저분한 사진도 성공적으로 폰트화, Font Book에 설치 가능한 TTF 완성. 전문 품질 커닝·두께 일관성은 별도 과제로 지적됨
model: 미확인 (Claude Code 세션 기본 모델, 스킬 자체는 모델 비종속)
cost: 무료(로컬 실행, MIT 라이선스, 별도 API 비용 없음)
permissions: 미확인
maturity: prototype
evidence: anecdotal
importance: medium
uses: [course]
source: https://old.reddit.com/r/ClaudeAI/comments/1v55he0/i_made_a_claude_code_skill_that_turns_a_photo_of/
---

# draw-your-font — 손글씨 사진 한 장을 Claude Code Skill로 설치 가능한 폰트로 바꾸기

> **공식**: Claude Code Skill(draw-your-font)로 "애매한 인식은 AI, 정밀한 빌드는 결정론적 코드"라는
> 하이브리드 스킬 구조를 활용해 손글씨 사진→개인 맞춤 TTF 폰트 제작을 수행 → 로컬·무료로
> Font Book에 설치 가능한 폰트 완성(정성적, 정량 수치 미확인)

## 무엇을 자동화했나

Reddit 사용자(u/Medium-Watch-2782)가 노트에 알파벳을 손으로 쓴 사진 한 장을 Claude Code에
넣고 "폰트로 만들어줘"라고 말하는 것만으로 설치 가능한 TTF 폰트가 나오는 Claude Code Skill을
만들어 오픈소스로 공개했다(2026-07-24, r/ClaudeAI에서 80+ 댓글로 화제).

- 설치: `npx skills add danilo-znamerovszkij/draw-your-font`
- 사용: 사진을 드래그해 넣고 "make my font"라고 말하면 끝
- 데모 사이트에서 결과 폰트를 바로 확인 가능: https://danilo-znamerovszkij.github.io/draw-your-font/

## 어떻게 구성했나 (아키텍처)

이 스킬의 핵심은 "AI가 잘하는 일"과 "코드가 잘하는 일"을 명확히 나눈 하이브리드 구조다.

- **Claude가 담당하는 부분(애매한 판단)**: 지저분한 사진에서 개별 글자를 찾아내기, 대문자 S와
  소문자 s를 크기 맥락으로 구분하기, 얼룩·그림자를 "노이즈"로 표시해 제외하기, 렌더링된 폰트
  미리보기를 다시 검토해 문제가 있는 글자에 수정 제안하기("g가 이상하게 그려졌다, 다시 쓰거나
  부드럽게 처리해달라")
- **결정론적 npm CLI가 담당하는 부분(정밀한 실행)**: potrace 기반 벡터화 + 실제 폰트 파일 조립.
  같은 입력이면 항상 같은 출력이 나오는 정밀 작업은 코드에 맡기고 Claude는 판단에만 관여
- 전 과정 로컬 실행, 결과 폰트는 100% 사용자 소유(MIT 라이선스)

## 벤치마크 데이터

| 항목 | 값 |
|---|---|
| 모델 | 미확인 (Claude Code 세션 기본 모델 사용, 스킬 자체는 특정 모델에 종속되지 않음) |
| 비용 | 무료 — 로컬 npm CLI 실행, 별도 유료 API 호출 없음 |
| 권한 | 미확인 |
| 성숙도 | prototype — 개인 오픈소스 프로젝트, 커뮤니티 공개 직후 |

## 성과와 수치

- **일화(anecdotal)**: 제작자의 데모 사진은 스프링 제본·페이지 그림자가 있는 상태였는데도
  폰트화에 성공했다고 보고. "사진 팁: 진한 펜, 글자가 서로 안 붙게"만 지키면 대체로 잘 된다고 안내.
- **커뮤니티 반응**: 80+ 댓글, "고인이 된 가족의 손글씨를 디지털 유산으로 남길 수 있겠다"는
  감성적 반응이 최상위. 동시에 그래픽 디자이너들은 "커닝·글자 두께 일관성 등 전문적으로 쓸만한
  폰트 품질까지는 아니다, 개인 프로젝트용으로는 훌륭하다"는 현실적 지적도 병존.
- 정량적 성공률·처리 시간 등은 원문에 공개되지 않아 미확인.

## 재현 가이드

- **난이도**: 하
- **준비물**: Claude Code, Node.js/npm, 손글씨가 담긴 사진 한 장(진한 펜, 글자 비접촉 권장)
- **핵심 단계**:
  1. `npx skills add danilo-znamerovszkij/draw-your-font`로 스킬 설치
  2. Claude Code에 손글씨 사진을 드래그해 넣고 "make my font" 요청
  3. Claude가 글자 인식·정리 결과를 제시하면 렌더링 미리보기 확인
  4. 문제 있는 글자가 있으면 "다시 쓰거나 부드럽게" 등으로 피드백 → 재생성
  5. 완성된 TTF를 시스템 폰트 폴더(예: macOS Font Book)에 설치

## 강의·AX 활용 포인트

- **강의**: Claude Skill 설계에서 "AI에게 맡길 일 vs 결정론적 코드에게 맡길 일"을 어떻게 나누는지
  보여주는 좋은 교재. 벡터화·폰트 조립처럼 재현성이 중요한 작업은 코드로, 이미지 속 지저분한
  패턴 인식처럼 판단이 필요한 작업은 AI로 넘기는 설계 원칙을 비개발자 대상 강의에서도 직관적으로
  설명할 수 있는 사례다.
- **AX**: 직접적인 기업 도입 사례는 아니지만, "반복적이고 결정론적인 후처리 파이프라인 + AI의
  판단 개입"이라는 구조 자체는 문서 스캔·양식 인식 등 사내 반복 업무 자동화 설계에 참고할 수 있다.

## 출처

- [Reddit r/ClaudeAI — I made a Claude Code skill that turns a photo of your handwriting into an installable font](https://old.reddit.com/r/ClaudeAI/comments/1v55he0/i_made_a_claude_code_skill_that_turns_a_photo_of/)
- [GitHub — danilo-znamerovszkij/draw-your-font](https://github.com/danilo-znamerovszkij/draw-your-font)
- [데모 사이트](https://danilo-znamerovszkij.github.io/draw-your-font/)
