import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email(),
  address: z.string(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
