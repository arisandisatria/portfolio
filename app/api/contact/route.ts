import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "All fields must be filled!",
        },
        { status: 400 },
      );
    }

    console.log("=== PESAN BARU DARI PORTOFOLIO ===");
    console.log(`Pengirim: ${name} (${email})`);
    console.log(`Pesan: ${message}`);
    console.log("==================================");

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "arisandisatria541@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
      <h2>You've got a new message from your portfolio!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 12px; border-left: 4px solid #ff6b6b; background: #f1f5f9; white-space: pre-wrap;">
          ${message}
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        message: "Message successfully processed on server!",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "An error occurred on the server.",
      },
      {
        status: 500,
      },
    );
  }
}
