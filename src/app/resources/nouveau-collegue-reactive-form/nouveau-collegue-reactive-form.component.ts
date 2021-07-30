import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Collegue} from "../../models";
import { DataService } from '../../Common/services/data.service';

@Component({
  selector: 'app-nouveau-collegue-reactive-form',
  templateUrl: './nouveau-collegue-reactive-form.component.html',
  styleUrls: ['./nouveau-collegue-reactive-form.component.css']
})
export class NouveauCollegueReactiveFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  collegue?: Collegue

  constructor(
    private formBuilder: FormBuilder,
    private service: DataService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pseudo: ['', [Validators.required, Validators.min(2)]],
      nom: ['', [Validators.required, Validators.min(2)]],
      prenom: ['', [Validators.required, Validators.min(2)]],
      photo: ['', [Validators.required ,Validators.min(2)]],
    })
    console.log(this.form.controls)
  }

  get f() {return this.form.controls}

  get formAll() {return this.form}

  createCollegue() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.controls.prenom.errors)
    // this.service.createCollegue(this.form.value).subscribe()
  }

}
