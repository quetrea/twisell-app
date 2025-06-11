"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const StripeVerifyButton = () => {
  const trpc = useTRPC();

  const { data: tenant, isLoading } = useQuery({
    ...trpc.tenants.getCurrentTenant.queryOptions(),
  });

  if (isLoading || !tenant) return null;

  if (tenant.stripeDetailsSubmitted) return null;
  return (
    <Link href="/stripe-verify">
      <Button>Verify account</Button>
    </Link>
  );
};
