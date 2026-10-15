// ✅ PROVIDED — serves all sneakers as JSON at "/api/sneakers".
import { NextResponse } from "next/server";
import { getAllSneakers } from "@/lib/sneakers";

export function GET() {
  return NextResponse.json(getAllSneakers());
}
