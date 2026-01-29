import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, role, city } = body;

    // Baserow Configuration
    const BASEROW_TOKEN = "y81TImlm7Scaq0zSiQdDd3GEgbtSkkm3";
    const TABLE_ID = "819666";

    const response = await fetch(
      `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`,
      {
        method: "POST",
        headers: {
          "Authorization": `Token ${BASEROW_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Name": name,
          "Phone": phone,
          "Email": email,
          "Role": role,
          "City": city,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Baserow Error:", errorData);
      return NextResponse.json(
        { error: "Error submitting to Baserow", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
