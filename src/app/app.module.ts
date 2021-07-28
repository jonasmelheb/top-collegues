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
    HistoriqueVotesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
