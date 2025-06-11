import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DM_Sans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const DmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Twisell App",
  description: "Created by Furkan Mert Kübel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DmSans.className} antialiased`}>
        <NuqsAdapter>
          <TRPCReactProvider>
            <Analytics />
            <SpeedInsights />
            <Toaster />
            {children}
          </TRPCReactProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
