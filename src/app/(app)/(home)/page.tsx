import type { SearchParams } from "nuqs/server";

import { trpc, getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { loadProductFilters } from "@/modules/products/hooks/search-params";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";

interface Props {
  searchParams: Promise<SearchParams>;
}

const Page = async ({ searchParams }: Props) => {
  const filters = await loadProductFilters(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.products.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductListView />
    </HydrationBoundary>
  );
};

// http://localhost:3000/fitness-health/mental-health
// http://localhost:3000/[category]/[subcategory]

export default Page;
