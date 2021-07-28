import { Component } from '@angular/core';
import {Avis} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  avisRecupere = Avis.AIMER;
}
