import {Component, Input, OnInit} from '@angular/core';
import {Collegue} from '../models';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html'
})
export class ListeColleguesComponent implements OnInit {

  @Input() collegues: Collegue[] = [];
  msgErr = false;

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.listerCollegues()
      .then(collegues => this.collegues = collegues)
      .catch(() => this.msgErr = true)
  }
}
