"use server";

import { clerkClient } from "@clerk/nextjs/server";

import { revalidatePath } from "next/cache";

import { checkRole } from "@/lib/roles";

export async function setRole(formData: FormData) {
  const client = await clerkClient();

  // Check that the user trying to set the role is an admin
  if (!checkRole("admin")) {
    throw new Error("You do not have permission to set roles.");
  }

  try {
    await client.users.updateUserMetadata(formData.get("id") as string, {
      publicMetadata: { role: formData.get("role") },
    });

    revalidatePath("/dashboard");
  } catch (err) {
    throw new Error(`Failed to set role: ${err}`);
  }
}

export async function removeRole(formData: FormData) {
  const client = await clerkClient();

  try {
    await client.users.updateUserMetadata(formData.get("id") as string, {
      publicMetadata: { role: null },
    });

    revalidatePath("/dashboard");
  } catch (err) {
    throw new Error(`Failed to remove role: ${err}`);
  }
}
