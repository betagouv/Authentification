declare global {
  var loginUrl: string;
  var userEmail: string | null;
}

export type GlossaireElement = {
  title: string;
  desc: string;
  link: string;
};

export type Glossaire = GlossaireElement[];

export {};
