import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService} from '../product.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductRelated } from '../ProductRelated';
@Component({
  selector:'app-product',
  templateUrl:'./product.component.html'
})
export class ProductComponent implements OnInit {
   currentProduct: Product =  this.resetProduct();

  //INYECTAMOS EL SERVICIO
  constructor(
    private productService: ProductService,
    private activedRoute: ActivatedRoute,
    private route:Router,

  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let productoId:string="";
         if (params.get("id")){
          productoId = params.get("id")!;
           this.findById(parseInt(productoId));
         }
      }
    )
  }

  save():void{
     this.productService.save(this.currentProduct)
     .subscribe(
      (response) => {
        console.log("registro guardado");
         this.currentProduct = this.resetProduct();
         this.route.navigate(['/layout/product-list']);
        }
      )
     }
//Read
findById(productoId: number): void{
  this.productService.findById(productoId)
  .subscribe(
    (response:Product)=> {
     this.currentProduct = response;
     this.currentProduct.products.forEach(
      (item:ProductRelated) => {
        this.productService.findById(item.productId).subscribe(
          (auth:Product) => item.name = auth.name
        )

      }
    )
    }
  )
}

resetProduct(){
  return this.currentProduct = {
    productoId: 0,
    name:"",
    descripcion: "",
    marca:"",
    modelo:"",
    personId:0,
    enable:true,
    products: [],
    created:new Date(),
    updated:new Date()

  };

 }

 delete():void{
  this.productService.deleteById(this.currentProduct.productoId)
  .subscribe(
    () => {
      this.resetProduct();
    }
  )
}


onSelect(product:Product): void {
  let productRelated:ProductRelated= {
   productoId:this.currentProduct.productoId,
   productId:product.productoId,
   id:0,
   name:product.name

  }
  console.log(product);
  this.currentProduct.products.push(productRelated);
}

removeProduct(id: number){
  this.currentProduct.products =
  this.currentProduct.products.filter(
    (item) => item.productId != id
  )
}


}
