// app/api/regions/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://spondias.com/sporton/api/v1/region/getAll"
    );
    const regions = await response.json();

    if (!response.ok) {
      throw new Error("Error fetching regions");
    }

    return NextResponse.json(regions);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
