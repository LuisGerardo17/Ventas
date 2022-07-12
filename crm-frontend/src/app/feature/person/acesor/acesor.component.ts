import { Component, OnInit } from '@angular/core';
import { Acesor } from './acesor';
import { AcesorService } from './acesor.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app.acesor',
  templateUrl: './acesor.component.html',
 // styleUrls: ['./person.component.css']
})
export class AcesorComponent implements OnInit {
   currentAcesor: Acesor = {
    acesorId: 0,
    name:"",
    dni: ""
   };
  //INYECTAMOS EL SERVICIO
  constructor(
    private personService: PersonService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe;{
      (params) => {
        let id:string;
         if (params.get("id")){
          id = params.get("id")!;
          console.log("el id es:" + params.get("id"));
          console.log("el id convertido es:" + id);
          this.findById(parseInt(id));
         }
      }
    }
}
  save():void{
     this.personService.save(this.currentPerson).subscribe(
      (response) => {
        console.log("registro guardado");
         this.currentPerson = {
          personId: 0,
          name:"",
          dni: ""
         };
        )
      }


//Read
findById(id:number): void{
  this.personService.findById(id)
  .subscribe(
    (response:Person )=> {
    this.currentPerson = response;

    }
  )
}

}




