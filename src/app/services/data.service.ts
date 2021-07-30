import {Injectable} from '@angular/core';
import {Avis, Collegue, Vote, Votes} from "../models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {tap} from "rxjs/operators";

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

  publierVotesCourant(vote: Votes) {
    this.subjectCurrentVotes.next(vote);
  }


  listerCollegues(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>(environment.urlResourceCollegue)
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    let vote: Vote = {
      pseudo: collegue.pseudo,
      avis
    }
    return this.http.post<Collegue>(environment.urlResourceVote, vote)
      .pipe(
        tap(colApresVote => {
            this.publierVotesCourant({
              score: colApresVote.score,
              collegue: colApresVote,
              avis
            });
          }
        ));

  }

  listerVotes(): Observable<Votes[]> {
    return this.http.get<Votes[]>(environment.urlResourceVote)
  }
}
