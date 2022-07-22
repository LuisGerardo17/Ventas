import { Component, OnInit } from '@angular/core';
import { Acesor } from '../acesor';
import { AcesorService } from '../acesor.service';

@Component({
  selector: 'app-acesor-list',
  templateUrl: './acesor-list.component.html',
})
export class AcesorListComponent implements OnInit {

  constructor(
    private acesorService:AcesorService
  ) {}
  acesores:Acesor[]=[];//arreglo para mostrar los datos

  ngOnInit(): void {
    this.findAll();
  }


  findAll():void {
    this.acesorService.findAll().subscribe(
      (response: Acesor[]) => {
        this.acesores = response;
      }
    );
  }

  findByName(term: string){
    if (term.length===0){
      this.findAll();
    }

    if (term.length>=2){
      this.acesorService.findByName(term).subscribe(
        (response: Acesor[]) => this.acesores = response
      )
    }
  }

}
