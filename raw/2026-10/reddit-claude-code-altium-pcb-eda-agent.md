# Reddit r/ClaudeAI — I gave Claude Code ~600 tools to drive Altium Designer

- URL: https://www.reddit.com/r/ClaudeAI/comments/1xhr1ym/i_gave_claude_code_600_tools_to_drive_altium/
- 게시일: 2026-10-28
- 게시자: u/Salitronic
- 수집: curl + .rss (reddit RSS)

## 핵심 내용

전자설계 엔지니어가 몇 달간 개발한 오픈소스 MCP 서버 "eda-agent"로 Claude Code가
Altium Designer(PCB CAD 툴)를 직접 조작하게 만든 시연. 지름 54mm LED 보드 사양을
주자 부품 라이브러리 구축(심볼·풋프린트·3D모델·부품번호)→스키매틱→LED 61개
원형배치→USB 90Ω 차동쌍 배선→그라운드 플레인→DRC 통과→제조파일(Gerber·드릴·
BOM·픽앤플레이스·STEP) 출력까지 전 과정 수행. 리뷰 목록을 주자 USB 재배선·3D모델
보강·타이틀블록 완성까지 2차 자율 수정도 처리.

**배운 점(저자 본인 정리)**:
- 데이터시트 우선 — 부품 값 추측 금지, 세션 시작+10회 호출마다 재주지시
- 배치 도구 — 와이어 60개를 1콜로 처리, 10~100배 빠르고 컨텍스트도 깨끗
- 검증 가능한 피드백 — 핀 매핑 대조 후에만 시트 반영
- API 없는 메뉴는 화면을 읽어 직접 클릭

오픈소스 Apache-2.0, GitHub: https://github.com/salitronic/eda-agent. KiCad·
EasyEDA Pro 백엔드도 지원(Altium이 가장 고도화).

**댓글**: 배치 와이어 부분실패 시 재시도 로직(undo/상태추적) 질문 제기, 저자가
개선 여지로 인정.

## 수집 메모

- 모델명·비용·권한 전부 게시물에 비공개 — use-case 페이지에 "미확인"으로 기록.
- maturity: prototype, evidence: anecdotal (저자 1인 시연, 정량 비교 없음).
