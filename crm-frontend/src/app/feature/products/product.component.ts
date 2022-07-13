import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

    currentProduct: Product = {
    productoId: 0,
    nombre: '',
    descripcion: '' ,
    marca: '',
    modelo: '',
    created:new Date(),
    updated:new Date(),
    enable: false
  };
//INYECTAMOS EL SERVICIO
  constructor(
    private productService: ProductService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params)=>{
        let productoId:string="";
        if (params.get("id")){
          productoId = params.get("id")!;
          this.findById(parseInt(productoId));
        }
      }
    )
  }

  save(): void {
    this.productService.save(this.currentProduct)
    .subscribe(
      (response) => {
        console.log("REGISTRO CON EXITO");
        this.currentProduct = {
          productoId: 0,
          nombre: "",
          descripcion: "",
          marca: "",
          modelo: "",
          created:new Date(),
          updated:new Date(),
          enable: false
        }
      }
    )
  }

  findById(productoId: number): void{
    this.productService.findById(productoId)
    .subscribe(
      (response: Product) => {
        console.log("PRODUCTO  ENCONTRADO");
        this.currentProduct=response
      }
    )
  }

}
