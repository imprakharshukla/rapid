import "reflect-metadata";
import express, { Express } from "express";


import Logger from "./loaders/logger";

type Auth = {
  auth: {
    name: string;
    email: string;
    picture: string;
    sub: string;
    role: string;
    iat: number;
    exp: number;
    jti: string;
  };
};

declare global {
  namespace Express {
    interface Request extends Auth { }
  }
}

const port = process.env.PORT || 3002;

async function startServer() {
  const app = express();

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
  await require("./loaders").default({ expressApp: app });

  app
    .listen(port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${port} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
