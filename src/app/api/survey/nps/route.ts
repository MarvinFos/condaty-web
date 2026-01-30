import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      recommendation,
      reason,
      satisfaction,
      retention,
      recommendToResidents,
      recommendToAdmins,
      recommendService,
      recommendUsability,
      recommendReliability,
      recommendSecurity,
      improvement,
    } = body;

    // Baserow Configuration
    const BASEROW_TOKEN = "y81TImlm7Scaq0zSiQdDd3GEgbtSkkm3";
    const TABLE_ID = "820532";

    const payload = {
      "1. Recomendación Condaty (NPS)": recommendation,
      "2. Razón principal": reason,
      "3. Satisfacción valor": satisfaction,
      "4. Probabilidad continuar 12m": retention,
      "5. Rec. a Residentes": recommendToResidents,
      "6. Rec. a Administradores": recommendToAdmins,
      "7. Rec. por Atención": recommendService,
      "8. Rec. por Facilidad": recommendUsability,
      "9. Rec. como Solución Confiable": recommendReliability,
      "10. Rec. por Seguridad": recommendSecurity,
      "11. Mejoras sugeridas": improvement,
    };

    const response = await fetch(
      `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`,
      {
        method: "POST",
        headers: {
          "Authorization": `Token ${BASEROW_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Baserow Error (NPS):", errorData);
      return NextResponse.json(
        { error: "Error submitting to Baserow", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server Error (NPS):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
