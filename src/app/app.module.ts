import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponent } from './liste-collegues-component/liste-collegues.component';
import { AccueilComponent } from './accueil-component/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { SColorDirective } from './directives/s-color.directive';
import { LoopDirective } from './directives/loop.directive';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import {HttpClientModule} from "@angular/common/http";
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';
import { PseudoValidatorDirective } from './validators/pseudo-validator.directive';
import { NouveauCollegueReactiveFormComponent } from './nouveau-collegue-reactive-form/nouveau-collegue-reactive-form.component';

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
