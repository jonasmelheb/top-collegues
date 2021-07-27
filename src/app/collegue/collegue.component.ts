import {Component, Input, OnInit} from '@angular/core';
import {Avis, Collegue} from "../models";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue = {
    pseudo: "Younes",
    score: 999,
    photoUrl: "https://randomuser.me/api/portraits/men/75.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

  incrementScore(avis: Avis) {
    avis == Avis.AIMER ? this.collegue.score++ : this.collegue.score--
  }
}
