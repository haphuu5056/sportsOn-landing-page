// app/api/register/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    const response = await fetch(
      "https://spondias.com/sporton/api/v1/authenticate/signUp",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MTI1MTgzNjgiLCJpYXQiOjE3MjIwNzUzODksImV4cCI6MjAzNzQzNTM4OX0.nmRVmFO1LUl9g2aWfsZIaCWgoPoPIklTuwVcWftBC-4`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Error during registration");
    }

    return NextResponse.json({
      message: "Registration successful",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
