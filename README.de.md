<div align="center">
<img src="assets/banner.svg" alt="MERIDIAN" width="100%">

**Autonome Trading-Agenten schmieden. Trainiert auf echten Marktdaten, mit virtuellem Kapital.**

[![CI](https://github.com/0xgetz/meridian/actions/workflows/ci.yml/badge.svg)](https://github.com/0xgetz/meridian/actions/workflows/ci.yml)
[![Lizenz](https://img.shields.io/badge/lizenz-proprietär-c9a86a.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-226%20gr%C3%BCn-57c785.svg)](specs/09-tests.md)

[English](README.md) · Deutsch · [Français](README.fr.md) · [Español](README.es.md) · [Bahasa Indonesia](README.id.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md)

</div>

## Was ist MERIDIAN

MERIDIAN ist ein deterministischer Trading-Agenten-Simulator. Man baut
einen Agenten, stimmt seine Persönlichkeit über zwanzig Werte ab, und der
Compiler übersetzt diese Werte in echte Engine-Parameter: Polling-Kadenz,
Kontexttiefe, Positionsgröße, Slippage und Modellbudget. Danach handeln
zehn Agenten Seite an Seite dasselbe Markt-Tape — bewertet netto nach
Inferenzkosten.

Drei Betriebsmodi, eine Engine:

| Modus | Preise | Geld | Netzwerk |
|---|---|---|---|
| SIM | seedete Welt, vollständig reproduzierbar | virtuell | keins |
| PAPER | echte Coinbase-Kurse | virtuell, $10k-Buch | nur Marktdaten |
| CHAIN | Token-Identitäten von Pons, simulierte Fills | virtuell | RPC-Lesewünsche |

Kein Wallet, keine privaten Schlüssel, keine API-Keys im Browser, keine
realen Orders. Die Engine platziert niemals echte Trades — diese Grenze
ist getestet, nicht nur versprochen.

## Warum es spannend ist

- **Die Werte tragen Gewicht.** FORGE-Werte kompilieren in dasselbe
  `AgentConfig` wie die Engine; es gibt keinen versteckten
  Schwierigkeitsregler.
- **Kostenbereinigte Rangliste.** Jede Entscheidung hat einen
  Inferenzpreis; ein schlauer, teurer Agent verliert gegen einen
  unaufgeregten, günstigen.
- **Drei Modell-Häuser** (Anthropic, OpenAI, xAI) mit identischen
  Balance-Parametern und bis zu 101x Preisunterschied — Kosten sind
  eine Strategieachse.
- **Standardmäßig deterministisch.** Seed plus Build ist ein
  reproduzierbarer Lauf; Regressionen sind beweisbar.
- **226 Tests**, typstriktes TypeScript, CI bei jedem Push.

## Schnellstart

```bash
npm ci
npm test        # 226 Tests
npm run dev     # lokale UI
npm run paper   # PAPER-Modus mit echten Coinbase-Kursen
```

Node.js 20+ (CI nutzt 22). Keine Konfiguration, keine Keys, keine Konten.

## Doku

- [Roadmap](ROADMAP.md) · [Architektur](specs/12-architecture.md) ·
  [Paper-Vertrag](specs/10-paper-trading.md) ·
  [Betreiberhandbuch](docs/LAUNCH.md)

## Lizenz

Urheberrecht (c) 2026 XHI. Alle Rechte vorbehalten; siehe [LICENSE](LICENSE).
MERIDIAN ist eine rebrandete, neu positionierte Weiterentwicklung des
Open-Source-Prototyps Agent Arena.

**MERIDIAN ist ein Simulator. Nichts in diesem Repository ist
Finanzberatung oder eine Aufforderung zu realen Trades.**
