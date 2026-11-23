"use client";

import { useEffect, useState } from "react";
import type { Sneaker } from "@/lib/types";
import SneakerCard from "@/components/SneakerCard";

export default function HomePage() {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/sneakers")
      .then((res) => res.json())
      .then((data) => {
        setSneakers(Array.isArray(data) ? data : data.sneakers ?? []);
      })
      .catch(() => setSneakers([]))
      .finally(() => setLoading(false));
  }, []);

  const filteredSneakers = sneakers.filter((sneaker) =>
    sneaker.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>🔥 SoleMate</h1>
      <p className="subtitle">Catch the drop before it sells out.</p>

      <input
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search sneakers..."
      />

      {loading ? (
        <p className="loading">Loading...</p>
      ) : filteredSneakers.length === 0 ? (
        <p className="empty">No sneakers found.</p>
      ) : (
        <div className="grid">
          {filteredSneakers.map((sneaker) => (
            <SneakerCard key={sneaker.id} sneaker={sneaker} />
          ))}
        </div>
      )}
    </div>
  );
}
