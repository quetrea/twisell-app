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
  title: "Twisell – Effortless Digital Product Selling",
  description:
    "Twisell is a modern platform built by Furkan Mert Kübel that lets you create, manage, and sell digital products with ease. Perfect for creators, freelancers, and entrepreneurs.",
  keywords: [
    "Twisell",
    "digital products",
    "sell online",
    "creator tools",
    "next.js SaaS",
    "Payload CMS",
    "multitenant app",
    "ecommerce for digital goods",
    "furkan mert kübel",
  ],
  authors: [
    {
      name: "Furkan Mert Kübel",
      url: "https://github.com/quetrea",
    },
  ],
  metadataBase: new URL("https://twisell.store"),
  openGraph: {
    title: "Twisell – Effortless Digital Product Selling",
    description:
      "Twisell helps you build your own digital storefront. Start selling in minutes — no complex setup needed.",
    url: "https://twisell.store",
    siteName: "Twisell",
    locale: "en_US",
    type: "website",
  },
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
