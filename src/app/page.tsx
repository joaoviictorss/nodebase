import { caller } from "@/trpc/server";

export async function Home() {
  const users = await caller.getUsers();

  return <div>{JSON.stringify(users)}</div>;
}
