import { cache } from "react";

import { prisma } from "./prisma";

// Pagination interface
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

// Cache teacher data fetching to prevent duplicate requests
export const getTeachers = cache(async () => {
  try {
    const teachers = await prisma.teacher.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
    return teachers;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    throw new Error("Gagal mengambil data");
  }
});

// Paginated teacher data fetching
export const getTeachersPaginated = cache(
  async (params: PaginationParams = {}) => {
    try {
      const { page = 1, limit = 6, search = "" } = params;

      const skip = (page - 1) * limit;
      // Build where condition for search
      const where = search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" as const } },
              { email: { contains: search, mode: "insensitive" as const } },
              { position: { contains: search, mode: "insensitive" as const } },
              { subject: { contains: search, mode: "insensitive" as const } },
            ],
          }
        : {};

      // Get total count for pagination
      const total_items = await prisma.teacher.count({ where });

      // Get paginated data
      const teachers = await prisma.teacher.findMany({
        where,
        orderBy: {
          created_at: "desc",
        },
        skip,
        take: limit,
      });

      const total_pages = Math.ceil(total_items / limit);

      const response: PaginatedResponse<(typeof teachers)[0]> = {
        data: teachers,
        pagination: {
          current_page: page,
          total_pages,
          total_items,
          items_per_page: limit,
          has_next: page < total_pages,
          has_prev: page > 1,
        },
      };

      return response;
    } catch (error) {
      console.error("Gagal mengambil data dengan pagination:", error);
      throw new Error("Gagal mengambil data dengan pagination");
    }
  }
);

// Get single teacher by ID
export const getTeacherById = cache(async (id: string) => {
  try {
    const teacher = await prisma.teacher.findUnique({
      where: { id },
    });
    return teacher;
  } catch (error) {
    console.error("Gagal mengambil data guru:", error);
    throw new Error("Gagal mengambil data guru");
  }
});
