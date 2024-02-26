import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";
import { Users } from "./src/database/collections/Users";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve(__dirname, "../../env"),
});

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users],
  routes: {
    admin: "/crm",
  },
  admin: {
    user: "users",
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
