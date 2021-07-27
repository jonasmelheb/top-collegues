export interface Collegue {
  pseudo: string;
  score: number;
  photoUrl: string;
}

export enum Avis {
  AIMER,
  DETESTER
}

export const mockCollegues: Collegue[] = [
  {pseudo: 'Younes', score: 500, photoUrl:"https://randomuser.me/api/portraits/men/75.jpg"},
  {pseudo: 'Younes1', score: 300, photoUrl:"https://randomuser.me/api/portraits/men/76.jpg"},
  {pseudo: 'Younes2', score: 400, photoUrl:"https://randomuser.me/api/portraits/men/77.jpg"},
  {pseudo: 'Younes3', score: 100, photoUrl:"https://randomuser.me/api/portraits/men/78.jpg"},
  {pseudo: 'Younes4', score: 150, photoUrl:"https://randomuser.me/api/portraits/men/79.jpg"},
  {pseudo: 'Younes5', score: 22, photoUrl:"https://randomuser.me/api/portraits/men/45.jpg"}
]
