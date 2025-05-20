import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.find({
      collection: "categories",
      depth: 1, // Alt kategorileri dahil et, subcategories.[0] artık "Category" tipinde olur
      pagination: false,
      where: {
        parent: {
          exists: false, // Sadece üst kategorileri getir (parent değeri olmayanlar)
        },
      },
      sort: "name",
    });

    const formattedData = data.docs.map((doc) => ({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
        // subcategories alanı depth: 1 olduğu için, gelen alt kategorileri doğru tipe çeviriyoruz (Category).
        ...(doc as Category),
      })),
    }));

    return formattedData;
  }),
});
