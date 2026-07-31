import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/content";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  business?: string;
  phone?: string;
  message?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; humans leave them empty.
  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const business = body.business?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please email us directly." },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Webworks Collective <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const subject = business
    ? `New inquiry from ${name} (${business})`
    : `New inquiry from ${name}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    business ? `Business: ${business}` : null,
    phone ? `Phone: ${phone}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #0f172a;">
      <h2 style="margin: 0 0 16px;">New website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      ${business ? `<p><strong>Business:</strong> ${escapeHtml(business)}</p>` : ""}
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
      <p style="margin-top: 20px;"><strong>Message</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      const detail =
        typeof error === "object" && error && "message" in error
          ? String((error as { message?: string }).message)
          : "Could not send your message.";

      // Surface Resend's message so misconfig (wrong recipient / unverified domain) is obvious.
      return NextResponse.json(
        {
          error: detail,
          code:
            typeof error === "object" && error && "name" in error
              ? String((error as { name?: string }).name)
              : undefined,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    console.error("Contact API error:", error);
    const detail =
      error instanceof Error ? error.message : "Could not send your message.";
    return NextResponse.json(
      { error: `${detail} Please try again or email us directly.` },
      { status: 500 }
    );
  }
}
