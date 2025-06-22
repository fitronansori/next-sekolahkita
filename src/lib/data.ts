import { cache } from "react";

import { prisma } from "./prisma";

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
    console.error("Error fetching teachers:", error);
    throw new Error("Failed to fetch teachers");
  }
});
