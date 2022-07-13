import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app.client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
   currentClient: Client = {
    clientId: 0,
    name:"",
    dni: "",
    phone: "",
    email: "",
    created: new Date(),
    updated: new Date(),
    enable: false

   };
  //INYECTAMOS EL SERVICIO
  constructor(
    private clientService: ClientService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe;{
      (params: { get: (arg0: string) => string; }) => {
        let clientId:string;
         if (params.get("id")){
          clientId = params.get("id")!;
          console.log("el id es:" + params.get("id"));
          console.log("el id convertido es:" + clientId);
          this.findById(parseInt(clientId));
         }
      }
    }
}
  save():void{
     this.clientService.save(this.currentClient).subscribe(
      (response: any) => {
        console.log("registro guardado");
         this.currentClient = {
          clientId: 0,
          name:"",
          dni: "",
          phone: "",
          email: "",
          created: new Date(),
          updated: new Date(),
          enable: false
         };
        }
        )

      }


//Read
findById(clientId:number): void{
  this.clientService.findById(clientId)
  .subscribe(
    (response:Client )=> {
    this.currentClient = response;

    }
  )
}

}




