"use client";

// TODO (Tasks 3, 4, 5 — Lists + Conditional Rendering, Search, useEffect)
// This is the HOME page. It loads sneakers from the API and lets the user search.
//
// What to build:
//  Task 5 (useEffect & data fetching):
//    - On mount, fetch "/api/sneakers", parse JSON, store it in state.
//    - Show a "Loading…" message (className="loading") while the fetch is in flight.
//  Task 4 (useState + Event Handling):
//    - Keep a `query` string in state.
//    - Render the provided <input className="search-input"> and update `query`
//      on every change (onChange event).
//    - Filter sneakers by name (case-insensitive) using `query`.
//  Task 3 (Lists + Conditional Rendering):
//    - Render the filtered sneakers inside <div className="grid"> using .map,
//      one <SneakerCard key={...} sneaker={...} /> per sneaker.
//    - If the filtered list is empty, show a message (className="empty")
//      instead of an empty grid.
//
// Hints:
//   import { useEffect, useState } from "react";
//   import type { Sneaker } from "@/lib/types";
//   import SneakerCard from "./components/SneakerCard";

export default function HomePage() {
  // TODO: add state for sneakers, loading, and query.
  // TODO: add a useEffect that fetches "/api/sneakers".
  // TODO: compute the filtered list from query.

  return (
    <div>
      <h1>🔥 SoleMate</h1>
      <p className="subtitle">Catch the drop before it sells out.</p>

      {/* TODO: controlled search input (className="search-input") */}

      {/* TODO: loading state, then the grid of SneakerCards, then empty state */}
    </div>
  );
}
