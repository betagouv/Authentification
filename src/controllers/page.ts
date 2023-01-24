import { RequestHandler, Request, Response } from "express";
import { appUrl } from "../config/config";
import { glossaire } from "../glossaire";

global.loginUrl = appUrl + "/login";

export const homeController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  return res.render("home", {
    emailDefault: process.env.EMAIL_DEFAULT || "aaa.bbb@beta.gouv.fr",
  });
};

export const ressourcesController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  return res.render("ressources", {});
};

export const documentationController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  return res.render("documentation", {});
};

export const statistiquesController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  return res.render("statistiques", {});
};

export const glossaireController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  return res.render("glossaire", { glossaire });
};
