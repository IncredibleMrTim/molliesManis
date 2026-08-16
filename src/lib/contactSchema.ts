import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().min(1, "Please enter your email address.").email("Please enter a valid email address."),
  message: z.string().trim().min(1, "Please enter a message."),
});
