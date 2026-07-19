import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please fill in name, email, subject, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  const formspreeId = process.env.FORMSPREE_FORM_ID;

  if (!web3Key && !formspreeId) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured. Set WEB3FORMS_ACCESS_KEY or FORMSPREE_FORM_ID in your environment, or email diptanshubanerjee123@gmail.com directly.",
      },
      { status: 503 },
    );
  }

  try {
    if (web3Key) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3Key,
          name,
          email,
          subject,
          message,
          from_name: "Portfolio Contact",
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || data.success === false) {
        return NextResponse.json(
          {
            error:
              data.message ??
              "Failed to send via Web3Forms. Try emailing directly.",
          },
          { status: 502 },
        );
      }

      return NextResponse.json({
        message: "Message sent — I’ll get back to you soon.",
      });
    }

    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to send via Formspree. Try emailing directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Message sent — I’ll get back to you soon.",
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to reach the form provider. Please try again or email diptanshubanerjee123@gmail.com.",
      },
      { status: 502 },
    );
  }
}
