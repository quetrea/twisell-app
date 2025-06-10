import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTenantUrl(
  slug: string,
  select: "isLibrary" | "default" = "default"
) {
  const isDevelopment = process.env.NODE_ENV === "development";
  const isSubdomainRoutingEnabled =
    process.env.NEXT_PUBLIC_ENABLE_SUBDOMAIN_ROUTING === "true";

  if (select === "isLibrary") {
    return `${process.env.NEXT_PUBLIC_APP_URL}`;
  }

  // In development or subdomain routing disabled mode, use normal routing
  if (isDevelopment || !isSubdomainRoutingEnabled) {
    return `${process.env.NEXT_PUBLIC_APP_URL}/tenants/${slug}`;
  }

  let protocol = "https";
  const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN!;

  if (process.env.NODE_ENV === "development") {
    protocol = "http";
  }

  // https://quetrea.twisell.com
  return `${protocol}://${slug}.${domain}`;
}

export function formatCurrencyToUSD(value: number | string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(value));
}
