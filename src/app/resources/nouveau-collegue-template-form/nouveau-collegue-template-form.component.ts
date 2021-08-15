import { Component, OnInit } from '@angular/core';
import { Collegue } from '../../models';
import { DataService } from '../../Common/services/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {
  collegue: Collegue = {
    pseudo: '',
    nom: '',
    prenom: '',
    photo: '',
    score: 100
  };

  constructor(
    private service: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createCollegue(){
    console.log(this.collegue)
    this.service.createCollegue({
      pseudo: this.collegue.pseudo,
      nom: this.collegue.nom,
      prenom: this.collegue.prenom,
      photo: this.collegue.photo,
      score: this.collegue.score
    }).subscribe(collegue => {
        this.router.navigate([''])
      }
    )

  }

}
