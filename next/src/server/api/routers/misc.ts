import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const miscRouter = createTRPCRouter({
  ping: publicProcedure.query(() => {
    return "pong";
  }),
});
