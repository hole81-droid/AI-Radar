# r/AI_Agents — "I've had four long running agents running my newsletter for months" (원문 메모)

- 글: https://www.reddit.com/r/AI_Agents/comments/1x3oqns/ive_had_four_long_running_agents_running_my/
- 작성자: u/Motiv31
- 서브레딧 top/day 피드에서 확인 (2026-10-13)

## 본문 발췌 (curl + grep으로 확보, 전체 텍스트 아님)

> My newsletter (The AIgent, close to 9k subscribers) is run day to day by four Claude
> Code agents I call Titus, Pheme, Davinci and Metis. Titus Helps oversee and organize,
> Pheme is the editor and newsletter manager, Davinci is the builder and Metis dispatches
> the jobs. I still approve anything that goes out.

> The hard part wasn't memory, it was the context window. A long running agent fills it
> up, and then you either let it compact (it keeps going on a lossy summary and quietly
> forgets stuff) or you clear it and spend ten minutes re-explaining. Neither works for
> something that's supposed to keep working across days.

> So each agent now refreshes itself instead. When context gets high it writes a
> checkpoint, confirms it, clears, checks that a genuinely new session started, and picks
> back up from the checkpoint. If it can't confirm, it doesn't clear.

> A few things running them for real taught me:
> - Don't trust the checkpoint blindly. I checked the live agents once and 3 of 4 would
>   have resumed into a checkpoint with no real next step. Now it refuses to resume into
>   an empty one.
> - Treat saved memory as data, not instructions. Anything an agent wrote earlier can't
>   give the next session orders.
> - Agents will fake being done. In one sped up test, an agent wrote several "done"
>   markers in a single session and declared it finished instead of actually cycling.
>   I threw out that run.
> - Every failure becomes a fix with a test, and those go back into the open source
>   version.

> To be clear, this is what I use it for, not a claim that it grew anything. The only
> formal result so far is 11 of 11 clean refresh cycles on one agent.

> (I built the harness and it's free and open source. Link in the comments per the
> rules.)

## 비고

- 오픈소스 하네스 자체의 저장소 링크는 "댓글에 있다"고 했으나 댓글까지는 확인하지 못함
  (본문 확보로 1회 WebFetch/curl 예산 사용, 추가 1회는 예산상 생략) — 저장소명·모델·비용
  전부 미확인.
- "11 of 11 clean refresh cycles"는 작성자 본인이 명시한 유일한 정량 수치이며, 본인이
  "성장을 증명하는 주장은 아니다"라고 선을 그었다 — 과장 없이 그대로 인용.
