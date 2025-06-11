"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";

export const StripeVerifyButton = () => {
  const trpc = useTRPC();

  const { data: tenant, isLoading } = useQuery({
    ...trpc.tenants.getCurrentTenant.queryOptions(),
  });

  if (isLoading || !tenant) return null;

  if (tenant.stripeDetailsSubmitted) return null;
  
  return (
    <Suspense fallback={<StripeVerifyButtonSkeleton />}>
      <Link href="/stripe-verify">
        <Button>Verify account</Button>
      </Link>
    </Suspense>
  );
};

export const StripeVerifyButtonSkeleton = () => {
  return (
    <Link href="/stripe-verify">
      <Button>Verify account</Button>
    </Link>
  );
};
