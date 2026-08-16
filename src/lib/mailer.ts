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
