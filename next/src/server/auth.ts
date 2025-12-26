import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { cache } from "react";
import { headers } from "next/headers";
import { db } from "./db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
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
