import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Vote, Votes} from "../models";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html'
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() votes: Votes[] = [];
  msgErr = false;

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.currentVotes.subscribe(votes =>this.votes.unshift(votes));
    this.service.listerVotes()
      .subscribe(
        votes => this.votes = votes,
        err => this.msgErr = true
      )
  }

  removeElement(indexVoteASupprimer: number) {
    this.votes.splice(indexVoteASupprimer, 1);
  }

}
