export interface Products {
  productoId: number,
  name: string
}

import { ProductRelated } from "./ProductRelated";
export interface Product
 {
   productoId:number,
   name: string,
   descripcion: string,
   marca: string,
   modelo: string,
   personId: number,
   enable: boolean,
   created:Date,
   updated:Date,
   products: ProductRelated[]

}
