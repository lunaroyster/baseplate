"use client";
import posthog from "posthog-js";
import { PostHogProvider as _PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";
import { env } from "@/env";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!env.NEXT_PUBLIC_POSTHOG_KEY) {
      return;
    }

    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      capture_pageleave: true, // Enable pageleave capture
    });
  }, []);

  if (!env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>;
  }

  return <_PostHogProvider client={posthog}>{children}</_PostHogProvider>;
}
