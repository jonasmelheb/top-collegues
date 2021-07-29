import {Injectable} from '@angular/core';
import {Avis, Collegue, Vote, Votes} from "../models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subjectCurrentVotes = new Subject<Votes>();

  constructor(private http: HttpClient) {
  }

  get currentVotes(): Observable<Votes> {
    return this.subjectCurrentVotes.asObservable();
  }

  publierVotesCourant(voteChoisi: Votes) {
    this.subjectCurrentVotes.next(voteChoisi);
  }


  listerCollegues(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>('https://formation-angular-collegues.herokuapp.com/collegues')
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    let vote: Vote = {
      pseudo: collegue.pseudo,
      avis
    }
    return this.http.post<Collegue>('https://formation-angular-collegues.herokuapp.com/votes', vote)
  }

  listerVotes(): Observable<Votes[]> {
    return this.http.get<Votes[]>('https://formation-angular-collegues.herokuapp.com/votes')
  }
}
