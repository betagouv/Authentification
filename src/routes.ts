import {Router} from "express";
import {generators, Issuer} from 'openid-client';
import {appUrl} from "./config/config";
import {getSystemErrorMap} from "util";
import {statistiquesController, fonctionnementController, homeController, ressourcesController, documentationController} from "./controllers";

const demoRouter = Router();

demoRouter.get('/', homeController);
// demoRouter.get('/login', loginController);
// demoRouter.get('/cb', callbackController);
// demoRouter.get('/logout', logoutController);
demoRouter.get('/fonctionnement', fonctionnementController)
demoRouter.get('/ressources', ressourcesController)
demoRouter.get('/documentation', documentationController)
demoRouter.get('/statistiques', statistiquesController)

export default demoRouter;
