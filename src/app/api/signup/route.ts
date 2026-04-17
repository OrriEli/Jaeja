import { Resend } from "resend";

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Ógilt snið á beiðni." },
      { status: 400 },
    );
  }

  const { name, email, address, quantity } = (body ?? {}) as {
    name?: unknown;
    email?: unknown;
    address?: unknown;
    quantity?: unknown;
  };

  const qtyNum =
    typeof quantity === "number"
      ? Math.floor(quantity)
      : typeof quantity === "string"
        ? parseInt(quantity, 10)
        : NaN;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(address) ||
    !Number.isFinite(qtyNum) ||
    qtyNum < 1
  ) {
    return Response.json(
      { ok: false, error: "Vinsamlegast fylltu út alla reiti." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json(
      { ok: false, error: "Þjónninn er ekki stilltur rétt." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const toEmail = process.env.NOTIFY_EMAIL ?? "hallo@jaeja.is";
  const createdAt = new Date().toLocaleString("is-IS", {
    timeZone: "Atlantic/Reykjavik",
  });

  try {
    await resend.emails.send({
      from: "JÆJA! Skráning <onboarding@resend.dev>",
      to: toEmail,
      subject: `Ný skráning: ${name.trim()} (${qtyNum} eintök)`,
      html: `
        <h2>Ný skráning á JÆJA!</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;">Nafn</td><td>${name.trim()}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;">Netfang</td><td>${email.trim()}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;">Heimilisfang</td><td>${address.trim()}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;">Fjöldi eintaka</td><td>${qtyNum}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;">Tími</td><td>${createdAt}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("resend error", err);
    return Response.json(
      { ok: false, error: "Ekki tókst að senda tölvupóst." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
