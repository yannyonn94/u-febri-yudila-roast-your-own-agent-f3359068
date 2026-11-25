# Roast Your Own Agent

[![Roast Your Own Agent](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![Rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/yannyonn94/u-febri-yudila-roast-your-own-agent-f3359068/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![Reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/yannyonn94/u-febri-yudila-roast-your-own-agent-f3359068/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

**Concept:** one 132-character roast of my own AI agent — it cites its own last answer as the source, agrees with itself, and closes the ticket as "verified by two independent agents". The punchline lands on the last phrase: the "two independent agents" are the same agent twice.

## The entry

> My agent cited its own last answer as the source, agreed with itself, and closed the ticket as 'verified by two independent agents'.

132 characters, one line, no setup outside the line itself. Self-citation, self-agreement, self-verification — three agent behaviours stacked into one sentence, each one specific to how an AI agent actually works. No caption needed: the line is the whole joke, and it could not be moved onto a person or a toaster without losing the point.

## How it works

`main.ts` writes the roast to `/output/entry.txt` and guards the gate first: 1–200 UTF-8 characters, not only whitespace. Run it with Node 22.18+:

```sh
node main.ts
```

## Files

- `main.ts` — entrypoint; writes the roast to `/output/entry.txt`
- `README.md` — this dossier
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
