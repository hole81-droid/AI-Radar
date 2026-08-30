# GLM-5.3 오픈웨이트 실제 공개 + GLM-5.3-Flash 별도 변형 출시

- 원문 다수 (WebSearch 종합): https://technode.com/2026/08/27/zhipu-identifies-ox-alpha-as-glm-5-3-flash-and-releases-model-weights/ ,
  https://apidog.com/blog/self-host-glm-5-3-open-weights/ , https://www.progressiverobot.com/2026/08/28/glm-5-3-flash-open-weight-320b-model/
- 커뮤니티: HN "GLM-5.3 is now open-weight" 797점 (2026-08-28) — https://news.ycombinator.com (검색 스니펫 기준, 개별 링크 미확인)
- 수집일: 2026-08-31 (스캔)

## 요약

기존 위키 08-28 후속 기록에서는 "예고했던 2주 후 가중치 공개 시한을 넘겨 지연 중"으로
남아 있었다. 이후 확인 결과:

- **GLM-5.3 본 모델 가중치**: 소폭 지연은 있었으나 Hugging Face `zai-org/GLM-5.3`에
  실제로 공개 완료. MoE 구조, 총 744B 파라미터, 활성 파라미터 약 40B, 컨텍스트 200K.
- **GLM-5.3-Flash(별도 변형, 신규)**: 2026-08-26 공개 확인. 320B 총 파라미터·18B 활성,
  MIT 라이선스. GLM-5 시리즈 최초로 텍스트·이미지·영상·시각 문서·인터리브 멀티모달
  입력을 지원하는 네이티브 멀티모달 모델. 코드네임 "Ox Alpha"였다가 Zhipu가 정체를
  공식 확인하며 공개.
- HN에서 "GLM-5.3 is now open-weight" 게시물이 797점을 받으며 큰 화제.

## 비고
- 여러 정보원이 SEO/AI 요약형 블로그(apidog, explainx.ai 등)라 세부 수치는 교차검증
  필요하지만, "가중치가 실제로 공개됐다"는 핵심 사실은 TechNode(1차 보도급 매체)와
  HN 고득점 게시물 양쪽에서 일치.
