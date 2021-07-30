import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Avis} from "../../models";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html'
})
export class AvisComponent {

  // <app-avis (avis)="???"></app-avis>
  @Output() avis = new EventEmitter<Avis>();

  // <app-avis [desactiveJaime]="true"></app-avis>
  @Input() desactiveJaime = false;

  // <app-avis [desactiveDeteste]="false"></app-avis>
  @Input() desactiveDeteste = false;

  aimer() {
    this.avis.emit(Avis.AIMER);
  }

  detester() {
    this.avis.emit(Avis.DETESTER);
  }
}
