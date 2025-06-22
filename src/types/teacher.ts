import {
  Teacher as PrismaTeacher,
  User as PrismaUser,
} from "@/generated/prisma";

// Use Prisma-generated types
export type Teacher = PrismaTeacher;
export type User = PrismaUser;

// Create and Update types based on Prisma schema
export interface CreateTeacherData {
  name: string;
  email: string;
  position?: string | null;
  subject?: string | null;
  experience_years?: number | null;
  education?: string | null;
  specialization: string[];
  image_url?: string | null;
  bio?: string | null;
  achievements: string[];
}

export interface UpdateTeacherData extends Partial<CreateTeacherData> {
  id: string;
}
