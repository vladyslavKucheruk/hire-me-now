import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "@/app/next-app";

const app = express();
const PORT = process.env.PORT || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Payload initialized ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info("Next.js is ready");

    app.listen(PORT, async () => {
      payload.logger.info(
        `Server is ready on ${process.env.NEXT_PUBLIC_APP_URL || `http://localhost:${PORT}`}`
      );
    });
  });
};

start();
