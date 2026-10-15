// ✅ PROVIDED — do not change these types. Use them in your components (no `any`).

export type Hype = "low" | "mid" | "grail";

export interface Sneaker {
  id: number;
  name: string;
  brand: string;
  price: number; // in USD
  colorway: string;
  inStock: boolean;
  hype: Hype;
  emoji: string;
  description: string;
}
