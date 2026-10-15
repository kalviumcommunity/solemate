// TODO (Task 2 — Components, JSX & Typed Props)
// Build a reusable card component for ONE sneaker.
//
// Requirements:
//  - Define a typed props interface (use the Sneaker type from "@/lib/types").
//  - Accept a single `sneaker` prop (no `any`).
//  - Return JSX showing: emoji, name, brand, price ($) and a hype badge.
//  - Wrap the whole card in a <Link> to `/sneakers/{id}` so it is clickable.
//    (import Link from "next/link")
//  - Suggested classNames: "card", "emoji", "brand-name", "price",
//    and a hype badge: className={`badge ${sneaker.hype}`}
//
// Example badge: <span className={`badge ${sneaker.hype}`}>{sneaker.hype}</span>

import type { Sneaker } from "@/lib/types";

// TODO: replace `any` with a proper typed props interface.
export default function SneakerCard(props: any) {
  // TODO: build and return the card JSX (wrapped in a Link to the detail page).
  return <div className="card">TODO: SneakerCard</div>;
}
