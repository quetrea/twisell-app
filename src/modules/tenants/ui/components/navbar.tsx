"use client";
import { generateTenantUrl } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  slug: string;
}

export const Navbar = ({ slug }: NavbarProps) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.tenants.getOne.queryOptions({ slug }));
  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <div className="text-xl">
          <Link href={generateTenantUrl(slug)} className="flex items-center gap-2">
            {data.image?.url && (
              <Image
                src={data.image.url}
                width={32}
                height={32}
                className="rounded-full border shrink-0 size-[32px]"
                alt={slug}
              />
            )}
            {data.name}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const NavbarSkeleton = () => {
  return (
    <nav className="h-20 border-b font-medium bg-white animate-pulse">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <div />
        {/* Skeleton for checkout button */}
      </div>
    </nav>
  );
};
