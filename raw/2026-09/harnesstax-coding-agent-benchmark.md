# HarnessTax: How Much Does the Harness Matter for Coding Agents?

Source: https://harnesstax.github.io/
HN discussion: https://news.ycombinator.com/item?id=49733726 (2026-09-16, 229 points)
Fetched: 2026-09-21 (WebSearch + HN thread summary)

## Overview
A systematic benchmark showing agent scaffolding (harness) contributes more to coding
performance economics than the base model choice.

## Methodology
21 model-harness pairs spanning 7 models and 3 harnesses — Claude Code, Codex CLI, and
Pi (a minimal, open-source harness) — evaluated on SWE-bench Lite and Terminal-Bench 2.0.

## Key Findings
- Harness choice has little effect on task success rate: average effect stays within
  ±2% on SWE-bench Lite and within about ±5% on Terminal-Bench 2.0.
- Harness choice can significantly affect cost: the same model can achieve similar
  success rates at up to 5x different costs depending on harness.
- Pi, the minimal open-source harness, is competitive on both cost and task success
  rate versus the heavier commercial harnesses.
- The right harness cuts the cost of the same result by 71% without a loss of accuracy.
- Models may perform better with harnesses other than their "native" one — e.g. Claude
  models don't necessarily need Claude Code specifically.

## HN discussion highlights
- Model-harness mismatch: models trained on specific tool formats (Claude's Edit() vs
  GPT's patch-based tools) perform better when harness tool formats match training
  distribution.
- Harness complexity vs model size: smaller models need minimal harnesses (like Pi) to
  avoid prompt overload; larger models tolerate elaborate systems without degradation.
- Users report large savings switching to Pi with comparable accuracy.
- Critics argue Claude Code's overhead comes from comprehensive tool descriptions
  rather than security, questioning whether the cost premium is justified for many use
  cases.
