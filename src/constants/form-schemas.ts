import { z } from "zod";

// Teacher form schema untuk form add dan edit guru
export const teacher_form_schema = z.object({
  name: z.string().min(2, {
    message: "Nama lengkap harus terdiri dari minimal 2 karakter.",
  }),
  email: z.string().email({
    message: "Format alamat email tidak valid. Harap periksa kembali.",
  }),
  position: z.string().optional(),
  subject: z.string().optional(),
  experience_years: z.number().min(0).optional(),
  education: z.string().optional(),
  specialization: z.array(z.string()),
  image_url: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message:
        "Format URL tidak valid. Harap masukkan URL yang benar atau kosongkan field ini.",
    }),
  bio: z.string().optional(),
  achievements: z.array(z.string()),
});

// Type inference untuk teacher form data
export type TeacherFormData = z.infer<typeof teacher_form_schema>;
