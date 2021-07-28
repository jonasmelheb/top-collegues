import { Component, OnInit } from '@angular/core';
import {Collegue, mockCollegues} from '../models';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html'
})
export class ListeColleguesComponentComponent implements OnInit {

  collegues: Collegue[] = [];

  constructor() { }

  ngOnInit(): void {
    this.collegues = mockCollegues;
  }
}
