import cors from "cors";
import express, {
  ErrorRequestHandler,
  Request,
  Response,
} from "express";

import routes from "../api";

export default ({ app }: { app: express.Application }) => {
  /**
   * Health Check endpoints
   */
  app.get("/status", (req, res) => {
    res.status(200).end();
  });

  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable("trust proxy");

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Transforms the raw string of req.body into json
  app.use(express.json({ limit: "50mb" }));

  // Load API routes
  const router = routes();

  // Load Trigger.dev middleware
  // app.use(createMiddleware(client));


  app.use(
    "/api",
    // Uncomment this line to enable API authentication

    // jwt({
    //   secret: env.NEXTAUTH_SECRET,
    //   algorithms: ["HS256"],
    // }),
    router,
  );

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err: any = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  /// error handlers
  app.use(((err, req, res, next) => {
    /**
     * @TODO
     */
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  }) satisfies ErrorRequestHandler);
  app.use(((err: any, req: Request, res: Response) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  }) satisfies ErrorRequestHandler);
};
