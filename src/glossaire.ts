import type { Glossaire } from "./types";
export const glossaire = [
  {
    title: "Keycloak",
    link: "https://fr.wikipedia.org/wiki/Keycloak",
    desc: `Keycloak est un serveur d'authentification et d'autorisation open-source. 
    Il permet aux développeurs de sécuriser leurs applications en gérant l'authentification et l'autorisation des utilisateurs. 
    Il prend en charge plusieurs protocoles d'authentification tels que OAuth2, SAML et OpenID Connect. 
    Il permet également de gérer les utilisateurs et les rôles à travers son interface`,
  },
  {
    title: "OTP",
    link: "https://fr.wikipedia.org/wiki/Mot_de_passe_%C3%A0_usage_unique",
    desc: `signifie « One–Time Password » en anglais, est un « Mot de passe à usage unique » comme son nom l'indique en français. 
    Il est généré pour être utilisé et valable lors d’une unique session.`,
  },
  {
    title: "Matrix",
    link: "https://fr.wikipedia.org/wiki/Matrix_(protocole)",
    desc: `Matrix est un protocole de communication décentralisé et ouvert qui permet à différentes applications de discuter ensemble. 
    Le logiciel de messagerie des agents publics Tchap est basé sur Matrix.`,
  },
  {
    title: "France Connect",
    link: "https://fr.wikipedia.org/wiki/FranceConnect",
    desc: `Service d'identification et d'authentification mettant en relation différents fournisseurs d'identité pour accéder à différents fournisseurs de services.`,
  },
  {
    title: "Authentifier vs Identifier",
    link: "https://fr.wikipedia.org/wiki/Authentification_forte#Notes_sur_l'authentification_et_l'identification",
    desc: `S'identifier c'est déclarer son identité. S'authentifier c'est apporter la preuve de ce qu'on déclare.`,
  },
  {
    title: "OpenID",
    link: "https://fr.wikipedia.org/wiki/OpenID",
    desc: `OpenID est un standard de communication qui permet à un utilisateur de s’authentifier auprès de plusieurs sites. 
    Basé sur l'échange d'une preuve d'authenticité (un secret partagé) entre le serveur d'authentification (fournisseur d'identité) et les services tiers sur lesquels l'utilisateur souhaite se connecter.`,
  },
  {
    title: "Fournisseur de service",
    link: "https://fr.wikipedia.org/wiki/OpenID#Acteurs",
    desc: `Le forunisseur de service est l'application qui dexige une preuve de l’identité de l’utilisateur via un système fédéré d'authentification. Il délègue ainsi cette tâche à ce dernier.`,
  },
  {
    title: "Authentification forte",
    link: "https://fr.wikipedia.org/wiki/Authentification_forte",
    desc: `L'authentification forte repose sur des méthodes considérées comme plus sûres que la méthode mémorielle : mot de passe à usage unique, certificat numérique ou données biométriques.`,
  },
  {
    title: "Double authentification",
    link: "https://fr.wikipedia.org/wiki/Double_authentification",
    desc: `Également appelée authentification à deux facteurs (2FA en anglais), cette authentification permet de sécuriser l'accès à un service en complétant l'accès par mot de passe traditionnel par une méthode dite d'authentification forte.`,
  },
  {
    title: "TOTP",
    link: "https://fr.wikipedia.org/wiki/Mot_de_passe_%C3%A0_usage_unique_bas%C3%A9_sur_le_temps",
    desc: `Time based One Time Password en anglais ou mot de passe à usage unique basé sur le temps en français, 
    permet une authentification forte. 
    En se basant sur un secret partagé entre le serveur et l'utilisateur (généralement via une application mobile), un algorithme permet de demander un mot de passe unique en fonction du moment de la demande.
    `,
  },
] as Glossaire;
