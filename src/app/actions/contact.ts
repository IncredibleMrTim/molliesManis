"use server";

import { contactFormSchema } from "@/lib/contactSchema";
import { sendContactNotification } from "@/lib/mailer";
import type { IContactActionResult, IContactFormData } from "@/types/interfaces";

export async function submitContactForm(
  formData: IContactFormData,
): Promise<IContactActionResult> {
  const parseResult = contactFormSchema.safeParse(formData);
  if (!parseResult.success) {
    return { success: false, error: parseResult.error.issues[0].message };
  }

  try {
    await sendContactNotification(parseResult.data);
    return { success: true };
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return { success: false, error: "Something went wrong sending your message. Please try again." };
  }
}
