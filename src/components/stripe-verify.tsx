"server-only";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { StripeVerifyButton } from "./stripe-verify-button";
import { getQueryClient, trpc } from "@/trpc/server";

export const StripeVerify = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.tenants.getCurrentTenant.queryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StripeVerifyButton />
    </HydrationBoundary>
  );
};
