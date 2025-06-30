import { clerkClient } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

import { checkRole } from "@/lib/roles";

import { removeRole, setRole } from "@/actions/role-action";

export default async function AdminDashboard() {
  if (!checkRole("admin")) {
    redirect("/");
  }

  const client = await clerkClient();

  const users = (await client.users.getUserList()).data;

  return (
    <>
      <p>
        This is the protected admin dashboard restricted to users with the
        `admin` role.
      </p>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              {user.firstName} {user.lastName}
            </div>

            <div>
              {
                user.emailAddresses.find(
                  (email) => email.id === user.primaryEmailAddressId
                )?.emailAddress
              }
            </div>

            <div>{user.publicMetadata.role as string}</div>

            <form action={setRole}>
              <input type="hidden" value={user.id} name="id" />
              <input type="hidden" value="admin" name="role" />
              <button type="submit">Make Admin</button>
            </form>

            <form action={removeRole}>
              <input type="hidden" value={user.id} name="id" />
              <button type="submit">Remove Role</button>
            </form>
          </div>
        );
      })}
    </>
  );
}
