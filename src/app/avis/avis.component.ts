import {Component, Input, OnInit} from '@angular/core';
import {Avis} from "../models";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Input()
  avis?: Avis

  constructor() {

  }

  ngOnInit(): void {
  }

  mettreAvis(avis: string): void {
    if (avis == "aimer") {
      this.avis = Avis.AIMER
    } else if (avis == "detester") {
      this.avis = Avis.DETESTER
    }
  }
}
