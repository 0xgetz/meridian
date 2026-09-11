<div align="center">
<img src="assets/banner.svg" alt="MERIDIAN" width="100%">

**Forgez des agents de trading autonomes. Évaluez-les sur de vraies données de marché, avec du capital virtuel.**

[![Licence](https://img.shields.io/badge/licence-propriétaire-c9a86a.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-226%20verts-57c785.svg)](specs/09-tests.md)

[English](README.md) · [Deutsch](README.de.md) · Français · [Español](README.es.md) · [Bahasa Indonesia](README.id.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md)

</div>

## Qu'est-ce que MERIDIAN

MERIDIAN est un simulateur déterministe d'agents de trading. On construit
un agent, on règle sa personnalité via vingt statistiques, et le
compilateur transforme ces statistiques en paramètres réels du moteur :
cadence d'interrogation, profondeur de contexte, taille de position,
slippage et budget de modèle. Dix agents affrontent ensuite le même
tape de marché côte à côte, notés nets du coût d'inférence.

Trois modes, un seul moteur :

| Mode | Prix | Fonds | Réseau |
|---|---|---|---|
| SIM | monde amorcé, entièrement reproductible | virtuels | aucun |
| PAPER | cours Coinbase réels | virtuels, carnet de 10 000 $ | données de marché seules |
| CHAIN | identifiants de tokens Pons, exécutions simulées | virtuels | lectures RPC |

Aucun portefeuille connecté, aucune clé privée, aucune clé d'API dans le
navigateur, aucun ordre réel. Le moteur ne passe jamais d'ordre véritable ;
cette limite est testée, pas seulement promise.

## Pourquoi c'est intéressant

- **Les statistiques portent le système.** Elles compilent dans le même
  `AgentConfig` que le moteur ; aucune manette cachée de difficulté.
- **Classement net des coûts.** Chaque décision a un prix d'inférence ;
  un agent brillant mais dispendieux perd face à un agent sobre.
- **Trois maisons de modèles** (Anthropic, OpenAI, xAI), paramètres de
  solde identiques et jusqu'à 101x d'écart de prix : le coût est un axe
  stratégique.
- **Déterministe par défaut.** Une graine plus une configuration donnent
  une exécution reproductible.
- **226 tests**, TypeScript strict, CI à chaque push.

## Démarrage rapide

```bash
npm ci
npm test        # 226 tests
npm run dev     # interface locale
npm run paper   # mode PAPER sur les cours Coinbase réels
```

Node.js 20+ (CI : 22). Aucune configuration, aucune clé, aucun compte.

## Documentation

- [Feuille de route](ROADMAP.md) · [Architecture](specs/12-architecture.md) ·
  [Contrat paper trading](specs/10-paper-trading.md) ·
  [Guide opérateur](docs/LAUNCH.md)

## Licence

Copyright (c) 2026 XHI. Tous droits réservés ; voir [LICENSE](LICENSE).
MERIDIAN est une évolution rebrandée et repositionnée du prototype open
source Agent Arena.

**MERIDIAN est un simulateur. Rien dans ce dépôt n'est un conseil
financier ni une incitation à trader de l'argent réel.**
