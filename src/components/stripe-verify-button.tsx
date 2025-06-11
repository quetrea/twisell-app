"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const StripeVerifyButton = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.tenants.getCurrentTenant.queryOptions());
  return (
    <>
      {data?.stripeDetailsSubmitted && (
        <Link href="/stripe-verify" className="verifyStripe">
          <Button>Verify account</Button>
        </Link>
      )}
    </>
  );
};
