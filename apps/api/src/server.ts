import { ApiApplication } from "./app";

export function startServer(): ApiApplication {
  const app = new ApiApplication();
  const { port, host, env } = app.container.config;
  const { logger } = app.container;

  const server = app.server.listen(port, host, () => {
    logger.info(`K.I.N.G.S. API Server running successfully`, {
      environment: env,
      host,
      port,
      healthEndpoint: `http://${host}:${port}/health`,
      versionEndpoint: `http://${host}:${port}/version`,
      docsEndpoint: `http://${host}:${port}/api/v1/docs`,
    });
  });

  const shutdown = (signal: string) => {
    logger.info(`Received ${signal}. Gracefully closing HTTP API server...`);
    server.close(() => {
      logger.info("HTTP server closed. Exiting process.");
      process.exit(0);
    });

    setTimeout(() => {
      logger.error("Forced process exit after graceful shutdown timeout.");
      process.exit(1);
    }, 10000).unref();
  };

  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));

  process.on("uncaughtException", (err) => {
    logger.error("Fatal Uncaught Exception", { error: err.message, stack: err.stack });
    process.exit(1);
  });

  process.on("unhandledRejection", (reason) => {
    logger.error("Fatal Unhandled Promise Rejection", { reason });
  });

  return app;
}
