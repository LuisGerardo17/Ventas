import { Component, OnInit } from '@angular/core';
import { Acesor } from './acesor';
import { AcesorService } from './acesor.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-acesor',
  templateUrl: './acesor.component.html'
})
export class AcesorComponent implements OnInit {
   currentAcesor: Acesor = {
    acesorId: 0,
    nombre:"",
    telefono: "",
    email:"",
    equipoid:"",
    enabled:true,
    created:new Date(),
    updated:new Date()
   };
  //INYECTAMOS EL SERVICIO
  constructor(
    private acesorService: AcesorService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let acesorId:string="";
         if (params.get("id")){
          acesorId = params.get("id")!;
           this.findById(parseInt(acesorId));
         }
      }
    )
  }

  save():void{
     this.acesorService.save(this.currentAcesor).subscribe(
      (response) => {
        console.log("registro guardado");
         this.currentAcesor = {
          acesorId: 0,
          nombre:"",
          telefono: "",
          email:"",
          equipoid:"",
          enabled:true,
          created:new Date(),
          updated:new Date()
         };
       }
       )
      }
//Read
findById(acesorId: number): void{
  this.acesorService.findById(acesorId)
  .subscribe(
    (response:Acesor)=> {
    console.log("registro encontrado");
    this.currentAcesor = response;

    }
  )
}

}




