import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { onboarding, platform, support, comments } = body;

    // Baserow Configuration
    const BASEROW_TOKEN = "y81TImlm7Scaq0zSiQdDd3GEgbtSkkm3";
    const TABLE_ID = "820533";

    const payload = {
      "1.1 Claridad pasos activación": onboarding.clarity,
      "1.2 Utilidad capacitación": onboarding.training,
      "1.3 Apoyo oportuno": onboarding.support,
      "1.4 Facilidad residentes": onboarding.residentEase,
      "1.5 Rec. Onboarding": onboarding.recommendation,
      "2.1 Facilidad navegación admin": platform.easeOfUse,
      "2.2 Cobertura necesidades": platform.coverage,
      "2.3 Velocidad estabilidad": platform.speed,
      "2.4 Sensación control": platform.control,
      "2.5 Rec. Plataforma": platform.recommendation,
      "3.1 Rapidez solución": support.speed,
      "3.2 Atención amable": support.professionalism,
      "3.3 Acompañamiento proceso": support.accompaniment,
      "3.4 Rec. Soporte": support.recommendation,
      "5.1 Funcionalidades valiosas": comments.valuableFeatures,
      "5.2 Mejoras sugeridas": comments.improvements,
      "5.3 Comentarios adicionales": comments.additional,
    };

    const response = await fetch(
      `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`,
      {
        method: "POST",
        headers: {
          Authorization: `Token ${BASEROW_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Baserow Error (CSAT):", errorData);
      return NextResponse.json(
        { error: "Error submitting to Baserow", details: errorData },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server Error (CSAT):", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
