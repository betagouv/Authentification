import {RequestHandler} from "express";
import {appUrl} from "./config/config";
import {getClient} from './demoControllers'



export const homeController: RequestHandler = async (req, res) => {
    let userEmail = null;
    if (req.session.access_token) {
        const client = await getClient();
        const userinfo = await client.userinfo(req.session.access_token);
        userEmail = userinfo.preferred_username || userinfo.sub
    }

    return res.render('home', {
        loginUrl: appUrl + '/login',
        emailDefault : process.env.EMAIL_DEFAULT || "aaa.bbb@beta.gouv.fr",
        userEmail
    });
};

export const fonctionnementController: RequestHandler = async (req, res) => {

    return res.render('fonctionnement', {});
};

export const ressourcesController: RequestHandler = async (req, res) => {

    return res.render('ressources', {});
};

export const documentationController: RequestHandler = async (req, res) => {

    return res.render('documentation', {});
};

export const statistiquesController: RequestHandler = async (req, res) => {

    return res.render('statistiques', {});
};