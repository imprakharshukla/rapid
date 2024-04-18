import { createExpressEndpoints, initServer } from "@ts-rest/express";
import { Request, Router } from "express";

import {
  superContract
} from "@repo/contract";

import { adminOnlyMiddleware } from "./middleware/auth";
import hello from "./routes/hello";
import text from "./routes/text";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  const s = initServer();
  const helloRouter = hello(s);
  const textRouter = text(s);

  createExpressEndpoints(superContract.hello, helloRouter, app, {
    globalMiddleware: [],
  });
  createExpressEndpoints(superContract.text, textRouter, app, {
    globalMiddleware: [],
  });

  return app;
};
