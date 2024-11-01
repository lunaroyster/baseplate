import "@/styles/globals.css";

import { Lora } from "next/font/google";

import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Baseplate",
  description: "Arnav's template for new works.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lora.className}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
