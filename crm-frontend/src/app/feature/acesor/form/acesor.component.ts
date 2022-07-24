import { Component, OnInit } from '@angular/core';
import { Acesor } from '../acesor';
import { AcesorService} from '../acesor.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ClientService } from '../../client/client.service';
import { Client } from '../../client/client';
@Component({
  selector:'app-acesor',
  templateUrl:'./acesor.component.html'
})
export class AcesorComponent implements OnInit {
   currentAcesor: Acesor =  this.resetAcesor();

  //INYECTAMOS EL SERVICIO
  constructor(
    private acesorService: AcesorService,
    private activedRoute: ActivatedRoute,
    private route:Router,
    private clientService: ClientService
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
     this.acesorService.save(this.currentAcesor)
     .subscribe(
      (response) => {
        console.log("registro guardado");
         this.currentAcesor = this.resetAcesor();
         this.route.navigate(['/layout/acesor-list']);
        }
      )
     }
//Read
findById(acesorId: number): void{
  this.acesorService.findById(acesorId)
  .subscribe(
    (response:Acesor)=> {
     this.currentAcesor = response;
     this.currentAcesor.clients.forEach(
      (item) => {
        this.clientService.findById(item.clientId).subscribe(
          (auth:Client) => item.name = auth.name
        )

      }
    )
    }
  )
}

resetAcesor(){
  return this.currentAcesor = {
    acesorId: 0,
    nombre:"",
    telefono: "",
    email:"",
    personId:0,
    enabled:true,
    clients: [],
    created:new Date(),
    updated:new Date()

  };

 }

 delete():void{
  this.acesorService.deleteById(this.currentAcesor.acesorId)
  .subscribe(
    () => {
      this.resetAcesor();
    }
  )
}


onSelect(client:Client): void {
  this.currentAcesor.clients.push(client);
}

removeClient(id: number){
  this.currentAcesor.clients =
  this.currentAcesor.clients.filter(
    (item) => item.clientId != id
  )
}


}




