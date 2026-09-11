<div align="center">
<img src="assets/banner.svg" alt="MERIDIAN" width="100%">

**Forge autonomous trading agents. Run them against real market data with virtual capital.**

[![CI](https://github.com/0xgetz/meridian/actions/workflows/ci.yml/badge.svg)](https://github.com/0xgetz/meridian/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-c9a86a.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-226%20green-57c785.svg)](specs/09-tests.md)
[![TypeScript](https://img.shields.io/badge/type-strict%20TypeScript-3178c6.svg)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/node-%E2%89%A520-339933.svg)](package.json)
[![No real funds](https://img.shields.io/badge/real%20funds-never%20touch%20this%20app-d97068.svg)](specs/10-paper-trading.md)

English · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Bahasa Indonesia](README.id.md)

</div>

## What is MERIDIAN

MERIDIAN is a deterministic trading-agent simulator. You build an agent,
tune its personality through twenty stats, and the compiler turns those
stats into real engine parameters: polling cadence, context depth,
position size, slippage and model budget. Then you watch ten agents trade
the same market tape side by side and keep score net of inference cost.

Three run modes, one engine:

| Mode | Prices | Money | Network |
|---|---|---|---|
| SIM | seeded world, fully reproducible | virtual | none |
| PAPER | real Coinbase quotes | virtual, $10k book | market data only |
| CHAIN | token identities from Pons, simulated fills | virtual | RPC reads |

No wallet connection, no private keys, no API keys in the browser, no real
orders. The engine never places a trade with real money; that boundary is
tested, not promised.

## Why it is interesting

- **The stats are load-bearing.** FORGE stats compile into the same
  `AgentConfig` the engine consumes; there is no hidden difficulty dial.
- **Cost-adjusted scoreboard.** Every decision has an inference price tag;
  a clever agent that overspends loses to a boring one that does not.
- **Three model houses** (Anthropic, OpenAI, xAI) with identical balance
  parameters and up to 101x price spread, so cost is a strategy axis.
- **Deterministic by default.** A seed plus a build is a reproducible run,
  which makes regressions provable and results shareable.
- **226 tests**, type-strict TypeScript, CI on every push.

## Quick start

```bash
npm ci
npm test        # 226 tests
npm run dev     # local UI
npm run paper   # PAPER mode against real Coinbase quotes
```

Node.js 20+ (CI runs 22). No configuration, no keys, no accounts.

## Repository layout

```
src/core      engine, stat compiler, agent brains
src/sim       seeded market world
src/ui        React + canvas interface (FORGE, DEX, HUD)
src/live      provider wires, paper and chain adapters
specs/        numbered contracts, one per subsystem
tests/        vitest suite (226)
docs/         operator guides
```

## Documentation

- [Roadmap](ROADMAP.md) — shipped, next up, and what is deliberately not happening
- [Architecture](specs/12-architecture.md)
- [Paper trading contract](specs/10-paper-trading.md)
- [Launch and visibility](specs/15-launch-and-visibility.md)
- [Operator guide](docs/LAUNCH.md)

## Credits and license

MERIDIAN is a rebranded, repositioned evolution of the open-source
Agent Arena prototype. MIT licensed; see [LICENSE](LICENSE). Original
copyright retained as required.

**MERIDIAN is a simulator. Nothing in this repository is financial
advice, a solicitation to trade, or a gateway for real funds.**
