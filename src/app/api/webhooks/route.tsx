import { verifyWebhook } from "@clerk/nextjs/webhooks";

import { NextRequest } from "next/server";

import { prisma } from "@/lib/prisma";

interface ClerkUser {
  id: string;
  email_addresses: Array<{
    email_address: string;
    id: string;
  }>;
  first_name: string | null;
  last_name: string | null;
  username: string | null;
  image_url: string | null;
  phone_numbers: Array<{
    phone_number: string;
    id: string;
  }>;
  public_metadata: Record<string, unknown>;
  private_metadata: Record<string, unknown>;
  unsafe_metadata: Record<string, unknown>;
  created_at: number;
  updated_at: number;
}

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    const eventType = evt.type;
    const clerkUser = evt.data as ClerkUser;

    console.log(
      `Received webhook with ID ${clerkUser.id} and event type of ${eventType}`
    );

    switch (eventType) {
      case "user.created":
        await handleUserCreated(clerkUser);
        break;
      case "user.updated":
        await handleUserUpdated(clerkUser);
        break;
      case "user.deleted":
        await handleUserDeleted(clerkUser);
        break;
      default:
        console.log(`Unhandled event type: ${eventType}`);
    }

    return new Response("Webhook processed successfully", { status: 200 });
  } catch (err) {
    console.error("Error processing webhook:", err);
    return new Response("Error processing webhook", {
      status: 400,
      statusText: err instanceof Error ? err.message : "Unknown error",
    });
  }
}

async function handleUserCreated(clerkUser: ClerkUser) {
  try {
    const primary_email = clerkUser.email_addresses.find(
      (email) => email.id === clerkUser.email_addresses[0]?.id
    );

    const primary_phone = clerkUser.phone_numbers.find(
      (phone) => phone.id === clerkUser.phone_numbers[0]?.id
    );

    const user = await prisma.user.create({
      data: {
        clerk_id: clerkUser.id,
        email: primary_email?.email_address || "",
        first_name: clerkUser.first_name,
        last_name: clerkUser.last_name,
        username: clerkUser.username,
        image_url: clerkUser.image_url,
        phone_number: primary_phone?.phone_number,
        role: (clerkUser.public_metadata?.role as string) || "user",
      },
    });

    console.log("User created in database:", user.id);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

async function handleUserUpdated(clerkUser: ClerkUser) {
  try {
    const primary_email = clerkUser.email_addresses.find(
      (email) => email.id === clerkUser.email_addresses[0]?.id
    );

    const primary_phone = clerkUser.phone_numbers.find(
      (phone) => phone.id === clerkUser.phone_numbers[0]?.id
    );

    const user = await prisma.user.update({
      where: {
        clerk_id: clerkUser.id,
      },
      data: {
        email: primary_email?.email_address || "",
        first_name: clerkUser.first_name,
        last_name: clerkUser.last_name,
        username: clerkUser.username,
        image_url: clerkUser.image_url,
        phone_number: primary_phone?.phone_number,
        role: (clerkUser.public_metadata?.role as string) || "user",
        updated_at: new Date(),
      },
    });

    console.log("User updated in database:", user.id);
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

async function handleUserDeleted(clerkUser: ClerkUser) {
  try {
    const user = await prisma.user.delete({
      where: {
        clerk_id: clerkUser.id,
      },
    });

    console.log("User deleted from database:", user.id);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
