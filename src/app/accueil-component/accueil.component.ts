import {Component, OnInit} from '@angular/core';
import {Collegue} from '../models';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html'
})
export class AccueilComponent implements OnInit {
  collegues: Collegue[] = [];
  msgErr = false;

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
  }

  refresh() {
    this.service.listerCollegues()
      .subscribe(
        collegues => this.collegues = collegues,
        () => this.msgErr = true
      )
  }
}
