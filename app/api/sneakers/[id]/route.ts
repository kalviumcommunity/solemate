// ✅ PROVIDED — serves one sneaker by id, e.g. "/api/sneakers/3".
// Returns 404 JSON if the sneaker does not exist.
import { NextResponse } from "next/server";
import { getSneakerById } from "@/lib/sneakers";

export function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const sneaker = getSneakerById(Number(params.id));
  if (!sneaker) {
    return NextResponse.json({ error: "Sneaker not found" }, { status: 404 });
  }
  return NextResponse.json(sneaker);
}
