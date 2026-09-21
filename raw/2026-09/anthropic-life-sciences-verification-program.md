# Anthropic — Life Sciences Verification Program (LSVP)

Source: https://www.anthropic.com/news/life-sciences-verification-program
Published: 2026-09-17
Fetched: 2026-09-22 (WebFetch summary)

## What It Is

A specialized access tier letting verified life-science professionals/organizations
use Claude (Mythos, Opus, Sonnet) with safeguards specifically tuned for
legitimate biology research, rather than the general-availability safety
classifiers (which are tuned conservatively and often over-block legitimate
biology questions).

## Access Tiers

- **Standard Use**: covers general life-science work spanning basic science,
  R&D, supply chain, manufacturing; can cover whole teams and daily workloads.
- **High-risk Use**: an add-on grant for work blocked even under Standard Use;
  removes remaining biology-specific safeguards; scoped to a single research
  project (not a whole team); must be renewed every 6 months.

Available via Claude Science, Claude.ai, Claude Code, and the API. Cyber
safeguards remain unaffected — only biology-specific blocks are relaxed.

## Why Now

Anthropic cites increasingly sophisticated misuse attempts, including some
targeting biological weapons development (cross-reference: 2026-09-11 threat
intelligence report). The company frames the core difficulty as: legitimate
pathogen research and harmful bioweapons research often look identical at the
level of individual queries — so blanket blocking either over-blocks
legitimate science or under-blocks misuse.

## Enforcement Model — Shift from Real-Time Blocking to Monitoring

Addresses three threat models: account compromise, insider threats, agent
misuse. Instead of blocking each risky-looking request in real time, Anthropic
now vets the requesting organization up front and then monitors usage patterns
over time against the org's stated research objectives (offline, pattern-level
review) with a 30-day data retention window — a "shared responsibility" model
between Anthropic and the verified organization.

## Related Wiki Pages

- wiki/updates/2026-08-07-claude-fable-5-biology-safeguards-update.md
  (Fable 5 biology safeguard recalibration, 85% false-block reduction)
- wiki/updates/2026-09-11-anthropic-threat-intelligence-report.md
  (bioweapons development attempts blocked, cited as LSVP's rationale)

## Source
https://www.anthropic.com/news/life-sciences-verification-program
