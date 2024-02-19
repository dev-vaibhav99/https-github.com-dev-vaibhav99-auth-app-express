import { z } from "zod";

export const registrationSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  gender: z.enum(["male", "female", "other"]),
  mobile: z
    .string()
    .regex(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/),
  password: z.string().min(8), // You can add additional password requirements here if needed
  userRole: z.enum(["admin", "user"]), // Adjust as necessary based on your user roles
  imageUrl: z.string(),
});

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(8),
});
