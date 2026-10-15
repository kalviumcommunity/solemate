// TODO (Task 6 — Dynamic Routes, Data Fetching & Navigation)
// This is the DYNAMIC detail route: /sneakers/[id]
//
// What to build:
//    - Read the dynamic `id` from params (params.id).
//    - Fetch a single sneaker from `/api/sneakers/{id}` on the server
//      (this is an async Server Component — you can `await fetch(...)`).
//      Build an absolute URL, e.g.:
//        const res = await fetch(`http://localhost:3000/api/sneakers/${params.id}`, { cache: "no-store" });
//    - Conditional rendering: if not found (res not ok / status 404),
//      show a "Sneaker not found" message instead of crashing.
//    - Add a "← Back to all sneakers" <Link href="/"> (className="back-link").
//
// When found, show: emoji, name, brand, price ($), hype, in-stock status,
// and the description.
// Suggested classNames: "detail", "emoji", "meta-row", a hype badge
// `badge ${sneaker.hype}`, and a stock pill `stock ${sneaker.inStock ? "in" : "out"}`.
//
// Hints:
//   import Link from "next/link";
//   import type { Sneaker } from "@/lib/types";

export default async function SneakerDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // TODO: fetch the sneaker by params.id and handle the not-found case.

  return (
    <div>
      {/* TODO: back link + detail card (or "Sneaker not found") */}
      <p>TODO: sneaker detail for id {params.id}</p>
    </div>
  );
}
