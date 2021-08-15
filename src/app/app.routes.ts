import {Routes} from "@angular/router";
import { AccueilComponent } from "./resources/accueil-component/accueil.component";
import { NouveauCollegueReactiveFormComponent } from "./resources/nouveau-collegue-reactive-form/nouveau-collegue-reactive-form.component";
import {NouveauCollegueTemplateFormComponent} from "./resources/nouveau-collegue-template-form/nouveau-collegue-template-form.component";
import {ViewCollegueComponent} from "./resources/view-collegue/view-collegue.component";

export const ROUTES: Routes = [
  { path: 'collegues', component: AccueilComponent },
  { path: 'reactive-from', component: NouveauCollegueReactiveFormComponent },
  { path: 'template-form', component: NouveauCollegueTemplateFormComponent },
  { path: 'collegues/:pseudo', component: ViewCollegueComponent },
  { path: '', pathMatch: 'full', redirectTo: '/collegues' },
]
