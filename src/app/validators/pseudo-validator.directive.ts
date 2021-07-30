import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {Collegue} from '../models';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Directive({
  selector: '[appPseudoValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective,
    multi: true
  }]
})
export class PseudoValidatorDirective implements AsyncValidator {

  constructor(private http: HttpClient) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.get<Collegue>(environment.urlResourceCollegue + '/' + control.value)
      .pipe(
        map(collegue => {
          return collegue ? {usernameExists: true} : null
        }))
  }

}
