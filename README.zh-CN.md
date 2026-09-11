<div align="center">
<img src="assets/logo.svg" alt="MERIDIAN" width="88">
<img src="assets/banner.svg" alt="MERIDIAN" width="100%">

**铸造自主交易智能体，用真实市场数据与虚拟资金检验它们。**

[![CI](https://github.com/0xgetz/meridian/actions/workflows/ci.yml/badge.svg)](https://github.com/0xgetz/meridian/actions/workflows/ci.yml)
[![许可证](https://img.shields.io/badge/许可证-专有-c9a86a.svg)](LICENSE)
[![测试](https://img.shields.io/badge/测试-226%20通过-57c785.svg)](specs/09-tests.md)
[![TypeScript](https://img.shields.io/badge/type-strict%20TypeScript-3178c6.svg)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/node-%E2%89%A520-339933.svg)](package.json)
[![真实资金](https://img.shields.io/badge/真实资金-永不进入本应用-d97068.svg)](specs/10-paper-trading.md)

[English](README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Bahasa Indonesia](README.id.md) · 简体中文 · [繁體中文](README.zh-TW.md)

</div>

## MERIDIAN 是什么

MERIDIAN 是一个确定性的交易智能体模拟器。你构建一个智能体，通过二十项
属性调节它的性格，编译器会把这些属性转化为真实的引擎参数：轮询节奏、
上下文深度、仓位规模、滑点与模型预算。然后你可以观察十个智能体并排
交易同一份市场数据流，并按扣除推理成本后的净收益计分。

三种运行模式，同一引擎：

| 模式 | 价格来源 | 资金 | 网络 |
|---|---|---|---|
| SIM | 种子世界，完全可复现 | 虚拟 | 无 |
| PAPER | 真实 Coinbase 报价 | 虚拟，1 万美元账簿 | 仅市场数据 |
| CHAIN | Pons 代币标识，模拟成交 | 虚拟 | 只读 RPC |

无需连接钱包，无私钥，浏览器内无 API 密钥，不下真实订单。引擎永远不会
以真实资金下单——这一边界由测试保证，而非口头承诺。

## 为什么值得关注

- **属性即参数。** FORGE 属性编译为引擎实际消费的同一份
  `AgentConfig`，没有隐藏的难度旋钮。
- **成本调整后计分。** 每一次决策都有推理价格标签；聪明但烧钱的智能体
  会输给稳健省钱的智能体。
- **三家模型公司**（Anthropic、OpenAI、xAI）平衡参数完全一致，价格差
  最高达 101 倍——成本本身就是一条策略轴。
- **默认确定性。** 一个种子加一份构建就是一次可复现的运行，回归可被
  证明，结果可被分享。
- **226 个测试**，严格类型 TypeScript，每次推送都跑 CI。

## 快速开始

```bash
npm ci
npm test        # 226 个测试
npm run dev     # 本地界面
npm run paper   # PAPER 模式，接入真实 Coinbase 报价
```

需要 Node.js 20+（CI 使用 22）。无需配置、无需密钥、无需账号。

## 文档

- [路线图](ROADMAP.md) —— 已完成、下一步，以及刻意不做的事
- [架构](specs/12-architecture.md)
- [纸面交易契约](specs/10-paper-trading.md)
- [发布与可见性](specs/15-launch-and-visibility.md)
- [运维指南](docs/LAUNCH.md)

## 致谢与许可

版权所有 (c) 2026 XHI，保留所有权利，见 [LICENSE](LICENSE)。
MERIDIAN 是开源原型 Agent Arena 更名与重新定位后的演进版本；该原型
此前依 MIT 许可已分发的权利不受影响。

**MERIDIAN 是模拟器。本仓库中的任何内容都不构成投资建议、交易要约，
也不是真实资金的入口。**
