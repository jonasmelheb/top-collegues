import {Component, Input, OnInit} from '@angular/core';
import {Collegue} from "../models";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input()
  collegue: Collegue = {
    pseudo: "Younes",
    score: 500,
    photoUrl: "https://randomuser.me/api/portraits/men/75.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }
}
