import { Server } from "http";
import config from "./config";
import mongoose from "mongoose";
import app from "./app";

process.on("uncaughtException error ", (error) => {
  console.log(error);
  process.exit(1);
});
let server: Server;
async function nodeApp() {
  try {
    await mongoose.connect(config.database_url as string);
    console.info(`🛢   Database is connected successfully`);
    server = app.listen(config.port, () => {
      console.info(`Application  listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("failed to connect databases");
  }
  process.on("unhandleRejection error", (error) => {
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
nodeApp();
process.on("sigternm", () => {
  console.info("sigterm is received");
  if (server) {
    server.close();
  }
});
