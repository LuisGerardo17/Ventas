import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from '../../products/product.service';
import { Products } from '../../products/product';
import { ClientProduct } from '../ClientProduct';
@Component({
  selector: 'app.client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  currentClient: Client =  this.resetClient();

  //INYECTAMOS EL SERVICIO
  constructor(
    private clientService: ClientService,
    private activedRoute: ActivatedRoute,
    private route:Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let clientId:string;
         if (params.get("id")){
          clientId = params.get("id")!;
          console.log("el id es:" + params.get("id"));
          console.log("el id convertido es:" + clientId);
          this.findById(parseInt(clientId));
         }
      }
    )
}

  save():void{
    this.clientService.save(this.currentClient).subscribe(
      (response) => {
        console.log("registro guardado");
         this.currentClient = this.resetClient();
         this.route.navigate(['/layout/client-list']);
        }
    )
  }

//Read
findById(clientId:number): void{
  this.clientService.findById(clientId)
  .subscribe(
    (response:Client )=> {
    this.currentClient = response;
    this.currentClient.products.forEach(
      (item: ClientProduct) => {
        this.productsService.findById(item.productoId).subscribe(
          (products:Products) => item.name = products.name)
        }
      )
    }
  )
}
resetClient(){
return this.currentClient = {
  clientId: 0,
  name:"",
  dni: "",
  phone: "",
  email: "",
  created: new Date(),
  updated: new Date(),
  enable: true,
  acesorId: 0,
  products: []

};
}

delete():void{
  this.clientService.deleteById(this.currentClient.clientId)
  .subscribe(
    () => {
      console.log("Registro eliminado");
      this.currentClient =this.resetClient();
    }
  )
}


onSelect(products:Products): void {
  let clientProduct= {
    clientId:this.currentClient.clientId,
    productoId:products.productoId,
    id:0,
    name:products.name
  }
  console.log(products);
  this.currentClient.products.push(clientProduct);
}

removeProduct(id: number){
  this.currentClient.products =
  this.currentClient.products.filter(
    (item: { productoId: number; }) => item.productoId != id
  )
}

}
