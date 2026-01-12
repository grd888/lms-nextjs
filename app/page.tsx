import { ThemeToggle } from "@/components/ui/theme-toggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
      <h1 className="text-2xl text-red-500">Hello World</h1>
      {session?.user ? (
        <p>Logged in as {session.user.name}</p>
      ) : (
        <p>Not logged in</p>
      )}
      <ThemeToggle />
    </div>
  );
}
