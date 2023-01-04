import { RequestHandler, Request, Response } from "express";
import { appUrl } from "../config/config";
import { getClient } from "./demo";

global.loginUrl = appUrl + "/login"

async function getUserEmail(req: Request) {
  if (req.session.access_token) {
    const client = await getClient();
    const userinfo = await client.userinfo(req.session.access_token);
    return userinfo.preferred_username || userinfo.sub;
  }
  return null
}

export const homeController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  
  global.userEmail = await getUserEmail(req);

  return res.render("home", {
    emailDefault: process.env.EMAIL_DEFAULT || "aaa.bbb@beta.gouv.fr",
  });
};

export const fonctionnementController: RequestHandler = async (
  req: Request,
  res: Response
) => {

  global.userEmail = await getUserEmail(req);

  return res.render("fonctionnement", {});
};

export const ressourcesController: RequestHandler = async (
  req: Request,
  res: Response
) => {

  global.userEmail = await getUserEmail(req);

  return res.render("ressources", {});
};

export const documentationController: RequestHandler = async (
  req: Request,
  res: Response
) => {

  global.userEmail = await getUserEmail(req);

  return res.render("documentation", {});
};

export const statistiquesController: RequestHandler = async (
  req: Request,
  res: Response
) => {

  global.userEmail = await getUserEmail(req);
  
  return res.render("statistiques", {});
};
