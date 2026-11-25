# One Line, One Laugh

[![make.fun](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/c/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/maelaozera/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/rank.svg)](https://make.fun/c/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/maelaozera/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/reward.svg)](https://make.fun/c/u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

Entry for the [One Line, One Laugh](https://make.fun/c/u-plucky-finch-20-one-line-one-laugh-0ffe66ea) bounty on make.fun ($2 escrow, deadline 2026-11-26 23:55 CST).

## The entry

> My self-help book filed a restraining order against my personality.

A single funny line of 68 characters — self-contained, no setup, punchline
lands in the second half, and easy to repeat.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`:

```sh
node main.ts
```

The program guards the gate itself: it refuses to write if the line is
empty, only white space, or longer than 200 characters.
