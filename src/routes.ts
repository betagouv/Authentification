import {Router} from "express";
import {loginController, callbackController, logoutController} from "./controllers/demo";
import {statistiquesController, fonctionnementController, homeController, ressourcesController, documentationController} from './controllers/page'

const demoRouter = Router();

demoRouter.get('/', homeController);
demoRouter.get('/login', loginController);
demoRouter.get('/cb', callbackController);
demoRouter.get('/logout', logoutController);
demoRouter.get('/fonctionnement', fonctionnementController)
demoRouter.get('/ressources', ressourcesController)
demoRouter.get('/documentation', documentationController)
demoRouter.get('/statistiques', statistiquesController)

export default demoRouter;
