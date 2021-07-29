export interface Collegue {
  pseudo: string;
  nom: string;
  prenom: string;
  photo: string;
  score: number;
}

export enum Avis {
  AIMER='AIMER',
  DETESTER='DETESTER'
}

export interface Vote {
  pseudo: string;
  avis: Avis;
}

export interface Votes {
  collegue: Collegue;
  avis: Avis;
  score: number;
}
