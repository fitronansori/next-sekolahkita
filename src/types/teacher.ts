import {
  Teacher as PrismaTeacher,
  User as PrismaUser,
} from "@/generated/prisma";

// Use Prisma-generated types
export type Teacher = PrismaTeacher;
export type User = PrismaUser;

// Pagination types
export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    current_page: number;
    total_pages: number;
    total_items: number;
    items_per_page: number;
    has_next: boolean;
    has_prev: boolean;
  };
}

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
