import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvisComponent } from './resources/avis/avis.component';
import { CollegueComponent } from './resources/collegue/collegue.component';
import { ListeColleguesComponent } from './resources/liste-collegues-component/liste-collegues.component';
import { AccueilComponent } from './resources/accueil-component/accueil.component';
import { ScorePipe } from './Common/pipes/score.pipe';
import { SColorDirective } from './Common/directives/s-color.directive';
import { LoopDirective } from './Common/directives/loop.directive';
import { HistoriqueVotesComponent } from './resources/historique-votes/historique-votes.component';
import {HttpClientModule} from "@angular/common/http";
import { NouveauCollegueTemplateFormComponent } from './resources/nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NomPrenomValidatorDirective } from './Common/validators/nom-prenom-validator.directive';
import { PseudoValidatorDirective } from './Common/validators/pseudo-validator.directive';
import { NouveauCollegueReactiveFormComponent } from './resources/nouveau-collegue-reactive-form/nouveau-collegue-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    SColorDirective,
    LoopDirective,
    HistoriqueVotesComponent,
    NouveauCollegueTemplateFormComponent,
    NomPrenomValidatorDirective,
    PseudoValidatorDirective,
    NouveauCollegueReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
