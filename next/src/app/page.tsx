import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const pingRes = await api.misc.ping();
  const session = await auth();

  if (session?.user) {
    void api.misc.ping.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f6fff1] to-[#f2dbba] text-black">
        <h1 className="text-4xl font-semibold">Baseplate.</h1>
      </main>
    </HydrateClient>
  );
}
