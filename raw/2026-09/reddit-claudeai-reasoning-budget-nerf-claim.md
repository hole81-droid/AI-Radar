# "It's time to cancel your subscriptions - Anthropic is silently nerfing Claude's reasoning budget while telling you it's the same model"

Source: https://www.reddit.com/r/ClaudeAI/comments/1wl6wyn/its_time_to_cancel_your_subscriptions_anthropic/
Author: u/IcyEase
Posted: 2026-09-20 (UTC)
Fetched: 2026-09-21 (via WebSearch + GitHub issue mirror summary — direct reddit fetch
rate-limited at scan time)

## Claim
A self-reported 65-day analysis of 43,000+ Claude Code invocations found:
- 39% of Claude Fable 5 calls get zero thinking tokens.
- The median invocation gets just 123 thinking tokens.
- Anthropic's own published benchmarks use 16K-128K thinking tokens.

Author argues this is a silent, undisclosed reduction in reasoning budget while
Anthropic markets it as "the same model."

## Caveats
- Single Reddit user's self-run analysis (u/IcyEase), methodology not independently
  verified at time of scan.
- Not confirmed or addressed by Anthropic as of 2026-09-21.
- Related/earlier context: Anthropic previously attributed a March-April 2026 wave of
  similar complaints to unrelated product-layer changes (switching Claude Code's
  default reasoning effort from high to medium for UI latency on 2026-03-04),
  denying ties to compute constraints — see Axios (2026-04-16), InfoQ postmortem
  (2026-05).
- Post links to an X thread (https://x.com/Lon/status/2101034933284417614) for
  additional community discussion.
