import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { PrismaClient } from "@prisma/client";
import { cache } from "react";
import { headers } from "next/headers";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {},
});

/**
 * Gets the session, extends session expiry
 *
 * Since this relies on Set-Cookie, can only be used
 * in server actions and route handlers.
 * Not in server components.
 */
export const getSession = cache(async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
});

/**
 * Gets the session, does not extend session expiry
 *
 * Will not extend session. For use in server components.
 */
export const getSessionNoRefresh = cache(async () => {
  return await auth.api.getSession({
    headers: await headers(),
    query: { disableRefresh: true },
  });
});
