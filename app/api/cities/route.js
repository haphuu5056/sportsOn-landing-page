// app/api/cities/[regionId]/route.js
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { regionId } = params;
  try {
    const response = await fetch(
      `https://spondias.com/sporton/api/v1/cities/${regionId}`
    );
    const cities = await response.json();

    if (!response.ok) {
      throw new Error("Error fetching cities");
    }

    return NextResponse.json(cities);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
