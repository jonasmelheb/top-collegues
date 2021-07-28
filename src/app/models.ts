export interface Collegue {
  pseudo: string;
  nom: string;
  prenom: string;
  photo: string;
  score: number;
}

export enum Avis {
  AIMER,
  DETESTER
}

export interface Vote {
  pseudo: string;
  avis: Avis;
}

