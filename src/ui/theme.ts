/** MERIDIAN brand palette. Nothing here is decorative-only. */

import type { AgentClass } from "../core/types.js";

export const PALETTE = {
  bg: "#0e1526",
  bgDeep: "#0a0f1c",
  panel: "rgba(16, 24, 43, 0.72)",
  panelEdge: "rgba(201, 168, 106, 0.20)",
  accent: "#c9a86a",
  accentDim: "#8a7348",
  ink: "#e8eaf0",
  inkDim: "#a7b0c4",
  ground: "#16203a",
  groundAlt: "#1b2745",
  up: "#57c785",
  down: "#d97068",
} as const;

export const CLASS_COLOR: Record<AgentClass, string> = {
  SCOUT: "#22d3ee",
  SNIPER: "#57c785",
  WHALE: "#c9a86a",
  ARB: "#e879f9",
  CUSTOM: "#c9a86a",
};

export const FONT = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

/** Darkens a #rrggbb by a factor in 0..1. */
export function shade(hex: string, factor: number): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  const r = Math.round(((n >> 16) & 255) * factor);
  const g = Math.round(((n >> 8) & 255) * factor);
  const b = Math.round((n & 255) * factor);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export function fmtEth(n: number, dp = 3): string {
  return `${n >= 0 ? "+" : ""}${n.toFixed(dp)}`;
}

export function fmtUsd(n: number): string {
  return `$${n.toFixed(n < 1 ? 4 : 2)}`;
}
