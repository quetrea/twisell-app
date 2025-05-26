import { SearchParams } from "nuqs";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";
import { DEFAULT_LIMIT } from "@/constants";

import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { loadProductFilters } from "@/modules/products/hooks/search-params";

interface Props {
  searchParams: Promise<SearchParams>;
  params: Promise<{ slug: string }>;
}

const Page = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const filters = await loadProductFilters(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpc.products.getMany.infiniteQueryOptions({
      tenantSlug: slug,
      limit: DEFAULT_LIMIT,
      ...filters,
    })
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductListView tenantSlug={slug} narrowView/>
    </HydrationBoundary>
  );
};

export default Page;
