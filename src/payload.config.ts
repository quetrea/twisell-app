// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { multiTenantPlugin } from "@payloadcms/plugin-multi-tenant";

import path from "path";
import { buildConfig } from "payload";
import { Config } from "./payload-types";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { isSuperAdmin } from "./lib/access";

import { Tags } from "./collections/Tags";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Tenants } from "./collections/Tenants";
import { Product } from "./collections/Products";
import { Categories } from "./collections/Categories";
import { Orders } from "./collections/Orders";
import { Reviews } from "./collections/Reviews";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeNavLinks: ["@/components/sidebar-directions#SidebarDirections"],
      afterNavLinks: [],
    },
  },
  collections: [
    Users,
    Media,
    Categories,
    Product,
    Tags,
    Tenants,
    Orders,
    Reviews,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    multiTenantPlugin<Config>({
      collections: {
        products: {},
        media: {},
      },
      tenantsArrayField: {
        includeDefaultField: false,
      },
      userHasAccessToAllTenants: (user) => isSuperAdmin(user),
    }),
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
