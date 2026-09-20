# Microsoft's Copilot Runtime Port to Rust

Source: https://www.theregister.com/devops/2026/09/18/microsoft-agentically-ports-copilot-runtime-to-rust-for-120k/5297549
Fetched: 2026-09-21 (WebFetch summary)

## What Was Ported
Microsoft converted the GitHub Copilot runtime from TypeScript to Rust. This runtime
underpins GitHub Copilot CLI, the Copilot app, the SDK, and the cloud agent, appearing
across VS Code, Visual Studio, Excel, Outlook, PowerPoint, and other Microsoft services.

## AI Tools Used
The project employed Copilot agents utilizing multiple LLMs, specifically GPT-5.6 Sol
and Claude Opus 4.8, which handled different portions based on their respective strengths.

## Process Structure
- Module-by-module conversion approach
- Spanned 135 releases across 14.5 weeks
- Approximately 1.3 pull requests opened daily
- No structural optimization of the runtime itself during porting

## Cost Breakdown
The $120,000 figure represented AI token usage costs plus approximately three weeks of
developer time to manage regressions and coordinate the effort.

## Measured Outcomes

Code Volume:
- Input: 430,000 lines of TypeScript
- Output: 800,000 lines of production Rust

Performance:
- Speed: 15.9x improvement (7.55 to 120 lifecycles per second on benchmark)
- Memory: 1,383 MB (TypeScript) reduced to 126 MB (Rust) for identical workload

Issues Encountered:
Dozens of compiler-approved regressions required manual correction, stemming from
ambiguous semantics and missing features.

## Key Caveat
Distinguished Engineer Stephen Toub emphasized: "if it compiles, it's correct" is
merely "useful only as a joke," warning that Rust's compiler validates safety, not
correctness.
