import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, role, city, source } = body;

    // Baserow Configuration
    const BASEROW_TOKEN = "y81TImlm7Scaq0zSiQdDd3GEgbtSkkm3";
    const TABLE_ID = "819666";

    const response = await fetch(
      `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`,
      {
        method: "POST",
        headers: {
          Authorization: `Token ${BASEROW_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Phone: phone,
          Email: email,
          Role: role,
          City: city,
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Baserow Error:", errorData);
      return NextResponse.json(
        { error: "Error submitting to Baserow", details: errorData },
        { status: response.status },
      );
    }

    // Send Email if source is book-download
    // if (source === "book-download") {
    //   try {
    //     const transporter = nodemailer.createTransport({
    //       host: process.env.SMTP_HOST,
    //       port: Number(process.env.SMTP_PORT),
    //       secure: true,
    //       auth: {
    //         user: process.env.SMTP_USER,
    //         pass: process.env.SMTP_PASS,
    //       },
    //     });

    //     const bookUrl =
    //       "https://drive.google.com/file/d/1Keu9drsekf4pGJiT7SO5ibuybY5Lv6fW/view?usp=sharing";

    //     await transporter.sendMail({
    //       from: `"Condaty" <onboarding@resend.dev>`,
    //       to: email,
    //       subject: "Aquí tienes tus Plantillas de Cobranza - Condaty",
    //       html: `
    //         <div style="font-family: Arial, sans-serif; color: #333;">
    //           <h2>¡Hola ${name}!</h2>
    //           <p>Gracias por tu interés en mejorar la gestión de tu condominio.</p>
    //           <p>Aquí tienes el enlace para descargar las <strong>3 Plantillas de Cobranza Efectivas</strong>:</p>
    //           <p>
    //             <a href="${bookUrl}" style="background-color: #00e38e; color: #191919; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Descargar Plantillas</a>
    //           </p>
    //           <p>Si el botón no funciona, puedes copiar y pegar este enlace en tu navegador:</p>
    //           <p><a href="${bookUrl}">${bookUrl}</a></p>
    //           <br/>
    //           <p>Esperamos que estas herramientas te sean de gran utilidad.</p>
    //           <p>Saludos,<br/>El equipo de Condaty</p>
    //         </div>
    //       `,
    //     });
    //     console.log("Email sent successfully to:", email);
    //   } catch (emailError) {
    //     console.error("Error sending email:", emailError);
    //     // We log the error but don't fail the request since Baserow save was successful
    //   }
    // }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
