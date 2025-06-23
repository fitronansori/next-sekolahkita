"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

import { CreateTeacherData, UpdateTeacherData } from "@/types/teacher";

export async function createTeacher(data: CreateTeacherData) {
  try {
    const teacher = await prisma.teacher.create({
      data: {
        name: data.name,
        email: data.email,
        position: data.position || null,
        subject: data.subject || null,
        experience_years: data.experience_years || null,
        education: data.education || null,
        specialization: data.specialization,
        image_url: data.image_url || null,
        bio: data.bio || null,
        achievements: data.achievements,
      },
    });
    revalidatePath("/dashboard/teachers");
    return { success: true, data: teacher };
  } catch (error) {
    console.error("Error creating teacher:", error);
    return {
      success: false,
      error: "Terjadi kesalahan saat menyimpan data guru. Silakan coba lagi.",
    };
  }
}

export async function updateTeacher(data: UpdateTeacherData) {
  try {
    const { id, ...updateData } = data;
    const teacher = await prisma.teacher.update({
      where: {
        id,
      },
      data: {
        ...updateData,
        updated_at: new Date(),
      },
    });

    revalidatePath("/dashboard/teachers");
    return { success: true, data: teacher };
  } catch (error) {
    console.error("Error updating teacher:", error);
    return {
      success: false,
      error: "Terjadi kesalahan saat memperbarui data guru. Silakan coba lagi.",
    };
  }
}

export async function deleteTeacher(id: string) {
  try {
    await prisma.teacher.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/teachers");
    return {
      success: true,
      message: "Data guru telah berhasil dihapus dari sistem",
    };
  } catch (error) {
    console.error("Error deleting teacher:", error);
    return {
      success: false,
      error: "Terjadi kesalahan saat menghapus data guru. Silakan coba lagi.",
    };
  }
}
