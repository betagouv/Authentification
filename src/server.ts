import express, { Application } from "express";
import session from "express-session";
import helmet from "helmet";
import path from "path";
import demoRouter from "./routes";
import favicon from "serve-favicon";
import { getUserEmail } from "./controllers/demo";
import { sessionSecret } from "./config/config";

const server = () => {
  const app: Application = express();

  app.use(
    favicon(path.join(__dirname, "../static", "images", "favicon-32x32.png"))
  );
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");
  app.use(express.static("static"));

  app.use(
    "/dsfr",
    express.static(path.join(__dirname, "../node_modules/@gouvfr/dsfr/dist"))
  );

  app.use(
    session({
      secret: sessionSecret,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );

  app.use(getUserEmail);

  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );

  app.set("trust proxy", 1);

  app.use(demoRouter);

  return app;
};

export default server;
