"use client";
import { useParams } from "next/navigation";
import { Category } from "@/payload-types";
import Link from "next/link";
import { CategoriesGetManyOutput } from "@/modules/categories/types";
import { cn } from "@/lib/utils";

interface Props {
  category: CategoriesGetManyOutput[1];
  isOpen: boolean;
  position: {
    top: number;
    left: number;
  };
}

export const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
  const params = useParams();
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";

  const subCategoryParam = params.subcategory as string | undefined;
  const isActiveSubCategory = subCategoryParam;

  return (
    <div
      className="fixed z-100"
      style={{ top: position.top, left: position.left }}
    >
      {/* Invisible bridge to maintain hover */}
      <div className="h-3 w-60" />
      <div
        style={{ backgroundColor }}
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px] "
      >
        <div>
          {category.subcategories.map((subcategory: Category) => (
            <Link
              href={`/${category.slug}/${subcategory.slug}`}
              key={subcategory.slug}
              className={cn(
                "w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center hover:underline font-medium group",
                isActiveSubCategory &&
                  subcategory.slug === subCategoryParam &&
                  "bg-black text-white "
              )}
            >
              {subcategory.name}
              {subcategory.slug === subCategoryParam && (
                <p className="text-xs rounded-xl px-1 py-0.5 border bg-white text-black border-white ">
                  Current
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
