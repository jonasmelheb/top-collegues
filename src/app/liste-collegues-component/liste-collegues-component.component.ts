import { Component, OnInit } from '@angular/core';
import {Collegue, mockCollegues} from '../models';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {

  collegues: Collegue[] = [];

  constructor() { }

  ngOnInit(): void {
    this.collegues = mockCollegues;
  }
}
