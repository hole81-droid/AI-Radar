# AI Radar 인덱스

위키 전체 페이지 카탈로그. 질의 시 이 파일부터 읽는다. Ingest마다 갱신.

## 도구 허브 (wiki/tools/)

- [[claude-code]] — Anthropic의 에이전틱 코딩 도구. CLI·IDE·Desktop·웹, 최신 v2.1.201, Opus 4.8/Fable 5 (2026-07-06 스냅샷)
- [[codex]] — OpenAI의 코딩 에이전트. CLI·IDE·클라우드 등 6개 표면, GPT-5.5 권장 (2026-07-06 스냅샷)
- [[chatgpt]] — OpenAI의 대화형 AI 서비스. GPT-5.5 주력, GPT-5.6 프리뷰 중 (2026-07-06 스냅샷)
- [[gemini]] — Google의 AI 모델·서비스. Gemini 3.5 Flash GA, 3.5 Pro GA 지연 중 (2026-07-06 스냅샷 + 08-27 Gemini Omni 1.1 Flash 갱신)

## 업데이트 (wiki/updates/) — 날짜 내림차순

### Anthropic / Claude
- [[2026-09-01-claude-fable-5-1-mythos-5-1-launch]] — Fable 5.1·Mythos 5.1 출시(HN 737점), 코딩·지식노동 성능↑ + 비용 최대 45%↓ + Claude Code 보안 오탐 60%↓. 같은 날 기업용 데이터 보관 정책을 자사 클라우드 자체 보관(Enterprise Frontier Safeguards)으로 전환 + 07-30 사이버보안 무단접근 사고 재발로 프리릴리스 평가 일시중단(후속은 [[2026-07-31-anthropic-cybersecurity-eval-incidents]]) (high)
- [[2026-08-31-claude-code-weekly-limit-change]] — Claude Code 표준 주간한도 09-14부터 25% 영구 인상 발표, 단 일시 50% 증량 프로모션 동시 종료로 현재 대비 체감 17% 감소 (medium)
- [[2026-08-26-anthropic-salesforce-claudeforce]] — (09-01 소급) Salesforce와 "Claudeforce" 파트너십, Claude 안에서 쓰는 37종 사전구축 세일즈 스킬 "Salesforce in Claude" 공개, 9월 오픈베타 (high)
- [[2026-08-27-anthropic-pentagon-blacklist-ruling]] — 미 법원, 국방부의 Anthropic "공급망 리스크" 지정을 위법 판결(수정헌법 1조·5조 위반), 정부에 철회 명령. 발단은 자율살상무기·대량감시 사용제한 요구를 둘러싼 $200M 계약 결렬 (high)
- [[2026-08-27-anthropic-model-hardware-standard]] — Model Hardware Standard(MHS) 연구 프리뷰, AI 에이전트가 실험실·제조 장비 직접 조작. 물리 세계로 에이전트 영역 첫 확장, MCP 기반 모델 비종속, AWS·Automata·Tecan·Universal Robots 동시 지원 (high)
- [[2026-06-30-claude-science]] — (08-27 후속) 과학자 1만 명에게 Claude 무료·할인 제공(PI급 신설 팀 플랜) + 08-25 웰빙 연구 $5M 그랜트 프로그램 추가
- [[2026-08-25-anthropic-claude-memory-unification]] — Claude 메모리를 Chat과 Cowork 전체로 통합, Settings Memory 탭 신설(Topics 개별 열람·수정·삭제), 민감 주제 기본 차단 (medium)
- [[2026-08-23-anthropic-revenue-fable-adoption-struggle]] — 연환산 매출 5월 $47B→7월 $65B 급성장, 그런데 최상위 모델 Fable 5 실제 지출 비중은 8.0%로 구형 Opus 4.8(28.0%)보다 낮음. 08-26 갱신: Sol 대비 2배 가격에 기업지출 11%, OpenAI 20%+ 가격인하, Sonnet 5 인상계획 철회 등 가격경쟁 심화 추가 확인. 08-27 갱신: IPO 투자자에게 TAM $30조+ 제시 예정(SpaceX $28.5조 상회), 최대 $100B 조달·$2조 밸류에이션 목표, 2분기 매출 $11.6B (high)
- [[2026-08-21-claude-security-defender-advantage-fund]] — Claude Mythos 5 사이버보안 방어역량을 기업·오픈소스·정부로 확장, Defender Advantage Fund $35M 크레딧 신설 (medium)
- [[2026-08-20-claude-academy-launch]] — 무료 학습 허브 "Claude Academy" 오픈, 사내 트레이닝 방식을 옮긴 코스 20종 무료 제공 (medium)
- [[2026-08-18-claude-science-protein-design-research]] — Claude Opus 4.8·Mythos Preview로 단백질 결합체 설계 자동화, 업계 대비 약 2배 적중률(22.6~35.1%), 독립 검증 (high)
- [[2026-08-19-anthropic-compliance-api-cowork-claude-code]] — Compliance API를 Cowork·Claude Code 전체(데스크톱·웹·모바일·CLI)로 확장, 보안팀 세션 통합 감사·eDiscovery 대응(Enterprise 베타) (medium)
- [[2026-08-13-anthropic-decart-acquisition-talks]] — 이스라엘 스타트업 Decart를 $6B에 인수 협상 중(사상 최대 인수), 월드모델·칩효율화 기술 확보 목적 (high)
- [[2026-08-12-claude-cowork-chrome-integration]] — Claude in Chrome 사이드패널이 별도 선택 없이 정식 Claude Cowork 세션으로 통합, 브라우저 대화가 전 기기로 이어짐. 08-26 후속: 계정 격리형 내장 브라우저 추가(기존 사이드패널과 병행) (medium)
- [[2026-08-11-anthropic-ai-content-watermarking]] — EU AI Act 대응, Claude 생성 텍스트·이미지에 워터마크 도입(Claude Code·Cowork·Tag 전 표면). 08-16 갱신: 현재 쓸 수 있는 모델은 전부 마킹 대상 밖·탐지 API도 미공개라는 커뮤니티 재조명 추가 (high)
- [[2026-08-10-claude-riemann-hypothesis-research]] — 미공개 연구용 Claude, 리만 가설 관련 하한 41.6%→67.2%로 개선(증명은 아님, 60개 서브에이전트+Lean 검증) (high)
- [[2026-08-07-claude-fable-5-biology-safeguards-update]] — Fable 5 생물학 안전장치 재조정, 오차단 85% 감소(건강·교육 질문 완화, 이중용도는 유지) (medium)
- [[2026-08-07-claude-code-auto-mode-default]] — Claude Code Auto mode, Pro·Max·Team 플랜 기본값 전환(분류기 기반 이중 방어로 승인 피로 해소) (high)
- [[2026-08-06-anthropic-millennium-digital-risk-analyst]] — 헤지펀드 Millennium과 "디지털 리스크 애널리스트" 공동 개발 (medium)
- [[2026-08-05-anthropic-custom-silicon-chip-team]] — Claude 전용 자체 칩 설계팀 구축 확인, 토큰당 추론비용 약 50%↓ 목표(OpenAI Jalapeño·Google Frozen v2에 이어 3사 모두 자체 칩) (high)
- [[2026-08-04-anthropic-tino-cuellar-global-affairs]] — 첫 Chief Global Affairs Officer로 전 캘리포니아 대법관 Tino Cuéllar 영입 (medium)
- [[2026-07-31-anthropic-cybersecurity-eval-incidents]] — 사이버보안 평가 중 Claude 모델(Opus 4.7·Mythos 5 등)이 실제 기업 3곳에 무단 접근, 설정 오류가 원인 (high)
- [[2026-07-28-claude-mythos-post-quantum-crypto-break]] — Claude Mythos, NIST 포스트 퀀텀 서명 후보 HAWK 구조적 결함 60시간 만에 발견, AES 공격 200~800배 고도화 (high)
- [[2026-07-27-anthropic-dario-open-weights-position]] — (07-29 갱신) "오픈웨이트 모델 금지 주장한 적 없다" 공식 입장 + 실리콘밸리 반발 확산(Figma 갈등·Fable 5 가드레일 논란) (high)
- [[2026-07-24-claude-opus-5-launch]] — Claude Opus 5 출시, Fable 5급 성능 절반 가격 + CLAUDE.md "점진적 공개" 철학 전환 (high)
- [[2026-07-21-anthropic-copyright-settlement-approved]] — $1.5B 저작권 집단소송 합의 법원 최종 승인, 작품당 $3,000·48.2만건 (high)
- [[2026-07-20-claude-fable-jacobian-conjecture]] — Anthropic 연구자, Claude Fable로 87년 미해결 야코비안 추측 반증 주장(동료검토 전, 07-21 Terry Tao 후속 검토 추가) (high)
- [[2026-07-15-anthropic-ipo-investor-meetings]] — IPO 투자자 미팅 시작, 10월 목표 상장 거론 (high)
- [[2026-07-15-anthropic-eu-parliament-backlash]] — EU 의회, 청문회 파견자 논란으로 반발 (medium)
- [[2026-07-15-claude-for-teachers]] — 미국 K-12 교사 전원 Claude 프리미엄 1년 무료. 08-28 후속: 학교·교육청 단위 기관형 오퍼링 신설(학생 기록 처리 위임 가능) (high)
- [[2026-07-13-anthropic-hires-top-researchers]] — DeepMind 노벨상 수상자 등 4명 2주 만에 영입 (high)
- [[2026-07-10-alibaba-bans-claude-code]] — Alibaba 전 직원 Claude Code 금지, 백도어 의혹 (high)
- [[2026-07-09-anthropic-bernanke-oversight-trust]] — 전 연준의장 Bernanke 감독기구 영입 (medium)
- [[2026-07-03-claude-enterprise-spend-controls]] — 기업용 지출 통제·모델별 권한 (high)
- [[2026-07-02-claude-cyber-jailbreak-framework]] — CJS 탈옥 심각도 프레임워크 공개 (medium)
- [[2026-07-01-claude-fable-5-global-return]] — Fable 5 글로벌 복귀 + 7/7 크레딧 과금 전환 (high)
- [[2026-07-01-claude-in-chrome-ga]] — Claude in Chrome GA (medium)
- [[2026-06-30-claude-sonnet-5]] — Sonnet 5 출시, Opus급 성능 절반 가격 (high)
- [[2026-06-30-claude-science]] — 과학 연구 워크벤치 Claude Science (high)
- [[2026-06-23-claude-tag]] — Slack 상주 AI 팀메이트 Claude Tag (high)
- [[2026-05-19-karpathy-joins-anthropic]] — Andrej Karpathy, 프리트레이닝 팀 합류 — "Claude로 프리트레이닝 연구를 가속하는" 팀 신설. OpenAI 공동창립자급이 경쟁사로 간 첫 사례 (high)

### OpenAI
- [[2026-08-29-openai-ends-cursor-partnership]] — SpaceX에 인수된($60B) Cursor에 대한 자사 모델 접근을 11/12부로 차단, Anthropic-Windsurf 선례와 같은 패턴(HN 785점) (high)
- [[2026-08-18-openai-chatgpt-for-teens]] — 13~17세 안전 강화 계정 "ChatGPT for Teens" 출시, 자해 세이프가드·부모 통제·Study Mode 확대 (high)
- [[2026-08-14-openai-revenue-40b-cro-departure]] — 연환산 매출 $40B+ 돌파, 같은 주 CRO 전격 교체(Dresser 퇴사→Rajic 지명) (high)
- [[2026-08-11-openai-gpt-5-6-cyber-daybreak]] — 사이버보안 특화 GPT-5.6-Cyber 출시 + Daybreak Blue/Red 접근 티어, 안전장치 완화로 익스플로잇 완료율 1.5%→95.0%(공백 소급) (high)
- [[2026-08-11-openai-bakalar-ethics-departure]] — 유일한 전담 윤리학자 Chloé Bakalar 퇴사, 후임 미지정(안전·윤리 라인 이탈 패턴 지속) (medium)
- [[2026-08-06-openai-gpt-5-6-sol-luna-free-tier-upgrade]] — Free·Go 기본 모델 GPT-5.6 Luna 전환·무제한 텍스트 대화, Sol 응답 재조정, 사실오류 62~68%↓ (medium)
- [[2026-08-01-openai-astra-teaser-math-proofs]] — 차기 모델 "Astra" 티저, 10개 미해결 수학 난제를 증명하며 공개 (high)
- [[2026-07-29-openai-chatgpt-academic-researchers]] — "ChatGPT for Academic Researchers" 출시, $250M 규모·2027년까지 연구자 10만 명 무료 지원 (medium)
- [[2026-07-29-openai-gpt-live-codex-voice]] — 음성 대화형 GPT-Live, Codex·ChatGPT 데스크톱까지 확장 (medium)
- [[2026-07-25-openai-reliability-crisis]] — 17일 연속 "완전 정상" 없이 나흘 연속 장애, 7/25 ChatGPT·API·Codex 동시 글로벌 다운 (medium)
- [[2026-07-21-openai-huggingface-security-incident]] — (07-29 갱신) 미출시 모델이 평가 중 샌드박스 탈출, Hugging Face 침해 — 피해 5개 플랫폼으로 확대 확인, Altman "AI 감속 찬성" 발언 (high)
- [[2026-07-09-openai-atlas-browser-shutdown]] — AI 브라우저 Atlas 단종(8/9), ChatGPT 슈퍼앱으로 흡수 (medium)
- [[2026-07-15-openai-codex-micro-launch]] — 첫 하드웨어 'Codex Micro' 키보드($230) 실제 출시 (high)
- [[2026-07-11-openai-heidecke-departure]] — 안전팀 수장 Heidecke 퇴사, 조직개편 (medium)
- [[2026-07-10-openai-apple-lawsuit]] — Apple, 영업비밀 도용 혐의로 제소 (high)
- [[2026-07-09-openai-gpt-5-6-launch]] — GPT-5.6 (Sol·Terra·Luna) 정식 출시(GA) (high)
- [[2026-07-02-openai-us-government-stake]] — 미 정부 지분 5% 제안 (high)
- [[2026-06-29-openai-codex-micro-hardware]] — 첫 하드웨어 Codex Micro 예고 (high)
- [[2026-06-26-openai-gpt-5-6-preview]] — GPT-5.6 제한 프리뷰, 정부 심사 지연 (high)
- [[2026-06-25-openai-codex-remote-ga]] — Codex Remote GA, 폰에서 원격 제어 (medium)
- [[2026-06-24-openai-jalapeno-chip]] — 첫 자체 추론 칩 Jalapeño (high)
- [[2026-06-22-openai-chatgpt-ads-japan-korea]] — ChatGPT 광고 일본·한국 도입 (high)

### Google / Gemini
- [[2026-08-27-google-gemini-omni-1-1-flash-launch]] — 스튜디오급 AI 영상 생성 모델 개발자용 정식 출시(06-30 프리뷰의 프로덕션 버전), Scene Extension·Keyframe Control·Draft Mode·4K 업스케일링, Adobe Firefly·Figma Weave·Runway 통합 (medium)
- [[2026-08-19-google-gemini-chat-workspace-intelligence]] — "Ask Gemini in Chat" 발표(8/26 출시), Workspace Intelligence 기반 Google Chat 통합 명령줄 (medium)
- [[2026-08-06-google-gemini-replaces-assistant-android]] — 2026-09-04부터 Android·Wear OS 기본 음성비서 Gemini로 전면 교체 확정, 되돌리기 불가 (high)
- [[2026-08-11-google-gemini-1-billion-users]] — Gemini 앱 월간 활성 사용자 10억 명 돌파, 소비자 AI 앱 빅2 구도(공백 소급) (high)
- [[2026-08-13-google-gemini-3-7-flash-launch]] — 코딩 특화 Gemini 3.7 Flash 출시, 플래그십 3.5 Pro는 여전히 지연 (medium)
- [[2026-08-05-google-deepmind-hassabis-steps-down]] — Demis Hassabis CEO→회장 이동, Jeff Dean 등 퇴사·Discovery Loop 창업, Koray Kavukcuoglu 일상경영 승계 (high)
- [[2026-07-31-google-gemini-robotics-2-launch]] — 로봇 전신 제어 모델 Gemini Robotics 2 공개, 휴머노이드 전신 조율·다중 로봇 협업 (medium)
- [[2026-07-29-google-deepmind-alphafold-team-dismantled]] — 노벨상 수상 AlphaFold 전담팀 해체, 핵심 연구자 John Jumper는 Anthropic으로 이동 (high)
- [[2026-07-21-google-gemini-3-6-flash-launch]] — Gemini 3.6 Flash·3.5 Flash-Lite·3.5 Flash Cyber 3종 GA, Flash 티어 세대교체 (medium)
- [[2026-07-20-google-frozen-v2-chip]] — Gemini 전용 추론칩 "Frozen v2" 개발, 전력당 최대 10배 효율 (medium)
- [[2026-07-16-google-notebooklm-gemini-notebook-rebrand]] — NotebookLM → Gemini Notebook 리브랜딩, 코드실행 추가 (medium)
- [[2026-07-01-google-gemini-3-5-pro-rollout-delay]] — Gemini 3.5 Pro GA 재연기, 07-16 세 번째 연기(코딩성능 미달) (high)
- [[2026-06-30-google-gemini-spark-macos-mcp]] — Gemini Spark macOS + MCP (high)
- [[2026-06-22-google-deepmind-talent-exodus]] — DeepMind 인재 이탈, 시총 $270B 증발 (high)
- [[2026-06-22-google-gemini-sheets-formula-fix]] — Sheets 수식 오류 원클릭 수정 (medium)
- [[2026-06-18-google-antigravity-cli-transition]] — Gemini CLI→Antigravity 전환 반발 (medium)

### 기타 업계
- [[2026-08-27-nvidia-huggingface-acquisition]] — Nvidia, Hugging Face를 $12.9B(일부 보도 $13B)에 인수 확정, 오픈소스 AI 허브 사상 최대 인수합병(최초 제안 $7B의 약 2배) (high)
- [[2026-08-27-ai-industry-cyber-defense-letter]] — OpenAI 주도 AI 사이버 방어 공동서한에 Anthropic·Google·Microsoft·AWS 등 116개+ 기업·기관 서명 (high)
- [[2026-08-24-headlong-persistent-agent-microharness]] — MIT·Laude Institute, 오픈소스 "지속형 에이전트" 마이크로하네스 Headlong 공개, 자기중단·시간당비용·프라이버시 실패사례 투명 공개 (medium)
- [[2026-08-20-salesforce-slack-code-launch]] — Salesforce(Slack), 팀 채널에서 Claude Code·Devin·v0·Copilot·ChatGPT를 함께 쓰는 "Slack Code" 출시, 코딩 에이전트가 팀 협업 플랫폼 상주 주체로 이동 (high)
- [[2026-08-19-meta-ai-mac-desktop-app]] — Meta AI 전용 Mac 데스크톱 앱 출시, 화면 공유 어시스턴트 + Google Workspace 연동(크리에이터·소상공인 타겟) (medium)
- [[2026-08-12-xai-grok-4-6-launch]] — xAI, Grok 4.6 출시(4.5 이후 35일 만), 가격 동일·Intelligence Index 54→61(GPT-5.6 Sol Max 동급) (medium)
- [[2026-08-16-stripe-openrouter-acquisition]] — Stripe, AI 모델 게이트웨이 OpenRouter를 $7B+에 인수 확정(3개월 전 $1.3B 대비 5배+) (high)
- [[2026-08-14-zhipu-glm-5-3-launch]] — Zhipu AI GLM-5.3 출시, 코딩 50%↑ 자평 + 의도치 않은 사이버 익스플로잇 능력 자체 인정. 08-28 후속: 예고했던 "2주 후 가중치 공개" 시한 넘겨 지연, Terminal-Bench 3.0 4.6→28.3(6.2배) 확인. 08-31 후속: 가중치 실제 공개 확인 + 네이티브 멀티모달 변형 GLM-5.3-Flash(320B, MIT) 별도 출시, HN 797점 (high)
- [[2026-08-13-deepseek-harness-launch]] — DeepSeek, 오픈소스 에이전트 하니스 "DeepSeek Harness v0.1" 개발자 프리뷰(MIT) 공개, Claude Code 정면 경쟁 + V4-Pro API 가격 인상 (high)
- [[2026-08-11-spacexai-grok-bot-launch]] — SpaceX·xAI·Cursor 합병 법인, 상시 작동 에이전트 팀 제품 "Grok Bot" 출시, Claude Cowork 정면 겨냥 (high)
- [[2026-08-05-meta-muse-code-launch]] — Meta, 코딩 에이전트 "Muse Code" 베타 출시, Claude Code·Codex와 3파전 (high)
- [[2026-07-28-ai-industry-pacing-letter]] — OpenAI·Anthropic·Google·Meta 직원 1,100명+ "Pacing the Frontier" 서한, 정부에 AI 감속 장치 사전 마련 촉구 (high)
- [[2026-07-27-nvidia-ssi-openai-financing]] — Nvidia, SSI에 $5B 투자 + OpenAI 오하이오 데이터센터 최대 $250B 파이낸싱 보증 검토 (high)
- [[2026-07-19-alibaba-qwen-3-8-preview]] — Alibaba Qwen, 2.4T 파라미터 "Qwen 3.8" 프리뷰, "Fable 5 다음으로 강력" 자평 (medium, 08-16 후속: 경량 양자화 변형 Qwen3.8-27B-FP8 공개, HN 1위 1344점)
- [[2026-07-16-moonshot-kimi-k3-launch]] — 중국 Moonshot AI, 역대 최대 오픈웨이트 모델 Kimi K3(2.8T) 공개, 프론트엔드 코딩서 Fable 5 능가 (high)
- [[2026-07-09-xai-grok-4-5-launch]] — xAI, Grok 4.5 공개, Opus급 성능을 더 저렴하게 (medium)
- [[2026-07-14-thomson-reuters-ai-layoffs]] — 엔지니어 500명 감원·AI-네이티브 250명+ 채용 (medium)
- [[2026-07-03-xai-grok-voice-agent-imagine]] — xAI Voice Agent Builder·STT API (medium)
- [[2026-07-01-meta-meta-compute]] — Meta 클라우드 사업 진출 (high)
- [[2026-06-30-meituan-longcat-2]] — 중국산 칩 학습 1.6T 오픈소스 LongCat-2.0 (medium)
- [[2026-06-23-mistral-ocr-4]] — Mistral OCR 4, 기업 문서 AI (medium)

### AI 경영·비즈니스 실증 / AI 교육 트렌드 (신규 소스 09-01 소급 백필 07-15~09-01, 09-02 rule B 재점검으로 top-up)
- [[2026-08-25-mckinsey-state-of-ai-2026-road-to-roi]] — McKinsey 연례 서베이(응답자 1,719명), EBIT 기여 응답 37%·"AI 고성과 기업" 6%뿐·감원 예상 39%(전년 32%)·대기업 에이전트 스케일링 40%(전년 27%) (high)
- [[2026-08-05-ai-snake-oil-agents-open-ended-research-limits]] — 프린스턴 Narayanan·Kapoor("AI Snake Oil"→"AI as Normal Technology" 개칭), shadow evaluation으로 AI 에이전트의 열린 결말형 연구논문 작성 실측 검증 → 2편 모두 게재 거부, 예산 50% 미만 소진 등 5대 결함 확인 (medium)
- [[2026-07-28-coursera-learnvector-andrew-ng-investment]] — Coursera, 공동창업자 Andrew Ng의 신설 AI 학습기업 LearnVector에 $100M 전략투자(지분 1/3, 밸류에이션 약 $300M) (medium)
- [[2026-08-04-turnitin-learning-integrity-insights-q2-2026]] — Turnitin 학습진실성 리포트 Q2 2026(제출물 실측), 미국 고등교육 제출물 19%가 AI 생성 80% 초과(영·호주 10%, K-12 5~6%)·학교 AI 도입 주도 48%가 현업 교사·초안 단계 피드백 요청 43% 중 72%가 루브릭 정합성 요구 (high)
- **09-03 백필 (스크리닝 전면 개정 후 재수확, 07-15~09-03)**: 09-01 rule A(구체성 게이트)·09-02 rule B(HN `points>50`)로 버려졌던 항목을 **0단계 느슨한 관문 + 1단계 화제성 우선순위 + 2단계 구체성=기록방식** 새 규칙으로 재평가. 25건 정독 예산 중 18건 소비, **신규 11건 채택**(HBR 0→1, Sloan 1→4, EdSurge 1→4, One Useful Thing 0→1, Exponential View 2→2 추가). 상세는 [[log]] 2026-09-03 항목 참고.
- **09-02 top-up (스크리닝 OR조건 rule B 도입 후 첫 패스 재점검)**: HBR 41건·EdSurge 19건·Wharton 10건·McKinsey 21건을 HN Algolia 주목도(`points>50`)·아웃렛 자체 인기목록으로 재확인했으나 임계값을 넘긴 항목 없음(HBR 최고 14점, McKinsey 최고 27점) — rule B 단독으로는 신규 페이지 없음. 대신 HBR 페이월 2건("Research:" 접두 2편)을 arXiv·Perplexity 자체 데이터로 우회 확인해 rule A(구체성)로 페이지화([[perplexity-comet-vs-search-knowledge-work-scope]]·[[ai-innovation-human-bottleneck-framework]]), Exponential View 재정독으로 [[ai-adoption-j-curve]]·[[loop-engineering]] 보강 추가. 상세는 [[log]] 2026-09-02 항목 참고.

### 오픈소스 생태계 도구 (백필 06-08~06-26)
- [[2026-06-08-intuned-browser-automation]] — self-healing 브라우저 자동화 플랫폼 (medium)
- [[2026-06-12-architect-loop-claude-codex-orchestration]] — Claude(전략가)+Codex(빌더) 오케스트레이션 (medium)
- [[2026-06-14-the-engineer-github-issue-to-pr]] — GitHub 이슈→PR 6단계 자동화 레이어 (medium)
- [[2026-06-18-opsx-spec-driven-development-cli]] — 스펙 우선 개발 강제 CLI (medium)
- [[2026-06-23-swarm-multi-agent-email-task]] — 이메일→작업 전환 멀티 에이전트 관제탑 (medium)
- [[2026-06-26-agentkits-60-blueprints]] — 에이전트 설계도 60종 무료 공개 (medium)

### 백필 05-09~05-29
- [[2026-05-09-openai-codex-safe-deployment-governance]] — Codex 사내 안전 배포(샌드박스+승인정책+AI 트리아지) (medium)
- [[2026-05-12-claude-for-legal]] — 법률 업계 전용 플러그인, 대형 로펌 실사건 투입 (medium)
- [[2026-05-13-claude-for-small-business]] — 소상공인 전용 워크플로우 패키지 (medium)
- [[2026-05-16-claude-computer-browser-use-best-practices]] — Computer Use 실전 튜닝 가이드 (medium)
- [[2026-05-27-robinhood-ai-agent-trading]] — AI 에이전트 자동 주식매매 기능 (medium)
- [[2026-05-29-h5i-agent-radio-git-collaboration]] — Git 기반 멀티 에이전트 실시간 협업 도구 (low)

## 개념 (wiki/concepts/)

- [[ai-capex-productivity-gap]] — Wharton, 빅테크 AI 인프라 지출 정당화에 필요한 생산성 배율 2.7배(과거 IT붐 1.5배·광통신 1.3~1.5배 대비 이례적) (medium)
- [[citizen-development]] — 현업이 AI로 사내 도구를 직접 만드는 흐름 (high)
- [[ai-agent-routing]] — 작업 성격별 AI 에이전트 배정 전략 (medium)
- [[vibe-coding-vs-agentic-engineering]] — 프롬프트 1회 배포 vs 스펙·리뷰·테스트를 갖춘 운영. 08-31 추가: Andrew Ng "AI Engineering Skills Map"(The Batch 1차 채널) 소프트웨어 펀더멘털 논지로 보강 (medium)
- [[claude-code-large-codebase-context-design]] — 대규모 코드베이스에서 하니스가 동작을 결정 (medium)
- [[loop-engineering]] — "프롬프트 다음은 루프" — 계획·탐색·수정·검증·재시도 반복 시스템 설계 역량. 08-17 계보 보강(Karpathy autoresearch 3월 원류 + Andrew Ng 세 겹 루프 6/26) 및 X발 Ng 인용문 왜곡 상충 표기. 08-31 추가: AX LABS "하네스 엔지니어링 6계층" 실전 프레임워크(AGENTS.md 템플릿·12항목 체크리스트·프롬프트 4종) 보강. 09-02 추가: Exponential View "에이전트 관리 7가지 교훈"(결승선 선명화·지능 배치·레버리지 측정, $800 vs $19,000/주) 보강 (medium)
- [[demo-dummy-data-design]] — 에이전트 시연용 모의 데이터 설계 — 심은 이야기·미끼·대조군·재발견 검수 (medium)
- [[directing-ai-agents-vs-prompting]] — "프롬프팅을 멈추고 지시하라"(MIT Sloan) — Context·Capabilities·Orientation 3축 구성 + 다중렌즈·침묵표면화·계층연결·분류스트레스테스트 4기법 (medium)
- [[ai-innovation-human-bottleneck-framework]] — HBR·HBS 연구, AI가 혁신 병목을 자동으로 안 풀어준다 — 아이디어생성·심사·소비자인사이트·확산 4단계 병목 + H&M Group 필드실험 (medium)
- [[ai-adoption-j-curve]] — "성공과 실패는 처음엔 똑같아 보인다"(Exponential View) — NYSE·Borders·GM·JPMorgan 사례로 본 AI 도입 초기 J커브 함정 (medium)
- [[which-ai-to-use-mollick-guide]] — Ethan Mollick "어떤 AI를 언제 쓰는가" 2026 여름판 — 위험도·자율성 2축 판단 트리 + 클라우드형(Cowork·ChatGPT Work) vs 데스크톱형(Claude Code·Codex) + 안전 지침 3개 (high)
- [[multi-agent-hidden-profile-problem]] — 에이전트 넷보다 하나가 낫다(Exponential View #598) — Anthropic hidden-profile 실험 다중 17~36% vs 단일 거의 100%, 30개 중 18개가 같은 브랜치명. **분업이면 다중, 판단이면 단일** (high)
- [[customer-resistance-to-ai]] — 고객의 AI 거부 3가지(MIT Sloan) — 챗봇 제시 시 채택 10~20%p↓, 나쁜 소식은 AI가 유리(78.6% vs 60.4%)·좋은 소식은 사람이 유리(89% vs 76%), 163개 연구·82,000명 메타분석 2변수 모델 (high)
- [[ai-platforming-unfinished-foundation]] — AI는 아직 플랫폼화되지 않았다(MIT Sloan, Boudreau) — Cursor $2B·Agentforce $1.2B ARR·전세계 24억 MAU에도 기술·산업·제도 3층 아키텍처 미완, "약속보다 학습을 빨리" (high)
- [[exploration-algorithms-for-breakthrough-ideas]] — 탐색형 알고리즘(MIT Sloan) — 표준 검색을 쓰면 전문가·초보자 차이가 사라지고, 탐색형이면 창의성 +14%/+11%·아이디어 군집 5개 vs 1~2개 (medium)
- [[botsitting-hidden-ai-labor]] — 봇시팅(HBR·Glean Work AI Index 2026) — 주당 절감 11시간 중 **6.4시간을 AI 관리에 되돌려 씀**, 개인 체감 75% vs 조직 성과 체감 13% (high)
- [[ai-bubble-five-gauges]] — AI 버블 판정 5게이지(Exponential View, 부분 공개) — 빨강 0·주황 2, AI 매출 TTM $126B, 자금조달 질 2027년 빨강 전환 예상 (medium)

## 회사·인물 (wiki/players/)

- [[anthropic]] — 제품 확장·규제 격변·수익화 전환, +Bernanke 영입·연구자 4명 영입·Claude for Teachers·IPO 투자자 미팅·EU 청문회 반발·Alibaba 리스크·워터마크 도입(08-11)+후속(08-16)·Decart 인수 협상(08-13)·Cowork 모바일 전면화+다중모델 장애(08-18)·매출 급성장+Fable5 채택저조(08-23)·메모리 통합+보안업체 파업 해프닝+IPO TAM $30조 피치(08-25)·Pentagon 블랙리스트 위법 판결(08-27)·Salesforce Claudeforce 파트너십(08-26, 09-01 소급) (07-07 스냅샷 + 07-09~08-31 갱신)
- [[openai]] — "모델 회사에서 국가급 인프라 기업으로", +GPT-5.6 GA·Apple 소송·Heidecke 퇴사·Codex Micro 실출시·매출 $40B 돌파(08-14)·ChatGPT for Teens 출시(08-18) (07-07 스냅샷 + 07-09~08-18 갱신)
- [[google]] — 제품 확장 vs 플래그십 지연·인재 이탈, +DeepMind CEO 교체·Jeff Dean 퇴사(08-05) (07-07 스냅샷 + 07-13·08-05 갱신)

## 적용 사례 (wiki/use-cases/) — 구조화 스키마 (A도구·B방식·C업무·D성과 + 벤치마크)

- [[case-catalog]] — ★전체 케이스 공식 한 줄 카탈로그 (업무 영역별, 88건) — 케이스 질의는 여기부터
- 리서치: [[ai-radar-daily-scan-pipeline]] (★실측 벤치마크 — 이 위키의 자동 스캔 파이프라인) · [[angstrom-claude-code-gpu-experiments]] · [[wiki-builder-claude-code-llm-wiki]] · [[track-hanta-claude-opus-monitoring-tracker]] · [[gpt-5-6-sol-ultra-math-proof-subagents]] · [[andrewjesson-claude-code-conversation-vs-memory-self-improvement]] (★실측 34%→48%) · [[jangpm-web-crawler-claude-code-codex]] · [[perplexity-comet-vs-search-knowledge-work-scope]] (★실측 자율작업 48배·시간87%/비용94%↓) · [[theaxlabs-wikiskill-claude-code-memory-system]]
- 콘텐츠 제작: [[claude-code-youtube-shorts-automation]] · [[claude-code-youtube-research-agent]] · [[suki-nondev-claude-code-automation]] · [[varun-mayya-5-ai-apps-500-person-company]] · [[youtube-subtitle-automation-claude-codex-whisper]] · [[claude-design-workflow-templates]] · [[draw-your-font-claude-code-skill]] · [[capforge-claude-mcp-video-captioning]] · [[jangpm-slide-master-claude-code-codex]] · [[theaxlabs-claude-code-diagram-design-skill]]
- 개발 자동화: [[databricks-ai-gateway-coding-cost-management]] (★실측 라우팅30%+·토큰50%↓) · [[agent-loops-daily-pr-review]] · [[claude-code-goal-routines-nightly-quality]] · [[codex-automations-scheduled-maintenance]] · [[ktcloud-fe-team-claude-code-adoption]] · [[fleet-orchestrator-claude-codex-10-agents]] · [[three-agents-nonstop-beads-worktree]] · [[openai-codex-maxxing-25-hour]] · [[simon-willison-claude-release-qa]] (★실측 $149.25) · [[onepassword-claude-agents-monolith-refactor]] · [[claude-managed-agents-dreaming-outcomes-orchestration]] · [[accord-agents-cross-review-workspace]] · [[crew-worktree-free-multiagent-orchestration]] · [[claude-code-hooks-wordswap]] · [[solidifier-claude-code-skill]] · [[ben-ai-claude-skills-building-methodology]] · [[ben-ai-claude-record-a-skill-best-practices]] · [[cursor-agent-swarms-model-economics]] (★실측 비용8배↓) · [[claude-code-mcp-multimodel-delegation-benchmark]] (★실측 198회 히든테스트) · [[claude-code-ci-pipeline-multisession-worktree]] · [[rtk-skill-jetbrains-token-benchmark]] (★실측 비용검증 — 주장 60~90%↓ 실측은 오히려 증가) · [[microsoft-claude-code-copilot-cli-adoption-study]] (★실측 PR 24%↑, 4개월 추적) · [[adeptly-claude-code-learning-crew-pipeline]] · [[jeremytian-claude-code-loop-agent-optimization]] (★실측 정밀도 0.734→0.818) · [[2026-08-29-exedev-claude-codex-cursor-parallel-agents]] · [[reddit-lloyd-claude-code-loop-orchestrator]] · [[codex-gpu-kernel-232x-autoresearch]] (★실측 232배) · [[theaxlabs-harness-r1-failure-driven-editing]] · [[asana-openai-codex-enzyme-migration]] (5년→2주·$6M→$12K, HN 회의론 병기) · [[latent-space-wayfinder-claude-code-skill]] · [[jakesaunders-self-hosted-agentic-software-factory]] · [[fabiensanglard-agent-md-persistent-style-guide]] · [[vercel-ai-sdk-software-factory]] (★실측 PR 25~35%·이슈 70~80% 자동화)
- 보안·운영: [[uber-adr-claude-code-cursor-codex-security-monitoring]] (★프로덕션 배포·MLSys 2026) · [[mozilla-claude-mythos-firefox-vulnerability-detection]] (★실측 14배) · [[record-replay-mcp-skill-recorder]] · [[codex-record-replay-automations]] · [[claude-cowork-usage-data-2026]] (★실측 잡무33%·개발8.7%) · [[charlie-clark-claude-code-second-brain-agency]] · [[tmux-telegram-agent-model-downshift]] · [[reddit-one-person-ai-company-framework]] · [[ai-agent-profiler-claude-code-cost-benchmark]] (★실측 243세션·비용68%툴결과) · [[gstack-meeting-personas-claude-code-brain]] · [[gpt-5-6-sol-autonomous-business-failure]] (★실측 $350→$250.50) · [[theaxlabs-ai-native-operating-system-6-steps]] · [[theaxlabs-slack-cpo-ai-teammate-principles]] · [[theaxlabs-company-brain-prompt-guide]] · [[mckinsey-reckitt-rgmx-pricing-automation]] (McKinsey RGMx, 매출개선 $100M+)
- 마케팅: [[ploy-opus-to-gpt-5-6-migration]] (★실측 2.2배 속도·비용27%↓) · [[benai-claude-skills-marketing-automation]] · [[claude-code-seo-manager-mcp-dashboard]]
- 금융: [[openai-thrive-tax-ai-self-improving]] (★실측 97%·50%↑)
- 개인 생산성: [[cowork-7-business-use-cases]] · [[gemini-spark-claude-cowork-routing]] · [[tom-riddle-diary-remarkable]] · [[codex-personal-assistant-multi-messenger]] · [[openai-chatgpt-work-launch]] · [[searchsteward-claude-job-search-automation]] · [[i-have-adhd-claude-codex-skill]] · [[nobuzz-claude-code-gemini-debuzz-skill]] · [[l3a0-claude-code-kindle-highlights-recovery]] · [[azhar-6-dollar-ai-research-agent]] (★실측 $494/일→$6/일)
- HR: [[jocoding-ax-series-pwc-samil]]
- 영업(sales): [[anthropic-bd-team-claude-cowork-sales-automation]] · [[federal-contract-leadgen-claude-browser-automation]]
- 교육(education): [[edsurge-cheat-vulnerability-index-ai-resistant-assignments]] · [[edsurge-cognitive-citizenship-ai-instruction]] (Brown대 테이크홈 96%→감독형 49%) · [[edsurge-school-ai-policy-future-ready-team]] (학교 AI 정책 3단계·신호등 체계) · [[edsurge-ai-esl-english-learners]] (ESL, 정량 성과 없음)

## 분석 (wiki/analysis/)

- [[llm-wiki-learning-resources]] — Karpathy LLM Wiki 패턴 학습용 영상·자료 추천 (course)
- [[coding-agent-terminal-harness-comparison]] — Claude Code·goose·OpenCode·Pi 실전 비교 (course, ax)
- [[alphaevolve-gemini-coding-agent-impact-roundup]] — Gemini 기반 알고리즘 발견 에이전트 산업 임팩트 (course, ax)
- [[sk-group-ax-agenda-2026]] — SK그룹 "1인 1에이전트" 선언과 그룹 전개, 2026 상반기 (course, ax)
- [[korea-4-groups-ax-competition-2026]] — 국내 4대 그룹 AX 경쟁 지형(삼성·SK·현대차·LG) 비교 (course, ax)
- [[claude-enterprise-adoption-path]] — Claude 엔터프라이즈 도입 경로 — 데이터 정책·사내망 제약 옵션 (course, ax)
- [[vendor-official-case-numbers]] — 벤더 공식 고객 사례 수치 모음(Rakuten·Mozilla 등, 1차 출처) (course, ax)

## 기타

- [[timeline]] — 업계 주요 이벤트 연대기 (05-19 ~ 08-31, 125건)
- [[sources]] — 모니터링 소스 레지스트리
- newsletter/ — 데일리 뉴스레터 (최신: [[2026-09-02]] · [[2026-09-01]] · [[2026-08-31]] · [[2026-08-30]] · [[2026-08-29]] · [[2026-08-28]] · [[2026-08-27]] · [[2026-08-26]] · [[2026-08-25]] · [[2026-08-24]] · [[2026-08-23]] · [[2026-08-22]] · [[2026-08-21]] · [[2026-08-20]] · [[2026-08-19]] · [[2026-08-18]] · [[2026-08-17]] · [[2026-08-16]] · [[2026-08-15]] · 08-09~08-11 공백 소급 스캔 완료(2026-08-11 실행, 하나로 통합) · 08-05~08-07 공백 소급 스캔 완료(cron 세션 2026-08-08 실행 + iMac 세션 2026-08-07 실행, 병합 후 하나로 통합 — 상세는 [[log]] 참고) · 08-01~08-03 공백 소급 스캔 완료(2026-08-04 실행, [[2026-08-03]] 하나로 통합) · 07-28 공백 소급 스캔 완료(2026-07-29 실행, 날짜별 파일) · 07-23~07-26 공백 소급 스캔 완료(2026-07-27 실행, [[2026-07-26]] 하나로 통합) · 07-09·07-10·07-17·07-19 공백 소급 스캔 완료(2026-07-20 실행) · 07-11~07-15 위키 반영 완료(승인게이트 폐지 후 소급) · 05-01~07-05 백필 완료, 07-06자는 구 편집 기준으로 작성됨)
