<div align="center">
<img src="assets/logo.svg" alt="MERIDIAN" width="88">
<img src="assets/banner.svg" alt="MERIDIAN" width="100%">

**鍛造自主交易代理，以真實市場資料與虛擬資金檢驗它們。**

[![CI](https://github.com/0xgetz/meridian/actions/workflows/ci.yml/badge.svg)](https://github.com/0xgetz/meridian/actions/workflows/ci.yml)
[![授權條款](https://img.shields.io/badge/授權條款-專有-c9a86a.svg)](LICENSE)
[![測試](https://img.shields.io/badge/測試-226%20通過-57c785.svg)](specs/09-tests.md)
[![TypeScript](https://img.shields.io/badge/type-strict%20TypeScript-3178c6.svg)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/node-%E2%89%A520-339933.svg)](package.json)
[![真實資金](https://img.shields.io/badge/真實資金-永不進入本應用-d97068.svg)](specs/10-paper-trading.md)

[English](README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Bahasa Indonesia](README.id.md) · [简体中文](README.zh-CN.md) · 繁體中文

</div>

## MERIDIAN 是什麼

MERIDIAN 是一個確定性的交易代理模擬器。你建立一個代理，透過二十項
屬性調節它的個性，編譯器會將這些屬性轉換為真實的引擎參數：輪詢節奏、
上下文深度、部位規模、滑價與模型預算。接著你可以觀察十個代理並排
交易同一份市場資料流，並以扣除推論成本後的淨報酬計分。

三種執行模式，同一顆引擎：

| 模式 | 價格來源 | 資金 | 網路 |
|---|---|---|---|
| SIM | 種子世界，完全可重現 | 虛擬 | 無 |
| PAPER | 真實 Coinbase 報價 | 虛擬，一萬美元帳簿 | 僅市場資料 |
| CHAIN | Pons 代幣識別，模擬成交 | 虛擬 | 唯讀 RPC |

無需連接錢包，無私密金鑰，瀏覽器內無 API 金鑰，不下真實訂單。引擎永遠
不會以真實資金下單——這條界線由測試保證，而非口頭承諾。

## 為什麼值得關注

- **屬性即參數。** FORGE 屬性編譯為引擎實際消費的同一份
  `AgentConfig`，沒有隱藏的難度旋鈕。
- **成本調整後計分。** 每個決策都有推論價格標籤；聰明但燒錢的代理
  會輸給穩健省錢的代理。
- **三家模型供應商**（Anthropic、OpenAI、xAI）平衡參數完全一致，價格
  差距最高達 101 倍——成本本身就是一條策略軸。
- **預設確定性。** 一顆種子加一份建立就是一次可重現的執行，迴歸可被
  證明，結果可被分享。
- **226 個測試**，嚴格型別 TypeScript，每次推送都跑 CI。

## 快速開始

```bash
npm ci
npm test        # 226 個測試
npm run dev     # 本機介面
npm run paper   # PAPER 模式，串接真實 Coinbase 報價
```

需要 Node.js 20+（CI 使用 22）。無需設定、無入金鑰、無需帳號。

## 文件

- [路線圖](ROADMAP.md) —— 已完成、下一步，以及刻意不做的事
- [架構](specs/12-architecture.md)
- [紙面交易契約](specs/10-paper-trading.md)
- [發布與能見度](specs/15-launch-and-visibility.md)
- [維運指南](docs/LAUNCH.md)

## 致謝與授權

版權所有 (c) 2026 XHI，保留所有權利，見 [LICENSE](LICENSE)。
MERIDIAN 是開源原型 Agent Arena 更名與重新定位後的演進版本；該原型
此前依 MIT 授權已分發的權利不受影響。

**MERIDIAN 是模擬器。本資料庫中的任何內容都不構成投資建議、交易要約，
也不是真實資金的入口。**
