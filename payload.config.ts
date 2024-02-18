import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [],
  routes: {
    admin: "/crm",
  },
  admin: {
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Hire Me Now",
      favicon: "/favicon.ico",
    },
  },
  rateLimit: {
    max: 1000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL || "",
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
