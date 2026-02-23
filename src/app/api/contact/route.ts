import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, source } = body;

    if (source !== "book-download") {
      return NextResponse.json({ success: true });
    }

    if (!email || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const resendApiKey =
      process.env.RESEND_API_KEY ?? "re_Yrn6v1zp_Mv1dGgUsSH35YWSMy6UjPwmg";
    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const bookUrl =
      "https://drive.google.com/drive/folders/1HhFYl0OO7GcEQ8Qai3WoxtHrWuBOIlYl?usp=sharing";
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "hola@condaty.app";

    const html = `
        <div style="background-color:#0f0f0f;padding:32px;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
          <div style="max-width:640px;margin:0 auto;background:#151515;border:1px solid rgba(255,255,255,0.08);border-radius:20px;overflow:hidden;">
            <div style="padding:28px 28px 8px 28px;text-align:center;background:linear-gradient(180deg,#111111 0%,#151515 100%);">
              <div style="display:inline-block;background:#00e38e1f;color:#00e38e;border:1px solid #00e38e33;border-radius:999px;padding:6px 14px;font-weight:700;font-size:12px;letter-spacing:0.5px;">KIT DE COBRANZA</div>
              <h1 style="margin:18px 0 6px 0;font-size:26px;line-height:1.2;color:#ffffff;">¡Hola ${name}!</h1>
              <p style="margin:0 0 12px 0;color:#b3b3b3;font-size:14px;">Gracias por solicitar tu kit. Aquí tienes tu acceso inmediato.</p>
            </div>
            <div style="padding:24px 28px 28px 28px;">
              <div style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:18px;margin-bottom:20px;">
                <p style="margin:0 0 10px 0;color:#ffffff;font-size:15px;font-weight:700;">Incluye:</p>
                <ul style="margin:0;padding-left:18px;color:#cfcfcf;font-size:14px;line-height:1.6;">
                  <li>Aviso de Cobranza</li>
                  <li>Carta de Mora</li>
                  <li>Intimación Legal</li>
                </ul>
              </div>
              <div style="text-align:center;margin:22px 0;">
                <a href="${bookUrl}" style="display:inline-block;background:#00e38e;color:#0f0f0f;text-decoration:none;padding:12px 22px;border-radius:12px;font-weight:800;font-size:15px;">Descargar el Kit</a>
              </div>
              <p style="margin:0 0 6px 0;color:#b3b3b3;font-size:12px;">Si el botón no funciona, copia y pega este enlace en tu navegador:</p>
              <a href="${bookUrl}" style="color:#00e38e;font-size:12px;word-break:break-all;">${bookUrl}</a>
              <div style="margin-top:24px;border-top:1px solid rgba(255,255,255,0.08);padding-top:16px;text-align:center;color:#777777;font-size:12px;">
                Condaty · Recupera la mora sin perder relaciones
              </div>
            </div>
          </div>
        </div>
      `;
    const resendResponse = await resend.emails.send({
      from: `Condaty <${fromEmail}>`,
      to: email,
      subject: "Tu Kit de Cobranza está listo",
      html,
    });

    if (resendResponse.error) {
      return NextResponse.json(
        { error: "Error sending email", details: resendResponse.error },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
