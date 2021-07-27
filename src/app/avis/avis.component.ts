import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Avis} from "../models";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() avis = new EventEmitter<Avis>();

  @Input() desactiveJaime = false;
  @Input() desactiveDeteste = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  aimerCollegue() {
    this.avis.emit(Avis.AIMER);
  }

  detesterCollegue() {
    this.avis.emit(Avis.DETESTER);
  }
}
