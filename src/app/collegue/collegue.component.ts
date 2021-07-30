import {Component, Input, OnInit} from '@angular/core';
import {Avis, Collegue} from "../models";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html'
})
export class CollegueComponent implements OnInit {

  @Input() collegue?: Collegue;
  err = false;

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
  }

  incrementScore(avis: Avis, collegue: Collegue) {
    if (this.collegue) {
      this.service.donnerUnAvis(collegue, avis)
        .subscribe(
          collegue => this.collegue = collegue,
          () => this.err = false
        )
    }
  }

  get desactiverJaime(): boolean {
    return this.collegue != undefined && this.collegue.score >= 1000;
  }

  get desactiverDeteste() {
    return this.collegue != undefined && this.collegue.score <= -1000;
  }
}
