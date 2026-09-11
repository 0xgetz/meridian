<div align="center">
<img src="assets/banner.svg" alt="MERIDIAN" width="100%">

**Forge trading agent yang mandiri. Uji mereka dengan data pasar asli dan modal virtual.**

[![Lisensi](https://img.shields.io/badge/lisensi-proprietary-c9a86a.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-226%20lulus-57c785.svg)](specs/09-tests.md)

[English](README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · Bahasa Indonesia · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md)

</div>

## Apa itu MERIDIAN

MERIDIAN adalah simulator trading agent yang deterministik. Anda
membangun satu agen, mengatur karakternya lewat dua puluh statistik, lalu
kompiler mengubah statistik itu menjadi parameter mesin yang nyata:
periode polling, kedalaman konteks, ukuran posisi, slippage, dan anggaran
model. Setelah itu sepuluh agen saling beradu membaca tape pasar yang
sama, dengan skor bersih setelah biaya inferensi.

Tiga mode, satu mesin:

| Mode | Harga | Dana | Jaringan |
|---|---|---|---|
| SIM | dunia ber-seed, sepenuhnya bisa diulang | virtual | tidak ada |
| PAPER | kutipan nyata dari Coinbase | virtual, brankas $10 ribu | data pasar saja |
| CHAIN | identitas token dari Pons, eksekusi simulasi | virtual | baca RPC |

Tanpa koneksi wallet, tanpa kunci privat, tanpa API key di browser,
tanpa order sungguhan. Mesin ini tidak pernah melakukan transaksi riil;
batas itu dibuktikan lewat test, bukan sekadar janji.

## Kenapa menarik

- **Statistiknya benar-benar menentukan.** FORGE mengompilasi ke
  `AgentConfig` yang sama yang dipakai mesin; tidak ada dial kesulitan
  tersembunyi.
- **Papan skor bersih biaya.** Setiap keputusan punya label harga
  inferensi; agen cerdas tapi boros kalah dari agen sederhana yang hemat.
- **Tiga rumah model** (Anthropic, OpenAI, xAI) dengan parameter saldo
  identik dan selisih harga sampai 101x, jadi biaya adalah sumbu strategi.
- **Deterministik secara default.** Seed plus satu build adalah run yang
  bisa diulang, sehingga regresi bisa dibuktikan dan hasil bisa dibagikan.
- **226 test**, TypeScript strict mode, CI jalan di setiap push.

## Mulai cepat

```bash
npm ci
npm test        # 226 test
npm run dev     # UI lokal
npm run paper   # mode PAPER dengan kutipan Coinbase asli
```

Node.js 20+ (CI memakai 22). Tanpa konfigurasi, tanpa kunci, tanpa akun.

## Dokumentasi

- [Peta jalan](ROADMAP.md) · [Arsitektur](specs/12-architecture.md) ·
  [Kontrak paper trading](specs/10-paper-trading.md) ·
  [Panduan operator](docs/LAUNCH.md)

## Lisensi

Hak cipta (c) 2026 XHI. Seluruh hak cipta dilindungi; lihat
[LICENSE](LICENSE). MERIDIAN adalah kelanjutan dengan merek baru dan
posisi baru dari prototipe open source Agent Arena.

**MERIDIAN adalah simulator. Tidak ada isi repositori ini yang merupakan
nasihat keuangan, ajakan berdagang, atau pintu masuk dana riil.**
