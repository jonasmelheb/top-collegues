import {Injectable} from '@angular/core';
import {Avis, Collegue, Vote} from "../models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  listerCollegues(): Promise<Collegue[]> {
    return fetch('https://formation-angular-collegues.herokuapp.com/collegues')
      .then(response => response.json());
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Promise<Response> {
    let vote: Vote = {
      pseudo: collegue.pseudo,
      avis,
    }
    return fetch('https://formation-angular-collegues.herokuapp.com/votes', {
      method: 'post',
      body: JSON.stringify(vote),
      headers: {'Content-Type': 'application/json'}
    })
  }
}
