import configPromise from "@payload-config";
import { getPayload } from "payload";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";
import { Category } from "@/payload-types";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = async ({ children }: HomeLayoutProps) => {
  const payload = await getPayload({
    config: configPromise,
  });
  // Kategoriler koleksiyonundan verileri alıyoruz.
  // Sadece üst kategorileri getiriyoruz (parent'ı olmayanlar).
  // Alt kategorileri de 1 seviye derinliğe kadar dahil ediyoruz (depth: 1).
  const data = await payload.find({
    collection: "categories",
    depth: 1, // Alt kategorileri dahil et, subcategories.[0] artık "Category" tipinde olur
    pagination: false,
    where: {
      parent: {
        exists: false, // Sadece üst kategorileri getir (parent değeri olmayanlar)
      },
    },
  });

  // Gelen veriyi formatlıyoruz:
  // Her kategoriye ait alt kategorileri de düzenliyoruz
  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // subcategories alanı depth: 1 olduğu için, gelen alt kategorileri doğru tipe çeviriyoruz (Category).
      ...(doc as Category),
      subcategories: undefined, // Alt kategorilerin alt kategorilerini temizliyoruz (daha fazla derinlik istemiyoruz)
    })),
  }));
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
