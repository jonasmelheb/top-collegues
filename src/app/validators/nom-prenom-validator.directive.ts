import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appNomPrenomValidator]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: NomPrenomValidatorDirective,
    multi: true
  }]
})
export class NomPrenomValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    // TODO écrire la règle de validation
    // En cas de règle respecté (nom != prenom), retourner null
    // Sinon retourner l'objet { nomPrenomIdentique : true }
    if (control.value.nom != control.value.prenom) {
      return null;
    }
    return {
      'nomPrenomIdentique': true
    }

  }

}