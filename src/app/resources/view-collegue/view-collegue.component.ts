import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { DataService } from 'src/app/Common/services/data.service';
import { Collegue } from 'src/app/models';

@Component({
  selector: 'app-view-collegue',
  templateUrl: './view-collegue.component.html',
  styleUrls: ['./view-collegue.component.css']
})
export class ViewCollegueComponent implements OnInit {

  pseudo?: string | null;
  collegue?: Collegue;

  constructor(
    private route: ActivatedRoute,
    private service: DataService
  ) {
    this.pseudo = route.snapshot.paramMap.get("pseudo");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const pseudo: string | null = params.get("pseudo");
      this.service.getCollegueByPseudo(pseudo).subscribe(collegue => {
        this.collegue = collegue;
      })
    })
  }

}
