import nodemailer from "nodemailer";
import type { IContactFormData } from "@/types/interfaces";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getMailTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP configuration is missing required environment variables");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function sendContactNotification(formData: IContactFormData): Promise<void> {
  const contactToEmail = process.env.CONTACT_TO_EMAIL;

  if (!contactToEmail) {
    throw new Error("CONTACT_TO_EMAIL environment variable is not set");
  }

  const transport = getMailTransport();

  await transport.sendMail({
    from: `"Mollies Manis Website" <${process.env.SMTP_USER}>`,
    to: contactToEmail,
    replyTo: formData.email,
    subject: `New enquiry from ${formData.name}`,
    text: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(formData.message).replace(/\n/g, "<br />")}</p>
    `,
  });
}

export async function sendCustomerConfirmation(formData: IContactFormData): Promise<void> {
  const contactToEmail = process.env.CONTACT_TO_EMAIL;

  if (!contactToEmail) {
    throw new Error("CONTACT_TO_EMAIL environment variable is not set");
  }

  const transport = getMailTransport();
  const firstName = formData.name.trim().split(/\s+/)[0];

  await transport.sendMail({
    from: `"Mollies Manis" <${process.env.SMTP_USER}>`,
    to: formData.email,
    replyTo: contactToEmail,
    subject: "Thanks for reaching out to Mollies Manis! 💅✨",
    text: `Hi ${firstName},

Thanks so much for getting in touch! I've received your message and will be in touch soon — I can't wait to create something beautiful for you.

Here's a copy of what you sent:
"${formData.message}"

Speak soon,
Mollie 💕
Mollies Manis — Hand-painted nail art, crafted with love`,
    html: `
      <div style="background:#fce8ef;padding:32px 16px;font-family:sans-serif;">
        <div style="max-width:480px;margin:0 auto;background:#ffffff;border-radius:24px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#e91e8c,#ce93d8);padding:28px 24px;text-align:center;">
            <p style="margin:0;color:#ffffff;font-size:22px;font-weight:bold;">Mollies Manis</p>
          </div>
          <div style="padding:28px 24px;color:#5c0a2e;">
            <p style="margin:0 0 16px;font-size:16px;">Hi ${escapeHtml(firstName)},</p>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#7b3a5a;">
              Thanks so much for getting in touch! I've received your message and will
              be in touch soon — I can't wait to create something beautiful for you. 💅✨
            </p>
            <p style="margin:0 0 8px;font-size:13px;font-weight:bold;color:#c2185b;">
              Here's a copy of what you sent:
            </p>
            <p style="margin:0 0 20px;padding:14px 16px;background:#fce8ef;border-left:3px solid #e91e8c;border-radius:12px;font-size:14px;line-height:1.6;color:#7b3a5a;">
              ${escapeHtml(formData.message).replace(/\n/g, "<br />")}
            </p>
            <p style="margin:0;font-size:15px;color:#7b3a5a;">
              Speak soon,<br />Mollie 💕
            </p>
          </div>
        </div>
      </div>
    `,
  });
}
