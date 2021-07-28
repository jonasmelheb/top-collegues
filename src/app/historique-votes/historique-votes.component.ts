import {Component, Input, OnInit} from '@angular/core';
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
    this.service.listerVotes()
      .then(votes => this.votes = votes)
      .catch(() => this.msgErr = true)
  }

}
