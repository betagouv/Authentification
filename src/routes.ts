import { Router } from "express";
import {
  loginController,
  callbackController,
  logoutController,
} from "./controllers/demo";
import {
  statistiquesController,
  homeController,
  ressourcesController,
  documentationController,
  glossaireController
} from "./controllers/page";

const demoRouter = Router();

demoRouter.get("/", homeController);
demoRouter.get("/login", loginController);
demoRouter.get("/cb", callbackController);
demoRouter.get("/logout", logoutController);
demoRouter.get("/ressources", ressourcesController);
demoRouter.get("/documentation", documentationController);
demoRouter.get("/statistiques", statistiquesController);
demoRouter.get("/glossaire", glossaireController)

export default demoRouter;
